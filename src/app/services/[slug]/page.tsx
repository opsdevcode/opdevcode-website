import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import PageFrame from '@/components/PageFrame'
import { pageMeta } from '@/lib/seo'
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
  return pageMeta({
    title: s.title,
    description: s.description,
    path: `/services/${slug}`,
  })
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  if (!isServiceSlug(slug)) notFound()
  const s = servicesBySlug[slug]

  return (
    <PageFrame>
      <section className="section service-page">
        <p className="rail-label">Service</p>
        <h1 className="page-title">{s.title}</h1>
        <p className="lede">{s.lead}</p>
        {s.distinction ? <p className="note service-distinction">{s.distinction}</p> : null}
        <div className="product-page-grid">
          <div>
            <h2>What this addresses</h2>
            <p>{s.addresses}</p>
          </div>
          <div>
            <h2>Engagement shape</h2>
            <p>{s.engagement}</p>
          </div>
          <div>
            <h2>Work may include</h2>
            <ul className="bullets">
              {s.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>How this fits</h2>
            <p>
              Services support product adoption, architecture, and implementation. They are not the
              company identity. <Link href="/products">Products</Link> remain the primary story.
            </p>
          </div>
        </div>
        <p className="cta-row" style={{ marginTop: 'var(--space-32)' }}>
          <a className="btn primary" href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            Talk to OpsDevCode
          </a>
          <Link className="btn" href="/services">
            All services
          </Link>
          <Link className="btn" href="/products">
            Products
          </Link>
        </p>
      </section>
    </PageFrame>
  )
}
