'use client'
import { Menu } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import MenuMobile from '../menu-mobile/MenuMobile'

function Index() {
  const [isOpen, setIsOpen] = useState(false)
  const [person, setPerson] = useState('pj')

  return (
    <header className="bg-white py-3 shadow-md lg:py-2">
      <div className="container m-auto px-4">

        <div className="flex items-center justify-between">
          <div className="flex gap-2 items-center">
            <Image src={'/vivo-empresas-logo.png'} alt='Logo VivoFibra' width={240} height={32} />

            <div className="hidden ml-6 items-center gap-6 lg:flex">
              <p
                className={`cursor-pointer duration-300 hover:text-default-purple hover:font-bold ${(person === 'pf') ? 'font-bold text-default-purple' : ''}`}
                onClick={() => setPerson('pj')}>
                Para Você
              </p>
              <p
                className={`cursor-pointer duration-300 hover:text-default-purple hover:font-bold ${(person === 'pj') ? 'font-bold text-default-purple' : ''}`}
                onClick={() => setPerson('pf')}>
                Para Empresas
              </p>
            </div>
          </div>

          <button
            className="cursor-pointer border rounded-sm p-2 lg:hidden"
            onClick={() => setIsOpen((prev => !prev))}>
            <Menu size={32} />
          </button>

          <Image src={'/logo-gold.webp'} alt="Logo Gold" width={112} height={60} className="hidden lg:block" />
        </div>

        <MenuMobile isOpen={isOpen} typePerson={person} />
      </div>
    </header>
  )
}

export default Index