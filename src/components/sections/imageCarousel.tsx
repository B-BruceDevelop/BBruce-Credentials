"use client";

import { useState, useEffect, useRef } from "react";
import Image, { type StaticImageData } from "next/image";

type CarouselProps = {
  images: StaticImageData[];
};

const ImageCarousel = ({ images }: CarouselProps) => {
  const imagesPerView = 5; // Número de imágenes visibles
  const containerRef = useRef<HTMLDivElement>(null);
  const [carouselImages, setCarouselImages] = useState<StaticImageData[]>(images);

  useEffect(() => {
    const interval = setInterval(() => {
      // Mover la primera imagen al final del array
      setCarouselImages((prevImages) => {
        const updatedImages = [...prevImages];
        const firstImage = updatedImages.shift(); // Eliminar la primera imagen
        if (firstImage) updatedImages.push(firstImage); // Agregarla al final
        return updatedImages;
      });
    }, 1500); // Cambiar imagen cada 2 segundos

    return () => clearInterval(interval);
  }, []);

  if (!Array.isArray(images) || images.length === 0) {
    return <div>No images to display</div>;
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
      <div
        ref={containerRef}
        className="flex transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${100 / imagesPerView}%)`, // Mover una posición por iteración
        }}
      >
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[calc(100%/5)] p-[0.25vw]"
          >
            <div className="relative w-full pb-[150%]">
              <Image
                src={image || "/placeholder.svg"}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;