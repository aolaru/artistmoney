import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { readFileSync } from "node:fs";

function articleSlugs(filePath) {
  const source = readFileSync(new URL(filePath, import.meta.url), "utf8");
  return new Set([...source.matchAll(/["']([^"']+)["']\s*:/g)].map((match) => match[1]));
}

const artistArticleSlugs = articleSlugs("./src/data/artistArticles.ts");
const songArticleSlugs = articleSlugs("./src/data/songArticles.ts");

function shouldIncludeInSitemap(page) {
  const pathname = new URL(page).pathname;
  const alwaysIndex = new Set([
    "/",
    "/about/",
    "/contact/",
    "/privacy/",
    "/editorial-policy/",
    "/credits/",
    "/insights/"
  ]);

  if (alwaysIndex.has(pathname)) return true;
  if (pathname.startsWith("/insights/")) return true;

  const artistMatch = pathname.match(/^\/artist\/([^/]+)\/$/);
  if (artistMatch) return artistArticleSlugs.has(artistMatch[1]);

  const songMatch = pathname.match(/^\/song\/([^/]+)\/$/);
  if (songMatch) return songArticleSlugs.has(songMatch[1]);

  return false;
}

export default defineConfig({
  integrations: [sitemap({ filter: shouldIncludeInSitemap })],
  site: "https://howmuchmusic.com",
  base: "/",
  output: "static"
});
