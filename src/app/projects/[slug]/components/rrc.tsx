"use client"

import { Carousel } from 'react-responsive-carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import './rrc.css'

export const ReactResponsiveCarousel = ({images}: {images: string[]}) => {

  return (
    <Carousel 
      autoPlay 
      interval={3000}
      infiniteLoop
      className='lg:w-1/2'
    >
      {
        images.map(image => (
          <div 
            key={image}
            className="h-auto w-full bg-[#dbdbdb] dark:bg-[#111111ff] "
          >
              <img 
                src={image}
                className="object-contain h-full aspect-video"
                />
          </div>
        ))
      }
    </Carousel>
  )
}
