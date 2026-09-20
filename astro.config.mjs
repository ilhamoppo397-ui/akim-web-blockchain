import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  site: 'https://akim.web.id',
  output: 'server',
  adapter: vercel({
    runtime: 'nodejs20.x',
  }),
});
