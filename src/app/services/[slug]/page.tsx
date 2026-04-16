import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { isServiceSlug, serviceSlugs, servicesBySlug } from '@/lib/services-detail'

export const dynamic = 'force-static'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  if (!isServiceSlug(slug)) return { title: 'Service' }
  const s = servicesBySlug[slug]
  return {
    title: s.title,
    description: s.description,
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  if (!isServiceSlug(slug)) notFound()
  const s = servicesBySlug[slug]

  return (
    <>
      <Header active="Services" />
      <main id="main">
        <div className="wrap">
          <section className="section">
            <h2 className="section-title">{s.title}</h2>
            <p className="note" style={{ marginBottom: 'var(--space-16)' }}>
              {s.lead}
            </p>
            <div className="split">
              <div className="tile">
                <h3>What I help with</h3>
                <ul className="bullets">
                  {s.bulletsLeft.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="tile">
                <h3>{s.rightTitle}</h3>
                <p>{s.rightBody}</p>
              </div>
            </div>
            <p style={{ marginTop: 'var(--space-32)' }}>
              <a className="btn primary" href="https://calendly.com/eric-opsdevco/30min" target="_blank" rel="noopener noreferrer">
                Book a discovery call
              </a>
              <Link className="btn" href="/services" style={{ marginLeft: 'var(--space-12)' }}>
                All services
              </Link>
            </p>
          </section>
          <Footer />
        </div>
      </main>
    </>
  )
}
