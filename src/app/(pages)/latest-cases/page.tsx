"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Footer from "@/components/globals/footer";
import Header from "@/components/globals/header";
import {  Project } from "@/types/types";
import { motion, AnimatePresence } from "framer-motion";

import Nutrisport from "./(cases)/nutrisport/page";
import Motorola from "./(cases)/motorola/page";


const lastCases: Project[] = [
  {
    id: 1,
    name: "atrapalo",
    page: <Motorola />
  },
  {
    id: 2,
    name: "nutrisport",
    page: <Nutrisport />
  },
  {
    id: 3,
    name: "motorola",
    page: <Motorola />
  }
]

const Swiper = () => {
  const router = useRouter();

  // Estados para el índice actual y la dirección de navegación
  const [currentIndex, setCurrentIndex] = useState(() => (0));
  const [direction, setDirection] = useState(1); // Dirección: 1 (derecha), -1 (izquierda)
  
  useEffect(() => {
    const savedIndex = sessionStorage.getItem("caseIndex");
    setCurrentIndex(savedIndex ? parseInt(savedIndex, 10) : 0);
    if (savedIndex ) {
      const parsedIndex = parseInt(savedIndex, 10);
      setDirection(parsedIndex > 0 ? -1 : 1);
    }
  }, []);

  const nextSlide = () => {
    setDirection(1); // Avanzar
    setCurrentIndex((prevIndex) =>
      prevIndex === lastCases.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setDirection(-1); // Retroceder
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? lastCases.length - 1 : prevIndex - 1
    );
  };

  // Navegación con teclado
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        // Si estamos en la última diapositiva, redirigir
        if (currentIndex === lastCases.length - 1) {
          sessionStorage.setItem("caseIndex", currentIndex.toString());
          router.push("/highlight-reel");
        } else {
          nextSlide();
        }
      } else if (event.key === "ArrowLeft") {
        // Si estamos en la primera diapositiva, redirigir
        if (currentIndex === 0) {
          sessionStorage.setItem("caseIndex", currentIndex.toString());
          router.push("/mixed-brand-arts");
        } else {
          prevSlide();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, router]);

  // Variantes dinámicas para personalizar animaciones
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.8,
    }),
  };

  return (
    <main className="flex flex-col min-h-screen items-center justify-between">
      <Header
        title="Latest Cases"
        prevPage="/mixed-brand-arts"
        nextPage="/highlight-reel"
        disableKeyboardNavigation={true}
      />
      <section className="relative flex items-center justify-center w-full h-full overflow-hidden">
        <div className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
          <AnimatePresence 
            custom={-1} 
          >
            {lastCases.map(
              (caseData, index) =>
                currentIndex === index && (
                  <motion.div
                    key={caseData.id}
                    custom={direction} // Pasar dirección al componente
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="absolute w-full h-full flex items-center justify-center"
                  >
                    <div key={caseData.id} className="flex w-full h-full flex items-center justify-center">

                    {caseData.page} 
                    </div>
                   
                  </motion.div>
                )
            )}
          </AnimatePresence>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Swiper;
