import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://reverieach.github.io',
  integrations: [react()],
  vite: {
    ssr: {
      noExternal: ['animal-island-ui'],
    },
  },
});
