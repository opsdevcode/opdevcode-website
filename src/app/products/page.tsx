import type { Metadata } from 'next'
import Link from 'next/link'
import PageFrame from '@/components/PageFrame'
import MaturityMeta from '@/components/MaturityMeta'
import { products } from '@/lib/products'
import { pageMeta } from '@/lib/seo'

export const metadata: Metadata = pageMeta({
  title: 'Products',
  description:
    'Repave, Overpass, Toll, and Dispatch: governed software delivery, infrastructure state, engineering economics, and a governed intelligent experience.',
  path: '/products',
})

export default function ProductsPage() {
  return (
    <PageFrame>
      <section className="section">
        <p className="rail-label">Portfolio</p>
        <h1 className="page-title">Why four products</h1>
        <p className="lede">
          Delivery, infrastructure state, and economics are different jobs. Dispatch is how people
          and systems work across them — it does not replace them.
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
                    <Link href={p.href}>{p.name}</Link>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Job</th>
                {products.map((p) => (
                  <td key={p.slug}>{p.domain}</td>
                ))}
              </tr>
              <tr>
                <th scope="row">Role</th>
                {products.map((p) => (
                  <td key={p.slug}>{p.compareRole}</td>
                ))}
              </tr>
              <tr>
                <th scope="row">Maturity</th>
                {products.map((p) => (
                  <td key={p.slug}>
                    <MaturityMeta index={p.maturityIndex} label={p.maturityLabel} />
                  </td>
                ))}
              </tr>
              <tr>
                <th scope="row">Next</th>
                {products.map((p) => (
                  <td key={p.slug}>
                    <a href={p.ctaHref} target="_blank" rel="noopener noreferrer">
                      {p.ctaLabel}
                    </a>
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
                <Link href={p.href}>{p.name}</Link>
              </h2>
              <dl>
                <div>
                  <dt>Job</dt>
                  <dd>{p.domain}</dd>
                </div>
                <div>
                  <dt>Role</dt>
                  <dd>{p.compareRole}</dd>
                </div>
                <div>
                  <dt>Maturity</dt>
                  <dd>
                    <MaturityMeta index={p.maturityIndex} label={p.maturityLabel} />
                  </dd>
                </div>
                <div>
                  <dt>Next</dt>
                  <dd>
                    <a href={p.ctaHref} target="_blank" rel="noopener noreferrer">
                      {p.ctaLabel}
                    </a>
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
        <p className="note" style={{ marginTop: 'var(--space-24)' }}>
          Open-source utilities from earlier platform work remain on{' '}
          <a href="https://github.com/opsdevcode" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          . They are not the portfolio. <Link href="/approach">How the products fit</Link>.
        </p>
      </section>
    </PageFrame>
  )
}
