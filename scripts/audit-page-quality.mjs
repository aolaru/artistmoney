import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, relative, resolve } from "node:path";
import { loadExportedDataModule } from "./load-data-module.mjs";
import { getReviewReadyPages } from "./review-ready-pages.mjs";

const REPORT_DIR = resolve(".reports");
const REPORT_PATH = join(REPORT_DIR, "page-quality-audit.json");
const TOP_LIMIT = 25;

function readJsonCollection(directory) {
  return readdirSync(directory)
    .filter((fileName) => fileName.endsWith(".json"))
    .map((fileName) => JSON.parse(readFileSync(join(directory, fileName), "utf8")));
}

function parseRevenueMidpoint(value) {
  if (!value) return null;

  const matches = [...String(value).matchAll(/\$?([0-9]+(?:\.[0-9]+)?)\s*([KMB])?/gi)]
    .map((match) => {
      let amount = Number(match[1]);
      const unit = (match[2] ?? "").toUpperCase();

      if (unit === "K") amount *= 1_000;
      if (unit === "M") amount *= 1_000_000;
      if (unit === "B") amount *= 1_000_000_000;

      return amount;
    })
    .filter(Number.isFinite);

  if (matches.length === 0) return null;
  if (matches.length === 1) return matches[0];

  return (matches[0] + matches[1]) / 2;
}

function sortByRevenue(items, getRevenue) {
  return [...items].sort((left, right) => {
    const leftRevenue = parseRevenueMidpoint(getRevenue(left)) ?? 0;
    const rightRevenue = parseRevenueMidpoint(getRevenue(right)) ?? 0;
    return rightRevenue - leftRevenue;
  });
}

function getArtistImageSlugs() {
  const artistImageDirectory = resolve("public/images/artists");

  return new Set(
    readdirSync(artistImageDirectory)
      .filter((fileName) => /\.(jpe?g|png|webp)$/i.test(fileName))
      .map((fileName) => fileName.replace(/\.(jpe?g|png|webp)$/i, ""))
  );
}

function createAlbumEntries(songs, albumMetadata) {
  const albums = new Map();

  songs.forEach((song) => {
    if (!song.album) return;

    const slug = `${song.artist}-${song.album
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")}`;
    const existing = albums.get(slug);

    if (existing) {
      existing.songs.push(song);
      existing.estimatedMidpoint += parseRevenueMidpoint(song.estimated_revenue) ?? 0;
      return;
    }

    albums.set(slug, {
      slug,
      title: song.album,
      artistSlug: song.artist,
      year: song.year,
      songs: [song],
      estimatedMidpoint: parseRevenueMidpoint(song.estimated_revenue) ?? 0,
      metadata: albumMetadata[slug] ?? {}
    });
  });

  return [...albums.values()];
}

function compactIssueList(issues) {
  return issues.filter(Boolean);
}

function auditArtist(artist, artistImageSlugs, artistMetadata, artistArticles) {
  const metadata = artistMetadata[artist.slug] ?? {};
  const article = artistArticles[artist.slug] ?? {};
  const overview = artist.bio ?? metadata.summary ?? article.shortAnswer;
  const revenueContext = artist.revenue_drivers ?? article.sources ?? [];

  return {
    slug: artist.slug,
    name: artist.name,
    midpoint: parseRevenueMidpoint(artist.earnings?.artist_or_estate_share ?? artist.estimated_income),
    issues: compactIssueList([
      !artistImageSlugs.has(artist.slug) && "missing self-hosted artist photo",
      !(artist.genre ?? metadata.genre) && "missing genre",
      !(artist.country ?? metadata.country) && "missing country",
      !(artist.active_since ?? metadata.activeSince) && "missing active-since metadata",
      !overview && "missing artist overview copy",
      revenueContext.length < 2 && "thin revenue-driver context",
      !artist.earnings?.artist_or_estate_share && "missing artist-side split",
      !artist.earnings?.gross_catalog_revenue && "missing gross catalog split",
      !artist.ownership && "missing ownership context",
      (artist.top_songs?.length ?? 0) < 2 && "fewer than two linked top songs",
      !parseRevenueMidpoint(artist.estimated_income) && "unparseable estimated income"
    ])
  };
}

