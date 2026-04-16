import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Agentic Development',
  description:
    'Explore practical agent-based workflows that improve developer and operational efficiency — tools, prompts, and integration that stick.',
}

export default function AgenticPage() {
  return (
    <>
      <Header />
      <main id="main">
        <div className="wrap">
          <section className="section">
            <h2 className="section-title">Agentic Development</h2>
            <p className="note" style={{ marginBottom: 'var(--space-20)' }}>
              Practical agent-based workflows that improve developer and operational efficiency — adoption, prompts, and
              integration without churn.
            </p>
            <div className="split">
              <div className="tile">
                <h3>What I help with</h3>
                <ul className="bullets">
                  <li>Adopting Cursor, GitHub Copilot, or similar tools effectively</li>
                  <li>Setting up rules, prompts, and workflows that actually work</li>
                  <li>Integrating AI into your platform/infra workflows</li>
                  <li>Evaluating and choosing agentic tooling</li>
                </ul>
              </div>
              <div className="tile">
                <h3>Typical engagement</h3>
                <p>Short, focused sessions: audit your current setup, recommend changes, help implement. No long retainer — get unblocked and move on.</p>
              </div>
            </div>
            <p style={{ marginTop: 'var(--space-32)' }}>
              <a className="btn primary" href="https://calendly.com/eric-opsdevco/30min" target="_blank" rel="noopener noreferrer">Book a discovery call</a>
              <Link className="btn" href="/services" style={{ marginLeft: 'var(--space-12)' }}>All services</Link>
            </p>
          </section>
          <Footer />
        </div>
      </main>
    </>
  )
}
