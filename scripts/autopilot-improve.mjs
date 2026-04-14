import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const artistDir = path.join(rootDir, "src", "data", "artists");
const songDir = path.join(rootDir, "src", "data", "songs");
const summaryDir = path.join(rootDir, ".autopilot");
const summaryPath = path.join(summaryDir, "summary.md");
const outputPath = path.join(summaryDir, "result.json");

const artistMissingFields = ["bio", "notable_for", "career_highlight", "revenue_drivers"];
const songMissingFields = ["meaning_summary", "revenue_drivers", "related_songs"];
const bannedPhrases = [
  "catalog catalog",
  "durable durable",
  "long-tail long-tail",
  "easy to revisit, emotionally legible, and well-suited to long-tail catalog listening"
];

function titleizeSlug(slug) {
  return slug
    .split("-")
    .map((part) => (part.length <= 3 ? part.toUpperCase() : part[0].toUpperCase() + part.slice(1)))
    .join(" ");
}

function lowerPhrase(value, fallback) {
  return value ? value.toLowerCase() : fallback;
}

function genreFamily(genre) {
  const normalized = (genre ?? "").toLowerCase();

  if (normalized.includes("hip-hop") || normalized.includes("trap") || normalized.includes("rap")) return "hip-hop";
  if (normalized.includes("electronic") || normalized.includes("ambient") || normalized.includes("idm") || normalized.includes("techno")) return "electronic";
  if (normalized.includes("pop") || normalized.includes("r&b") || normalized.includes("soul")) return "pop";
  if (normalized.includes("rock") || normalized.includes("grunge") || normalized.includes("metal")) return "rock";

  return "general";
}

function getRotationSeed() {
  const seedInput = process.env.GITHUB_RUN_NUMBER
    ?? process.env.GITHUB_RUN_ID
    ?? process.env.AUTOPILOT_ROTATION_SEED
    ?? new Date().toISOString().slice(0, 13);

  let total = 0;
  for (const char of seedInput) total += char.charCodeAt(0);
  return total;
}

function pickRotatingEntry(entries, predicate, seed) {
  const matches = entries.filter(predicate).sort((left, right) => left.file.localeCompare(right.file));
  if (matches.length === 0) return null;
  return matches[seed % matches.length];
}

function compactSentence(text) {
  return text.replace(/\s+/g, " ").trim();
}

function artistRevenueDrivers(artist) {
  const family = genreFamily(artist.genre);

  if (family === "hip-hop") {
    return [
      "Catalog streaming keeps legacy rap records active long after their original chart run.",
      "Playlist placement and cultural recognition help the biggest songs sustain repeat listening.",
      "Licensing, sampling, and nostalgia-driven discovery continue to support long-tail earnings."
    ];
  }

  if (family === "electronic") {
    return [
      "Long-tail streaming and electronic playlist use keep the catalog commercially active.",
      "Dedicated fan listening and reissue interest deepen catalog value beyond headline singles.",
      "Sync-friendly instrumentals or mood-driven tracks can extend revenue over time."
    ];
  }

  if (family === "pop") {
    return [
      "Repeat streaming and playlist familiarity help the strongest songs keep earning after release.",
      "Broad catalog recognition improves resilience across radio memory, social reuse, and rediscovery.",
      "Licensing and seasonal or event-driven playback can create recurring revenue spikes."
    ];
  }

  if (family === "rock") {
    return [
      "Classic catalog streaming keeps major songs active well beyond the original release cycle.",
      "Playlist longevity and generational rediscovery support steady long-tail listening.",
      "Film, television, sports, and trailer usage can reactivate demand for familiar recordings."
    ];
  }

  return [
    "Catalog streaming sustains earnings even after the original release cycle ends.",
    "Playlist use and listener rediscovery keep durable songs in circulation.",
    "Licensing and long-tail audience demand help extend catalog value over time."
  ];
}

function songRevenueDrivers(song, artist) {
  const family = genreFamily(artist?.genre);

  if (family === "hip-hop") {
    return [
      "Catalog streaming remains the main long-tail revenue source for recognizable rap tracks.",
      "Playlist placement and cultural recall help the song stay commercially active.",
      "Sampling, sync opportunities, and short-form rediscovery can extend earnings."
    ];
  }

  if (family === "electronic") {
    return [
      "Playlist and mood-based streaming support repeat listening over long periods.",
      "Electronic tracks can keep earning through steady niche demand and reissue interest.",
      "Licensing and soundtrack-style use can materially improve long-tail economics."
    ];
  }

  if (family === "pop") {
    return [
      "Streaming scale and playlist inclusion remain the largest recurring revenue drivers.",
      "A durable hook and broad familiarity help the song keep earning across catalog listening.",
      "Sync, social reuse, and seasonal spikes can add to the baseline stream count."
    ];
  }

  if (family === "rock") {
    return [
      "Classic replay value and catalog streaming keep major rock songs commercially relevant.",
      "Playlist placement and cultural familiarity support long-tail listener demand.",
      "Sync placements and live-culture recognition help extend the song's revenue life."
    ];
  }

  return [
    "Streaming and catalog discovery keep the song generating recurring revenue.",
    "Playlist longevity supports steady repeat listening over time.",
    "Licensing and cultural familiarity can create additional earnings beyond baseline streams."
  ];
}

