import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from './navbar'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`${inter.className}`}
    >
      <Navbar/>
      <section className="bg-[url('/home-bg.png')] w-full h-full">
        Hoi
      </section>
    </main>
  )
}
