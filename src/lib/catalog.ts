import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { z } from "zod";
import { albumMetadata } from "../data/albumMetadata";
import { artistArticles } from "../data/artistArticles";
import { artistMetadata } from "../data/artistMetadata";
import { songArticles } from "../data/songArticles";
import { songPlayerMetadata } from "../data/songPlayerMetadata";
import { songMetadata } from "../data/songMetadata";
import { createArtistArtwork, getArtistPhoto, getArtistPhotos } from "./artistArtwork";
import {
  formatRevenueRange,
  normalizeRevenue,
  parseRevenueRange,
  revenueMidpoint,
  type NormalizedRevenue,
  type RevenueRange
} from "./revenue";

const artistEarningsSchema = z.object({
  gross_catalog_revenue: z.string().optional(),
  artist_or_estate_share: z.string().optional(),
  label_share: z.string().optional(),
  publisher_share: z.string().optional(),
  writer_share: z.string().optional(),
  assumptions: z.string().optional()
}).optional();

const ownershipSchema = z.object({
  master_owner: z.string().optional(),
  publishing_owner: z.string().optional(),
  catalog_sale_status: z.string().optional(),
  notes: z.string().optional()
}).optional();

const songEarningsSchema = z.object({
  gross_track_revenue: z.string().optional(),
  artist_or_estate_share: z.string().optional(),
  label_master_share: z.string().optional(),
  publishing_share: z.string().optional(),
  songwriter_share: z.string().optional(),
  assumptions: z.string().optional()
}).optional();

const artistSchema = z.object({
  name: z.string(),
  slug: z.string(),
  estimated_income: z.string(),
  top_songs: z.array(z.string()),
  earnings: artistEarningsSchema,
  ownership: ownershipSchema,
  genre: z.string().optional(),
  country: z.string().optional(),
  active_since: z.string().optional(),
  bio: z.string().optional(),
  notable_for: z.string().optional(),
  career_highlight: z.string().optional(),
  revenue_drivers: z.array(z.string()).optional()
});

const songSchema = z.object({
  title: z.string(),
  slug: z.string(),
  artist: z.string(),
  estimated_revenue: z.string(),
  earnings: songEarningsSchema,
  ownership: ownershipSchema,
  album: z.string().optional(),
  year: z.number().int().optional(),
  meaning_summary: z.string().optional(),
  revenue_drivers: z.array(z.string()).optional(),
  related_songs: z.array(z.string()).optional()
});

type ArtistJson = z.infer<typeof artistSchema>;
type SongJson = z.infer<typeof songSchema>;

const artistModules = import.meta.glob("../data/artists/*.json", { eager: true });
const songModules = import.meta.glob("../data/songs/*.json", { eager: true });

function parseJsonCollection<T>(
  modules: Record<string, unknown>,
  schema: z.ZodSchema<T>,
  label: string
): T[] {
  return Object.entries(modules).map(([path, module]) => {
    const payload = module as { default?: unknown };
    const parsed = schema.safeParse(payload.default);

    if (!parsed.success) {
      throw new Error(`Invalid ${label} JSON in ${path}: ${parsed.error.message}`);
    }

    return parsed.data;
  });
}

const parsedArtists = parseJsonCollection(artistModules, artistSchema, "artist");
const parsedSongs = parseJsonCollection(songModules, songSchema, "song");

export type Artist = ArtistJson & {
  genre?: string;
  country?: string;
  active_since?: string;
  bio?: string;
  normalizedRevenue?: {
    artistSide: NormalizedRevenue | null;
    grossCatalog: NormalizedRevenue | null;
  };
};

export type Song = SongJson & {
  album?: string;
  year?: number;
  meaning_summary?: string;
  revenue_drivers?: string[];
  related_songs?: string[];
  player?: {
    previewUrl?: string;
    appleMusic?: string;
    artwork?: string;
    links?: {
      appleMusic?: string;
      amazonMusic?: string;
      spotify?: string;
      youtubeMusic?: string;
    };
  };
  normalizedRevenue?: {
    artistSide: NormalizedRevenue | null;
    grossTrack: NormalizedRevenue | null;
  };
};

export type Album = {
  title: string;
  slug: string;
  artistSlug: string;
  artistName: string;
  year?: number;
  releaseDate?: string;
  label?: string;
  trackCount?: number;
  links?: {
    spotify?: string;
    appleMusic?: string;
    amazonMusic?: string;
    youtubeMusic?: string;
  };
  editionNote?: string;
  songs: Song[];
  trackListing: Song[];
  fullTracklist?: Array<{
    discNumber?: number;
    number?: number;
    title: string;
    durationMs?: number;
  }>;
  trackedSongCount: number;
  estimatedRevenue?: string;
  revenueRange?: RevenueRange;
  normalizedRevenue?: NormalizedRevenue | null;
};

