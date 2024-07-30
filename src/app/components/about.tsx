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
            Software Engineer / Data Scientist
          </h2>
          <div className="mt-6 flex flex-col gap-4">
            <p>
              Apasionado autodidacta graduado en Ingeniería Informática. Mis dos intereses principales son el desarrollo de aplicaciones web y la experimentación con modelos de deep learning.
            </p>
            <p>
              Me considero una persona comunicativa, con iniciativa, versátil y perseverante. Participante en hackathones de desarrollo de aplicaciones y challenges de machine learning.
            </p>
          </div>
          <div className="mt-6 flex flex-wrap gap-6 items-center justify-center md:justify-normal">
            <FillAnchor
              href="/andres-otero-cv.pdf"
              download
              text="Descargar CV"
              anchorClasses="border-2 border-black dark:border-white md:w-52 p-4"
            />
            <div className="flex gap-6">
              <a 
                href={`mailto:${email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="grayscale-0 lg:grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
              >
                <LogosGoogleGmail className="text-4xl"/>
              </a>
              <a 
                href="https://github.com/serdna1"
                target="_blank"
                rel="noopener noreferrer"
                className="grayscale-0 lg:grayscale hover:grayscale-0 hover:scale-110 cursor-pointer dark:invert"
              >
                <LogosGithubIcon className="text-4xl"/>
              </a>
              <a 
                href="https://www.linkedin.com/in/andres-otero-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="grayscale-0 lg:grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
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
