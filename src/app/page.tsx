import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'OpsDevCode | Platform Engineering Advisory',
  description: 'Platform engineering advisory for DevOps and cloud teams — AWS, GCP, Kubernetes, IaC, CI/CD, FinOps, health checks, custom tooling. No corporate speak.',
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'OpsDevCode',
  description: 'Platform engineering advisory for DevOps and cloud teams on AWS, GCP, Kubernetes, and IaC. No corporate speak.',
  url: 'https://opsdevco.de',
  email: 'eric@opsdevco.de',
  areaServed: 'Worldwide',
  serviceType: ['Platform Engineering', 'Cloud Infrastructure', 'FinOps', 'AWS', 'GCP', 'DevOps', 'Kubernetes', 'IaC', 'CI/CD', 'Custom tooling'],
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main id="main">
        <div className="wrap">
          <section className="hero">
            <div className="hero-inner">
              <h1>DevOps and platform engineering<br /><span className="highlight">that actually works.</span></h1>
              <p className="sub">
                Advisory, health checks, FinOps, IaC, CI/CD, and custom tooling for cloud teams that want simpler systems and cleaner execution. No corporate speak.
              </p>
              <div className="cta">
                <a className="btn primary" href="https://calendly.com/eric-opsdevco/30min" target="_blank" rel="noopener noreferrer">Book a discovery call</a>
                <a className="btn" href="/about#contact">Email me directly</a>
              </div>
            </div>
          </section>

          <section className="section audience" aria-labelledby="who-for-heading">
            <h2 id="who-for-heading" className="section-title">
              Who this is for
            </h2>
            <div className="grid grid-2col">
              <div className="tile">
                <p>
                  Teams on <strong>AWS, GCP, Kubernetes, or IaC</strong> that have gotten harder to manage than they should be.
                </p>
              </div>
              <div className="tile">
                <p>
                  <strong>Engineering leaders and startup CTOs</strong> who need practical platform help without hiring a full consulting army.
                </p>
              </div>
              <div className="tile">
                <p>
                  <strong>Companies</strong> that want clearer cloud operations, better tooling, and less friction in delivery.
                </p>
              </div>
            </div>
          </section>

          <section className="section how-work" aria-labelledby="how-work-heading">
            <h2 id="how-work-heading" className="section-title">
              How I work
            </h2>
            <div className="grid grid-2col">
              <div className="tile">
                <p>
                  <strong>Time-boxed engagements</strong> with clear outcomes.
                </p>
              </div>
              <div className="tile">
                <p>
                  <strong>Practical platform engineering</strong>, not slide decks. Real depth on AWS, GCP, Kubernetes, and IaC — no corporate speak, no bloated consulting.
                </p>
              </div>
              <div className="tile">
                <p>
                  I can advise, pair with your team, or build.
                </p>
              </div>
              <div className="tile">
                <p>
                  Focused on <strong>systems your team can own</strong> after I leave.
                </p>
              </div>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Services</h2>
            <div className="grid grid-2col">
              <Link href="/services/platform-health" className="tile">
                <h3>Platform Health Check</h3>
                <p>
                  When AWS, GCP, EKS, and IaC feel noisy or nobody agrees what to fix first, you get a ranked backlog and a straight read of what is actually broken.
                </p>
              </Link>
              <Link href="/services/finops" className="tile">
                <h3>FinOps</h3>
                <p>
                  When the bill does not line up with services and teams cannot defend spend, you tie usage to owners and ship changes that move the number — not dashboard theater.
                </p>
              </Link>
              <Link href="/services/iac" className="tile">
                <h3>IaC</h3>
                <p>
                  When plans and applies are scary — or live in one person&apos;s head — you tighten Terraform, Pulumi, or Crossplane so promotion is predictable and the team owns it.
                </p>
              </Link>
              <Link href="/services/cicd" className="tile">
                <h3>CI/CD</h3>
                <p>
                  When builds flake, releases drag, or prod feels like a leap of faith, you get pipelines and gates that match how code ships: fast feedback, safer promotion.
                </p>
              </Link>
              <Link href="/services/custom-tooling" className="tile">
                <h3>Custom tooling</h3>
                <p>
                  When the same edge cases get scripted by hand every week, you ship focused CLIs or glue that fit real workflows and survive handoff without a babysitter.
                </p>
              </Link>
              <Link href="/agentic" className="tile">
                <h3>Agentic Development</h3>
                <p>
                  When Cursor, Copilot, or agents add noise instead of leverage, you get rules, prompts, and review habits that keep AI useful and under control.
                </p>
              </Link>
            </div>
            <p style={{ marginTop: 'var(--space-32)' }}>
              <Link className="btn" href="/services">All services</Link>
            </p>
          </section>

          <section className="section">
            <h2 className="section-title">Tools</h2>
            <p className="note" style={{ marginBottom: 'var(--space-16)' }}>
              Proof of work: lightweight CLI tools for common AWS, Kubernetes, and Terraform pain points.
            </p>
            <div className="grid grid-2col">
              <a href="https://github.com/opsdevcode/term-dx" target="_blank" rel="noopener noreferrer" className="tile">
                <h3>term-dx</h3>
                <p>Diagnose resources stuck in Terminating.</p>
              </a>
              <a href="https://github.com/opsdevcode/knode" target="_blank" rel="noopener noreferrer" className="tile">
                <h3>knode</h3>
                <p>List and cordon/drain EKS nodes from CLI.</p>
              </a>
            </div>
            <p style={{ marginTop: 'var(--space-20)' }}>
              <a className="btn" href="/tools">All tools</a>
            </p>
          </section>

          <section className="section trust" aria-label="About the practice">
            <div className="testimonial">
              <p className="note" style={{ margin: 0 }}>
                OpsDevCode is built for teams that need practical platform help from someone who has actually operated these systems. I work hands-on across AWS, GCP, Kubernetes, IaC, delivery pipelines, and lightweight internal tooling — clarity, ownership, and real outcomes, not slide-deck consulting.
              </p>
            </div>
            <p className="fine" style={{ marginTop: 'var(--space-16)', marginBottom: 0 }}>
              <Link href="/about">About</Link>
              {' '}
              — who runs this practice and how to reach me.
            </p>
          </section>

          <Footer />
        </div>
      </main>
    </>
  )
}
