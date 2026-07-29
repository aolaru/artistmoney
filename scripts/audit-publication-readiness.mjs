import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { loadExportedDataModule } from "./load-data-module.mjs";

const reportDirectory = resolve(".reports");
const reportPath = join(reportDirectory, "publication-readiness.json");
const substantiveRoles = new Set(["primary-record", "independent-reporting", "rights-context"]);

function issuesFor(article) {
  const references = article?.references ?? [];
  const qualified = references.filter((reference) => substantiveRoles.has(reference.evidenceRole));
  const roles = new Set(qualified.map((reference) => reference.evidenceRole));
  const issues = [];

  if (!article?.research?.author) issues.push("missing named editorial desk");
  if (!article?.research?.reviewedOn) issues.push("missing review date");
  if ((article?.research?.modelInputs?.length ?? 0) < 2) issues.push("missing documented model inputs");
  if ((article?.research?.limitations?.length ?? 0) < 2) issues.push("missing documented limitations");
  if (qualified.length < 3) issues.push("fewer than three substantive source links");
  if (roles.size < 2) issues.push("fewer than two substantive evidence roles");

  return issues;
}

async function main() {
  const artistArticles = await loadExportedDataModule(resolve("src/data/artistArticles.ts"), "artistArticles");
  const songArticles = await loadExportedDataModule(resolve("src/data/songArticles.ts"), "songArticles");
  const queue = [
    ...Object.entries(artistArticles).map(([slug, article]) => ({ type: "artist", slug, issues: issuesFor(article) })),
    ...Object.entries(songArticles).map(([slug, article]) => ({ type: "song", slug, issues: issuesFor(article) }))
  ];
  const ready = queue.filter((entry) => entry.issues.length === 0);
  const report = {
    generatedAt: new Date().toISOString(),
    standard: {
      substantiveSources: 3,
      substantiveEvidenceRoles: 2,
      modelInputs: 2,
      limitations: 2,
      requiredFields: ["editorial desk", "review date"]
    },
    totals: {
      catalogArticles: queue.length,
      publishedCaseStudies: ready.length,
      researchQueue: queue.length - ready.length
    },
    ready,
    queue: queue.filter((entry) => entry.issues.length > 0)
  };

  mkdirSync(reportDirectory, { recursive: true });
  writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(
    `Publication readiness: ${report.totals.publishedCaseStudies}/${report.totals.catalogArticles} case studies published; ${report.totals.researchQueue} profiles remain in the research queue.`
  );
  console.log(`- Report: .reports/publication-readiness.json`);
}

main();
