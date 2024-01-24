'use client'

import Link from 'next/link'
import cn from 'clsx'
import { usePathname } from 'next/navigation'

type NavLinkProps = {
  href: string
  children: React.ReactNode
}

export default function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      className={cn(
        'rounded-lg px-4 py-2 text-sm transition-all duration-100 hover:text-black dark:hover:text-white',
        isActive
          ? 'bg-zinc-200 text-black dark:bg-zinc-800 dark:text-white'
          : 'text-zinc-500',
      )}
      href={href}
    >
      {children}
    </Link>
  )
}
