import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Eric Skaggs — a platform engineer focused on fixing scaling issues, stabilizing platforms, and improving how teams ship and operate software in production.',
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
                  I&apos;m a platform engineer with 8+ years working on real-world
                  infrastructure.
                </p>
                <p style={{ marginTop: 10 }}>
                  I focus on systems that are already running — fixing scaling issues,
                  stabilizing platforms, and improving how teams ship and operate
                  software.
                </p>
                <p style={{ marginTop: 10 }}>
                  No theory, no over-engineering — just practical solutions that work in
                  production.
                </p>
              </div>
              <div className="tile">
                <h3>What I work on</h3>
                <ul className="bullets">
                  <li>Cloud architecture (AWS &amp; GCP)</li>
                  <li>Kubernetes (managed and self-hosted)</li>
                  <li>Infrastructure as Code (Terraform, Pulumi, Crossplane)</li>
                  <li>CI/CD pipeline design and optimization</li>
                  <li>GitOps and deployment workflows</li>
                  <li>Scaling and cost optimization</li>
                  <li>AI-assisted engineering workflows and agentic tooling</li>
                </ul>
                <p style={{ marginTop: 12 }}>
                  <span className="pill">AWS</span>{' '}
                  <span className="pill">GCP</span>{' '}
                  <span className="pill">Kubernetes</span>{' '}
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
            <p className="note" style={{ marginTop: 'var(--space-24)' }}>
              I&apos;ve worked on systems where scaling, cost, and reliability issues show
              up fast—and need to be fixed without slowing the team down.
            </p>
          </section>

          <section className="section" id="experience">
            <h2 className="section-title">Experience</h2>
            <p className="note" style={{ marginBottom: 'var(--space-16)' }}>
              Experience includes:
            </p>
            <ul className="bullets">
              <li>Fixing Kubernetes clusters that fail under load</li>
              <li>Debugging node scaling and scheduling issues</li>
              <li>Reducing cloud cost inefficiencies in AWS and GCP environments</li>
              <li>Stabilizing CI/CD pipelines slowing down delivery</li>
            </ul>
          </section>

          <section className="section" id="faq">
            <h2 className="section-title">FAQ</h2>
            <dl className="faq-list">
              <div className="faq-item">
                <dt>How long does a typical engagement last?</dt>
                <dd>
                  Most work is time-boxed. A Platform Audit runs a few days to two weeks.
                  Build / Fix work usually lands in weeks, not quarters. Advisory is
                  bounded hours on a cadence you choose.
                </dd>
              </div>
              <div className="faq-item">
                <dt>Do you work on AWS, GCP, or both?</dt>
                <dd>
                  Both, hands-on. If your platform spans both, that&apos;s fine — a lot of
                  the work is making the seams predictable.
                </dd>
              </div>
              <div className="faq-item">
                <dt>Managed Kubernetes or self-hosted?</dt>
                <dd>
                  Either. EKS and GKE for managed, and self-hosted for teams that need to
                  run their own control plane. The tradeoffs matter — I&apos;ll tell you
                  when one is the wrong fit.
                </dd>
              </div>
              <div className="faq-item">
                <dt>Do you work async or do we need to be on calls?</dt>
                <dd>
                  Async-first — Slack, email, PRs. I&apos;ll schedule calls when they move
                  the work forward.
                </dd>
              </div>
              <div className="faq-item">
                <dt>What if we&apos;re on Azure or another cloud?</dt>
                <dd>
                  My hands-on depth is AWS and GCP. For other clouds I can advise on
                  architecture and process, but I&apos;ll be upfront if a hands-on
                  engagement isn&apos;t the right fit.
                </dd>
              </div>
            </dl>
          </section>

          <section className="section" id="contact">
            <h2 className="section-title">Book a Platform Audit</h2>
            <p className="note" style={{ marginBottom: 'var(--space-16)' }}>
              If something in your platform feels off — scaling, cost, or reliability —
              it usually gets worse as you grow. This is the fastest way to get clarity
              on what to fix.
            </p>
            <div className="contact">
              <a
                href="https://calendly.com/eric-opsdevco/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>
                  <strong>Book a Platform Audit</strong>
                  <br />
                  <span style={{ color: 'var(--color-text-muted)' }}>
                    calendly.com/eric-opsdevco/30min
                  </span>
                </span>
                <span style={{ color: 'var(--color-primary)' }}>→</span>
              </a>
              <a href="mailto:eric@opsdevco.de?subject=Platform%20Audit%20-%20OpsDevCode&body=What%20you%E2%80%99re%20running%3A%0AWhat%E2%80%99s%20hurting%3A%0AWhat%20would%20good%20look%20like%20in%2030%20days%3A">
                <span>
                  <strong>Email</strong>
                  <br />
                  <span style={{ color: 'var(--color-text-muted)' }}>eric@opsdevco.de</span>
                </span>
                <span style={{ color: 'var(--color-primary)' }}>→</span>
              </a>
            </div>
            <p className="note" style={{ marginTop: 'var(--space-16)' }}>
              Not sure if this is a fit? We can figure that out quickly on a short call.
            </p>
          </section>

          <Footer />
        </div>
      </main>
    </>
  )
}
