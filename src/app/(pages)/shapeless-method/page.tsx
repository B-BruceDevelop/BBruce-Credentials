"use client";

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
      "Desk Research",
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




  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <Header
        title="Shapeless Method"
        prevPage="/the-principles"
        nextPage="/key-industries-expertise"
        visible={true}
      />

      <main className="flex flex-1 flex-col items-center justify-center w-full h-full p-4">
      <MainContent methods={Methods} />
       
      </main>

      <Footer
        title={ "Find your own path and make it unique."        }
        width="80vw"
        size="4xl"
      />
    </div>
  );
};

export default ShapelessMethod;
