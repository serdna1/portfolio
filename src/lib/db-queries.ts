import { conn } from "@/config/mysql"
import { CardProjectWithIdType, DetailsProjectType } from "@/types"

export async function getProjects() {
  try {
    let results = await conn.query(`
      SELECT projects.project_id, slug, project_name, project_description, deploy_url, repo_url, screenshots.url
      FROM projects
      JOIN screenshots ON projects.thumbnail_id = screenshots.screenshot_id
    `)

    results = Object.values(JSON.parse(JSON.stringify(results)))

    results = (results as any[]).map( async result => {
      let technologies = await conn.query(`
        SELECT technology_name
        FROM project_technologies
        JOIN technologies ON project_technologies.technology_id = technologies.technology_id
        WHERE project_id = ?
      `, [result.project_id])

      technologies = Object.values(JSON.parse(JSON.stringify(technologies)))

      technologies = (technologies as any[]).map(technology => (
        technology.technology_name
      ))

      return {
        ...result,
        technologies: technologies
      }
    })

    results = await Promise.all(results as any)

    const projects: CardProjectWithIdType[] = (results as any[]).map(result => ({
      id: result.project_id,
      thumbnail: result.url,
      name: result.project_name,
      description: result.project_description,
      technologies: result.technologies,
      deployUrl: result.deploy_url,
      repoUrl: result.repo_url,
      slug: result.slug
    }))

    return projects
  } catch (error: any) {
    console.log(error)
    
    return []
  }
}

export async function getProject({slug}: {slug: string}) {
  try {
    let result: any = await conn.query(`
      SELECT project_id, project_name, deploy_url, repo_url, long_description
      FROM projects
      WHERE slug = ?
    `, [slug])
    result = Object.values(JSON.parse(JSON.stringify(result)))[0]

    let technologies = await conn.query(`
      SELECT technology_name
      FROM project_technologies
      JOIN technologies ON project_technologies.technology_id = technologies.technology_id
      WHERE project_id = ?
    `, [result.project_id])
    technologies = Object.values(JSON.parse(JSON.stringify(technologies)))
    technologies = (technologies as any[]).map(technology => (
      technology.technology_name
    ))
    result = {
      ...result,
      technologies: technologies
    }
    
    let carouselScreenshots = await conn.query(`
      SELECT url
      FROM project_carousel_screenshots
      JOIN screenshots ON project_carousel_screenshots.screenshot_id = screenshots.screenshot_id
      WHERE project_id = ?
    `, [result.project_id])
    carouselScreenshots = Object.values(JSON.parse(JSON.stringify(carouselScreenshots)))
    carouselScreenshots = (carouselScreenshots as any[]).map(screenshot => (
      screenshot.url
    ))
    result = {
      ...result,
      carouselScreenshots: carouselScreenshots
    }

    const project: DetailsProjectType = {
      name: result.project_name,
      carouselScreenshots: result.carouselScreenshots,
      technologies: result.technologies,
      deployUrl: result.deploy_url,
      repoUrl: result.repo_url,
      longDescription: result.long_description
    }

    return project
  } catch (error: any) {
    console.log(error)

    return undefined
  }
}