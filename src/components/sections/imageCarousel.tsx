"use client";

import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

type CarouselProps = {
  images: StaticImageData[];
};

const ImageCarousel: React.FC<CarouselProps> = ({ images }) => {
  const [visibleImages, setVisibleImages] = useState<StaticImageData[]>([]);

  useEffect(() => {
    // Inicializa las primeras 5 imágenes visibles
    setVisibleImages(images.slice(0, 5));

    const interval = setInterval(() => {
      setVisibleImages((prevImages) => {
        // Remueve la primera imagen y añade la siguiente al final
        const nextIndex =
          (images.indexOf(prevImages[prevImages.length - 1]) + 1) % images.length;
        return [...prevImages.slice(1), images[nextIndex]];
      });
    }, 1500); // Intervalo de 1.5 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, [images]);

  return (
    <div className="relative flex overflow-hidden w-full  justify-between">
      {visibleImages.map((image, index) => (
        <div
          key={index}
          className="bg-white rounded-[0.5vw] aspect-[3/4] w-[calc((100%-2vw)/5)] flex-shrink-0 transition-transform duration-500 ease-in-out"
        >
          <Image
            src={image}
            alt={`Carousel Image ${index}`}
            className="object-cover w-full h-full rounded-[0.5vw]"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageCarousel;