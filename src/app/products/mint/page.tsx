import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageFrame from '@/components/PageFrame'
import ProductSignature from '@/components/ProductSignature'
import MaturityMeta from '@/components/MaturityMeta'
import MintJourneyNav from '@/components/MintJourneyNav'
import { pageMeta } from '@/lib/seo'
import { getProduct } from '@/lib/products'
import { MINT_AUDIENCES, MINT_GET_STARTED_HREF } from '@/lib/mint-journey'
import { MINT_GITHUB_TAG, MINT_LAB_GITHUB_TAG, MINT_REGISTRY_TAG } from '@/lib/mint-release'
import {
  CALENDLY_URL,
  MINT_ACTION_URL,
  MINT_COMMUNITY_URL,
  MINT_INTEGRATION_AUTHORING_URL,
  MINT_INTEGRATION_PROTOCOL_URL,
  MINT_ISSUES_URL,
  MINT_LANGUAGE_URL,
  MINT_QUICKSTART_URL,
  MINT_REFERENCE_URL,
  MINT_REGISTRY_RELEASE_URL,
  MINT_REGISTRY_URL,
  MINT_SITE_URL,
  MINT_STARTER_URL,
  SPECMINT_PLATFORM_URL,
} from '@/lib/site'

export const dynamic = 'force-static'

const product = getProduct('mint')

export const metadata: Metadata = product
  ? pageMeta({
      title: product.name,
      description: `${product.domain}. ${product.summary}`,
      path: '/products/mint',
    })
  : { title: 'Mint' }

