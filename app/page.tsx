import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/Navbar'
import { Discord } from './components/Discord'
import { FiArrowUpRight } from 'react-icons/fi'
import { BsDiscord, BsSpotify, BsFillTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
export default function Page() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-screen-md">
        <Navbar></Navbar>
        <header className="mt-12 px-6">
          <h1 className="animate-in text-4xl font-bold text-black dark:text-white">
            Filip Sovadina
          </h1>
          <p className="animate-in text-zinc-500 dark:text-zinc-500">
            Tvorba webových stránek, design a správa sociálních médií.
          </p>
          <div className="animate-in mt-6 flex flex-col items-start justify-center gap-4 sm:flex-row sm:items-center sm:justify-start">
            <Image
              className="rounded-full border"
              src="/logo2.png"
              width={90}
              height={90}
              alt="iPhone memoji"
            />
            <span className="text-sm">
              Filip Sovadina
              <br />
              Podroužkova 1676/61, 70800 Ostrava - Poruba
              <br />
              IČ: 21154686
              <br />
              Fyzická osoba zapsaná v Živnostenském rejstříku v Ostravě od
              22.1.2024
            </span>
          </div>
          <p className="animate-in mt-10 text-black dark:text-white">
            Vítejte na mé osobní webové stránce. Zajímám se o vývoj webových
            stránek již dlouhou dobu, a na této stránce můžete najít několik
            informací o mně.
          </p>

          <div className="animate-in mt-10 flex flex-col gap-2 text-zinc-500 hover:text-zinc-300 sm:flex-row sm:gap-4 dark:hover:text-zinc-700">
            <Link
              className="flex items-center gap-2 transition-all duration-300 hover:text-zinc-500"
              href="mailto:sovadinafilip@icloud.com"
            >
              <MdEmail size={25}></MdEmail>
              <span>E-Mail</span>
            </Link>
            <Link
              className="flex items-center gap-2 transition-all duration-300 hover:text-zinc-500"
              href="tel:+420603227987"
            >
              <BsFillTelephoneFill size={20}></BsFillTelephoneFill>
              <span>Mobil</span>
            </Link>
            <Link
              className="flex items-center gap-2 transition-all duration-300 hover:text-zinc-500"
              href="/about"
            >
              <FiArrowUpRight size={25}></FiArrowUpRight>
              <span>Ostatní odkazy</span>
            </Link>
          </div>
        </header>
      </div>
    </main>
  )
}
