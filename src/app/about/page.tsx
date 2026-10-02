import type { Metadata } from 'next'
import PageFrame from '@/components/PageFrame'
import { pageMeta } from '@/lib/seo'
import {
  CALENDLY_URL,
  CONTACT_EMAIL,
  GITHUB_ORG_URL,
  MINT_LANGUAGE_URL,
  SPECMINT_PLATFORM_URL,
} from '@/lib/site'

export const metadata: Metadata = pageMeta({
  title: 'Company',
  description:
    'OpsDevCode is the company behind OpsDevCode Platform: Mint is the public entry language, with independently adoptable products for governed delivery, infrastructure state, economics, and intent.',
  path: '/about',
})

export default function AboutPage() {
  return (
    <PageFrame>
      <section className="section" id="about">
        <p className="rail-label">Company</p>
        <h1 className="page-title">OpsDevCode</h1>
        <p className="lede">
          OpsDevCode is the company. OpsDevCode Platform is the modular offering. Mint is the public
          entry product. The domain products — Repave, Overpass, Toll, and Dispatch — can be adopted
          independently.
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
            <dt>Is OpsDevCode the same as OpsDevCode Platform?</dt>
            <dd>
              No. OpsDevCode is the company. OpsDevCode Platform is the modular product offering.
            </dd>
          </div>
          <div className="faq-item">
            <dt>Is Repave the company platform?</dt>
            <dd>
              No. Repave is the governed software delivery product. It is independently adoptable.
            </dd>
          </div>
          <div className="faq-item">
            <dt>What are Mint and SpecMint?</dt>
            <dd>
              Mint is the public entry product: the language, CLI, SDK, editor, and protocol.
              SpecMint is the governed lifecycle runtime behind Mint, not a customer SKU. SpecMint
              core is public; the hosted service stays private. Domain products remain Repave,
              Overpass, Toll, and Dispatch. Relay is delivery, not a product.
            </dd>
          </div>
          <div className="faq-item">
            <dt>Is Relay a product?</dt>
            <dd>
              No. Relay is supporting conversational runtime. It is not in the public product
              family.
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
          <div className="faq-item">
            <dt>Is Mint a fifth OpsDevCode product?</dt>
            <dd>
              Yes. Mint is the public entry product. It does not own the Repave, Overpass, Toll, or
              Dispatch domains. SpecMint is the runtime behind Mint, not a customer SKU.{' '}
              <a href={MINT_LANGUAGE_URL} target="_blank" rel="noopener noreferrer">
                github.com/opsdevcode/specmint-language
              </a>
              {' · '}
              <a href={SPECMINT_PLATFORM_URL} target="_blank" rel="noopener noreferrer">
                github.com/opsdevcode/specmint-platform
              </a>
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
