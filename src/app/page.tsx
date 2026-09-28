import type { Metadata } from 'next'
import Link from 'next/link'
import PageFrame from '@/components/PageFrame'
import Reveal from '@/components/Reveal'
import ProductCard from '@/components/ProductCard'
import { BrandMark } from '@/components/BrandMark'
import { products, type ProductSlug } from '@/lib/products'
import {
  ACCESS_PLANS,
  COMPANY_NAME,
  GOVERN_LINE,
  OUTCOME_LINE,
  PLATFORM_NAME,
  VERIFY_LINE,
} from '@/lib/platform'
import {
  CALENDLY_URL,
  COMPANY_BANNER_SRC,
  COMPANY_LOGO_SRC,
  CONVERGENCE_URL,
  CONTACT_EMAIL,
  PRODUCT_URLS,
  REPAVE_URL,
  SITE_DESCRIPTION,
  SITE_SHARE_TITLE,
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
      description: 'Governed software state.',
    },
  ],
}

const portfolioCopy: Record<ProductSlug, { title: string }> = {
  repave: { title: 'Governed software state.' },
  overpass: { title: 'Infrastructure state and relationships.' },
  toll: { title: 'Engineering economics.' },
  dispatch: { title: 'Governed intent and action.' },
}

const whyFour: { name: string; job: string }[] = [
  { name: 'Repave', job: 'Software and repository state.' },
  { name: 'Overpass', job: 'Infrastructure state and relationships.' },
  { name: 'Toll', job: 'Engineering economics.' },
  { name: 'Dispatch', job: 'Intent and governed action.' },
]

const startOther: {
  slug: Exclude<ProductSlug, 'repave'>
  name: string
  blurb: string
}[] = [
  {
    slug: 'overpass',
    name: 'Overpass',
    blurb: 'When stored infrastructure state is the problem in front of you.',
  },
  {
    slug: 'toll',
    name: 'Toll',
    blurb: 'When cost needs engineering ownership, not a billing warehouse.',
  },
  {
    slug: 'dispatch',
    name: 'Dispatch',
    blurb: 'When people need a governed way to ask without moving authority.',
  },
]

