import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildAlbums, fetchAlbumMetadata, renderFile } from "./generate-album-metadata.mjs";
import { loadExportedDataModule } from "./load-data-module.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const artistDir = path.join(rootDir, "src", "data", "artists");
const songDir = path.join(rootDir, "src", "data", "songs");
const albumMetadataPath = path.join(rootDir, "src", "data", "albumMetadata.ts");
const artistMetadataPath = path.join(rootDir, "src", "data", "artistMetadata.ts");
const statePath = path.join(rootDir, "data", "autopilot-state.json");
const summaryDir = path.join(rootDir, ".autopilot");
const summaryPath = path.join(summaryDir, "summary.md");
const outputPath = path.join(summaryDir, "result.json");

const artistMissingFields = [
  "genre",
  "country",
  "active_since",
  "bio",
  "notable_for",
  "career_highlight",
  "revenue_drivers",
  "earnings",
  "ownership"
];
const songMissingFields = ["meaning_summary", "revenue_drivers", "related_songs", "earnings", "ownership"];
const albumMissingFields = ["fullTracklist"];
const bannedPhrases = [
  "catalog catalog",
  "durable durable",
  "long-tail long-tail",
  "easy to revisit, emotionally legible, and well-suited to long-tail catalog listening"
];
const MAX_ARTIST_CHANGES_PER_RUN = 2;
const MAX_SONG_CHANGES_PER_RUN = 3;
const MAX_ALBUM_CHANGES_PER_RUN = 1;
const MAX_CHANGES_PER_RUN = MAX_ARTIST_CHANGES_PER_RUN + MAX_SONG_CHANGES_PER_RUN + MAX_ALBUM_CHANGES_PER_RUN;
const COOLDOWN_HOURS = 72;

function defaultState() {
  return {
    version: 1,
    cursors: {
      artist: 0,
      song: 0,
      album: 0
    },
    lastTouched: {
      artist: {},
      song: {},
      album: {}
    },
    recentRuns: []
  };
}

function titleizeSlug(slug) {
  return slug
    .split("-")
    .map((part) => (part.length <= 3 ? part.toUpperCase() : part[0].toUpperCase() + part.slice(1)))
    .join(" ");
}

function lowerPhrase(value, fallback) {
  return value ? value.toLowerCase() : fallback;
}

function genreFamily(genre) {
  const normalized = (genre ?? "").toLowerCase();

  if (normalized.includes("hip-hop") || normalized.includes("trap") || normalized.includes("rap")) return "hip-hop";
  if (normalized.includes("electronic") || normalized.includes("ambient") || normalized.includes("idm") || normalized.includes("techno")) return "electronic";
  if (normalized.includes("pop") || normalized.includes("r&b") || normalized.includes("soul")) return "pop";
  if (normalized.includes("rock") || normalized.includes("grunge") || normalized.includes("metal")) return "rock";

  return "general";
}

function getRotationSeed() {
  const seedInput = process.env.GITHUB_RUN_NUMBER
    ?? process.env.GITHUB_RUN_ID
    ?? process.env.AUTOPILOT_ROTATION_SEED
    ?? new Date().toISOString().slice(0, 13);

  let total = 0;
  for (const char of seedInput) total += char.charCodeAt(0);
  return total;
}

function pickRotatingEntry(entries, predicate, seed) {
  const matches = entries.filter(predicate).sort((left, right) => left.file.localeCompare(right.file));
  if (matches.length === 0) return null;
  return matches[seed % matches.length];
}

function pickRotatingValue(values, seed) {
  const sorted = [...values].sort((left, right) => String(left.slug ?? left).localeCompare(String(right.slug ?? right)));
  if (sorted.length === 0) return null;
  return sorted[seed % sorted.length];
}

async function readState() {
  try {
    const raw = await readFile(statePath, "utf8");
    const parsed = JSON.parse(raw);
    return {
      ...defaultState(),
      ...parsed,
      cursors: { ...defaultState().cursors, ...(parsed.cursors ?? {}) },
      lastTouched: { ...defaultState().lastTouched, ...(parsed.lastTouched ?? {}) },
      recentRuns: Array.isArray(parsed.recentRuns) ? parsed.recentRuns : []
    };
  } catch (error) {
    if (error.code === "ENOENT") return defaultState();
    throw error;
  }
}

