"use client";
import { useEffect, useState } from "react";
import { useStore } from "@/store/useStore";
import { codesConfig } from "@/config/codesConfig";

import WelcomeLogo from "@/components/welcomeLogo";
import Link from "next/link";
import Header from "@/components/globals/header";
import { PiArrowLeftThin, PiArrowRightThin } from "react-icons/pi";
import IntroCodeValidator from "@/components/globals/introCodeValidator";

export default function Home() {
  const { popupOpen, setCode, code } = useStore();

  const handleReopenPopup = () => {
    setCode(null);
    useStore.setState({ popupOpen: true });
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Si se pulsa la barra espaciadora y el popup está cerrado
      if (e.code === "Space" && !popupOpen) {
        handleReopenPopup();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const [nextPage, setNextPage] = useState<string>("/our-essence");
  useEffect(() => {
    if (code && codesConfig[code]?.WelcomeVideoUrl) {
      setNextPage("/our-conviction");
    } else {
      setNextPage("/our-essence");
    }
  }, [code]);

  return (
    <>
      <div
        id="popup-container"
        className="fixed inset-0 z-50 pointer-events-none"
      />

      <IntroCodeValidator />

      <div className="flex w-full h-full flex-col items-center justify-center p-4">
        {/* Si el popup está abierto, no mostramos el header */}
        {!popupOpen && <Header nextPage={nextPage} visible={false} />}

        <main className="grid grid-cols-3 w-full items-center">
          <h1 className="text-3xl font-favoritMedium tracking-[-0.3px] text-left">
            Hello
          </h1>

          <section className="flex justify-center">
            {/* No mostramos el WelcomeLogo hasta que el popup se haya cerrado */}
            {!popupOpen && <WelcomeLogo />}
          </section>
          <section className="flex flex-col justify-center items-end">
            <Link
              href={nextPage}
              className="text-sm flex items-center justify-end gap-1 font-favoritRegular"
            >
              Press
              <PiArrowLeftThin className="stroke-[6px] mx-1" />
              |
              <PiArrowRightThin className="stroke-[6px] mx-1" />
              to navigate
            </Link>
            {/* Botón para reabrir el popup cuando se quiera cambiar el código */}
            <button onClick={handleReopenPopup}>
              <p className="text-xs font-favoritRegular">Press space if you have a code</p>
            </button>
          </section>
        </main>
      </div>
    </>
  );
}
