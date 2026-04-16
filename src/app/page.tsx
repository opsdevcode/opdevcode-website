import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { IconActivity, IconLayers, IconServer, IconTool, IconUsers } from '@/components/home/HomeIcons'

const homeDescription =
  'Platform engineering for production: AWS, GCP, Kubernetes, IaC. Tighten operations, cut waste, ship platforms your team owns. One senior lead—not a consulting roster.'

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
                Hands-on <span className="anchor-soft">AWS, GCP, Kubernetes</span>, and IaC—in your environment.
              </p>
              <p className="hero-fit">
                If <span className="anchor-soft">operating the platform</span> competes with shipping product, this is
                for you.
              </p>
              <ul className="hero-sub-points scan-list">
                <li>Less waste, clearer operations</li>
                <li>Systems your team can run without a long-term dependency</li>
              </ul>
              <p className="hero-diff">
                <span className="key-em">No slides.</span> No fluff.{' '}
                <span className="key-em">Just working systems.</span>
              </p>
              <p className="hero-anti-consulting">
                This isn’t <span className="anchor-soft">traditional consulting</span> — no large teams, no bloated
                engagements, no unnecessary layers.
              </p>
              <p className="hero-anti-consulting-follow">
                <span className="anchor-soft">Hands-on work in your stack</span>—no bench, no extra layers.
              </p>
              <div className="cta">
                <a className="btn primary" href="https://calendly.com/eric-opsdevco/30min" target="_blank" rel="noopener noreferrer">Book a discovery call</a>
                <a className="btn" href="/about#contact">Email me directly</a>
              </div>
              <p className="hero-reassure">One call to align scope and fit.</p>
              <p className="hero-cred">Solo practice.</p>
              <p className="hero-cred">Senior platform work: AWS, GCP, Kubernetes, IaC, delivery.</p>
            </div>
          </section>

          <section
            className="section primary-problem home-flow home-flow--clarity"
            aria-labelledby="primary-problem-heading"
          >
            <h2 id="primary-problem-heading" className="section-title">
              Most teams don’t have a DevOps problem — they have a{' '}
              <span className="anchor-soft">complexity problem</span>.
            </h2>
            <ul className="primary-problem-points scan-list">
              <li>
                Tool sprawl, unclear ownership, <span className="anchor-soft">rising cloud spend</span>, and delivery
                drag.
              </li>
              <li>
                Platform work should <span className="anchor-soft">cut complexity</span>—not add headcount or
                tooling theater.
              </li>
            </ul>
          </section>

          <section
            className="section sounds-familiar home-flow home-flow--clarity"
            aria-labelledby="sounds-familiar-heading"
          >
            <h2 id="sounds-familiar-heading" className="section-title">
              If this sounds familiar
            </h2>
            <ul className="sounds-familiar-list scan-list">
              <li>
                Infrastructure <span className="anchor-soft">drifted into sprawl</span>—ownership is fuzzy
              </li>
              <li>
                CI/CD is <span className="anchor-soft">slow or brittle</span> when you need it predictable
              </li>
              <li>
                Cloud spend <span className="anchor-soft">climbs</span> without attributable line items
              </li>
              <li>
                Engineering time goes to <span className="anchor-soft">keeping the lights on</span>, not shipping
              </li>
            </ul>
          </section>

          <section className="section audience home-flow home-flow--clarity" aria-labelledby="who-for-heading">
            <h2 id="who-for-heading" className="section-title">
              Who this is for
            </h2>
            <div className="grid grid-2col">
              <div className="tile tile--with-icon">
                <span className="home-icon" aria-hidden="true">
                  <IconLayers />
                </span>
                <p>
                  <strong>AWS, GCP, or Kubernetes</strong> estates where run cost outweighs the leverage you get from
                  the platform.
                </p>
              </div>
              <div className="tile tile--with-icon">
                <span className="home-icon" aria-hidden="true">
                  <IconUsers />
                </span>
                <p>
                  <strong>Engineering leaders</strong> who need depth without a consulting bench or account team.
                </p>
              </div>
              <div className="tile tile--with-icon">
                <span className="home-icon" aria-hidden="true">
                  <IconActivity />
                </span>
                <p>
                  Teams <strong>constrained by delivery</strong>, opaque infrastructure, or runaway cloud spend.
                </p>
              </div>
            </div>
          </section>

          <section
            className="section point-of-view home-flow home-flow--clarity"
            aria-labelledby="point-of-view-heading"
          >
            <h2 id="point-of-view-heading" className="section-title">
              Point of view
            </h2>
            <ul className="point-of-view-points scan-list">
              <li>
                Too much DevOps work optimizes for <span className="kw">tools</span> instead of{' '}
                <span className="kw">outcomes</span>.
              </li>
              <li>
                I <strong className="key-em">cut complexity</strong>, make tradeoffs explicit, and ship systems your
                team can run.
              </li>
              <li>Nothing that only reads well on a <span className="kw">diagram</span>.</li>
            </ul>
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
                  <li>
                    <span className="anchor-soft">Messy</span> infrastructure and unclear ownership
                  </li>
                  <li>
                    <span className="anchor-soft">Slow</span> or fragile CI/CD pipelines
                  </li>
                  <li>
                    <span className="anchor-soft">Rising</span> cloud costs with poor visibility
                  </li>
                </ul>
              </div>
              <div className="before-after-panel is-after">
                <h3 className="before-after-label">After</h3>
                <ul className="before-after-list scan-list">
                  <li>
                    <span className="anchor-soft">Clear</span> systems your team can own and change
                  </li>
                  <li>
                    <span className="anchor-soft">Faster</span>, more reliable delivery
                  </li>
                  <li>
                    <span className="anchor-soft">Better</span> cost visibility and less operational friction
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="section trust home-flow home-flow--trust" aria-labelledby="trust-heading">
            <h2 id="trust-heading" className="section-title">
              Hands-on practice
            </h2>
            <p className="trust-operator">
              <span className="home-icon" aria-hidden="true">
                <IconServer />
              </span>
              <span>
                Built by someone who has <span className="anchor-soft">run this in production</span>—not briefed it
                in slides.
              </span>
            </p>
            <div className="testimonial">
              <ul className="trust-points scan-list">
                <li>Operator-first: ship changes, not slide reviews.</li>
                <li>AWS, GCP, Kubernetes, IaC, delivery, light tooling—hands-on.</li>
                <li>Clear ownership; outcomes that survive after the engagement.</li>
              </ul>
            </div>
            <p className="fine trust-about-link">
              <Link href="/about">About</Link>
              {' '}
              — background and how to reach me.
            </p>
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
                  <strong>Advise, pair, or ship code</strong>—scope follows the problem.
                </p>
              </div>
              <div className="tile">
                <p>
                  <strong>Systems your team still runs</strong> when the engagement ends.
                </p>
              </div>
            </div>
          </section>

          <section className="section services-section home-flow home-flow--outcomes">
            <h2 className="section-title">Services</h2>
            <ul className="services-lede scan-list">
              <li>Not advisory-only.</li>
              <li>
                Work happens <span className="kw">in your repos and clusters</span>, beside your engineers.
              </li>
              <li>
                Outcomes you can <strong className="key-em">measure and own</strong>.
              </li>
            </ul>
            <div className="grid grid-2col">
              <Link href="/services/platform-health" className="tile">
                <h3>Platform Health Check</h3>
                <p>Find bottlenecks, risk, and avoidable complexity—then prioritize what to fix first.</p>
                <p className="tile-desc-follow">A concrete remediation path, not a generic report.</p>
              </Link>
              <Link href="/services/finops" className="tile">
                <h3>FinOps</h3>
                <p>Cut waste and get spend attributable to teams, services, and resources.</p>
              </Link>
              <Link href="/services/iac" className="tile">
                <h3>IaC</h3>
                <p>Standardize IaC so changes are reviewable, repeatable, and safer to ship.</p>
              </Link>
              <Link href="/services/cicd" className="tile">
                <h3>CI/CD</h3>
                <p>Faster, more reliable delivery through pipelines your team can maintain.</p>
              </Link>
              <Link href="/services/custom-tooling" className="tile">
                <h3>Custom tooling</h3>
                <p>Small internal tools that remove toil—automation where it earns its keep.</p>
              </Link>
              <Link href="/agentic" className="tile">
                <h3>Agentic Development</h3>
                <p>Agent-assisted workflows where they reduce error and cycle time.</p>
                <p className="tile-desc-follow">Measured adoption—not novelty for its own sake.</p>
              </Link>
            </div>
            <p className="services-cta-link">
              <Link className="btn" href="/services">All services</Link>
            </p>
          </section>

          <section
            className="section example-outcomes home-flow home-flow--outcomes"
            aria-labelledby="example-outcomes-heading"
          >
            <h2 id="example-outcomes-heading" className="section-title">
              Outcomes in practice
            </h2>
            <ul className="example-outcomes-list scan-list">
              <li>
                <span className="anchor-soft">Cut</span> cloud spend by removing waste and misconfiguration—not blanket
                downsizing
              </li>
              <li>
                <span className="anchor-soft">Hardened</span> delivery pipelines; fewer failed deploys and rollbacks
              </li>
              <li>
                <span className="anchor-soft">Aligned</span> IaC with how teams own and change infrastructure
              </li>
              <li>
                <span className="anchor-soft">Shipped</span> small tools that removed recurring operational toil
              </li>
            </ul>
          </section>

          <section className="section tools-section home-flow home-flow--outcomes">
            <h2 className="section-title">Tools</h2>
            <p className="note tools-intro">
              <span className="home-icon" aria-hidden="true">
                <IconTool />
              </span>
              <span>
                Open-source utilities for sharp edges in{' '}
                <span className="anchor-soft">AWS, Kubernetes, and Terraform</span>—nothing ceremonial.
              </span>
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
            <p className="tools-cta-link">
              <a className="btn" href="/tools">All tools</a>
            </p>
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
                    <strong>Discovery call</strong>
                    <span className="engagement-step-line">Current state, constraints, and priority order.</span>
                  </p>
                </div>
              </li>
              <li className="engagement-step">
                <span className="engagement-step-index" aria-hidden="true">
                  2
                </span>
                <div className="engagement-step-body">
                  <p className="engagement-step-text">
                    <strong>Focused engagement</strong>
                    <span className="engagement-step-line">
                      Time-boxed work on the highest-leverage gap—not a roadmap science project.
                    </span>
                  </p>
                </div>
              </li>
              <li className="engagement-step">
                <span className="engagement-step-index" aria-hidden="true">
                  3
                </span>
                <div className="engagement-step-body">
                  <p className="engagement-step-text">
                    <strong>Practical outcomes</strong>
                    <span className="engagement-step-line">Changes your team can run—without a standing retainer.</span>
                  </p>
                </div>
              </li>
            </ol>
            <ul className="engagement-follow scan-list" aria-label="How engagements are structured">
              <li>Fixed scope; outcomes defined up front.</li>
              <li>From a short assessment to focused implementation—your call.</li>
              <li>Meaningful movement in weeks, not quarters.</li>
              <li>No dependency model: systems your team can operate and explain.</li>
            </ul>
          </section>

          <section
            className="section closing-cta home-flow home-flow--finale"
            aria-labelledby="closing-cta-heading"
          >
            <p className="closing-cta-kicker">When you&apos;re ready</p>
            <h2 id="closing-cta-heading" className="closing-cta-title">
              Book a 30-minute discovery call
            </h2>
            <div className="cta">
              <a className="btn primary" href="https://calendly.com/eric-opsdevco/30min" target="_blank" rel="noopener noreferrer">Book a discovery call</a>
              <a className="btn" href="/about#contact">Email me directly</a>
            </div>
            <p className="closing-cta-support">
              Low stakes: confirm fit, scope, and whether working together is worth a follow-up.
            </p>
          </section>

          <Footer />
        </div>
      </main>
    </>
  )
}
