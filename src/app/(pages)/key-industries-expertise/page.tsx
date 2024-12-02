"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Footer from "@/components/globals/footer";
import Header from "@/components/globals/header";

import food from "@/assets/KeyIndustriesExpertise/food&drinks.png";
import sports from "@/assets/KeyIndustriesExpertise/sports.png";
import beauty from "@/assets/KeyIndustriesExpertise/beauty.png";
import telco from "@/assets/KeyIndustriesExpertise/telco.png";
import KeyIndustriesCard from "@/components/sections/keyIndustriesCard";

const categories = [
  {
    id: 1,
    title: "FOOD & DRINKS",
    image: food,
    properties: [
      "Crear conexiones emocionales.",
      "Reflejar autenticidad.",
      "Inspirar el descubrimiento.",
      "Mejorar la experiencia multicanal.",
    ],
  },
  {
    id: 2,
    title: "SPORTS",
    image: sports,
    properties: [
      "Alinear creencias.",
      " Conectar creencias.",
      "Transmitir dinamismo y espíritu deportivo.",
      "Mejorar la experiencia.",
    ],
  },
  {
    id: 3,
    title: "BEAUTY",
    image: beauty,
    properties: [
      "Crear conexiones emocionales.",
      "Reflejar autenticidad.",
      "Inspirar el descubrimiento.",
      "Mejorar la experiencia multicanal.",
    ],
  },
  {
    id: 4,
    title: "TELCO",
    image: telco,
    properties: [
      "Crear conexiones emocionales.",
      "Reflejar autenticidad.",
      "Inspirar el descubrimiento.",
      "Mejorar la experiencia multicanal.",
    ],
  },
];

const KeyIndustriesExpertise = () => {
  const router = useRouter();

  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);

  const handleCardClick = (newIndex: number) => {
    setPrevIndex(currentIndex);
    setCurrentIndex(newIndex);
  };
  // Recuperar el índice al montar el componente
  useEffect(() => {
    const savedIndex = sessionStorage.getItem("industriesIndex");
    if (savedIndex !== null) {
      setCurrentIndex(parseInt(savedIndex, 10));
    } else {
      setCurrentIndex(0); // Valor inicial si no existe en sessionStorage
    }
  }, []);

  // Guardar el índice en sessionStorage cada vez que cambie
  useEffect(() => {
    if (currentIndex !== null) {
      sessionStorage.setItem("industriesIndex", currentIndex.toString());
    }
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        if (currentIndex === 1) {
          // Navegación a la página anterior
          router.push("/shapeless-method");
          return;
        }
        setPrevIndex(currentIndex);
        setCurrentIndex((prev) => {
          if (prev === null || prev === 1) return categories.length;
          return prev - 1;
        });
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        if (currentIndex === categories.length) {
          // Navegación a la página siguiente
          router.push("/mixed-brand-arts");
          return;
        }
        setPrevIndex(currentIndex);
        setCurrentIndex((prev) => {
          if (prev === null || prev === categories.length) return 1;
          return prev + 1;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, router]);

  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <Header
        title="Key Industries Expertise"
        prevPage="/shapeless-method"
        nextPage="/mixed-brand-arts"
        visible={true}
        disableKeyboardNavigation={true}
      />
      <main className="flex grow flex-col items-center justify-center w-full p-[1vw] ">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 w-full max-h-[80vh]  mx-auto px-4">
          {categories.map((category) => (
            <KeyIndustriesCard
              key={category.id}
              id={category.id}
              title={category.title}
              image={category.image}
              properties={category.properties}
              index={currentIndex}
              prevIndex={prevIndex}
              onClick={() => handleCardClick(category.id)}
            />
          ))}
        </div>
      </main>
      <Footer
        title="Our expertise is driven by consumer understanding."
        size="4xl"
        width="90%"
      />
    </div>
  );
};

export default KeyIndustriesExpertise;
