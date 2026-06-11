import { artistArticles } from "../data/artistArticles";
import { songArticles } from "../data/songArticles";
import type { Artist, Song } from "./catalog";
import { getArtistReferenceLinks, getSongReferenceLinks, type ReferenceLink } from "./references";

function uniqueReferences(references: ReferenceLink[]) {
  const seen = new Set<string>();

  return references.filter((reference) => {
    if (!reference.url || seen.has(reference.url)) return false;
    seen.add(reference.url);
    return true;
  });
}

export function getSongReviewReferences(song: Song) {
  const articleReferences = songArticles[song.slug]?.references ?? [];
  return uniqueReferences([...articleReferences, ...getSongReferenceLinks(song)]);
}

export function getArtistReviewReferences(artist: Artist, topSongs: Song[]) {
  const articleReferences = artistArticles[artist.slug]?.references ?? [];
  return uniqueReferences([...articleReferences, ...getArtistReferenceLinks(topSongs)]);
}

export function isSongReviewReady(song: Song) {
  const article = songArticles[song.slug];
  if (!article) return false;

  const links = song.player?.links ?? {};

  return Boolean(
    article.shortAnswer &&
      (article.breakdown?.length ?? 0) >= 2 &&
      (article.whyItStillMakesMoney?.length ?? 0) >= 2 &&
      song.album &&
      song.year &&
      (song.related_songs?.length ?? 0) >= 2 &&
      song.earnings?.artist_or_estate_share &&
      song.earnings?.gross_track_revenue &&
      song.ownership &&
      song.player?.artwork &&
      links.appleMusic &&
      links.spotify &&
      links.youtubeMusic &&
      getSongReviewReferences(song).length >= 2
  );
}

export function isArtistReviewReady(artist: Artist, topSongs: Song[]) {
  const article = artistArticles[artist.slug];
  if (!article) return false;

  return Boolean(
    article.shortAnswer &&
      (article.sources?.length ?? 0) >= 2 &&
      artist.genre &&
      artist.country &&
      artist.active_since &&
      (artist.top_songs?.length ?? 0) >= 2 &&
      artist.earnings?.artist_or_estate_share &&
      artist.earnings?.gross_catalog_revenue &&
      artist.ownership &&
      getArtistReviewReferences(artist, topSongs).length >= 2
  );
}
