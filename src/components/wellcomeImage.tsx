// src/components/wellcomeImage.tsx
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { validCodes, UserConfig } from "@/lib/authConfig";

const WellcomeImage = () => {
  const [userConfig, setUserConfig] = useState<UserConfig | null>(null);

  useEffect(() => {
    const getUserConfig = () => {
      // Obtener todas las cookies y convertirlas en un objeto
      const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
        const [key, value] = cookie.split("=");
        acc[key] = decodeURIComponent(value);
        return acc;
      }, {} as Record<string, string>);

      const code = cookies["userCode"];
      if (code && validCodes[code]) {
        setUserConfig(validCodes[code]);
      }
    };

    getUserConfig();
  }, []);

  if (!userConfig) return null; // O puedes mostrar una imagen por defecto

  return (
    <Image
      src={userConfig.welcomeImage}
      alt={`${userConfig.user} Logo`}
      width={200}
      height={200}
      className="animate-ownFade"
    />
  );
};

export default WellcomeImage;