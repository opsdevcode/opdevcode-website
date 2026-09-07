import { ProductMark } from '@/components/BrandMark'

const captions: Record<string, string> = {
  repave: 'Lifecycle as offset passes: generate, observe, restore.',
  overpass: 'Two planes and spanning members: inventory and dependency.',
  toll: 'A measured gap: attribution between spend and ownership.',
  dispatch: 'Intent through a gate into action. Policy stays outside the agent.',
}

export default function ProductSignature({ slug }: { slug: string }) {
  return (
    <figure className={`product-signature product-signature--${slug}`}>
      <ProductMark slug={slug} className={`product-motif product-motif--${slug}`} />
      <figcaption>{captions[slug] ?? captions.repave}</figcaption>
      <p className="endorsement">by OpsDevCode</p>
    </figure>
  )
}
