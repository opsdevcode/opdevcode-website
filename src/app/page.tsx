import type { Metadata } from 'next'
import Link from 'next/link'
import PageFrame from '@/components/PageFrame'
import Reveal from '@/components/Reveal'
import SystemMap from '@/components/SystemMap'
import ProductCard from '@/components/ProductCard'
import ConvergePair from '@/components/ConvergePair'
import { products } from '@/lib/products'
import { CALENDLY_URL, CONTACT_EMAIL, SITE_DESCRIPTION, SITE_TAGLINE, SITE_URL } from '@/lib/site'

const shareTitle = 'OpsDevCode — Infrastructure for modern engineering organizations'
const socialPreviewImage = '/assets/preview-v4.png?v=7'

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
      logo: `${SITE_URL}/assets/opsdevco-logo-o-terminal.png`,
      founder: {
        '@type': 'Person',
        name: 'Eric Skaggs',
        url: 'https://www.linkedin.com/in/erskaggs/',
      },
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
          <div className="hero-grid">
            <div className="hero-copy">
              <h1>
                {SITE_TAGLINE.replace(/\.$/, '')}
                <span className="highlight">.</span>
              </h1>
              <p className="sub">
                Software delivery now spans engineers, platforms, automation, and agents. OpsDevCode
                builds the governed systems that let them work together — without turning your org
                chart or tooling stack into the delivery interface.
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
            <SystemMap compact />
          </div>
        </section>

        <section className="section rail" aria-labelledby="problem-heading">
          <p className="rail-label">System</p>
          <div className="section--split">
            <div>
              <h2 id="problem-heading" className="section-title">
                <span className="section-title-text">
                  The delivery API should not be the org chart
                </span>
              </h2>
              <p className="lede">
                Engineers should not have to understand your organizational structure to ship.
                Neither should your automation or agents.
              </p>
              <ul className="product-lines">
                <li>
                  <strong>Repave</strong> governs software delivery.
                </li>
                <li>
                  <strong>Overpass</strong> understands infrastructure state.
                </li>
                <li>
                  <strong>Toll</strong> connects engineering decisions to economics.
                </li>
                <li>
                  <strong>Dispatch</strong> provides the governed experience across them.
                </li>
              </ul>
            </div>
            <ul className="scan-list">
              <li>A single change still travels through specialist queues.</li>
              <li>Infrastructure knowledge is scattered across tools and tickets.</li>
              <li>Delivery policy lives apart from delivery execution.</li>
              <li>Cloud spend is divorced from ownership and decisions.</li>
              <li>
                Agents get layered onto fragmented APIs, with humans as the integration layer.
              </li>
            </ul>
          </div>
        </section>

        <section className="section rail" aria-labelledby="products-heading">
          <p className="rail-label">Products</p>
          <div>
            <div className="section-header-row">
              <h2 id="products-heading" className="section-title">
                <span className="section-title-text">Four products. One engineering system.</span>
              </h2>
              <Link href="/products">Compare →</Link>
            </div>
            <div className="product-grid">
              {products.map((product) => (
                <ProductCard
                  key={product.slug}
                  product={product}
                  featured={product.slug === 'repave'}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="section rail" aria-labelledby="trust-heading">
          <p className="rail-label">Governance</p>
          <div className="section--split principles">
            <div>
              <h2 id="trust-heading" className="section-title">
                <span className="section-title-text">
                  Automation participates. It does not become authority.
                </span>
              </h2>
              <p>
                Humans, platforms, and agents can propose and, where allowed, act. Policy, gates,
                and evidence stay with Repave, Overpass, and Toll. Dispatch never evaluates its own
                policy or approves its own work.
              </p>
              <p>
                <Link href="/approach">How the system is designed →</Link>
              </p>
            </div>
            <ConvergePair />
          </div>
        </section>

        <section className="section rail section--band" aria-labelledby="closing-cta-heading">
          <p className="rail-label">Adoption</p>
          <div className="close-row">
            <div>
              <h2 id="closing-cta-heading" className="closing-cta-title">
                Need help integrating this?
              </h2>
              <p className="closing-cta-lead">
                Architecture, modernization, and implementation remain available. They are not the
                company identity.
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
