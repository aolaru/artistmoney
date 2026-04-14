import { copyFile, stat } from "node:fs/promises";
import { join } from "node:path";

const distDir = new URL("../dist/", import.meta.url);
const sitemapCandidates = ["sitemap-0.xml", "sitemap-index.xml"];

for (const candidate of sitemapCandidates) {
  const sourcePath = join(distDir.pathname, candidate);

  try {
    const sourceStat = await stat(sourcePath);

    if (!sourceStat.isFile()) continue;

    await copyFile(sourcePath, join(distDir.pathname, "sitemap.xml"));
    process.exit(0);
  } catch {
    // Try the next candidate.
  }
}

throw new Error("No generated sitemap file was found in dist/.");
