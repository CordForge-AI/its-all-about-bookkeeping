// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// TODO: replace with the real production domain before launch.
const SITE_URL = 'https://www.itsallaboutbookkeeping.com';

// Set BASE_PATH (e.g. "/repo-name") when building for a subpath deployment
// like a GitHub Pages project site. Leave unset for normal production builds.
const BASE_PATH = process.env.BASE_PATH || '/';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
