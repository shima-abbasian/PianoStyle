import { useEffect, useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductGallery from '../components/common/ProductGallery'
import ProductBuyBox from '../components/common/ProductBuyBox'
import ProductCard from '../components/common/ProductCard'
import Rail from '../components/common/Rail'
import site from '../data/site'
import type { ProductDetails } from '../data/site'

function findProduct(slug?: string): ProductDetails {
  if (!slug || slug === site.pdp.slug) return site.pdp
  const item = site.plp.products.find(product => product.slug === slug) || site.plp.products[0]
  return {
    ...site.pdp, ...item, brand: site.brand,
    colourName: item.colourways?.find(option => option.active)?.name || '',
    reviewCount: item.ratingCount, colours: item.colourways || [],
    gallery: item.gallery?.length ? item.gallery : [item.image],
  }
}

export default function ProductPage() {
  const { slug } = useParams()
  const product = useMemo(() => findProduct(slug), [slug])
  const related = site.plp.products.filter(item => item.slug !== product.slug).slice(0, 6)
  useEffect(() => { document.title = `${product.title} — ${site.brand}` }, [product.title])

  return (
    <div className="vb-container py-6">
      <nav className="mb-6 text-xs text-ink-muted">
        <Link to="/">خانه</Link>
        /
        <Link to="/category">محصولات</Link>
        / {product.title}
      </nav>
      <div className="grid gap-8 2xl:grid-cols-[minmax(0,2fr)_minmax(20rem,1fr)]">
        <ProductGallery product={product} />
        <ProductBuyBox product={product} />
      </div>
      <section className="flow-root">
        <h2 id="related-title" className="vb-section-title">{product.relatedTitle}</h2>
        <Rail labelledBy="related-title">{related.map(item =>
          <li key={item.slug}>
            <ProductCard product={item} />
          </li>
        )}
        </Rail>
      </section>
      <section className="mt-gutter">
        <div className="mx-auto max-w-4xl divide-y divide-line border-y border-line">
          {product.tabs.map((tab, index) =>
            <details open={index === 0} key={tab.title}>
              <summary className="cursor-pointer py-4 text-sm font-bold">{tab.title}</summary>
              <p className="pb-4 text-sm text-ink-muted">
                {tab.body}
              </p>
            </details>
          )}
        </div>
      </section>
    </div>
  )
}
