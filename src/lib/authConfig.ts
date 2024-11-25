import nikeLogo from "@/assets/nike.svg";
import bbruce from "@/assets/B—BRUCE_red.svg";
import theVenue from "@/assets/meetUs/the_venue.png";

import { StaticImageData } from "next/image";

export type UserConfig = {
  user: string;
  welcomeImage: StaticImageData;
  projects: string[]; 
};

export const validCodes: Record<string, UserConfig> = {
  Nike23: {
    user: "Nike",
    welcomeImage: nikeLogo,
    projects: ["Atrápalo", "Nutrisport", "Motorola"], // Nombres de los proyectos
  },
  BBruce: {
    user: "Usuario 2",
    welcomeImage: bbruce,
    projects: ["Proyecto 4", "Proyecto 5", "Proyecto 6"],
  },
  Venue: {
    user: "Usuario 3",
    welcomeImage: theVenue,
    projects: ["Proyecto 7", "Proyecto 8", "Proyecto 9"],
  },
};