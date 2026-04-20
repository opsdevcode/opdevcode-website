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
            <p className="note" style={{ marginBottom: 'var(--space-24)' }}>
              Three clear ways to work together. Scoped, time-boxed, and hands-on in your
              stack — not a retainer or a staffing firm.
            </p>

            <div className="grid grid-2col">
              <div className="tile" id="audit">
                <h3>1. Platform Audit</h3>
                <p>
                  A focused review of your cloud and Kubernetes platform. You get a clear
                  picture of where the risk, cost, and friction live — and a prioritized
                  path to fix them.
                </p>
                <ul className="bullets" style={{ marginTop: 'var(--space-12)' }}>
                  <li>Architecture review across AWS and/or GCP</li>
                  <li>Kubernetes / platform review (managed or self-hosted)</li>
                  <li>CI/CD and infrastructure workflow review</li>
                  <li>Cost, scaling, and reliability findings</li>
                  <li>Prioritized recommendations you can hand to leadership or the team</li>
                </ul>
                <p className="tile-desc-follow" style={{ marginTop: 'var(--space-12)' }}>
                  Typical engagement: a few days to ~2 weeks. Read-first access, written
                  findings, and a short call to walk through priorities.
                </p>
              </div>

              <div className="tile" id="build-fix">
                <h3>2. Platform Build / Fix</h3>
                <p>
                  Hands-on work to build or stabilize your cloud and Kubernetes platform.
                  I work in your repos, clusters, and cloud accounts — shipping real
                  changes, not a slide deck.
                </p>
                <ul className="bullets" style={{ marginTop: 'var(--space-12)' }}>
                  <li>Cloud platform work across AWS and GCP</li>
                  <li>Kubernetes platforms — managed (EKS, GKE) or self-hosted</li>
                  <li>CI/CD and GitOps improvements</li>
                  <li>Infrastructure automation (Terraform, Pulumi, Crossplane)</li>
                  <li>Reliability and scaling remediation</li>
                </ul>
                <p className="tile-desc-follow" style={{ marginTop: 'var(--space-12)' }}>
                  Typical engagement: time-boxed, fixed scope. Often starts from an audit or
                  a specific pain point — meaningful movement in weeks, not quarters.
                </p>
              </div>

              <div className="tile" id="advisory">
                <h3>3. Advisory</h3>
                <p>
                  Senior platform judgment on a fixed cadence — for teams that don&apos;t
                  need a full-time hire but do need someone who&apos;s operated these
                  systems before.
                </p>
                <ul className="bullets" style={{ marginTop: 'var(--space-12)' }}>
                  <li>Ongoing platform guidance and architecture support</li>
                  <li>Review of RFCs, designs, and post-incident follow-ups</li>
                  <li>Troubleshooting and technical direction</li>
                  <li>Hiring signal for platform, SRE, and infrastructure roles</li>
                </ul>
                <p className="tile-desc-follow" style={{ marginTop: 'var(--space-12)' }}>
                  Typical engagement: bounded hours — async, Slack, and calls where they
                  earn their keep. Scope agreed up front so it stays useful, not
                  ceremonial.
                </p>
              </div>

              <div className="tile">
                <h3>Not sure which one?</h3>
                <p>
                  Most engagements start with a short discovery call. If an audit is the
                  right first step, we&apos;ll scope it. If you already know what needs
                  fixing, we can go straight to build. If you just need a second opinion,
                  advisory.
                </p>
                <p style={{ marginTop: 'var(--space-16)' }}>
                  <a
                    className="btn primary"
                    href="https://calendly.com/eric-opsdevco/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Book a discovery call
                  </a>
                </p>
              </div>
            </div>
          </section>

          <section className="section" id="capabilities">
            <h2 className="section-title">Capabilities</h2>
            <p className="note" style={{ marginBottom: 'var(--space-20)' }}>
              Specific areas I work in across the three offers above.
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
                  operations — not surprises.
                </p>
              </Link>
              <Link href="/services/cicd" className="tile">
                <h3>CI/CD &amp; GitOps</h3>
                <p>
                  Faster, more reliable delivery through pipelines and GitOps flows your
                  team can actually maintain.
                </p>
              </Link>
              <Link href="/services/iac" className="tile">
                <h3>Infrastructure as Code</h3>
                <p>
                  Terraform, Pulumi, or Crossplane — standardized so changes are
                  reviewable, repeatable, and safer to ship.
                </p>
              </Link>
              <Link href="/services/finops" className="tile">
                <h3>FinOps</h3>
                <p>
                  Cut waste and attribute spend to teams, services, and resources — not
                  blanket downsizing.
                </p>
              </Link>
              <Link href="/services/architecture-review" className="tile">
                <h3>Architecture Review</h3>
                <p>
                  Stress-test big bets before you commit — networking, clusters, and how
                  changes reach production.
                </p>
              </Link>
              <Link href="/services/custom-tooling" className="tile">
                <h3>Custom tooling</h3>
                <p>
                  Small internal tools and automation that remove toil — where it earns
                  its keep.
                </p>
              </Link>
              <Link href="/services/fractional-advisor" className="tile">
                <h3>Fractional Platform Advisor</h3>
                <p>
                  Senior platform judgment on a fixed cadence — strategy, vendors, and
                  team direction without a full-time hire.
                </p>
              </Link>
            </div>
          </section>

          <section className="section" id="how">
            <h2 className="section-title">How engagements work</h2>
            <div className="steps-row">
              <div className="tile">
                <h3>1. Discovery call</h3>
                <p>
                  30 minutes. What you&apos;re running, what&apos;s hurting, what good
                  would look like. If it&apos;s not a fit, I&apos;ll say so.
                </p>
              </div>
              <div className="tile">
                <h3>2. Scope agreed up front</h3>
                <p>
                  Audit, build, or advisory — time-boxed with a defined outcome. No
                  open-ended hours, no surprise line items.
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
              Book a discovery call
            </a>
            <Link className="btn" href="/about#contact" style={{ marginLeft: 'var(--space-12)' }}>
              Email me directly
            </Link>
          </p>

          <Footer />
        </div>
      </main>
    </>
  )
}
