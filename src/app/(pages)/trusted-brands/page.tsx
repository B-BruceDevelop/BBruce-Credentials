import Header from "@/components/globals/header";
import Footer from "@/components/globals/footer";
import trustedBrandLogos from "@/assets/trustedBrandsLogos/index"; // Importación del array de logos
import Image from "next/image";

import { cn } from "@/lib/utils"; // Importación de la función cn

const animations = [
  "animate-fadeIn",
  // "animate-bounceIn",
  // "animate-slideIn10",
  "animate-zoomIn",
  // "animate-flip", // Nueva animación de volteo
  // "animate-swing", // Nueva animación tipo columpio
  // "animate-rubberBand", // Nueva animación de efecto banda elástica
  // "animate-tada", // Nueva animación tipo "tada" o impacto
  // "animate-wobble", // Nueva animación ondulante
  "animate-ownFade",
  "animate-fadeInSmall",
];
const delays = [
  "delay-0",
  "delay-200",
  "delay-400",
  "delay-600",
  "delay-800",
  "delay-1000",
];

const TrustedBrands = () => {
  console.log(trustedBrandLogos);
  return (
    <main className="flex flex-col min-h-screen items-center justify-between">
      <Header title="Trusted Brands" prevPage="/highlight-reel" nextPage="/last-page" />
      <section className="flex flex-wrap items-center justify-center w-full h-full p-[1vw] gap-[2vw]">
        {trustedBrandLogos.map((logo, index) => {
          const randomAnimationIndex = Math.floor(
            Math.random() * animations.length
          ); // Selección aleatoria
          const randomDelayIndex = Math.floor(Math.random() * delays.length); // Selección aleatoria de delay

          return (
           
            <Image
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              width={150}
              height={100}
              className={cn(
                "w-[25vw] md:w-[14vw] h-[10vh] max-h-[6vh] md:max-h-[10vh] object-contain px-[1vw] ",
                
                animations[randomAnimationIndex], // Animación aleatoria
                delays[randomDelayIndex] // Delay aleatorio
                
              )}
              />
          );
        })}
      </section>
      <Footer
        title="Endorsed by leading brands, showcasing lasting partnerships built on mutual success."
        width="75vw"
        size="4xl"
      />
    </main>
  );
};

export default TrustedBrands;
