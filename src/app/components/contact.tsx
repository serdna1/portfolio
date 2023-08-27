import { Form } from "./form"
import { LogosGithubIcon, LogosGoogleGmail, LogosLinkedinIcon } from "./icons"

export const Contact = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-yellow-300 to-green-400 py-10">
      <h1 className="text-5xl font-bold">Contacto</h1>
      <div className="mt-10 md:mt-52 flex gap-16 max-w-5xl w-full px-2 flex-wrap flex-col-reverse md:flex-row">
        <article>
          <h3 className="text-lg font-semibold">
            Encuéntrame
          </h3>
          <hr  className="border-black mb-2"/>
          <a
            href="mailto:andres.campana.otero@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className='group hover:underline hover:text-red-500 inline-block'
          >
            <div className="flex gap-1 items-center">
              <div className="w-6">
                <LogosGoogleGmail className="grayscale group-hover:grayscale-0"/>
              </div>
              andres.campana.otero@gmail.com
            </div>
          </a>
          <br />
          <a
            href="https://github.com/serdna1"
            target="_blank"
            rel="noopener noreferrer"
            className='group hover:underline inline-block'
          >
            <div className="flex gap-1 items-center">
              <div className="w-6">
                <LogosGithubIcon className="grayscale group-hover:grayscale-0"/>
              </div>
              serdna1
            </div>
          </a>
          <br />
          <a
            href="https://www.linkedin.com/in/serdna1/"
            target="_blank"
            rel="noopener noreferrer"
            className='group hover:underline hover:text-blue-600 inline-block'
          >
            <div className="flex gap-1 items-center">
              <div className="w-6">
                <LogosLinkedinIcon className="grayscale group-hover:grayscale-0"/>
              </div>
              serdna1
            </div>
          </a>
        </article>
        <Form />
      </div>
    </section>
  )
}
