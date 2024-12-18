import type { StaticImageData } from "next/image";

import nikeLogo from "@/assets/nike.svg";
import bbruceLogo from "@/assets/B-BRUCE_FullName_RED.svg";
import NikeclosingQuote from "@/assets/Frase+Logo_Nike.svg";

export type CodeContent = {
    image: StaticImageData;
    WelcomeVideoUrl?: string;
    closingQuote?: StaticImageData;
  };
  
  
  export const codesConfig: Record<string, CodeContent> = {
    "": {
        image: bbruceLogo,
      },
      
    "Nike": {
      image: nikeLogo,
      WelcomeVideoUrl: "https://video.wixstatic.com/video/4cd4b0_d6a747fd0d134564ac8c39e03447b693/1080p/mp4/file.mp4",
      closingQuote: NikeclosingQuote
    },
 
    // Agrega más códigos aquí si lo deseas...
  };