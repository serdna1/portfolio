"use client"

import { useEffect, useState } from "react"

import { MaterialSymbolsDarkMode, MaterialSymbolsLanguage, MaterialSymbolsLightModeSharp, SolarHamburgerMenuLinear } from "@/app/components/icons"

export const Navbar = () => {

  const [displayMenu, setDisplayMenu] = useState<boolean>(false)
  const [lg, setLg] = useState<boolean>(false)

  useEffect(() => {

    setLg(window.innerWidth > 1023)

    const lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    const onChange = (event: MediaQueryListEvent): void => {
      setLg(event.matches)
    }

    lgMediaQuery.addEventListener('change', onChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onChange)
    }

  }, [])

  useEffect(() => {
    if (displayMenu)
      document.body.style.overflowY = 'hidden'
    else
      document.body.style.overflowY = 'unset'
  }, [displayMenu])

  useEffect(() => {
    if (lg && displayMenu)
      document.body.style.overflowY = 'unset'
    if (!lg && displayMenu)
      document.body.style.overflowY = 'hidden'      
  }, [lg])

  return (
    <nav className='fixed w-full z-50'>
        <div className='flex items-center h-20 justify-between bg-green-600 text-black bg-opacity-70 px-2 md:px-16'>
            <a
              href='/'
              className="group" 
            >
              <img
                src="/luna-artemis.webp"
                alt="luna and artemis, yin and yan"
                className="h-16 group-hover:animate-spin"
              />
            </a>
            {
              ((!lg && displayMenu) || lg) &&
                <div className="lg:bg-transparent w-full lg:h-full absolute lg:static left-0 top-20 flex flex-col-reverse lg:flex-row justify-end min-h-screen lg:min-h-0 bg-green-300/80 backdrop-blur lg:backdrop-blur-none">
                  <div className="flex flex-col lg:flex-row items-center justify-center lg:grow">
                    <a
                      onClick={() => !lg && setDisplayMenu(!displayMenu)}
                      href="#about"
                      className="flex items-center hover:bg-yellow-300 h-full w-full lg:w-auto px-10 text-2xl font-semibold hover:bg-opacity-70 py-5 justify-center"
                    >
                        Sobre mí
                    </a>
                    <a
                      onClick={() => !lg && setDisplayMenu(!displayMenu)}
                      href="#projects"
                      className="flex items-center hover:bg-yellow-300 h-full w-full lg:w-auto px-10 text-2xl font-semibold hover:bg-opacity-70 py-5 justify-center"
                    >
                        Proyectos
                    </a>
                    <a
                      onClick={() => !lg && setDisplayMenu(!displayMenu)}
                      href="#contact"
                      className="flex items-center hover:bg-yellow-300 h-full w-full lg:w-auto px-10 text-2xl font-semibold hover:bg-opacity-70 py-5 justify-center"
                    >
                        Contacto
                    </a>
                  </div>
                  <div className="flex items-center justify-center gap-4 py-5">
                    <button className="opacity-80 hover:opacity-100 hover:scale-110">
                      <MaterialSymbolsDarkMode className="text-5xl text-yellow-300" />
                    </button>
                    <button className="opacity-80 hover:opacity-100 hover:scale-110">
                      <MaterialSymbolsLanguage className="text-5xl"/>
                    </button>
                  </div>
                </div>
            }
            <button 
              onClick={() => setDisplayMenu(!displayMenu)}
              className="lg:hidden"
            >
              <SolarHamburgerMenuLinear className="text-5xl hover:scale-110"/>
            </button>
        </div>
    </nav>
  )
}
