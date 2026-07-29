import { artistArticles } from "../data/artistArticles";
import { songArticles } from "../data/songArticles";
import type { Artist, Song } from "./catalog";
import { hasDocumentedResearch, isSubstantiveEvidenceRole, type EvidenceRole } from "./publication";
import { getArtistReferenceLinks, getSongReferenceLinks, type ReferenceLink, withReferenceCategory } from "./references";

function uniqueReferences(references: ReferenceLink[]) {
  const seen = new Set<string>();

  return references.map(withReferenceCategory).filter((reference) => {
    if (!reference.url || seen.has(reference.url)) return false;
    seen.add(reference.url);
    return true;
  });
}

function hasQualifiedEvidence(references: Array<{ url: string; evidenceRole?: EvidenceRole }> = []) {
  const substantive = references.filter((reference) => isSubstantiveEvidenceRole(reference.evidenceRole));
  const uniqueUrls = new Set(substantive.map((reference) => reference.url).filter(Boolean));
  const roles = new Set(substantive.map((reference) => reference.evidenceRole));

  return uniqueUrls.size >= 3 && roles.size >= 2;
}

export function getSongReviewReferences(song: Song) {
  const articleReferences = songArticles[song.slug]?.references ?? [];
  return uniqueReferences([...articleReferences, ...getSongReferenceLinks(song)]);
}

export function getArtistReviewReferences(artist: Artist, topSongs: Song[]) {
  const articleReferences = artistArticles[artist.slug]?.references ?? [];
  return uniqueReferences([...articleReferences, ...getArtistReferenceLinks(artist, topSongs)]);
}

export function isSongReviewReady(song: Song) {
  const article = songArticles[song.slug];
  if (!article) return false;

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
      hasDocumentedResearch(article.research) &&
      hasQualifiedEvidence(article.references)
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
      hasDocumentedResearch(article.research) &&
      hasQualifiedEvidence(article.references)
  );
}
