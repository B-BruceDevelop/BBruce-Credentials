"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

import { motion, AnimatePresence } from "framer-motion";

interface TimelineProps {
  index: number;
}

const timelineData = [
  {
    id: "savia",
    year: "2005",
    buttonText: "SAVIA DESIGN",
    location: "Sant Feliu de Codines",
    details:
      "The birth of the agency. After several years of working at various agencies and driven by the conviction to help brands unleash their potential through design, Dani Muñoz founded his own studio in Sant Feliu de Codines. In no time, he brought together family and friends to bring Savia Design to life.",
    justify: "start",
    align: "left",
  },
  {
    id: "logic",
    year: "2015",
    buttonText: "LOGIC DESIGN",
    location: "Barcelona / París / Warsaw",
    details:
      "A journey of growth and discovery. Partnering with Logic Design gave us the chance to embrace new cultures, explore different ways of working, and shape a methodology of our own. Over eight years, they were a trusted partner on the journey, a presence that inspired us to reflect on our identity and uncover our true essence. This phase prepared us for our next step to reach the next level.",
    justify: "center",
    align: "center",
  },
  {
    id: "bbruce",
    year: "2024",
    buttonText: "B–BRUCE",
    location: "Barcelona",
    details:
      "A stage of maturity and introspection. Our drive for improvement pushed us to question traditional agency models and explore new ways of thinking. During this phase, we developed a critical perspective on the limitations of rigid and overly dogmatic approaches. We began experimenting, blending different techniques, and searching for methods that were more effective and fluid. It was at this point that we crafted our own approach—rooted in simplicity, adaptability, and efficiency.",
    justify: "end",
    align: "right",
  },
];

