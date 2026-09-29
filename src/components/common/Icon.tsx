interface IconProps {
  path: string
  className?: string
  fill?: string
}

export default function Icon({ path, className = 'size-6', fill = 'none' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill={fill} stroke="currentColor"
      strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={path} />
    </svg>
  )
}
