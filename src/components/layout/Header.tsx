import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Announcement from './Announcement'
import MegaMenu from './MegaMenu'
import Icon from '../common/Icon'
import SmartLink from '../common/SmartLink'
import site from '../../data/site'

export default function Header() {
  const { pathname } = useLocation()
  const overlay = pathname === '/'
  const [menuOpen, setMenuOpen] = useState(false)
  const [solid, setSolid] = useState(!overlay)

  useEffect(() => {
    setMenuOpen(false)
    if (!overlay) { setSolid(true); return }
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.65)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [pathname, overlay])

  const utilities = [
    ['حساب کاربری', 'M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6M6.5 19a6 6 0 0 1 11 0M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18'],
    ['علاقه‌مندی‌ها', 'M20.8 6.6a5 5 0 0 0-7.1 0L12 8.3l-1.7-1.7a5 5 0 1 0-7.1 7.1l8.8 8.8 8.8-8.8a5 5 0 0 0 0-7.1Z'],
    ['سبد خرید', 'M5 8h14l-1 12H6L5 8ZM9 8V6a3 3 0 0 1 6 0v2'],
  ]

  return (
    <>
      <div className={`vb-headerstack ${overlay ? 'vb-headerstack--overlay' : ''} ${solid ? 'is-solid' : ''}`}>
        <Announcement />
        <header className="vb-header" data-header>
          <div className="vb-container flex h-14 items-center gap-3 lg:h-20 lg:gap-5">
            <div className="vb-brandgroup flex shrink-0 items-center">
              <button type="button" className="vb-icon-btn" onClick={() => setMenuOpen(v => !v)}
                aria-expanded={menuOpen} aria-controls="vb-megamenu" aria-label="باز کردن منو">
                <Icon path="M3 6h18M3 12h18M3 18h18" />
              </button>
              <Link to="/" className="vb-logo" aria-label={`${site.brand} — صفحه اصلی`}>
                <span className="vb-logo__mark" aria-hidden="true" />
              </Link>
            </div>
            <form className="vb-search mx-auto hidden w-full max-w-[36.875rem] lg:flex" role="search" onSubmit={e => e.preventDefault()}>
              <button type="submit" className="grid size-[2.125rem] shrink-0 place-items-center rounded-full bg-brand text-white" aria-label={site.search.submit}>
                <Icon path="M20 20l-3.5-3.5M18 11a7 7 0 1 1-14 0 7 7 0 0 1 14 0" className="size-[1.15rem]" />
              </button>
              <input type="search" placeholder={site.search.placeholder} />
            </form>
            <nav className="ms-auto flex shrink-0 items-center gap-1 lg:ms-0 lg:gap-5" aria-label="ابزارهای کاربر">
              {utilities.map(([label, path]) => (
                <a href="#" className="vb-icon-btn" aria-label={label} key={label} onClick={e => e.preventDefault()}>
                  <Icon path={path} /><span className="vb-badge-count">۰</span>
                </a>
              ))}
            </nav>
          </div>
          <div className="vb-container pb-2 lg:hidden">
            <form className="vb-search" onSubmit={e => e.preventDefault()}>
              <button className="grid size-[2.125rem] place-items-center rounded-full bg-brand text-white" aria-label={site.search.submit}>
                <Icon path="M20 20l-3.5-3.5M18 11a7 7 0 1 1-14 0 7 7 0 0 1 14 0" className="size-4" />
              </button>
              <input type="search" placeholder={site.search.placeholder} />
            </form>
          </div>
          <MegaMenu open={menuOpen} />
        </header>
      </div>
      {!overlay && (
        <div className="border-b border-line bg-white">
          <div className="vb-container"><nav className="vb-moments">
            {site.atTheMoment.map(item => <SmartLink href={item.url} className="vb-moment" key={item.label}><img src={item.image} alt="" width="28" height="28" /><span>{item.label}</span></SmartLink>)}
          </nav></div>
        </div>
      )}
    </>
  )
}
