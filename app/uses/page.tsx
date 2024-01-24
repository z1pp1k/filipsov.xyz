import Image from 'next/image'
import Navbar from '../components/Navbar'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Uses',
}

export default function Page() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-screen-md">
        <Navbar></Navbar>
        <div className="my-10 space-y-10 px-6 text-black dark:text-white">
          <div>
            <h2 className="animate-in text-2xl font-semibold">Editor</h2>
            <ul className="animate-in ml-4 mt-2 list-disc text-zinc-500">
              <li>Visual Studio Code</li>
              <li>Font: Monolisa</li>
              <li>Theme: One Dark Pro</li>
              <li>Icons: City Lights</li>
            </ul>
          </div>
          <div>
            <h2 className="animate-in text-2xl font-semibold">Terminal</h2>
            <ul className="animate-in ml-4 mt-2 list-disc text-zinc-500">
              <li>Hyper on zsh</li>
              <li>Font: MesloLGS Nerd Font</li>
              <li>Theme: Powerlevel10k</li>
            </ul>
          </div>
          <div>
            <h2 className="animate-in text-2xl font-semibold">Applications</h2>
            <ul className="animate-in ml-4 mt-2 list-disc text-zinc-500">
              <li>Google Chrome</li>
              <li>Figma</li>
              <li>Framer</li>
              <li>1Password for password management</li>
            </ul>
          </div>
          <div>
            <h2 className="animate-in text-2xl font-semibold">Hardware</h2>
            <ul className="animate-in ml-4 mt-2 list-disc text-zinc-500">
              <li>MacBook Air M1 8GB/256GB</li>
              <li>iPhone 12 64GB</li>
              <li>Airpods Pro 1st Gen</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
