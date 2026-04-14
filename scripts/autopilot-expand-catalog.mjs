import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const queuePath = path.join(rootDir, "data", "candidate-artists.json");
const artistDir = path.join(rootDir, "src", "data", "artists");
const songDir = path.join(rootDir, "src", "data", "songs");
const summaryDir = path.join(rootDir, ".autopilot");
const summaryPath = path.join(summaryDir, "catalog-summary.md");
const outputPath = path.join(summaryDir, "catalog-result.json");
const batchSize = 3;

function ensureArray(value, label) {
  if (!Array.isArray(value) || value.length === 0) {
    throw new Error(`${label} must be a non-empty array.`);
  }
}

async function fileExists(absolutePath) {
  try {
    await readFile(absolutePath, "utf8");
    return true;
  } catch {
    return false;
  }
}

function validateCandidate(candidate) {
  if (typeof candidate.checked !== "boolean") {
    throw new Error("Each candidate must include a boolean checked flag.");
  }

  if (!candidate.artist || typeof candidate.artist !== "object") {
    throw new Error("Each candidate must include an artist object.");
  }

  if (!candidate.artist.slug || !candidate.artist.name) {
    throw new Error("Candidate artist must include name and slug.");
  }

  ensureArray(candidate.artist.top_songs, `artist:${candidate.artist.slug}:top_songs`);
  ensureArray(candidate.songs, `artist:${candidate.artist.slug}:songs`);

  if (candidate.songs.length < 2) {
    throw new Error(`artist:${candidate.artist.slug} must include at least two songs.`);
  }

  const songSlugs = new Set();
  for (const song of candidate.songs) {
    if (!song.title || !song.slug || !song.artist || !song.estimated_revenue) {
      throw new Error(`artist:${candidate.artist.slug} has an invalid song entry.`);
    }
    if (song.artist !== candidate.artist.slug) {
      throw new Error(`song:${song.slug} must point back to artist:${candidate.artist.slug}.`);
    }
    if (songSlugs.has(song.slug)) {
      throw new Error(`artist:${candidate.artist.slug} has duplicate song slug ${song.slug}.`);
    }
    songSlugs.add(song.slug);
  }

  for (const slug of candidate.artist.top_songs) {
    if (!songSlugs.has(slug)) {
      throw new Error(`artist:${candidate.artist.slug} top song ${slug} is missing from its song list.`);
    }
  }

  for (const song of candidate.songs) {
    if (!song.related_songs) continue;
    if (!Array.isArray(song.related_songs) || song.related_songs.length === 0) {
      throw new Error(`song:${song.slug} related_songs must be a non-empty array when present.`);
    }

    for (const relatedSlug of song.related_songs) {
      if (relatedSlug === song.slug) {
        throw new Error(`song:${song.slug} cannot reference itself in related_songs.`);
      }
      if (!songSlugs.has(relatedSlug)) {
        throw new Error(`song:${song.slug} related song ${relatedSlug} is missing from its candidate song list.`);
      }
    }
  }
}

async function loadQueue() {
  const content = await readFile(queuePath, "utf8");
  const queue = JSON.parse(content);

  ensureArray(queue, "candidate-artists.json");
  queue.forEach(validateCandidate);
  return queue;
}

async function writeJson(absolutePath, value) {
  await writeFile(absolutePath, `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

async function writeSummary(result) {
  await mkdir(summaryDir, { recursive: true });

  const lines = [
    "# Weekly catalog expansion summary",
    "",
    `- Candidates processed: ${result.changes.length}`,
    `- Validation: ${result.validation}`,
    ""
  ];

  if (result.changes.length > 0) {
    lines.push("## Added artists", "");
    for (const change of result.changes) {
      lines.push(`- \`${change.artist.slug}\` (${change.artist.name})`);
      lines.push(`  Songs: ${change.songs.join(", ")}`);
    }
    lines.push("");
  } else {
    lines.push("## Added artists", "", "- No unchecked candidate artists were available.", "");
  }

  lines.push(
    "## Scope",
    "",
    "- Added up to 3 unchecked artists from `data/candidate-artists.json`",
    "- Wrote artist and song JSON files only",
    "- Marked processed queue entries as checked",
    "- Build must pass before a PR is opened",
    ""
  );

  await writeFile(summaryPath, `${lines.join("\n")}\n`, "utf8");
  await writeFile(outputPath, `${JSON.stringify(result, null, 2)}\n`, "utf8");
}

async function main() {
  const queue = await loadQueue();
  const changes = [];

  for (const candidate of queue) {
    if (candidate.checked) continue;
    if (changes.length >= batchSize) break;

    const artistPath = path.join(artistDir, `${candidate.artist.slug}.json`);
    if (await fileExists(artistPath)) {
      candidate.checked = true;
      candidate.checked_note = "Artist already existed in catalog.";
      continue;
    }

    for (const song of candidate.songs) {
      const songPath = path.join(songDir, `${song.slug}.json`);
      if (await fileExists(songPath)) {
        throw new Error(`Refusing to add ${candidate.artist.slug}; song slug already exists: ${song.slug}`);
      }
    }

    await writeJson(artistPath, candidate.artist);

    for (const song of candidate.songs) {
      await writeJson(path.join(songDir, `${song.slug}.json`), song);
    }

    candidate.checked = true;
    candidate.checked_note = "Added to catalog by weekly automation.";
    changes.push({
      artist: {
        slug: candidate.artist.slug,
        name: candidate.artist.name
      },
      songs: candidate.songs.map((song) => song.slug)
    });
  }

  await writeJson(queuePath, queue);

  const result = {
    validation: "passed",
    changes
  };

  await writeSummary(result);

  if (changes.length === 0) {
    console.log("No unchecked candidate artists were available.");
    return;
  }

  console.log(`Added ${changes.map((change) => change.artist.slug).join(", ")}`);
}

main().catch(async (error) => {
  await mkdir(summaryDir, { recursive: true });
  await writeFile(summaryPath, `# Weekly catalog expansion summary\n\n- Validation: failed\n- Error: ${error.message}\n`, "utf8");
  console.error(error);
  process.exit(1);
});
