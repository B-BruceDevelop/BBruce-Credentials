"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Link from "next/link";
import { PiArrowLeftThin, PiArrowRightThin } from "react-icons/pi";

type Props = {
  title?: string;
  prevPage?: string;
  nextPage?: string;
  visible?: boolean;
  disableKeyboardNavigation?: boolean; // Nuevo prop
};

const Header = ({
  title,
  prevPage,
  nextPage,
  visible = true,
  disableKeyboardNavigation = false,
}: Props) => {
  const router = useRouter();
  const [focusedButton, setFocusedButton] = useState<"left" | "right" | null>(
    null
  );

  useEffect(() => {
    if (disableKeyboardNavigation) return; // No agregar listener si está desactivado

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" && nextPage) {
        setFocusedButton("right");
        router.push(nextPage);
      } else if (event.key === "ArrowLeft" && prevPage) {
        setFocusedButton("left");
        router.push(prevPage);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [router, prevPage, nextPage, disableKeyboardNavigation]);

  if (!visible) return null;

  return (
    <header className="flex w-full h-[4vw] max-h-[70px] items-center justify-between border-b border-white">
      {title && <p className="text-base ml-4 font-favoritMedium animate-bounceInFromRight">{title}</p>}
      <div className="flex text-base h-full items-center">
        {prevPage ? (
          <Link
            href={prevPage}
            onFocus={() => setFocusedButton("left")}
            onBlur={() => setFocusedButton(null)}
            className={`group flex justify-center items-center h-full aspect-square border-l border-white transition-colors ${
              focusedButton === "left"
                ? "bg-white text-background"
                : "hover:bg-white hover:text-background"
            }`}
          >
            <PiArrowLeftThin
              className={`stroke-current transition-transform ${
                focusedButton === "left"
                  ? "stroke-[6px]"
                  : "group-hover:stroke-[6px]"
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
            className={`group flex justify-center items-center h-full aspect-square border-l border-white transition-colors ${
              focusedButton === "right"
                ? "bg-white text-background"
                : "hover:bg-white hover:text-background"
            }`}
          >
            <PiArrowRightThin
              className={`stroke-current transition-transform ${
                focusedButton === "right"
                  ? "stroke-[6px]"
                  : "group-hover:stroke-[6px]"
              }`}
            />
          </Link>
        ) : (
          <div className="flex justify-center items-center h-full aspect-square border-l border-white opacity-50">
            <PiArrowRightThin />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;