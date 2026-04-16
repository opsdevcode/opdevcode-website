import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const common = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none' as const,
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true as const,
}

/** Stack / platform — audience tile */
export function IconLayers(props: IconProps) {
  return (
    <svg {...common} {...props}>
      <path d="M12 2 2 7l10 5 10-5-10-5Z" />
      <path d="M2 12l10 5 10-5" />
      <path d="M2 17l10 5 10-5" />
    </svg>
  )
}

/** People — leadership tile */
export function IconUsers(props: IconProps) {
  return (
    <svg {...common} {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

/** Activity / flow — delivery friction tile */
export function IconActivity(props: IconProps) {
  return (
    <svg {...common} {...props}>
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  )
}

/** Server — hands-on / operations */
export function IconServer(props: IconProps) {
  return (
    <svg {...common} {...props}>
      <rect x="2" y="3" width="20" height="4" rx="1" />
      <rect x="2" y="10" width="20" height="4" rx="1" />
      <rect x="2" y="17" width="20" height="4" rx="1" />
      <path d="M6 5v.01M6 12v.01M6 19v.01" />
    </svg>
  )
}

/** Tooling */
export function IconTool(props: IconProps) {
  return (
    <svg {...common} {...props}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  )
}
