import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://vacations.danniel.dev/",
  integrations: [tailwind(), vue(), sitemap(), robotsTxt()],
});
