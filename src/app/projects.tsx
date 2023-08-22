import type { ProjectType } from '@/types'
import { projects } from '@/projects.json'
import { technologies } from './icons'

export const Projects = () => {
  return (
    <section className="flex flex-col gap-6 py-10 px-2 pt-10 bg-pink-200">
      <h1 className="text-5xl font-bold text-center">Proyectos</h1>
      <p>filtros</p>
      <section className='grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-2'>
        {
          (projects as ProjectType[]).map((project) => (
            <article
              key={project.id}
              className='group relative hover:scale-105 hover:z-10'
            >
              <img
                src={project.screenshot}
                alt="project screenshot"
                className='aspect-square object-cover group-hover:grayscale'
              />
              <section className='bg-black/70 absolute top-0 w-full h-full hidden group-hover:flex flex-col justify-center text-center p-2 gap-4'>
                <div className='flex flex-col justify-center grow gap-4'>
                  <header className='text-white text-xl font-semibold'>
                    {project.name}
                  </header>
                  <p className='text-white'>
                    {project.description}
                  </p>
                  <div className='flex justify-center gap-2 text-3xl'>
                    {
                      project.technologies.map((technology) => (
                        <div key={technology} title={technology}>
                          {
                            (technologies as any)[technology]
                          }
                        </div>
                      ))
                    }
                  </div>
                </div>
                <div className='flex gap-1 flex-col justify-end'>
                  {
                    project.deploy_url &&
                      <a
                        href={project.deploy_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='bg-green-400 hover:bg-opacity-90 hover:font-bold rounded-lg py-2'
                      >
                        Visitar
                      </a>
                  }
                  {
                    project.repo_url &&
                      <a
                        href={project.repo_url}
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
          ))
        }
      </section>
    </section>
  )
}
