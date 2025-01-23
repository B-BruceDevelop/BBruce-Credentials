"use client";

import React from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

type StickyNotesProps = {
  currentIndex: number;
  workImages: StaticImageData[];
};

const BigImageCarrousel: React.FC<StickyNotesProps> = ({ currentIndex, workImages }) => {
  return (
    <div className="relative w-full h-full">
      {workImages.map((image, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: index === currentIndex ? 1 : 0 }}
          animate={{ opacity: index === currentIndex ? 1 : 0 }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{ pointerEvents: index === currentIndex ? "auto" : "none" }} // Evita que las imágenes ocultas bloqueen la interacción
        >
          <Image
            src={image}
            alt={`Trabajo ${index + 1}`}
            fill
            sizes="w-full h-full"
            className="object-cover rounded-[1vw]"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default BigImageCarrousel;