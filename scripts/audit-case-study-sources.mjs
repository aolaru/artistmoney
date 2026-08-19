import { resolve } from "node:path";
import { loadExportedDataModule } from "./load-data-module.mjs";

const studies = await loadExportedDataModule(resolve("src/data/caseStudies.ts"), "caseStudies");
const urls = [...new Set(studies.flatMap((study) => study.sources.map((source) => source.url)))];
const results = await Promise.all(urls.map(async (url) => {
  try {
    const response = await fetch(url, {
      redirect: "follow",
      signal: AbortSignal.timeout(15_000),
      headers: { "user-agent": "HowMuchMusicSourceAudit/1.0" }
    });
    return { url, status: response.status };
  } catch (error) {
    return { url, status: 0, error: error instanceof Error ? error.message : String(error) };
  }
}));

const failed = results.filter((result) => result.status < 200 || result.status >= 400);

for (const result of results) {
  console.log(`${result.status}\t${result.url}${result.error ? `\t${result.error}` : ""}`);
}

if (failed.length > 0) {
  throw new Error(`Case study source audit failed: ${failed.length}/${urls.length} source links need review.`);
}

console.log(`Case study source audit: ${urls.length} unique public source links responded successfully.`);
