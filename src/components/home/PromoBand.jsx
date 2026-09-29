import { Link } from 'react-router-dom'
import Rail from '../common/Rail'
import { money } from '../../utils/format'
import site from '../../data/site.fa.json'

export default function PromoBand() {
  const band = site.promoBand
  return (
    <section className="vb-band" aria-label={band.title}>
      <div className="vb-band__col vb-band__panel" style={{ backgroundImage: `url('${band.image}')` }}>
        <span className="vb-band__scrim" aria-hidden="true" />
        <div className="vb-band__copy"><h2 className="vb-band__title"><strong>{band.title}</strong></h2><p className="vb-band__amount"><span>{band.amount}</span><span className="text-[.4em]">{band.amountSuffix}</span><span className="ms-2 self-end text-[.35em]">{band.off}</span></p><p className="vb-band__conditions">{band.conditions}</p><span className="vb-white-cta relative z-[3] mt-5">{band.cta}</span></div>
      </div>
      <div className="vb-band__col relative flex min-w-0 items-center">
        <Rail className="w-full">{site.promoRail.map(item => <li key={item.slug}><Link to={`/product/${item.slug}`} className="vb-band__card group"><img src={item.image} alt={item.title} loading="lazy" className="aspect-[3/4] w-full object-cover" /><p className="vb-band__caption"><span className="vb-product__price vb-product__price--sale">{money(item.price)} {site.currency}</span>{item.wasPrice && <span className="vb-product__price--was text-xs">{money(item.wasPrice)}</span>}</p></Link></li>)}</Rail>
      </div>
    </section>
  )
}