async function writeState(state) {
  await writeFile(statePath, `${JSON.stringify(state, null, 2)}\n`, "utf8");
}

function isOnCooldown(lastTouchedAt, now) {
  if (!lastTouchedAt) return false;
  const lastTouched = new Date(lastTouchedAt).getTime();
  if (Number.isNaN(lastTouched)) return false;
  return now - lastTouched < COOLDOWN_HOURS * 60 * 60 * 1000;
}

function pickBatchByCursor(entries, cursor, limit) {
  if (entries.length === 0 || limit <= 0) {
    return {
      selected: [],
      cursor
    };
  }

  const selected = [];
  const count = Math.min(limit, entries.length);

  for (let index = 0; index < count; index += 1) {
    selected.push(entries[(cursor + index) % entries.length]);
  }

  return {
    selected,
    cursor: (cursor + count) % entries.length
  };
}

function compactSentence(text) {
  return text.replace(/\s+/g, " ").trim();
}

function parseMoneyToken(token) {
  const clean = token.replace(/[$,/year\s]/g, "").toUpperCase();
  const match = clean.match(/([0-9.]+)([KMB]?)/);
  if (!match) return null;

  const value = Number(match[1]);
  const multiplier = match[2] === "B" ? 1_000_000_000 : match[2] === "M" ? 1_000_000 : match[2] === "K" ? 1_000 : 1;

  return value * multiplier;
}

function parseRevenueRange(value) {
  const matches = String(value ?? "").match(/\$?[0-9][0-9.,]*(?:\.\d+)?\s*[KMB]?/gi) ?? [];
  const values = matches.map(parseMoneyToken).filter(Number.isFinite);

  if (values.length >= 2) return [values[0], values[1]];
  if (values.length === 1) return [values[0] * 0.75, values[0] * 1.25];

  return [100_000, 300_000];
}

function formatMoney(value) {
  if (value >= 1_000_000) {
    const millions = value / 1_000_000;
    return `$${millions >= 10 ? Math.round(millions) : Math.round(millions * 10) / 10}M`;
  }

  if (value >= 1_000) return `$${Math.round(value / 1_000)}K`;

  return `$${Math.round(value)}`;
}

function scaleRevenueRange(range, factor) {
  return `${formatMoney(range[0] * factor)}-${formatMoney(range[1] * factor)}/year`;
}

function modeledArtistEarnings(artist) {
  const artistSideRange = parseRevenueRange(artist.earnings?.artist_or_estate_share ?? artist.estimated_income);

  return {
    gross_catalog_revenue: scaleRevenueRange(artistSideRange, 2.8),
    artist_or_estate_share: artist.estimated_income,
    label_share: scaleRevenueRange(artistSideRange, 0.95),
    publisher_share: scaleRevenueRange(artistSideRange, 0.28),
    writer_share: scaleRevenueRange(artistSideRange, 0.42),
    assumptions: `Estimate keeps ${artist.name}'s headline range as the artist-side figure and models gross catalog, label, publishing, and writer lanes from that conservative annual range.`
  };
}

function modeledArtistOwnership(artist) {
  return {
    master_owner: "Likely split across label, distributor, and artist-affiliated rights depending on recording era",
    publishing_owner: "Writer and publisher splits materially affect final artist-side income",
    catalog_sale_status: "No full catalog sale assumption baked into this modeled range",
    notes: `${artist.name}'s page should be read as modeled artist-side annual income, not a public royalty statement. Ownership and label terms can materially change take-home economics.`
  };
}