export type ArtistVisual = {
  src: string;
  alt: string;
  provider: "appleMusic" | "artistPhoto" | "generated";
  providerLink?: string;
};

export type MethodologySnapshot = {
  confidenceLabel: string;
  summary: string;
  bullets: string[];
};

export type ConfidenceLevel = "high" | "medium" | "low";

export type ConfidenceScore = {
  level: ConfidenceLevel;
  score: number;
  reasons: string[];
};

export const artists: Artist[] = parsedArtists
  .map((artist) => {
    const supplemental = artistMetadata[artist.slug];

    return {
      ...artist,
      genre: artist.genre ?? supplemental?.genre,
      country: artist.country ?? supplemental?.country,
      active_since: artist.active_since ?? supplemental?.activeSince,
      bio: artist.bio ?? supplemental?.summary,
      normalizedRevenue: {
        artistSide: normalizeRevenue(artist.earnings?.artist_or_estate_share ?? artist.estimated_income),
        grossCatalog: normalizeRevenue(artist.earnings?.gross_catalog_revenue)
      }
    };
  })
  .sort((left, right) => left.name.localeCompare(right.name));

export const songs: Song[] = parsedSongs
  .map((song) => {
    const supplemental = songMetadata[song.slug];
    const artist = parsedArtists.find((entry) => entry.slug === song.artist);
    const amazonMusic = buildAmazonMusicSearchLink(artist?.name ?? song.artist, song.title);
    const playerMetadata = songPlayerMetadata[song.slug];

    return {
      ...song,
      album: song.album ?? supplemental?.album,
      year: song.year ?? supplemental?.year,
      meaning_summary: song.meaning_summary ?? supplemental?.meaningSummary,
      revenue_drivers: song.revenue_drivers ?? supplemental?.revenueDrivers,
      related_songs: song.related_songs ?? supplemental?.relatedSongs,
      normalizedRevenue: {
        artistSide: normalizeRevenue(song.earnings?.artist_or_estate_share ?? song.estimated_revenue),
        grossTrack: normalizeRevenue(song.earnings?.gross_track_revenue)
      },
      player: playerMetadata
        ? {
            ...playerMetadata,
            links: {
              ...playerMetadata.links,
              amazonMusic: playerMetadata.links?.amazonMusic ?? amazonMusic
            }
          }
        : {
            links: {
              amazonMusic
            }
          }
    };
  })
  .sort((left, right) => left.title.localeCompare(right.title));

export const artistMap = new Map(artists.map((artist) => [artist.slug, artist]));
export const songMap = new Map(songs.map((song) => [song.slug, song]));

