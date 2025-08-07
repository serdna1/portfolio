import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('Starting seed...')

  // Create technologies first
  const html = await prisma.technology.create({
    data: { name: 'HTML' },
  })

  const css = await prisma.technology.create({
    data: { name: 'CSS' },
  })

  const javascript = await prisma.technology.create({
    data: { name: 'JavaScript' },
  })

  const react = await prisma.technology.create({
    data: { name: 'React' },
  })

  const tailwind = await prisma.technology.create({
    data: { name: 'Tailwind' },
  })

  const typescript = await prisma.technology.create({
    data: { name: 'TypeScript' },
  })

  const nextjs = await prisma.technology.create({
    data: { name: 'Next.js' },
  })

  const mysql = await prisma.technology.create({
    data: { name: 'MySQL' },
  })

  const planetscale = await prisma.technology.create({
    data: { name: 'PlanetScale' },
  })

  const prismaORM = await prisma.technology.create({
    data: { name: 'Prisma' },
  })

  const postgresql = await prisma.technology.create({
    data: { name: 'PostgreSQL' },
  })


  console.log('Created technologies')

  // Create projects first (without carousel images)
  // Project 1: Tutti Muvi
  const tuttiMuvi = await prisma.project.create({
    data: {
      slug: 'tutti-muvi',
      name: 'Tutti Muvi',
      description: 'Quiz de adivinar películas usando un conjunto de pistas',
      deployURL: 'https://tutti-muvi.vercel.app/',
      thumbnailURL: 'https://res.cloudinary.com/leprechaunotd/image/upload/v1694881576/portfolio/tutti-muvi-apocalypse-0.webp',
      longDescription: 'Se trata de adivinar la película secreta usando pistas en forma de cartas ocultas. Hay dos turnos, el de destapar pista y el de introducir la película, si no eres capaz de adivinarla podrás ver otra pista. Hay cinco: El póster borroso, director/a, actor/actriz principal, géneros y fecha de salida. Puedes pasar a la siguiente película en cualquier momento. Cuántas pistas necesitas para ganar?<br/><br/>No hace falta recordar el título completo ya que hay un buscador con autocompletado. Y, junto a aquel, se muestra el año de estreno.<br/><br/>Los datos de las películas los proporciona la api de TMDB, y para emborronar el póster se hace uso de Cloudinary.',
      technologies: {
        connect: [
          { id: html.id },
          { id: css.id },
          { id: javascript.id },
          { id: react.id }
        ]
      },
    },
  })

  // Project 2: Celebrity-Like
  const celebrityLike = await prisma.project.create({
    data: {
      slug: 'celebrity-like',
      name: 'Celebrity-Like',
      description: 'Detecta caras de celebridades en fotografías',
      deployURL: 'https://celebrity-like.vercel.app/',
      thumbnailURL: 'https://res.cloudinary.com/leprechaunotd/image/upload/v1694883489/portfolio/celebrity-like-coolio-0.webp',
      longDescription: 'Pon nombre a celebridades. Prueba a subir una imagen para detectar las caras que hay en ella. Las caras de los famosos se enmarcan en color verde y al pasar el ratón por encima del contorno (o pulsarlo en dispositivos táctiles) se puede ver su nombre.<br/><br/>La IA de detección de celebridades la proporciona un add-on de Cloudinary, recibe una imagen y devuelve las coordenadas de los contornos, sus dimensiones y los nombres de los famosos asociados a ellos (si lo son). Para implementar el drag-and-drop que sube las imágenes se usa Filepond.<br/><br/>Esta es mi propuesta para una hackathon que organizó Cloudinary en colaboración con el streamer @midudev.',
      technologies: {
        connect: [
          { id: html.id },
          { id: css.id },
          { id: javascript.id },
          { id: react.id }
        ]
      },
    },
  })

  // Project 3: Portfolio
  const portfolio = await prisma.project.create({
    data: {
      slug: 'portfolio',
      name: 'Portfolio',
      description: 'Mi portfolio',
      thumbnailURL: 'https://res.cloudinary.com/leprechaunotd/image/upload/v1695158105/portfolio/portfolio-about-0.webp',
      longDescription: 'Aquí podrás conocerme, acceder a los proyectos que he desarrollado y contactar conmigo.<br/><br/>Puede parecer un simple portfolio pero me ha permitido aprender muchos conceptos, empezando porque es la primera vez que uso muchas de las tecnologías con las que se implementó: Next.js, TypeScript, Tailwind, PlanetScale y Prisma. La versión de Next.js utilizada es la 13.5 (app directory), he sacado partido de los server components, el sistema de rutas, las api routes y de next/font. Prisma y PlanetScale se utilizaron para acceder y almacenar los datos de los proyectos, cuando cree uno nuevo sólo tengo que abrir Prisma Studio para agregar su info y, sin necesidad de cambiar ningún fichero de este proyecto, aparecerá su correspondiente card y se podrá acceder a su página de detalles.<br/><br/>Algunas características destacables de esta app son: su responsividad, tiene modo oscuro sin saltos de color y con sincronización entre pestañas (con la ayuda de next-themes), los proyectos se pueden filtrar por tecnología, el formulario de contacto se envía (con la ayuda de nodemailer) desde el server (api routes) y hay un toast con feedback del estado del envío (con la ayuda de sonner), en las páginas de detalles de un proyecto se hace uso del carousel de react-responsive-carousel (personalizado a gusto).',
      technologies: {
        connect: [
          { id: html.id },
          { id: tailwind.id },
          { id: typescript.id },
          { id: nextjs.id },
          { id: postgresql.id },
          { id: prismaORM.id },
        ]
      }
    },
  })

  console.log('Created projects')

  // Now create the carousel images with their project associations
  const screenshot1 = await prisma.image.create({
    data: {
      url: 'https://res.cloudinary.com/leprechaunotd/image/upload/v1694881576/portfolio/tutti-muvi-apocalypse-0.webp',
      projectId: tuttiMuvi.id
    },
  })

  const screenshot2 = await prisma.image.create({
    data: {
      url: 'https://res.cloudinary.com/leprechaunotd/image/upload/v1694881576/portfolio/tutti-muvi-apocalypse-1.webp',
      projectId: tuttiMuvi.id
    },
  })

  const screenshot3 = await prisma.image.create({
    data: {
      url: 'https://res.cloudinary.com/leprechaunotd/image/upload/v1694881576/portfolio/tutti-muvi-wonder-woman-0.webp',
      projectId: tuttiMuvi.id
    },
  })

  const screenshot4 = await prisma.image.create({
    data: {
      url: 'https://res.cloudinary.com/leprechaunotd/image/upload/v1694883489/portfolio/celebrity-like-coolio-0.webp',
      projectId: celebrityLike.id
    },
  })

  const screenshot5 = await prisma.image.create({
    data: {
      url: 'https://res.cloudinary.com/leprechaunotd/image/upload/v1694883948/portfolio/celebrity-like-rihanna-0.webp',
      projectId: celebrityLike.id
    },
  })

  const screenshot6 = await prisma.image.create({
    data: {
      url: 'https://res.cloudinary.com/leprechaunotd/image/upload/v1695158105/portfolio/portfolio-about-0.webp',
      projectId: portfolio.id
    },
  })

  const screenshot7 = await prisma.image.create({
    data: {
      url: 'https://res.cloudinary.com/leprechaunotd/image/upload/v1695158326/portfolio/portfolio-about-1.webp',
      projectId: portfolio.id
    },
  })

  const screenshot8 = await prisma.image.create({
    data: {
      url: 'https://res.cloudinary.com/leprechaunotd/image/upload/v1695245444/portfolio/portfolio-projects-0.webp',
      projectId: portfolio.id
    },
  })

  const screenshot9 = await prisma.image.create({
    data: {
      url: 'https://res.cloudinary.com/leprechaunotd/image/upload/v1695245530/portfolio/portfolio-projects-1.webp',
      projectId: portfolio.id
    },
  })

  const screenshot10 = await prisma.image.create({
    data: {
      url: 'https://res.cloudinary.com/leprechaunotd/image/upload/v1695245652/portfolio/portfolio-project-details-0.webp',
      projectId: portfolio.id
    },
  })

  const screenshot11 = await prisma.image.create({
    data: {
      url: 'https://res.cloudinary.com/leprechaunotd/image/upload/v1695245750/portfolio/portfolio-contact-0.webp',
      projectId: portfolio.id
    },
  })

  console.log('Created screenshots')
  console.log('Seeding completed successfully!')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error('Error during seeding:', e)
    await prisma.$disconnect()
    process.exit(1)
  })