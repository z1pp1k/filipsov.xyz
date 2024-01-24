import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import {
  BsDiscord,
  BsSpotify,
  BsGithub,
  BsTwitter,
  BsYoutube,
  BsTwitch,
} from 'react-icons/bs'
import LinkItem from './LinkItem'

const SOCIALS = [
  {
    icon: <BsSpotify size={30}></BsSpotify>,
    href: 'https://open.spotify.com/user/61zeezoyp5p2tojwp3oftskgq?si=7c63d97f21954ed9',
    name: 'Spotify',
  },
  {
    icon: <BsGithub size={30}></BsGithub>,
    href: 'https://github.com/z1pp1k',
    name: 'GitHub',
  },
]

export default function Links() {
  return (
    <div className="animate-in my-10 flex flex-col gap-3 px-6 text-zinc-500 hover:text-zinc-300 hover:dark:text-zinc-700">
      {SOCIALS.map((t, i) => (
        <LinkItem icon={t.icon} name={t.name} href={t.href} key={i} />
      ))}
    </div>
  )
}
