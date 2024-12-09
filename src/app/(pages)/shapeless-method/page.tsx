"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Footer from "@/components/globals/footer";
import Header from "@/components/globals/header";
import MainContent from "./mainContent";

// Importamos las páginas internas
import Strategy from "./(methods)/strategy/page";
import Design from "./(methods)/design/page";
import Activation from "./(methods)/activation/page";

// Definimos el tipo
type MethodsType = {
  name: string;
  keywords: string[];
  link: string;
  page: React.ReactNode;
};

// Creamos el array de métodos
const Methods: MethodsType[] = [
  {
    name: "STRATEGY",
    keywords: ["DISCOVER", "DEFINE"],
    link: "/shapeless-method/strategy",
    page: <Strategy />,
  },
  {
    name: "DESIGN",
    keywords: ["CREATE", "VALIDATE"],
    link: "/shapeless-method/design",
    page: <Design />,
  },
  {
    name: "ACTIVATION",
    keywords: ["SET UP", "DEVELOP"],
    link: "/shapeless-method/activation",
    page: <Activation />,
  },
];

const ShapelessMethod = () => {
  // Estado para controlar el índice activo
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter(); // Inicializar el enrutador
  
  useEffect(() => {
    const savedIndex = sessionStorage.getItem("methodIndex");
    setActiveIndex(savedIndex ? parseInt(savedIndex, 10) : 0);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        if (activeIndex === Methods.length ) {
          sessionStorage.setItem("methodIndex", activeIndex.toString());
          router.push("/key-industries-expertise"); // Navega a la siguiente página
        } else {
          const newIndex = activeIndex + 1;
          setActiveIndex(newIndex);
          sessionStorage.setItem("methodIndex", newIndex.toString());
        }
      } else if (event.key === "ArrowLeft") {
        if (activeIndex === 0) {
          sessionStorage.setItem("methodIndex", activeIndex.toString());
          router.push("/the-principles"); // Navega a la página anterior
        } else {
          const newIndex = activeIndex - 1;
          setActiveIndex(newIndex);
          sessionStorage.setItem("methodIndex", newIndex.toString());
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, router]);


  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <Header
        title="Shapeless Method"
        prevPage="/the-principles"
        nextPage="/key-industries-expertise"
        visible={true}
        disableKeyboardNavigation={true}
      />

      <main className="flex flex-1 flex-col items-center justify-center w-full h-full p-4">
        {activeIndex === 0 && <MainContent methods={Methods} />}
        {activeIndex === 1 && <Strategy />}
        {activeIndex === 2 && <Design />}
        {activeIndex === 3 && <Activation />}
      </main>

      <Footer
        title="Find your own path and make it unique."
        width="80vw"
        size="4xl"
      />
    </div>
  );
};

export default ShapelessMethod;