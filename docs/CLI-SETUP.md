# CLI setup for deploy and domain

Use Netlify CLI to deploy the **company** site. DNS for `opsdevco.de` is
**not** configured from this repo.

## Prerequisites

- Node.js 18+ (or 22 per `.nvmrc`)
- Netlify account

GoDaddy API keys are **not** required and must not be added for product DNS.

## 1. Install and authenticate

```bash
npm install
npm run netlify:login
npm run netlify:link
```

## 2. Deploy

```bash
npm run netlify:deploy
```

## 2b. Preview deploys (PRs)

Every pull request gets a Deploy Preview URL. Verify it before merging.

## 3. Custom domain (`opsdevco.de`)

Hosting stays on Netlify. Authoritative DNS is Route53 (Pulumi
`opsdevcode/repave-aws-infra` stack `domains`).

1. In Netlify: **Site settings** → **Domain management** → add `opsdevco.de`
   and `www.opsdevco.de` only. Do **not** add product hosts
   (`overpass` / `toll` / `dispatch` / `repave`) to Netlify.
2. Apex `A` `75.2.60.5` and `www` CNAME are Pulumi records, not GoDaddy edits.
3. One-time registrar step (after the Route53 parent zone exists): at GoDaddy,
   set nameservers to Pulumi output `company_name_servers`. After that, do not
   edit GoDaddy DNS.

Optional: `npm run domain:netlify` adds the company domain on the Netlify site
object. It does not change Route53.

## Scripts reference

| Script | Command | Description |
| --- | --- | --- |
| Login | `npm run netlify:login` | Authenticate with Netlify |
| Link | `npm run netlify:link` | Link repo to Netlify site |
| Deploy | `npm run netlify:deploy` | Deploy to production |
| Status | `npm run netlify:status` | Show linked site info |
| Domain (Netlify site) | `npm run domain:netlify` | Attach company domain on Netlify |

`npm run domain:godaddy` and `npm run domain:add` are retired (exit 1). They
must not be used for product DNS.
