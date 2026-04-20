import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'

const shareTitle =
  'OpsDevCode — Fix your cloud & Kubernetes platform before it breaks at scale'
const shareDescription =
  'I help teams stabilize infrastructure, fix scaling issues, and reduce cloud waste across AWS, GCP, and Kubernetes — managed or self-hosted.'

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
        alt: 'OpsDevCode — Fix your cloud & Kubernetes platform before it breaks at scale',
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
                Fix your cloud &amp; Kubernetes platform
                <br />
                <span className="highlight">before it breaks at scale.</span>
              </h1>
              <p className="sub">
                I help teams stabilize infrastructure, fix scaling issues, and reduce cloud
                waste across <span className="anchor-soft">AWS, GCP, and Kubernetes</span>{' '}
                — managed or self-hosted.
              </p>
              <p className="hero-fit">
                Experience across production environments in AWS and GCP.
              </p>
              <div className="cta">
                <a
                  className="btn primary"
                  href="https://calendly.com/eric-opsdevco/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Platform Audit
                </a>
              </div>
            </div>
          </section>

          <section
            className="section sounds-familiar home-flow home-flow--clarity home-flow--recognition"
            aria-labelledby="sounds-familiar-heading"
          >
            <h2 id="sounds-familiar-heading" className="section-title">
              <span className="section-title-text">Where platforms start to fail</span>
            </h2>
            <p className="note" style={{ marginBottom: 'var(--space-16)' }}>
              If you&apos;re running cloud or Kubernetes in production, you&apos;ve
              probably seen this:
            </p>
            <ul className="sounds-familiar-list scan-list">
              <li>Scaling works… until it doesn&apos;t</li>
              <li>Costs grow faster than usage</li>
              <li>CI/CD slows down delivery</li>
              <li>Infrastructure feels fragile under real load</li>
            </ul>
            <p className="note" style={{ marginTop: 'var(--space-20)' }}>
              These aren&apos;t theoretical problems — they show up in production.
            </p>
          </section>

          <section
            className="section audience home-flow home-flow--clarity home-flow--interlude"
            aria-labelledby="what-i-work-on-heading"
          >
            <h2 id="what-i-work-on-heading" className="section-title">
              <span className="section-title-text">What I work on</span>
            </h2>
            <p className="note" style={{ marginBottom: 'var(--space-16)' }}>
              I work directly on production systems:
            </p>
            <ul className="scan-list">
              <li>Cloud architecture (AWS &amp; GCP)</li>
              <li>Kubernetes (managed and self-hosted)</li>
              <li>Infrastructure as Code (Terraform, Pulumi, Crossplane)</li>
              <li>CI/CD pipeline design and optimization</li>
              <li>GitOps and deployment workflows</li>
              <li>Scaling and cost optimization</li>
              <li>AI-assisted engineering workflows and agentic tooling to improve developer velocity</li>
            </ul>
          </section>

          <section className="section services-section home-flow home-flow--outcomes">
            <h2 className="section-title">
              <span className="section-title-text">How I can help</span>
            </h2>
            <div className="grid grid-2col">
              <Link href="/services#audit" className="tile">
                <h3>Platform Audit</h3>
                <p className="tile-tagline">Find what&apos;s broken, fragile, or overpriced.</p>
                <p>
                  A fast, focused review of your cloud and Kubernetes setup to identify
                  what&apos;s broken, fragile, or costing too much.
                </p>
              </Link>
              <Link href="/services#build-fix" className="tile">
                <h3>Platform Build / Fix</h3>
                <p className="tile-tagline">Stabilize and simplify your platform so it scales reliably.</p>
                <p>
                  I design, rebuild, or stabilize your platform so it behaves predictably
                  under real-world load and doesn&apos;t break when you scale. This includes
                  infrastructure as code, CI/CD pipelines, and deployment workflows that
                  remove manual steps and improve reliability.
                </p>
              </Link>
              <Link href="/services#advisory" className="tile">
                <h3>Advisory</h3>
                <p className="tile-tagline">Get senior platform guidance without adding headcount.</p>
                <p>
                  Ongoing support to help you make the right platform decisions as you
                  scale.
                </p>
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
                  Kubernetes, CI/CD, and IaC.
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
              <li>Stabilized Kubernetes platforms that scale predictably.</li>
              <li>Cut cloud spend by removing waste, not by blanket downsizing.</li>
              <li>Hardened delivery pipelines — fewer failed deploys, faster recovery.</li>
              <li>Unblocked architecture decisions that were stalling the team.</li>
            </ul>
          </section>

          <section
            className="section closing-cta home-flow home-flow--finale"
            aria-labelledby="closing-cta-heading"
          >
            <p className="closing-cta-kicker">Next step</p>
            <h2 id="closing-cta-heading" className="closing-cta-title">
              Book a Platform Audit
            </h2>
            <p className="closing-cta-lead">
              If something in your platform feels off — scaling, cost, or reliability —
              it usually gets worse as you grow. This is the fastest way to get clarity
              on what to fix.
            </p>
            <p className="closing-cta-support">
              Not sure if this is a fit? We can figure that out quickly on a short call.
            </p>
            <div className="cta">
              <a
                className="btn primary"
                href="https://calendly.com/eric-opsdevco/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Platform Audit
              </a>
            </div>
          </section>

          <Footer />
        </div>
      </main>
      <Reveal />
    </>
  )
}
