"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/globals/footer";
import Header from "@/components/globals/header";
import Image from "next/image";

import beAwareImg from "@/assets/principles/Be_aware 2.svg";
import keepUsefulIMG from "@/assets/principles/keep-the-useful.svg";
import strikeOnceIMG from "@/assets/principles/strike-once.svg";
import ResourceLoader from "@/components/globals/recourceLoader";

type Principle = {
  id: string;
  description: string;
  icon: string;
};

const principles: Principle[] = [
  {
    id: "01",
    description: "Be aware of yourself.",
    icon: beAwareImg,
  },
  {
    id: "02",
    description: "Keep the useful, reject the useless and add your uniqueness.",
    icon: keepUsefulIMG,
  },
  {
    id: "03",
    description: "Strike once, reach many.",
    icon: strikeOnceIMG,
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
        title="The Principles"
        prevPage="meet-us"
        nextPage="shapeless-method"
        visible={true}
        disableKeyboardNavigation={true}
      />
      <main className="grow flex items-center justify-center w-full p-[2vw] md:p-[4vw] ">
        <article className="grid grid-cols-3 w-full rounded-xl border divide-x">
          {activeIndex !== null &&
            principles.map(({ id, description, icon }, index) => {
              const isCovered = index >= activeIndex;

              return (
                <AnimatePresence key={id}>
                  <motion.div
                    key={id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    
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
                          className="absolute inset-0 bg-black bg-opacity-100 z-10 rounded-xl"
                        ></motion.div>
                      )}
                    </AnimatePresence>

                    <div className="w-full p-[1vw] items-center justify-center">
                      <p className="text-base">{id}.</p>
                      <div className="flex items-center w-full justify-center">
                        <ResourceLoader>
                          <Image
                            src={icon}
                            alt="icon"
                            width={100}
                            height={100}
                            className="w-full aspect-square max-h-[25vh]"
                          />
                        </ResourceLoader>
                      </div>
                    </div>
                    <h3 className="w-[80%] pb-[1vw] md:pb-[1vw] text-3xl font-favoritMedium leading-none">
                      {description}
                    </h3>
                  </motion.div>
                </AnimatePresence>
              );
            })}
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ThePrinciples;
