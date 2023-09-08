import { AnchorHTMLAttributes } from "react"

interface FillAnchorPropTypes extends AnchorHTMLAttributes<HTMLAnchorElement> {
  text: string,
  fillDuration?: number,
  anchorClasses: string,
}

export const FillAnchor = ({ text, anchorClasses, fillDuration, ...props }: FillAnchorPropTypes) => {
  return (
    <a 
    {...props}
    className={`group/fill-anchor relative overflow-hidden rounded-full font-semibold text-center w-full ${anchorClasses}`}
    >
      <div className={`absolute inset-0 w-full lg:w-0 bg-green-400 dark:bg-red-600 lg:transition-all lg:duration-[${fillDuration || '400'}ms] lg:ease-out lg:group-hover/fill-anchor:w-full`}></div>
      <span className="relative">{text}</span>
    </a>
  )
}
