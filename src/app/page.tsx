import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'OpsDevCo | Platform Engineering Advisory',
  description: 'Platform engineering advisory. AWS, GCP, EKS, Terraform, Karpenter, agentic development. Health checks, cost optimization, IaC cleanup.',
}

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'OpsDevCo',
  description: 'Platform engineering advisory. AWS, GCP, EKS, Terraform, Karpenter, agentic development.',
  url: 'https://opsdevco.de',
  email: 'eric@opsdevco.de',
  areaServed: 'Worldwide',
  serviceType: ['Platform Engineering', 'Cloud Infrastructure', 'AWS', 'GCP', 'DevOps', 'Kubernetes', 'Terraform'],
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
              <p className="prompt">$ opsdevco --help</p>
              <h1>Platform engineering<br /><span className="highlight">that actually works.</span></h1>
              <p className="sub">
                Health checks, cost cuts, Terraform cleanup, agentic dev. AWS, GCP, Kubernetes. No corporate speak. From $1,200.
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
              <a href="/services#platform-health" className="tile">
                <h3>Platform Health Check</h3>
                <p>Your AWS, GCP, EKS, Terraform — what&apos;s working, what&apos;s not, what to fix first.</p>
              </a>
              <a href="/services" className="tile">
                <h3>Cost + Scaling</h3>
                <p>Track down what&apos;s driving your bill. Compute waste, node strategy, autoscaling.</p>
              </a>
              <a href="/services" className="tile">
                <h3>Terraform Cleanup</h3>
                <p>Refactor IaC for maintainability — clearer structure, safer workflows.</p>
              </a>
              <a href="/agentic" className="tile">
                <h3>Agentic Development</h3>
                <p>Adopt Cursor, Copilot, custom tooling — ship faster without the chaos.</p>
              </a>
            </div>
            <p style={{ marginTop: 'var(--space-32)' }}>
              <a className="btn" href="/services">All services</a>
              <a className="btn" href="/pricing" style={{ marginLeft: 'var(--space-12)' }}>Pricing</a>
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
