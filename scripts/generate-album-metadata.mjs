import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

import { songMetadata } from "../src/data/songMetadata.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const songsDir = path.join(rootDir, "src", "data", "songs");
const artistsDir = path.join(rootDir, "src", "data", "artists");
const outputPath = path.join(rootDir, "src", "data", "albumMetadata.ts");

function slugifyAlbumTitle(title) {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function getAlbumSlug(artistSlug, albumTitle) {
  return `${artistSlug}-${slugifyAlbumTitle(albumTitle)}`;
}

function normalize(value) {
  return value
    .toLowerCase()
    .replace(/\([^)]*(deluxe|expanded|anniversary|edition|remaster|bonus|complete)[^)]*\)/gi, " ")
    .replace(/\b(deluxe|expanded|anniversary|edition|remaster(ed)?|bonus|complete recordings?)\b/gi, " ")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function buildSearchLink(provider, artistName, albumTitle) {
  const query = encodeURIComponent(`${artistName} ${albumTitle}`);

  if (provider === "spotify") return `https://open.spotify.com/search/${query}`;
  if (provider === "youtubeMusic") return `https://music.youtube.com/search?q=${query}`;
  return undefined;
}

function extractLabel(copyright) {
  if (!copyright) return undefined;

  const patterns = [
    /under exclusive license to (.+?)(?:,|$)/i,
    /exclusively licensed to (.+?)(?:,|$)/i,
    /distributed by (.+?)(?:;|,|$)/i,
    /^[^A-Za-z]*[℗©]\s*\d{4}\s+(.+?)(?:,|;|$)/i
  ];

  for (const pattern of patterns) {
    const match = copyright.match(pattern);
    if (match?.[1]) {
      return match[1].replace(/\s+/g, " ").trim();
    }
  }

  return undefined;
}

function scoreAlbumMatch(result, albumTitle, artistName, expectedYear) {
  const normalizedAlbum = normalize(albumTitle);
  const normalizedArtist = normalize(artistName);
  const resultAlbum = normalize(result.collectionName ?? "");
  const resultArtist = normalize(result.artistName ?? "");
  let score = 0;

  if (resultAlbum === normalizedAlbum) score += 100;
  else if (resultAlbum.startsWith(normalizedAlbum)) score += 80;
  else if (resultAlbum.includes(normalizedAlbum)) score += 60;

  if (resultArtist === normalizedArtist) score += 40;
  else if (resultArtist.includes(normalizedArtist) || normalizedArtist.includes(resultArtist)) score += 20;

  if (expectedYear && result.releaseDate) {
    const foundYear = Number(result.releaseDate.slice(0, 4));
    if (foundYear === expectedYear) score += 20;
    else if (Math.abs(foundYear - expectedYear) <= 1) score += 8;
  }

  if (/(deluxe|expanded|anniversary|edition|remaster|complete recordings?)/i.test(result.collectionName ?? "")) {
    score -= 20;
  }

  return score;
}

async function fetchJson(url) {
  for (let attempt = 0; attempt < 5; attempt += 1) {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "ArtistMoney/1.0"
      }
    });

    if (response.ok) {
      return response.json();
    }

    if (response.status !== 429) {
      throw new Error(`Request failed (${response.status}) for ${url}`);
    }

    const retryDelay = 1200 * (attempt + 1);
    await new Promise((resolve) => setTimeout(resolve, retryDelay));
  }

  throw new Error(`Request failed (429) for ${url}`);
}

