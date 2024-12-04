"use client";

import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

type CarouselProps = {
  images: StaticImageData[];
};

const ImageCarousel: React.FC<CarouselProps> = ({ images }) => {
  const [visibleImages, setVisibleImages] = useState<StaticImageData[]>([]);
  const [fadeIndex, setFadeIndex] = useState<number | null>(null);

  useEffect(() => {
    // Inicializa las primeras 5 imágenes visibles
    setVisibleImages(images.slice(0, 5));

    const interval = setInterval(() => {
      setVisibleImages((prevImages) => {
        const nextIndex =
          (images.indexOf(prevImages[prevImages.length - 1]) + 1) % images.length;

        // Activa la animación fadeIn en la última imagen nueva
        setFadeIndex(4);

        // Remueve la primera imagen y añade la siguiente al final
        const updatedImages = [...prevImages.slice(1), images[nextIndex]];

        // Desactiva la animación después de un tiempo corto
        setTimeout(() => setFadeIndex(null), 1500);

        return updatedImages;
      });
    }, 1500); // Intervalo de 1.5 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, [images]);

  return (
    <div className="relative flex overflow-hidden w-full justify-between ">
      {visibleImages.map((image, index) => (
        <div
          key={index}
          className={`bg-white rounded-[0.5vw] aspect-[3/4] w-[calc((100%-2vw)/5)] flex-shrink-0 transition-transform duration-500 ease-in-out 
            ${ fadeIndex === index ? "animate-" : ""  }`
          }
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