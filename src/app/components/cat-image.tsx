export const CatImage = () => {
  return (
    <>
      <img 
        src='/artemis.webp'
        alt='Artemis cat from Sailor Moon'
        className="hidden dark:inline h-full"
      />
      <img 
        src='/luna.webp'
        alt='Luna cat from Sailor Moon'
        className="dark:hidden inline h-full"
      />
    </>
  )
}
