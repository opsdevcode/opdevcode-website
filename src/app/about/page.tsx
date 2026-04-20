import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Eric Skaggs — 15+ years running production infrastructure. Solo platform engineering practice. Cloud and Kubernetes platform engineering across AWS and GCP, managed or self-hosted.',
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
                  I&apos;ve been running production infrastructure for 15+ years — across
                  startups, scale-ups, and enterprises. OpsDevCode is my solo practice: no
                  sales team, no account managers, just me.
                </p>
                <p style={{ marginTop: 10 }}>
                  I focus on <strong>cloud and Kubernetes platform engineering</strong>{' '}
                  across <strong>AWS and GCP</strong>, and on Kubernetes itself — managed
                  (EKS, GKE) or self-hosted. Day to day that means architecture, CI/CD and
                  GitOps, infrastructure as code (Terraform, Pulumi, Crossplane), and the
                  reliability, scaling, and cost work that comes with operating these
                  systems in production.
                </p>
                <p style={{ marginTop: 10 }}>
                  The goal: a platform that&apos;s predictable, cheaper to run, and less of
                  a daily headache — one your team can own after I leave.
                </p>
              </div>
              <div className="tile">
                <h3>What to expect</h3>
                <p>
                  Straight talk, practical advice, and work that actually ships. Scoped,
                  time-boxed engagements with clear outcomes — not open-ended consulting
                  hours.
                </p>
                <p style={{ marginTop: 12 }}>
                  <span className="pill">AWS</span>{' '}
                  <span className="pill">GCP</span>{' '}
                  <span className="pill">Kubernetes</span>{' '}
                  <span className="pill">EKS</span>{' '}
                  <span className="pill">GKE</span>{' '}
                  <span className="pill">IaC</span>{' '}
                  <span className="pill">CI/CD</span>{' '}
                  <span className="pill">GitOps</span>
                </p>
                <p style={{ marginTop: 12, color: 'var(--color-text-muted)', fontSize: 14 }}>
                  — Eric Skaggs
                </p>
                <p style={{ marginTop: 14 }}>
                  <a href="https://github.com/opsdevcode" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <span style={{ color: 'var(--color-text-muted)', margin: '0 8px' }}>·</span>
                  <a
                    href="https://www.linkedin.com/in/ericskaggs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </p>
              </div>
            </div>
          </section>

          <section className="section" id="faq">
            <h2 className="section-title">FAQ</h2>
            <dl className="faq-list">
              <div className="faq-item">
                <dt>How long does a typical engagement last?</dt>
                <dd>
                  Most work is time-boxed. A Platform Audit runs a few days to two weeks.
                  Build / Fix work usually lands in weeks, not quarters. Advisory is bounded
                  hours on a cadence you choose. No open-ended retainer unless you want one.
                </dd>
              </div>
              <div className="faq-item">
                <dt>Do you work on AWS, GCP, or both?</dt>
                <dd>
                  Both, hands-on. AWS and GCP are the two clouds I go deep on. If your
                  platform spans both, that&apos;s fine — a lot of the work is making the
                  seams predictable.
                </dd>
              </div>
              <div className="faq-item">
                <dt>Managed Kubernetes or self-hosted?</dt>
                <dd>
                  Either. EKS and GKE for managed, and self-hosted / bare-metal-ish
                  Kubernetes for teams that need to run their own control plane. The
                  tradeoffs matter — I&apos;ll tell you honestly when one is the wrong fit.
                </dd>
              </div>
              <div className="faq-item">
                <dt>Do you work async or do we need to be on calls?</dt>
                <dd>
                  Async-first — Slack, email, PRs. I&apos;ll schedule calls when they move
                  the work forward, but I won&apos;t fill your calendar.
                </dd>
              </div>
              <div className="faq-item">
                <dt>What if we&apos;re on Azure or another cloud?</dt>
                <dd>
                  My hands-on depth is AWS and GCP. For Azure or other clouds I can advise
                  on architecture and process, but I&apos;ll be upfront if a hands-on
                  engagement isn&apos;t the right fit.
                </dd>
              </div>
            </dl>
          </section>

          <section className="section" id="contact">
            <h2 className="section-title">Get in touch</h2>
            <p className="note" style={{ marginBottom: 'var(--space-16)' }}>
              A few lines on what you&apos;re running and what&apos;s hurting is plenty —
              team size, cloud (AWS/GCP), whether Kubernetes is in the picture, and what
              you&apos;d want to be different in 30 days. I&apos;ll reply with a clear next
              step.
            </p>
            <div className="contact">
              <a
                href="https://calendly.com/eric-opsdevco/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <strong>Book a discovery call</strong>
                  <br />
                  <span style={{ color: 'var(--color-text-muted)' }}>
                    calendly.com/eric-opsdevco/30min
                  </span>
                </span>
                <span style={{ color: 'var(--color-primary)' }}>→</span>
              </a>
              <a href="mailto:eric@opsdevco.de?subject=OpsDevCode%20Intro&body=Team%20size%3A%0ACloud%20(AWS%2FGCP%2Fboth)%3A%0AKubernetes%20(managed%2Fself-hosted%2Fnone)%3A%0AWhat%E2%80%99s%20hurting%3A%0AWhat%20would%20good%20look%20like%20in%2030%20days%3A">
                <span>
                  <strong>Email</strong>
                  <br />
                  <span style={{ color: 'var(--color-text-muted)' }}>eric@opsdevco.de</span>
                </span>
                <span style={{ color: 'var(--color-primary)' }}>→</span>
              </a>
            </div>
            <p className="fine">
              Low-profile by design. No newsletter, no tracking, no LinkedIn posts required.
            </p>
          </section>

          <Footer />
        </div>
      </main>
    </>
  )
}
