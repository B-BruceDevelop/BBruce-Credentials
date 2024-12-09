import Image from "next/image";

import bg_image from "@/assets/brandBannersBlocks/Union_white_3.png";

interface CurvedBannerProps {
  texts: string[];
}


export default function BrandBanner({  texts }: CurvedBannerProps) {
  return (
    <div className="relative w-[84vw] md:w-[54vw] h-[10vw] md:h-[6vw]">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={bg_image}
          alt="Background"
          layout="fill"
          objectFit="fill"
        />
      </div>

      <div
        className="relative z-10 grid h-full  max-w-6xl mx-auto"
        style={{ gridTemplateColumns: `repeat(${texts.length}, 1fr)` }}
      >
        {texts.map((text, index) => (
          <div key={index} className="flex items-center justify-around">
            <span
              className={`w-[60%] text-background text-sm font-bold text-center leading-none`}
            >
              {text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