function modeledSongEarnings(song) {
  const artistSideRange = parseRevenueRange(song.earnings?.artist_or_estate_share ?? song.estimated_revenue);

  return {
    gross_track_revenue: scaleRevenueRange(artistSideRange, 2.9),
    artist_or_estate_share: song.estimated_revenue,
    label_master_share: scaleRevenueRange(artistSideRange, 0.95),
    publishing_share: scaleRevenueRange(artistSideRange, 0.3),
    songwriter_share: scaleRevenueRange(artistSideRange, 0.42),
    assumptions: "Estimate keeps the headline range as the artist-side figure and models gross track, label, publishing, and songwriter lanes from that conservative annual range."
  };
}

function modeledSongOwnership(song) {
  return {
    master_owner: "Likely controlled through the recording label or distributor unless a specific rights sale is known",
    publishing_owner: "Writer and publisher splits affect the publishing share shown here",
    catalog_sale_status: "No specific catalog sale adjustment is modeled for this track",
    notes: `${song.title} is modeled from public-facing catalog behavior and conservative rights-split assumptions, not from audited royalty statements.`
  };
}

function artistRevenueDrivers(artist) {
  const family = genreFamily(artist.genre);

  if (family === "hip-hop") {
    return [
      "Recognizable catalog cuts keep drawing repeat streaming long after the original release cycle.",
      "Playlist memory and cultural recall help the strongest records stay active.",
      "Sampling, sync use, and nostalgia spikes can lift the baseline."
    ];
  }

  if (family === "electronic") {
    return [
      "Long-tail streaming and mood-based playlists keep the catalog commercially active.",
      "Deep-fan listening and reissue interest add value beyond the headline tracks.",
      "Instrumental or atmosphere-driven tracks can stay useful for sync over time."
    ];
  }

  if (family === "pop") {
    return [
      "Repeat streaming and playlist familiarity help the biggest songs keep earning after release.",
      "Broad recognition supports social reuse, rediscovery, and steady catalog listening.",
      "Licensing and event-driven playback can create recurring spikes."
    ];
  }

  if (family === "rock") {
    return [
      "Catalog streaming keeps the best-known songs active well beyond the original release cycle.",
      "Generational rediscovery supports durable long-tail listening.",
      "Film, television, sports, and trailer use can reactivate familiar recordings."
    ];
  }

  return [
    "Catalog streaming sustains earnings after the original release cycle ends.",
    "Playlist use and rediscovery keep durable songs in circulation.",
    "Licensing and long-tail audience demand extend catalog value over time."
  ];
}

function songRevenueDrivers(song, artist) {
  const family = genreFamily(artist?.genre);

  if (family === "hip-hop") {
    return [
      "Catalog streaming remains the main long-tail driver for recognizable rap tracks.",
      "Playlist placement and cultural recall help the song stay active.",
      "Sampling, sync use, and short-form rediscovery can extend earnings."
    ];
  }

  if (family === "electronic") {
    return [
      "Playlist and mood-based streaming support repeat listening over long periods.",
      "Steady niche demand and reissue interest can keep the track earning.",
      "Licensing and soundtrack-style use can materially improve the long tail."
    ];
  }

  if (family === "pop") {
    return [
      "Streaming scale and playlist inclusion remain the largest recurring drivers.",
      "A durable hook and broad familiarity help the song keep earning across catalog listening.",
      "Sync, social reuse, and seasonal spikes can lift the baseline."
    ];
  }

  if (family === "rock") {
    return [
      "Classic replay value and catalog streaming keep major rock songs relevant.",
      "Cultural familiarity supports long-tail listener demand.",
      "Sync placements and live-culture recognition help extend the song's revenue life."
    ];
  }

  return [
    "Streaming and catalog discovery keep the song generating recurring revenue.",
    "Playlist longevity supports steady repeat listening.",
    "Licensing and cultural familiarity can add earnings beyond baseline streams."
  ];
}

function songMeaningSummary(song, artist) {
  const family = genreFamily(artist?.genre);

  if (family === "hip-hop") {
    return "This track pairs a memorable hook with strong cultural recall, which helps explain its staying power and long-tail commercial value.";
  }

  if (family === "electronic") {
    return "This recording leans on atmosphere, texture, and replayable mood, which makes it durable in listener memory and long-tail streaming.";
  }

  if (family === "pop") {
    return "This song combines direct emotion with a strong melodic center, making it easy to revisit and commercially durable.";
  }

  if (family === "rock") {
    return "This song holds value through a recognizable core riff or chorus, strong emotional payoff, and steady replay.";
  }

  return `${song.title} stays durable because it is easy to revisit and well suited to long-tail catalog listening.`;
}

