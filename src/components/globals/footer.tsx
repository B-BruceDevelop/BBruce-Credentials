import React from "react";

import BB_red from "@/assets/B—BRUCE_red.svg";
import BB_white from "@/assets/B—BRUCE.svg";
import Image from "next/image";

type Props = {
  title?: string;
  red?: boolean;
};

const Footer = ({ title, red }: Props) => {
  return (
    <div className="flex w-full  items-end justify-between px-4">
      {title && <p className="text-8xl leading-none w-[90%]">{title}</p>}
      <Image
        src={red ? BB_red : BB_white}
        alt="B-Bruce"
        width={100}
        height={60}
        className={!title ? "ml-auto w-[8vw] h-full mb-3" : " w-[8vw] h-auto mb-3"}  
      />
    </div>
  );
};

export default Footer;