export default function MintProductPage() {
  if (!product) notFound()

  return (
    <PageFrame>
      <section className="section product-page product-page--mint">
        <header className="product-page-head">
          <div>
            <MaturityMeta
              index={product.maturityIndex}
              label={product.maturityLabel}
              extra={product.domain}
            />
            <h1 className="page-title">{product.name}</h1>
            <p className="product-job">{product.domain}</p>
            <dl className="buyer-strip">
              <div>
                <dt>Problem</dt>
                <dd>{product.compareProblem}</dd>
              </div>
              <div>
                <dt>Input</dt>
                <dd>{product.compareInput}</dd>
              </div>
              <div>
                <dt>Outcome</dt>
                <dd>{product.compareOutcome}</dd>
              </div>
              <div>
                <dt>Availability</dt>
                <dd>{product.compareAvailability}</dd>
              </div>
            </dl>
            <pre className="mint-install">
              <code>{`pipx install specmint
# or: uv tool install specmint
mint version`}</code>
            </pre>
          </div>
          <ProductSignature slug={product.slug} />
          <p className="cta-row">
            <Link className="btn primary" href={MINT_GET_STARTED_HREF}>
              Get started
            </Link>
          </p>
          <p className="cta-follow">
            <Link href="/labs/mint">Mint lab</Link>
            <a href={MINT_SITE_URL} target="_blank" rel="noopener noreferrer">
              Language site
            </a>
            <a href={MINT_LANGUAGE_URL} target="_blank" rel="noopener noreferrer">
              View source
            </a>
          </p>
        </header>
        <MintJourneyNav />
        <blockquote className="product-quote">
          Mint is the public entry product: the language, CLI, SDK, editor, and protocol. SpecMint
          is the governed lifecycle runtime behind Mint — not a customer SKU. SpecMint core is
          public; the hosted service stays private and is not generally available.
        </blockquote>
        <h2>Choose a path</h2>
        <ul className="mint-path-list">
          {MINT_AUDIENCES.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                <strong>{item.title}</strong>
                <span>{item.blurb}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className="product-page-grid">
          <div>
            <h2>What problem this solves</h2>
            <p>
              Automation intent usually lives in tickets, READMEs, and one-off scripts. That is hard
              to review, hard to repeat, and easy to confuse with apply. Mint gives that intent a
              language, compiles it offline, and stops at a plan.
            </p>
          </div>
          <div>
            <h2>What you get</h2>
            <p>
              A local CLI that names intent, compiles it deterministically, binds realizations, and
              produces a governed plan. There is no <code>mint apply</code> and no default live
              provider execution. This company page is the product briefing and sales journey. The
              language, community, and reference live on{' '}
              <a href={MINT_SITE_URL} target="_blank" rel="noopener noreferrer">
                mint.opsdevco.de
              </a>
              . The Mint lab is captured output, not a second compiler.
            </p>
          </div>
          <div>
            <h2>Concrete example</h2>
            <p>
              The local-marker project (<code>examples/projects/local-marker</code>) declares a
              sandbox marker file. Mint compiles that unit and plans through{' '}
              <code>local.sandbox.ensure_marker</code>. Planning does not write the marker. It does
              not call AWS, Azure, GCP, Kubernetes, or GitHub. Walk captured compiler output from{' '}
              {MINT_LAB_GITHUB_TAG} on the <Link href="/labs/mint">Mint lab</Link>. That fixture is
              not the advertised install.
            </p>
          </div>
          <div>
            <h2>Availability</h2>
            <p className="product-maturity-note">{product.maturityNote}</p>
            <ul>
              <li>Public preview / alpha — not production-ready.</li>
              <li>
                There is no <code>mint apply</code>.
              </li>
              <li>No default live provider execution.</li>
              <li>Deterministic and fail-closed on unsupported required capabilities.</li>
            </ul>
          </div>
          <div>
            <h2>How to start</h2>
            <p>
              Company adoption stays on <Link href={MINT_GET_STARTED_HREF}>Get started</Link>. The
              ten-minute loop, CLI contract, and protocol live on the{' '}
              <a href={MINT_QUICKSTART_URL} target="_blank" rel="noopener noreferrer">
                language quickstart
              </a>{' '}
              at mint.opsdevco.de — not this briefing. Current published language is{' '}
              {MINT_GITHUB_TAG}. Pin{' '}
              <a href={MINT_ACTION_URL} target="_blank" rel="noopener noreferrer">
                opsdevcode/mint-action
              </a>{' '}
              or start from{' '}
              <a href={MINT_STARTER_URL} target="_blank" rel="noopener noreferrer">
                opsdevcode/mint-starter
              </a>
              . There is no Marketplace listing and no <code>latest</code> tag.
            </p>
          </div>
          <div>
            <h2>Mint versus SpecMint</h2>
            <p>
              Mint is the language, CLI, SDK, editor, and protocol. SpecMint is the lifecycle
              runtime and control plane behind Mint. SpecMint is not a customer SKU. SpecMint core
              is public; the hosted service stays private and is not generally available. SpecMint
              continues after the plan: approval, fake/local execution, verification, and evidence.
            </p>
          </div>
          <div>
            <h2>How it fits</h2>
            <p>
              Mint is a public entry layer, not a required stack. SpecMint composes the governed
              lifecycle. Repave, Overpass, Toll, and Dispatch retain capability authority in their
              domains. You can adopt those products without Mint.
            </p>
          </div>
          <div>
            <h2>Directory versus cached catalog</h2>
            <p>
              Discover integrations from local <code>mint.catalog-records/v0</code> data:{' '}
              <code>search</code>, <code>inspect</code>, <code>add</code>, <code>remove</code>,{' '}
              <code>verify</code>, <code>status</code>, and <code>update</code>. Those commands bind
              digest pins in <code>mint.lock</code>. They do not pip-install, execute, or open a
              network path. <code>status</code> reports the {'one-shot process supervisor'} as idle
              — no daemon.
            </p>
            <p>
              Refreshing official directory records is a separate step: cache a checkout of{' '}
              <a href={MINT_REGISTRY_RELEASE_URL} target="_blank" rel="noopener noreferrer">
                mint-registry {MINT_REGISTRY_TAG}
              </a>{' '}
              with <code>mint integrations update --registry</code>. That is not{' '}
              <a href={MINT_REGISTRY_URL} target="_blank" rel="noopener noreferrer">
                mint-registry
              </a>{' '}
              <code>main</code>, not a hosted registry service, and not{' '}
              <code>/releases/latest</code>. Offline search against an already-cached catalog is not
              a registry refresh.
            </p>
            <p>
              The local sandbox reference is <code>local.sandbox.ensure_marker</code>. A plan-only{' '}
              <code>repo.github</code> integration consumes a supplied repository snapshot — no
              GitHub SDK, HTTP client, or token. Standalone packages{' '}
              <code>mint-integration-local</code> and <code>mint-integration-github</code> are
              GitHub Releases, not PyPI. There is no Kubernetes snapshot integration. Mint does not
              import Repave, Overpass, Toll, Dispatch, or Relay.
            </p>
            <p>
              Integration Protocol v0, authoring plus conformance, and{' '}
              <code>mint integrations test</code> stay on the language{' '}
              <a href={MINT_REFERENCE_URL} target="_blank" rel="noopener noreferrer">
                reference
              </a>
              , not this briefing.
            </p>
            <p>
              <a href={MINT_INTEGRATION_PROTOCOL_URL} target="_blank" rel="noopener noreferrer">
                Integration Protocol v0
              </a>
              {' · '}
              <a href={MINT_INTEGRATION_AUTHORING_URL} target="_blank" rel="noopener noreferrer">
                Authoring plus conformance
              </a>
            </p>
          </div>
          <div>
            <h2>Community</h2>
            <p>
              Language community and contribution paths live on{' '}
              <a href={MINT_COMMUNITY_URL} target="_blank" rel="noopener noreferrer">
                mint.opsdevco.de/community
              </a>
              . File issues on the language repository. Release Please owns prerelease tags. This
              company site does not republish that handbook.
            </p>
          </div>
          <div>
            <h2>Owns</h2>
            <ul className="bullets">
              {product.owns.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Boundaries</h2>
            <ul className="bullets">
              {product.doesNot.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <p className="cta-row">
          <Link className="btn primary" href={MINT_GET_STARTED_HREF}>
            Install Mint
          </Link>
        </p>
        <p className="cta-follow">
          <a href={SPECMINT_PLATFORM_URL} target="_blank" rel="noopener noreferrer">
            SpecMint source
          </a>
          <a href={MINT_ISSUES_URL} target="_blank" rel="noopener noreferrer">
            File an issue
          </a>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            Talk to OpsDevCode
          </a>
          <Link href="/products">All products</Link>
        </p>
      </section>
    </PageFrame>
  )
}
