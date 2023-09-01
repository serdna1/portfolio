import { projects } from '@/projects.json'
import { TechnologyBtn } from "./technology-btn";

const uniqueTechnologies: string[] = [
  'All Technologies',
  ...new Set(projects.map(p => p.technologies).flat())
]

export const Filters = () => {
  
  return (
    <section className="flex justify-center gap-4 max-w-lg flex-wrap items-center">
      {
        uniqueTechnologies.map((technology) => (
          <TechnologyBtn key={technology} technology={technology} />
        ))
      }
    </section>
  )
}
