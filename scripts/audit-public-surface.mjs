import { readdir, readFile, stat } from "node:fs/promises";
import { join, resolve } from "node:path";

const distDir = resolve("dist");
const alwaysIndex = new Set([
  "/",
  "/about/",
  "/author/andrei-olaru/",
  "/contact/",
  "/editorial-policy/",
  "/insights/",
  "/privacy/"
]);

const files = await readdir(distDir);
const sitemapParts = files.filter((file) => /^sitemap-\d+\.xml$/.test(file));

if (sitemapParts.length === 0) {
  throw new Error("Public surface audit failed: no sitemap part was generated.");
}

const sitemapLocations = new Set();
for (const file of sitemapParts) {
  const xml = await readFile(join(distDir, file), "utf8");
  for (const match of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    sitemapLocations.add(new URL(match[1]).pathname);
  }
}

function outputPathFor(pathname) {
  return pathname === "/"
    ? join(distDir, "index.html")
    : join(distDir, pathname, "index.html");
}

function isAllowedPublicPath(pathname) {
  return (
    alwaysIndex.has(pathname) ||
    pathname === "/case-studies/" ||
    pathname.startsWith("/case-studies/") ||
    pathname.startsWith("/insights/") ||
    pathname.startsWith("/artist/") ||
    pathname.startsWith("/song/")
  );
}

const issues = [];
for (const pathname of sitemapLocations) {
  if (!isAllowedPublicPath(pathname)) {
    issues.push(`unexpected sitemap URL: ${pathname}`);
    continue;
  }

  const outputPath = outputPathFor(pathname);
  try {
    const output = await readFile(outputPath, "utf8");
    if (output.includes('<meta name="robots" content="noindex, follow"')) {
      issues.push(`noindex page in sitemap: ${pathname}`);
    }
  } catch {
    issues.push(`sitemap URL has no generated page: ${pathname}`);
  }
}

for (const directory of ["artist", "song"]) {
  const routeDirectory = join(distDir, directory);
  const entries = await readdir(routeDirectory, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const pathname = `/${directory}/${entry.name}/`;
    if (sitemapLocations.has(pathname)) continue;

    const output = await readFile(join(routeDirectory, entry.name, "index.html"), "utf8");
    if (!output.includes('<meta name="robots" content="noindex, follow"')) {
      issues.push(`unlisted catalog page is missing noindex: ${pathname}`);
    }
  }
}

const caseStudyDirectory = join(distDir, "case-studies");
for (const entry of await readdir(caseStudyDirectory, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const pathname = `/case-studies/${entry.name}/`;
  const outputPath = outputPathFor(pathname);
  const outputStat = await stat(outputPath);
  if (outputStat.isFile() && !sitemapLocations.has(pathname)) {
    issues.push(`published case study missing from sitemap: ${pathname}`);
  }
}

if (issues.length > 0) {
  throw new Error(`Public surface audit failed: ${issues.join("; ")}`);
}

console.log(`Public surface audit: ${sitemapLocations.size} sitemap URLs verified; no directory leakage found.`);