async function readJsonCollection(directory) {
  const entries = await readdir(directory);
  const jsonFiles = entries.filter((entry) => entry.endsWith(".json")).sort();

  return Promise.all(
    jsonFiles.map(async (file) => {
      const absolutePath = path.join(directory, file);
      const content = await readFile(absolutePath, "utf8");
      return {
        path: absolutePath,
        file,
        data: JSON.parse(content)
      };
    })
  );
}

function hasAnyMissingFields(record, fields) {
  return fields.some((field) => record[field] === undefined);
}

function validateTextField(value, label) {
  if (!value || typeof value !== "string") return;

  const normalized = compactSentence(value).toLowerCase();

  if (normalized.length < 40) {
    throw new Error(`${label} is too short to be useful.`);
  }

  for (const phrase of bannedPhrases) {
    if (normalized.includes(phrase)) {
      throw new Error(`${label} contains a banned repeated phrase: "${phrase}".`);
    }
  }
}

function validateStringArray(values, label) {
  if (!values) return;
  if (!Array.isArray(values) || values.length === 0) {
    throw new Error(`${label} must be a non-empty array when present.`);
  }

  const seen = new Set();
  for (const value of values) {
    if (typeof value !== "string") {
      throw new Error(`${label} must only contain strings.`);
    }

    const normalized = compactSentence(value);
    if (normalized.length < 12) {
      throw new Error(`${label} contains an item that is too short.`);
    }

    const fingerprint = normalized.toLowerCase();
    if (seen.has(fingerprint)) {
      throw new Error(`${label} contains duplicate items.`);
    }
    seen.add(fingerprint);
  }
}

function validateSlugArray(values, currentSlug, songMap, label) {
  if (!values) return;
  if (!Array.isArray(values) || values.length === 0) {
    throw new Error(`${label} must be a non-empty array when present.`);
  }

  const seen = new Set();
  for (const slug of values) {
    if (typeof slug !== "string") {
      throw new Error(`${label} must only contain slugs.`);
    }
    if (slug === currentSlug) {
      throw new Error(`${label} cannot contain the page's own slug.`);
    }
    if (!songMap.has(slug)) {
      throw new Error(`${label} references a missing song slug: ${slug}.`);
    }
    if (seen.has(slug)) {
      throw new Error(`${label} contains duplicate slugs.`);
    }
    seen.add(slug);
  }
}

function validateArtistRecord(artist) {
  validateTextField(artist.bio, `artist:${artist.slug}:bio`);
  validateTextField(artist.notable_for, `artist:${artist.slug}:notable_for`);
  validateTextField(artist.career_highlight, `artist:${artist.slug}:career_highlight`);
  validateStringArray(artist.revenue_drivers, `artist:${artist.slug}:revenue_drivers`);
}

function validateSongRecord(song, songMap) {
  validateTextField(song.meaning_summary, `song:${song.slug}:meaning_summary`);
  validateStringArray(song.revenue_drivers, `song:${song.slug}:revenue_drivers`);
  validateSlugArray(song.related_songs, song.slug, songMap, `song:${song.slug}:related_songs`);
}

