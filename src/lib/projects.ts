// src/lib/projects.ts

import { StaticImageData } from "next/image";


export type Project = {
    id: number;
    link: string;
    backgroundImage?: StaticImageData;
    backgroundColor?: string;
    logo?: StaticImageData;
    title: string;
    subtitle: string;
  };


// Importa más imágenes según sea necesario


import atrapalo_bg from "@/assets/lastCases/Atrapalo_BG.png";
import atrapalo_Logo from "@/assets/lastCases/atrapalo_Logo.svg";
import motorola_BG from "@/assets/lastCases/euroleague_img.png";
import motorola_logo from "@/assets/lastCases/euroleague_Logo_Full.svg";
import nutrisport_BG from "@/assets/lastCases/nutriesport_img.png";
import nutrisport_Logo from "@/assets/lastCases/Nutriesport_logo_white.svg";

export const allProjects: Project[] = [
    {
      id: 1,
      backgroundImage: atrapalo_bg,
      logo: atrapalo_Logo,
      link: "latest-cases/atrapalo",
      title: "Atrápalo",
      subtitle: "Rebranding + UX/UI",
    },
    {
      id: 2,
      backgroundImage: nutrisport_BG,
      logo: nutrisport_Logo,
      link: "latest-cases/nutrisport",
      title: "Nutrisport",
      subtitle: "Rebranding + Campaign + Packaging",
    },
    {
      id: 3,
      backgroundImage: motorola_BG,
      logo: motorola_logo,
      link: "latest-cases/motorola",
      title: "Motorola",
      subtitle: "Creative Campaign",
    },
    // Agrega más proyectos según sea necesario
  ];