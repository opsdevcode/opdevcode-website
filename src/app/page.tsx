import type { Metadata } from 'next'
import Link from 'next/link'
import PageFrame from '@/components/PageFrame'
import Reveal from '@/components/Reveal'
import { products, type ProductSlug } from '@/lib/products'
import {
  CALENDLY_URL,
  COMPANY_BANNER_SRC,
  COMPANY_LOGO_SRC,
  CONTACT_EMAIL,
  REPAVE_URL,
  REPAVE_WAITLIST_URL,
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
        width: 1280,
        height: 720,
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

        <section className="section" aria-labelledby="problem-heading">
          <h2 id="problem-heading" className="section-title">
            <span className="section-title-text">
              Creating software isn&apos;t the hard part anymore
            </span>
          </h2>
          <p className="lede">Keeping everything healthy as the organization grows is.</p>
          <ul className="scan-list">
            <li>Repositories drift from the standards they were meant to follow.</li>
            <li>Infrastructure relationships become hard to understand.</li>
            <li>Costs become disconnected from the products and teams creating them.</li>
            <li>
              Engineers end up stitching together more tools just to understand what is happening.
            </li>
          </ul>
        </section>

        <section className="section" aria-labelledby="products-heading">
          <h2 id="products-heading" className="section-title">
            <span className="section-title-text">Start with Repave</span>
          </h2>
          <p className="lede">
            These aren&apos;t four unrelated tools. Repave is the first external door — not the
            company. Overpass, Toll, and Dispatch are not equal conversion doors today.
          </p>
          <ul className="home-questions">
            {products.map((product) => {
              const copy = productQuestions[product.slug]
              return (
                <li key={product.slug}>
                  <Link href={product.href}>
                    <strong>{product.name}</strong>
                    <span>{copy.question}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
          <p className="home-follow">
            <Link href="/products">Compare products →</Link>
          </p>
        </section>

        <section className="section" aria-labelledby="system-heading">
          <h2 id="system-heading" className="section-title">
            <span className="section-title-text">The value is in the connection</span>
          </h2>
          <p className="lede">
            A repository Repave governs runs on infrastructure Overpass understands, incurs costs
            Toll can explain, and can be operated through Dispatch. Most tools help with a moment.
            This system is being built around the lifecycle.
          </p>
          <p className="lede">
            Convergence is an independent body of knowledge that informs the design. It is not an
            OpsDevCode product and is not in the runtime path.
          </p>
          <p className="home-follow">
            <Link href="/approach">How the system is designed →</Link>
          </p>
        </section>

        <section className="section section--band" aria-labelledby="closing-cta-heading">
          <h2 id="closing-cta-heading" className="closing-cta-title">
            If you have a repository, start the conversation there
          </h2>
          <p className="closing-cta-lead">
            Early access is a conversation, not self-serve hosted availability.
          </p>
          <div className="cta">
            <a className="btn primary" href={REPAVE_WAITLIST_URL}>
              Try Repave with your repository
            </a>
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
