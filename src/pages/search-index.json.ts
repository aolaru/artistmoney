import { artists, getArtistVisual, songs } from "../lib/catalog";
import { isArtistReviewReady, isSongReviewReady } from "../lib/reviewReady";

export const prerender = true;

const searchItems = [
  ...artists.flatMap((artist) => {
    const topSongs = songs.filter((song) => artist.top_songs.includes(song.slug));
    const reviewed = isArtistReviewReady(artist, topSongs) && getArtistVisual(artist).provider === "artistPhoto";

    return [{
      type: "Artist",
      title: artist.name,
      subtitle: [artist.genre, artist.country].filter(Boolean).join(" · "),
      url: `/artist/${artist.slug}/`,
      searchText: [artist.name, artist.genre, artist.country, artist.active_since].filter(Boolean).join(" "),
      reviewed,
      status: reviewed ? "Reviewed artist page" : "Catalog artist profile"
    }];
  }),
  ...songs.flatMap((song) => {
    const artist = artists.find((entry) => entry.slug === song.artist);
    const reviewed = isSongReviewReady(song);

    return [{
      type: "Song",
      title: song.title,
      subtitle: [artist?.name ?? song.artist, song.album, song.year].filter(Boolean).join(" · "),
      url: `/song/${song.slug}/`,
      searchText: [song.title, artist?.name ?? song.artist, song.album, song.year].filter(Boolean).join(" "),
      reviewed,
      status: reviewed ? "Reviewed song page" : "Catalog song profile"
    }];
  })
].sort((left, right) => left.title.localeCompare(right.title));

export async function GET() {
  return new Response(JSON.stringify(searchItems), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
