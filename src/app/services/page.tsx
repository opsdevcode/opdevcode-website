import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Outcome-driven platform work: health checks, FinOps, IaC, CI/CD, Kubernetes, custom tooling, architecture review, fractional advice, agentic workflows.',
}

export default function ServicesPage() {
  return (
    <>
      <Header active="Services" />
      <main id="main">
        <div className="wrap">
          <section className="section" id="services">
            <h2 className="section-title">What I do</h2>
            <div className="grid grid-2col">
              <Link href="/services/platform-health" className="tile" id="platform-health">
                <h3>Platform Health Check</h3>
                <p>
                  Identify bottlenecks, risks, and unnecessary complexity in your platform, with clear next steps to improve
                  it.
                </p>
              </Link>
              <Link href="/services/finops" className="tile">
                <h3>FinOps</h3>
                <p>Reduce cloud spend and improve visibility into where your infrastructure budget is going.</p>
              </Link>
              <Link href="/services/iac" className="tile">
                <h3>IaC</h3>
                <p>Clean up and standardize infrastructure as code so your team can move faster with less risk.</p>
              </Link>
              <Link href="/services/cicd" className="tile">
                <h3>CI/CD</h3>
                <p>Improve delivery speed and reliability with simpler pipelines your team can actually maintain.</p>
              </Link>
              <Link href="/services/kubernetes" className="tile">
                <h3>Kubernetes</h3>
                <p>
                  Operate EKS and the surrounding platform with predictable upgrades, scaling, and day-two behavior — not
                  surprises.
                </p>
              </Link>
              <Link href="/services/custom-tooling" className="tile">
                <h3>Custom tooling</h3>
                <p>Build lightweight internal tools that remove friction and automate repetitive work.</p>
              </Link>
              <Link href="/services/architecture-review" className="tile">
                <h3>Architecture Review</h3>
                <p>Stress-test big bets before you commit — networking, clusters, and how changes reach production.</p>
              </Link>
              <Link href="/services/fractional-advisor" className="tile">
                <h3>Fractional Platform Advisor</h3>
                <p>
                  Senior platform judgment on a fixed cadence — strategy, vendors, and team direction without a full-time
                  hire.
                </p>
              </Link>
              <Link href="/agentic" className="tile">
                <h3>Agentic Development</h3>
                <p>
                  Explore practical agent-based workflows that improve developer and operational efficiency.
                </p>
              </Link>
            </div>
          </section>

          <section className="section" id="how">
            <h2 className="section-title">How it works</h2>
            <div className="steps-row">
              <div className="tile">
                <h3>1. Quick intro</h3>
                <p>15 min. What&apos;s going on, what you&apos;re hoping for. If it&apos;s not a fit, I&apos;ll say so.</p>
              </div>
              <div className="tile">
                <h3>2. I take a look</h3>
                <p>Usually read-only access — billing, K8s, your IaC repos. Low friction.</p>
              </div>
              <div className="tile">
                <h3>3. You get a plan</h3>
                <p>Quick wins first, then medium fixes, then structural work. Prioritized.</p>
              </div>
              <div className="tile">
                <h3>4. We fix it</h3>
                <p>I implement or pair with your team. Async, time-boxed. No endless retainer.</p>
              </div>
            </div>
            <p className="note" style={{ marginTop: 'var(--space-20)' }}>
              If you&apos;re about to hire a DevOps/Platform/SRE because things are a mess — this is often a faster way to get stable first.
            </p>
          </section>

          <p style={{ marginTop: 'var(--space-32)' }}>
            <a className="btn primary" href="https://calendly.com/eric-opsdevco/30min" target="_blank" rel="noopener noreferrer">Book a discovery call</a>
          </p>

          <Footer />
        </div>
      </main>
    </>
  )
}