function mergeArtistBackfill(artist, songMap) {
  const artistMetadata = globalThis.__artistMetadata?.[artist.slug];
  const topSongTitles = artist.top_songs
    .map((slug) => songMap.get(slug)?.title ?? titleizeSlug(slug))
    .slice(0, 2);

  const updates = {};

  if (!artist.genre && artistMetadata?.genre) {
    updates.genre = artistMetadata.genre;
  }

  if (!artist.country && artistMetadata?.country) {
    updates.country = artistMetadata.country;
  }

  if (!artist.active_since && artistMetadata?.activeSince) {
    updates.active_since = artistMetadata.activeSince;
  }

  if (!artist.bio) {
    if (artistMetadata?.summary) {
      updates.bio = artistMetadata.summary;
    } else {
      const catalogDescriptor = artist.genre ? `${lowerPhrase(artist.genre, "music")} catalog` : "catalog";
      updates.bio = `${artist.name} has a durable ${catalogDescriptor} that continues to attract listeners through streaming, playlists, and replay value.`;
    }
  }

  if (!artist.notable_for) {
    updates.notable_for = topSongTitles.length > 0
      ? `${artist.name} remains closely associated with ${topSongTitles.join(" and ")}, which still anchor attention around the catalog.`
      : `${artist.name} maintains a catalog with durable replay value and recurring listener demand.`;
  }

  if (!artist.career_highlight) {
    updates.career_highlight = topSongTitles.length > 0
      ? `Songs like ${topSongTitles.join(" and ")} still help define the catalog's long-tail earnings profile.`
      : "The catalog still shows long-tail value through streaming, playlist placement, and recurring discovery.";
  }

  if (!artist.revenue_drivers) {
    updates.revenue_drivers = artistRevenueDrivers(artist);
  }

  if (!artist.earnings) {
    updates.earnings = modeledArtistEarnings(artist);
  }

  if (!artist.ownership) {
    updates.ownership = modeledArtistOwnership(artist);
  }

  return Object.keys(updates).length > 0 ? { ...artist, ...updates } : null;
}

function mergeSongBackfill(song, artist, relatedSongs) {
  const updates = {};

  if (!song.meaning_summary) {
    updates.meaning_summary = songMeaningSummary(song, artist);
  }

  if (!song.revenue_drivers) {
    updates.revenue_drivers = songRevenueDrivers(song, artist);
  }

  if (!song.related_songs && relatedSongs.length > 0) {
    updates.related_songs = relatedSongs.slice(0, 3).map((entry) => entry.slug);
  }

  if (!song.earnings) {
    updates.earnings = modeledSongEarnings(song);
  }

  if (!song.ownership) {
    updates.ownership = modeledSongOwnership(song);
  }

  return Object.keys(updates).length > 0 ? { ...song, ...updates } : null;
}

async function writeSummary(result) {
  await mkdir(summaryDir, { recursive: true });

  const lines = [
    "# Autopilot run summary",
    "",
    `- Rotation seed: \`${result.seed}\``,
    `- Cursor state: artist=\`${result.cursors.artist}\`, song=\`${result.cursors.song}\`, album=\`${result.cursors.album}\``,
    `- Changed files: ${result.changes.length ? result.changes.length : 0}`,
    `- Validation: ${result.validation}`,
    ""
  ];

  if (result.changes.length > 0) {
    lines.push("## Changes", "");
    for (const change of result.changes) {
      lines.push(`- \`${change.kind}\` \`${change.slug}\` in \`${change.file}\``);
      lines.push(`  Fields added: ${change.fields.join(", ")}`);
    }
    lines.push("");
  } else {
    lines.push("## Changes", "", "- No missing editorial fields were found in scope.", "");
  }

  lines.push("## Guardrails", "");
  lines.push(`- Max changes per run: ${MAX_CHANGES_PER_RUN}`);
  lines.push(`- Artist changes per run: ${MAX_ARTIST_CHANGES_PER_RUN}`);
  lines.push(`- Song changes per run: ${MAX_SONG_CHANGES_PER_RUN}`);
  lines.push(`- Album changes per run: ${MAX_ALBUM_CHANGES_PER_RUN}`);
  lines.push(`- Cooldown window: ${COOLDOWN_HOURS} hours`);
  lines.push("");

  if (result.skipped.length > 0) {
    lines.push("## Skipped", "");
    for (const skipped of result.skipped) {
      lines.push(`- \`${skipped.kind}\` \`${skipped.slug}\`: ${skipped.reason}`);
    }
    lines.push("");
  }

  if (result.recentRuns.length > 0) {
    lines.push("## Recent runs", "");
    for (const run of result.recentRuns) {
      lines.push(`- ${run.timestamp}: ${run.summary}`);
    }
    lines.push("");
  }

  lines.push(
    "## Scope",
    "",
    "- Existing artists, songs, and albums only",
    "- No new files should be created by the updater",
    "- Build must pass before changes are published",
    ""
  );

  await writeFile(summaryPath, `${lines.join("\n")}\n`, "utf8");
  await writeFile(outputPath, `${JSON.stringify(result, null, 2)}\n`, "utf8");
}