function auditSong(song, songs, songPlayerMetadata, songMetadata, songArticles) {
  const player = songPlayerMetadata[song.slug];
  const metadata = songMetadata[song.slug] ?? {};
  const article = songArticles[song.slug] ?? {};
  const overview = song.meaning_summary ?? metadata.meaningSummary ?? article.shortAnswer;
  const revenueContext = song.revenue_drivers ?? metadata.revenueDrivers ?? article.breakdown ?? article.whyItStillMakesMoney ?? [];
  const relatedSongs = song.related_songs ?? metadata.relatedSongs ?? [];
  const sameArtistFallbackCount = songs.filter((entry) => entry.artist === song.artist && entry.slug !== song.slug).length;

  return {
    slug: song.slug,
    title: song.title,
    midpoint: parseRevenueMidpoint(song.earnings?.artist_or_estate_share ?? song.estimated_revenue),
    issues: compactIssueList([
      !(song.album ?? metadata.album) && "missing album",
      !(song.year ?? metadata.year) && "missing release year",
      !overview && "missing song overview copy",
      revenueContext.length < 2 && "thin revenue-driver context",
      relatedSongs.length < 2 && sameArtistFallbackCount < 2 && "thin related-song links",
      !song.earnings?.artist_or_estate_share && "missing artist-side split",
      !song.earnings?.gross_track_revenue && "missing gross track revenue",
      !song.ownership && "missing ownership context",
      !player?.artwork && "missing provider artwork",
      !player?.links?.appleMusic && "missing Apple Music link",
      !player?.links?.spotify && "missing Spotify link",
      !player?.links?.youtubeMusic && "missing YouTube Music link",
      !parseRevenueMidpoint(song.estimated_revenue) && "unparseable estimated revenue"
    ])
  };
}

function auditAlbum(album) {
  const metadata = album.metadata;

  return {
    slug: album.slug,
    title: album.title,
    artistSlug: album.artistSlug,
    midpoint: album.estimatedMidpoint,
    issues: compactIssueList([
      !metadata.releaseDate && "missing release date",
      !metadata.label && "missing label",
      !metadata.trackCount && "missing track count",
      !metadata.fullTracklist?.length && "missing full tracklist",
      !metadata.links?.appleMusic && "missing Apple Music album link",
      !metadata.links?.spotify && "missing Spotify album link",
      album.songs.length < 2 && "only one tracked song supports album revenue"
    ])
  };
}

function includesRepeatedTemplateLanguage(article) {
  const text = [
    article?.seoTitle,
    article?.shortAnswer,
    ...(article?.sources ?? []),
    ...(article?.breakdown ?? []),
    ...(article?.whyItStillMakesMoney ?? []),
    article?.insight
  ].filter(Boolean).join(" ").toLowerCase();

  return [
    "strongest when read as a split-aware catalog model",
    "clearest catalog anchors",
    "not just gross demand",
    "does not claim access to private royalty statements"
  ].some((phrase) => text.includes(phrase));
}

function auditHumanQualityArtist(artist, artistArticles) {
  const article = artistArticles[artist.slug];

  return {
    slug: artist.slug,
    name: artist.name,
    issues: compactIssueList([
      !article && "missing artist article entry",
      article && !article.references?.length && "missing article-level external reference",
      article && !article.evidence?.length && "missing page-specific evidence notes",
      article && !article.methodologyNotes?.length && "missing methodology-limit notes",
      article && includesRepeatedTemplateLanguage(article) && "contains repeated template phrasing"
    ])
  };
}

function auditHumanQualitySong(song, songArticles) {
  const article = songArticles[song.slug];

  return {
    slug: song.slug,
    title: song.title,
    issues: compactIssueList([
      !article && "missing song article entry",
      article && !article.references?.length && "missing article-level external reference",
      article && !article.evidence?.length && "missing page-specific evidence notes",
      article && !article.methodologyNotes?.length && "missing methodology-limit notes",
      article && includesRepeatedTemplateLanguage(article) && "contains repeated template phrasing"
    ])
  };
}

function buildArtistImagePriority(artists, artistImageSlugs) {
  return sortByRevenue(artists, (artist) => artist.earnings?.artist_or_estate_share ?? artist.estimated_income)
    .filter((artist) => !artistImageSlugs.has(artist.slug))
    .slice(0, 25)
    .map((artist, index) => {
      const midpoint = parseRevenueMidpoint(artist.earnings?.artist_or_estate_share ?? artist.estimated_income);
      const topSongCount = artist.top_songs?.length ?? 0;

      return {
        priority: index + 1,
        slug: artist.slug,
        name: artist.name,
        midpoint,
        estimatedIncome: artist.estimated_income,
        reasons: compactIssueList([
          "missing self-hosted artist photo",
          midpoint ? "high modeled artist-side revenue" : null,
          topSongCount >= 2 ? `${topSongCount} linked top songs` : null,
          artist.genre ? `${artist.genre} catalog page` : null
        ])
      };
    });
}

function summarize(entries) {
  const withIssues = entries.filter((entry) => entry.issues.length > 0);

  return {
    checked: entries.length,
    withIssues: withIssues.length,
    issueCount: entries.reduce((sum, entry) => sum + entry.issues.length, 0),
    clean: entries.length - withIssues.length
  };
}

