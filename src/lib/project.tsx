import { prisma } from "@/config/prisma";

export async function getProject({slug}: {slug: string}) {
  try{
    const project = await prisma.project.findUnique({
      where: {
        slug
      },
      select: {
        name: true,
        carousel: {
          select: {
            url: true,
          }
        },
        technologies: {
          select: {
            name: true,
          }
        },
        deployURL: true,
        repoURL: true,
        longDescription: true,
      }
    })
    
    return project
  } catch (error) {
    console.log(error)
  }
}