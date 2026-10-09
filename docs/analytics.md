# Public-estate analytics

First-party [Umami](https://umami.is) for GTM questions about the public
OpsDevCode estate. **GTM analytics is not product evidence.** Do not reuse it
for compliance, governance, lifecycle, cost, or infrastructure proof.

Collector: `https://analytics.opsdevco.de`  
Property: **OpsDevCode Public Estate** (same website ID on all five public hosts)

## Why Umami

Self-hosted, no Google Analytics / PostHog / Plausible, no session replay, and
a hostname we control.

## Production-only

The tracker loads only when all of these are true:

- `NEXT_PUBLIC_UMAMI_WEBSITE_ID` is a UUID
- Netlify `CONTEXT` is unset or `production` (never deploy-preview / branch-deploy)
- `window.location.hostname` is `opsdevco.de` or `www.opsdevco.de`

Set the website ID only on the Netlify **production** context after the one-time
Umami admin step in `repave-aws-infra` `docs/analytics.md`.

## Events

Pageviews are native Umami pageviews. Custom events:

- `product_explore` — click toward a product host
- `evaluation_cta` — waitlist, evaluate, Calendly, or contact
- `proof_view` — Repave `/proof`, and company `/labs` evidence panels (`proof_type: other`)
- `evaluation_start` — Repave waitlist start, starting a guided lab, and
  `/labs/mint` (`product: mint`)
- `evaluation_submit` fires on Repave waitlist confirm only, not here

Allowed properties: `product`, `source_surface`, `cta`, `proof_type`,
`destination_product`. Contract: `lib/analytics.contract.mjs`.

## Privacy

Do not send names, emails, repository names, form contents, tokens, or query
strings as custom properties. Do not call `identify`. Do not add analytics
cookies.

Recommended founder-content UTM (do not hard-code post names):

`utm_source=linkedin&utm_medium=organic_social&utm_campaign=founder_content&utm_content=<stable-post-topic>`

## Failure

Analytics is non-blocking. If the collector is down, the company site still
renders and navigates.

## Baseline

Activation is recorded when production first sends pageviews. Data before that
instant was not collected.