async function buildAlbums() {
  const [artistFiles, songFiles] = await Promise.all([
    fs.readdir(artistsDir),
    fs.readdir(songsDir)
  ]);

  const artistEntries = await Promise.all(
    artistFiles
      .filter((file) => file.endsWith(".json"))
      .map(async (file) => {
        const raw = await fs.readFile(path.join(artistsDir, file), "utf8");
        const artist = JSON.parse(raw);
        return [artist.slug, artist.name];
      })
  );

  const artistNames = Object.fromEntries(artistEntries);
  const albums = new Map();

  await Promise.all(
    songFiles.filter((file) => file.endsWith(".json")).map(async (file) => {
      const raw = await fs.readFile(path.join(songsDir, file), "utf8");
      const song = JSON.parse(raw);
      const supplemental = songMetadata[song.slug];
      const album = song.album ?? supplemental?.album;
      const year = song.year ?? supplemental?.year;

      if (!album) return;

      const key = getAlbumSlug(song.artist, album);

      if (!albums.has(key)) {
        albums.set(key, {
          slug: key,
          title: album,
          artistSlug: song.artist,
          artistName: artistNames[song.artist] ?? song.artist,
          year
        });
      }
    })
  );

  return [...albums.values()].sort((left, right) => left.slug.localeCompare(right.slug));
}

async function fetchAlbumMetadata(album) {
  const query = `${album.artistName} ${album.title}`;
  const searchUrl = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=album&limit=10`;
  const search = await fetchJson(searchUrl);
  const ranked = (search.results ?? [])
    .map((result) => ({ result, score: scoreAlbumMatch(result, album.title, album.artistName, album.year) }))
    .sort((left, right) => right.score - left.score);
  const best = ranked[0];

  const metadata = {
    releaseDate: album.year ? `${album.year}` : undefined,
    label: undefined,
    trackCount: undefined,
    editionNote: undefined,
    fullTracklist: undefined,
    links: {
      spotify: buildSearchLink("spotify", album.artistName, album.title),
      appleMusic: undefined,
      youtubeMusic: buildSearchLink("youtubeMusic", album.artistName, album.title)
    }
  };

  if (!best || best.score < 90) {
    return metadata;
  }

  const matched = best.result;
  metadata.releaseDate = matched.releaseDate?.slice(0, 10) ?? metadata.releaseDate;
  metadata.label = extractLabel(matched.copyright);
  metadata.trackCount = matched.trackCount;
  metadata.links.appleMusic = matched.collectionViewUrl;

  if (/(deluxe|expanded|anniversary|edition|remaster|complete recordings?)/i.test(matched.collectionName ?? "")) {
    metadata.editionNote = matched.collectionName;
  }

  if (matched.collectionId) {
    const lookup = await fetchJson(`https://itunes.apple.com/lookup?id=${matched.collectionId}&entity=song`);
    const tracks = (lookup.results ?? [])
      .filter((entry) => entry.wrapperType === "track" && entry.kind === "song")
      .map((entry) => ({
        discNumber: entry.discNumber,
        number: entry.trackNumber,
        title: entry.trackName,
        durationMs: entry.trackTimeMillis
      }))
      .sort((left, right) => {
        if ((left.discNumber ?? 1) !== (right.discNumber ?? 1)) {
          return (left.discNumber ?? 1) - (right.discNumber ?? 1);
        }

        return (left.number ?? 0) - (right.number ?? 0);
      });

    if (tracks.length) metadata.fullTracklist = tracks;
  }

  return metadata;
}

function renderFile(metadataEntries) {
  const body = JSON.stringify(metadataEntries, null, 2);

  return `export type AlbumTrack = {
  discNumber?: number;
  number?: number;
  title: string;
  durationMs?: number;
};

export type AlbumMetadata = {
  releaseDate?: string;
  label?: string;
  trackCount?: number;
  editionNote?: string;
  fullTracklist?: AlbumTrack[];
  links?: {
    spotify?: string;
    appleMusic?: string;
    youtubeMusic?: string;
  };
};

export const albumMetadata: Record<string, AlbumMetadata> = ${body} as const;
`;
}

const albums = await buildAlbums();
const metadata = {};

for (const album of albums) {
  metadata[album.slug] = await fetchAlbumMetadata(album);
  await new Promise((resolve) => setTimeout(resolve, 250));
}

await fs.writeFile(outputPath, renderFile(metadata), "utf8");
console.log(`Wrote album metadata for ${albums.length} albums to ${outputPath}`);
