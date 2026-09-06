#!/usr/bin/env bash
# Retired. Company hosting is Netlify; DNS is Route53/Pulumi.
# Use: npm run domain:netlify  (Netlify site object only)
# DNS: opsdevcode/repave-aws-infra stack `domains`
set -euo pipefail
echo "Retired: do not configure DNS from this repo." >&2
echo "Use npm run domain:netlify to attach opsdevco.de on Netlify if needed." >&2
echo "Authoritative DNS is Pulumi Route53 (repave-aws-infra domains stack)." >&2
exit 1
