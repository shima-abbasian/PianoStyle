import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import SmartLink from '../common/SmartLink'
import site from '../../data/site.fa.json'

function FooterColumn({ column }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 48rem)')
    const sync = event => setOpen(event.matches)
    sync(desktop)
    desktop.addEventListener('change', sync)
    return () => desktop.removeEventListener('change', sync)
  }, [])

  return (
    <details className="vb-footer-acc" open={open} onToggle={event => setOpen(event.currentTarget.open)}>
      <summary className="vb-footer-heading">{column.title}</summary>
      <ul className="space-y-2">{column.links.map(link => <li key={link.label}><SmartLink href={link.url} className="vb-footer-link">{link.label}</SmartLink></li>)}</ul>
    </details>
  )
}

export default function Footer() {
  const home = useLocation().pathname === '/'
  const footer = site.footer

  return (
    <footer className="border-t border-line">
      {home && <section className="border-b border-line"><div className="vb-container py-gutter"><div className="mx-auto max-w-4xl space-y-4"><h2 className="text-xl">{site.seo.heading}</h2>{site.seo.blocks.map(block => <p className="text-sm text-ink-muted" key={block}>{block}</p>)}</div></div></section>}
      <section className="border-b border-line bg-brand-tint">
        <div className="vb-container flex flex-col items-center gap-6 py-9 text-center lg:flex-row lg:justify-between lg:text-start">
          <div><p className="text-3xl font-extrabold text-brand-dark">{footer.newsletter.amount}</p><h2 className="text-xl">{footer.newsletter.title}</h2><p className="mt-1 text-sm font-bold">{footer.newsletter.subtitle}</p><p className="mt-1 text-sm text-ink-muted">{footer.newsletter.body}</p></div>
          <form className="w-full max-w-lg" onSubmit={e => e.preventDefault()}><div className="flex flex-col gap-3 sm:flex-row"><input className="vb-input" type="email" placeholder={footer.newsletter.placeholder} /><button className="vb-btn vb-btn--outline">{footer.newsletter.cta}</button></div></form>
        </div>
      </section>
      <div className="vb-container grid gap-gutter py-gutter sm:grid-cols-2 xl:grid-cols-4">
        {footer.columns.map(column => <FooterColumn column={column} key={column.title} />)}
      </div>
      <section className="border-t border-line bg-surface-alt"><div className="vb-container flex flex-col items-center gap-3 py-5 sm:flex-row sm:justify-between"><p className="text-sm font-bold">{footer.payment.title}</p><ul className="flex flex-wrap justify-center gap-2">{footer.payment.methods.map(method => <li className="border border-line bg-white px-3 py-1.5 text-xs font-bold" key={method}>{method}</li>)}</ul></div></section>
      <section className="border-t border-line"><div className="vb-container flex flex-col items-center justify-between gap-3 py-5 sm:flex-row"><p className="text-xs text-ink-muted">{footer.copyright}</p><ul className="flex flex-wrap gap-4">{footer.conditions.map(link => <li key={link.label}><SmartLink href={link.url} className="vb-footer-link">{link.label}</SmartLink></li>)}</ul></div></section>
    </footer>
  )
}