export function slugifyAlbumTitle(title: string) {
  return title
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getAlbumSlug(artistSlug: string, albumTitle: string) {
  return `${artistSlug}-${slugifyAlbumTitle(albumTitle)}`;
}

function buildAmazonMusicSearchLink(...parts: Array<string | undefined>) {
  const query = parts.filter(Boolean).join(" ").trim();
  if (!query) return undefined;
  const url = new URL(`https://music.amazon.com/search/${encodeURIComponent(query)}`);
  const associateTag =
    import.meta.env.PUBLIC_AMAZON_ASSOCIATE_TAG?.trim() || "kreativauto-20";

  if (associateTag) {
    url.searchParams.set("tag", associateTag);
  }

  return url.toString();
}

function summarizeRevenue(songs: Song[]) {
  const totals = songs.reduce(
    (accumulator, song) => {
      const range = parseRevenueRange(song.estimated_revenue);

      if (!range) return accumulator;

      return {
        min: accumulator.min + range.min,
        max: accumulator.max + range.max,
        count: accumulator.count + 1
      };
    },
    { min: 0, max: 0, count: 0 }
  );

  if (!totals.count) return undefined;

  return formatRevenueRange({ min: totals.min, max: totals.max });
}

const albumEntries = new Map<string, Album>();

songs.forEach((song) => {
  if (!song.album) return;

  const artist = getArtist(song.artist);
  const slug = getAlbumSlug(song.artist, song.album);
  const existing = albumEntries.get(slug);

  if (existing) {
    existing.songs.push(song);
    existing.trackedSongCount += 1;
    if (!existing.year && song.year) existing.year = song.year;
    existing.estimatedRevenue = summarizeRevenue(existing.songs);
    return;
  }

  albumEntries.set(slug, {
    title: song.album,
    slug,
    artistSlug: song.artist,
    artistName: artist?.name ?? song.artist,
    year: song.year,
    songs: [song],
    trackListing: [song],
    trackedSongCount: 1,
    estimatedRevenue: summarizeRevenue([song])
  });
});

export const albums = [...albumEntries.values()].sort((left, right) => {
  if (left.title === right.title) return left.artistName.localeCompare(right.artistName);
  return left.title.localeCompare(right.title);
}).map((album) => {
  const supplemental = albumMetadata[album.slug];
  const revenueRange = parseRevenueRange(album.estimatedRevenue);

  return {
    ...album,
    releaseDate: supplemental?.releaseDate ?? (album.year ? `${album.year}` : undefined),
    label: supplemental?.label,
    trackCount: supplemental?.trackCount ?? album.trackedSongCount,
    links: {
      ...supplemental?.links,
      amazonMusic: supplemental?.links?.amazonMusic ?? buildAmazonMusicSearchLink(album.artistName, album.title)
    },
    editionNote: supplemental?.editionNote,
    fullTracklist: supplemental?.fullTracklist,
    revenueRange,
    normalizedRevenue: normalizeRevenue(album.estimatedRevenue),
    trackListing: [...album.songs].sort((left, right) => {
      if (left.year && right.year && left.year !== right.year) return left.year - right.year;
      return left.title.localeCompare(right.title);
    })
  };
});

export const albumMap = new Map(albums.map((album) => [album.slug, album]));

export function getArtist(slug: string) {
  return artistMap.get(slug);
}

export function getSong(slug: string) {
  return songMap.get(slug);
}

export function getAlbum(slug: string) {
  return albumMap.get(slug);
}

function toConfidence(score: number, reasons: string[]): ConfidenceScore {
  return {
    level: score >= 5 ? "high" : score >= 3 ? "medium" : "low",
    score,
    reasons
  };
}

export function getArtistConfidence(artist: Artist): ConfidenceScore {
  let score = 0;
  const reasons: string[] = [];

  if (artist.earnings?.artist_or_estate_share) {
    score += 2;
    reasons.push("artist-side split is modeled");
  }
  if (artist.earnings?.gross_catalog_revenue) {
    score += 1;
    reasons.push("gross catalog revenue is separated");
  }
  if (artist.ownership?.master_owner || artist.ownership?.publishing_owner || artist.ownership?.catalog_sale_status) {
    score += 1;
    reasons.push("ownership context is present");
  }
  if (artist.bio?.trim() || artistArticles[artist.slug]?.shortAnswer) {
    score += 1;
    reasons.push("editorial overview is present");
  }
  if (artist.revenue_drivers?.length || artistArticles[artist.slug]?.sources?.length) {
    score += 1;
    reasons.push("revenue-driver context is present");
  }

  return toConfidence(score, reasons);
}

export function getSongConfidence(song: Song): ConfidenceScore {
  let score = 0;
  const reasons: string[] = [];

  if (song.earnings?.artist_or_estate_share) {
    score += 2;
    reasons.push("artist-side split is modeled");
  }
  if (song.earnings?.gross_track_revenue) {
    score += 1;
    reasons.push("gross track revenue is separated");
  }
  if (song.ownership?.master_owner || song.ownership?.publishing_owner || song.ownership?.catalog_sale_status) {
    score += 1;
    reasons.push("ownership context is present");
  }
  if (song.meaning_summary?.trim() || songArticles[song.slug]?.shortAnswer) {
    score += 1;
    reasons.push("editorial meaning/overview is present");
  }
  if (song.related_songs?.length || getContextSongs(song, 2).length) {
    score += 1;
    reasons.push("related listening context is present");
  }

  return toConfidence(score, reasons);
}

export function getAlbumConfidence(album: Album): ConfidenceScore {
  let score = 0;
  const reasons: string[] = [];

  if (album.normalizedRevenue) {
    score += 1;
    reasons.push("tracked revenue is normalized");
  }
  if (album.releaseDate) {
    score += 1;
    reasons.push("release date is present");
  }
  if (album.label) {
    score += 1;
    reasons.push("label metadata is present");
  }
  if (album.trackCount) {
    score += 1;
    reasons.push("track count is present");
  }
  if (album.fullTracklist?.length) {
    score += 1;
    reasons.push("full tracklist is present");
  }
  if (album.links?.appleMusic) {
    score += 1;
    reasons.push("provider source link is present");
  }

  return toConfidence(score, reasons);
}

function genreTokens(value?: string) {
  return (value ?? "")
    .split(/[\/,&·]+/)
    .map((token) => token.trim().toLowerCase())
    .filter(Boolean);
}

function extractYear(value?: string) {
  const match = value?.match(/\b(19|20)\d{2}\b/);
  return match ? Number(match[0]) : undefined;
}

function toDecade(year?: number) {
  return year ? Math.floor(year / 10) * 10 : undefined;
}

export function getArtistOwnershipNote(artist: Artist) {
  if (artist.ownership?.notes) return artist.ownership.notes;
  if (artist.earnings?.assumptions) return artist.earnings.assumptions;

  const details = [
    artist.ownership?.master_owner ? `masters are likely controlled by ${artist.ownership.master_owner}` : "",
    artist.ownership?.publishing_owner ? `publishing is likely controlled by ${artist.ownership.publishing_owner}` : "",
    artist.ownership?.catalog_sale_status ? `catalog status is ${artist.ownership.catalog_sale_status}` : ""
  ].filter(Boolean);

  if (details.length > 0) {
    return `${artist.name}'s reported earnings should be read alongside ownership context: ${details.join(", ")}.`;
  }

  return `${artist.name}'s contract splits are not fully public, so the artist-side number on this page should be treated as a directional estimate rather than a royalty-statement equivalent.`;
}

export function getArtistOverviewText(artist: Artist) {
  return (
    artist.bio?.trim() ||
    `${artist.name}${artist.country ? ` from ${artist.country}` : ""} has a catalog that still attracts listeners through recognisable songs, repeat listening, and long-tail streaming demand.`
  );
}

export function getArtistRevenueContext(artist: Artist) {
  if (artist.revenue_drivers?.length) return artist.revenue_drivers;
  if (artistArticles[artist.slug]?.sources?.length) return artistArticles[artist.slug].sources;

  const topSongNames = artist.top_songs
    .map((slug) => songMap.get(slug)?.title)
    .filter((value): value is string => Boolean(value))
    .slice(0, 3);
  const leadSongs = topSongNames.length ? topSongNames.join(", ") : "The strongest songs in the catalog";
  const leadGenre = genreTokens(artist.genre)[0];

  return [
    `${leadSongs} continue to anchor long-tail listening demand.`,
    `${leadGenre ? `${leadGenre} playlist placement` : "Streaming and catalog playlist placement"} helps keep the catalog active.`,
    "Publishing, licensing, and nostalgia spikes can materially change the artist-side economics over time."
  ];
}

export function getSongOwnershipNote(song: Song, artist?: Artist) {
  if (song.ownership?.notes) return song.ownership.notes;
  if (song.earnings?.assumptions) return song.earnings.assumptions;

  const details = [
    song.ownership?.master_owner ? `masters are likely controlled by ${song.ownership.master_owner}` : "",
    song.ownership?.publishing_owner ? `publishing is likely controlled by ${song.ownership.publishing_owner}` : "",
    song.ownership?.catalog_sale_status ? `catalog status is ${song.ownership.catalog_sale_status}` : ""
  ].filter(Boolean);

  if (details.length > 0) {
    return `${song.title} should be read with ownership context in mind: ${details.join(", ")}.`;
  }

  return `${song.title} by ${artist?.name ?? song.artist} is modeled from the best available catalog and platform signals, but the exact master and publishing splits are not fully public.`;
}

export function getSongMeaningText(song: Song) {
  return (
    song.meaning_summary?.trim() ||
    songArticles[song.slug]?.shortAnswer?.trim() ||
    `${song.title}${song.album ? ` from ${song.album}` : ""} remains commercially relevant because it is emotionally legible, easy to replay, and culturally recognisable inside ${getArtist(song.artist)?.name ?? song.artist}'s catalog.`
  );
}

export function getSongRevenueContext(song: Song) {
  if (song.revenue_drivers?.length) return song.revenue_drivers;
  if (songArticles[song.slug]?.breakdown?.length) return songArticles[song.slug].breakdown;

  return [
    "Streaming is usually the largest recurring revenue source.",
    "Catalog familiarity helps the song stay useful in playlists and recommendation loops.",
    "Licensing and social rediscovery can create revenue spikes on top of the long-tail baseline."
  ];
}

export function getAlbumMethodology(album: Album): MethodologySnapshot {
  const confidence = getAlbumConfidence(album);

  return {
    confidenceLabel: `${confidence.level[0].toUpperCase()}${confidence.level.slice(1)} confidence album estimate`,
    summary: "Album pages model tracked-song revenue, not full-album royalty statements, and become stronger as tracklists, release metadata, and provider links improve.",
    bullets: [
      album.fullTracklist?.length
        ? "This page has a matched full tracklist, which improves album-level context."
        : "This page still relies on tracked songs only, so album context is partial.",
      album.normalizedRevenue
        ? "Tracked-song revenue has been normalized into a numeric annual range for ranking and comparison."
        : "Tracked-song revenue is still partial, so ranking weight is limited.",
      "Album economics on this site are a proxy for catalog strength, not a substitute for a full release-level royalty statement."
    ]
  };
}

export function getRelatedArtists(artist: Artist, limit = 3) {
  const artistGenreTokens = new Set(genreTokens(artist.genre));
  const artistDecade = toDecade(extractYear(artist.active_since));

  return artists
    .filter((candidate) => candidate.slug !== artist.slug)
    .map((candidate) => {
      const candidateGenreTokens = genreTokens(candidate.genre);
      const sharedGenres = candidateGenreTokens.filter((token) => artistGenreTokens.has(token)).length;
      const sameCountry = artist.country && candidate.country && artist.country === candidate.country ? 1 : 0;
      const candidateDecade = toDecade(extractYear(candidate.active_since));
      const sameDecade = artistDecade && candidateDecade && artistDecade === candidateDecade ? 1 : 0;
      const score = sharedGenres * 3 + sameCountry * 2 + sameDecade;

      return {
        artist: candidate,
        score,
        revenueScore: candidate.normalizedRevenue?.artistSide?.midpoint ?? 0
      };
    })
    .filter((entry) => entry.score > 0)
    .sort((left, right) => right.score - left.score || right.revenueScore - left.revenueScore)
    .slice(0, limit)
    .map((entry) => entry.artist);
}

export function getMoreSongsFromAlbum(song: Song, limit = 4) {
  if (!song.album) return [];

  const album = getAlbum(getAlbumSlug(song.artist, song.album));
  if (!album) return [];

  return album.trackListing
    .filter((entry) => entry.slug !== song.slug)
    .slice(0, limit);
}

export function getRelatedAlbumsForSong(song: Song, limit = 3) {
  const artist = getArtist(song.artist);
  const songDecade = toDecade(song.year);
  const artistGenreTokens = new Set(genreTokens(artist?.genre));

  return albums
    .filter((album) => album.slug !== (song.album ? getAlbumSlug(song.artist, song.album) : ""))
    .map((album) => {
      const albumArtist = getArtist(album.artistSlug);
      const albumGenreTokens = genreTokens(albumArtist?.genre);
      const sameArtist = album.artistSlug === song.artist ? 1 : 0;
      const sharedGenres = albumGenreTokens.filter((token) => artistGenreTokens.has(token)).length;
      const sameDecade = songDecade && toDecade(album.year) === songDecade ? 1 : 0;
      const score = sameArtist * 5 + sharedGenres * 2 + sameDecade;

      return {
        album,
        score,
        revenueScore: album.normalizedRevenue?.midpoint ?? 0
      };
    })
    .filter((entry) => entry.score > 0)
    .sort((left, right) => right.score - left.score || right.revenueScore - left.revenueScore)
    .slice(0, limit)
    .map((entry) => entry.album);
}

export function getContextSongs(song: Song, limit = 4) {
  const artist = getArtist(song.artist);
  const songDecade = toDecade(song.year);
  const artistGenreTokens = new Set(genreTokens(artist?.genre));

  return songs
    .filter((candidate) => candidate.slug !== song.slug)
    .map((candidate) => {
      const candidateArtist = getArtist(candidate.artist);
      const candidateGenreTokens = genreTokens(candidateArtist?.genre);
      const sharedGenres = candidateGenreTokens.filter((token) => artistGenreTokens.has(token)).length;
      const sameDecade = songDecade && toDecade(candidate.year) === songDecade ? 1 : 0;
      const sameArtist = candidate.artist === song.artist ? 1 : 0;
      const score = sameArtist * 4 + sharedGenres * 2 + sameDecade;

      return {
        song: candidate,
        score,
        revenueScore: candidate.normalizedRevenue?.artistSide?.midpoint ?? 0
      };
    })
    .filter((entry) => entry.score > 0)
    .sort((left, right) => right.score - left.score || right.revenueScore - left.revenueScore)
    .slice(0, limit)
    .map((entry) => entry.song);
}

export function getRelatedAlbums(album: Album, limit = 3) {
  const albumArtist = getArtist(album.artistSlug);
  const albumGenreTokens = new Set(genreTokens(albumArtist?.genre));
  const albumDecade = toDecade(album.year);

  return albums
    .filter((candidate) => candidate.slug !== album.slug)
    .map((candidate) => {
      const candidateArtist = getArtist(candidate.artistSlug);
      const candidateGenreTokens = genreTokens(candidateArtist?.genre);
      const sameArtist = candidate.artistSlug === album.artistSlug ? 1 : 0;
      const sharedGenres = candidateGenreTokens.filter((token) => albumGenreTokens.has(token)).length;
      const sameDecade = albumDecade && toDecade(candidate.year) === albumDecade ? 1 : 0;
      const score = sameArtist * 5 + sharedGenres * 2 + sameDecade;

      return {
        album: candidate,
        score,
        revenueScore: candidate.normalizedRevenue?.midpoint ?? 0
      };
    })
    .filter((entry) => entry.score > 0)
    .sort((left, right) => right.score - left.score || right.revenueScore - left.revenueScore)
    .slice(0, limit)
    .map((entry) => entry.album);
}

export function getMoreAlbumsFromArtist(album: Album, limit = 3) {
  return albums
    .filter((candidate) => candidate.artistSlug === album.artistSlug && candidate.slug !== album.slug)
    .sort((left, right) => (right.normalizedRevenue?.midpoint ?? 0) - (left.normalizedRevenue?.midpoint ?? 0))
    .slice(0, limit);
}

export function getAlbumContextSongs(album: Album, limit = 4) {
  const albumArtist = getArtist(album.artistSlug);
  const albumGenreTokens = new Set(genreTokens(albumArtist?.genre));
  const albumDecade = toDecade(album.year);

  return songs
    .filter((song) => !album.trackListing.some((tracked) => tracked.slug === song.slug))
    .map((song) => {
      const songArtist = getArtist(song.artist);
      const songGenreTokens = genreTokens(songArtist?.genre);
      const sameArtist = song.artist === album.artistSlug ? 1 : 0;
      const sharedGenres = songGenreTokens.filter((token) => albumGenreTokens.has(token)).length;
      const sameDecade = albumDecade && toDecade(song.year) === albumDecade ? 1 : 0;
      const score = sameArtist * 4 + sharedGenres * 2 + sameDecade;

      return {
        song,
        score,
        revenueScore: song.normalizedRevenue?.artistSide?.midpoint ?? 0
      };
    })
    .filter((entry) => entry.score > 0)
    .sort((left, right) => right.score - left.score || right.revenueScore - left.revenueScore)
    .slice(0, limit)
    .map((entry) => entry.song);
}

export function getArtistMethodology(artist: Artist): MethodologySnapshot {
  const hasArtistSideSplit = Boolean(artist.earnings?.artist_or_estate_share);
  const hasGrossCatalog = Boolean(artist.earnings?.gross_catalog_revenue);
  const hasOwnership = Boolean(
    artist.ownership?.master_owner || artist.ownership?.publishing_owner || artist.ownership?.catalog_sale_status
  );

  const confidenceLabel = hasArtistSideSplit && hasOwnership
    ? "Split-aware estimate"
    : hasArtistSideSplit
      ? "Partial split estimate"
      : "Modeled top-line estimate";

  return {
    confidenceLabel,
    summary: hasArtistSideSplit
      ? "The primary figure is the modeled artist-side or estate-side annual cut, not gross catalog revenue."
      : "The primary figure is a modeled annual income range because a specific artist-side royalty split is not available yet.",
    bullets: [
      hasGrossCatalog
        ? "Gross catalog revenue is shown separately when enough context exists to distinguish top-line catalog value from artist-side take-home."
        : "Gross catalog revenue is not modeled separately on this page yet, so the lead figure should be treated as a blended estimate.",
      hasOwnership
        ? "Ownership notes are available here and can materially change who actually keeps the revenue shown on the page."
        : "Ownership context is still partial here, so the estimate should be treated as directional rather than contract-accurate.",
      "All figures are annual modeled ranges based on streaming scale, catalog age, licensing usefulness, and known ownership context, not audited royalty statements."
    ]
  };
}

export function getSongMethodology(song: Song): MethodologySnapshot {
  const hasArtistSideSplit = Boolean(song.earnings?.artist_or_estate_share);
  const hasGrossTrack = Boolean(song.earnings?.gross_track_revenue);
  const hasOwnership = Boolean(
    song.ownership?.master_owner || song.ownership?.publishing_owner || song.ownership?.catalog_sale_status
  );

  const confidenceLabel = hasArtistSideSplit && hasOwnership
    ? "Split-aware estimate"
    : hasArtistSideSplit
      ? "Partial split estimate"
      : "Modeled top-line estimate";

  return {
    confidenceLabel,
    summary: hasArtistSideSplit
      ? "The headline number is the modeled artist-side annual share for this recording when split data exists."
      : "The headline number is a modeled annual revenue range because a specific artist-side split is not available yet.",
    bullets: [
      hasGrossTrack
        ? "Gross track revenue is separated from artist-side take-home where the page has enough split context."
        : "Gross track revenue is not shown separately here, so the page emphasizes the best available directional estimate.",
      hasOwnership
        ? "Ownership notes on masters or publishing are included and should be read alongside the revenue number."
        : "Ownership context is incomplete here, so the estimate should be treated as directional rather than contract-precise.",
      "All figures are annual modeled ranges based on streaming behavior, cultural replay value, sync potential, and available ownership information, not public royalty statements."
    ]
  };
}

function isValidAbsoluteUrl(url?: string) {
  if (!url) return false;

  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:";
  } catch {
    return false;
  }
}

