import { Link } from 'react-router-dom'
import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { internalPath } from '../../utils/format'

interface SmartLinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string
  children?: ReactNode
}

export default function SmartLink({ href, children, ...props }: SmartLinkProps) {
  const target = internalPath(href)
  if (/^https?:/.test(href || '')) return <a href={href} {...props}>{children}</a>
  return <Link to={target} {...props}>{children}</Link>
}
