"use client";

import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface CardProps {
  id: number;
  title: string;
  properties: string[];
  image: StaticImageData;
  index: number | null;
  prevIndex: number | null;
//   direction: "increasing" | "decreasing" | "none"; // Añadido
  onClick: () => void;
}

// const getDirection = (
//   currentIndex: number | null,
//   previousIndex: number | null
// ): "increasing" | "decreasing" | "none" => {
//   if (previousIndex === null) {
//     return "none";
//   }
//   if (currentIndex! > previousIndex) {
//     return "increasing";
//   } else if (currentIndex! < previousIndex) {
//     return "decreasing";
//   } else {
//     return "none";
//   }
// };

const KeyIndustriesCard: React.FC<CardProps> = ({
  id,
  title,
  image,
  properties,
  index,
  prevIndex,
  onClick,
}) => {
  const isActive = id === index;
  const isPrevActive = id === prevIndex;

  // Obtener la dirección del cambio
//   const direction = getDirection(index, prevIndex);

  // Ajustar el origen de la transformación basado en la dirección
//   const transformOrigin =
//     direction === "increasing"
//       ? "left center"
//       : direction === "decreasing"
//       ? "right center"
//       : "center center";

  // Determinar el origen de transformación para la salida (inverso)
//   const exitTransformOrigin =
//     transformOrigin === "left center"
//       ? "right center"
//       : transformOrigin === "right center"
//       ? "left center"
//       : "center center";

//   const overlayVariants = {
//     hidden: {
//       scaleX: 0,
//       scaleY: 0,
//       opacity: 0,
//       transformOrigin,
//     //   borderRadius: "9999px",
//     },
//     visible: {
//       scaleX: 1,
//       scaleY: 1,
//       opacity: 1,
//       transformOrigin,
//     //   borderRadius: "0px",
//     },
//     exit: {
//       scaleX: 0,
//       scaleY: 0,
//       opacity: 0,
//       transformOrigin: exitTransformOrigin,
//     //   borderRadius: "9999px",
//     },
//   };
  return (
    <div
      key={id}
      className="relative overflow-hidden bg-black rounded-3xl cursor-pointer"
      style={{
        aspectRatio: "3 / 4",
        maxHeight: "70vh",
      }}
      onClick={onClick}
    >
      <Image
        src={image}
        alt={`${title} category`}
        fill
        // className={`object-cover transition-opacity duration-300 `}
        className={`object-cover transition-opacity duration-300 ${
          isActive ? "opacity-40 " : isPrevActive ? "opacity-70" : "opacity-100"
        }`}
        style={{
          objectFit: "contain",
          maxWidth: "100%",
          maxHeight: "100%",
        }}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />

      {/* <AnimatePresence> */}
        {/* {isActive && (
          <motion.div
            key={`overlay-${id}`}
            className="absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-300 blur-sm"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          />
        )} */}
      {/* </AnimatePresence> */}

      <div
        className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black ${
          isActive ? "opacity-100" : "opacity-90"
        }`}
      />
      <div className="absolute inset-0 p-[2vw] flex flex-col justify-between">
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ delay: 0., duration: .5, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <p className="text-xs md:text-sm font-favoritRegular tracking-wider mb-[2vw]">
                Ayudamos a:
              </p>
              {properties.map((property, idx) => (
                <p
                  key={idx}
                  className="text-sm md:text-base font-favoritMedium tracking-tight leading-none my-[1vw]"
                >
                  {property}
                </p>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {!isActive && <div />}

        <motion.div
          animate={{
            color: isActive ? "#ef4444" : "#ffffff",
            scale: isActive ? 1.1 : 1,
          }}
          transition={{ duration: 0.3 }}
          className="text-sm md:text-base font-favorite-favoritMedium tracking-wider text-center leading-tight"
        >
          • {title} •
        </motion.div>
      </div>
    </div>
  );
};

export default KeyIndustriesCard;
