import type { Metadata } from 'next'
import Link from 'next/link'
import PageFrame from '@/components/PageFrame'
import MaturityMeta from '@/components/MaturityMeta'
import { products } from '@/lib/products'
import { ACCESS_PLANS, PLATFORM_NAME } from '@/lib/platform'
import { pageMeta } from '@/lib/seo'
import ProductSiteLink from '@/components/ProductSiteLink'
import { ProductMark } from '@/components/BrandMark'
import { CALENDLY_URL } from '@/lib/site'

export const metadata: Metadata = pageMeta({
  title: 'Products',
  description:
    'Repave, Overpass, Toll, and Dispatch are independently adoptable products in the OpsDevCode Platform.',
  path: '/products',
})

const compareRows = [
  { key: 'compareProblem', label: 'Problem' },
  { key: 'compareInput', label: 'Input' },
  { key: 'compareOutcome', label: 'Outcome' },
  { key: 'compareAvailability', label: 'Availability' },
] as const

export default function ProductsPage() {
  return (
    <PageFrame>
      <section className="section">
        <p className="rail-label">Portfolio</p>
        <h1 className="page-title">Independently adoptable products</h1>
        <p className="lede">
          {PLATFORM_NAME} is modular. Delivery, infrastructure state, and economics stay distinct.
          Dispatch is how people ask across them — it does not replace them, and it is not yet a
          standalone four-product interaction surface.
        </p>
        <div className="compare-wrap">
          <table className="compare">
            <caption className="visually-hidden">OpsDevCode product comparison</caption>
            <thead>
              <tr>
                <th scope="col">
                  <span className="visually-hidden">Dimension</span>
                </th>
                {products.map((p) => (
                  <th key={p.slug} scope="col">
                    <Link href={p.href} className="compare-product">
                      <ProductMark slug={p.slug} className="compare-product-mark" />
                      {p.name}
                    </Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compareRows.map((row) => (
                <tr key={row.key}>
                  <th scope="row">{row.label}</th>
                  {products.map((p) => (
                    <td key={p.slug}>{p[row.key]}</td>
                  ))}
                </tr>
              ))}
              <tr>
                <th scope="row">Maturity</th>
                {products.map((p) => (
                  <td key={p.slug}>
                    <MaturityMeta index={p.maturityIndex} label={p.maturityLabel} />
                  </td>
                ))}
              </tr>
              <tr>
                <th scope="row">Next step</th>
                {products.map((p) => (
                  <td key={p.slug}>
                    <ProductSiteLink href={p.ctaHref}>{p.nextStepLabel}</ProductSiteLink>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="compare-stack">
          {products.map((p) => (
            <article key={p.slug} className="compare-band">
              <h2>
                <Link href={p.href} className="compare-product">
                  <ProductMark slug={p.slug} className="compare-product-mark" />
                  {p.name}
                </Link>
              </h2>
              <dl>
                {compareRows.map((row) => (
                  <div key={row.key}>
                    <dt>{row.label}</dt>
                    <dd>{p[row.key]}</dd>
                  </div>
                ))}
                <div>
                  <dt>Maturity</dt>
                  <dd>
                    <MaturityMeta index={p.maturityIndex} label={p.maturityLabel} />
                  </dd>
                </div>
                <div>
                  <dt>Next step</dt>
                  <dd>
                    <ProductSiteLink href={p.ctaHref}>{p.nextStepLabel}</ProductSiteLink>
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
        <div className="access-block">
          <h2 className="section-title">Invited-organization access</h2>
          <p>
            Team and Growth are invited-organization plans. There is no public price list or
            self-serve catalog.
          </p>
          <ul className="access-list">
            {ACCESS_PLANS.map((plan) => (
              <li key={plan.name}>
                <strong>{plan.name}</strong>
                <span>{plan.summary}</span>
              </li>
            ))}
          </ul>
          <p>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Talk to request access →
            </a>
          </p>
        </div>
        <p className="note" style={{ marginTop: 'var(--space-24)' }}>
          Open-source utilities from earlier platform work remain on{' '}
          <a href="https://github.com/opsdevcode" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          . They are not the portfolio. Private product repositories are not published here.{' '}
          <Link href="/approach">How the products fit</Link>.
        </p>
      </section>
    </PageFrame>
  )
}
