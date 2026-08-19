import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const readJson = async (relativePath) => JSON.parse(await readFile(path.join(rootDir, relativePath), "utf8"));
const [researchQueue, publishQueue] = await Promise.all([
  readJson("data/research-candidates.json"),
  readJson("data/candidate-artists.json")
]);

if (!Array.isArray(researchQueue.candidates) || researchQueue.candidates.length === 0) {
  throw new Error("Research candidate queue must contain at least one candidate.");
}

const artistDirectory = path.join(rootDir, "src/data/artists");
const existingCatalogSlugs = new Set(
  (await readdir(artistDirectory))
    .filter((file) => file.endsWith(".json"))
    .map((file) => path.basename(file, ".json"))
);
const publishQueueSlugs = new Set(publishQueue.map((candidate) => candidate.artist?.slug));
const seen = new Set();

for (const candidate of researchQueue.candidates) {
  if (!candidate.name || !candidate.slug || candidate.status !== "pending-research" || !candidate.addedAt) {
    throw new Error(`Invalid research candidate: ${JSON.stringify(candidate)}`);
  }

  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(candidate.slug)) {
    throw new Error(`Research candidate slug is invalid: ${candidate.name}`);
  }

  if (seen.has(candidate.slug) || publishQueueSlugs.has(candidate.slug) || existingCatalogSlugs.has(candidate.slug)) {
    throw new Error(`Research candidate duplicates an existing artist or queue entry: ${candidate.name}`);
  }

  seen.add(candidate.slug);
}

console.log(`Research candidate audit: ${researchQueue.candidates.length} pending artists validated.`);
