import { Link } from 'react-router-dom'
import { internalPath } from '../../utils/format'

export default function SmartLink({ href, children, ...props }) {
  const target = internalPath(href)
  if (/^https?:/.test(href || '')) return <a href={href} {...props}>{children}</a>
  return <Link to={target} {...props}>{children}</Link>
}
