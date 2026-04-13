import { z } from "zod";
import { albumMetadata } from "../data/albumMetadata";
import { artistMetadata } from "../data/artistMetadata";
import { songMetadata } from "../data/songMetadata";

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
};

export type Song = SongJson & {
  album?: string;
  year?: number;
  meaning_summary?: string;
  revenue_drivers?: string[];
  related_songs?: string[];
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
    youtubeMusic?: string;
  };
  songs: Song[];
  trackListing: Song[];
  trackedSongCount: number;
  estimatedRevenue?: string;
};

export const artists: Artist[] = parsedArtists
  .map((artist) => {
    const supplemental = artistMetadata[artist.slug];

    return {
      ...artist,
      genre: artist.genre ?? supplemental?.genre,
      country: artist.country ?? supplemental?.country,
      active_since: artist.active_since ?? supplemental?.activeSince,
      bio: artist.bio ?? supplemental?.summary
    };
  })
  .sort((left, right) => left.name.localeCompare(right.name));

export const songs: Song[] = parsedSongs
  .map((song) => {
    const supplemental = songMetadata[song.slug];

    return {
      ...song,
      album: song.album ?? supplemental?.album,
      year: song.year ?? supplemental?.year,
      meaning_summary: song.meaning_summary ?? supplemental?.meaningSummary,
      revenue_drivers: song.revenue_drivers ?? supplemental?.revenueDrivers,
      related_songs: song.related_songs ?? supplemental?.relatedSongs
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

function parseRevenueValue(token: string) {
  const match = token.trim().match(/^\$?([\d.]+)\s*([KMB])?$/i);

  if (!match) return null;

  const value = Number(match[1]);
  const unit = match[2]?.toUpperCase();
  const multiplier =
    unit === "B" ? 1_000_000_000 :
    unit === "M" ? 1_000_000 :
    unit === "K" ? 1_000 :
    1;

  return value * multiplier;
}

function parseRevenueRange(input: string) {
  const normalized = input.replace(/\/year/i, "").trim();
  const parts = normalized.split("-").map((part) => parseRevenueValue(part));

  if (parts.length !== 2 || parts[0] == null || parts[1] == null) return null;

  return { min: parts[0], max: parts[1] };
}

function formatRevenueValue(value: number) {
  if (value >= 1_000_000_000) return `$${(value / 1_000_000_000).toFixed(1).replace(/\.0$/, "")}B`;
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
  if (value >= 1_000) return `$${(value / 1_000).toFixed(1).replace(/\.0$/, "")}K`;
  return `$${Math.round(value)}`;
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

  return `${formatRevenueValue(totals.min)}-${formatRevenueValue(totals.max)}/year`;
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
}).map((album) => ({
  ...album,
  releaseDate: albumMetadata[album.slug]?.releaseDate,
  label: albumMetadata[album.slug]?.label,
  trackCount: albumMetadata[album.slug]?.trackCount,
  links: albumMetadata[album.slug]?.links,
  trackListing: [...album.songs].sort((left, right) => {
    if (left.year && right.year && left.year !== right.year) return left.year - right.year;
    return left.title.localeCompare(right.title);
  })
}));

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
