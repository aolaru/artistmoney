import type { Artist, Song } from "./catalog";

function listWithAnd(values: string[]) {
  if (values.length <= 1) return values[0] ?? "";
  if (values.length === 2) return `${values[0]} and ${values[1]}`;
  return `${values.slice(0, -1).join(", ")}, and ${values[values.length - 1]}`;
}

export function getArtistEditorial(artist: Artist, topSongs: Song[]) {
  const songNames = topSongs.slice(0, 3).map((song) => song.title);
  const genre = artist.genre?.split("/")[0].trim();
  const region = artist.country ? ` from ${artist.country}` : "";

  return {
    overview:
      artist.bio ??
      `${artist.name}${region} has a catalog that still attracts listeners through recognisable songs, repeat listening, and long-tail streaming demand.`,
    shortAnswer: `Estimated artist-side annual earnings: ${artist.earnings?.artist_or_estate_share ?? artist.estimated_income}.`,
    sources: artist.revenue_drivers?.length
      ? artist.revenue_drivers
      : [
          `${songNames.length ? `${listWithAnd(songNames)} remain the clearest catalog drivers.` : "The strongest songs in the catalog still anchor demand."}`,
          `${genre ? `${genre} playlist placement` : "Streaming and catalog playlist placement"} helps keep long-tail listening active.`,
          "Publishing and licensing value can materially improve the artist-side economics over time."
        ],
    insight:
      artist.career_highlight ??
      `${artist.name}'s economics depend less on a current release cycle than on whether the catalog stays culturally useful and commercially replayable.`,
    revenueStrategy: artist.revenue_drivers?.length
      ? artist.revenue_drivers
      : [
          "Catalog income keeps older recordings active long after release.",
          "Streaming creates a steady long-tail baseline from repeat listening.",
          "Licensing and nostalgia spikes can reset attention on older songs."
        ]
  };
}

export function getSongEditorial(song: Song, artist?: Artist) {
  const artistName = artist?.name ?? song.artist;
  const albumContext = song.album ? ` from ${song.album}` : "";

  return {
    shortAnswer: `Estimated artist-side annual earnings: ${song.earnings?.artist_or_estate_share ?? song.estimated_revenue}.`,
    meaning:
      song.meaning_summary ??
      `${song.title}${albumContext} remains commercially relevant because it is emotionally legible, easy to replay, and culturally recognisable inside ${artistName}'s catalog.`,
    breakdown: song.revenue_drivers?.length
      ? song.revenue_drivers
      : [
          "Streaming is usually the largest recurring revenue source.",
          "Catalog familiarity helps the song stay useful in playlists and recommendation loops.",
          "Licensing and social rediscovery can create revenue spikes on top of the long-tail baseline."
        ],
    lifetime:
      "The strongest catalog songs can continue to earn for many years if they remain easy to place, easy to remember, and easy to replay.",
    why:
      song.revenue_drivers?.length
        ? song.revenue_drivers
        : [
            "The song remains recognisable enough to survive beyond its original release cycle.",
            "Playlist fit and nostalgia keep repeat listening active.",
            "Catalog familiarity increases the odds of sync and social-media reuse."
          ],
    insight: `${artistName} benefits when one recording stays useful across streaming, memory, and licensing contexts long after the release campaign ends.`
  };
}
