import { useState } from 'react'
import Icon from './Icon'

export default function ProductGallery({ product }) {
  const [favorite, setFavorite] = useState(false)
  return (
    <div className="grid grid-cols-2 gap-2">
      {product.gallery.map((image, index) => (
        <figure className="relative overflow-hidden bg-surface" key={`${image}-${index}`}>
          <img src={image} alt={index === 0 ? product.title : ''} loading={index ? 'lazy' : 'eager'} className="aspect-[3/4] w-full object-cover" />
          {index === 0 && <button type="button" className="vb-product__heart" aria-pressed={favorite} onClick={() => setFavorite(v => !v)}><Icon path="M20.8 6.6a5 5 0 0 0-7.1 0L12 8.3l-1.7-1.7a5 5 0 1 0-7.1 7.1l8.8 8.8 8.8-8.8a5 5 0 0 0 0-7.1Z" className="size-4" fill={favorite ? 'currentColor' : 'none'} /></button>}
        </figure>
      ))}
    </div>
  )
}
