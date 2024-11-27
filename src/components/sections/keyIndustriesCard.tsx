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
  onClick: () => void;
}



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
          {title}
        </motion.div>
      </div>
    </div>
  );
};

export default KeyIndustriesCard;
