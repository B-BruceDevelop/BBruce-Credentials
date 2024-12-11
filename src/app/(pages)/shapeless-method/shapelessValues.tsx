import React from "react";
import Image from "next/image";
import menuChevron from "./menu_chevron.svg";

type Props = { values: string[] };

const ShapelessValues = ({ values }: Props) => {
  return (
    <ul className="flex gap-[3vw] text-sm px-[3vw] border rounded-full h-[4vw] items-center overflow-hidden animate-slideInFromTop">
      {values.map((value, index) => (
        <li
          key={index}
          className="flex items-center justify-center gap-[3vw] font-favoritRegular tracking-tight"
        >
          {index !== 0 && (
            <span className="relative flex items-center h-full">
              <Image
                src={menuChevron}
                alt="chevron"
                width={14}
                height={60}
                className="object-contain h-[4vw] scale-y-[2]"
              />
            </span>
          )}
          {value}
        </li>
      ))}
    </ul>
  );
};

export default ShapelessValues;
