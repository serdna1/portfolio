import { Prisma } from '@prisma/client'
import { getProjects } from './lib/projects'

export type CardProjectWithIdType = Prisma.PromiseReturnType<typeof getProjects>[0]

export type CardProjectType = Omit<CardProjectWithIdType, 'id'>;
