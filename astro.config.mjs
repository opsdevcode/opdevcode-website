import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import AstroPWA from '@vite-pwa/astro';

export default defineConfig({
  site: 'https://opsdevco.de',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/privacy'),
    }),
    AstroPWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'OpsDevCo',
        short_name: 'OpsDevCo',
        description: 'Platform engineering advisory. AWS, GCP, EKS, Terraform, Karpenter, agentic development.',
        theme_color: '#0b0f17',
        background_color: '#0b0f17',
        display: 'standalone',
        icons: [
          {
            src: '/assets/opsdevco-logo-o-terminal.png',
            sizes: '36x36',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: '/assets/opsdevco-logo-o-terminal.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,svg,woff2}'],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024,
      },
    }),
  ],
});
