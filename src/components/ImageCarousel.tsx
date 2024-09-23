import image1 from '../assets/images/tst.jpg'
import image2 from '../assets/images/test2.jpg'
import image3 from '../assets/images/test3.jpg'
import image4 from '../assets/images/test4.jpg'
import image5 from '../assets/images/test5.jpg'
import image6 from '../assets/images/test6.jpg'
import { useState, useEffect } from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const ImageCarousel = () => {
  //Auto slide carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image6, image4, image1, image3, image2, image5];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="overflow-hidden pointer-events-none w-screen h-screen">
      {/* Wide Screen Carousel  */}
      <div className='lg:flex hidden'>
        <Carousel>
          <CarouselContent
            style={{
              transform: `translateX(-${currentIndex * 1920}px)`,
              transition: "transform 1s ease-in-out",
            }}
            className="flex w-[1920px] h-[1080px]"
          >
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className={`flex items-center justify-center`}
              >
                <img
                  className="object-cover"
                  style={{ filter: 'brightness(0.5)'}}
                  src={image}
                  alt={`carousel-${index}`}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Mobile Carousel */}
      <div className='pt-12 lg:hidden flex items-center justify-center'>
        <Carousel>
          <CarouselContent
            style={{
              transform: `translateX(-${currentIndex * 600}px)`,
              transition: "transform 1s ease-in-out",
            }}
            className="flex w-[1920px] h-screen"
          >
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className={`flex items-center justify-center`}
              >
                <img
                  className="w-full object-cover h-screen"
                  style={{ filter: 'brightness(0.5)'}}
                  src={image}
                  alt={`carousel-${index}`}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}

export default ImageCarousel