import Link from 'next/link'

interface Props {
  icon: React.ReactNode
  href: string
  name: React.ReactNode
}

export default function LinkItem({ icon, href, name }: Props) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 rounded-md border border-zinc-300 p-4 shadow-sm transition-all duration-300 hover:text-zinc-500 dark:border-zinc-600"
      target="_blank"
    >
      {icon}
      <span>{name}</span>
    </Link>
  )
}
