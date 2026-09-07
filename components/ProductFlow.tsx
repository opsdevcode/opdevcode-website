import Link from 'next/link'
import ProductMotif from '@/components/ProductMotif'
import { products, type ProductSlug } from '@/lib/products'

export default function ProductFlow({
  questions,
}: {
  questions: Record<ProductSlug, { question: string; role: string }>
}) {
  return (
    <ol className="product-flow">
      {products.map((product) => (
        <li key={product.slug} className={`product-flow-item product-flow-item--${product.slug}`}>
          <Link href={product.href}>
            <span className="product-flow-index">{product.maturityIndex}</span>
            <ProductMotif slug={product.slug} />
            <strong>{product.name}</strong>
            <span>{questions[product.slug].question}</span>
          </Link>
        </li>
      ))}
    </ol>
  )
}
