import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About',
  description: 'Eric Skaggs — 15+ years running production infrastructure. Solo platform engineering practice. AWS, GCP, EKS, Terraform, Karpenter, agentic development.',
}

export default function AboutPage() {
  return (
    <>
      <Header active="About" />
      <main id="main">
        <div className="wrap">
          <section className="section" id="about">
            <h2 className="section-title">About</h2>
            <div className="split">
              <div className="tile">
                <h3>Hi, I&apos;m Eric</h3>
                <p>
                  I&apos;ve been running production infrastructure for 15+ years — startups, scale-ups, and enterprises.
                  OpsDevCo is my solo practice: no sales team, no account managers, just me.
                </p>
                <p style={{ marginTop: 10 }}>
                  I focus on AWS, GCP (6+ years), Kubernetes (EKS), Karpenter, Terraform, and agentic development. The goal: make your platform predictable,
                  cheaper to run, and less of a daily headache.
                </p>
              </div>
              <div className="tile">
                <h3>What to expect</h3>
                <p>
                  Straight talk, practical advice, and work that actually ships. Small engagements with clear outcomes —
                  not endless &quot;consulting hours.&quot;
                </p>
                <p style={{ marginTop: 12 }}>
                  <span className="pill">EKS</span>{' '}
                  <span className="pill">Karpenter</span>{' '}
                  <span className="pill">Terraform</span>{' '}
                  <span className="pill">agentic dev</span>{' '}
                  <span className="pill">AWS</span>{' '}
                  <span className="pill">GCP</span>
                </p>
                <p style={{ marginTop: 12, color: 'var(--color-text-muted)', fontSize: 14 }}>— Eric Skaggs</p>
                <p style={{ marginTop: 14 }}>
                  <a href="https://github.com/opsdevcode" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <span style={{ color: 'var(--color-text-muted)', margin: '0 8px' }}>·</span>
                  <a href="https://www.linkedin.com/in/ericskaggs" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </p>
              </div>
            </div>
          </section>

          <section className="section" id="faq">
            <h2 className="section-title">FAQ</h2>
            <dl className="faq-list">
              <div className="faq-item">
                <dt>How long does a typical engagement last?</dt>
                <dd>Most work is time-boxed: a health check in a few days, cost fixes in 1–2 weeks, Terraform cleanup as needed. No open-ended retainer unless you want one.</dd>
              </div>
              <div className="faq-item">
                <dt>Do you work async or do we need to be on calls?</dt>
                <dd>I prefer async — Slack, email, PRs. I&apos;ll schedule calls when they&apos;re useful, but I won&apos;t fill your calendar.</dd>
              </div>
              <div className="faq-item">
                <dt>What if we&apos;re not on AWS or EKS?</dt>
                <dd>My depth is AWS, GCP (6+ years), and EKS. For Azure or other clouds I can advise on architecture and process, but hands-on work is AWS/GCP-focused.</dd>
              </div>
              <div className="faq-item">
                <dt>Can you help with agentic development / AI tooling?</dt>
                <dd>Yes. I use Cursor and agentic workflows daily. I can help you adopt them — rules, prompts, workflows — without the hype.</dd>
              </div>
            </dl>
          </section>

          <section className="section" id="contact">
            <h2 className="section-title">Get in touch</h2>
            <p className="note" style={{ marginBottom: 'var(--space-16)' }}>
              Drop me a line with a bit about your situation — team size, cloud bill ballpark, what&apos;s hurting. I&apos;ll reply with a clear next step.
            </p>
            <div className="contact">
              <a href="https://calendly.com/eric-opsdevco/30min" target="_blank" rel="noopener noreferrer">
                <span><strong>Book a call</strong><br /><span style={{ color: 'var(--color-text-muted)' }}>calendly.com/eric-opsdevco/30min</span></span>
                <span style={{ color: 'var(--color-primary)' }}>→</span>
              </a>
              <a href="mailto:eric@opsdevco.de?subject=OpsDevCo%20Intro&body=Team%20size%3A%0ACloud%20bill%20range%3A%0APlatform%20stack%20(AWS%2FGCP%2FEKS%2FTerraform%2Fother)%3A%0AWhat%E2%80%99s%20painful%3A%0AWhat%20would%20success%20look%20like%20in%2030%20days%3A">
                <span><strong>Email</strong><br /><span style={{ color: 'var(--color-text-muted)' }}>eric@opsdevco.de</span></span>
                <span style={{ color: 'var(--color-primary)' }}>→</span>
              </a>
            </div>
            <p className="fine">Low-profile by design. No newsletter, no tracking, no LinkedIn posts required.</p>
          </section>

          <Footer />
        </div>
      </main>
    </>
  )
}
