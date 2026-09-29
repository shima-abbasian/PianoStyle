import { Link } from 'react-router-dom'
import { useState } from 'react'
import Icon from './Icon'
import { discountPercent, isOnSale, money, number } from '../../utils/format'
import site from '../../data/site.fa.json'

export default function ProductCard({ product }) {
  const [favorite, setFavorite] = useState(false)
  const sale = isOnSale(product)

  return (
    <article className="vb-product group">
      <div className="relative">
        <Link to={`/product/${product.slug}`} className="vb-product__media" tabIndex="-1" aria-hidden="true">
          <img src={product.image} alt="" className="vb-product__img" loading="lazy" width="600" height="800" />
        </Link>
        {product.isNew ? (
          <span className="vb-flag vb-flag--brand absolute bottom-2.5 start-2.5">کالکشن جدید</span>
        ) : sale ? (
          <span className="vb-flag absolute bottom-2.5 start-2.5">{number(discountPercent(product))}٪− تخفیف</span>
        ) : null}
        <button type="button" className="vb-product__heart" aria-pressed={favorite}
          onClick={() => setFavorite(value => !value)} aria-label={`افزودن «${product.title}» به علاقه‌مندی‌ها`}>
          <Icon path="M20.8 6.6a5 5 0 0 0-7.1 0L12 8.3l-1.7-1.7a5 5 0 1 0-7.1 7.1l8.8 8.8 8.8-8.8a5 5 0 0 0 0-7.1Z"
            className="size-4" fill={favorite ? 'currentColor' : 'none'} />
        </button>
      </div>
      <div className="mt-3 space-y-1">
        <h3 className="text-sm font-normal">
          <Link to={`/product/${product.slug}`} className="vb-product__title hover:underline" title={product.title}>
            {product.title}
          </Link>
        </h3>
        <p className="flex items-baseline gap-2">
          <span className={`vb-product__price ${sale ? 'vb-product__price--sale' : ''}`}>
            {money(product.price)}&nbsp;{site.currency}
          </span>
          {sale && <span className="vb-product__price--was text-xs">{money(product.wasPrice)}</span>}
        </p>
        {product.colourCount > 1 && <p className="vb-product__meta">{number(product.colourCount)} رنگ</p>}
      </div>
    </article>
  )
}
