import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://dawebmastaa.github.io',
  outDir: './docs',
  integrations: [tailwind()]
});