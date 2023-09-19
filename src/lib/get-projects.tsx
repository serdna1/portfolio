import { cache } from 'react'
import { prisma } from "@/config/prisma"

export const revalidate = 0

export const getProjects = cache(async ()  => {
  try{
    const projects = await prisma.project.findMany({
      select: {
        id: true,
        thumbnailURL: true,
        name: true,
        description: true,
        technologies: {
          select: {
            name: true,
          }
        },
        deployURL: true,
        repoURL: true,
        slug: true
      }
    })
    
    return projects
  } catch (error) {
    console.log(error)

    return []
  }
})