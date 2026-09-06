#!/usr/bin/env bash
# Retired. Product and company DNS for opsdevco.de is Route53 / Pulumi
# (opsdevcode/repave-aws-infra, stack `domains`). GoDaddy is registrar only.
#
# Do not use this script for recurring DNS. There is no GoDaddy API dependency.
set -euo pipefail
echo "Retired: opsdevco.de DNS is managed in Route53 (repave-aws-infra domains stack)." >&2
echo "GoDaddy remains the registrar. Change nameservers only once, from Pulumi" >&2
echo "output company_name_servers. See docs/PRODUCT-DOMAINS.md." >&2
exit 1
