import { email } from "@/config/config"
import { Form } from "./form"
import { LogosGithubIcon, LogosGoogleGmail, LogosLinkedinIcon } from "./icons"

export const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-black py-10"
    >
      <h1 className="text-5xl font-semibold">Contacto</h1>
      <div className="mt-10 md:mt-52 flex gap-16 max-w-5xl w-full px-2 flex-wrap flex-col-reverse md:flex-row">
        <article>
          <h3 className="text-lg font-semibold">
            Encuéntrame
          </h3>
          <hr  className="border-black dark:border-white mb-2"/>
          <a
            href={`mailto:${email}`}
            target="_blank"
            rel="noopener noreferrer"
            className='group hover:underline text-red-500 lg:text-inherit hover:text-red-500 inline-block'
          >
            <div className="flex gap-1 items-center">
              <div className="w-6">
                <LogosGoogleGmail className="grayscale-0 lg:grayscale group-hover:grayscale-0"/>
              </div>
              {email}
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
                <LogosGithubIcon className="grayscale-0 lg:grayscale group-hover:grayscale-0 dark:invert"/>
              </div>
              github.com/serdna1
            </div>
          </a>
          <br />
          <a
            href="https://www.linkedin.com/in/andres-otero-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className='group hover:underline text-blue-600 lg:text-inherit hover:text-blue-600 inline-block'
          >
            <div className="flex gap-1 items-center">
              <div className="w-6">
                <LogosLinkedinIcon className="grayscale-0 lg:grayscale group-hover:grayscale-0"/>
              </div>
              /in/andres-otero-dev/
            </div>
          </a>
        </article>
        <Form />
      </div>
    </section>
  )
}