function songMeaningSummary(song, artist) {
  const family = genreFamily(artist?.genre);

  if (family === "hip-hop") {
    return "This track pairs a memorable hook with strong cultural recall, which helps explain both its emotional staying power and its long-tail commercial value.";
  }

  if (family === "electronic") {
    return "This recording leans on atmosphere, texture, and replayable mood, which makes it durable in both listener memory and long-tail streaming.";
  }

  if (family === "pop") {
    return "This song combines direct emotion with a strong melodic center, making it easy to revisit and commercially durable over time.";
  }

  if (family === "rock") {
    return "This song holds value through a recognizable core riff or chorus, strong emotional payoff, and steady replay across catalog listening.";
  }

  return `${song.title} stays commercially durable because it is emotionally direct, easy to revisit, and well suited to long-tail catalog listening.`;
}

async function readJsonCollection(directory) {
  const entries = await readdir(directory);
  const jsonFiles = entries.filter((entry) => entry.endsWith(".json")).sort();

  return Promise.all(
    jsonFiles.map(async (file) => {
      const absolutePath = path.join(directory, file);
      const content = await readFile(absolutePath, "utf8");
      return {
        path: absolutePath,
        file,
        data: JSON.parse(content)
      };
    })
  );
}

function hasAnyMissingFields(record, fields) {
  return fields.some((field) => record[field] === undefined);
}

function validateTextField(value, label) {
  if (!value || typeof value !== "string") return;

  const normalized = compactSentence(value).toLowerCase();

  if (normalized.length < 40) {
    throw new Error(`${label} is too short to be useful.`);
  }

  for (const phrase of bannedPhrases) {
    if (normalized.includes(phrase)) {
      throw new Error(`${label} contains a banned repeated phrase: "${phrase}".`);
    }
  }
}

function validateStringArray(values, label) {
  if (!values) return;
  if (!Array.isArray(values) || values.length === 0) {
    throw new Error(`${label} must be a non-empty array when present.`);
  }

  const seen = new Set();
  for (const value of values) {
    if (typeof value !== "string") {
      throw new Error(`${label} must only contain strings.`);
    }

    const normalized = compactSentence(value);
    if (normalized.length < 12) {
      throw new Error(`${label} contains an item that is too short.`);
    }

    const fingerprint = normalized.toLowerCase();
    if (seen.has(fingerprint)) {
      throw new Error(`${label} contains duplicate items.`);
    }
    seen.add(fingerprint);
  }
}

function validateSlugArray(values, currentSlug, songMap, label) {
  if (!values) return;
  if (!Array.isArray(values) || values.length === 0) {
    throw new Error(`${label} must be a non-empty array when present.`);
  }

  const seen = new Set();
  for (const slug of values) {
    if (typeof slug !== "string") {
      throw new Error(`${label} must only contain slugs.`);
    }
    if (slug === currentSlug) {
      throw new Error(`${label} cannot contain the page's own slug.`);
    }
    if (!songMap.has(slug)) {
      throw new Error(`${label} references a missing song slug: ${slug}.`);
    }
    if (seen.has(slug)) {
      throw new Error(`${label} contains duplicate slugs.`);
    }
    seen.add(slug);
  }
}

function validateArtistRecord(artist) {
  validateTextField(artist.bio, `artist:${artist.slug}:bio`);
  validateTextField(artist.notable_for, `artist:${artist.slug}:notable_for`);
  validateTextField(artist.career_highlight, `artist:${artist.slug}:career_highlight`);
  validateStringArray(artist.revenue_drivers, `artist:${artist.slug}:revenue_drivers`);
}

function validateSongRecord(song, songMap) {
  validateTextField(song.meaning_summary, `song:${song.slug}:meaning_summary`);
  validateStringArray(song.revenue_drivers, `song:${song.slug}:revenue_drivers`);
  validateSlugArray(song.related_songs, song.slug, songMap, `song:${song.slug}:related_songs`);
}

function mergeArtistBackfill(artist, songMap) {
  const topSongTitles = artist.top_songs
    .map((slug) => songMap.get(slug)?.title ?? titleizeSlug(slug))
    .slice(0, 2);

  const updates = {};

  if (!artist.bio) {
    const catalogDescriptor = artist.genre ? `${lowerPhrase(artist.genre, "music")} catalog` : "catalog";
    updates.bio = `${artist.name} has a durable ${catalogDescriptor} that continues to attract listeners through streaming, playlists, and long-tail discovery.`;
  }

  if (!artist.notable_for) {
    updates.notable_for = topSongTitles.length > 0
      ? `${artist.name} remains closely associated with ${topSongTitles.join(" and ")}, which continue to anchor catalog attention.`
      : `${artist.name} maintains a catalog with durable replay value and recurring listener demand.`;
  }

  if (!artist.career_highlight) {
    updates.career_highlight = topSongTitles.length > 0
      ? `Songs like ${topSongTitles.join(" and ")} still help define the catalog's long-tail earnings profile.`
      : "The catalog still shows long-tail value through streaming, playlisting, and recurring discovery.";
  }

  if (!artist.revenue_drivers) {
    updates.revenue_drivers = artistRevenueDrivers(artist);
  }

  return Object.keys(updates).length > 0 ? { ...artist, ...updates } : null;
}

