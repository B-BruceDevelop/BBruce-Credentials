"use client";

import Image from "next/image";
import { useStore } from "@/store/useStore";
import { codesConfig } from "@/config/codesConfig";
import defaultLogo from "@/assets/B-BRUCE_FullName_RED.svg"; // Imagen por defecto si no hay código

const WelcomeLogo = () => {
  const { code } = useStore(); // Obtener el código actual del store

  // Obtener la imagen y título asociados al código
  const imageSrc =
    code && codesConfig[code]?.image ? codesConfig[code].image : defaultLogo;

  return (
    <div className="flex flex-col items-center justify-center text-center">
    {!code &&  <h2 className="text-md font-bold text-white font-favoritRegular mb-[2vw]">
        Welcome to
      </h2>}

      <Image
        src={imageSrc}
        alt="Welcome Logo"
        width={200}
        height={200}
        style={{ width: "20vw", height: "auto" }} // Ajusta automáticamente el otro valor
        className={`object-contain animate-ownFade ${
          code ? "mb-0" : "mb-[4.5vw]"
        }`}
        priority
      />
    </div>
  );
};

export default WelcomeLogo;
