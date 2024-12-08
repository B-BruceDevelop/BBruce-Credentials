import Link from "next/link";

import Footer from "@/components/globals/footer";
import Header from "@/components/globals/header";


import esquema from "@/assets/lotties/Esquema3.json";

import LottieComponent from "@/components/globals/lottie";

type MethodsType = {
  name: string;
  keywords: string[];
  link: string;
};

const Methods: MethodsType[] = [
  {
    name: "STRATEGY",
    keywords: ["DISCOVER", "DEFINE"],
    link: "/shapeless-method/strategy",
  },
  {
    name: "DESIGN",
    keywords: ["CREATE", "VALIDATE"],
    link: "/shapeless-method/design",
  },
  {
    name: "ACTIVATION",
    keywords: ["SET UP", "DEVELOP"],
    link: "/shapeless-method/activation",
  },
];

const ShapelessMethod = () => {
  return (
    <div className="flex flex-col h-screen  items-center justify-center">
      <Header
        title="Shapeless Method"
        prevPage="/the-principles"
        nextPage="/key-industries-expertise"
        visible={true}
      />
      <main className="flex flex-1 flex-col items-center justify-center w-full h-full p-4">
        <div className="flex flex-col-3 items-center justify-around w-full text-xl pt-8">
          <p className="w-[15%] text-center font-favoritRegularMono text-base tracking-tight	">
            Be aware of yourself.
          </p>
          <p className="w-[35%] text-center font-favoritRegularMono text-base tracking-tight	">
            Keep the useful, reject the useless and add your uniqueness.
          </p>
          <p className="w-[15%] text-center font-favoritRegularMono text-base tracking-tight">
            Strike once, reach many.
          </p>
        </div>
        <div className="w-[90%] h-full flex items-center justify-center ">
          <LottieComponent
            asset={esquema} // Usamos el mismo esquema para la segunda animación
            className="w-[95%] animate-fadeInSmall py-8 absolute -mt-10"
          />

          <div className="absolute top-50% left-0 w-full flex items-center justify-center h-[400px] px-8">
            <div className="flex justify-between w-[40vw]  flex items-center justify-center ">
              {["HYPOTESIS", "SOLUTION"].map((word) => (
                <div
                  key={word}
                  className="flex flex-col items-center justify-center w-[8vw] aspect-square bg-white text-background rounded-full z-10 "
                >
                  <p className="text-xs font-favoritRegularMono">{word}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contenedor de las tarjetas, superpuesto sobre las imágenes */}
          <div className="absolute top-50% left-0 w-full flex items-center justify-between   h-[400px]  px-8">
            {Methods.map(({ name, keywords, link }) => (
              <article
                key={name}
                className="flex flex-col justify-between w-1/3 h-[20vw] flex items-center justify-center rounded-lg shadow-md"
              >
                <p className="text-sm font-favoritRegularMono">{keywords[0]}</p>
                <div className="flex flex-col items-center justify-center w-full h-full">
                  <h2 className="text-xl favorit-favoritMedium">{name}</h2>
                  <Link
                    href={link}
                    className="w-[5vw] bg-white rounded-full flex items-center justify-center hover:bg-white/50"
                  >
                    <p className="text-base text-background">+</p>
                  </Link>
                </div>
                <p className="text-sm font-favoritRegularMono">{keywords[1]}</p>
              </article>
            ))}
          </div>
        </div>
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
