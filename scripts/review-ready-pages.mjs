import { readdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { loadExportedDataModule } from "./load-data-module.mjs";

function readJsonCollection(directory) {
  return readdirSync(directory)
    .filter((fileName) => fileName.endsWith(".json"))
    .map((fileName) => JSON.parse(readFileSync(join(directory, fileName), "utf8")));
}

function getArtistImageSlugs(directory) {
  return new Set(
    readdirSync(directory)
      .filter((fileName) => /\.(jpe?g|png|webp)$/i.test(fileName))
      .map((fileName) => fileName.replace(/\.(jpe?g|png|webp)$/i, ""))
  );
}

function countUnique(values) {
  return new Set(values.filter(Boolean)).size;
}

function getSongReferenceCount(song, article, songPlayerMetadata) {
  const player = songPlayerMetadata[song.slug] ?? {};
  const links = player.links ?? {};

  return countUnique([
    links.appleMusic ?? player.appleMusic,
    links.spotify,
    links.youtubeMusic,
    links.amazonMusic,
    ...(article?.references ?? []).map((reference) => reference.url)
  ]);
}

function getArtistReferenceCount(artist, article, songBySlug, songPlayerMetadata) {
  const articleReferenceUrls = (article?.references ?? []).map((reference) => reference.url);
  const topSongReferenceUrls = (artist.top_songs ?? []).flatMap((songSlug) => {
    const song = songBySlug.get(songSlug);
    if (!song) return [];

    const player = songPlayerMetadata[song.slug] ?? {};
    const links = player.links ?? {};

    return [
      links.appleMusic ?? player.appleMusic,
      links.spotify,
      links.youtubeMusic,
      links.amazonMusic
    ].filter(Boolean).slice(0, 2);
  });

  return countUnique([...articleReferenceUrls, ...topSongReferenceUrls]);
}

function isReviewReadySong(song, article, songPlayerMetadata) {
  if (!song || !article) return false;
  const player = songPlayerMetadata[song.slug] ?? {};
  const links = player.links ?? {};

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
      player.artwork &&
      links.appleMusic &&
      links.spotify &&
      links.youtubeMusic &&
      getSongReferenceCount(song, article, songPlayerMetadata) >= 2
  );
}

function isReviewReadyArtist(artist, article, songBySlug, songPlayerMetadata, artistImageSlugs) {
  if (!artist || !article) return false;

  return Boolean(
    article.shortAnswer &&
      (article.sources?.length ?? 0) >= 2 &&
      artist.genre &&
      artist.country &&
      artist.active_since &&
      (artist.top_songs?.length ?? 0) >= 2 &&
      artistImageSlugs.has(artist.slug) &&
      artist.earnings?.artist_or_estate_share &&
      artist.earnings?.gross_catalog_revenue &&
      artist.ownership &&
      getArtistReferenceCount(artist, article, songBySlug, songPlayerMetadata) >= 2
  );
}

export async function getReviewReadyPages(root = process.cwd()) {
  const projectRoot = resolve(root);
  const rawArtists = readJsonCollection(resolve(projectRoot, "src/data/artists"));
  const rawSongs = readJsonCollection(resolve(projectRoot, "src/data/songs"));
  const artistMetadata = await loadExportedDataModule(
    resolve(projectRoot, "src/data/artistMetadata.ts"),
    "artistMetadata"
  );
  const artistArticles = await loadExportedDataModule(
    resolve(projectRoot, "src/data/artistArticles.ts"),
    "artistArticles"
  );
  const songMetadata = await loadExportedDataModule(
    resolve(projectRoot, "src/data/songMetadata.ts"),
    "songMetadata"
  );
  const songArticles = await loadExportedDataModule(
    resolve(projectRoot, "src/data/songArticles.ts"),
    "songArticles"
  );
  const songPlayerMetadata = await loadExportedDataModule(
    resolve(projectRoot, "src/data/songPlayerMetadata.ts"),
    "songPlayerMetadata"
  );

  const artists = rawArtists.map((artist) => {
    const supplemental = artistMetadata[artist.slug] ?? {};

    return {
      ...artist,
      genre: artist.genre ?? supplemental.genre,
      country: artist.country ?? supplemental.country,
      active_since: artist.active_since ?? supplemental.activeSince,
      bio: artist.bio ?? supplemental.summary
    };
  });
  const songs = rawSongs.map((song) => {
    const supplemental = songMetadata[song.slug] ?? {};

    return {
      ...song,
      album: song.album ?? supplemental.album,
      year: song.year ?? supplemental.year,
      meaning_summary: song.meaning_summary ?? supplemental.meaningSummary,
      revenue_drivers: song.revenue_drivers ?? supplemental.revenueDrivers,
      related_songs: song.related_songs ?? supplemental.relatedSongs
    };
  });
  const artistBySlug = new Map(artists.map((artist) => [artist.slug, artist]));
  const songBySlug = new Map(songs.map((song) => [song.slug, song]));
  const artistImageSlugs = getArtistImageSlugs(resolve(projectRoot, "public/images/artists"));

  const artistSlugs = Object.keys(artistArticles).filter((slug) =>
    isReviewReadyArtist(artistBySlug.get(slug), artistArticles[slug], songBySlug, songPlayerMetadata, artistImageSlugs)
  );
  const songSlugs = Object.keys(songArticles).filter((slug) =>
    isReviewReadySong(songBySlug.get(slug), songArticles[slug], songPlayerMetadata)
  );

  return {
    artistSlugs: new Set(artistSlugs),
    songSlugs: new Set(songSlugs),
    counts: {
      artistArticles: Object.keys(artistArticles).length,
      reviewReadyArtists: artistSlugs.length,
      songArticles: Object.keys(songArticles).length,
      reviewReadySongs: songSlugs.length
    }
  };
}
