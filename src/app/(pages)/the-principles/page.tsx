"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/globals/footer";
import Header from "@/components/globals/header";

import ResourceLoader from "@/components/globals/recourceLoader";

import beAwareImg from "@/assets/principles/Be_aware 2.svg";
import keepUsefulIMG from "@/assets/principles/keep-the-useful.svg";
import strikeOnceIMG from "@/assets/principles/strike-once.svg";

type Principle = {
  id: string;
  description: string[];
  icon: string;
  principle: string;
  video: string;
};

const principles: Principle[] = [
  {
    id: "01",
    description: ["Be aware of yourself."],
    icon: beAwareImg,
    video:
      "https://video.wixstatic.com/video/4cd4b0_24ba3b0d143a47bda0e63498ef1e5d0c/1080p/mp4/file.mp4", // Ruta del video

    principle: "B-AUTHENTIC",
  },
  {
    id: "02",
    description: ["Keep the useful, reject the useless and add your uniqueness."],
    icon: keepUsefulIMG,
    video:
      "https://video.wixstatic.com/video/4cd4b0_41888bfd5313408ca65eba57734f1a37/1080p/mp4/file.mp4", // Ruta del video
    principle: "B—FLEXIBLE",
  },
  {
    id: "03",
    description: ["Strike once,", "reach many."],
    icon: strikeOnceIMG,
    video:
      "https://video.wixstatic.com/video/4cd4b0_52bdad86e1c4430ca0ceec97509e9156/1080p/mp4/file.mp4", // Ruta del video
    principle: "B—LIMITLESS",
  },
];

const ThePrinciples = () => {
  const router = useRouter();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    // Leer el índice desde sessionStorage solo en el cliente
    const storedIndex = sessionStorage.getItem("principleIndex");
    if (storedIndex !== null) {
      setActiveIndex(parseInt(storedIndex, 10));
    } else {
      setActiveIndex(0); // Valor por defecto si no hay índice guardado
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (activeIndex === null) return;

      if (event.key === "ArrowRight") {
        if (activeIndex === principles.length) {
          router.push("/shapeless-method"); // Navegar a la página siguiente
        } else {
          const newIndex = Math.min(activeIndex + 1, principles.length);
          setActiveIndex(newIndex);
          sessionStorage.setItem("principleIndex", newIndex.toString());
        }
      } else if (event.key === "ArrowLeft") {
        if (activeIndex === 0) {
          router.push("/meet-us"); // Navegar a la página anterior
        } else {
          const newIndex = Math.max(activeIndex - 1, 0);
          setActiveIndex(newIndex);
          sessionStorage.setItem("principleIndex", newIndex.toString());
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, router]);

  return (
    <div className="flex flex-col h-screen w-full items-center justify-center ">
      <Header
        title="Our Principles"
        prevPage="meet-us"
        nextPage="shapeless-method"
        visible={true}
        disableKeyboardNavigation={true}
      />
      <main className="grow flex flex-col items-center justify-center w-full my-[2vw] px-[2vw] md:px-[4vw] ">
        <article className=" grow grid grid-cols-3 w-full rounded-[2vw] border divide-x mt-[2vw]">
          {activeIndex !== null &&
            principles.map(({ id, description, video }, index) => {
              const isCovered = index - 1 >= activeIndex;

              return (
                <AnimatePresence key={id}>
                  <motion.div
                    key={id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="relative flex flex-col items-center justify-between w-full"
                  >
                    {/* Animar la capa negra */}
                    <AnimatePresence>
                      {isCovered && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.8 }}
                          className="absolute inset-0 bg-background bg-opacity-100 z-10 rounded-[2vw]"
                        ></motion.div>
                      )}
                    </AnimatePresence>

                    <div className="w-full p-[1vw] items-center justify-center">
                      <p className="text-base pl-[2vw]">{id}.</p>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="flex items-center w-full justify-center"
                      >
                        <ResourceLoader>
                          <video
                            src={video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full aspect-square max-h-[35vh] rounded-[2vw]"
                          />
                        </ResourceLoader>
                      </motion.div>
                    </div>
                    <motion.h3
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1, duration: 0.8 }}
                      className="w-full pb-[1vw] md:pb-[1vw] px-[3vw] text-3xl font-favoritMedium leading-none"
                    >
                      {description.map((description, index) => (
                        <p key={index}>{description}</p>
                      ))}
                    </motion.h3>
                  </motion.div>
                </AnimatePresence>
              );
            })}
        </article>

        <div className="grid grid-cols-3 w-full mt-[1vw] text-3xl font-favoritMedium">
          {principles.map(({ principle }, index) => (
            <div key={index} className="flex overflow-hidden px-[3vw]">
              {principle.split("").map((letter, letterIndex) => (
                <motion.span
                  key={letterIndex}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{
                    x: (activeIndex ?? 0) >= index ? 0 : 50,
                    opacity: (activeIndex ?? 0) >= index ? 1 : 0,
                  }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    delay:
                      index === 0
                        ? letterIndex * 0.08 + 0.8 // Mayor retraso para el primer texto
                        : letterIndex * 0.05, // Normal para los demás
                  }}
                  className="inline-block"
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ThePrinciples;
