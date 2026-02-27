#!/usr/bin/env bash
# Set GoDaddy DNS records to point domain to Netlify.
# Requires: GODADDY_API_KEY, GODADDY_API_SECRET env vars.
# Get keys at: https://developer.godaddy.com/keys
#
# Usage:
#   DOMAIN=opsdevco.de NETLIFY_SITE=your-site.netlify.app ./scripts/godaddy-dns.sh
#   Or: npm run domain:godaddy (loads .env from project root if present)

set -euo pipefail

# Load .env from project root if it exists
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
[[ -f "${SCRIPT_DIR}/../.env" ]] && set -a && source "${SCRIPT_DIR}/../.env" && set +a

NETLIFY_LB_IP="75.2.60.5"
DOMAIN="${DOMAIN:-opsdevco.de}"
NETLIFY_SITE="${NETLIFY_SITE:-}"
if [[ -z "${NETLIFY_SITE}" || "${NETLIFY_SITE}" == *"YOUR_SITE"* ]]; then
  echo "Error: Set NETLIFY_SITE in .env to your Netlify site (e.g. opdevcode-website-abc123.netlify.app)"
  echo "  Find it at: app.netlify.com -> Site overview -> Site information"
  exit 1
fi

if [[ -z "${GODADDY_API_KEY:-}" || -z "${GODADDY_API_SECRET:-}" ]]; then
  echo "Error: GODADDY_API_KEY and GODADDY_API_SECRET must be set."
  echo "Get keys at: https://developer.godaddy.com/keys"
  exit 1
fi

AUTH="sso-key ${GODADDY_API_KEY}:${GODADDY_API_SECRET}"
BASE="https://api.godaddy.com/v1/domains/${DOMAIN}/records"

echo "Setting DNS for ${DOMAIN} -> Netlify (${NETLIFY_SITE})..."

# A record for root domain
curl -sSf -X PUT "${BASE}/A/@" \
  -H "Authorization: ${AUTH}" \
  -H "Content-Type: application/json" \
  -d "[{\"data\": \"${NETLIFY_LB_IP}\", \"ttl\": 600}]"
echo "  A @ -> ${NETLIFY_LB_IP}"

# CNAME for www
curl -sSf -X PUT "${BASE}/CNAME/www" \
  -H "Authorization: ${AUTH}" \
  -H "Content-Type: application/json" \
  -d "[{\"data\": \"${NETLIFY_SITE}\", \"ttl\": 3600}]"
echo "  CNAME www -> ${NETLIFY_SITE}"

echo "Done. DNS may take a few minutes to propagate."
