import { useState } from 'react'
import site from '../../data/site'

export default function Announcement() {
  const [copied, setCopied] = useState('')
  const rows = [...site.announcements, site.announcements[0]]

  async function copy(code: string) {
    await navigator.clipboard?.writeText(code)
    setCopied(code)
    window.setTimeout(() => setCopied(''), 1500)
  }

  return (
    <div className="vb-preheader" data-preheader>
      <div className="vb-preheader__track">
        {rows.map((item, index) => (
          <div className="vb-preheader__item relative" key={`${item.text}-${index}`}
            aria-hidden={index === rows.length - 1 || undefined}>
            <span>{item.text}</span>
            {item.code && (
              <button type="button" className="vb-code relative" onClick={() => copy(item.code)}>
                <span dir="ltr">{copied === item.code ? 'کپی شد' : item.code}</span>
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
