import type { ProjectType } from '@/types'
import { projects } from '@/projects.json'
import { ProjectCard } from './project-card'

export const Projects = () => {
  return (
    <section className="flex flex-col gap-6 py-10 px-2 pt-10 bg-pink-200">
      <h1 className="text-5xl font-bold text-center">Proyectos</h1>
      <p>filtros</p>
      <section className='grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] gap-2'>
        {
          (projects as ProjectType[]).map((project) => (
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
