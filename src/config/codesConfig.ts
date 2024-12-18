import type { StaticImageData } from "next/image";

import nikeLogo from "@/assets/nike.svg";
import bbruceLogo from "@/assets/B-BRUCE_FullName_RED.svg";


export type CodeContent = {
    title: string;
    image: StaticImageData;
    WelcomeVideoUrl?: string;
    quote: string;
  };
  
  
  export const codesConfig: Record<string, CodeContent> = {
    "": {
        title: "Contenido Genérico",
        image: bbruceLogo,
        quote: "Este es el contenido especial para el código B."
      },
      
    "Nike": {
      title: "Nike",
      image: nikeLogo,
      WelcomeVideoUrl: "https://video.wixstatic.com/video/4cd4b0_d6a747fd0d134564ac8c39e03447b693/1080p/mp4/file.mp4",
      quote: "Este es el contenido especial para el código A."
    },
 
    // Agrega más códigos aquí si lo deseas...
  };