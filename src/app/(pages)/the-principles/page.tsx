'use client'

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
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isFirstRender, setIsFirstRender] = useState(true);

  // Leer el índice desde sessionStorage solo en el cliente
  useEffect(() => {
    const storedIndex = sessionStorage.getItem("principleIndex");
    if (storedIndex) {
      setActiveIndex(parseInt(storedIndex, 10));
    }
    setIsFirstRender(false); // Cambiar después de la primera renderización
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        if (activeIndex === principles.length ) {
          router.push("/shapeless-method"); // Navegar a la página siguiente
        } else {
          setActiveIndex((prevIndex) =>
            Math.min(prevIndex + 1, principles.length )
          );
        }
      } else if (event.key === "ArrowLeft") {
        if (activeIndex === 0) {
          router.push("/meet-us"); // Navegar a la página anterior
        } else {
          setActiveIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, router]);

  useEffect(() => {
    sessionStorage.setItem("principleIndex", activeIndex.toString());
  }, [activeIndex]);

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
          {principles.map(({ id, description, icon }, index) => {
            const isCovered = index >= activeIndex;

            return (
              <div
                key={id}
                className="relative flex flex-col items-center justify-between w-full"
              >
                <AnimatePresence>
                  {isCovered && (
                    <motion.div
                      initial={isFirstRender ? false : { opacity: 0 }}
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
              </div>
            );
          })}
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ThePrinciples;