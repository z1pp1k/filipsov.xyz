import Image from 'next/image'
import Link from 'next/link'
import Navbar from './components/Navbar'
import { BsPhone, BsMailbox2, BsArrowUpRight } from 'react-icons/bs'
import { MdEmail, MdArrowUpward, MdOutlinePhone } from 'react-icons/md'
import Contact from './components/Contact'
export default async function Page() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-screen-md">
        <Navbar></Navbar>
        <header className="mt-12 px-6">
          <h1 className="mb-1 text-4xl font-bold text-black dark:text-white">
            Filip Sovadina
          </h1>
          <p className="text-zinc-500 dark:text-zinc-500">
            Tvorba webových stránek, design a správa sociálních médií.
          </p>
          <div className="text-md mt-6 flex flex-col items-start justify-center gap-6 rounded-lg sm:flex-row sm:items-center sm:justify-start">
            <Image
              className="rounded-full border border-black/30 dark:border-white/30"
              src="/logo2.png"
              width={120}
              height={120}
              alt="iPhone memoji"
            />
            <div className="flex flex-col items-start gap-3  text-zinc-500 hover:text-zinc-300 dark:hover:text-zinc-700">
              <div className="flex items-center justify-center gap-2 transition-all duration-300 hover:text-zinc-500">
                <MdEmail size={25}></MdEmail>
                <Link href="mailto:filipsovadina@gmail.com">
                  filipsovadina@gmail.com
                </Link>
              </div>
              <div className="flex items-center justify-center gap-2 transition-all duration-300 hover:text-zinc-500">
                <MdOutlinePhone size={25}></MdOutlinePhone>
                <Link href="tel:+420603227987">+420 603 227 987</Link>
              </div>
              <div className="flex gap-2 transition-all duration-300 hover:text-zinc-500">
                <MdArrowUpward size={25}></MdArrowUpward>
                <Link href="/about">Více informací</Link>
              </div>
            </div>
          </div>
          <p className="mt-10 text-black dark:text-white">
            Vítejte na mé osobní webové stránce, mým hlavním zájmem je tvorba
            webů spojená s grafickým designem a strategiemi pro sociální sítě,
            snažím se neustále zdokonalovat a sledovat aktuální trendy v
            digitálním světě, abych mohl efektivně přinášet inovace do svého
            oboru. Těším se na případné možnosti spolupráce.
          </p>

          <div className="mt-10 flex flex-col gap-2 text-zinc-500 hover:text-zinc-300 sm:flex-row sm:gap-4 dark:hover:text-zinc-700">
            <Link
              className="flex items-center gap-2 transition-all duration-300 hover:text-zinc-500"
              href="mailto:filipsovadina@gmail.com"
            >
              <BsMailbox2 size={25}></BsMailbox2>
              <span>E-Mail</span>
            </Link>
            <Link
              className="flex items-center gap-2 transition-all duration-300 hover:text-zinc-500"
              href="tel:+420603227987"
            >
              <BsPhone size={25}></BsPhone>
              <span>Mobil</span>
            </Link>
            <Link
              className="flex items-center gap-2 transition-all duration-300 hover:text-zinc-500"
              href="/about"
            >
              <BsArrowUpRight size={25}></BsArrowUpRight>
              <span>Ostatní odkazy</span>
            </Link>
          </div>

          <div className="my-20 rounded-lg bg-zinc-100 p-4 shadow-md sm:p-8 dark:bg-zinc-900">
            <h1 className="mb-1 text-4xl font-bold text-black dark:text-white">
              Máte zájem o mé služby?
            </h1>
            <p className="text-zinc-500 dark:text-zinc-500">
              Vyplňte formulář níže
            </p>
            <Contact></Contact>
          </div>
        </header>
      </div>
    </main>
  )
}
