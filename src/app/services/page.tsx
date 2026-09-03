import type { Metadata } from 'next'
import Link from 'next/link'
import PageFrame from '@/components/PageFrame'
import { CALENDLY_URL, CONTACT_EMAIL } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Architecture, adoption, platform modernization, and implementation assistance around OpsDevCode products and production engineering systems.',
}

export default function ServicesPage() {
  return (
    <PageFrame>
      <section className="section" id="services">
        <h1 className="page-title">Services</h1>
        <p className="lede">
          OpsDevCode is a product company. Advisory and implementation work remains available when a
          team needs a path through architecture, adoption, or custom integration.
        </p>
        <div className="product-page-grid">
          <div className="" id="architecture">
            <h2>Architecture and adoption</h2>
            <p>
              Map current delivery, state, and economics practices onto the product domains. Decide
              what to adopt, what to integrate, and what to leave alone.
            </p>
          </div>
          <div id="modernization">
            <h2>Platform modernization</h2>
            <p>
              Kubernetes, cloud accounts, IaC, and CI/CD work in service of a governed path — not as
              a standalone consulting catalog.
            </p>
          </div>
          <div id="integration">
            <h2>Product integration</h2>
            <p>
              Help connecting Repave and related runtime pieces to existing Git, cloud, and identity
              systems.
            </p>
          </div>
          <div id="advisory">
            <h2>Engineering systems advisory</h2>
            <p>
              Time-boxed review of designs, incidents, and operating models. Founder-led. No
              invented delivery roster.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="capabilities">
        <h2 className="section-title">Depth that still applies</h2>
        <p className="note" style={{ marginBottom: 'var(--space-20)' }}>
          Production work across the same surfaces as before, now in service of the product system
          rather than as the whole company story.
        </p>
        <div className="grid grid-2col">
          <Link href="/services/architecture-review" className="tile">
            <h3>Architecture review</h3>
            <p>Stress-test bets before you commit them to production.</p>
          </Link>
          <Link href="/services/kubernetes" className="tile">
            <h3>Kubernetes</h3>
            <p>Managed or self-hosted. Upgrades, scaling, day-two operations.</p>
          </Link>
          <Link href="/services/cicd" className="tile">
            <h3>CI/CD &amp; GitOps</h3>
            <p>Delivery pipelines a team can maintain.</p>
          </Link>
          <Link href="/services/iac" className="tile">
            <h3>Infrastructure as Code</h3>
            <p>Terraform, Pulumi, or Crossplane — reviewable change.</p>
          </Link>
          <Link href="/services/finops" className="tile">
            <h3>Cost and ownership</h3>
            <p>Spend and utilization evidence, not blanket downsizing.</p>
          </Link>
          <Link href="/services/custom-tooling" className="tile">
            <h3>Custom implementation</h3>
            <p>Internal tools and glue when the product path needs a bridge.</p>
          </Link>
        </div>
      </section>

      <h2 className="section-title">How the work is scoped</h2>
      <div className="product-page-grid" id="how">
        <div>
          <h2>1. Short call</h2>
          <p>What you run, what is blocking, whether products or services are the right door.</p>
        </div>
        <div>
          <h2>2. Bounded outcome</h2>
          <p>Time-boxed. No open-ended hours as the default model.</p>
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
