import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PageFrame from '@/components/PageFrame'
import LabWorkbench from '@/components/labs/LabWorkbench'
import LabsAnalytics from '@/components/labs/LabsAnalytics'
import { LAB_SLUGS, isLabSlug, labBySlug } from '@/lib/labs'
import { pageMeta } from '@/lib/seo'

export const dynamic = 'force-static'

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return LAB_SLUGS.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const lab = labBySlug(slug)
  if (!lab) {
    return pageMeta({ title: 'Lab', path: '/labs' })
  }
  return pageMeta({
    title: `Lab ${lab.number}: ${lab.title}`,
    description: lab.summary,
    path: lab.href,
  })
}

export default async function LabPage({ params }: Props) {
  const { slug } = await params
  if (!isLabSlug(slug)) {
    notFound()
  }
  const lab = labBySlug(slug)
  if (!lab) {
    notFound()
  }
  return (
    <PageFrame>
      <LabsAnalytics lab={lab.slug} />
      <section className="section">
        <LabWorkbench slug={lab.slug} />
      </section>
    </PageFrame>
  )
}
