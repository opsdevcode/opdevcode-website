import type { Metadata } from 'next'
import Link from 'next/link'
import PageFrame from '@/components/PageFrame'
import Reveal from '@/components/Reveal'
import EcosystemDiagram from '@/components/EcosystemDiagram'
import ProductBlock from '@/components/ProductBlock'
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

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageFrame home>
        <section className="hero">
          <div className="hero-inner">
            <p className="hero-kicker">OpsDevCode</p>
            <h1>
              {SITE_TAGLINE.replace(/\.$/, '')}
              <span className="highlight">.</span>
            </h1>
            <p className="sub">
              Software delivery now spans people, platforms, automation, and agents. Most
              organizations still expose their org chart, tooling boundaries, and specialist silos
              as the path to ship. OpsDevCode builds the systems that let intent move through
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
        </section>

        <section className="section" aria-labelledby="problem-heading">
          <h2 id="problem-heading" className="section-title">
            <span className="section-title-text">The delivery API should not be the org chart</span>
          </h2>
          <p className="lede">
            Engineers should not have to understand your organizational structure to ship. Neither
            should your automation or agents.
          </p>
          <ul className="scan-list">
            <li>A single change still travels through specialist queues.</li>
            <li>Infrastructure knowledge is scattered across tools and tickets.</li>
            <li>Delivery policy lives apart from delivery execution.</li>
            <li>Cloud spend is divorced from ownership and decisions.</li>
            <li>Agents get layered onto fragmented APIs, with humans as the integration layer.</li>
          </ul>
        </section>

        <section className="section" aria-labelledby="system-heading">
          <h2 id="system-heading" className="section-title">
            <span className="section-title-text">One engineering system, four named parts</span>
          </h2>
          <p className="lede">
            OpsDevCode is the company. Repave, Overpass, and Toll are sibling domains. Dispatch is
            the governed experience across them — not a fourth store, and not the authority that
            grades their work.
          </p>
          <EcosystemDiagram />
        </section>

        <section className="section" aria-labelledby="products-heading">
          <h2 id="products-heading" className="section-title">
            <span className="section-title-text">Products</span>
          </h2>
          <div className="product-stack">
            {products.map((product) => (
              <ProductBlock key={product.slug} product={product} />
            ))}
          </div>
        </section>

        <section className="section" aria-labelledby="trust-heading">
          <h2 id="trust-heading" className="section-title">
            <span className="section-title-text">
              Automation participates. It does not become authority.
            </span>
          </h2>
          <p className="lede">
            Humans, platforms, and agents can propose and, where allowed, act. Policy, gates, and
            evidence stay with the domain products. Dispatch never evaluates its own policy or
            approves its own work.
          </p>
          <Link href="/approach">How the system is designed →</Link>
        </section>

        <section className="section" aria-labelledby="convergence-heading">
          <h2 id="convergence-heading" className="section-title">
            <span className="section-title-text">Informed by Convergence</span>
          </h2>
          <p className="lede">
            Convergence is an independent, vendor-neutral body of knowledge about how specialized
            engineering expertise participates in one delivery system. It is not an OpsDevCode
            product, specification, or runtime.
          </p>
          <p>
            OpsDevCode chooses to design in alignment with those principles.{' '}
            <a href={CONVERGENCE_URL} target="_blank" rel="noopener noreferrer">
              Read Convergence on GitHub
            </a>
            .
          </p>
        </section>

        <section className="section" aria-labelledby="services-heading">
          <h2 id="services-heading" className="section-title">
            <span className="section-title-text">Adoption and implementation help</span>
          </h2>
          <p className="lede">
            Services remain available for architecture, adoption, platform modernization, and custom
            integration. They are not the company identity.
          </p>
          <Link className="btn" href="/services">
            Services
          </Link>
        </section>

        <section className="section closing-cta" aria-labelledby="closing-cta-heading">
          <p className="closing-cta-kicker">Next</p>
          <h2 id="closing-cta-heading" className="closing-cta-title">
            Start with the products
          </h2>
          <p className="closing-cta-lead">
            Repave is the available delivery product. Overpass, Toll, and Dispatch are named domains
            with honest maturity. Talk to OpsDevCode if you need a path through adoption.
          </p>
          <div className="cta">
            <Link className="btn primary" href="/products">
              Explore products
            </Link>
            <a className="btn" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Talk to OpsDevCode
            </a>
          </div>
        </section>
      </PageFrame>
      <Reveal />
    </>
  )
}
