import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const researchQueuePath = path.join(rootDir, "data", "research-candidates.json");
const legacyQueuePath = path.join(rootDir, "data", "candidate-artists.json");
const outputDir = path.join(rootDir, ".autopilot");

async function readJson(filePath) {
  return JSON.parse(await readFile(filePath, "utf8"));
}

async function main() {
  const [researchQueue, legacyQueue] = await Promise.all([
    readJson(researchQueuePath),
    readJson(legacyQueuePath)
  ]);
  const pending = researchQueue.candidates.filter((candidate) => candidate.status === "pending-research");
  const published = researchQueue.candidates.filter((candidate) => candidate.status === "research-published");
  const unpublishedLegacyCandidates = legacyQueue.filter((candidate) => candidate.checked !== true);
  const result = {
    generatedAt: new Date().toISOString(),
    mode: "read-only",
    pendingResearchCandidates: pending.length,
    publishedResearchCandidates: published.length,
    legacyCandidatesBlockedFromPublishing: unpublishedLegacyCandidates.length,
    nextResearchCandidates: pending.slice(0, 10).map(({ name, slug }) => ({ name, slug }))
  };
  const lines = [
    "# Research queue report",
    "",
    "- Mode: read-only",
    "- Automated public pages created: 0",
    `- Pending source-led research: ${result.pendingResearchCandidates}`,
    `- Published source-backed research records: ${result.publishedResearchCandidates}`,
    `- Legacy candidates blocked from automated publishing: ${result.legacyCandidatesBlockedFromPublishing}`,
    "",
    "## Next research candidates",
    "",
    ...result.nextResearchCandidates.map((candidate) => `- ${candidate.name} (\`${candidate.slug}\`)`),
    "",
    "## Publication gate",
    "",
    "A candidate can enter the catalog only after source-led research and a page-specific case study meet the repository's publication audits.",
    ""
  ];

  await mkdir(outputDir, { recursive: true });
  await Promise.all([
    writeFile(path.join(outputDir, "research-queue-result.json"), `${JSON.stringify(result, null, 2)}\n`, "utf8"),
    writeFile(path.join(outputDir, "research-queue-summary.md"), `${lines.join("\n")}\n`, "utf8")
  ]);
console.log(`Research queue: ${pending.length} pending; no catalog pages created.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
