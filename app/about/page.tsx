import Image from 'next/image'
import Navbar from '../components/Navbar'
import Links from '../components/Links'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'O mně',
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-screen-md">
        <Navbar></Navbar>
        <header className="mt-12 px-6">
          <h1 className="text-4xl font-semibold text-black dark:text-white">
            O mně
          </h1>
          <p className="text-zinc-500">Pár informací o mně.</p>
          <p className="mt-10 text-black dark:text-white">
            Jsem studentem čtvrtého ročníku na Střední škole informačních
            technologií a většinu svého času trávím učením novým věcem.
          </p>
        </header>
        <Links></Links>

        <div className="text-md flex flex-col gap-1 px-6 text-center font-light text-zinc-800 dark:text-zinc-200">
          <span className="font-semibold">Filip Sovadina</span>
          <span>Podroužkova 1676/61, 70800 Ostrava - Poruba</span>
          <span className="font-semibold">IČ: 21154686</span>
          <span className="text-sm">
            Fyzická osoba zapsaná v Živnostenském rejstříku v Ostravě od
            22.1.2024
          </span>
        </div>
      </div>
    </main>
  )
}
