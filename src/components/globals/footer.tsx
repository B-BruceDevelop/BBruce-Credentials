import React from "react";

import BB_red from "@/assets/B—BRUCE_red.svg";
import BB_white from "@/assets/B—BRUCE.svg";
import Image from "next/image";

type Props = {
  title?: string;
  red?: boolean;
  size?: "4xl" | "8xl";
  width?: string;
};

const Footer = ({ title, red=false, size = "8xl", width = "90vw" }: Props) => {
  return (
    <footer className="flex w-full items-end justify-between px-4">
      {title && (
        <p className={`text-${size} leading-none w-[${width}] tracking-[-0.1vw] mb-2`}>{title}</p>
        // <p className={`text-${size} leading-none w-[60vw] tracking-[-0.1vw] mb-2`}>{title}</p>
      )}
      <Image
        src={red ? BB_red : BB_white}
        alt="B-Bruce"
        width={100}
        height={60}
        className={
          !title ? "ml-auto w-[8vw] h-auto mb-3" : " w-[8vw] h-auto mb-3" 
        }
      />
    </footer>
  );
};

export default Footer;
