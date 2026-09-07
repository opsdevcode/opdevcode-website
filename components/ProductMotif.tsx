import { ProductMark } from '@/components/BrandMark'

export default function ProductMotif({ slug }: { slug: string }) {
  return <ProductMark slug={slug} className={`product-motif product-motif--${slug}`} />
}
