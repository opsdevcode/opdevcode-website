# Product domains

OpsDevCode is the company namespace. Product sites use
`<product>.opsdevco.de`, while each product remains free to use the hosting
provider that fits its deployment.

## Ownership

- GoDaddy remains authoritative for `opsdevco.de` and serves the Netlify
  records for the company site.
- A deployed product may receive an NS delegation from GoDaddy to a
  product-owned Route 53 zone.
- The product infrastructure repository owns records and TLS below its
  delegated hostname.
- Netlify does not need to host or manage product DNS.

## Current registry

- `repave.opsdevco.de` — active target; delegated to Route 53 and served by
  the Repave AWS platform.
- `overpass.opsdevco.de` — pending; do not publish DNS before a deployment
  target exists.
- `toll.opsdevco.de` — pending; do not publish DNS before a deployment target
  exists.
- `dispatch.opsdevco.de` — pending; do not publish DNS before a deployment
  target exists.

The application registry is `PRODUCT_URLS` in `lib/site.ts`. A `null` value is
intentional: product cards continue to link to their source repositories until
the hostname has working DNS, valid TLS, and a verified deployment.