async function main() {
  const artists = readJsonCollection(resolve("src/data/artists"));
  const songs = readJsonCollection(resolve("src/data/songs"));
  const albumMetadata = await loadExportedDataModule(resolve("src/data/albumMetadata.ts"), "albumMetadata");
  const artistMetadata = await loadExportedDataModule(resolve("src/data/artistMetadata.ts"), "artistMetadata");
  const artistArticles = await loadExportedDataModule(resolve("src/data/artistArticles.ts"), "artistArticles");
  const songMetadata = await loadExportedDataModule(resolve("src/data/songMetadata.ts"), "songMetadata");
  const songArticles = await loadExportedDataModule(resolve("src/data/songArticles.ts"), "songArticles");
  const songPlayerMetadata = await loadExportedDataModule(resolve("src/data/songPlayerMetadata.ts"), "songPlayerMetadata");
  const artistImageSlugs = getArtistImageSlugs();
  const albums = createAlbumEntries(songs, albumMetadata);
  const artistImagePriority = buildArtistImagePriority(artists, artistImageSlugs);
  const reviewReadyPages = await getReviewReadyPages();

  const topArtists = sortByRevenue(artists, (artist) => artist.earnings?.artist_or_estate_share ?? artist.estimated_income)
    .slice(0, TOP_LIMIT)
    .map((artist) => auditArtist(artist, artistImageSlugs, artistMetadata, artistArticles));
  const topSongs = sortByRevenue(songs, (song) => song.earnings?.artist_or_estate_share ?? song.estimated_revenue)
    .slice(0, TOP_LIMIT)
    .map((song) => auditSong(song, songs, songPlayerMetadata, songMetadata, songArticles));
  const topAlbums = sortByRevenue(albums, (album) => String(album.estimatedMidpoint))
    .slice(0, TOP_LIMIT)
    .map(auditAlbum);
  const reviewReadyArtists = artists
    .filter((artist) => reviewReadyPages.artistSlugs.has(artist.slug))
    .map((artist) => auditArtist(artist, artistImageSlugs, artistMetadata, artistArticles));
  const reviewReadySongs = songs
    .filter((song) => reviewReadyPages.songSlugs.has(song.slug))
    .map((song) => auditSong(song, songs, songPlayerMetadata, songMetadata, songArticles));
  const humanQualityArtists = artists
    .filter((artist) => reviewReadyPages.artistSlugs.has(artist.slug))
    .map((artist) => auditHumanQualityArtist(artist, artistArticles));
  const humanQualitySongs = songs
    .filter((song) => reviewReadyPages.songSlugs.has(song.slug))
    .map((song) => auditHumanQualitySong(song, songArticles));

  const report = {
    generatedAt: new Date().toISOString(),
    scope: `Top ${TOP_LIMIT} artists, songs, and albums by modeled midpoint revenue`,
    coverage: {
      artists: artists.length,
      songs: songs.length,
      albums: albums.length,
      selfHostedArtistPhotos: artistImageSlugs.size,
      artistPhotoCoverage: Number((artistImageSlugs.size / artists.length).toFixed(3)),
      missingArtistPhotos: artists.length - artistImageSlugs.size
    },
    summary: {
      artists: summarize(topArtists),
      songs: summarize(topSongs),
      albums: summarize(topAlbums)
    },
    reviewReadyGate: {
      counts: reviewReadyPages.counts,
      summary: {
        artists: summarize(reviewReadyArtists),
        songs: summarize(reviewReadySongs)
      },
      artists: reviewReadyArtists,
      songs: reviewReadySongs
    },
    humanQuality: {
      scope: "Review-ready artist and song pages; flags editorial depth and repeated wording, not required-field validity",
      summary: {
        artists: summarize(humanQualityArtists),
        songs: summarize(humanQualitySongs)
      },
      artists: humanQualityArtists,
      songs: humanQualitySongs
    },
    artistImagePriority,
    topArtists,
    topSongs,
    topAlbums
  };

  mkdirSync(REPORT_DIR, { recursive: true });
  writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));

  const issueCount =
    report.summary.artists.issueCount +
    report.summary.songs.issueCount +
    report.summary.albums.issueCount;

  console.log(
    `Page quality audit: ${issueCount} improvement flag(s) across top ${TOP_LIMIT} artist/song/album pages.`
  );
  const reviewReadyIssueCount =
    report.reviewReadyGate.summary.artists.issueCount +
    report.reviewReadyGate.summary.songs.issueCount;
  console.log(
    `Review-ready audit: ${reviewReadyIssueCount} improvement flag(s) across ${reviewReadyArtists.length} artist and ${reviewReadySongs.length} song pages.`
  );
  console.log(
    `- Review-ready gate: ${reviewReadyPages.counts.reviewReadyArtists}/${reviewReadyPages.counts.artistArticles} artist articles, ${reviewReadyPages.counts.reviewReadySongs}/${reviewReadyPages.counts.songArticles} song articles.`
  );
  const humanQualityIssueCount =
    report.humanQuality.summary.artists.issueCount +
    report.humanQuality.summary.songs.issueCount;
  console.log(
    `- Human quality audit: ${humanQualityIssueCount} editorial flag(s) across review-ready pages.`
  );
  console.log(`- Artist photo coverage: ${artistImageSlugs.size}/${artists.length}`);
  if (artistImagePriority.length > 0) {
    console.log(`- Next artist images: ${artistImagePriority.slice(0, 5).map((artist) => artist.name).join(", ")}`);
  }
  console.log(`- Report: ${relative(process.cwd(), REPORT_PATH)}`);
}

main();
