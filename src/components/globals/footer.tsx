import React from "react";

import { cn } from "@/lib/utils";

import BB_red from "@/assets/B—BRUCE_red.svg";
import BB_white from "@/assets/B—BRUCE.svg";
import Image from "next/image";

type Props = {
  title?: string;
  red?: boolean;
  size?: "4xl" | "8xl";
  width?: string;
};

const Footer = ({ title, red = false, size = "4xl", width }: Props) => {

  console.log(">>>>", size);
  return (
    <footer className="flex w-full items-end justify-between px-4">
     {title && (
        <p
          style={{ width: width || "auto" }}
          className={cn(
            size === "4xl" && "text-4xl",
            size === "8xl" && "text-8xl",
            "leading-none tracking-[-0.1vw] mb-2"
          )}
        >
          {title}
        </p>
      )}
      <Image
        src={red ? BB_red : BB_white}
        alt="B-Bruce"
        width={100}
        height={60}
       
        className={cn(
          "w-[calc(26px+3.9vw)] h-auto mb-3", // Tamaño fijo de 4vw de ancho
          !title && "ml-auto"
        )}
        
      />
    </footer>
  );
};

export default Footer;



 