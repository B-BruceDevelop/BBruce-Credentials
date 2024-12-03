"use client";

import Footer from "@/components/globals/footer";
import Header from "@/components/globals/header";
import Timeline from "@/components/sections/timeline";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

const TheOrigin = () => {
  const router = useRouter();
  const maxIndex = 3; // Número máximo de posiciones
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Recuperar el índice desde sessionStorage al cargar
  useEffect(() => {
    const savedIndex = sessionStorage.getItem("originIndex");
    if (savedIndex !== null) {
      setCurrentIndex(parseInt(savedIndex, 10));
    }
  }, []);

  useEffect(() => {
    // Definir handleKeyDown dentro del useEffect
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        if (currentIndex === 0 ) {
          router.push("/self-descrition");
        } else {
          const newIndex = currentIndex - 1;
          setCurrentIndex(newIndex);
          sessionStorage.setItem("originIndex", newIndex.toString());
        }
      } else if (e.key === "ArrowRight") {
        if (currentIndex === maxIndex) {
          router.push("/meet-us");
        } else {
          const newIndex = currentIndex + 1;
          setCurrentIndex(newIndex);
          sessionStorage.setItem("originIndex", newIndex.toString());
        }
      }
    };

    // Agregar evento del teclado
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      // Limpiar el evento al desmontar
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex, maxIndex, router]);

  return (
    <div className="flex flex-col h-full flex-col items-center justify-center bg-black">
      <Header
        title="The Origin"
        prevPage="/self-descrition"
        nextPage="/meet-us"
        visible={true}
        disableKeyboardNavigation={true}
      />
      <main className="flex grow flex-col w-full h-[35vh]  p-4 ">
        <section className="w-full rounded-3xl">
          <Suspense fallback={<p>Loading video...</p>}>
            <video
              width="320"
              height="240"
              autoPlay
              loop
              className="w-full h-[35vh] object-cover rounded-3xl animate-fadeInSmall"
            >
              <source
                src="https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4"
                type="video/mp4"
              />
            </video>
          </Suspense>
        </section>
        <section className="flex grow w-full items-start pt-[2vw]">
          <Timeline index={currentIndex} />
        </section>
      </main>
      <Footer title="Stages of physical and mental evolution." red={false} />
    </div>
  );
};

export default TheOrigin;