import image1 from '../assets/images/image1.jpg'
import image2 from '../assets/images/image2.jpg'
import image3 from '../assets/images/image3.jpg'
import image4 from '../assets/images/image4.jpg'
import image5 from '../assets/images/image5.jpg'
import image6 from '../assets/images/image6.jpg'
import image7 from '../assets/images/image7.jpg'
import image8 from '../assets/images/image8.jpg'
import image9 from '../assets/images/image9.jpg'
import image10 from '../assets/images/image10.jpg'
import { useState, useEffect } from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const ImageCarousel = () => {
  //Auto slide carousel
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image2, image1, image3, image4, image5, image6, image7, image8, image9, image10];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="overflow-hidden pointer-events-none">
      {/* Wide Screen Carousel  */}
      <div className='lg:flex hidden'>
        <Carousel>
          <CarouselContent
            style={{
              transform: `translateX(-${currentIndex * 550}px)`,
              transition: "transform 1s ease-in-out",
            }}
            className="flex w-[550px]"
          >
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className={`flex items-center justify-center`}
              >
                <img className="rounded-[7rem]" width={'550px'} src={image} alt={`carousel-${index}`} />
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
              transform: `translateX(-${currentIndex * 310}px)`,
              transition: "transform 1s ease-in-out",
            }}
            className="flex"
          >
            {images.map((image, index) => (
              <CarouselItem
                key={index}
                className={`flex items-center justify-center basis-1/3`}
              >
                <img className="lg:rounded-[7rem]" src={image} alt={`carousel-${index}`} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}

export default ImageCarousel