const Timeline = ({ index }: TimelineProps) => {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  // Relacionar índice con timelineData
  useEffect(() => {
    if (index === 0) {
      setActiveButton(null); // Ninguno seleccionado
    } else {
      const selectedItem = timelineData[index - 1]; // Ajustar índice (0 no selecciona nada)
      setActiveButton(selectedItem ? selectedItem.id : null);
    }
  }, [index]);

  const handleClick = (id: string) => {
    setActiveButton(id === activeButton ? null : id);
  };

  return (
    <section className="flex flex-col w-full items-center justify-center text-sm">
      {/* Años */}
      <div className="relative flex w-[77vw] text-white mb-4">
        {timelineData.map((item, idx) => {
          const isVisible = idx <= index - 1; // El índice activo o mayor es visible

          return (
            <motion.div
              key={item.id}
              className={cn(
                "flex-1 flex flex-col font-favoritRegular",
                `items-${item.align}`,
                `text-${item.align}`
              )}
              initial={{ opacity: 0, y: -20, scale: 0.5 }} // Comienza invisible y desplazado hacia arriba
              animate={{
                opacity: isVisible ? 1 : 0, // Cambia la opacidad según la visibilidad
                y: isVisible ? 0 : -20, // Mueve hacia la posición original si es visible
                scale: isVisible ? 1 : 0.5, // Escala a tamaño normal si es visible
              }}
              transition={{
                duration: 0.5, // Duración de la animación
                ease: "easeInOut", // Transición suave
              }}
            >
              <p>{item.year}</p>
            </motion.div>
          );
        })}

        {/* Contenedor superpuesto con textos */}

        <div className="absolute inset-0 flex w-full pointer-events-none">
          {/* Primera columna */}
          <div className="flex-1 flex items-center justify-center">
            <div className="text-white text-sm text-left font-favoritRegularMono">
              {index >= 2 && // Visible si el índice es 2 o más
                Array.from("Development of technique").map(
                  (letter, letterIndex) => (
                    <motion.span
                      key={letterIndex}
                      initial={{ opacity: 0, x: 10 }} // Comienza invisible y desplazada hacia la derecha
                      animate={{ opacity: 1, x: 0 }} // Aparece y se posiciona correctamente
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                        delay: letterIndex * 0.02, // Retraso incremental por letra
                      }}
                      className="inline-block"
                    >
                      {letter === " " ? "\u00A0" : letter}{" "}
                      {/* Aseguramos espacios visibles */}
                    </motion.span>
                  )
                )}
            </div>
          </div>

          {/* Segunda columna */}
          <div className="flex-1 flex items-center justify-center">
            <div className="text-white text-sm text-right font-favoritRegularMono">
              {index === 3 && // Visible solo si el índice es exactamente 3
                Array.from("Development of thought").map(
                  (letter, letterIndex) => (
                    <motion.span
                      key={letterIndex}
                      initial={{ opacity: 0, x: 10 }} // Comienza invisible y desplazada hacia la derecha
                      animate={{ opacity: 1, x: 0 }} // Aparece y se posiciona correctamente
                      transition={{
                        duration: 0.3,
                        ease: "easeOut",
                        delay: letterIndex * 0.02, // Retraso incremental por letra
                      }}
                      className="inline-block"
                    >
                      {letter === " " ? "\u00A0" : letter}{" "}
                      {/* Aseguramos espacios visibles */}
                    </motion.span>
                  )
                )}
            </div>
          </div>
        </div>
      </div>

      {/* Línea y círculos */}
      <div className="relative flex items-center justify-between w-[75vw] bg-background">
        <motion.div
          className="absolute flex items-center left-0 right-0"
          style={{ height: "20px" }}
        >
          <motion.div
            className="h-0.5 bg-white"
            initial={{ width: 0 }} // Comienza con la línea invisible
            animate={{
              width:
                index === 0 || index === 1
                  ? "0%"
                  : index === 2
                  ? "50%"
                  : "100%", // Crece según el índice
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }} // Transición suave
          />
        </motion.div>

        {/* Bolitas */}
        {timelineData.map((item, idx) => {
          const isActive = idx === index - 1; // Bolita activa
          const isVisible = idx < index; // Bolitas visibles si su índice es menor al índice actual

          return (
            <motion.div
              key={item.id}
              className={`flex items-center justify-center w-5 h-5 bg-background border-2 border-white rounded-full z-10`}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                opacity: isVisible ? 1 : 0, // Visible si el índice es menor al índice actual
                scale: isVisible ? 1 : 0, // Escala a tamaño normal si es visible
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
              }}
              style={{ width: "20px", height: "20px" }}
            >
              {/* Bolita interior para la activa */}
              {isActive && (
                <motion.div
                  className="w-3 h-3 bg-white rounded-full z-10"
                  initial={{ opacity: 1, scale: 1 }}
                  animate={{
                    opacity: 10,
                    scale: [1.2, 1, 0.8, 1, 1.2], // Efecto bounce
                  }}
                  transition={{
                    duration: 0.5, // Duración del rebote
                    ease: "easeInOut",
                    repeat: Infinity, // Rebote continuo
                    repeatType: "loop", // Forma de repetición
                  }}
                />
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Botones y detalles */}
      <div className="flex flex-col items-center w-[94%] pt-4 space-y-4">
        <div className="flex justify-between w-full">
          {timelineData.map((item, idx) => {
            const isVisible = idx <= index - 1; // Visible si el índice es activo o mayor

            return (
              <div
                key={item.id}
                className={cn(
                  "flex flex-col justify-start items-center min-w-[18vw] gap-4",
                  `text-${item.align}`
                )}
              >
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: isVisible ? [0.5, 1.2, 1] : 0 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className={cn(
                    "px-4 py-2 border rounded-full w-full font-favoritMedium text-sm",
                    activeButton === item.id
                      ? "bg-white text-background"
                      : "bg-transparent text-white hover:bg-greyA0/50"
                  )}
                  onClick={() => handleClick(item.id)}
                >
                  {item.buttonText}
                </motion.button>

                {/* Animación de Location */}
                <motion.p
                  className="text-sm font-favoritRegular"
                  initial={{ opacity: 0 }} // Opacidad inicial baja
                  animate={{ opacity: isVisible ? 1 : 0 }} // Cambia según visibilidad
                  transition={{ duration: 0.3, ease: "easeInOut" }} // Transición suave
                >
                  {item.location}
                </motion.p>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col items-center w-full ">
          {/* Contenedor de Savia */}
          <AnimatePresence>
            <div className="flex w-full">
              {activeButton === "savia" && (
                <motion.div
                  key="savia"
                  initial={{ height: 0, opacity: 0 }} // Comienza con altura y opacidad cero
                  animate={{ height: "auto", opacity: 1 }} // Crece a la altura completa y aparece
                  exit={{ height: 0, opacity: 0 }} // Se encoge y desaparece
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }} // Transición suave
                  style={{ overflow: "hidden" }} // Oculta el contenido cuando la altura es cero
                  className="flex flex-col items-start w-[70vw] md:w-[30vw] font-favoritRegularMono text-left text-xs text-[#888888]"
                >
                  {timelineData[0].details}
                </motion.div>
              )}
            </div>
          </AnimatePresence>

          {/* Contenedor de Logic */}
          <AnimatePresence>
            <div className="flex w-full justify-center">
              {activeButton === "logic" && (
                <motion.div
                  key="logic"
                  initial={{ height: 0, opacity: 0 }} // Comienza con altura y opacidad cero
                  animate={{ height: "auto", opacity: 1 }} // Crece a la altura completa y aparece
                  exit={{ height: 0, opacity: 0 }} // Se encoge y desaparece
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }} // Transición suave
                  style={{ overflow: "hidden" }} // Oculta el contenido cuando la altura es cero
                  className="flex flex-col items-center w-[70vw] md:w-[30vw] font-favoritRegularMono text-center text-xs text-[#888888]"
                >
                  {timelineData[1].details}
                </motion.div>
              )}
            </div>
          </AnimatePresence>

          {/* Contenedor de B-Bruce */}
          <AnimatePresence>
            <div className="flex w-full justify-end">
              {activeButton === "bbruce" && (
                <motion.div
                  key="bbruce"
                  initial={{ height: 0, opacity: 0 }} // Comienza con altura y opacidad cero
                  animate={{ height: "auto", opacity: 1 }} // Crece a la altura completa y aparece
                  exit={{ height: 0, opacity: 0 }} // Se encoge y desaparece
                  transition={{ duration: 0.5, ease: "easeInOut", delay: 0.5 }} // Transición suave
                  style={{ overflow: "hidden" }} // Oculta el contenido cuando la altura es cero
                  className="flex flex-col items-end w-[70vw] md:w-[30vw] font-favoritRegularMono text-right text-xs text-[#888888]"
                >
                  {timelineData[2].details}
                </motion.div>
              )}
            </div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
