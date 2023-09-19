import { prisma } from "@/config/prisma";

export async function getProjects() {
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
}