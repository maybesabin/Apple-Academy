import image1 from '../assets/images/tst.jpg'
import image2 from '../assets/images/test2.jpg'
import image3 from '../assets/images/test3.jpg'
import image4 from '../assets/images/test4.jpg'
import image5 from '../assets/images/test5.jpg'
import image6 from '../assets/images/test6.jpg'
import { useState, useEffect } from 'react'

// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
// } from "@/components/ui/carousel"

const ImageCarousel = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image6, image4, image1, image3, image2, image5];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000); // Change image every 6 seconds
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
        >
          <img
            src={image}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover filter brightness-50"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;