function hasAllowedHost(url: string | undefined, allowedHosts: string[]) {
  if (!url) return false;

  try {
    const { hostname, protocol } = new URL(url);
    return protocol === "https:" && allowedHosts.some((host) => hostname === host || hostname.endsWith(`.${host}`));
  } catch {
    return false;
  }
}

function localPublicAssetExists(publicPath: string) {
  return existsSync(resolve(process.cwd(), "public", `.${publicPath}`));
}

function validateCatalogSemantics() {
  const issues: string[] = [];

  artists.forEach((artist) => {
    const relatedArtists = getRelatedArtists(artist, 3);

    if (artist.top_songs.length < 2) {
      issues.push(`Artist "${artist.slug}" must have at least 2 top songs.`);
    }

    if (new Set(artist.top_songs).size !== artist.top_songs.length) {
      issues.push(`Artist "${artist.slug}" has duplicate top_songs entries.`);
    }

    if (!artist.normalizedRevenue?.artistSide) {
      issues.push(`Artist "${artist.slug}" has an unparseable estimated income.`);
    }

    if (!getArtistOverviewText(artist).trim()) {
      issues.push(`Artist "${artist.slug}" is missing overview copy.`);
    }

    if (getArtistRevenueContext(artist).length < 2) {
      issues.push(`Artist "${artist.slug}" is missing enough revenue-driver context.`);
    }

    if (!getArtistOwnershipNote(artist).trim()) {
      issues.push(`Artist "${artist.slug}" is missing an ownership note.`);
    }

    if (relatedArtists.length === 0) {
      issues.push(`Artist "${artist.slug}" has no related-artist links.`);
    }

    artist.top_songs.forEach((songSlug) => {
      const song = songMap.get(songSlug);

      if (!song) {
        issues.push(`Artist "${artist.slug}" references missing top song "${songSlug}".`);
        return;
      }

      if (song.artist !== artist.slug) {
        issues.push(`Artist "${artist.slug}" top song "${songSlug}" belongs to "${song.artist}".`);
      }
    });
  });

  songs.forEach((song) => {
    const relatedPool = (song.related_songs?.length ?? 0) > 0
      ? song.related_songs ?? []
      : songs.filter((entry) => entry.artist === song.artist && entry.slug !== song.slug).map((entry) => entry.slug);

    if (!artistMap.has(song.artist)) {
      issues.push(`Song "${song.slug}" references missing artist "${song.artist}".`);
    }

    if (!song.album) {
      issues.push(`Song "${song.slug}" is missing album metadata.`);
    }

    if (!song.year) {
      issues.push(`Song "${song.slug}" is missing release year metadata.`);
    }

    if (!song.normalizedRevenue?.artistSide) {
      issues.push(`Song "${song.slug}" has an unparseable estimated revenue.`);
    }

    if (!getSongMeaningText(song).trim()) {
      issues.push(`Song "${song.slug}" is missing overview or meaning copy.`);
    }

    if (getSongRevenueContext(song).length < 2) {
      issues.push(`Song "${song.slug}" is missing enough revenue-driver context.`);
    }

    if (!getSongOwnershipNote(song, getArtist(song.artist)).trim()) {
      issues.push(`Song "${song.slug}" is missing an ownership note.`);
    }

    if (relatedPool.length === 0) {
      issues.push(`Song "${song.slug}" has no related-song links.`);
    }

    if (song.related_songs) {
      if (new Set(song.related_songs).size !== song.related_songs.length) {
        issues.push(`Song "${song.slug}" has duplicate related_songs entries.`);
      }

      song.related_songs.forEach((relatedSlug) => {
        if (relatedSlug === song.slug) {
          issues.push(`Song "${song.slug}" cannot relate to itself.`);
        }

        if (!songMap.has(relatedSlug)) {
          issues.push(`Song "${song.slug}" references missing related song "${relatedSlug}".`);
        }
      });
    }

    if (song.player?.artwork && !(song.player.links?.appleMusic ?? song.player.appleMusic)) {
      issues.push(`Song "${song.slug}" has provider artwork without an Apple Music source link.`);
    }

    if (song.player?.artwork && !hasAllowedHost(song.player.artwork, ["mzstatic.com"])) {
      issues.push(`Song "${song.slug}" has provider artwork from an unexpected host.`);
    }

    if (song.player?.previewUrl && !hasAllowedHost(song.player.previewUrl, ["itunes.apple.com"])) {
      issues.push(`Song "${song.slug}" has preview audio from an unexpected host.`);
    }

    if (song.player?.links?.appleMusic && !hasAllowedHost(song.player.links.appleMusic, ["music.apple.com"])) {
      issues.push(`Song "${song.slug}" has an invalid Apple Music link.`);
    }

    if (song.player?.links?.spotify && !hasAllowedHost(song.player.links.spotify, ["open.spotify.com"])) {
      issues.push(`Song "${song.slug}" has an invalid Spotify link.`);
    }

    if (song.player?.links?.youtubeMusic && !hasAllowedHost(song.player.links.youtubeMusic, ["music.youtube.com"])) {
      issues.push(`Song "${song.slug}" has an invalid YouTube Music link.`);
    }

    if (song.player?.links?.amazonMusic && !hasAllowedHost(song.player.links.amazonMusic, ["music.amazon.com"])) {
      issues.push(`Song "${song.slug}" has an invalid Amazon Music link.`);
    }
  });

  albums.forEach((album) => {
    if (!album.trackListing.length) {
      issues.push(`Album "${album.slug}" has no tracked songs.`);
    }

    if (!artistMap.has(album.artistSlug)) {
      issues.push(`Album "${album.slug}" references missing artist "${album.artistSlug}".`);
    }

    if (album.links?.appleMusic && !hasAllowedHost(album.links.appleMusic, ["music.apple.com"])) {
      issues.push(`Album "${album.slug}" has an invalid Apple Music link.`);
    }

    if (album.links?.spotify && !hasAllowedHost(album.links.spotify, ["open.spotify.com"])) {
      issues.push(`Album "${album.slug}" has an invalid Spotify link.`);
    }

    if (album.links?.youtubeMusic && !hasAllowedHost(album.links.youtubeMusic, ["music.youtube.com"])) {
      issues.push(`Album "${album.slug}" has an invalid YouTube Music link.`);
    }

    if (album.links?.amazonMusic && !hasAllowedHost(album.links.amazonMusic, ["music.amazon.com"])) {
      issues.push(`Album "${album.slug}" has an invalid Amazon Music link.`);
    }
  });

  Object.entries(getArtistPhotos()).forEach(([slug, photo]) => {
    if (!artistMap.has(slug)) {
      issues.push(`Artist photo exists for unknown artist "${slug}".`);
    }

    if (!photo.localPath || !localPublicAssetExists(photo.localPath)) {
      issues.push(`Artist "${slug}" photo file is missing at "${photo.localPath}".`);
    }

    if (!isValidAbsoluteUrl(photo.sourceUrl) || !hasAllowedHost(photo.sourceUrl, ["commons.wikimedia.org"])) {
      issues.push(`Artist "${slug}" has an invalid Wikimedia source URL.`);
    }

    if (
      !isValidAbsoluteUrl(photo.licenseUrl) ||
      !hasAllowedHost(photo.licenseUrl, ["creativecommons.org", "commons.wikimedia.org"])
    ) {
      issues.push(`Artist "${slug}" has an invalid license URL.`);
    }
  });

  if (issues.length > 0) {
    throw new Error(
      `Catalog semantic validation failed:\n- ${issues.slice(0, 40).join("\n- ")}${issues.length > 40 ? `\n- ...and ${issues.length - 40} more` : ""}`
    );
  }
}

