import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'

export default function SiteLayout() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only">رفتن به محتوای اصلی</a>
      <Header />
      <main id="main"><Outlet /></main>
      <Footer />
    </>
  )
}
