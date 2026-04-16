import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Platform health checks, FinOps, Terraform cleanup, CI/CD, Kubernetes, custom tooling, agentic development. How we work together.',
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
                <p>I dig into your AWS, GCP, EKS, and Terraform setup and give you a straight-up report: what&apos;s working, what&apos;s not, and what to fix first.</p>
              </Link>
              <Link href="/services/finops" className="tile">
                <h3>FinOps</h3>
                <p>Visibility into cloud spend, disciplined allocation, and engineering fixes — so your bill matches how you actually run.</p>
              </Link>
              <Link href="/services/terraform" className="tile">
                <h3>Terraform Cleanup</h3>
                <p>Refactor so your IaC is maintainable: clearer structure, safer workflows, less &quot;hold your breath&quot; on every apply.</p>
              </Link>
              <Link href="/services/cicd" className="tile">
                <h3>CI/CD</h3>
                <p>
                  Whether your organization is new to CI/CD automation or your pipelines need a revamp — I help you get delivery running smoothly and
                  safely.
                </p>
              </Link>
              <Link href="/services/kubernetes" className="tile">
                <h3>Kubernetes</h3>
                <p>From cluster setup and day-two operations to automated scaling — EKS and the surrounding platform, done intentionally.</p>
              </Link>
              <Link href="/services/custom-tooling" className="tile">
                <h3>Custom tooling</h3>
                <p>
                  If you need custom automation and tooling, I can help you design and build them — or write them for you — so your team stops repeating
                  the same manual work.
                </p>
              </Link>
              <Link href="/services/architecture-review" className="tile">
                <h3>Architecture Review</h3>
                <p>Before you lock in big decisions — networking, cluster layout, guardrails — I&apos;ll sanity-check the plan.</p>
              </Link>
              <Link href="/services/fractional-advisor" className="tile">
                <h3>Fractional Platform Advisor</h3>
                <p>A few hours a week of senior guidance for your CTO or platform lead. No hiring required.</p>
              </Link>
              <Link href="/agentic" className="tile">
                <h3>Agentic Development</h3>
                <p>Adopt AI-assisted and agentic workflows — Cursor, Copilot, custom tooling — so your team ships faster without the chaos.</p>
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
            <a className="btn primary" href="https://calendly.com/eric-opsdevco/30min" target="_blank" rel="noopener noreferrer">Book a call</a>
          </p>

          <Footer />
        </div>
      </main>
    </>
  )
}
