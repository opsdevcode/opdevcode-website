# OpsDevCo Website

Marketing site for [OpsDevCo](https://opsdevco.de) — platform engineering advisory. Built with [Astro](https://astro.build), deployed on Netlify.

## Tech stack

- **Astro** — static site generator
- **PWA** — service worker, web app manifest (`@vite-pwa/astro`)
- **SEO** — sitemap, structured data, canonical URLs

## Development

```bash
npm install
npm run dev
```

Runs at [http://localhost:4321](http://localhost:4321).

## Build

```bash
npm run build
```

Output: `dist/`

Preview production build:

```bash
npm run preview
```

## Project structure

```
src/
├── components/     Header, Footer
├── layouts/        BaseLayout (meta, CSS, structured data)
├── pages/          Route pages (index, about, services, etc.)
└── styles/         Global CSS
public/
├── assets/         Images (logos, og-image)
└── robots.txt
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run og:generate` | Generate OG image (requires Playwright) |

## Deployment

Deployed on [Netlify](https://netlify.com). Build: `npm run build`, publish: `dist/`.

- **Production**: [opsdevco.de](https://opsdevco.de)
- **Preview**: Each PR gets a deploy preview URL

See [CONTRIBUTING.md](CONTRIBUTING.md) for workflow and PR guidelines.
