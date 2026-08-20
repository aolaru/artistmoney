import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { loadExportedDataModule } from "./load-data-module.mjs";

const METRICS_PATH = resolve("src/data/platformMetrics.ts");
const SONG_DIR = resolve("src/data/songs");
const ARTIST_DIR = resolve("src/data/artists");
const REPORT_DIR = resolve(".autopilot");
const REPORT_PATH = resolve(REPORT_DIR, "platform-metrics-result.json");
const SUMMARY_PATH = resolve(REPORT_DIR, "platform-metrics-summary.md");
const limit = Number.parseInt(process.env.PLATFORM_METRICS_LIMIT ?? "50", 10);
const today = new Date().toISOString().slice(0, 10);

function readJsonCollection(directory) {
  return readdirSync(directory)
    .filter((file) => file.endsWith(".json"))
    .map((file) => JSON.parse(readFileSync(resolve(directory, file), "utf8")));
}

function normalizeText(value) {
  return String(value ?? "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function scoreSpotifyTrack(song, artistName, track) {
  const wantedTitle = normalizeText(song.title);
  const wantedArtist = normalizeText(artistName);
  const title = normalizeText(track.name);
  const artists = track.artists?.map((artist) => normalizeText(artist.name)).join(" ") ?? "";

  let score = 0;
  if (title === wantedTitle) score += 8;
  if (title.includes(wantedTitle) || wantedTitle.includes(title)) score += 3;
  if (artists.includes(wantedArtist) || wantedArtist.includes(artists)) score += 5;
  if (song.year && track.album?.release_date?.startsWith(String(song.year))) score += 2;

  return score;
}

async function fetchJson(url, options) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`Request failed (${response.status}) for ${url}`);
  }

  return response.json();
}

async function getSpotifyToken() {
  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
  if (!clientId || !clientSecret) return undefined;

  const credentials = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
  const payload = await fetchJson("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "grant_type=client_credentials"
  });

  return payload.access_token;
}

async function searchSpotifyTrack(song, artistName, token) {
  const query = new URLSearchParams({
    type: "track",
    limit: "5",
    q: `track:"${song.title}" artist:"${artistName}"`
  });
  const payload = await fetchJson(`https://api.spotify.com/v1/search?${query.toString()}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
  const candidates = payload.tracks?.items ?? [];
  const [best] = candidates
    .map((track) => ({ track, score: scoreSpotifyTrack(song, artistName, track) }))
    .sort((left, right) => right.score - left.score);

  return best?.score >= 8 ? best.track : undefined;
}

async function fetchSpotifyTrack(trackId, token) {
  return fetchJson(`https://api.spotify.com/v1/tracks/${trackId}`, {
    headers: { Authorization: `Bearer ${token}` }
  });
}

async function refreshSpotifyMetrics(metrics, songs, artistMap) {
  const result = { configured: true, attempted: 0, updated: 0, failures: [] };
  let token;

  try {
    token = await getSpotifyToken();
  } catch (error) {
    result.failures.push(`Token request failed: ${error.message}`);
    return result;
  }

  const orderedSongs = [...songs].sort((left, right) => {
    const leftMetric = metrics[left.slug];
    const rightMetric = metrics[right.slug];
    const leftSeeded = leftMetric ? 1 : 0;
    const rightSeeded = rightMetric ? 1 : 0;
    const leftNeedsSpotify = leftMetric?.spotifyPopularity === undefined ? 1 : 0;
    const rightNeedsSpotify = rightMetric?.spotifyPopularity === undefined ? 1 : 0;

    return (
      rightSeeded - leftSeeded ||
      rightNeedsSpotify - leftNeedsSpotify ||
      left.slug.localeCompare(right.slug)
    );
  });
  for (const song of orderedSongs.slice(0, limit)) {
    const artistName = artistMap.get(song.artist)?.name ?? song.artist;
    const current = metrics[song.slug] ?? {};

    try {
      result.attempted += 1;
      const track = current.spotifyTrackId
        ? await fetchSpotifyTrack(current.spotifyTrackId, token)
        : await searchSpotifyTrack(song, artistName, token);

      if (!track?.id) continue;

      metrics[song.slug] = {
        ...current,
        spotifyTrackId: track.id,
        spotifyPopularity: track.popularity,
        lastChecked: today
      };
      result.updated += 1;
    } catch (error) {
      console.warn(`Spotify refresh skipped for ${song.slug}: ${error.message}`);
      result.failures.push(`${song.slug}: ${error.message}`);
    }
  }

  return result;
}

