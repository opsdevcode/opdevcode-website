# CLI Setup for Deploy and Domain

Use Netlify CLI and scripts to deploy and configure the custom domain from the terminal.

## Prerequisites

- Node.js 18+ (or 22 per `.nvmrc`)
- Netlify account
- GoDaddy API keys (for domain DNS)

## 1. Install and authenticate

```bash
npm install
npm run netlify:login   # Opens browser to authorize
npm run netlify:link    # Link this repo to your Netlify site
```

## 2. Deploy

```bash
npm run netlify:deploy  # Deploy to production
```

## 2b. Preview deploys (PRs)

Every pull request gets a **Deploy Preview** — a unique URL to test changes before merging.

- **URL format**: `deploy-preview-<PR#>--zingy-lamington-a3286a.netlify.app`
- **Where to find it**: Netlify posts a comment on the PR with "View deploy", or check **Site → Deploys** in the Netlify dashboard
- **Enable PR comments**: In Netlify: **Site settings** → **Build & deploy** → **Deploy notifications** → enable **GitHub pull request comments**

Always verify the preview before merging.

## 3. Custom domain (opsdevco.de)

### One-time: GoDaddy API keys

1. Go to [developer.godaddy.com/keys](https://developer.godaddy.com/keys)
2. Create Production API key and secret
3. Copy `.env.example` to `.env` and add your keys, or set env vars:

```bash
export GODADDY_API_KEY="your_key"
export GODADDY_API_SECRET="your_secret"
```

### Option A: Full setup (Netlify + GoDaddy)

```bash
# Ensure linked and NETLIFY_SITE is set (or auto-detected)
export GODADDY_API_KEY="..."
export GODADDY_API_SECRET="..."
npm run domain:add
```

This adds the domain to Netlify and configures GoDaddy DNS (A + CNAME).

### Option B: GoDaddy DNS only (API)

If you already added the domain in the Netlify UI and have 10+ domains (GoDaddy requires this for API access):

```bash
export GODADDY_API_KEY="..."
export GODADDY_API_SECRET="..."
export NETLIFY_SITE="your-site.netlify.app"   # From Netlify dashboard
npm run domain:godaddy
```

### Option C: Manual DNS (GoDaddy)

GoDaddy blocks API access for accounts with fewer than 10 domains. Use manual setup:

1. Add the domain in Netlify: **Site overview** → **Domain management** → **Add domain** → enter `opsdevco.de` and `www.opsdevco.de`.
2. Go to [dcc.godaddy.com](https://dcc.godaddy.com) → select **opsdevco.de** → **DNS** (or **Manage DNS**).
3. Add or edit these records:

| Type  | Name | Value                              | TTL  |
|-------|------|------------------------------------|------|
| A     | @    | 75.2.60.5                          | 600  |
| CNAME | www  | opdevcode-website.netlify.app      | 3600 |

4. Remove any conflicting A or CNAME records for `@` or `www`.
5. Save. DNS may take 5–60 minutes to propagate. Netlify will provision HTTPS automatically.

### DNS records reference

| Type  | Name | Value                    |
|-------|------|--------------------------|
| A     | @    | 75.2.60.5 (Netlify LB)  |
| CNAME | www  | [your-site].netlify.app |

### Optional: CAA record (Let's Encrypt only)

To restrict certificate issuance to Netlify's Let's Encrypt account, add a CAA record in GoDaddy:

| Type | Name | Value |
|------|------|-------|
| CAA | @ | `0 issue "letsencrypt.org;accounturi=https://acme-v02.api.letsencrypt.org/acme/acct/54403714"` |

## Scripts reference

| Script              | Command                 | Description                    |
|---------------------|-------------------------|--------------------------------|
| Login               | `npm run netlify:login` | Authenticate with Netlify      |
| Link                | `npm run netlify:link`  | Link repo to Netlify site      |
| Deploy              | `npm run netlify:deploy`| Deploy to production           |
| Status              | `npm run netlify:status`| Show linked site info          |
| Domain (full)       | `npm run domain:add`    | Add domain + configure GoDaddy |
| Domain (DNS only)   | `npm run domain:godaddy`| Configure GoDaddy DNS only     |

## Troubleshooting

- **Node not found**: Run `nvm use` or `fnm use` (or set version in `.tool-versions` for asdf)
- **NETLIFY_SITE unknown**: Get it from app.netlify.com → Site overview → Site information
- **GoDaddy UNABLE_TO_AUTHENTICATE**: Regenerate Production API keys at [developer.godaddy.com/keys](https://developer.godaddy.com/keys). Use Production keys with `api.godaddy.com` (not OTE). Update `.env` with the new key and secret.
- **GoDaddy ACCESS_DENIED**: GoDaddy requires 10+ domains for API access. Use [manual DNS setup](#option-c-manual-dns-godaddy) instead.
- **GoDaddy UNKNOWN_DOMAIN**: Confirm the domain is in your GoDaddy account and matches `DOMAIN` in `.env` (e.g. `opsdevco.de`).
- **Domain not resolving**: DNS can take 5–60 minutes to propagate
