import { NextResponse } from "next/server"
import { conn } from "@/config/mysql"

export async function GET() {
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

    return NextResponse.json(results)
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