async function refreshYouTubeMetrics(metrics) {
  const apiKey = process.env.YOUTUBE_API_KEY;
  if (!apiKey) {
    console.log("YouTube refresh skipped: YOUTUBE_API_KEY is not set.");
    return { configured: false, attempted: 0, updated: 0, failures: [] };
  }

  const entries = Object.entries(metrics)
    .filter(([, metric]) => metric.youtubeVideoId)
    .sort(([leftSlug, leftMetric], [rightSlug, rightMetric]) => {
      const leftNeedsViews = leftMetric.youtubeViews === undefined ? 1 : 0;
      const rightNeedsViews = rightMetric.youtubeViews === undefined ? 1 : 0;

      return rightNeedsViews - leftNeedsViews || leftSlug.localeCompare(rightSlug);
    })
    .slice(0, limit);
  const result = { configured: true, attempted: entries.length, updated: 0, failures: [] };

  for (let index = 0; index < entries.length; index += 50) {
    const chunk = entries.slice(index, index + 50);
    const ids = chunk.map(([, metric]) => metric.youtubeVideoId).join(",");
    const query = new URLSearchParams({
      part: "statistics",
      id: ids,
      key: apiKey
    });

    try {
      const payload = await fetchJson(`https://www.googleapis.com/youtube/v3/videos?${query.toString()}`);
      const viewsById = new Map(
        (payload.items ?? []).map((item) => [item.id, Number.parseInt(item.statistics?.viewCount ?? "0", 10)])
      );

      for (const [slug, metric] of chunk) {
        const youtubeViews = viewsById.get(metric.youtubeVideoId);
        if (!Number.isFinite(youtubeViews)) continue;

        metrics[slug] = {
          ...metric,
          youtubeViews,
          lastChecked: today
        };
        result.updated += 1;
      }
    } catch (error) {
      console.warn(`YouTube refresh skipped for video batch ${index / 50 + 1}: ${error.message}`);
      result.failures.push(`Batch ${index / 50 + 1}: ${error.message}`);
    }
  }

  return result;
}

function formatString(value) {
  return JSON.stringify(value);
}

function formatMetric(metric) {
  const fields = [
    ["spotifyTrackId", metric.spotifyTrackId],
    ["spotifyPopularity", metric.spotifyPopularity],
    ["youtubeVideoId", metric.youtubeVideoId],
    ["youtubeViews", metric.youtubeViews],
    ["youtubeSource", metric.youtubeSource],
    ["lastChecked", metric.lastChecked]
  ].filter(([, value]) => value !== undefined);

  if (fields.length === 0) return "{}";

  const body = fields
    .map(([key, value]) => {
      const formatted = typeof value === "string" ? formatString(value) : String(value);
      return `    ${key}: ${formatted}`;
    })
    .join(",\n");

  return `{\n${body}\n  }`;
}

function writeMetrics(metrics) {
  const sortedEntries = Object.entries(metrics)
    .filter(([, metric]) => Object.keys(metric).length > 0)
    .sort(([left], [right]) => left.localeCompare(right));
  const body = sortedEntries
    .map(([slug, metric]) => `  ${formatString(slug)}: ${formatMetric(metric)}`)
    .join(",\n");
  const source = `export type PlatformMetricSource = "official_video" | "official_audio" | "lyric_video" | "topic";

export type SongPlatformMetrics = {
  spotifyTrackId?: string;
  spotifyPopularity?: number;
  youtubeVideoId?: string;
  youtubeViews?: number;
  youtubeSource?: PlatformMetricSource;
  lastChecked?: string;
};

export const songPlatformMetrics: Record<string, SongPlatformMetrics> = {
${body}
};
`;

  writeFileSync(METRICS_PATH, source);
}

function writeRunReport(result) {
  const configuredProviders = [result.youtube, result.spotify].filter((provider) => provider.configured).length;
  const failures = [...result.youtube.failures, ...result.spotify.failures];
  const status = configuredProviders === 0 ? "skipped" : failures.length > 0 ? "degraded" : "refreshed";
  const report = { ...result, status, configuredProviders, failures };
  const providerLine = (name, provider) =>
    `- ${name}: ${provider.configured ? "configured" : "not configured"}; ${provider.updated}/${provider.attempted} records updated; ${provider.failures.length} failures`;
  const lines = [
    "# Platform metrics refresh",
    "",
    `- Status: **${status}**`,
    `- Checked: ${today}`,
    providerLine("YouTube", result.youtube),
    providerLine("Spotify", result.spotify),
    ""
  ];

  if (status === "skipped") {
    lines.push("No provider credentials were available. No metric data was refreshed.", "");
  }
  if (failures.length > 0) {
    lines.push("## Failures", "", ...failures.map((failure) => `- ${failure}`), "");
  }

  mkdirSync(REPORT_DIR, { recursive: true });
  writeFileSync(REPORT_PATH, `${JSON.stringify(report, null, 2)}\n`);
  writeFileSync(SUMMARY_PATH, `${lines.join("\n")}\n`);

  if (status === "skipped" || status === "degraded") {
    console.warn(`::warning::Platform metrics refresh ${status}. See the workflow summary for details.`);
  }
}

async function main() {
  if (!existsSync(METRICS_PATH)) {
    throw new Error(`Missing metrics file: ${METRICS_PATH}`);
  }

  const metrics = await loadExportedDataModule(METRICS_PATH, "songPlatformMetrics");
  const youtube = await refreshYouTubeMetrics(metrics);
  let spotify = { configured: false, attempted: 0, updated: 0, failures: [] };

  if (process.env.SPOTIFY_CLIENT_ID && process.env.SPOTIFY_CLIENT_SECRET) {
    const songs = readJsonCollection(SONG_DIR);
    const artists = readJsonCollection(ARTIST_DIR);
    const artistMap = new Map(artists.map((artist) => [artist.slug, artist]));
    spotify = await refreshSpotifyMetrics(metrics, songs, artistMap);
  } else {
    console.log("Spotify refresh skipped: SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET are not set.");
  }

  writeMetrics(metrics);
  writeRunReport({ youtube, spotify });
  console.log(`Updated platform metrics: ${youtube.updated} YouTube, ${spotify.updated} Spotify.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
