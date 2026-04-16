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
        <div className="wrap home">
          <section className="hero">
            <div className="hero-inner">
              <h1>Platform engineering<br /><span className="highlight">built for production.</span></h1>
              <p className="sub">
                Hands-on work across AWS, GCP, Kubernetes, and IaC.
              </p>
              <p className="hero-fit">
                If your platform is harder to manage than it should be, this is for you.
              </p>
              <ul className="hero-sub-points scan-list">
                <li>Less waste and clearer operations</li>
                <li>Platforms your team can run</li>
              </ul>
              <p className="hero-diff">
                <span className="key-em">No slides.</span> No fluff.{' '}
                <span className="key-em">Just working systems.</span>
              </p>
              <p className="hero-anti-consulting">
                This isn’t traditional consulting — no large teams, no bloated engagements, no unnecessary layers.
                Just focused, hands-on work that improves your systems.
              </p>
              <div className="cta">
                <a className="btn primary" href="https://calendly.com/eric-opsdevco/30min" target="_blank" rel="noopener noreferrer">Book a discovery call</a>
                <a className="btn" href="/about#contact">Email me directly</a>
              </div>
              <p className="hero-reassure">
                Intro call to align on fit and scope—no obligation.
              </p>
              <p className="hero-cred">Solo practice.</p>
              <p className="hero-cred">
                Senior platform work across AWS, GCP, Kubernetes, IaC, and delivery.
              </p>
            </div>
          </section>

          <section
            className="section primary-problem home-flow home-flow--clarity"
            aria-labelledby="primary-problem-heading"
          >
            <h2 id="primary-problem-heading" className="section-title">
              Most teams don’t have a DevOps problem — they have a complexity problem.
            </h2>
            <div className="primary-problem-body">
              <p>
                Too many tools, unclear infrastructure, rising cloud costs, and delivery friction. Platform
                engineering should reduce that complexity, not add more layers.
              </p>
            </div>
          </section>

          <section
            className="section point-of-view home-flow home-flow--clarity"
            aria-labelledby="point-of-view-heading"
          >
            <h2 id="point-of-view-heading" className="section-title">
              Point of view
            </h2>
            <div className="point-of-view-body">
              <p>
                Too much DevOps work optimizes for <span className="kw">tools</span> instead of{' '}
                <span className="kw">outcomes</span>.
              </p>
              <p>
                I <strong className="key-em">reduce complexity</strong>, sharpen clarity, and ship systems teams
                can run.
              </p>
              <p>
                Nothing that only reads well on a <span className="kw">diagram</span>.
              </p>
            </div>
          </section>

          <section
            className="section before-after home-flow home-flow--clarity"
            aria-labelledby="before-after-heading"
          >
            <h2 id="before-after-heading" className="section-title">
              Before / After
            </h2>
            <div className="split before-after-split">
              <div className="before-after-panel is-before">
                <h3 className="before-after-label">Before</h3>
                <ul className="before-after-list scan-list">
                  <li>Messy infrastructure and unclear ownership</li>
                  <li>Slow or fragile CI/CD pipelines</li>
                  <li>Rising cloud costs with poor visibility</li>
                </ul>
              </div>
              <div className="before-after-panel is-after">
                <h3 className="before-after-label">After</h3>
                <ul className="before-after-list scan-list">
                  <li>Clear, understandable systems your team can own</li>
                  <li>Faster, more reliable delivery</li>
                  <li>Better cost visibility and less operational friction</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="section audience home-flow home-flow--clarity" aria-labelledby="who-for-heading">
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

          <section className="section how-work home-flow home-flow--clarity" aria-labelledby="how-work-heading">
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
                  <strong>Engineering, not decks.</strong>
                </p>
                <ul className="tile-inline-points scan-list">
                  <li>Depth on AWS, GCP, Kubernetes, and IaC</li>
                  <li>Direct work, no firm overhead</li>
                </ul>
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

          <section className="section trust home-flow home-flow--trust" aria-labelledby="trust-heading">
            <h2 id="trust-heading" className="section-title">
              Hands-on practice
            </h2>
            <p className="trust-operator">
              Built by someone who has operated these systems — not just advised on them.
            </p>
            <div className="testimonial">
              <ul className="trust-points scan-list">
                <li>For teams that want an operator, not a deck.</li>
                <li>Hands-on across AWS, GCP, Kubernetes, IaC, delivery, and light tooling.</li>
                <li>Clarity, ownership, outcomes that last.</li>
              </ul>
            </div>
            <p className="fine" style={{ marginTop: 'var(--space-28)', marginBottom: 0 }}>
              <Link href="/about">About</Link>
              {' '}
              — background and contact.
            </p>
          </section>

          <section
            className="section example-outcomes home-flow home-flow--outcomes"
            aria-labelledby="example-outcomes-heading"
          >
            <h2 id="example-outcomes-heading" className="section-title">
              What this looks like in practice
            </h2>
            <ul className="example-outcomes-list scan-list">
              <li>
                <strong className="key-em">Lower cloud spend</strong>—retire unused resources, fix
                misconfigurations
              </li>
              <li>CI/CD simplified; fewer failed deployments</li>
              <li>IaC standardized—shorter ramp-up, faster change</li>
              <li>Tighter runbooks and ownership—faster incident response</li>
            </ul>
          </section>

          <section className="section services-section home-flow home-flow--outcomes">
            <h2 className="section-title">Services</h2>
            <p className="note services-intro">I don’t just advise.</p>
            <p className="note services-intro">
              I work <span className="kw">directly</span> in your systems, with your team, to make{' '}
              <strong className="key-em">real improvements</strong>.
            </p>
            <div className="grid grid-2col">
              <Link href="/services/platform-health" className="tile">
                <h3>Platform Health Check</h3>
                <ul className="tile-inline-points scan-list">
                  <li>Surface bottlenecks, risk, and waste</li>
                  <li>Leave with a prioritized plan</li>
                </ul>
              </Link>
              <Link href="/services/finops" className="tile">
                <h3>FinOps</h3>
                <ul className="tile-inline-points scan-list">
                  <li>Cut spend</li>
                  <li>See where the money goes</li>
                </ul>
              </Link>
              <Link href="/services/iac" className="tile">
                <h3>IaC</h3>
                <ul className="tile-inline-points scan-list">
                  <li>Standardize infrastructure as code</li>
                  <li>Ship faster with less risk</li>
                </ul>
              </Link>
              <Link href="/services/cicd" className="tile">
                <h3>CI/CD</h3>
                <ul className="tile-inline-points scan-list">
                  <li>Simpler pipelines, fewer failures</li>
                  <li>Maintenance your team can sustain</li>
                </ul>
              </Link>
              <Link href="/services/custom-tooling" className="tile">
                <h3>Custom tooling</h3>
                <ul className="tile-inline-points scan-list">
                  <li>Small internal tools that remove toil</li>
                  <li>Built to fit your stack</li>
                </ul>
              </Link>
              <Link href="/agentic" className="tile">
                <h3>Agentic Development</h3>
                <ul className="tile-inline-points scan-list">
                  <li>Agent-assisted workflows for dev and ops</li>
                  <li>Where automation earns its place</li>
                </ul>
              </Link>
            </div>
            <p style={{ marginTop: 'var(--space-48)' }}>
              <Link className="btn" href="/services">All services</Link>
            </p>
          </section>

          <section className="section tools-section home-flow home-flow--outcomes">
            <h2 className="section-title">Tools</h2>
            <p className="note tools-intro">
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
            <p style={{ marginTop: 'var(--space-32)' }}>
              <a className="btn" href="/tools">All tools</a>
            </p>
          </section>

          <section
            className="section sounds-familiar home-flow home-flow--action"
            aria-labelledby="sounds-familiar-heading"
          >
            <h2 id="sounds-familiar-heading" className="section-title">
              If this sounds familiar
            </h2>
            <ul className="sounds-familiar-list scan-list">
              <li>Your infrastructure has grown messy over time</li>
              <li>Your pipelines feel slower or more fragile than they should</li>
              <li>Cloud costs keep rising without clear visibility</li>
              <li>Your team spends too much time managing systems instead of shipping</li>
            </ul>
            <p className="sounds-familiar-close">You’re exactly who this is for.</p>
          </section>

          <section
            className="section engagement-flow home-flow home-flow--action"
            aria-labelledby="how-it-works-heading"
          >
            <h2 id="how-it-works-heading" className="section-title">
              How it works
            </h2>
            <ol className="engagement-steps">
              <li className="engagement-step">
                <span className="engagement-step-index" aria-hidden="true">
                  1
                </span>
                <div className="engagement-step-body">
                  <p className="engagement-step-text">
                    <strong>Discovery call</strong> — understand the current setup, problems, and priorities.
                  </p>
                </div>
              </li>
              <li className="engagement-step">
                <span className="engagement-step-index" aria-hidden="true">
                  2
                </span>
                <div className="engagement-step-body">
                  <p className="engagement-step-text">
                    <strong>Focused engagement</strong> — time-boxed work on the highest-impact areas.
                  </p>
                </div>
              </li>
              <li className="engagement-step">
                <span className="engagement-step-index" aria-hidden="true">
                  3
                </span>
                <div className="engagement-step-body">
                  <p className="engagement-step-text">
                    <strong>Practical outcomes</strong> — clear improvements your team can own after the engagement.
                  </p>
                </div>
              </li>
            </ol>
            <p className="engagement-scope">
              Engagements are typically time-boxed and scoped around clear outcomes — from short assessments to
              focused implementation work.
            </p>
            <p className="engagement-speed">
              Most engagements focus on delivering meaningful improvements in weeks, not months.
            </p>
            <p className="engagement-ownership">
              The goal isn’t dependency — it’s leaving your team with systems they fully understand and can own.
            </p>
          </section>

          <section
            className="section closing-cta home-flow home-flow--finale"
            aria-labelledby="closing-cta-heading"
          >
            <p className="closing-cta-kicker">Next step</p>
            <h2 id="closing-cta-heading" className="closing-cta-title">
              Start with a short discovery call
            </h2>
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
