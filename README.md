# OpsDevCode Website

Company and product ecosystem site for [OpsDevCode](https://opsdevco.de). Built with [Next.js](https://nextjs.org) (App Router, static export) and deployed on Netlify. This is not the Repave product site; that lives at [repave.opsdevco.de](https://repave.opsdevco.de).

## Tech stack

- **Next.js 15** — React App Router, `output: 'export'`
- **Static HTML** — published from `out/`
- **SEO** — `sitemap.ts`, `robots.ts`, Open Graph, JSON-LD

## Development

```bash
npm install
npm run dev
```

Runs at [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Output: `out/` (see `netlify.toml` publish directory).

Quality gate:

```bash
npm run check
```

## Site architecture

| Route                                       | Role                                              |
| ------------------------------------------- | ------------------------------------------------- |
| `/`                                         | Company thesis, problem, ecosystem, products      |
| `/products`                                 | Portfolio                                         |
| `/products/{repave,overpass,toll,dispatch}` | Domain pages; hand off to product sites or GitHub |
| `/approach`                                 | How the parts fit; Convergence boundary           |
| `/services`                                 | Secondary advisory / implementation               |
| `/about`                                    | Company and founder                               |
| `/privacy`                                  | Privacy                                           |

Redirects: `/tools` → `/products`, `/agentic` → `/products/dispatch`.

**Content ownership:** product definitions follow OpsDevCode ADRs and sibling identity repos (Repave, Overpass, Toll, Dispatch). Convergence remains independent.

## Scripts

| Command               | Description                                            |
| --------------------- | ------------------------------------------------------ |
| `npm run dev`         | Next.js dev server                                     |
| `npm run build`       | Static production export                               |
| `npm start`           | Serve the Next production server (not used by Netlify) |
| `npm run check`       | Lint, format, typecheck, tests                         |
| `npm test`            | Node test runner against `lib/` contracts              |
| `npm run og:generate` | Generate OG image (requires Playwright)                |

## Deployment

Deployed on [Netlify](https://netlify.com). Build: `npm run build`, publish: `out/`.

- **Production**: [opsdevco.de](https://opsdevco.de)
- **Preview**: Each PR gets a deploy preview URL

See [CONTRIBUTING.md](CONTRIBUTING.md) for workflow and PR guidelines.

Product hostname ownership and activation rules are documented in
[docs/PRODUCT-DOMAINS.md](docs/PRODUCT-DOMAINS.md).
