import { LogosGoogleGmail, LogosGithubIcon, LogosLinkedinIcon, MaterialSymbolsArrowCircleDownOutlineRounded } from "@/app/components/icons"
import { email } from "@/config/config"
import { CatImage } from "./cat-image"
import { FillAnchor } from "./fill-anchor"

export const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-2 pt-28 pb-8 grid place-items-center bg-white dark:bg-black relative"
    >
      <div className="flex flex-wrap-reverse gap-6 md:gap-24 flex-col-reverse md:flex-row items-center justify-center">
        <article className="max-w-xl text-center md:text-left">
          <h1 className="text-5xl font-semibold">
            Hola, soy Andrés
          </h1>
          <h2 className="text-green-600 dark:text-red-800 mt-2 text-4xl font-semibold">
            Desarrollador Full-Stack
          </h2>
          <div className="mt-6 flex flex-col gap-4">
            <p>
              Apasionado autodidacta, finalizando el grado de Ingeniería Informática. 
            </p>
            <p>
              Comunicativo, con iniciativa, versátil y perseverante.
            </p>
            <p>
              He creado múltiples aplicaciones web con diferentes tecnologías (React, Next.js, Tailwind, MySQL, ...) y participé en una hackathon.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-6 items-center justify-center md:justify-normal">
            <FillAnchor
              href="/cv.pdf"
              download="andres_otero_cv.pdf"
              text="Descargar CV"
              anchorClasses="border-2 border-black dark:border-white md:w-52 p-4"
            />
            <div className="flex gap-6">
              <a 
                className="grayscale-0 lg:grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
                href={`mailto:${email}`}
              >
                <LogosGoogleGmail className="text-4xl"/>
              </a>
              <a 
                className="grayscale-0 lg:grayscale hover:grayscale-0 hover:scale-110 cursor-pointer dark:invert"
                href="https://github.com/serdna1"
              >
                <LogosGithubIcon className="text-4xl"/>
              </a>
              <a 
                className="grayscale-0 lg:grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
                href="https://www.linkedin.com/in/andrés-c-bb752a178"
              >
                <LogosLinkedinIcon className="text-4xl"/>
              </a>
            </div>
          </div>
        </article>
        <div className="flex justify-center h-[347px] md:h-[462px] md:w-[322px]">
          <CatImage />
        </div>
      </div>
      <MaterialSymbolsArrowCircleDownOutlineRounded className="absolute hidden md:block bottom-0 animate-bounce text-5xl text-green-700 dark:text-red-900" />
    </section>
  )
}