export function getArtistVisual(artist: Artist): ArtistVisual {
  const featuredSong = artist.top_songs
    .map((slug) => songMap.get(slug))
    .find((song) => song?.player?.artwork);

  if (featuredSong?.player?.artwork) {
    return {
      src: featuredSong.player.artwork,
      alt: `${artist.name} artwork via ${featuredSong.title}`,
      provider: "appleMusic",
      providerLink: featuredSong.player.links?.appleMusic ?? featuredSong.player.appleMusic
    };
  }

  const artistPhoto = getArtistPhoto(artist.slug);

  if (artistPhoto) {
    return {
      src: artistPhoto.src,
      alt: artistPhoto.alt,
      provider: "artistPhoto",
      providerLink: artistPhoto.sourceUrl
    };
  }

  return {
    src: createArtistArtwork(artist.name, artist.slug),
    alt: `Artwork for ${artist.name}`,
    provider: "generated"
  };
}

export const rankedArtists = artists
  .map((artist) => {
    const revenueRange = artist.normalizedRevenue?.artistSide
      ? { min: artist.normalizedRevenue.artistSide.min, max: artist.normalizedRevenue.artistSide.max }
      : null;

    return {
      artist,
      revenueRange,
      revenueScore: revenueMidpoint(revenueRange) ?? 0
    };
  })
  .sort((left, right) => right.revenueScore - left.revenueScore);

export const rankedSongs = songs
  .map((song) => {
    const revenueRange = song.normalizedRevenue?.artistSide
      ? { min: song.normalizedRevenue.artistSide.min, max: song.normalizedRevenue.artistSide.max }
      : null;

    return {
      song,
      revenueRange,
      revenueScore: revenueMidpoint(revenueRange) ?? 0
    };
  })
  .sort((left, right) => right.revenueScore - left.revenueScore);

export const rankedAlbums = albums
  .map((album) => ({
    album,
    revenueRange: album.revenueRange,
    revenueScore: album.normalizedRevenue?.midpoint ?? revenueMidpoint(album.revenueRange ?? null) ?? 0
  }))
  .sort((left, right) => right.revenueScore - left.revenueScore);

validateCatalogSemantics();
