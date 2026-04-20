import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Three ways to work together: Platform Audit, Platform Build / Fix, and Advisory. Cloud and Kubernetes platform engineering across AWS and GCP, managed or self-hosted.',
}

export default function ServicesPage() {
  return (
    <>
      <Header active="Services" />
      <main id="main">
        <div className="wrap">
          <section className="section" id="services">
            <h2 className="section-title">How I can help</h2>

            <div className="grid grid-2col">
              <div className="tile" id="audit">
                <h3>Platform Audit</h3>
                <p>
                  A fast, focused review of your cloud and Kubernetes setup to identify
                  what&apos;s broken, fragile, or costing too much.
                </p>
                <p className="tile-list-label">What you get:</p>
                <ul className="bullets">
                  <li>Clear breakdown of what&apos;s broken or fragile</li>
                  <li>Identification of scaling and reliability risks</li>
                  <li>Cost inefficiencies and optimization opportunities</li>
                  <li>Gaps in infrastructure as code, CI/CD, and automation</li>
                  <li>Prioritized next steps for fixing the platform</li>
                </ul>
              </div>

              <div className="tile" id="build-fix">
                <h3>Platform Build / Fix</h3>
                <p>
                  I design, rebuild, or stabilize your platform so it behaves predictably
                  under real-world load and doesn&apos;t break when you scale. This includes
                  infrastructure as code, CI/CD pipelines, and deployment workflows that
                  remove manual steps and improve reliability.
                </p>
                <ul className="bullets" style={{ marginTop: 'var(--space-12)' }}>
                  <li>Cloud platform work across AWS and GCP</li>
                  <li>Kubernetes — managed (EKS, GKE) or self-hosted</li>
                  <li>CI/CD and GitOps improvements</li>
                  <li>Infrastructure automation (Terraform, Pulumi, Crossplane)</li>
                  <li>Reliability and scaling remediation</li>
                </ul>
              </div>

              <div className="tile" id="advisory">
                <h3>Advisory</h3>
                <p>
                  Ongoing support to help you make the right platform decisions as you
                  scale.
                </p>
                <ul className="bullets" style={{ marginTop: 'var(--space-12)' }}>
                  <li>Architecture and platform guidance</li>
                  <li>Review of RFCs, designs, and post-incident follow-ups</li>
                  <li>Troubleshooting and technical direction</li>
                  <li>Hiring signal for platform, SRE, and infra roles</li>
                </ul>
              </div>

              <div className="tile">
                <h3>Not sure which one?</h3>
                <p>
                  Most engagements start with a Platform Audit. If you already know what
                  needs fixing, we can go straight to build. If you just need a second
                  opinion, advisory.
                </p>
                <p style={{ marginTop: 'var(--space-16)' }}>
                  <a
                    className="btn primary"
                    href="https://calendly.com/eric-opsdevco/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a Platform Audit
                  </a>
                </p>
              </div>
            </div>
          </section>

          <section className="section" id="capabilities">
            <h2 className="section-title">What I work on</h2>
            <p className="note" style={{ marginBottom: 'var(--space-20)' }}>
              I work directly on production systems:
            </p>
            <div className="grid grid-2col">
              <Link href="/services/platform-health" className="tile">
                <h3>Platform Health Check</h3>
                <p>
                  Identify bottlenecks, risk, and unnecessary complexity — with clear
                  next steps to improve.
                </p>
              </Link>
              <Link href="/services/kubernetes" className="tile">
                <h3>Kubernetes</h3>
                <p>
                  Managed or self-hosted. Predictable upgrades, scaling, and day-two
                  operations.
                </p>
              </Link>
              <Link href="/services/cicd" className="tile">
                <h3>CI/CD &amp; GitOps</h3>
                <p>
                  Faster, more reliable delivery through pipelines your team can actually
                  maintain.
                </p>
              </Link>
              <Link href="/services/iac" className="tile">
                <h3>Infrastructure as Code</h3>
                <p>
                  Terraform, Pulumi, or Crossplane — standardized so changes are
                  reviewable and safe to ship.
                </p>
              </Link>
              <Link href="/services/finops" className="tile">
                <h3>Scaling &amp; cost</h3>
                <p>
                  Cut waste and attribute spend to teams, services, and resources — not
                  blanket downsizing.
                </p>
              </Link>
              <Link href="/services/architecture-review" className="tile">
                <h3>Architecture review</h3>
                <p>
                  Stress-test big bets before you commit — networking, clusters, and how
                  changes reach production.
                </p>
              </Link>
            </div>
          </section>

          <section className="section" id="how">
            <h2 className="section-title">How engagements work</h2>
            <div className="steps-row">
              <div className="tile">
                <h3>1. Short call</h3>
                <p>
                  What you&apos;re running, what&apos;s hurting, what good would look like.
                  If it&apos;s not a fit, I&apos;ll say so.
                </p>
              </div>
              <div className="tile">
                <h3>2. Scope agreed up front</h3>
                <p>
                  Audit, build, or advisory — time-boxed with a defined outcome. No
                  open-ended hours.
                </p>
              </div>
              <div className="tile">
                <h3>3. Hands-on in your stack</h3>
                <p>
                  I work in your repos, clusters, and cloud accounts. Async-first, with
                  calls when they move the work forward.
                </p>
              </div>
              <div className="tile">
                <h3>4. A platform your team owns</h3>
                <p>
                  The goal is a system your team fully understands after I leave — not an
                  ongoing dependency.
                </p>
              </div>
            </div>
          </section>

          <p style={{ marginTop: 'var(--space-32)' }}>
            <a
              className="btn primary"
              href="https://calendly.com/eric-opsdevco/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Platform Audit
            </a>
          </p>
          <p className="note" style={{ marginTop: 'var(--space-12)' }}>
            Not sure if this is a fit? We can figure that out quickly on a short call.
          </p>

          <Footer />
        </div>
      </main>
    </>
  )
}
