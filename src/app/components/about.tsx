import { LogosGoogleGmail, LogosGithubIcon, LogosLinkedinIcon, MaterialSymbolsArrowCircleDownOutlineRounded } from "@/app/components/icons"

export const About = () => {
  return (
    <section className="min-h-screen px-2 md:px-16 grid place-items-center bg-slate-300">
      <div className="flex flex-wrap-reverse gap-6 md:gap-24 flex-col-reverse md:flex-row items-center justify-center max-w-4xl">
        <div className="max-w-xl">
          <h1 className="text-5xl font-bold">
            Hola, soy Andrés
          </h1>
          <h2 className="text-green-600 mt-2 text-4xl font-bold">
            Desarrollador Front-End
          </h2>
          <p className="mt-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor nobis recusandae tempora nemo aut culpa iure incidunt quibusdam dicta mollitia. Optio doloremque culpa nemo eos, dolorem debitis pariatur consectetur error?
          </p>
          <div className="mt-6 flex items-center gap-6">
            <a 
              className="border-2 border-black group relative overflow-hidden block w-fit p-4 rounded-full font-bold text-center"
              href="/cv.pdf"
              download="andres_otero_cv.pdf"
            >
              <div className="absolute inset-0 w-0 bg-green-400 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative">Descargar CV</span>
            </a>
            <a 
              className="grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
              href="mailto:andres.campana.otero@gmail.com"
            >
              <LogosGoogleGmail className="text-4xl"/>
            </a>
            <a 
              className="grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
              href="https://github.com/serdna1"
            >
              <LogosGithubIcon className="text-4xl"/>
            </a>
            <a 
              className="grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
              href="https://www.linkedin.com/in/andrés-c-bb752a178"
            >
              <LogosLinkedinIcon className="text-4xl"/>
            </a>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <img 
            src="/luna.webp"
            alt="Luna cat from Sailor Moon"
            className="w-36 md:w-48"
          />
        </div>
      </div>
      <MaterialSymbolsArrowCircleDownOutlineRounded className="absolute hidden md:block bottom-0 animate-bounce text-5xl text-green-700" />
    </section>
  )
}
