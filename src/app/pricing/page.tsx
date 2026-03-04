import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Pricing',
  description: 'Transparent pricing. Architecture Review $1,200. Platform Health Check $2,200. Focused projects $3,500–$8,000. Fractional Advisor $3,250/month.',
}

export default function PricingPage() {
  return (
    <>
      <Header active="Pricing" />
      <main id="main">
        <div className="wrap">
          <section className="section">
            <h2 className="section-title">Pricing</h2>
            <p className="note" style={{ margin: '0 0 10px' }}>
              Upfront and simple. No long contracts. If you need something different, we&apos;ll scope it clearly.
            </p>
            <div className="pricing-card">
              <div className="pricing">
                <div className="row">
                  <div><strong>Architecture Review</strong><br /><span>One call + written notes</span></div>
                  <div><strong>$1,200</strong></div>
                </div>
                <div className="row">
                  <div><strong>Platform Health Check</strong><br /><span>Findings report + prioritized roadmap</span></div>
                  <div><strong>$2,200</strong></div>
                </div>
                <div className="row">
                  <div><strong>Focused Project</strong><br /><span>Time-boxed fixes (cost, scaling, IaC)</span></div>
                  <div><strong>$3,500–$8,000</strong></div>
                </div>
                <div className="row">
                  <div><strong>Fractional Advisor</strong><br /><span>4 hrs/week, async when it makes sense</span></div>
                  <div><strong>$3,250 / month</strong></div>
                </div>
              </div>
            </div>
            <p className="fine">
              I don&apos;t do on-call or firefighting. I focus on stability, cost, and platform design — stuff that sticks.
            </p>
          </section>
          <p style={{ marginTop: 'var(--space-32)' }}>
            <a className="btn primary" href="https://calendly.com/eric-opsdevco/30min" target="_blank" rel="noopener noreferrer">Book a call</a>
          </p>
          <Footer />
        </div>
      </main>
    </>
  )
}
