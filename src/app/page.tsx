import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'OpsDevCode | Platform Engineering Advisory',
  description: 'Platform engineering advisory. AWS, GCP, EKS, Kubernetes, Terraform, CI/CD, custom tooling, agentic development. Health checks, FinOps, IaC cleanup.',
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'OpsDevCode',
  description: 'Platform engineering advisory. AWS, GCP, EKS, Kubernetes, Terraform, agentic development.',
  url: 'https://opsdevco.de',
  email: 'eric@opsdevco.de',
  areaServed: 'Worldwide',
  serviceType: ['Platform Engineering', 'Cloud Infrastructure', 'FinOps', 'AWS', 'GCP', 'DevOps', 'Kubernetes', 'Terraform', 'CI/CD', 'Custom tooling'],
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
              <h1>Platform engineering<br /><span className="highlight">that actually works.</span></h1>
              <p className="sub">
                Health checks, FinOps, Terraform cleanup, agentic dev. AWS, GCP, Kubernetes. No corporate speak. Time-boxed engagements.
              </p>
              <div className="cta">
                <a className="btn primary" href="https://calendly.com/eric-opsdevco/30min" target="_blank" rel="noopener noreferrer">Book a call</a>
                <a className="btn" href="/about#contact">Email me</a>
              </div>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Services</h2>
            <div className="grid grid-2col">
              <Link href="/services/platform-health" className="tile">
                <h3>Platform Health Check</h3>
                <p>Your AWS, GCP, EKS, Terraform — what&apos;s working, what&apos;s not, what to fix first.</p>
              </Link>
              <Link href="/services/finops" className="tile">
                <h3>FinOps</h3>
                <p>Cloud spend visibility, allocation, and engineering changes that actually move the number.</p>
              </Link>
              <Link href="/services/terraform" className="tile">
                <h3>Terraform Cleanup</h3>
                <p>Refactor IaC for maintainability — clearer structure, safer workflows.</p>
              </Link>
              <Link href="/services/cicd" className="tile">
                <h3>CI/CD</h3>
                <p>New to pipeline automation or need a revamp — delivery that runs smoothly and safely.</p>
              </Link>
              <Link href="/services/custom-tooling" className="tile">
                <h3>Custom tooling</h3>
                <p>Need custom automation or small tools — I can assist, pair with your team, or build them for you.</p>
              </Link>
              <Link href="/agentic" className="tile">
                <h3>Agentic Development</h3>
                <p>Adopt Cursor, Copilot, custom tooling — ship faster without the chaos.</p>
              </Link>
            </div>
            <p style={{ marginTop: 'var(--space-32)' }}>
              <Link className="btn" href="/services">All services</Link>
            </p>
          </section>

          <section className="section">
            <h2 className="section-title">Tools</h2>
            <p className="note" style={{ marginBottom: 'var(--space-16)' }}>
              Open-source CLI tools for AWS, Kubernetes, and Terraform.
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

          <Footer />
        </div>
      </main>
    </>
  )
}
