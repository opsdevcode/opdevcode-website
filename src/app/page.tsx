import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const homeDescription =
  'Platform engineering that works in production. Practical DevOps and platform engineering for AWS, GCP, Kubernetes, and IaC. Simplify cloud operations, reduce waste, and build systems your team can actually own. No corporate speak.'

export const metadata: Metadata = {
  title: 'OpsDevCode | Platform Engineering Advisory',
  description: homeDescription,
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'OpsDevCode',
  description: homeDescription,
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
              <h1>Platform engineering<br /><span className="highlight">that actually works in production.</span></h1>
              <p className="sub">
                Practical DevOps and platform engineering for AWS, GCP, Kubernetes, and IaC. Simplify cloud operations, reduce waste, and build systems your team can actually own.
              </p>
              <div className="cta">
                <a className="btn primary" href="https://calendly.com/eric-opsdevco/30min" target="_blank" rel="noopener noreferrer">Book a discovery call</a>
                <a className="btn" href="/about#contact">Email me directly</a>
              </div>
              <p className="hero-reassure">
                No pressure — just a quick conversation to see if it makes sense.
              </p>
              <p className="hero-cred">
                Built by a platform engineer with hands-on experience across multiple clouds, Kubernetes, IaC, and delivery systems.
              </p>
            </div>
          </section>

          <section className="section primary-problem" aria-labelledby="primary-problem-heading">
            <h2 id="primary-problem-heading" className="section-title">
              Most teams don’t have a DevOps problem — they have a complexity problem.
            </h2>
            <p className="primary-problem-body">
              Too many tools, unclear infrastructure, rising cloud costs, and slow delivery. Platform engineering should simplify this — but most teams end up with more layers instead of less.
            </p>
          </section>

          <section className="section audience" aria-labelledby="who-for-heading">
            <h2 id="who-for-heading" className="section-title">
              Who this is for
            </h2>
            <div className="grid grid-2col">
              <div className="tile">
                <p>
                  Teams with <strong>AWS, GCP, or Kubernetes</strong> setups that have become harder to manage than they should be.
                </p>
              </div>
              <div className="tile">
                <p>
                  <strong>Engineering leaders</strong> who need hands-on platform help without hiring a large consulting firm.
                </p>
              </div>
              <div className="tile">
                <p>
                  Teams dealing with <strong>slow delivery</strong>, unclear infrastructure, or rising cloud costs.
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
                  Identify bottlenecks, risks, and unnecessary complexity in your platform, with clear next steps to improve it.
                </p>
              </Link>
              <Link href="/services/finops" className="tile">
                <h3>FinOps</h3>
                <p>
                  Reduce cloud spend and improve visibility into where your infrastructure budget is going.
                </p>
              </Link>
              <Link href="/services/iac" className="tile">
                <h3>IaC</h3>
                <p>
                  Clean up and standardize your infrastructure as code so your team can move faster with less risk.
                </p>
              </Link>
              <Link href="/services/cicd" className="tile">
                <h3>CI/CD</h3>
                <p>
                  Speed up delivery with simpler, more reliable pipelines that your team can actually maintain.
                </p>
              </Link>
              <Link href="/services/custom-tooling" className="tile">
                <h3>Custom tooling</h3>
                <p>
                  Build lightweight internal tools to remove friction and automate repetitive work.
                </p>
              </Link>
              <Link href="/agentic" className="tile">
                <h3>Agentic Development</h3>
                <p>
                  Explore and implement agent-based workflows to improve development and operational efficiency.
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
              A few small tools I&apos;ve built to solve real problems in AWS, Kubernetes, and Terraform workflows.
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
