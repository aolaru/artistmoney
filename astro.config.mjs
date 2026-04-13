import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  integrations: [sitemap()],
  site: "https://howmuchmusic.com",
  base: "/",
  output: "static"
});
