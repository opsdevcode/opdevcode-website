# Contributing

Thanks for contributing to opdevcode-website! This guide focuses on how to make
changes safely and how CI enforces conventions in this repo.

## Development workflow

1. Fork or create a branch from `main`.
2. Make your changes locally.
3. Open a pull request.

## Pull requests

All changes to `main` must go through a PR. Direct pushes are blocked for
non‑owners.

Required checks on `main`:

- `Version Check`
- `Direct Push Guard`

Optional: define a repo variable `ALLOWED_DIRECT_PUSH_USERS` with a
comma-separated list of GitHub usernames that may bypass PRs.

## Conventional Commits

This repo uses Conventional Commits. Examples:

- `feat: add new landing page`
- `fix: correct broken link`
- `chore: update dependencies`
- `docs: update README`

Add `!` or a `BREAKING CHANGE` footer for major bumps.

## Versioning

Versioning is driven by Conventional Commits and automated releases on `main`:

- `feat:` → minor bump
- `fix:` or `perf:` → patch bump
- `BREAKING CHANGE` or `type!:` → major bump

The Release workflow uses Conventional Commits to tag and publish releases on
every merge to `main`.

## Deployment (Netlify)

The site is hosted on [Netlify](https://www.netlify.com). To connect or redeploy:

1. Sign in at [app.netlify.com](https://app.netlify.com) (free account).
2. **Add new site** → **Import from Git** → choose **GitHub** → authorize.
3. Select `opsdevcode/opdevcode-website`.
4. Netlify reads `netlify.toml` — no build command or publish path to set.
5. Deploy.
6. (Optional) Add custom domain `opsdevco.de` in **Site settings** → **Domain management** and update DNS.

Every push to the deploy branch triggers a new deploy. PRs get preview deploys by default.

## Branch protection (GitHub Settings)

Configure branch protection for `main` in **Settings → Branches → Add rule**:

1. **Branch name pattern**: `main`
2. **Require a pull request before merging**: Yes
   - Require approvals: 1 (or your team's preference)
   - Dismiss stale reviews when new commits are pushed: optional
3. **Require status checks to pass before merging**: Yes
   - Require branches to be up to date: Yes
   - Status checks: `Version Check`, `Direct Push Guard`
4. **Do not allow bypassing the above settings**: recommended
5. **Restrict who can push to matching branches**: optional (e.g. limit to opsdevcode org members)
