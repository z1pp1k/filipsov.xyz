import Link from 'next/link'
import { BsSpotify, BsGithub, BsMailbox } from 'react-icons/bs'
import LinkItem from './LinkItem'

const SOCIALS = [
  {
    icon: <BsGithub size={30}></BsGithub>,
    href: 'https://github.com/z1pp1k',
    name: 'GitHub',
  },
  {
    icon: <BsMailbox size={30}></BsMailbox>,
    href: 'mailto:filipsovadina@gmail.com',
    name: 'E-Mail',
  },
]

export default function Links() {
  return (
    <div className="my-20 flex flex-col gap-3 px-6 text-zinc-500 hover:text-zinc-300 hover:dark:text-zinc-700">
      {SOCIALS.map((t, i) => (
        <LinkItem icon={t.icon} name={t.name} href={t.href} key={i} />
      ))}
    </div>
  )
}
