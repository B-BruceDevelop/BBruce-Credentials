import Image from "next/image";
// import DynamicBrands from "@/assets/dynamicBrands_BLACK.svg";
import keywordsBlack from "@/assets/keywords_stroke2.svg";

import DynamicBrands from "@/assets/DYNAMIC BRANDS ®.svg";


const DynamicBrandsCarousel = () => {
  return (
    <section className="relative w-full overflow-hidden ">
      <div className="flex animate-marqueeSlow items-center justify-center  w-[400%] mt-4 ">
        <Image
          src={DynamicBrands}
          alt="DYNAMIC BRANDS ®"
          width={1814}
          height={220}
          className="w-full h-auto mx-12"
          priority
        />
        <Image
          src={DynamicBrands}
          alt="DYNAMIC BRANDS ®"
          width={1814}
          height={220}
          className="w-full h-auto mx-12 "
          priority
        />
        <Image
          src={DynamicBrands}
          alt="DYNAMIC BRANDS ®"
          width={1814}
          height={220}
          className="w-full h-auto mx-12"
          priority
        />
        <Image
          src={DynamicBrands}
          alt="DYNAMIC BRANDS ®"
          width={1814}
          height={220}
          className="w-full h-auto mx-12 "
          priority
        />
      </div>
      <div className="flex animate-marquee items-center justify-center w-[400%] mt-4  ">
        <Image
          src={keywordsBlack}
          alt="SIMPLICITY — FLEXIBILITY"
          width={1814}
          height={121}
          className="w-full h-auto mx-6 object-contain "
          priority
        />
        <Image
          src={keywordsBlack}
          alt="SIMPLICITY — FLEXIBILITY"
          width={1814}
          height={121}
          className="w-full h-auto mx-6 object-contain "
          priority
        />
        <Image
          src={keywordsBlack}
          alt="SIMPLICITY — FLEXIBILITY"
          width={1814}
          height={121}
          className="w-full h-auto mx-6 object-contain "
          priority
        />
        <Image
          src={keywordsBlack}
          alt="SIMPLICITY — FLEXIBILITY"
          width={1814}
          height={121}
          className="w-full h-auto mx-6 object-contain "
          priority
        />
      </div>
    </section>
  );
};

export default DynamicBrandsCarousel;
