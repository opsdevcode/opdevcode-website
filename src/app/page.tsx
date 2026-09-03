import type { Metadata } from 'next'
import Link from 'next/link'
import PageFrame from '@/components/PageFrame'
import Reveal from '@/components/Reveal'
import EcosystemDiagram from '@/components/EcosystemDiagram'
import ProductCard from '@/components/ProductCard'
import { products } from '@/lib/products'
import {
  CALENDLY_URL,
  CONVERGENCE_URL,
  CONTACT_EMAIL,
  SITE_DESCRIPTION,
  SITE_TAGLINE,
  SITE_URL,
} from '@/lib/site'

const shareTitle = 'OpsDevCode — Infrastructure for modern engineering organizations'
const socialPreviewImage = '/assets/preview-v4.png?v=5'

export const metadata: Metadata = {
  title: { absolute: 'OpsDevCode' },
  description: SITE_DESCRIPTION,
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
      logo: `${SITE_URL}/assets/opsdevco-logo-o-terminal.png`,
      sameAs: ['https://github.com/opsdevcode', 'https://repave.dev'],
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
      url: 'https://repave.dev',
      description: 'Governed software delivery.',
    },
  ],
}

const repave = products.find((p) => p.slug === 'repave')
const overpass = products.find((p) => p.slug === 'overpass')
const toll = products.find((p) => p.slug === 'toll')
const dispatch = products.find((p) => p.slug === 'dispatch')

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageFrame home>
        <section className="hero">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="hero-kicker">OpsDevCode</p>
              <h1>
                {SITE_TAGLINE.replace(/\.$/, '')}
                <span className="highlight">.</span>
              </h1>
              <p className="sub">
                Software delivery now spans people, platforms, automation, and agents. Most
                organizations still expose the org chart as the path to ship. OpsDevCode builds
                governed engineering domains instead.
              </p>
              <div className="cta">
                <Link className="btn primary" href="/products">
                  Explore products
                </Link>
                <a className="btn" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  Talk to OpsDevCode
                </a>
              </div>
            </div>
            <EcosystemDiagram compact />
          </div>
        </section>

        <section className="section section--split" aria-labelledby="problem-heading">
          <div>
            <h2 id="problem-heading" className="section-title">
              <span className="section-title-text">
                The delivery API should not be the org chart
              </span>
            </h2>
            <p className="lede">
              Engineers should not have to understand your organizational structure to ship. Neither
              should your automation or agents.
            </p>
            <p className="note">
              OpsDevCode is the company. Repave, Overpass, and Toll are sibling domains. Dispatch is
              the experience across them — not a fourth store.
            </p>
          </div>
          <ul className="scan-list">
            <li>A single change still travels through specialist queues.</li>
            <li>Infrastructure knowledge is scattered across tools and tickets.</li>
            <li>Delivery policy lives apart from delivery execution.</li>
            <li>Cloud spend is divorced from ownership and decisions.</li>
            <li>Agents get layered onto fragmented APIs, with humans as the integration layer.</li>
          </ul>
        </section>

        <section className="section" aria-labelledby="products-heading">
          <div className="section-header-row">
            <h2 id="products-heading" className="section-title">
              <span className="section-title-text">Products</span>
            </h2>
            <Link href="/products">Compare the portfolio →</Link>
          </div>
          <div className="product-grid">
            {repave ? <ProductCard product={repave} featured /> : null}
            {overpass ? <ProductCard product={overpass} /> : null}
            {toll ? <ProductCard product={toll} /> : null}
            {dispatch ? <ProductCard product={dispatch} /> : null}
          </div>
        </section>

        <section className="section section--split principles" aria-labelledby="trust-heading">
          <div>
            <h2 id="trust-heading" className="section-title">
              <span className="section-title-text">
                Automation participates. It does not become authority.
              </span>
            </h2>
            <p>
              Humans, platforms, and agents can propose and, where allowed, act. Policy, gates, and
              evidence stay with the domain products. Dispatch never evaluates its own policy or
              approves its own work.
            </p>
            <p>
              <Link href="/approach">How the system is designed →</Link>
            </p>
          </div>
          <div>
            <h2 id="convergence-heading" className="section-title">
              <span className="section-title-text">Informed by Convergence</span>
            </h2>
            <p>
              Convergence is an independent, vendor-neutral body of knowledge. It is not an
              OpsDevCode product, specification, or runtime. OpsDevCode chooses to design in
              alignment with it.
            </p>
            <p>
              <a href={CONVERGENCE_URL} target="_blank" rel="noopener noreferrer">
                Read Convergence on GitHub →
              </a>
            </p>
          </div>
        </section>

        <section className="section section--band" aria-labelledby="closing-cta-heading">
          <div className="close-row">
            <div>
              <p className="closing-cta-kicker">Adoption</p>
              <h2 id="closing-cta-heading" className="closing-cta-title">
                Need help integrating this?
              </h2>
              <p className="closing-cta-lead">
                Architecture, modernization, and implementation remain available. They are not the
                company identity. Start with products; talk to OpsDevCode when adoption is the
                blocker.
              </p>
            </div>
            <div className="cta">
              <Link className="btn primary" href="/products">
                Explore products
              </Link>
              <Link className="btn" href="/services">
                Services
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
