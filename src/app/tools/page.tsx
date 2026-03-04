import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const tools = [
  { name: 'term-dx', url: 'https://github.com/opsdevcode/term-dx', desc: 'Diagnose Kubernetes resources stuck in Terminating (finalizers, dependents, API services).' },
  { name: 'knode', url: 'https://github.com/opsdevcode/knode', desc: 'List and cordon/drain EKS nodes from the command line.' },
  { name: 'atx', url: 'https://github.com/opsdevcode/atx', desc: 'Atmos Terraform shortcuts (plan, apply, deploy, destroy) with fzf selection.' },
  { name: 'eks-addons', url: 'https://github.com/opsdevcode/eks-addons', desc: 'Manage EKS add-ons from the CLI.' },
  { name: 'shownodes', url: 'https://github.com/opsdevcode/shownodes', desc: 'Improved node display with instance attributes and pricing.' },
  { name: 'kubesnooze', url: 'https://github.com/opsdevcode/kubesnooze', desc: 'Snooze/sleep workloads and show a splash page.' },
]

export const metadata: Metadata = {
  title: 'Tools',
  description: 'Open-source CLI tools for AWS, Kubernetes, and Terraform. term-dx, knode, atx, eks-addons, shownodes, kubesnooze.',
}

export default function ToolsPage() {
  return (
    <>
      <Header active="Tools" />
      <main id="main">
        <div className="wrap">
          <section className="section">
            <h2 className="section-title">Tools</h2>
            <p className="note" style={{ marginBottom: 'var(--space-20)' }}>
              Open-source CLI tools for AWS, Kubernetes, and Terraform. Free to use.
            </p>
            <div className="grid grid-2col">
              {tools.map((t) => (
                <a key={t.name} href={t.url} target="_blank" rel="noopener noreferrer" className="tile">
                  <h3 style={{ color: 'var(--color-primary)' }}>{t.name}</h3>
                  <p>{t.desc}</p>
                </a>
              ))}
            </div>
          </section>
          <p style={{ marginTop: 'var(--space-32)' }}>
            <a className="btn primary" href="https://calendly.com/eric-opsdevco/30min" target="_blank" rel="noopener noreferrer">Book a call</a>
          </p>
          <Footer />
        </div>
      </main>
    </>
  )
}
