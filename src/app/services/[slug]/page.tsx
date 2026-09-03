import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageFrame from '@/components/PageFrame'
import { CALENDLY_URL } from '@/lib/site'
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
    <PageFrame>
      <section className="section">
        <h1 className="page-title">{s.title}</h1>
        <p className="note" style={{ marginBottom: 'var(--space-16)' }}>
          {s.lead}
        </p>
        <div className="split">
          <div className="tile">
            <h2>Scope</h2>
            <ul className="bullets">
              {s.bulletsLeft.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="tile">
            <h2>{s.rightTitle}</h2>
            <p>{s.rightBody}</p>
          </div>
        </div>
        <p className="cta-row" style={{ marginTop: 'var(--space-32)' }}>
          <a className="btn primary" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            Talk to OpsDevCode
          </a>
          <Link className="btn" href="/services">
            All services
          </Link>
        </p>
      </section>
    </PageFrame>
  )
}
