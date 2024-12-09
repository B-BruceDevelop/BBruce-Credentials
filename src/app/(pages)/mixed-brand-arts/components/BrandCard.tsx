"use client";

import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface BrandCardProps {
  title: React.ReactNode;
  description: string;
  isExpanded: boolean;
  onClick: () => void;
  services?: string[];
  videoUrl?: string;
  anyExpanded: boolean;
  image?: StaticImageData;
  index: number;
  footer: string;
}

export default function BrandCard({
  title,
  description,
  isExpanded,
  onClick,
  services,
  videoUrl,
  anyExpanded,
  image,
  index,
  footer,
}: BrandCardProps) {
  return (
    <div
      className={cn(
        "relative transition-all duration-500 ease-in-out cursor-pointer",
        isExpanded ? "flex-[3]" : anyExpanded ? "flex-[0.4]" : "flex-1"
      )}
      onClick={onClick}
    >
      <div
        className={cn(
          "absolute inset-[1px] rounded-[2vw] bg-background",
          "before:absolute before:inset-0 before:rounded-[2vw] ",
          isExpanded
            ? "flex-[3]"
            : anyExpanded
            ? "flex-[0.4]"
            : "flex-1 before:border before:border-white"
        )}
      >
        <div className="h-full flex">
          {isExpanded ? (
            <>
              <div
                className={cn(
                  "flex flex-[0.4] flex-col max-w-[18vw] p-[1.5vw] border-r border-r-white/50 justify-between",
                  index !== 0 && "border-l border-l-white" // Aplica el borde izquierdo solo si no es la primera
                )}
              >
                {" "}
                <div className="flex justify-between items-start gap-[1vw]">
                  <h2 className="text-base font-favoritMedium tracking-tigh leading-none ">
                    {title}
                  </h2>
                  <button className="hidden md:block rounded-[2vw] bg-background border-[.5px] border-white p-[1vh] ">
                    <Minus className="h-[1.2vw] w-[2.6vw] text-white" />
                  </button>
                </div>
                {services && (
                  <div>
                    <p className="text-xs text-favoritMedium underline">
                      Services
                    </p>
                    <ul className="mt-2 space-y-[0.5vh] text-xs text-[#888888] overflow-y-scroll overflow-hidden-scroll">
                      {services.map((service, index) => (
                        <li
                          key={index}
                          className="hover:text-white transition-colors"
                        >
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              <div
                id="video-container"
                className="overflow-hidden-scroll flex flex-1 justify-end p-[1vw] rounded-[2vw] overflow-hidden"
              >
                {videoUrl && (
                  <video
                    className=" object-cover rounded-[1vw] aspect-16/9"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={videoUrl} type="video/mp4" />
                  </video>
                )}
              </div>
            </>
          ) : (
            <div
              className={cn(
                anyExpanded
                  ? index === 0
                    ? "flex-col w-full z-10" // Si es la primera, no aplica el borde izquierdo
                    : "flex-col w-full z-10 border-l border-white" // Si no es la primera, aplica el borde izquierdo
                  : "p-[1.5vw] flex flex-col h-full justify-between"
              )}
            >
              <div
                className={cn(
                  "flex items-start justify-between",
                  anyExpanded &&
                    "flex flex-col-reverse w-full h-full items-center pt-[1vw] z-10 "
                )}
              >
                <h2
                  className={cn(
                    " text-base font-favoritMedium tracking-tight transition-all duration-500 leading-none",
                    anyExpanded &&
                      "-rotate-90 origin-top-left translate-x-[2.5vw] whitespace-nowrap translate-y-[1.5vw] "
                  )}
                >
                  {title}
                </h2>
                <button className="rounded-[2vw] bg-white p-[1vh] ">
                  <Plus className="h-[1.2vw] w-[2.6vw] text-background" />
                </button>
              </div>
              {!anyExpanded && (
                <>
                  {image ? (




                 <div
                 className={cn(
                   "flex justify-center items-center mt-[2vw] p-[1vw] h-full w-full bg-[#272727] rounded-[1vw]",
                   index === 1 ? "overflow-visible relative" : "overflow-hidden"
                 )}
               >
                 <motion.div
                   animate={{
                     rotate: index === 3 ? 10 : 0, // Rota si el índice es 3, de lo contrario, no rota
                   }}
                   transition={{
                     duration: 0.5, // Duración de la animación
                     ease: "easeInOut", // Suaviza la transición
                   }}
                   className={cn(
                     "flex w-full h-full justify-center items-center",
                     index === 1
                       ? "absolute max-w-none h-[110%] w-[110%]" // Mantén el comportamiento para índice 1
                       : "max-w-full max-h-full" // Para otros índices
                   )}
                 >
                   <Image
                     src={image}
                     alt="Brand Image"
                     width={400}
                     height={400}
                     className={cn(
                       "object-contain animate-fadeInSmall",
                       index === 1
                         ? "absolute max-w-none h-[110%] w-[110%]" // Imagen expandida para índice 1
                         : "max-w-full max-h-full" // Imagen estándar para otros índices
                     )}
                   />
                 </motion.div>
               </div>







                  ) : (
                    <p className="mt-4 text-xs text-gray-400">IMAGE</p>
                  )}
                  <p className="text-sm mt-4 font-favoritRegular">
                    {footer}
                  </p>
                  <p className="w-[90%] text-sm text-[#888888] font-favoritRegular tracking-wide leading-none">
                    {description}
                  </p>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
