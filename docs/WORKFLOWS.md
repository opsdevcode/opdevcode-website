# Workflow Troubleshooting

## release-please fails: "GitHub Actions is not permitted to create or approve pull requests"

**Cause:** The default `GITHUB_TOKEN` cannot create or approve PRs. This is common in org repos.

**Fix (choose one):**

1. **Enable the setting** (recommended):  
   **Settings → Actions → General** → under "Workflow permissions" → enable **"Allow GitHub Actions to create and approve pull requests"**.

2. **Use a Personal Access Token (PAT):**
   - Create a PAT with `repo` scope at https://github.com/settings/tokens
   - Add it as a repo secret: **Settings → Secrets and variables → Actions** → New repository secret → name: `RELEASE_PLEASE_TOKEN`
   - In `.github/workflows/release-please.yml`, add:
     ```yaml
     token: ${{ secrets.RELEASE_PLEASE_TOKEN }}
     ```

## Version Check fails

- Ensure commit messages follow [Conventional Commits](https://www.conventionalcommits.org/): `feat:`, `fix:`, `chore:`, etc.
- For `feat:` commits, a minor version bump is expected after merge (release-please creates the release PR).
