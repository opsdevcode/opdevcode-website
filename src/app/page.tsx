import type { Metadata } from 'next'
import Link from 'next/link'
import PageFrame from '@/components/PageFrame'
import Reveal from '@/components/Reveal'
import SystemMap from '@/components/SystemMap'
import ProductCard from '@/components/ProductCard'
import { products, type ProductSlug } from '@/lib/products'
import {
  CALENDLY_URL,
  COMPANY_LOGO_SRC,
  CONTACT_EMAIL,
  REPAVE_URL,
  REPAVE_WAITLIST_URL,
  SITE_DESCRIPTION,
  SITE_TAGLINE,
  SITE_URL,
} from '@/lib/site'

const shareTitle = 'OpsDevCode — Infrastructure for modern engineering organizations'
const socialPreviewImage = '/assets/preview-v5.png'

export const metadata: Metadata = {
  title: { absolute: 'OpsDevCode' },
  description: SITE_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    title: shareTitle,
    description: SITE_DESCRIPTION,
    url: `${SITE_URL}/`,
    type: 'website',
    images: [
      {
        url: socialPreviewImage,
        width: 1200,
        height: 630,
        alt: shareTitle,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: shareTitle,
    description: SITE_DESCRIPTION,
    images: [socialPreviewImage],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'OpsDevCode',
      url: SITE_URL,
      email: CONTACT_EMAIL,
      logo: `${SITE_URL}${COMPANY_LOGO_SRC}`,
      founder: {
        '@type': 'Person',
        name: 'Eric Skaggs',
        url: 'https://www.linkedin.com/in/erskaggs/',
      },
      sameAs: ['https://github.com/opsdevcode', REPAVE_URL],
      description: SITE_DESCRIPTION,
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'OpsDevCode',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Repave',
      applicationCategory: 'DeveloperApplication',
      url: REPAVE_URL,
      description: 'Governed software delivery.',
    },
  ],
}

const productQuestions: Record<ProductSlug, { question: string; role: string }> = {
  repave: {
    question: 'Is it being maintained correctly?',
    role: 'Govern how software changes throughout its lifecycle.',
  },
  overpass: {
    question: 'What do we have, and what depends on what?',
    role: 'Understand infrastructure state, inventory, and relationships.',
  },
  toll: {
    question: 'What is it costing us?',
    role: 'Connect infrastructure spending to products, services, and decisions.',
  },
  dispatch: {
    question: 'How do I work with all of this?',
    role: 'Give users an intelligent, governed way to interact with the system.',
  },
}

