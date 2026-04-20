import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import { IconActivity, IconLayers, IconUsers } from '@/components/home/HomeIcons'

const shareTitle =
  'OpsDevCode — Cloud & Kubernetes platform engineering for AWS and GCP'
const shareDescription =
  'I help teams build, stabilize, and improve cloud and Kubernetes platforms across AWS and GCP — managed or self-hosted — so they can scale without fragile infrastructure, slow delivery, or runaway cloud costs.'

const socialPreviewImage = '/assets/preview-v4.png?v=4'

export const metadata: Metadata = {
  title: { absolute: 'OpsDevCode' },
  description: shareDescription,
  openGraph: {
    title: shareTitle,
    description: shareDescription,
    url: 'https://opsdevco.de/',
    type: 'website',
    images: [
      {
        url: socialPreviewImage,
        width: 1200,
        height: 630,
        alt: 'OpsDevCode — Cloud and Kubernetes platform engineering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: shareTitle,
    description: shareDescription,
    images: [socialPreviewImage],
  },
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'OpsDevCode',
  description: shareDescription,
  url: 'https://opsdevco.de',
  email: 'eric@opsdevco.de',
  areaServed: 'Worldwide',
  serviceType: [
    'Platform Engineering',
    'Kubernetes',
    'AWS',
    'GCP',
    'Cloud Infrastructure',
    'CI/CD',
    'GitOps',
    'Infrastructure as Code',
    'Reliability',
    'FinOps',
  ],
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
              <h1>
                Cloud and Kubernetes
                <br />
                <span className="highlight">platform engineering.</span>
              </h1>
              <p className="sub">
                I help teams build, stabilize, and improve{' '}
                <span className="anchor-soft">cloud and Kubernetes platforms</span> across{' '}
                <span className="anchor-soft">AWS and GCP</span> — managed or self-hosted —
                so they can scale reliably without fragile infrastructure, slow delivery, or
                runaway cloud costs.
              </p>
              <p className="hero-fit">
                For teams already running cloud and Kubernetes that have hit{' '}
                <span className="anchor-soft">reliability, scaling, delivery, or cost</span>{' '}
                problems the team shouldn&apos;t be solving alone.
              </p>
              <div className="cta">
                <a
                  className="btn primary"
                  href="https://calendly.com/eric-opsdevco/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a discovery call
                </a>
                <a className="btn" href="/about#contact">
                  Email me directly
                </a>
              </div>
              <p className="hero-reassure">
                30 minutes. Scope and fit — no pitch.
              </p>
              <p className="hero-cred">
                Solo practice. Hands-on work in your stack — no account team, no bench.
              </p>
            </div>
          </section>

          <section
            className="section sounds-familiar home-flow home-flow--clarity home-flow--recognition"
            aria-labelledby="sounds-familiar-heading"
          >
            <h2 id="sounds-familiar-heading" className="section-title">
              <span className="section-title-text">If this sounds familiar</span>
            </h2>
            <ul className="sounds-familiar-list scan-list">
              <li>
                Your cloud platform has{' '}
                <span className="anchor-soft">drifted into sprawl</span> — ownership is
                unclear and changes feel risky.
              </li>
              <li>
                <span className="anchor-soft">Kubernetes</span> is running, but upgrades,
                scaling, and day-two operations feel fragile.
              </li>
              <li>
                <span className="anchor-soft">CI/CD is slow or brittle</span> when you need
                delivery to be predictable.
              </li>
              <li>
                Cloud spend <span className="anchor-soft">keeps climbing</span> without
                clear attribution.
              </li>
              <li>
                Engineering time goes to{' '}
                <span className="anchor-soft">keeping the lights on</span>, not shipping.
              </li>
            </ul>
          </section>

          <section
            className="section audience home-flow home-flow--clarity home-flow--interlude"
            aria-labelledby="who-for-heading"
          >
            <h2 id="who-for-heading" className="section-title">
              <span className="section-title-text">Who this is for</span>
            </h2>
            <div className="grid grid-2col">
              <div className="tile tile--with-icon">
                <span className="home-icon" aria-hidden="true">
                  <IconLayers />
                </span>
                <p>
                  <strong>Startups and scale-ups</strong> running production workloads on
                  AWS or GCP — sometimes both.
                </p>
              </div>
              <div className="tile tile--with-icon">
                <span className="home-icon" aria-hidden="true">
                  <IconActivity />
                </span>
                <p>
                  <strong>Engineering-led teams</strong> operating Kubernetes — managed
                  (EKS, GKE) or self-hosted.
                </p>
              </div>
              <div className="tile tile--with-icon">
                <span className="home-icon" aria-hidden="true">
                  <IconUsers />
                </span>
                <p>
                  Teams where <strong>reliability, scaling, CI/CD, or cost</strong> has
                  become the bottleneck — not a roadmap science project.
                </p>
              </div>
            </div>
          </section>

          <section className="section services-section home-flow home-flow--outcomes">
            <h2 className="section-title">
              <span className="section-title-text">How I can help</span>
            </h2>
            <ul className="services-lede scan-list">
              <li>Three clear ways to work together.</li>
              <li>
                Scoped, time-boxed engagements — no retainer required, no bench to feed.
              </li>
              <li>
                Work happens <span className="kw">in your repos and clusters</span>, beside
                your engineers.
              </li>
            </ul>
            <div className="grid grid-2col">
              <Link href="/services#audit" className="tile">
                <h3>Platform Audit</h3>
                <p>
                  A focused review of your cloud architecture, Kubernetes, CI/CD, and
                  infrastructure workflow. You get prioritized findings on reliability,
                  scaling, and cost — with a concrete path to fix them.
                </p>
                <p className="tile-desc-follow">
                  Architecture · Kubernetes · CI/CD · Cost · Reliability
                </p>
              </Link>
              <Link href="/services#build-fix" className="tile">
                <h3>Platform Build / Fix</h3>
                <p>
                  Hands-on cloud and Kubernetes work across AWS and GCP — managed or
                  self-hosted. CI/CD and GitOps improvements, infrastructure automation,
                  and reliability and scaling remediation.
                </p>
                <p className="tile-desc-follow">
                  Cloud · Kubernetes · GitOps · IaC · Reliability
                </p>
              </Link>
              <Link href="/services#advisory" className="tile">
                <h3>Advisory</h3>
                <p>
                  Ongoing platform guidance, architecture support, and technical direction —
                  without a full-time hire. Useful when the call you need to make is harder
                  than the work itself.
                </p>
                <p className="tile-desc-follow">
                  Architecture review · Direction · Troubleshooting
                </p>
              </Link>
              <Link href="/services" className="tile">
                <h3>Capabilities</h3>
                <p>
                  Specific areas I work in across the three offers above — FinOps, IaC,
                  CI/CD, Kubernetes, architecture review, custom tooling, and more.
                </p>
                <p className="tile-desc-follow">See all capabilities →</p>
              </Link>
            </div>
          </section>

          <section
            className="section how-work home-flow home-flow--clarity home-flow--interlude"
            aria-labelledby="how-work-heading"
          >
            <h2 id="how-work-heading" className="section-title">
              <span className="section-title-text">How I work</span>
            </h2>
            <div className="grid grid-2col">
              <div className="tile">
                <p>
                  <strong>Fixed scope, clear outcomes.</strong> Time-boxed engagements with
                  a defined result — not an open-ended retainer.
                </p>
              </div>
              <div className="tile">
                <p>
                  <strong>In your stack.</strong> I work in your repos, clusters, and cloud
                  accounts — not from the outside.
                </p>
              </div>
              <div className="tile">
                <p>
                  <strong>Senior, direct, hands-on.</strong> Depth across AWS, GCP,
                  Kubernetes, CI/CD, and IaC — no junior pass-through.
                </p>
              </div>
              <div className="tile">
                <p>
                  <strong>Systems your team can run.</strong> The goal is a platform they
                  fully understand after I leave — not a dependency.
                </p>
              </div>
            </div>
          </section>

          <section
            className="section example-outcomes home-flow home-flow--outcomes"
            aria-labelledby="example-outcomes-heading"
          >
            <h2 id="example-outcomes-heading" className="section-title">
              <span className="section-title-text">Outcomes in practice</span>
            </h2>
            <ul className="example-outcomes-list scan-list">
              <li>
                <span className="anchor-soft">Stabilized</span> Kubernetes platforms with
                predictable upgrades, scaling, and day-two operations.
              </li>
              <li>
                <span className="anchor-soft">Cut</span> cloud spend by removing waste and
                misconfiguration — not blanket downsizing.
              </li>
              <li>
                <span className="anchor-soft">Hardened</span> delivery pipelines; fewer
                failed deploys, faster recovery, less rollback pain.
              </li>
              <li>
                <span className="anchor-soft">Aligned</span> IaC and GitOps with how teams
                actually own and change infrastructure.
              </li>
              <li>
                <span className="anchor-soft">Unblocked</span> architecture decisions that
                were stalling because no one had the context to call them.
              </li>
            </ul>
          </section>

          <section
            className="section closing-cta home-flow home-flow--finale"
            aria-labelledby="closing-cta-heading"
          >
            <p className="closing-cta-kicker">Next step</p>
            <p className="closing-cta-lead">
              If those are the outcomes you&apos;re looking for, it&apos;s worth a
              conversation.
            </p>
            <h2 id="closing-cta-heading" className="closing-cta-title">
              Book a discovery call
            </h2>
            <ul className="closing-cta-signals scan-list" aria-label="What to expect">
              <li>30 minutes. Scope and fit — no pitch.</li>
              <li>
                If an audit or engagement makes sense, we&apos;ll agree on scope up front.
              </li>
              <li>If it&apos;s not a fit, I&apos;ll say so.</li>
            </ul>
            <div className="cta">
              <a
                className="btn primary"
                href="https://calendly.com/eric-opsdevco/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a discovery call
              </a>
              <a className="btn" href="/about#contact">
                Email me directly
              </a>
            </div>
            <p className="closing-cta-support">
              Prefer email?{' '}
              <a href="mailto:eric@opsdevco.de">eric@opsdevco.de</a> — a few lines on what
              you&apos;re running and what&apos;s hurting is plenty.
            </p>
          </section>

          <Footer />
        </div>
      </main>
      <Reveal />
    </>
  )
}
