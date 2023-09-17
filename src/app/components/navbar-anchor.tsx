interface NavbarAnchorPropTypes {
  content: string,
  href: string,
  handleClick?: (e: React.MouseEvent<HTMLAnchorElement> | undefined) => void,
}

export const NavbarAnchor = ({content, href, handleClick}: NavbarAnchorPropTypes) => {
  return (
    <a
      onClick={handleClick}
      href={href}
      className="flex items-center dark:hover:bg-red-600/70 hover:bg-green-400/70 h-full w-full lg:w-auto px-10 text-2xl font-semibold py-5 justify-center"
    >
        {content}
    </a>
  )
}
