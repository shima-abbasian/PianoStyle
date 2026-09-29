import Rail from '../common/Rail'
import SmartLink from '../common/SmartLink'
import site from '../../data/site'

export default function FocusSection() {
  return (
    <section className="vb-container flow-root pb-gutter">
      <h2 id="focus-title" className="vb-section-title">
        {site.focusTitle}
      </h2>
      <Rail labelledBy="focus-title">
        {site.focusTiles.map(tile =>
          <li key={tile.label}>
            <SmartLink href={tile.url} className="group block">
              <picture>{tile.imageMobile &&
                <source media="(max-width:47.99rem)" srcSet={tile.imageMobile} />
              }
                <img src={tile.image} alt={tile.label} loading="lazy"
                  className="aspect-[579/446] w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              </picture>
            </SmartLink>
          </li>
        )}
      </Rail>
    </section>
  )
}
