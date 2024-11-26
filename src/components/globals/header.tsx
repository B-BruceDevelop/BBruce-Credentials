"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Link from "next/link";
import { PiArrowLeftThin } from "react-icons/pi";
import { PiArrowRightThin } from "react-icons/pi";

type Props = {
  title?: string;
  prevPage?: string;
  nextPage?: string;
  visible?: boolean;
};

const Header = ({ title, prevPage, nextPage, visible = true }: Props) => {
  const router = useRouter();

  // Estado para manejar el foco del teclado
  const [focusedButton, setFocusedButton] = useState<"left" | "right" | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" && nextPage) {
        setFocusedButton("right");
        router.push(nextPage);
      } else if (event.key === "ArrowLeft" && prevPage) {
        setFocusedButton("left");
        router.push(prevPage);
      }


    //   if (event.key === "ArrowRight" && nextPage) {
    //     setFocusedButton("right");
    //     setTimeout(() => {
    //       router.push(nextPage);
    //     }, 50); // 100ms delay (0.1 segundos)
    //   } else if (event.key === "ArrowLeft" && prevPage) {
    //     setFocusedButton("left");
    //     setTimeout(() => {
    //       router.push(prevPage);
    //     }, 50); // 100ms delay (0.1 segundos)
    //   }



    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [router, prevPage, nextPage]);

  if (!visible) return <></>;
  return (
    <header className="flex w-full h-[4vw] max-h-[70px] items-center justify-between border-b border-white">
      {title && <p className="text-base ml-4">{title}</p>}
      <div className="flex text-base h-full items-center">
        {prevPage ? (
          <Link
            href={prevPage}
            onFocus={() => setFocusedButton("left")}
            onBlur={() => setFocusedButton(null)}
            className={`group flex justify-center items-center h-full aspect-square border-l-[0.5px] border-white transition-colors ${
              focusedButton === "left" ? "bg-white text-black" : "hover:bg-white hover:text-black"
            }`}
          >
            <PiArrowLeftThin
              className={`stroke-current transition-transform ${
                focusedButton === "left" ? "stroke-[6px]" : "group-hover:stroke-[6px]"
              }`}
            />
          </Link>
        ) : (
          <PiArrowLeftThin className="opacity-50" />
        )}

        {nextPage ? (
          <Link
            href={nextPage}
            onFocus={() => setFocusedButton("right")}
            onBlur={() => setFocusedButton(null)}
            className={`group flex justify-center items-center h-full aspect-square border-l-[0.5px] border-white transition-colors ${
              focusedButton === "right" ? "bg-white text-black" : "hover:bg-white hover:text-black"
            }`}
          >
            <PiArrowRightThin
              className={`stroke-current transition-transform ${
                focusedButton === "right" ? "stroke-[6px]" : "group-hover:stroke-[6px]"
              }`}
            />
          </Link>
        ) : (
          <div className="flex justify-center items-center h-full aspect-square border-l-[0.5px] border-white opacity-50">
            <PiArrowRightThin />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;