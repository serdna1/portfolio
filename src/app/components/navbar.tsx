"use client"

import { useEffect, useState } from "react"

import { MaterialSymbolsLanguage, SolarHamburgerMenuLinear } from "@/app/components/icons"
import { ThemeBtn } from "./theme-btn"
import { NavbarAnchor } from "./navbar-anchor"

export const Navbar = () => {
  const [displayMenu, setDisplayMenu] = useState(false)

  useEffect(() => {
    if (displayMenu)
      document.body.style.overflowY = 'hidden'
    else
      document.body.style.overflowY = 'unset'
  }, [displayMenu])

  const handleClick = () => {
    setDisplayMenu(!displayMenu)
  }
  
  return (
    <nav className='fixed w-full z-50'>
        <div className='flex items-center h-20 justify-between bg-green-600/70 dark:bg-red-600/70 dark:text-white px-2 md:px-16'>
            <a
              href='/'
              className="group" 
            >
              <img
                src="/luna-artemis.webp"
                alt="luna and artemis, yin and yan"
                className="w-16 group-hover:animate-spin"
              />
            </a>
            <div className="hidden w-full h-full static lg:flex justify-end">
              <div className="flex justify-center grow">
                <NavbarAnchor content="Sobre mí" href="/#about"/>
                <NavbarAnchor content="Proyectos" href="/#projects"/>
                <NavbarAnchor content="Contacto" href="/#contact"/>
              </div>
              <div className="flex items-center justify-center gap-4 py-5">
                <ThemeBtn />
                {/* <button className="opacity-80 hover:opacity-100 hover:scale-110">
                  <MaterialSymbolsLanguage className="text-5xl"/>
                </button> */}
              </div>
            </div>
            {
              displayMenu &&
                <div className="lg:hidden w-full absolute left-0 top-20 flex flex-col h-[calc(100vh-5rem)] bg-green-300/80 dark:bg-red-500/80 backdrop-blur overflow-scroll">
                  <div className="flex justify-center gap-4 py-5">
                    <ThemeBtn />
                    {/* <button className="opacity-80 hover:opacity-100 hover:scale-110">
                      <MaterialSymbolsLanguage className="text-5xl"/>
                    </button> */}
                  </div>
                  <div className="flex flex-col justify-center">
                    <NavbarAnchor content="Sobre mí" href="/#about" handleClick={handleClick}/>
                    <NavbarAnchor content="Proyectos" href="/#projects" handleClick={handleClick}/>
                    <NavbarAnchor content="Contacto" href="/#contact" handleClick={handleClick}/>
                  </div>
                </div>
            }
            <button 
              onClick={handleClick}
              className="lg:hidden"
            >
              <SolarHamburgerMenuLinear className="text-5xl hover:scale-110"/>
            </button>
        </div>
    </nav>
  )
}
