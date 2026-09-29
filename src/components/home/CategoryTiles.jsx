import Rail from '../common/Rail'
import SmartLink from '../common/SmartLink'
import site from '../../data/site.fa.json'

export default function CategoryTiles() {
  return (
    <section className="vb-container py-gutter" aria-label="دسته‌های کالکشن جدید">
      <Rail>{site.categoryTiles.map(tile =>
        <li key={tile.label}>
          <SmartLink href={tile.url} className="group block">
            <span className="block overflow-hidden rounded-card bg-surface">
              <img src={tile.image} alt={tile.label} loading="lazy"
                className="aspect-[3/4] w-full object-cover transition-transform duration-300 group-hover:scale-105" />
            </span>
          </SmartLink>
        </li>
      )}
      </Rail>
    </section>
  )
}
