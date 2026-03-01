# Workflow Troubleshooting

## release-please fails: "GitHub Actions is not permitted to create or approve pull requests"

**Cause:** The default `GITHUB_TOKEN` cannot create or approve PRs. This is common in org repos.

**Fix (do this first):**

1. Go to **Settings → Actions → General**: https://github.com/opsdevcode/opdevcode-website/settings/actions
2. Under **Workflow permissions**, select **Read and write permissions**
3. Check **Allow GitHub Actions to create and approve pull requests**
4. Click **Save**

**The workflow is configured to use a PAT.** Add the secret:
   - Create a PAT with `repo` scope at https://github.com/settings/tokens
   - Add it as a repo secret: **Settings → Secrets and variables → Actions** → New repository secret → name: `RELEASE_PLEASE_TOKEN`

## Version Check fails

- Ensure commit messages follow [Conventional Commits](https://www.conventionalcommits.org/): `feat:`, `fix:`, `chore:`, etc.
- For `feat:` commits, a minor version bump is expected after merge (release-please creates the release PR).
