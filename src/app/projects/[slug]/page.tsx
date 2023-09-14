import { getHost } from '@/config/config'
import { ReactResponsiveCarousel } from './components/rrc'
import { FillAnchor } from '@/app/components/fill-anchor'
import { DetailsProjectType } from '@/types'

async function getProject({slug}: {slug: string}) {
  const res = await fetch(`${getHost()}/api/projects/${slug}`, { cache: 'no-store' })
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const json = await res.json()

  const project = {
    name: json.project_name,
    carouselScreenshots: json.carouselScreenshots,
    technologies: json.technologies,
    deployUrl: json.deploy_url,
    repoUrl: json.repo_url,
    longDescription: json.long_description
  }
 
  return project
}

async function getSlugs() {
  const res = await fetch(`${getHost()}/api/slugs`, { cache: 'no-store' })
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  const json = await res.json()
 
  return json
}

export default async function ProjectDetails({ params }: { params: { slug: string } }) {

  const project: DetailsProjectType = await getProject({slug: params.slug})

  return (
    <main className='pt-20 lg:pt-32 bg-white dark:bg-black min-h-screen flex justify-center'>
      <div className='flex justify-center items-center lg:items-start gap-4 lg:gap-20 flex-col lg:flex-row pb-10 max-w-6xl lg:px-2'>
        { 
          project?.carouselScreenshots &&
            <ReactResponsiveCarousel images={project.carouselScreenshots} />
        }
        <article className="px-2 lg:px-0 w-full lg:w-1/2">
          <h1 className="text-4xl text-green-600 dark:text-red-800 font-semibold mb-8">
            {project?.name}
          </h1>
          <p className="mb-8 whitespace-pre-wrap">
            {project?.longDescription}
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

  const slugs: string[] = await getSlugs()
  
  return slugs.map(slug => ({
    slug,
  }))
}