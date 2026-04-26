import { albums, artists, songs } from "../lib/catalog";

export const prerender = true;

const searchItems = [
  ...artists.map((artist) => ({
    type: "Artist",
    title: artist.name,
    subtitle: [artist.genre, artist.country].filter(Boolean).join(" · "),
    url: `/artist/${artist.slug}/`,
    searchText: [artist.name, artist.genre, artist.country, artist.active_since].filter(Boolean).join(" ")
  })),
  ...songs.map((song) => {
    const artist = artists.find((entry) => entry.slug === song.artist);
    return {
      type: "Song",
      title: song.title,
      subtitle: [artist?.name ?? song.artist, song.album, song.year].filter(Boolean).join(" · "),
      url: `/song/${song.slug}/`,
      searchText: [song.title, artist?.name ?? song.artist, song.album, song.year].filter(Boolean).join(" ")
    };
  }),
  ...albums.map((album) => ({
    type: "Album",
    title: album.title,
    subtitle: [album.artistName, album.year ?? album.releaseDate].filter(Boolean).join(" · "),
    url: `/album/${album.slug}/`,
    searchText: [album.title, album.artistName, album.year ?? album.releaseDate, album.label].filter(Boolean).join(" ")
  }))
].sort((left, right) => left.title.localeCompare(right.title));

export async function GET() {
  return new Response(JSON.stringify(searchItems), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=3600"
    }
  });
}
