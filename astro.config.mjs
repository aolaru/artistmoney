import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { getReviewReadyPages } from "./scripts/review-ready-pages.mjs";

const reviewReadyPages = await getReviewReadyPages();

function shouldIncludeInSitemap(page) {
  const pathname = new URL(page).pathname;
  const alwaysIndex = new Set([
    "/",
    "/about/",
    "/contact/",
    "/privacy/",
    "/editorial-policy/",
    "/credits/",
    "/insights/",
    "/reviewed-songs/"
  ]);

  if (alwaysIndex.has(pathname)) return true;
  if (pathname.startsWith("/insights/")) return true;

  const artistMatch = pathname.match(/^\/artist\/([^/]+)\/$/);
  if (artistMatch) return reviewReadyPages.artistSlugs.has(artistMatch[1]);

  const songMatch = pathname.match(/^\/song\/([^/]+)\/$/);
  if (songMatch) return reviewReadyPages.songSlugs.has(songMatch[1]);

  return false;
}

export default defineConfig({
  integrations: [sitemap({ filter: shouldIncludeInSitemap })],
  site: "https://howmuchmusic.com",
  base: "/",
  output: "static"
});
