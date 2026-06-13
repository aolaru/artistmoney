import { artistArticles } from "../data/artistArticles";
import { songArticles } from "../data/songArticles";
import type { Artist, Song } from "./catalog";
import { getArtistReferenceLinks, getSongReferenceLinks, type ReferenceLink, withReferenceCategory } from "./references";

function uniqueReferences(references: ReferenceLink[]) {
  const seen = new Set<string>();

  return references.map(withReferenceCategory).filter((reference) => {
    if (!reference.url || seen.has(reference.url)) return false;
    seen.add(reference.url);
    return true;
  });
}

function countUnique(values: Array<string | undefined>) {
  return new Set(values.filter(Boolean)).size;
}

function getStrictSongReferenceCount(song: Song) {
  const links = song.player?.links ?? {};

  return countUnique([
    links.appleMusic ?? song.player?.appleMusic,
    links.spotify,
    links.youtubeMusic,
    ...(songArticles[song.slug]?.references ?? []).map((reference) => reference.url)
  ]);
}

function getStrictArtistReferenceCount(artist: Artist, topSongs: Song[]) {
  const articleReferenceUrls = (artistArticles[artist.slug]?.references ?? []).map((reference) => reference.url);
  const topSongReferenceUrls = topSongs.flatMap((song) => {
    const links = song.player?.links ?? {};

    return [
      links.appleMusic ?? song.player?.appleMusic,
      links.spotify,
      links.youtubeMusic
    ].filter(Boolean).slice(0, 2);
  });

  return countUnique([...articleReferenceUrls, ...topSongReferenceUrls]);
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
      getStrictSongReferenceCount(song) >= 2
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
      getStrictArtistReferenceCount(artist, topSongs) >= 2
  );
}
