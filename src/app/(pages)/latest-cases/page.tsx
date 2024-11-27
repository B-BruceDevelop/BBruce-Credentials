"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/globals/footer";
import Header from "@/components/globals/header";
import CaseCard from "./card";
import { useRouter } from "next/navigation";

import atrapalo_bg from "./img/Atrapalo_BG.png";
import atrapalo_Logo from "./img/atrapalo_Logo.svg";
import motorola_BG from "./img/euroleague_img.png";
import motorola_logo from "./img/euroleague_Logo_Full.svg";
import nutrisport_BG from "./img/nutriesport_img.png";
import nutrisport_Logo from "./img/Nutriesport_logo_white.svg";
import { StaticImageData } from "next/image";

type Case = {
  id: number;
  link: string;
  backgroundImage?: StaticImageData; // Imagen de fondo opcional
  backgroundColor?: string; // Color de fondo opcional
  logo?: StaticImageData; // Logo opcional
  title: string;
  subtitle: string;
};

const lastCases: Case[] = [
  {
    id: 1,
    backgroundImage: atrapalo_bg,
    logo: atrapalo_Logo,
    link: "latest-cases/atrapalo",
    title: "Atrápalo",
    subtitle: "Rebranding + UX/UI",
  },
  {
    id: 2,
    backgroundImage: nutrisport_BG,
    logo: nutrisport_Logo,
    link: "latest-cases/nutrisport",
    title: "Nutrisport",
    subtitle: "Rebranding + Campaign + Packaging",
  },
  {
    id: 3,
    backgroundImage: motorola_BG,
    logo: motorola_logo,
    link: "latest-cases/motorola",
    title: "Motorola",
    subtitle: "Creative Campaign",
  },
];

const Swiper = () => {
  const router = useRouter();

  // Estados para el índice actual y la dirección de navegación
  const [currentIndex, setCurrentIndex] = useState(() => (0));
  const [direction, setDirection] = useState(1); // Dirección: 1 (derecha), -1 (izquierda)
  useEffect(() => {
    const savedIndex = localStorage.getItem("currentIndex");
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
          localStorage.setItem("currentIndex", currentIndex.toString());
          router.push("/highlight-reel");
        } else {
          nextSlide();
        }
      } else if (event.key === "ArrowLeft") {
        // Si estamos en la primera diapositiva, redirigir
        if (currentIndex === 0) {
          localStorage.setItem("currentIndex", currentIndex.toString());
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
          <AnimatePresence custom={direction}>
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
                    <CaseCard
                      id={caseData.id}
                      backgroundImage={caseData.backgroundImage}
                      logo={caseData.logo}
                      backgroundColor={caseData.backgroundColor}
                      title={caseData.title}
                      subtitle={caseData.subtitle}
                      link={caseData.link}
                    />
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
