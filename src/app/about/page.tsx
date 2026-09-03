import type { Metadata } from 'next'
import PageFrame from '@/components/PageFrame'
import { pageMeta } from '@/lib/seo'
import { CALENDLY_URL, CONTACT_EMAIL, GITHUB_ORG_URL } from '@/lib/site'

export const metadata: Metadata = pageMeta({
  title: 'Company',
  description:
    'OpsDevCode is a founder-led company building engineering infrastructure for governed delivery, infrastructure state, economics, and intelligent action.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <PageFrame>
      <section className="section" id="about">
        <p className="rail-label">Company</p>
        <h1 className="page-title">OpsDevCode</h1>
        <p className="lede">
          OpsDevCode builds governed engineering systems for organizations where software delivery
          already spans people, platforms, automation, and agents.
        </p>
        <div className="product-page-grid">
          <div>
            <h2>Why it exists</h2>
            <p>
              Most organizations still expose the org chart as the path to ship. OpsDevCode builds
              products so delivery, infrastructure state, and economics stay distinct — and so
              humans, automation, and agents can participate without becoming policy.
            </p>
          </div>
          <div>
            <h2>How work is done</h2>
            <p>
              The company is founder-led. There is no invented staff page. Company language names
              the work, not a hidden workforce. Services exist for adoption and implementation; they
              are not the identity.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="founder">
        <h2 className="section-title">Founder</h2>
        <p>
          Eric Skaggs founded OpsDevCode after years working across cloud, infrastructure, developer
          platforms, delivery systems, and engineering automation. That background informs the
          products. It is not a freelance catalog.
        </p>
        <p style={{ marginTop: 12 }}>
          <a href={GITHUB_ORG_URL} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <span style={{ color: 'var(--color-text-muted)', margin: '0 8px' }}>·</span>
          <a href="https://www.linkedin.com/in/erskaggs/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </p>
      </section>

      <section className="section" id="faq">
        <h2 className="section-title">FAQ</h2>
        <dl className="faq-list">
          <div className="faq-item">
            <dt>Is OpsDevCode a consulting firm?</dt>
            <dd>
              No. Products are primary. Services exist for adoption, architecture, and
              implementation.
            </dd>
          </div>
          <div className="faq-item">
            <dt>Is Repave the company platform?</dt>
            <dd>
              No. Repave is the governed software delivery product. OpsDevCode is the umbrella.
            </dd>
          </div>
          <div className="faq-item">
            <dt>Does Dispatch own the other products?</dt>
            <dd>
              No. Dispatch is a governed experience across domain capabilities. Domain products
              remain authoritative.
            </dd>
          </div>
          <div className="faq-item">
            <dt>What is Convergence?</dt>
            <dd>
              An independent, vendor-neutral body of knowledge. OpsDevCode chooses to align with it.
              OpsDevCode does not own it, and it is not in the runtime path.
            </dd>
          </div>
        </dl>
      </section>

      <section className="section" id="contact">
        <h2 className="section-title">Talk to OpsDevCode</h2>
        <p className="note" style={{ marginBottom: 'var(--space-16)' }}>
          Product questions, adoption, or whether services are the right door.
        </p>
        <div className="contact">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            <span>
              <strong>Schedule a conversation</strong>
              <br />
              <span style={{ color: 'var(--color-text-muted)' }}>
                calendly.com/eric-opsdevco/30min
              </span>
            </span>
            <span style={{ color: 'var(--color-primary)' }}>→</span>
          </a>
          <a href={`mailto:${CONTACT_EMAIL}?subject=OpsDevCode`}>
            <span>
              <strong>Email</strong>
              <br />
              <span style={{ color: 'var(--color-text-muted)' }}>{CONTACT_EMAIL}</span>
            </span>
            <span style={{ color: 'var(--color-primary)' }}>→</span>
          </a>
        </div>
      </section>
    </PageFrame>
  )
}
