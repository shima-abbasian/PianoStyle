import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductCard from '../components/common/ProductCard'
import { number } from '../utils/format'
import site from '../data/site.fa.json'

export default function CategoryPage() {
  const { slug = site.plp.slug } = useParams()
  const listing = site.plp
  const active = listing.subCategories.findIndex(item => item.url.replace('/c/', '') === slug)
  const title = active >= 0 ? listing.subCategories[active].label : listing.h1
  useEffect(() => { document.title = `${title} — ${site.brand}` }, [title])

  return (
    <>
      <div className="border-b border-line">
        <div className="vb-container py-5">
          <nav className="text-xs text-ink-muted">
            <Link to="/" className="text-ink hover:underline">خانه</Link>
            / {title}
          </nav>
          <h1 className="mt-2 text-3xl">{title}</h1>
        </div>
      </div>
      <div className="border-b border-line">
        <div className="vb-container py-4">
          <nav aria-label="زیردسته‌ها">
            <ul className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
              <li>
                <Link to="/category" className={`vb-chip ${active < 0 ? 'vb-chip--active' : ''}`}>{listing.currentCategory.label} ({number(listing.currentCategory.count)})</Link>
              </li>
              {listing.subCategories.map((item, index) =>
                <li key={item.url}>
                  <Link to={`/category/${item.url.replace('/c/', '')}`} className={`vb-chip ${active === index ? 'vb-chip--active' : ''}`}>
                    {item.label} ({number(item.count)})
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
      <div className="vb-container py-6">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 border-b border-line pb-4">
          <p className="text-sm text-ink-muted">{number(listing.currentCategory.count)} کالا</p>
          <div className="flex items-center gap-2">
            <select className="vb-chip cursor-pointer">{listing.sortOptions.map(option =>
              <option key={option}>{option}</option>
            )}
            </select>
            <button type="button" className="vb-btn vb-btn--outline vb-btn--sm">فیلترها</button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-9 sm:grid-cols-3 2xl:grid-cols-4 2xl:gap-x-5">
          {listing.products.map((product, index) =>
            <ProductCard product={product} key={`${product.slug}-${index}`} />
          )}
        </div>
        <nav className="mt-12 flex justify-center gap-2" aria-label="صفحه‌بندی">{[1, 2, 3].map(value =>
          <button className="vb-btn vb-btn--outline vb-btn--sm" key={value}>{number(value)}</button>
        )}
        </nav>
      </div>
    </>
  )
}