export default function HomePage() {
  const repave = products.find((product) => product.slug === 'repave')

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageFrame home>
        <section className="home-hero" aria-labelledby="home-thesis">
          <h1 id="home-thesis">
            {OUTCOME_LINE}
            <br />
            {GOVERN_LINE}
            <br />
            {VERIFY_LINE}
          </h1>
          <div className="home-hero-body">
            <div className="home-hero-copy">
              <p className="home-support">
                {COMPANY_NAME} is the company. {PLATFORM_NAME} is the modular offering. Adopt
                Repave, Overpass, Toll, or Dispatch on their own.
              </p>
              <p className="home-quiet" id="home-product-names">
                Repave · Overpass · Toll · Dispatch
              </p>
              <div className="cta">
                <a className="btn primary" href="#products">
                  See the products →
                </a>
                <a className="btn" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  Talk to OpsDevCode →
                </a>
              </div>
            </div>
            <div className="home-hero-identity" aria-hidden="true">
              <BrandMark className="home-hero-aperture" />
            </div>
          </div>
        </section>

        <section
          className="section home-portfolio"
          id="products"
          aria-labelledby="portfolio-heading"
        >
          <h2 id="portfolio-heading" className="section-title">
            Four products. Independently adoptable.
          </h2>
          <p className="lede home-measure">
            Each product owns a distinct engineering domain. Together they are {PLATFORM_NAME} — not
            four required steps in a bundle, and not the company name.
          </p>
          <div className="product-grid product-grid--portfolio">
            {products.map((product) => (
              <ProductCard
                key={product.slug}
                product={product}
                variant="portfolio"
                jobTitle={portfolioCopy[product.slug].title}
              />
            ))}
          </div>
          <p className="home-follow">
            <Link href="/products">Compare the products →</Link>
          </p>
        </section>

        <section className="section home-why" aria-labelledby="why-heading">
          <h2 id="why-heading" className="section-title">
            Different engineering problems deserve different owners.
          </h2>
          <p className="lede home-measure">
            Repository lifecycle, infrastructure state, engineering economics, and governed action
            are related problems. They are not the same problem.
          </p>
          <p className="home-measure">
            {COMPANY_NAME} keeps those responsibilities separate so each product can own its domain
            without becoming the source of truth for everything else.
          </p>
          <ul className="why-list">
            {whyFour.map((item) => (
              <li key={item.name}>
                <strong>{item.name}</strong>
                <span>{item.job}</span>
              </li>
            ))}
          </ul>
          <p className="home-measure">
            Use one product or use several. They are independent products — not four required steps
            in a bundle.
          </p>
          <p className="home-follow">
            <Link href="/architecture">See how the system is designed →</Link>
          </p>
        </section>

        <section className="section home-start" aria-labelledby="start-heading">
          <h2 id="start-heading" className="section-title">
            Start with the problem you need to solve.
          </h2>
          <p className="lede home-measure">
            You don&apos;t need to adopt a stack. Start with the product that owns the engineering
            problem in front of you.
          </p>
          {repave ? (
            <article className="start-featured">
              <p className="start-featured-meta">{repave.maturityLabel}</p>
              <h3>Repave</h3>
              <p>
                For teams dealing with repository lifecycle, standards, drift, and governed change.
              </p>
              <p>Repave is the most complete place to begin evaluating the approach today.</p>
              <a href={PRODUCT_URLS.repave} target="_blank" rel="noopener noreferrer">
                Explore Repave →
              </a>
            </article>
          ) : null}
          <ul className="start-list">
            {startOther.map((item) => {
              const product = products.find((entry) => entry.slug === item.slug)
              return (
                <li key={item.slug}>
                  <strong>{item.name}</strong>
                  <p>{item.blurb}</p>
                  {product ? <p className="start-maturity">{product.maturityLabel}</p> : null}
                  <a href={PRODUCT_URLS[item.slug]} target="_blank" rel="noopener noreferrer">
                    Explore {item.name} →
                  </a>
                </li>
              )
            })}
          </ul>
        </section>

        <section className="section home-company" aria-labelledby="company-heading">
          <h2 id="company-heading" className="section-title">
            Built as a product company for engineering systems.
          </h2>
          <p className="lede home-measure">
            {COMPANY_NAME} is a founder-led software company. {PLATFORM_NAME} is how the products
            are offered — Team and Growth are invited-organization plans, not a public catalog.
          </p>
          <ul className="access-list">
            {ACCESS_PLANS.map((plan) => (
              <li key={plan.name}>
                <strong>{plan.name}</strong>
                <span>{plan.summary}</span>
              </li>
            ))}
          </ul>
          <p className="home-measure">
            Mint is the intent language and toolchain. SpecMint is the governed lifecycle runtime.
            How providers execute remains private.
          </p>
          <p className="home-measure">
            Services exist to help teams adopt and apply the products — not to turn {COMPANY_NAME}{' '}
            into a consulting catalog.
          </p>
          <p className="home-measure">
            Convergence is independent research exploring how specialized engineering capabilities
            can work together without collapsing their ownership.
          </p>
          <p className="home-measure">It informs how we think.</p>
          <p className="home-measure">It is not an OpsDevCode product or runtime dependency.</p>
          <p className="home-company-links">
            <Link href="/about">About OpsDevCode →</Link>
            <Link href="/approach">Our approach →</Link>
            <Link href="/services">Services →</Link>
            <a href={CONVERGENCE_URL} target="_blank" rel="noopener noreferrer">
              Convergence ↗
            </a>
          </p>
        </section>
      </PageFrame>
      <Reveal />
    </>
  )
}
