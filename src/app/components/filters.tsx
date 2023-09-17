import { TechnologyBtn } from "./technology-btn";

export const Filters = ({uniqueTechnologies}: {uniqueTechnologies: string[]}) => {
  
  return (
    <section className="flex justify-center gap-4 max-w-4xl flex-wrap items-center">
      {
        uniqueTechnologies.map((technology) => (
          <TechnologyBtn key={technology} technology={technology} />
        ))
      }
    </section>
  )
}
