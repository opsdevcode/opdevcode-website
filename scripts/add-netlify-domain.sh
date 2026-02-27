#!/usr/bin/env bash
# Add custom domain to Netlify site via API.
# Run after: netlify login (and optionally netlify link)
#
# Usage: DOMAIN=opsdevco.de ./scripts/add-netlify-domain.sh

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "${SCRIPT_DIR}/.." && pwd)"
DOMAIN="${DOMAIN:-opsdevco.de}"

# Get site ID from .netlify/state.json or list sites
if [[ -f "${PROJECT_ROOT}/.netlify/state.json" ]]; then
  SITE_ID=$(jq -r '.siteId // empty' "${PROJECT_ROOT}/.netlify/state.json")
fi
if [[ -z "${SITE_ID:-}" ]]; then
  echo "Linking to Netlify site..."
  cd "${PROJECT_ROOT}"
  SITE_JSON=$(npx netlify api listSites 2>/dev/null)
  SITE_ID=$(echo "${SITE_JSON}" | jq -r '.[0].id // empty')
  if [[ -z "${SITE_ID}" ]]; then
    echo "Error: No Netlify site found. Run: netlify login && netlify link"
    exit 1
  fi
  mkdir -p "${PROJECT_ROOT}/.netlify"
  SITE_NAME=$(echo "${SITE_JSON}" | jq -r '.[0].name // empty')
  echo "{\"siteId\":\"${SITE_ID}\",\"siteName\":\"${SITE_NAME}\"}" > "${PROJECT_ROOT}/.netlify/state.json"
fi

# Get token from Netlify config
CONFIG_PATH="${HOME}/Library/Preferences/netlify/config.json"
if [[ ! -f "${CONFIG_PATH}" ]]; then
  CONFIG_PATH="${HOME}/.config/netlify/config.json"
fi
if [[ ! -f "${CONFIG_PATH}" ]]; then
  echo "Error: Not logged in. Run: netlify login"
  exit 1
fi

TOKEN=$(jq -r '.users | to_entries[0].value.auth.token // empty' "${CONFIG_PATH}" 2>/dev/null)
if [[ -z "${TOKEN}" ]]; then
  echo "Error: No Netlify token. Run: netlify login"
  exit 1
fi

echo "Adding ${DOMAIN} and www.${DOMAIN} to site ${SITE_ID}..."
curl -sSf -X PATCH "https://api.netlify.com/api/v1/sites/${SITE_ID}" \
  -H "Authorization: Bearer ${TOKEN}" \
  -H "Content-Type: application/json" \
  -d "{\"custom_domain\": \"${DOMAIN}\", \"domain_aliases\": [\"www.${DOMAIN}\"]}" > /dev/null

echo "Done. DNS may take a few minutes. Configure GoDaddy DNS manually (see docs/CLI-SETUP.md)."