function mergeSongBackfill(song, artist, relatedSongs) {
  const updates = {};

  if (!song.meaning_summary) {
    updates.meaning_summary = songMeaningSummary(song, artist);
  }

  if (!song.revenue_drivers) {
    updates.revenue_drivers = songRevenueDrivers(song, artist);
  }

  if (!song.related_songs && relatedSongs.length > 0) {
    updates.related_songs = relatedSongs.slice(0, 3).map((entry) => entry.slug);
  }

  return Object.keys(updates).length > 0 ? { ...song, ...updates } : null;
}

async function writeSummary(result) {
  await mkdir(summaryDir, { recursive: true });

  const lines = [
    "# Autopilot run summary",
    "",
    `- Rotation seed: \`${result.seed}\``,
    `- Changed files: ${result.changes.length ? result.changes.length : 0}`,
    `- Validation: ${result.validation}`,
    ""
  ];

  if (result.changes.length > 0) {
    lines.push("## Changes", "");
    for (const change of result.changes) {
      lines.push(`- \`${change.kind}\` \`${change.slug}\` in \`${change.file}\``);
      lines.push(`  Fields added: ${change.fields.join(", ")}`);
    }
    lines.push("");
  } else {
    lines.push("## Changes", "", "- No missing editorial fields were found in scope.", "");
  }

  lines.push(
    "## Scope",
    "",
    "- Existing artists and songs only",
    "- No new files should be created by the updater",
    "- Build must pass before a PR is opened",
    ""
  );

  await writeFile(summaryPath, `${lines.join("\n")}\n`, "utf8");
  await writeFile(outputPath, `${JSON.stringify(result, null, 2)}\n`, "utf8");
}

async function main() {
  const artistFiles = await readJsonCollection(artistDir);
  const songFiles = await readJsonCollection(songDir);
  const songMap = new Map(songFiles.map((entry) => [entry.data.slug, entry.data]));
  const artistMap = new Map(artistFiles.map((entry) => [entry.data.slug, entry.data]));
  const songsByArtist = new Map();

  for (const entry of songFiles) {
    const existing = songsByArtist.get(entry.data.artist) ?? [];
    existing.push(entry.data);
    songsByArtist.set(entry.data.artist, existing);
  }

  const seed = getRotationSeed();
  const changes = [];

  const artistEntry = pickRotatingEntry(artistFiles, (entry) => hasAnyMissingFields(entry.data, artistMissingFields), seed);
  if (artistEntry) {
    const nextArtist = mergeArtistBackfill(artistEntry.data, songMap);
    if (nextArtist) {
      validateArtistRecord(nextArtist);
      await writeFile(artistEntry.path, `${JSON.stringify(nextArtist, null, 2)}\n`, "utf8");
      changes.push({
        kind: "artist",
        slug: nextArtist.slug,
        file: path.relative(rootDir, artistEntry.path),
        fields: artistMissingFields.filter((field) => artistEntry.data[field] === undefined && nextArtist[field] !== undefined)
      });
    }
  }

  const songEntry = pickRotatingEntry(songFiles, (entry) => hasAnyMissingFields(entry.data, songMissingFields), seed + 17);
  if (songEntry) {
    const artist = artistMap.get(songEntry.data.artist);
    const relatedSongs = (songsByArtist.get(songEntry.data.artist) ?? []).filter((entry) => entry.slug !== songEntry.data.slug);
    const nextSong = mergeSongBackfill(songEntry.data, artist, relatedSongs);
    if (nextSong) {
      validateSongRecord(nextSong, songMap);
      await writeFile(songEntry.path, `${JSON.stringify(nextSong, null, 2)}\n`, "utf8");
      changes.push({
        kind: "song",
        slug: nextSong.slug,
        file: path.relative(rootDir, songEntry.path),
        fields: songMissingFields.filter((field) => songEntry.data[field] === undefined && nextSong[field] !== undefined)
      });
    }
  }

  const result = {
    seed,
    validation: "passed",
    changes
  };

  await writeSummary(result);

  if (changes.length === 0) {
    console.log("No missing editorial fields found. Nothing to update.");
    return;
  }

  console.log(`Updated ${changes.map((change) => `${change.kind}:${change.slug}`).join(", ")}`);
}

main().catch(async (error) => {
  await mkdir(summaryDir, { recursive: true });
  await writeFile(summaryPath, `# Autopilot run summary\n\n- Validation: failed\n- Error: ${error.message}\n`, "utf8");
  console.error(error);
  process.exit(1);
});
