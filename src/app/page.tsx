import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const homeDescription =
  'Platform engineering for production: AWS, GCP, Kubernetes, IaC. Cut waste, clarify operations, ship platforms your team owns. One senior lead—not a consulting roster.'

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
              <h1>Platform engineering<br /><span className="highlight">built for production.</span></h1>
              <p className="sub">
                Hands-on work across AWS, GCP, Kubernetes, and IaC. Less waste, clearer operations, platforms your team can run.
              </p>
              <p className="hero-diff">
                No slides. No fluff. Just working systems.
              </p>
              <div className="cta">
                <a className="btn primary" href="https://calendly.com/eric-opsdevco/30min" target="_blank" rel="noopener noreferrer">Book a discovery call</a>
                <a className="btn" href="/about#contact">Email me directly</a>
              </div>
              <p className="hero-reassure">
                Intro call to align on fit and scope—no obligation.
              </p>
              <p className="hero-cred">
                Solo practice: senior platform work across AWS, GCP, Kubernetes, IaC, and delivery.
              </p>
            </div>
          </section>

          <section className="section primary-problem" aria-labelledby="primary-problem-heading">
            <h2 id="primary-problem-heading" className="section-title">
              Most teams don’t have a DevOps problem — they have a complexity problem.
            </h2>
            <p className="primary-problem-body">
              Tool sprawl, vague ownership, rising cloud spend, slow delivery. Platform work should subtract complexity—most teams stack another layer on top.
            </p>
          </section>

          <section className="section point-of-view" aria-labelledby="point-of-view-heading">
            <h2 id="point-of-view-heading" className="section-title">
              Point of view
            </h2>
            <div className="point-of-view-body">
              <p>
                Too much DevOps work optimizes for tools instead of outcomes.
              </p>
              <p>
                I reduce complexity, sharpen clarity, and ship systems teams can run—nothing that only reads well on a diagram.
              </p>
            </div>
          </section>

          <section className="section before-after" aria-labelledby="before-after-heading">
            <h2 id="before-after-heading" className="section-title">
              Before / After
            </h2>
            <div className="split before-after-split">
              <div className="before-after-panel is-before">
                <h3 className="before-after-label">Before</h3>
                <ul className="before-after-list">
                  <li>Fragmented infrastructure and unclear ownership</li>
                  <li>Slow, brittle CI/CD</li>
                  <li>Rising cloud spend, limited visibility</li>
                </ul>
              </div>
              <div className="before-after-panel is-after">
                <h3 className="before-after-label">After</h3>
                <ul className="before-after-list">
                  <li>A platform your team understands and owns</li>
                  <li>Faster, more reliable shipping</li>
                  <li>Usage and cost you can see and explain</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="section example-outcomes" aria-labelledby="example-outcomes-heading">
            <h2 id="example-outcomes-heading" className="section-title">
              What this looks like in practice
            </h2>
            <ul className="example-outcomes-list">
              <li>Lower cloud spend by retiring unused resources and fixing misconfigurations</li>
              <li>CI/CD simplified; fewer failed deployments</li>
              <li>IaC standardized—shorter ramp-up, faster change</li>
              <li>Runbooks and ownership tightened for faster incident response</li>
            </ul>
          </section>

          <section className="section audience" aria-labelledby="who-for-heading">
            <h2 id="who-for-heading" className="section-title">
              Who this is for
            </h2>
            <div className="grid grid-2col">
              <div className="tile">
                <p>
                  Teams on <strong>AWS, GCP, or Kubernetes</strong> where the platform costs more to run than it should.
                </p>
              </div>
              <div className="tile">
                <p>
                  <strong>Engineering leaders</strong> who want senior platform depth without a big-firm engagement.
                </p>
              </div>
              <div className="tile">
                <p>
                  Teams blocked by <strong>slow delivery</strong>, opaque infrastructure, or rising cloud spend.
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
                  <strong>Fixed scope, clear outcomes</strong>—time-boxed engagements.
                </p>
              </div>
              <div className="tile">
                <p>
                  <strong>Engineering, not decks.</strong> Depth on AWS, GCP, Kubernetes, and IaC—direct work, no firm overhead.
                </p>
              </div>
              <div className="tile">
                <p>
                  <strong>Advise, pair, or build</strong>—whatever fits.
                </p>
              </div>
              <div className="tile">
                <p>
                  <strong>Systems your team still runs</strong> when the engagement ends.
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
                  Surface bottlenecks, risk, and waste; leave with a prioritized plan.
                </p>
              </Link>
              <Link href="/services/finops" className="tile">
                <h3>FinOps</h3>
                <p>
                  Cut spend and see where the money goes.
                </p>
              </Link>
              <Link href="/services/iac" className="tile">
                <h3>IaC</h3>
                <p>
                  Standardize infrastructure as code so teams ship faster with less risk.
                </p>
              </Link>
              <Link href="/services/cicd" className="tile">
                <h3>CI/CD</h3>
                <p>
                  Simpler pipelines, fewer failures, maintenance your team can sustain.
                </p>
              </Link>
              <Link href="/services/custom-tooling" className="tile">
                <h3>Custom tooling</h3>
                <p>
                  Small internal tools that remove toil—built to fit your stack.
                </p>
              </Link>
              <Link href="/agentic" className="tile">
                <h3>Agentic Development</h3>
                <p>
                  Agent-assisted workflows for dev and ops—where automation earns its place.
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
              Utilities I ship for AWS, Kubernetes, and Terraform workflows.
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
                For teams that want an operator, not a deck. Hands-on across AWS, GCP, Kubernetes, IaC, delivery, and light tooling—clarity, ownership, outcomes that last.
              </p>
            </div>
            <p className="fine" style={{ marginTop: 'var(--space-16)', marginBottom: 0 }}>
              <Link href="/about">About</Link>
              {' '}
              — background and contact.
            </p>
          </section>

          <section className="section engagement-flow" aria-labelledby="engagement-flow-heading">
            <h2 id="engagement-flow-heading" className="section-title">
              How engagement works
            </h2>
            <ol className="engagement-steps">
              <li className="engagement-step">
                <span className="engagement-step-index" aria-hidden="true">
                  1
                </span>
                <p className="engagement-step-text">
                  <strong>Discovery call</strong>
                  <span aria-hidden="true"> → </span>
                  map environment, constraints, priorities.
                </p>
              </li>
              <li className="engagement-step">
                <span className="engagement-step-index" aria-hidden="true">
                  2
                </span>
                <p className="engagement-step-text">
                  <strong>Time-boxed engagement</strong>
                  <span aria-hidden="true"> → </span>
                  work the highest-impact problems first.
                </p>
              </li>
              <li className="engagement-step">
                <span className="engagement-step-index" aria-hidden="true">
                  3
                </span>
                <p className="engagement-step-text">
                  <strong>Concrete outcomes</strong>
                  <span aria-hidden="true"> → </span>
                  improvements your team owns.
                </p>
              </li>
            </ol>
          </section>

          <section className="section closing-cta" aria-label="Book a discovery call">
            <div className="cta">
              <a className="btn primary" href="https://calendly.com/eric-opsdevco/30min" target="_blank" rel="noopener noreferrer">Book a discovery call</a>
              <a className="btn" href="/about#contact">Email me directly</a>
            </div>
            <p className="hero-reassure closing-cta-reassure">
              Intro call to align on fit and scope—no obligation.
            </p>
          </section>

          <Footer />
        </div>
      </main>
    </>
  )
}
