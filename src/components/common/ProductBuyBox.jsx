import { useState } from 'react'
import { isOnSale, money, number } from '../../utils/format'
import site from '../../data/site.fa.json'

export default function ProductBuyBox({ product }) {
  const [colour, setColour] = useState(product.colourName)
  const [size, setSize] = useState('')
  const sale = isOnSale(product)

  return (
    <aside className="2xl:sticky 2xl:top-24 2xl:self-start">
      <p className="text-sm font-bold">{product.brand}</p>
      <h1 className="mt-1 text-lg font-normal">{product.title}</h1>
      {product.reviewCount > 0 && <p className="mt-2 text-xs font-bold">★★★★★ {number(product.rating)} ({number(product.reviewCount)})</p>}
      <hr className="my-5 border-line" />
      {product.colours?.length > 0 && <div><p className="mb-2.5 text-sm">رنگ: <strong>{colour}</strong></p><ul className="flex flex-wrap gap-2.5">{product.colours.map(item => <li key={item.name}><button type="button" onClick={() => setColour(item.name)} aria-checked={colour === item.name} role="radio" className="block size-16 overflow-hidden border-2 border-line aria-checked:border-brand">{item.image ? <img src={item.image} alt="" className="size-full object-cover" /> : item.name}</button></li>)}</ul></div>}
      <form className="mt-6 space-y-4" onSubmit={event => event.preventDefault()}>
        <div><label htmlFor="size" className="mb-2 block text-sm">سایز:</label><select id="size" className="vb-select" value={size} onChange={event => setSize(event.target.value)}><option value="">انتخاب سایز</option>{product.sizes.map(item => <option key={item}>{item}</option>)}</select></div>
        <div className="flex items-center gap-3"><label htmlFor="quantity">تعداد:</label><input id="quantity" type="number" min="1" max="9" defaultValue="1" className="w-20 border border-line px-3 py-2 text-center" /></div>
        <p className="flex items-baseline gap-3"><span className={`text-4xl font-bold ${sale ? 'text-sale' : ''}`}>{money(product.price)}</span><span className="text-lg font-bold">{site.currency}</span>{sale && <span className="text-base text-ink-faint line-through">{money(product.wasPrice)}</span>}</p>
        <button className={`vb-btn vb-btn--primary vb-btn--lg vb-btn--block ${!size ? 'vb-btn--disabled' : ''}`} disabled={!size}>افزودن به سبد خرید</button>
      </form>
      {product.careLabels?.length > 0 && <div className="mt-7"><p className="mb-2 font-bold">راهنمای شست‌وشو</p><ul>{product.careLabels.map(label => <li className="text-xs text-ink-muted" key={label}>• {label}</li>)}</ul></div>}
    </aside>
  )
}
