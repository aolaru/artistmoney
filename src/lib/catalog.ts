import { z } from "zod";
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

export function getArtist(slug: string) {
  return artistMap.get(slug);
}

export function getSong(slug: string) {
  return songMap.get(slug);
}
