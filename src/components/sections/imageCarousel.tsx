"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
    }, 1500); // Intervalo de 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, [images]);

  return (
    <div className="relative flex overflow-hidden w-full justify-between">
      {visibleImages.map((image, index) => (
        <motion.div
          key={index}
          className={`bg-white rounded-[0.5vw] aspect-[3/4] w-[calc((100%-2vw)/5)] flex-shrink-0 border border-[#191919]`}
          initial={fadeIndex === index ? { opacity: 0, scale: 0.8, y: 50 } : false}
          animate={fadeIndex === index ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <Image
            src={image}
            alt={`Carousel Image ${index}`}
            className="object-cover w-full h-full rounded-[0.5vw] scale-[1.01]"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default ImageCarousel;