export async function main() {
  globalThis.__artistMetadata = await loadExportedDataModule(artistMetadataPath, "artistMetadata");
  const albumMetadata = await loadExportedDataModule(albumMetadataPath, "albumMetadata");
  const state = await readState();
  const artistFiles = await readJsonCollection(artistDir);
  const songFiles = await readJsonCollection(songDir);
  const songMap = new Map(songFiles.map((entry) => [entry.data.slug, entry.data]));
  const artistMap = new Map(artistFiles.map((entry) => [entry.data.slug, entry.data]));
  const songsByArtist = new Map();
  const now = Date.now();

  for (const entry of songFiles) {
    const existing = songsByArtist.get(entry.data.artist) ?? [];
    existing.push(entry.data);
    songsByArtist.set(entry.data.artist, existing);
  }

  const seed = getRotationSeed();
  const changes = [];
  const skipped = [];

  const candidateArtists = artistFiles
    .filter((entry) => hasAnyMissingFields(entry.data, artistMissingFields))
    .sort((left, right) => left.file.localeCompare(right.file));
  const eligibleArtists = candidateArtists.filter((entry) => !isOnCooldown(state.lastTouched.artist[entry.data.slug], now));
  const artistBatch = pickBatchByCursor(eligibleArtists, state.cursors.artist, MAX_ARTIST_CHANGES_PER_RUN);
  state.cursors.artist = artistBatch.cursor;

  if (artistBatch.selected.length === 0 && candidateArtists.length > 0) {
    skipped.push({
      kind: "artist",
      slug: candidateArtists[0].data.slug,
      reason: `all candidates are on cooldown for ${COOLDOWN_HOURS} hours`
    });
  }
  for (const artistEntry of artistBatch.selected) {
    const nextArtist = mergeArtistBackfill(artistEntry.data, songMap);
    if (nextArtist) {
      validateArtistRecord(nextArtist);
      await writeFile(artistEntry.path, `${JSON.stringify(nextArtist, null, 2)}\n`, "utf8");
      state.lastTouched.artist[nextArtist.slug] = new Date(now).toISOString();
      changes.push({
        kind: "artist",
        slug: nextArtist.slug,
        file: path.relative(rootDir, artistEntry.path),
        fields: artistMissingFields.filter((field) => artistEntry.data[field] === undefined && nextArtist[field] !== undefined)
      });
    }
  }

  const candidateSongs = songFiles
    .filter((entry) => hasAnyMissingFields(entry.data, songMissingFields))
    .sort((left, right) => left.file.localeCompare(right.file));
  const eligibleSongs = candidateSongs.filter((entry) => !isOnCooldown(state.lastTouched.song[entry.data.slug], now));
  const songBatch = pickBatchByCursor(eligibleSongs, state.cursors.song, MAX_SONG_CHANGES_PER_RUN);
  state.cursors.song = songBatch.cursor;

  if (songBatch.selected.length === 0 && candidateSongs.length > 0) {
    skipped.push({
      kind: "song",
      slug: candidateSongs[0].data.slug,
      reason: `all candidates are on cooldown for ${COOLDOWN_HOURS} hours`
    });
  }
  for (const songEntry of songBatch.selected) {
    const artist = artistMap.get(songEntry.data.artist);
    const relatedSongs = (songsByArtist.get(songEntry.data.artist) ?? []).filter((entry) => entry.slug !== songEntry.data.slug);
    const nextSong = mergeSongBackfill(songEntry.data, artist, relatedSongs);
    if (nextSong) {
      validateSongRecord(nextSong, songMap);
      await writeFile(songEntry.path, `${JSON.stringify(nextSong, null, 2)}\n`, "utf8");
      state.lastTouched.song[nextSong.slug] = new Date(now).toISOString();
      changes.push({
        kind: "song",
        slug: nextSong.slug,
        file: path.relative(rootDir, songEntry.path),
        fields: songMissingFields.filter((field) => songEntry.data[field] === undefined && nextSong[field] !== undefined)
      });
    }
  }

  const albums = await buildAlbums();
  const incompleteAlbums = albums.filter((album) => {
    const existing = albumMetadata[album.slug];
    return !existing?.fullTracklist?.length;
  });
  const eligibleAlbums = incompleteAlbums.filter((album) => !isOnCooldown(state.lastTouched.album[album.slug], now));
  const albumBatch = pickBatchByCursor(eligibleAlbums, state.cursors.album, MAX_ALBUM_CHANGES_PER_RUN);
  state.cursors.album = albumBatch.cursor;

  if (albumBatch.selected.length === 0 && incompleteAlbums.length > 0) {
    skipped.push({
      kind: "album",
      slug: incompleteAlbums[0].slug,
      reason: `all candidates are on cooldown for ${COOLDOWN_HOURS} hours`
    });
  }

  for (const albumEntry of albumBatch.selected) {
    try {
      const nextAlbumMetadata = await fetchAlbumMetadata(albumEntry);
      if (nextAlbumMetadata.fullTracklist?.length) {
        const mergedAlbumMetadata = {
          ...albumMetadata,
          [albumEntry.slug]: {
            ...(albumMetadata[albumEntry.slug] ?? {}),
            ...nextAlbumMetadata
          }
        };

        await writeFile(albumMetadataPath, renderFile(mergedAlbumMetadata), "utf8");
        state.lastTouched.album[albumEntry.slug] = new Date(now).toISOString();
        changes.push({
          kind: "album",
          slug: albumEntry.slug,
          file: path.relative(rootDir, albumMetadataPath),
          fields: ["releaseDate", "label", "trackCount", "fullTracklist", "links"].filter((field) => {
            const previous = albumMetadata[albumEntry.slug]?.[field];
            const next = mergedAlbumMetadata[albumEntry.slug]?.[field];
            return JSON.stringify(previous) !== JSON.stringify(next);
          })
        });
      } else {
        skipped.push({
          kind: "album",
          slug: albumEntry.slug,
          reason: "no high-confidence full tracklist match was found"
        });
      }
    } catch (error) {
      skipped.push({
        kind: "album",
        slug: albumEntry.slug,
        reason: `album metadata lookup failed: ${error.message}`
      });
    }
  }

  if (changes.length > MAX_CHANGES_PER_RUN) {
    throw new Error(`Autopilot produced ${changes.length} changes, exceeding the cap of ${MAX_CHANGES_PER_RUN}.`);
  }

  const uniqueFiles = new Set(changes.map((change) => change.file));
  if (uniqueFiles.size !== changes.length) {
    throw new Error("Autopilot attempted to modify the same file more than once in a single run.");
  }

  const recentRuns = [
    {
      timestamp: new Date(now).toISOString(),
      summary: changes.length > 0
        ? changes.map((change) => `${change.kind}:${change.slug}`).join(", ")
        : skipped.length > 0
          ? `no changes; skipped ${skipped.length} candidate${skipped.length === 1 ? "" : "s"}`
          : "no changes"
    },
    ...state.recentRuns
  ].slice(0, 10);
  state.recentRuns = recentRuns;

  await writeState(state);

  const result = {
    seed,
    cursors: state.cursors,
    validation: "passed",
    changes,
    skipped,
    recentRuns
  };

  await writeSummary(result);

  if (changes.length === 0) {
    console.log("No missing editorial fields found. Nothing to update.");
    return;
  }

  console.log(`Updated ${changes.map((change) => `${change.kind}:${change.slug}`).join(", ")}`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch(async (error) => {
    await mkdir(summaryDir, { recursive: true });
    await writeFile(summaryPath, `# Autopilot run summary\n\n- Validation: failed\n- Error: ${error.message}\n`, "utf8");
    console.error(error);
    process.exit(1);
  });
}
