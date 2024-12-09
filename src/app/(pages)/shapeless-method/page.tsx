"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Footer from "@/components/globals/footer";
import Header from "@/components/globals/header";
import MainContent from "./mainContent";

// Importamos las páginas internas
import Strategy from "./(methods)/strategy/strategy";
import Design from "./(methods)/design/design";
import Activation from "./(methods)/activation/activation";

// Definimos el tipo
type MethodsType = {
  name: string;
  keywords: string[];
  page: React.ReactNode;
};

// Creamos el array de métodos
const Methods: MethodsType[] = [
  {
    name: "STRATEGY",
    keywords: ["DISCOVER", "DEFINE"],
    page: <Strategy values={[
      "Kick off Meeting",
      "Desck Research",
      "Benchmark & Trends",
      "Consumer Research",
    ]}/>,
  },
  {
    name: "DESIGN",
    keywords: ["CREATE", "VALIDATE"],
    page: <Design  values={[
      "Conceptualisation",
      "Tone Exploration",
      "Code Creation",
      "Brand Show",
    ]}/>,
  },
  {
    name: "ACTIVATION",
    keywords: ["SET UP", "DEVELOP"],
    page: <Activation values={[
      "Strategic Growth Plan   ",
      "Touchpoints definition",
      "Implementation",
      "Follow up",
    ]}/>,
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
        if (activeIndex === Methods.length) {
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
        {activeIndex === 1 && Methods[0].page}
        {activeIndex === 2 && Methods[1].page}
        {activeIndex === 3 && Methods[2].page}
      </main>

      <Footer
        title={
          activeIndex === 0 ? "Find your own path and make it unique." : ""
        }
        width="80vw"
        size="4xl"
      />
    </div>
  );
};

export default ShapelessMethod;
