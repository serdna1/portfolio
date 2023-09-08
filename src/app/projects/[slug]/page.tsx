import { projects } from '@/projects.json'
import { ReactResponsiveCarousel } from './components/rrc'
import { FillAnchor } from '@/app/components/fill-anchor'

export default function ProjectDetails({ params }: { params: { slug: string } }) {

  const project = projects.find(project => project.slug === params.slug)

  return (
    <main className='pt-20 lg:pt-32 bg-white dark:bg-black min-h-screen flex justify-center'>
      <div className='flex justify-center items-center lg:items-start gap-4 lg:gap-20 flex-col lg:flex-row pb-10 max-w-6xl lg:px-2'>
        { 
          project?.screenshots &&
            <ReactResponsiveCarousel images={project.screenshots} />
        }
        <article className="px-2 lg:px-0 lg:max-w-lg">
          <h1 className="text-4xl text-green-600 dark:text-red-800 font-semibold mb-8">
            {project?.name}
          </h1>
          <p className="mb-8 whitespace-pre-wrap">
            {project?.longDeascription}
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            {
              project?.technologies.map(technology => (
                <div 
                  key={technology}
                  className="bg-gray-200 py-1 px-4 rounded-full dark:text-black"
                >
                  {technology}
                </div>
              ))
            }
          </div>
          <div className="flex flex-col gap-2">
          {
            project?.deployUrl &&
              <FillAnchor
                href={project?.deployUrl}
                target="_blank"
                rel="noopener noreferrer"
                text="Visitar"
                anchorClasses="border-[1px] border-black dark:border-white py-2"
              />
          }
          {
            project?.repoUrl &&
              <FillAnchor
                href={project?.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                text="Repositorio"
                anchorClasses="border-[1px] border-black dark:border-white py-2"
              />
          }
          </div>
        </article>
      </div>
    </main>
  )  
}

export async function generateStaticParams() {
  
  return projects.map((project) => ({
    slug: project.slug,
  }))
}