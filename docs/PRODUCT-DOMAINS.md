# Product domains

OpsDevCode is the company namespace. Public product identity uses
`<product>.opsdevco.de`. Runtime topology is independent: Overpass, Toll, and
Dispatch implementation may still live in the Repave engine until extraction.

Convergence is not a product and must not receive a product-style subdomain.

## Ownership

| Role | Owner |
| --- | --- |
| Registrar | GoDaddy |
| Authoritative DNS | AWS Route53 |
| DNS changes | Pulumi (`opsdevcode/repave-aws-infra`, stack `domains`) |
| Company website | Netlify (`opsdevco.de`, `www`) |
| Product HTTP | EKS ingress-nginx NLB |

Do **not** manage product records at GoDaddy. Do **not** run
`npm run domain:godaddy` (retired).

`repave.opsdevco.de` remains a **delegated child** Route53 zone. The parent
`opsdevco.de` zone holds Netlify, mail, and product aliases plus NS for
`repave`.

`repave.dev` is a permanent **308** to `https://repave.opsdevco.de` (path and
query preserved) via ingress-nginx; the portal `CanonicalHostMiddleware` is
backup for the same hosts.

## Current registry

| Host | Role | Serving |
| --- | --- | --- |
| `opsdevco.de` | Company | Netlify |
| `www.opsdevco.de` | Company | CNAME → apex (Netlify 301 to apex) |
| `repave.opsdevco.de` | Repave | EKS / child Route53 zone |
| `overpass.opsdevco.de` | Overpass | EKS (parent Route53 alias → NLB) |
| `toll.opsdevco.de` | Toll | EKS (parent Route53 alias → NLB) |
| `dispatch.opsdevco.de` | Dispatch | EKS (parent Route53 alias → NLB) |

The application registry is `PRODUCT_URLS` in `lib/site.ts`. Public CTAs use
those URLs. Do not link unauthenticated visitors to private GitHub product
repositories.

Waitlist/invite remains on the hosted Repave origin:
`https://repave.opsdevco.de/waitlist`.
