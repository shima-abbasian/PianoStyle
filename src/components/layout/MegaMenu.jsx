import { useState } from 'react'
import SmartLink from '../common/SmartLink'
import site from '../../data/site.fa.json'

export default function MegaMenu({ open }) {
  const [active, setActive] = useState(0)
  if (!open) return null

  return (
    <div id="vb-megamenu" className="border-t border-line/60 bg-white shadow-soft" data-megamenu>
      <div className="border-b border-line">
        <div className="vb-container">
          <ul className="flex" role="tablist" aria-label="دنیاهای فروشگاه">
            {site.menu.map((tab, index) => (
              <li className="flex flex-1" key={tab.key}>
                <button type="button" role="tab" aria-selected={active === index}
                  onClick={() => setActive(index)} onMouseEnter={() => setActive(index)} className="vb-menu-tab">
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {site.menu.map((tab, index) => active === index && (
        <div key={tab.key} role="tabpanel" className="vb-container max-h-[70vh] overflow-y-auto py-6">
          <ul className="mb-6 flex flex-wrap gap-2">
            {tab.promos.map(promo => <li key={promo.label}><SmartLink href={promo.url} className="vb-menu-promo">{promo.label}</SmartLink></li>)}
          </ul>
          <h2 className="mb-4 text-sm font-bold text-ink-muted">{tab.sectionTitle}</h2>
          <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {tab.groups.map(group => (
              <div key={group.title}>
                <h3 className="mb-2.5 text-sm font-bold">{group.title}</h3>
                <ul className="space-y-1.5">
                  {group.links.map(link => <li key={link.label}><SmartLink href={link.url} className="text-xs hover:text-brand-hover hover:underline">{link.label}</SmartLink></li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
