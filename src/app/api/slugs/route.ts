import { NextResponse } from "next/server"
import { conn } from "@/config/mysql"

export async function GET() {
  try {
    let results = await conn.query('SELECT slug FROM projects')

    results = Object.values(JSON.parse(JSON.stringify(results)))

    results = (results as any[]).map(result => (
      result.slug
    ))

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
