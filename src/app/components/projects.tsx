import type { ProjectType } from '@/types'
import { projects } from '@/projects.json'
import { ProjectCard } from './project-card'

export const Projects = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-10 md:gap-24 py-10 px-2 bg-gradient-to-bl from-pink-400 to-yellow-300 min-h-screen">
      <h1 className="text-5xl font-semibold">Proyectos</h1>
      <p>filtros</p>
      <section className='grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-2 w-full'>
        {
          (projects as ProjectType[]).splice(0,3).map((project) => (
            <ProjectCard 
              key={project.id}
              screenshot={project.screenshot}
              name={project.name}
              description={project.description}
              technologies={project.technologies}
              deployUrl={project.deployUrl}
              repoUrl={project.repoUrl}
            />
          ))
        }
      </section>
    </section>
  )
}
