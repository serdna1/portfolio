"use client"

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export const ReactResponsiveCarousel = ({images}: {images: string[]}) => {

  return (
    <Carousel 
      autoPlay 
      interval={3000}
      infiniteLoop
    >
      {
        images.map(image => (
          <div 
            key={image}
            className="h-auto w-full bg-black"
          >
              <img 
                src={`/${image}`}
                className="object-contain h-full aspect-video"
                />
          </div>
        ))
      }
    </Carousel>
  )
}
