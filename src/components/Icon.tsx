import type { ReactNode } from 'react'

type IconName = 'terminal' | 'folder' | 'stack'

const paths: Record<IconName, ReactNode> = {
  terminal: <><path d="m4 6 6 6-6 6M13 18h7" /></>,
  folder: <path d="M3 7V5.5h6l2 2H21v12H3V7Z" />,
  stack: <><path d="m3 8 9-5 9 5-9 5-9-5Zm0 5 9 5 9-5m-18 5 9 5 9-5" /></>,
}

export function Icon({ name, size = 19 }: { name: IconName; size?: number }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>
}
