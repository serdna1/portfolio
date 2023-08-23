import { technologyIcons } from "@/app/components/icons"
import type { ProjectCardPropType } from "@/types"

export const ProjectCard = ({screenshot, name, description, technologies, deployUrl, repoUrl}: ProjectCardPropType) => {
  return (
    <article className='group relative hover:scale-105 hover:z-10'>
      <img
        src={screenshot}
        alt="project screenshot"
        className='aspect-square object-cover group-hover:grayscale'
      />
      <section className='bg-black/70 absolute top-0 w-full h-full hidden group-hover:flex flex-col justify-center text-center p-2 gap-4'>
        <div className='flex flex-col justify-center grow gap-4'>
          <header className='text-white text-xl font-semibold'>
            {name}
          </header>
          <p className='text-white'>
            {description}
          </p>
          <div className='flex justify-center gap-2 text-3xl'>
            {
              technologies.map((technology) => (
                <div key={technology} title={technology}>
                  {
                    (technologyIcons as any)[technology]
                  }
                </div>
              ))
            }
          </div>
        </div>
        <div className='flex gap-1 flex-col justify-end'>
          {
            deployUrl &&
              <a
                href={deployUrl}
                target="_blank"
                rel="noopener noreferrer"
                className='bg-green-400 hover:bg-opacity-90 hover:font-bold rounded-lg py-2'
              >
                Visitar
              </a>
          }
          {
            repoUrl &&
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className='bg-green-400 hover:bg-opacity-90 hover:font-bold rounded-lg py-2'
              >
                Repositorio
              </a>
          }
          <a
            href=''
            className='bg-green-400 hover:bg-opacity-90 hover:font-bold rounded-lg py-2'
          >
            Detalles
          </a>
        </div>
      </section>
    </article>
  )
}
