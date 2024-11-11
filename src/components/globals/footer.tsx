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
    <div className="flex w-full  items-end justify-between px-4 mb-4">
      {title && <p className="text-8xl leading-none w-[80%]">{title}</p>}
      <Image
        src={red ? BB_red : BB_white}
        alt="B-Bruce"
        width={100}
        height={60}
      />
    </div>
  );
};

export default Footer;
