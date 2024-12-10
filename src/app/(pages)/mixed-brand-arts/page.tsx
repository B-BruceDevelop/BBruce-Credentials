'use client';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Importar useRouter para navegación
import Header from "@/components/globals/header";
import BrandSection from "./components/BrandSection";

const MixedBrandArts = () => {
  const maxIndex = 4; // Máximo índice permitido
  const router = useRouter(); // Instancia de useRouter para navegación

  const [brandArtsIndex, setBrandArtsIndex] = useState<number>(0);

  useEffect(() => {
    // Recuperar el índice desde sessionStorage en el cliente
    const storedIndex = sessionStorage.getItem("brandArtsIndex");
    if (storedIndex !== null) {
      setBrandArtsIndex(parseInt(storedIndex, 10));
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        if (brandArtsIndex === maxIndex) {
          // Navegar a la página siguiente si estamos en el último índice
          router.push("/latest-cases");
        } else {
          // Incrementar el índice
          setBrandArtsIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
        }
      } else if (event.key === "ArrowLeft") {
        if (brandArtsIndex === 0) {
          // Navegar a la página anterior si estamos en el primer índice
          router.push("/key-industries-expertise");
        } else {
          // Decrementar el índice
          setBrandArtsIndex((prevIndex) => Math.max(prevIndex - 1, 0));
        }
      }
    };

    // Agregar el listener de teclado
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      // Limpiar el listener al desmontar el componente
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [brandArtsIndex, router, maxIndex]);

  // Guardar el índice en sessionStorage cuando cambie
  useEffect(() => {
    sessionStorage.setItem("brandArtsIndex", brandArtsIndex.toString());
  }, [brandArtsIndex]);

  return (
    <div className="flex flex-col w-full h-screen items-center justify-between">
      <Header
        title="Mixed Brand Arts"
        prevPage="/key-industries-expertise"
        nextPage="/latest-cases"
        visible={true}
        disableKeyboardNavigation={true}
      />
      <div className="flex grow w-full h-full flex-col items-center justify-center">

      <BrandSection index={brandArtsIndex} />
      </div>
    </div>
  );
};

export default MixedBrandArts;