import nikeLogo from "@/assets/nike.svg";
import bbruce from "@/assets/B—BRUCE_red.svg";
import theVenue from "@/assets/meetUs/the_venue.png";

import { StaticImageData } from "next/image";

type UserConfig = {
  user: string;
  welcomeImage: StaticImageData;
};

export const validCodes: Record<string, UserConfig> = {
    Nike23: {
      user: "Nike",
      welcomeImage: nikeLogo, // Imagen personalizada
    },
    BBruce: {
      user: "Usuario 2",
      welcomeImage: bbruce, // Imagen personalizada
    },
    Venue: {
      user: "Usuario 3",
      welcomeImage: theVenue, // Imagen personalizada
    },
  };