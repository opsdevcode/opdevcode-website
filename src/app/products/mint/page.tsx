import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageFrame from '@/components/PageFrame'
import ProductSignature from '@/components/ProductSignature'
import MaturityMeta from '@/components/MaturityMeta'
import { pageMeta } from '@/lib/seo'
import { getProduct } from '@/lib/products'
import {
  MINT_INTEGRATION_AUTHORING_URL,
  MINT_INTEGRATION_PROTOCOL_URL,
  MINT_ISSUES_URL,
  MINT_LANGUAGE_URL,
  MINT_QUICKSTART_URL,
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
# or: uv tool install specmint`}</code>
            </pre>
          </div>
          <ProductSignature slug={product.slug} />
          <p className="cta-row">
            <a
              className="btn primary"
              href={MINT_QUICKSTART_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get started
            </a>
            <a className="btn" href={MINT_LANGUAGE_URL} target="_blank" rel="noopener noreferrer">
              View source
            </a>
            <a
              className="btn"
              href={MINT_INTEGRATION_AUTHORING_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Build an integration
            </a>
            <Link className="btn" href="/products">
              All products
            </Link>
          </p>
        </header>
        <blockquote className="product-quote">
          Mint is the public entry product: the language, CLI, SDK, editor, and protocol. SpecMint
          is the governed lifecycle runtime behind Mint — not a customer SKU. SpecMint core is
          public; the hosted service stays private and is not generally available.
        </blockquote>
        <div className="product-page-grid">
          <div>
            <h2>What Mint does</h2>
            <p>
              Mint expresses governed automation intent. It compiles that intent deterministically
              and offline. It resolves capability, target, and integration realizations. It produces
              governed plans. It hands lifecycle control to SpecMint. It preserves verification and
              evidence boundaries — it does not move them into the language.
            </p>
          </div>
          <div>
            <h2>Mint versus SpecMint</h2>
            <p>
              Mint is the language, CLI, SDK, editor, and protocol. SpecMint is the lifecycle
              runtime and control plane behind Mint. SpecMint is not a customer SKU. SpecMint core
              is public; the hosted service stays private and is not generally available.
            </p>
          </div>
          <div>
            <h2>How it fits</h2>
            <p>
              Mint is the public entry layer. SpecMint composes the governed lifecycle. Repave,
              Overpass, Toll, and Dispatch retain capability authority in their domains.
              Integrations connect external services without taking that authority.
            </p>
          </div>
          <div>
            <h2>Working quickstart</h2>
            <p>Install the language CLI, then confirm the executable:</p>
            <pre className="mint-install">
              <code>{`pipx install specmint
# or: uv tool install specmint
mint version`}</code>
            </pre>
            <p>
              From the language repository, run the ten-minute loop: <code>init</code>,{' '}
              <code>doctor</code>, <code>check</code>, <code>fmt --check</code>, <code>lock</code>,{' '}
              <code>compile</code>, <code>inspect</code>, <code>plan</code>, and{' '}
              <code>mint integrations test</code> for <code>local.sandbox</code> against{' '}
              <code>examples/projects/local-marker</code>. SpecMint continues after that plan:
              approval, fake/local execution, verification, and evidence. Use the{' '}
              <a href={MINT_QUICKSTART_URL} target="_blank" rel="noopener noreferrer">
                language quickstart
              </a>{' '}
              for the full copy-pasteable sequence rather than treating this page as captured
              terminal output. There is no Marketplace listing and no <code>mint apply</code>.
            </p>
          </div>
          <div>
            <h2>Integration ecosystem</h2>
            <p>
              A capability is the promise Mint and SpecMint understand. An integration is how that
              promise is realized for a service. A realization binds capability, target, and
              integration. An executor is the privileged runtime allowed to perform an approved
              operation. Planning support never grants execution authority.
            </p>
            <p>
              Discover integrations from local <code>mint.catalog-records/v0</code> data:{' '}
              <code>search</code>, <code>inspect</code>, <code>add</code>, <code>remove</code>, and{' '}
              <code>verify</code>. <code>add</code> binds digest pins in <code>mint.lock</code>. It
              does not pip-install or execute an integration, and it does not open a network path. A
              hosted registry is future work.
            </p>
            <p>
              The local sandbox reference is <code>local.sandbox.ensure_marker</code>. A plan-only{' '}
              <code>repo.github</code> integration consumes a supplied repository snapshot — no
              GitHub SDK, HTTP client, or token. New authors start from replacement markers and run{' '}
              <code>mint integrations test</code>. Catalog records for standalone public artifacts
              are published only after those artifacts exist.
            </p>
            <p>
              Read{' '}
              <a href={MINT_INTEGRATION_PROTOCOL_URL} target="_blank" rel="noopener noreferrer">
                Integration Protocol v0
              </a>{' '}
              and{' '}
              <a href={MINT_INTEGRATION_AUTHORING_URL} target="_blank" rel="noopener noreferrer">
                authoring plus conformance
              </a>
              .
            </p>
          </div>
          <div>
            <h2>Community</h2>
            <p>
              Integrations are community-authored in public. Contributions are a manifest, a stdio
              protocol server, fixtures, and fail-closed <code>execute</code>. They are not a live
              provider mutation, a Marketplace listing, or a <code>latest</code> tag. File issues on
              the language repository. Release Please owns prerelease tags.
            </p>
          </div>
          <div>
            <h2>Safety</h2>
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
          <a
            className="btn primary"
            href={MINT_QUICKSTART_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Install Mint
          </a>
          <a className="btn" href={MINT_QUICKSTART_URL} target="_blank" rel="noopener noreferrer">
            Read the quickstart
          </a>
          <a className="btn" href={MINT_LANGUAGE_URL} target="_blank" rel="noopener noreferrer">
            Language source
          </a>
          <a className="btn" href={SPECMINT_PLATFORM_URL} target="_blank" rel="noopener noreferrer">
            SpecMint source
          </a>
          <a
            className="btn"
            href={MINT_INTEGRATION_AUTHORING_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Build an integration
          </a>
          <a className="btn" href={MINT_ISSUES_URL} target="_blank" rel="noopener noreferrer">
            File an issue
          </a>
        </p>
      </section>
    </PageFrame>
  )
}
