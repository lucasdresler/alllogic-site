import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://alllogic.com.br',
  integrations: [sitemap()],
});
