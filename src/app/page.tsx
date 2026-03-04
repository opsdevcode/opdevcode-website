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
              <h1>Platform engineering that actually works.</h1>
              <p className="sub">
                I help teams fix AWS, GCP, and Kubernetes — health checks, cost cuts, Terraform cleanup, agentic dev. No corporate speak. From $1,200.
              </p>
              <div className="cta">
                <a className="btn primary" href="https://calendly.com/eric-opsdevco/30min" target="_blank" rel="noopener noreferrer">Book a call</a>
                <a className="btn" href="/about#contact">Email</a>
              </div>
            </div>
          </section>

          <section className="section">
            <h2 className="section-title">Services</h2>
            <ul className="service-list">
              <li>
                <a href="/services#platform-health">Platform Health Check</a>
                <p>Straight-up report on your AWS, GCP, EKS, Terraform — what&apos;s working, what&apos;s not, what to fix first.</p>
              </li>
              <li>
                <a href="/services">Cost + Scaling</a>
                <p>Track down what&apos;s driving your bill. Compute waste, node strategy, autoscaling.</p>
              </li>
              <li>
                <a href="/services">Terraform Cleanup</a>
                <p>Refactor IaC for maintainability — clearer structure, safer workflows.</p>
              </li>
              <li>
                <a href="/agentic">Agentic Development</a>
                <p>Adopt Cursor, Copilot, custom tooling — ship faster without the chaos.</p>
              </li>
            </ul>
            <p style={{ marginTop: 'var(--space-24)' }}>
              <a className="btn" href="/services">All services</a>
              <a className="btn" href="/pricing" style={{ marginLeft: 'var(--space-8)' }}>Pricing</a>
            </p>
          </section>

          <Footer />
        </div>
      </main>
    </>
  )
}
