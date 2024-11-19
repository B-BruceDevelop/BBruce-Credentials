import React from "react";

import { cn } from "@/lib/utils";
import { formatTextWithLineBreaks } from "@/lib/functions";

import BB_red from "@/assets/B—BRUCE_red.svg";
import BB_white from "@/assets/B—BRUCE.svg";
import Image from "next/image";

type Props = {
  title?: string;
  red?: boolean;
  size?: "sm"| "4xl" | "8xl";
  width?: string;
  className?: string;
};

const Footer = ({ title, red = false, size = "4xl", width, className }: Props) => {

  return (
    <footer className="flex w-full items-end justify-between px-4">
     {title && (
        <div
          style={{ width: width || "auto" }}
          className={cn(
            size === "sm" && "text-sm",
            size === "4xl" && "text-4xl",
            size === "8xl" && "text-8xl",
            "leading-none tracking-[-0.1vw] mb-4 font-favoritMediumLining",
            className
          )}
        >
          {formatTextWithLineBreaks(title)}
        </div>
      )}
      <Image
        src={red ? BB_red : BB_white}
        alt="B-Bruce"
        width={100}
        height={60}
       
        className={cn(
          "w-[calc(26px+3.9vw)] h-auto mb-4", // Tamaño fijo de 4vw de ancho
          !title && "ml-auto"
        )}
        
      />
    </footer>
  );
};

export default Footer;



 