const siblings = products.filter((product) => product.slug !== 'repave')
const repave = products.find((product) => product.slug === 'repave')

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageFrame home>
        <section className="hero rail">
          <p className="rail-label">Company</p>
          <div className="hero-copy">
            <h1>
              Building software is easier than keeping it healthy as everything around it changes
              <span className="highlight">.</span>
            </h1>
            <p className="hero-fit">{SITE_TAGLINE}</p>
            <p className="sub">
              OpsDevCode connects how engineering organizations govern software delivery, understand
              infrastructure, connect cost to ownership, and operate the system as it changes.
            </p>
            <div className="cta">
              <a className="btn primary" href={REPAVE_WAITLIST_URL}>
                Try Repave with your repository
              </a>
              <Link className="btn" href="/products">
                Explore products
              </Link>
            </div>
          </div>
        </section>

        <section className="section rail" aria-labelledby="problem-heading">
          <p className="rail-label">Problem</p>
          <div className="section--split">
            <div>
              <h2 id="problem-heading" className="section-title">
                <span className="section-title-text">
                  Creating software isn&apos;t the hard part anymore
                </span>
              </h2>
              <p className="lede">Keeping everything healthy as the organization grows is.</p>
            </div>
            <ul className="scan-list">
              <li>Repositories drift from the standards they were meant to follow.</li>
              <li>Infrastructure relationships become hard to understand.</li>
              <li>Costs become disconnected from the products and teams creating them.</li>
              <li>
                Engineers end up stitching together more tools just to understand what is happening.
              </li>
            </ul>
          </div>
        </section>

        {repave ? (
          <section className="section rail" aria-labelledby="start-heading">
            <p className="rail-label">Start here</p>
            <div>
              <h2 id="start-heading" className="section-title">
                <span className="section-title-text">Start with Repave</span>
              </h2>
              <p className="lede">
                Your platform team shouldn&apos;t lose responsibility for something the moment it is
                created. Repave is the first product entering external validation — the practical
                entry point into the system, not the company itself. Overpass, Toll, and Dispatch
                remain part of the system; they are not equal conversion doors today.
              </p>
              <ul className="scan-list">
                <li>Create from standards.</li>
                <li>Continue observing after creation.</li>
                <li>Identify drift.</li>
                <li>Upgrade safely.</li>
                <li>Keep evidence of what happened.</li>
              </ul>
              <div className="product-grid">
                <ProductCard product={repave} featured />
              </div>
              <div className="cta" style={{ marginTop: 'var(--space-24)' }}>
                <a className="btn primary" href={REPAVE_WAITLIST_URL}>
                  Try Repave with your repository
                </a>
                <a className="btn" href={REPAVE_URL}>
                  Explore Repave
                </a>
              </div>
            </div>
          </section>
        ) : null}

        <section className="section rail" aria-labelledby="system-heading">
          <p className="rail-label">Products</p>
          <div>
            <h2 id="system-heading" className="section-title">
              <span className="section-title-text">Four products, four questions</span>
            </h2>
            <p className="lede">
              OpsDevCode is the company. These products do different jobs, at different maturity, in
              one system.
            </p>
            <ul className="product-lines">
              {products.map((product) => {
                const copy = productQuestions[product.slug]
                return (
                  <li key={product.slug}>
                    <strong>{product.name}</strong> — {copy.question} {copy.role}{' '}
                    {product.maturityLabel}.
                  </li>
                )
              })}
            </ul>
          </div>
        </section>

        <section className="section rail" aria-labelledby="connected-heading">
          <p className="rail-label">System</p>
          <div>
            <h2 id="connected-heading" className="section-title">
              <span className="section-title-text">These aren&apos;t four unrelated tools</span>
            </h2>
            <p className="lede">
              A repository Repave governs runs on infrastructure Overpass understands, incurs costs
              Toll can explain, and can be operated through Dispatch. The value is in the
              connection.
            </p>
          </div>
        </section>

        <section className="section rail" aria-labelledby="difference-heading">
          <p className="rail-label">Difference</p>
          <div>
            <h2 id="difference-heading" className="section-title">
              <span className="section-title-text">
                Most engineering tools help with a moment. OpsDevCode is being built around the
                lifecycle.
              </span>
            </h2>
            <p className="lede">
              Developer portals can help create services. Infrastructure tools can show
              infrastructure. FinOps tools can analyze spending. Assistants can answer questions.
              The thesis is that those should not remain disconnected experiences.
            </p>
          </div>
        </section>

        <section className="section rail" aria-labelledby="proof-heading">
          <p className="rail-label">Proof</p>
          <div>
            <h2 id="proof-heading" className="section-title">
              <span className="section-title-text">
                People and systems should be able to ask for work without touring the org chart
              </span>
            </h2>
            <p className="lede">
              The products keep the record of what ran. What was created should remain understood,
              governed, observable, upgradeable, attributable to cost, and operable throughout its
              life.
            </p>
            <p className="lede">
              Humans, platforms, and agents can propose and, where allowed, act. Policy, gates, and
              evidence stay with Repave, Overpass, and Toll. Dispatch never evaluates its own policy
              or approves its own work. Convergence is an independent body of knowledge that informs
              the design; it is not an OpsDevCode product and is not in the runtime path.
            </p>
            <p>
              <Link href="/approach">How the system is designed →</Link>
            </p>
            <SystemMap compact />
          </div>
        </section>

        <section className="section rail" aria-labelledby="products-heading">
          <p className="rail-label">Portfolio</p>
          <div>
            <div className="section-header-row">
              <h2 id="products-heading" className="section-title">
                <span className="section-title-text">The rest of the system</span>
              </h2>
              <Link href="/products">Compare →</Link>
            </div>
            <p className="lede">
              Overpass, Toll, and Dispatch share the same company thesis. Their cards keep the
              current maturity labels; do not read them as equally complete.
            </p>
            <div className="product-grid">
              {siblings.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          </div>
        </section>

        <section className="section rail section--band" aria-labelledby="closing-cta-heading">
          <p className="rail-label">Next</p>
          <div className="close-row">
            <div>
              <h2 id="closing-cta-heading" className="closing-cta-title">
                If you have a repository, start the conversation there
              </h2>
              <p className="closing-cta-lead">
                Early access is a conversation, not self-serve hosted availability. Adoption help
                lives under Company when a team needs implementation around the products.
              </p>
            </div>
            <div className="cta">
              <a className="btn primary" href={REPAVE_WAITLIST_URL}>
                Try Repave with your repository
              </a>
              <Link className="btn" href="/about">
                Company
              </Link>
              <a className="btn" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                Talk to OpsDevCode
              </a>
            </div>
          </div>
        </section>
      </PageFrame>
      <Reveal />
    </>
  )
}
