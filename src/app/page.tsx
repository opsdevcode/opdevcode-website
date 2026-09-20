import type { Metadata } from 'next'
import Link from 'next/link'
import PageFrame from '@/components/PageFrame'
import Reveal from '@/components/Reveal'
import ProductCard from '@/components/ProductCard'
import { products, type ProductSlug } from '@/lib/products'
import {
  CALENDLY_URL,
  COMPANY_BANNER_SRC,
  COMPANY_LOGO_SRC,
  CONVERGENCE_URL,
  CONTACT_EMAIL,
  PRODUCT_URLS,
  REPAVE_EVALUATE_URL,
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
      description: 'Governed software delivery.',
    },
  ],
}

const portfolioCopy: Record<
  ProductSlug,
  { job: string; host: string; start: string; startHref: string }
> = {
  repave: {
    job: 'Keep repositories on an approved path after they exist — generate, adopt, observe, and restore supported drift.',
    host: 'repave.opsdevco.de',
    start: 'The current evaluation door: waitlist and hosted generate, not general self-serve.',
    startHref: REPAVE_EVALUATE_URL,
  },
  overpass: {
    job: 'Keep accepted infrastructure state readable — what exists, how it connects, and what a change could reach.',
    host: 'overpass.opsdevco.de',
    start: 'Public identity and product truth. Hosted custody is partner-gated.',
    startHref: PRODUCT_URLS.overpass,
  },
  toll: {
    job: 'Connect engineering cost evidence to context without becoming an invoice or a savings engine.',
    host: 'toll.opsdevco.de',
    start: 'Public identity for engineering economics. Not an invoice system.',
    startHref: PRODUCT_URLS.toll,
  },
  dispatch: {
    job: 'Take a requested outcome into a governed path while the owning product keeps authority.',
    host: 'dispatch.opsdevco.de',
    start: 'Public identity for governed intent. The hosted assistant still runs in Repave.',
    startHref: PRODUCT_URLS.dispatch,
  },
}

const whyFour: { name: string; job: string }[] = [
  { name: 'Repave', job: 'Software and repository state' },
  { name: 'Overpass', job: 'Infrastructure state and relationships' },
  { name: 'Toll', job: 'Engineering economics' },
  { name: 'Dispatch', job: 'Governed intent and action' },
]

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PageFrame home>
        <section className="home-hero" aria-labelledby="home-thesis">
          <h1 id="home-thesis">
            Building software is easier than keeping it healthy as everything around it changes
            <span className="highlight">.</span>
          </h1>
          <p className="home-support">
            OpsDevCode is a product company. Four independent products cover software delivery,
            infrastructure state, engineering economics, and governed intent.
          </p>
          <div className="cta">
            <a className="btn primary" href="#products">
              See the products
            </a>
            <a className="btn" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Talk to OpsDevCode
            </a>
          </div>
        </section>

        <section
          className="section home-portfolio"
          id="products"
          aria-labelledby="portfolio-heading"
        >
          <h2 id="portfolio-heading" className="section-title">
            Four products. One company.
          </h2>
          <p className="lede home-measure">
            Each product owns its domain. None of them is the company, and none is a required next
            step after another.
          </p>
          <div className="product-grid product-grid--portfolio">
            {products.map((product) => (
              <ProductCard
                key={product.slug}
                product={product}
                variant="portfolio"
                job={portfolioCopy[product.slug].job}
                hostLabel={portfolioCopy[product.slug].host}
              />
            ))}
          </div>
        </section>

        <section className="section home-why" aria-labelledby="why-heading">
          <h2 id="why-heading" className="section-title">
            Why four
          </h2>
          <p className="lede home-measure">
            Delivery, infrastructure, cost, and intent are different jobs. Treating them as one
            product hides the owner of the work.
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
            Customers are not required to use all four. How the products relate is documented on{' '}
            <Link href="/architecture">Architecture</Link> and{' '}
            <Link href="/approach">Approach</Link>.
          </p>
        </section>

        <section className="section home-start" aria-labelledby="start-heading">
          <h2 id="start-heading" className="section-title">
            How to start
          </h2>
          <p className="lede home-measure">
            Repave is the current evaluation door. The other products have public identity pages at
            the maturity they have earned. There is no hosted four-product workflow to try.
          </p>
          <ul className="start-list">
            {products.map((product) => {
              const copy = portfolioCopy[product.slug]
              return (
                <li key={product.slug}>
                  <strong>{product.name}</strong>
                  <p>{copy.start}</p>
                  <a href={copy.startHref} target="_blank" rel="noopener noreferrer">
                    {copy.host}
                  </a>
                </li>
              )
            })}
          </ul>
        </section>

        <section className="section home-company" aria-labelledby="company-heading">
          <h2 id="company-heading" className="section-title">
            The company
          </h2>
          <p className="lede home-measure">
            OpsDevCode is founder-led. The products are the public work. Services exist when a team
            needs help adopting them. Convergence is independent research — not an OpsDevCode
            product.
          </p>
          <p className="home-company-links">
            <Link href="/about">Company</Link>
            <Link href="/services">Services</Link>
            <a href={CONVERGENCE_URL} target="_blank" rel="noopener noreferrer">
              Convergence
            </a>
          </p>
        </section>
      </PageFrame>
      <Reveal />
    </>
  )
}
