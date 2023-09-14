import { NextResponse } from "next/server"
import { conn } from "@/config/mysql"

export async function GET(req: Request, {params}: {params: {slug: string}}) {
  try {
    let result: any = await conn.query(`
      SELECT project_id, project_name, deploy_url, repo_url, long_description
      FROM projects
      WHERE slug = ?
    `, [params.slug])
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

    return NextResponse.json(result)
  } catch (error: any) {
    console.log(error)

    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 500,
      }
    )
  }
}
