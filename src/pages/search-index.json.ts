import { artists, songs } from "../lib/catalog";

export const prerender = true;

const searchItems = [
  ...artists.flatMap((artist) => {
    return [{
      type: "Artist",
      title: artist.name,
      subtitle: [artist.genre, artist.country].filter(Boolean).join(" · "),
      url: `/artist/${artist.slug}/`,
      searchText: [artist.name, artist.genre, artist.country, artist.active_since].filter(Boolean).join(" "),
      reviewed: false,
      status: "Catalog research profile"
    }];
  }),
  ...songs.flatMap((song) => {
    const artist = artists.find((entry) => entry.slug === song.artist);
    return [{
      type: "Song",
      title: song.title,
      subtitle: [artist?.name ?? song.artist, song.album, song.year].filter(Boolean).join(" · "),
      url: `/song/${song.slug}/`,
      searchText: [song.title, artist?.name ?? song.artist, song.album, song.year].filter(Boolean).join(" "),
      reviewed: false,
      status: "Catalog research profile"
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
