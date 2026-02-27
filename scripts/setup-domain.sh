#!/usr/bin/env bash
# One-shot: add custom domain to Netlify and configure GoDaddy DNS.
# Run from project root after: npm run netlify:link
#
# Required env vars: GODADDY_API_KEY, GODADDY_API_SECRET
# Optional: DOMAIN (default: opsdevco.de), NETLIFY_SITE (auto-detected if linked)
#
# Usage: npm run domain:add

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"
[[ -f "${PROJECT_ROOT}/.env" ]] && set -a && source "${PROJECT_ROOT}/.env" && set +a
DOMAIN="${DOMAIN:-opsdevco.de}"

cd "${PROJECT_ROOT}"

# Resolve NETLIFY_SITE (CNAME target)
if [[ -n "${NETLIFY_SITE:-}" ]]; then
  echo "Using NETLIFY_SITE=${NETLIFY_SITE}"
elif [[ -f .netlify/state.json ]]; then
  # Try netlify status output (contains site URL)
  NETLIFY_SITE=$(netlify status 2>/dev/null | grep -oE '[a-z0-9-]+\.netlify\.app' | head -1 || true)
fi
if [[ -z "${NETLIFY_SITE:-}" && -f .netlify/state.json ]]; then
  NETLIFY_SITE=$(jq -r 'if .siteName then .siteName + ".netlify.app" else empty end' .netlify/state.json 2>/dev/null || true)
fi
if [[ -z "${NETLIFY_SITE:-}" ]]; then
  echo "Error: Set NETLIFY_SITE to your Netlify site (e.g. your-site.netlify.app)"
  echo "  Find it at: app.netlify.com -> Site overview -> Site information"
  exit 1
fi

echo "Site: ${NETLIFY_SITE}"

# Add domain to Netlify (if linked)
if [[ -f .netlify/state.json ]]; then
  echo "Adding ${DOMAIN} to Netlify..."
  netlify api updateSite --data "{\"custom_domain\": \"${DOMAIN}\", \"domain_aliases\": [\"www.${DOMAIN}\"]}" 2>/dev/null || {
    echo "  (Add domain manually in Netlify UI if needed)"
  }
fi

# Configure GoDaddy DNS
export DOMAIN NETLIFY_SITE
"${SCRIPT_DIR}/godaddy-dns.sh"

echo ""
echo "Next: In Netlify UI (Domain management), verify ${DOMAIN} is listed."
echo "SSL will provision automatically once DNS propagates."
