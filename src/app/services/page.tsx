import type { Metadata } from 'next'
import Link from 'next/link'
import PageFrame from '@/components/PageFrame'
import { pageMeta } from '@/lib/seo'
import { CALENDLY_URL, CONTACT_EMAIL } from '@/lib/site'
import { serviceSlugs, servicesBySlug } from '@/lib/services-detail'

export const metadata: Metadata = pageMeta({
  title: 'Services',
  description:
    'Architecture, adoption, platform modernization, and implementation around OpsDevCode products and production engineering systems.',
  path: '/services',
})

export default function ServicesPage() {
  return (
    <PageFrame>
      <section className="section" id="services">
        <p className="rail-label">Adoption</p>
        <h1 className="page-title">Services</h1>
        <p className="lede">
          OpsDevCode is a product company. Advisory and implementation remain available when a team
          needs a path through architecture, adoption, or integration.
        </p>
        <div className="product-page-grid">
          <div>
            <h2>Architecture and adoption</h2>
            <p>
              Map current delivery, state, and economics practices onto the product domains. Decide
              what to adopt, what to integrate, and what to leave alone.
            </p>
          </div>
          <div>
            <h2>Platform modernization</h2>
            <p>
              Kubernetes, cloud accounts, IaC, and CI/CD work in service of a governed path — not as
              a standalone consulting catalog.
            </p>
          </div>
          <div>
            <h2>Product integration</h2>
            <p>
              Connecting Repave and related runtime pieces to existing Git, cloud, and identity
              systems.
            </p>
          </div>
          <div>
            <h2>Engineering systems advisory</h2>
            <p>
              Time-boxed review of designs, incidents, and operating models. Founder-led. No
              invented delivery roster.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="capabilities">
        <h2 className="section-title">Engagements</h2>
        <p className="note" style={{ marginBottom: 'var(--space-20)' }}>
          Indexed URLs from earlier work remain. The framing is adoption and implementation, not a
          second product portfolio.
        </p>
        <ul className="service-index">
          {serviceSlugs.map((slug) => {
            const s = servicesBySlug[slug]
            return (
              <li key={slug}>
                <Link href={`/services/${slug}`}>
                  <strong>{s.title}</strong>
                  <span>{s.description}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </section>

      <section className="section" id="how">
        <h2 className="section-title">How the work is scoped</h2>
        <div className="product-page-grid">
          <div>
            <h2>1. Short call</h2>
            <p>What you run, what is blocking, whether products or services are the right door.</p>
          </div>
          <div>
            <h2>2. Bounded outcome</h2>
            <p>Time-boxed. Open-ended hours are not the default model.</p>
          </div>
          <div>
            <h2>3. In your systems</h2>
            <p>Repos, clusters, and cloud accounts when the work is hands-on.</p>
          </div>
          <div>
            <h2>4. You keep the system</h2>
            <p>The point is ownership after the engagement, not a permanent dependency.</p>
          </div>
        </div>
      </section>

      <p className="cta-row">
        <a className="btn primary" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
          Talk to OpsDevCode
        </a>
        <a className="btn" href={`mailto:${CONTACT_EMAIL}`}>
          Email
        </a>
        <Link className="btn" href="/products">
          Products
        </Link>
      </p>
    </PageFrame>
  )
}
