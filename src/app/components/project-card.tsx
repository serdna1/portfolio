import { technologyIcons } from "@/app/components/icons"
import type { CardProjectType } from "@/types"
import { FillAnchor } from "./fill-anchor"

export const ProjectCard = ({thumbnailURL, name, description, technologies, deployURL, repoURL, slug}: CardProjectType) => {

  const anchorClasses="border-[1px] border-black dark:border-white lg:border-white lg:text-white lg:hover:text-black dark:lg:hover:text-white py-2 lg:transition-colors lg:duration-[400ms] lg:ease-out"

  return (
    <article className='group lg:relative border-[1px] border-[#eaeaeaff] dark:border-[#333333ff] rounded-xl overflow-hidden bg-white dark:bg-black shadow hover:shadow-lg dark:shadow-white/10'>
      <a href={`/projects/${slug}`}>
        <img
          src={thumbnailURL}
          alt="project screenshot"
          className='aspect-square object-cover lg:group-hover:grayscale'
        />
      </a>
      <section className='lg:bg-black/70 lg:absolute lg:top-0 w-full lg:h-full lg:hidden lg:group-hover:flex flex flex-col justify-center text-center p-2 gap-4'>
        <div className='flex flex-col justify-center grow gap-4'>
          <header className='text-black dark:text-white lg:text-white text-3xl font-semibold'>
            {name}
          </header>
          <p className='text-black dark:text-white lg:text-white'>
            {description}
          </p>
          <div className='flex justify-center gap-2 text-3xl'>
            {
              technologies.map((technology) => (
                <div
                  key={technology.name}
                  title={technology.name}
                  className="lg:text-white"
                >
                  {
                    (technologyIcons as any)[technology.name]
                  }
                </div>
              ))
            }
          </div>
        </div>
        <div className='flex gap-1 flex-col justify-end'>
          {
            deployURL &&
              <FillAnchor
                href={deployURL}
                target="_blank"
                rel="noopener noreferrer"
                text="Visitar"
                anchorClasses={anchorClasses}
              />
          }
          {
            repoURL &&
              <FillAnchor
                href={repoURL}
                target="_blank"
                rel="noopener noreferrer"
                text="Repositorio"
                anchorClasses={anchorClasses}
              />
          }
          <FillAnchor
            href={`/projects/${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            text="Detalles"
            anchorClasses={anchorClasses}
          />
        </div>
      </section>
    </article>
  )
}
