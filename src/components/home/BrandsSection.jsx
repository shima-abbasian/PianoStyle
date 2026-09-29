import Rail from '../common/Rail'
import SmartLink from '../common/SmartLink'
import site from '../../data/site.fa.json'

export default function BrandsSection() {
  return (
    <section className="pb-gutter">
      <div className="relative"><picture><source media="(min-width:48rem)" srcSet={site.brandsHero.image} /><img src={site.brandsHero.imageMobile} alt="" loading="lazy" className="h-[calc(100vh-110px)] w-full object-cover xl:h-screen" /></picture><div className="absolute inset-x-0 bottom-gutter grid place-items-center"><SmartLink href={site.brandsHero.url} className="vb-white-cta">{site.brandsHero.cta}</SmartLink></div></div>
      <div className="vb-container flow-root"><h2 id="brands-title" className="vb-section-title">{site.brandsTitle}</h2><Rail labelledBy="brands-title">{site.brands.map(brand => <li key={brand.label}><SmartLink href={brand.url} className="block overflow-hidden border border-line bg-white transition hover:border-ink"><img src={brand.image} alt={brand.label} loading="lazy" className="aspect-[579/447] w-full object-cover" /></SmartLink></li>)}</Rail><p className="mt-gutter text-center"><SmartLink href={site.allBrandsUrl} className="vb-btn vb-btn--outline vb-btn--sm">{site.allBrandsLabel}</SmartLink></p></div>
    </section>
  )
}
