# Product domains

OpsDevCode is the company namespace. Public product identity uses
`<product>.opsdevco.de`. Runtime topology is independent: Overpass, Toll, and
Dispatch implementation may still live in the Repave engine.

Convergence is not a product and must not receive a product-style subdomain.

## Ownership

- GoDaddy remains authoritative for `opsdevco.de` and serves the Netlify
  records for the company site.
- `repave.opsdevco.de` is NS-delegated to a product-owned Route 53 zone and
  served by the Repave AWS platform.
- `overpass`, `toll`, and `dispatch` identity hosts are CNAMEs to the company
  Netlify site until those products have their own deployed runtime.
- `repave.dev` is a permanent redirect to `https://repave.opsdevco.de`
  (Repave CanonicalHostMiddleware / portal ingress).

## Current registry

| Host                   | Role               | Serving                                     |
| ---------------------- | ------------------ | ------------------------------------------- |
| `opsdevco.de`          | Company            | Netlify (`opdevcode-website`)               |
| `repave.opsdevco.de`   | Repave (canonical) | Repave AWS / Route 53                       |
| `overpass.opsdevco.de` | Overpass identity  | Netlify host rewrite → `/products/overpass` |
| `toll.opsdevco.de`     | Toll identity      | Netlify host rewrite → `/products/toll`     |
| `dispatch.opsdevco.de` | Dispatch identity  | Netlify host rewrite → `/products/dispatch` |

The application registry is `PRODUCT_URLS` in `lib/site.ts`. Public CTAs use
those URLs. Do not link unauthenticated visitors to private GitHub product
repositories.

Waitlist/invite remains on the hosted Repave origin:
`https://repave.opsdevco.de/waitlist`.
