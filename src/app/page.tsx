import type { Metadata } from 'next'
import Link from 'next/link'
import PageFrame from '@/components/PageFrame'
import Reveal from '@/components/Reveal'
import SystemMap from '@/components/SystemMap'
import { ProductMark } from '@/components/BrandMark'
import ProductSiteLink from '@/components/ProductSiteLink'
import { products, type ProductSlug } from '@/lib/products'
import {
  CALENDLY_URL,
  COMPANY_BANNER_SRC,
  COMPANY_LOGO_SRC,
  CONTACT_EMAIL,
  PRODUCT_URLS,
  REPAVE_URL,
  SITE_DESCRIPTION,
  SITE_SHARE_TITLE,
  SITE_TAGLINE,
  SITE_URL,
} from '@/lib/site'

const shareTitle = SITE_SHARE_TITLE
const socialPreviewImage = COMPANY_BANNER_SRC

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

const domainCopy: Record<ProductSlug, { plane: string; responsibility: string; href: string }> = {
  repave: {
    plane: 'Software / repository state',
    responsibility:
      'Governed repository lifecycle from approved state through observation, change, remediation, and verification.',
    href: PRODUCT_URLS.repave,
  },
  overpass: {
    plane: 'Infrastructure state + relationships',
    responsibility:
      'Infrastructure state, resource identity, relationships, and impact context — without becoming a cloud apply engine.',
    href: PRODUCT_URLS.overpass,
  },
  toll: {
    plane: 'Engineering economics',
    responsibility:
      'Durable economic state connected to engineering context and evidence. Not an invoice and not a savings engine.',
    href: PRODUCT_URLS.toll,
  },
  dispatch: {
    plane: 'Governed intent + action',
    responsibility:
      'The path from human intent to a governed outcome while authority remains with the owning domain.',
    href: PRODUCT_URLS.dispatch,
  },
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
          <p className="rail-label">Thesis</p>
          <div className="hero-grid hero-stage">
            <div className="hero-copy">
              <p className="hero-kicker">OpsDevCode · parent system</p>
              <h1>
                Building software is easier than keeping it healthy as everything around it changes
                <span className="highlight">.</span>
              </h1>
              <p className="hero-fit">{SITE_TAGLINE}</p>
              <p className="hero-statement">
                <span>Specialized domains.</span>
                <span>Connected context.</span>
                <span>Governed change.</span>
              </p>
              <p className="sub">
                OpsDevCode is the parent view of an engineering system. Four independent products
                read delivery, infrastructure, economics, and intent. This site is the system — not
                a fifth product.
              </p>
              <div className="cta">
                <a className="btn primary" href="#system">
                  Explore the system
                </a>
                <Link className="btn" href="/products">
                  Products
                </Link>
              </div>
            </div>
            <SystemMap variant="hero" />
          </div>
        </section>

        <section className="section rail" aria-labelledby="problem-heading">
          <p className="rail-label">Problem</p>
          <div>
            <h2 id="problem-heading" className="section-title">
              <span className="section-title-text">Specialization isn&apos;t the problem.</span>
            </h2>
            <p className="lede">Fragmentation is.</p>
            <p>
              Engineering organizations correctly specialize across software delivery, platform
              engineering, infrastructure, reliability, economics, and governance. The failure
              starts when organizational, tool, and domain boundaries become the interface people
              must navigate to finish one outcome.
            </p>
            <ol className="problem-planes">
              <li className="problem-planes-item problem-planes-item--repave">
                <span>01</span>
                <p>Repositories drift from the standards they were meant to follow.</p>
              </li>
              <li className="problem-planes-item problem-planes-item--overpass">
                <span>02</span>
                <p>Infrastructure relationships become hard to understand.</p>
              </li>
              <li className="problem-planes-item problem-planes-item--toll">
                <span>03</span>
                <p>Costs become disconnected from the products and teams creating them.</p>
              </li>
              <li className="problem-planes-item problem-planes-item--dispatch">
                <span>04</span>
                <p>
                  Engineers stitch tools together just to ask what changed, what it affected, and
                  what it cost.
                </p>
              </li>
            </ol>
          </div>
        </section>

        <section className="section rail" id="system" aria-labelledby="system-heading">
          <p className="rail-label">System</p>
          <div>
            <h2 id="system-heading" className="section-title">
              <span className="section-title-text">
                One engineering system. Specialized domains.
              </span>
            </h2>
            <p className="lede">
              OpsDevCode is the parent. Repave, Overpass, Toll, and Dispatch are siblings. This is
              not a central runtime, not a required bundle, and not four SKUs of one monolith.
              Design informed by Convergence — independent, not an OpsDevCode product, not in the
              runtime path.
            </p>
            <p>
              A policy gate is a plane on the cut — ink, not a fifth product accent. Gates stay with
              the domains that already evaluate them.{' '}
              <Link href="/architecture">How the decision plane stays distributed →</Link>
            </p>
            <SystemMap variant="family" />
          </div>
        </section>

        <section className="section rail" aria-labelledby="domains-heading">
          <p className="rail-label">Domains</p>
          <div>
            <h2 id="domains-heading" className="section-title">
              <span className="section-title-text">Four authorities. One design language.</span>
            </h2>
            <p className="lede">
              Independent products. Connected engineering context. No product is a portal, a control
              plane, or the company.
            </p>
            <ol className="domain-ledger">
              {products.map((product) => {
                const copy = domainCopy[product.slug]
                return (
                  <li
                    key={product.slug}
                    className={`domain-ledger-item domain-ledger-item--${product.slug}`}
                  >
                    <ProductMark slug={product.slug} className="domain-ledger-mark" />
                    <div>
                      <p className="domain-ledger-plane">{copy.plane}</p>
                      <h3>{product.name}</h3>
                      <p>{copy.responsibility}</p>
                      <p className="cta-row">
                        <ProductSiteLink href={copy.href}>{product.name} site →</ProductSiteLink>
                        <Link href={product.href}>{product.name} on OpsDevCode →</Link>
                      </p>
                    </div>
                  </li>
                )
              })}
            </ol>
          </div>
        </section>

        <section className="section rail" aria-labelledby="independence-heading">
          <p className="rail-label">Independence</p>
          <div>
            <h2 id="independence-heading" className="section-title">
              <span className="section-title-text">Independent products. Connected context.</span>
            </h2>
            <p className="lede">
              Repave can operate in its domain without Toll. Toll owns engineering economics
              independently. Overpass owns infrastructure state independently. Dispatch coordinates
              governed intent without taking domain authority. Customers are not required to use all
              four.
            </p>
          </div>
        </section>

        <section className="section rail" aria-labelledby="context-heading">
          <p className="rail-label">Context</p>
          <div>
            <h2 id="context-heading" className="section-title">
              <span className="section-title-text">
                What changed, what did it affect, what did it cost?
              </span>
            </h2>
            <p className="lede">
              A company-level question, not a production workflow you should expect to run across
              all four products today. Context can cross domains. Authority does not. The policy
              gate is a plane on that cut — ink, not a badge on a product card.
            </p>
            <SystemMap variant="context" />
            <ol className="model-axis">
              <li>
                <span>Intended</span>
              </li>
              <li>
                <span>Observed</span>
              </li>
              <li>
                <span>Difference</span>
              </li>
              <li>
                <span>Change</span>
              </li>
              <li>
                <span>Verified</span>
              </li>
              <li>
                <span>Evidence</span>
              </li>
            </ol>
            <p className="section-note">
              Vocabulary for why engineering state matters. Not a claim that every product
              implements every stage.
            </p>
          </div>
        </section>

        <section className="section rail" aria-labelledby="principles-heading">
          <p className="rail-label">Principles</p>
          <div>
            <h2 id="principles-heading" className="section-title">
              <span className="section-title-text">How the system is designed</span>
            </h2>
            <ol className="principle-rows">
              <li>
                <span>01 /</span>
                <div>
                  <h3>Domain authority stays with the domain</h3>
                  <p>Coordination does not transfer ownership.</p>
                </div>
              </li>
              <li>
                <span>02 /</span>
                <div>
                  <h3>Integrate commodity. Own differentiation.</h3>
                  <p>
                    OpsDevCode integrates systems such as source control, cloud platforms,
                    infrastructure engines, and observability rather than rebuilding them merely for
                    ownership.
                  </p>
                </div>
              </li>
              <li>
                <span>03 /</span>
                <div>
                  <h3>Intent is not authority</h3>
                  <p>Understanding an outcome does not automatically authorize its execution.</p>
                </div>
              </li>
              <li>
                <span>04 /</span>
                <div>
                  <h3>State before automation</h3>
                  <p>
                    Reliable action depends on understanding what should be true and what is
                    actually true.
                  </p>
                </div>
              </li>
              <li>
                <span>05 /</span>
                <div>
                  <h3>Evidence over assumption</h3>
                  <p>
                    Changes should produce enough evidence to determine what happened and whether
                    the intended outcome occurred.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section className="section rail" aria-labelledby="entry-heading">
          <p className="rail-label">Products</p>
          <div>
            <h2 id="entry-heading" className="section-title">
              <span className="section-title-text">Enter the domain that owns the question</span>
            </h2>
            <p className="lede">
              This page explains the system. Each product site explains its domain. Hosted access
              remains conservative.
            </p>
            <ul className="entry-list">
              {products.map((product) => (
                <li
                  key={product.slug}
                  className={`entry-list-item entry-list-item--${product.slug}`}
                >
                  <ProductMark slug={product.slug} className="entry-mark" />
                  <div>
                    <strong>{product.name}</strong>
                    <p>{domainCopy[product.slug].plane}</p>
                    <ProductSiteLink href={domainCopy[product.slug].href}>
                      {product.slug}.opsdevco.de
                    </ProductSiteLink>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section rail" aria-labelledby="direction-heading">
          <p className="rail-label">Direction</p>
          <div>
            <h2 id="direction-heading" className="section-title">
              <span className="section-title-text">
                Keep authority local. Make change explainable.
              </span>
            </h2>
            <p className="lede">
              The direction is engineering systems where specialized domains stay authoritative,
              context can cross those boundaries, governed change can be understood, resulting state
              can be verified, and evidence can survive the change.
            </p>
            <p>
              That is company direction, not current availability of a four-product workflow.
              Today&apos;s product truth remains: Repave is the first evaluation door; Overpass,
              Toll, and Dispatch have public identity hosts at different maturity.
            </p>
          </div>
        </section>

        <section className="section rail section--band" aria-labelledby="closing-cta-heading">
          <p className="rail-label">Next</p>
          <div className="close-row">
            <div>
              <h2 id="closing-cta-heading" className="closing-cta-title">
                Explore the products
              </h2>
              <p className="closing-cta-lead">
                Start with the domain that owns the work. Early access is a conversation, not
                self-serve hosted availability.
              </p>
            </div>
            <div className="cta">
              <Link className="btn primary" href="/products">
                Explore the products
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
