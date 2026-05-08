import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://krewllobster.github.io',
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
