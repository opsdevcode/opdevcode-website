# Product domains

OpsDevCode is the company namespace. Public product identity uses
`<product>.opsdevco.de`. Runtime topology is independent: Overpass, Toll, and
Dispatch implementation may still live in the Repave engine until extraction.

Convergence is not a product and must not receive a product-style subdomain.

## Ownership

| Role              | Owner                                                         |
| ----------------- | ------------------------------------------------------------- |
| Registrar         | GoDaddy                                                       |
| Authoritative DNS | AWS Route53                                                   |
| DNS changes       | Pulumi (`opsdevcode/repave-aws-infra`, stack `domains`)       |
| Company website   | Netlify (`opsdevco.de`, `www`)                                |
| Product HTTP      | EKS ingress-nginx NLB (IP-mode, AWS Load Balancer Controller) |

Do **not** manage product records at GoDaddy. Do **not** run
`npm run domain:godaddy` (retired). Do **not** 200-rewrite product hosts
on Netlify; those names are Route53 aliases to the cluster NLB.

`repave.opsdevco.de` remains a **delegated child** Route53 zone. The parent
`opsdevco.de` zone holds Netlify, mail, and product aliases plus NS for
`repave`.

Mint’s public identity is the company page `https://opsdevco.de/products/mint`.
Language docs currently answer GET at
`https://opsdevcode.github.io/specmint-language/`. Do **not** link
`mint.opsdevco.de` until that host answers GET. A dedicated Mint hostname is
an owner DNS action, not a company-site rewrite.

`repave.dev` is a permanent **308** to `https://repave.opsdevco.de` (path and
query preserved) via ingress-nginx; the portal `CanonicalHostMiddleware` is
backup for the same hosts.

## Current registry

| Host                                      | Role                   | Serving                                           |
| ----------------------------------------- | ---------------------- | ------------------------------------------------- |
| `opsdevco.de`                             | Company                | Netlify                                           |
| `www.opsdevco.de`                         | Company                | CNAME → apex (Netlify 301 to apex)                |
| `opsdevco.de/products/mint`               | Mint (public identity) | Netlify company route; no live `mint.opsdevco.de` |
| `opsdevcode.github.io/specmint-language/` | Mint language docs     | GitHub Pages; answers GET                         |
| `repave.opsdevco.de`                      | Repave                 | EKS / child Route53 zone                          |
| `overpass.opsdevco.de`                    | Overpass               | EKS (parent Route53 alias → NLB)                  |
| `toll.opsdevco.de`                        | Toll                   | EKS (parent Route53 alias → NLB)                  |
| `dispatch.opsdevco.de`                    | Dispatch               | EKS (parent Route53 alias → NLB)                  |

The application registry is `PRODUCT_URLS` in `lib/site.ts`. Intended hosts
remain `<product>.opsdevco.de`. **Visitor links on this site only go to hosts
that currently answer GET** (`PRODUCT_HOST_LIVE`). A live product host is a
public identity surface, not an evaluation door. Repave remains the only
founder-assisted evaluation path:
`https://repave.opsdevco.de/waitlist?intent=evaluate`. Do not send unauthenticated
visitors to `/try`.

Do not CNAME sibling product hosts to the Repave origin (CanonicalHostMiddleware
would 308 them). Do not link unauthenticated visitors to private GitHub product
repositories.
