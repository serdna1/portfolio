import { technologyIcons } from "@/app/components/icons"
import type { ProjectCardPropType } from "@/types"

export const ProjectCard = ({screenshot, name, description, technologies, deployUrl, repoUrl, slug}: ProjectCardPropType) => {
  return (
    <article className='group lg:relative'>
      <img
        src={screenshot}
        alt="project screenshot"
        className='aspect-square object-cover lg:group-hover:grayscale'
      />
      <section className='lg:bg-black/70 lg:absolute lg:top-0 w-full lg:h-full lg:hidden lg:group-hover:flex flex flex-col justify-center text-center p-2 gap-4'>
        <div className='flex flex-col justify-center grow gap-4'>
          <header className='text-black lg:text-white text-xl font-semibold'>
            {name}
          </header>
          <p className='text-black lg:text-white'>
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
                className='bg-green-400 hover:bg-green-500 dark:bg-red-600 dark:hover:bg-red-700 rounded-lg py-2'
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
                className='bg-green-400 hover:bg-green-500 dark:bg-red-600 dark:hover:bg-red-700 rounded-lg py-2'
              >
                Repositorio
              </a>
          }
          <a
            href={`/projects/${slug}`}
            className='bg-green-400 hover:bg-green-500 dark:bg-red-600 dark:hover:bg-red-700 rounded-lg py-2'
          >
            Detalles
          </a>
        </div>
      </section>
    </article>
  )
}
