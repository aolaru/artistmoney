import { getArtistVisual, songs, type Artist } from "./catalog";
import { isArtistReviewReady } from "./reviewReady";

export function getArtistTopSongs(artist: Artist) {
  return songs.filter((song) => artist.top_songs.includes(song.slug));
}

export function hasPublicArtistPage(artist: Artist) {
  const topSongs = getArtistTopSongs(artist);
  return isArtistReviewReady(artist, topSongs) && getArtistVisual(artist).provider === "artistPhoto";
}
