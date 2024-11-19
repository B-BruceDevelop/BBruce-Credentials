import Image from "next/image";
// import DynamicBrands from "@/assets/dynamicBrands_BLACK.svg";
import keywordsBlack from "@/assets/keywords_stroke2.svg";

import DynamicBrands from "@/assets/DYNAMIC BRANDS ®.svg";

const DynamicBrandsCarousel = () => {
  return (
    <section className="relative w-full overflow-hidden">
    {/* Contenedor 1 */}
    <div className="flex animate-marqueeSlow items-center justify-center w-[400%] h-[20vh]">
      {[0, 1, 2, 3].map((number) => (
        <Image
          key={number}
          src={DynamicBrands}
          alt="DYNAMIC BRANDS ®"
          width={1814}
          height={220}
          className="h-full w-auto mx-12 object-contain"
          priority
        />
      ))}
    </div>
  
    {/* Contenedor 2 */}
    <div className="flex animate-marquee items-center justify-center w-[400%] h-[20vh] mt-4">
      {[0, 1, 2, 3].map((number) => (
        <Image
          key={number}
          src={keywordsBlack}
          alt="SIMPLICITY — FLEXIBILITY"
          width={1814}
          height={121}
          className="h-full w-auto mx-12 object-contain"
          priority
        />
      ))}
    </div>
  </section>
  );
};

export default DynamicBrandsCarousel;
