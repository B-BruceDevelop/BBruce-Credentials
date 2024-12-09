import Image from "next/image";
import Link from "next/link";

import menuChevron from "../../menu_chevron.svg"

interface Props {
  values: string[];
}

function Strategy({ values }: Props) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full ">
      <section className="fixed top-0 left-0 w-full h-[4vw] max-h-[70px] z-50 flex items-center justify-center ">
        <ul className="flex h-full items-center justify-center text-xs md:text-sm gap-[2vw]">
          <Link
            href={"/shapeless-method/strategy"}
            className="h-full flex items-center justify-center bg-white text-background px-[2vw]"
          >
            STRATEGY
          </Link>
          <Link
            href={"/shapeless-method/design"}
            className="h-full flex items-center justify-center text-greyA0 hover:text-white px-[2vw]"
          >
            DESIGN
          </Link>
          <Link
            href={"/shapeless-method/activation"}
            className="h-full flex items-center justify-center text-greyA0 hover:text-white px-[2vw]"
          >
            ACTIVATION
          </Link>
        </ul>
      </section>

      <section className="flex grow flex-col items-center justify-between w-full h-full  ">
        <div className="flex  flex-col items-center  w-full ">
          <ul className="flex gap-[1vw] text-sm px-8  border rounded-full">
            {values.map((value, index) => (
              <li
                key={index}
                className="flex items-center justify-center gap-[1vw] font-favoritRegular tracking-tight"
              >
                {" "}
                {index !== 0 && (
                 <span className="relative flex items-center">
                 <Image
                   src={menuChevron}
                   alt="chevron"
                   width={14}
                   height={60}
                   className="-my-[1px]" /* Añadimos un margen negativo */
                 />
               </span>
                )}
                {value}
              </li>
            ))}
          </ul>
          <h1 className="text-center text-2xl mb-8">Brand Ambition Platform</h1>

          <section className="flex flex-col items-center justify-center w-[50vw] h-[25vh] bg-red-100 "></section>

          <h2 className="text-center text-sm mt-8 font-favoritBold">STRATEGIC REPORT</h2>
        </div>
      </section>
    </div>
  );
}

export default Strategy;
