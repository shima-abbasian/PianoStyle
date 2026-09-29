import { useRef } from 'react'
import Icon from './Icon'

export default function Rail({ children, className = '', labelledBy }) {
  const ref = useRef(null)
  const scroll = direction => ref.current?.scrollBy({
    left: direction * ref.current.clientWidth * 0.75,
    behavior: 'smooth',
  })

  return (
    <div className="relative" data-rail aria-labelledby={labelledBy}>
      <ul ref={ref} className={`vb-rail ${className}`}>{children}</ul>
      <button type="button" onClick={() => scroll(1)} data-scroll-prev
        className="absolute start-2 top-1/2 z-10 hidden size-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 shadow-soft hover:bg-white xl:grid" aria-label="موارد قبلی">
        <Icon path="m15 6-6 6 6 6" className="size-5 vb-mirror" />
      </button>
      <button type="button" onClick={() => scroll(-1)} data-scroll-next
        className="absolute end-2 top-1/2 z-10 hidden size-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 shadow-soft hover:bg-white xl:grid" aria-label="موارد بعدی">
        <Icon path="m9 6 6 6-6 6" className="size-5 vb-mirror" />
      </button>
    </div>
  )
}
