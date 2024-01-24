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
          <h1 className="animate-in text-4xl font-semibold text-black dark:text-white">
            O mně
          </h1>
          <p className="animate-in text-zinc-500">Pár informací o mně.</p>
          <p className="animate-in mt-10 text-black dark:text-white">
            Jsem studentem čtvrtého ročníku na Střední škole informačních
            technologií a většinu svého času trávím učením novým věcem.
          </p>
        </header>
        <Links></Links>
      </div>
    </main>
  )
}
