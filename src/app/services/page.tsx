import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Platform health checks, cost optimization, Terraform cleanup, Karpenter strategy, agentic development. How we work together.',
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
              <div className="tile" id="platform-health">
                <h3>Platform Health Check</h3>
                <p>I dig into your AWS, GCP, EKS, and Terraform setup and give you a straight-up report: what&apos;s working, what&apos;s not, and what to fix first.</p>
              </div>
              <div className="tile">
                <h3>Cost + Scaling</h3>
                <p>Track down what&apos;s actually driving your bill — compute waste, node strategy, autoscaling — and fix it.</p>
              </div>
              <div className="tile">
                <h3>Terraform Cleanup</h3>
                <p>Refactor so your IaC is maintainable: clearer structure, safer workflows, less &quot;hold your breath&quot; on every apply.</p>
              </div>
              <div className="tile">
                <h3>Karpenter + Node Strategy</h3>
                <p>Get node provisioning and consolidation that behaves predictably and doesn&apos;t blow the budget.</p>
              </div>
              <div className="tile">
                <h3>Architecture Review</h3>
                <p>Before you lock in big decisions — networking, cluster layout, guardrails — I&apos;ll sanity-check the plan.</p>
              </div>
              <div className="tile">
                <h3>Fractional Platform Advisor</h3>
                <p>A few hours a week of senior guidance for your CTO or platform lead. No hiring required.</p>
              </div>
              <div className="tile">
                <h3><a href="/agentic" style={{ color: 'inherit' }}>Agentic Development</a></h3>
                <p>Adopt AI-assisted and agentic workflows — Cursor, Copilot, custom tooling — so your team ships faster without the chaos.</p>
              </div>
            </div>
          </section>

          <section className="section" id="how">
            <h2 className="section-title">How we&apos;ll work together</h2>
            <div className="steps-row">
              <div className="tile">
                <h3>1) Quick intro (15 min)</h3>
                <p>We talk through what&apos;s going on and what you&apos;re hoping for. If it&apos;s not a good fit, I&apos;ll tell you straight up.</p>
              </div>
              <div className="tile">
                <h3>2) I take a look</h3>
                <p>Usually read-only access — billing, EKS, your IaC repos. I try not to get in your team&apos;s way.</p>
              </div>
              <div className="tile">
                <h3>3) You get a plan</h3>
                <p>Prioritized: quick wins first, then medium fixes, then the bigger structural stuff.</p>
              </div>
              <div className="tile">
                <h3>4) We fix it</h3>
                <p>I implement or pair with your team. Most of my work is async and time-boxed — no endless retainer.</p>
              </div>
            </div>
            <div className="note" style={{ marginTop: 20 }}>
              If you&apos;re about to hire a &quot;Senior DevOps / Platform / SRE&quot; because things are a mess,
              this is often a faster way to get stable first — before you add headcount.
            </div>
          </section>

          <p style={{ marginTop: 'var(--space-32)' }}>
            <a className="btn primary" href="https://calendly.com/eric-opsdevco/30min" target="_blank" rel="noopener noreferrer">Book a call</a>
            <a className="btn" href="/pricing" style={{ marginLeft: 'var(--space-8)' }}>See pricing</a>
          </p>

          <Footer />
        </div>
      </main>
    </>
  )
}
