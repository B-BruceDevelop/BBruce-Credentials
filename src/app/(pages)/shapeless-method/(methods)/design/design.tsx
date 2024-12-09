import Image from "next/image";

import StrategicReport from "./design_motion.svg";
import menuChevron from "../../menu_chevron.svg";

interface Props {
  values: string[];
}

// const assets_verbal = [
//   "MEANINGFUL NAMING",
//   "BASELINE",
//   "MANIFESTO",
//   "TONE OF VOICE",
// ];
// const assets_visual = [
//   "RESPONSIVE LOGOTYPE",
//   "COLOUR PALETTE",
//   "TYPOGRAPHY",
//   "ART DIRECTION",
// ];
// const assets_dynamic = [
//   "MOTION BEHAVIOUR",
//   "RECOGNIZIBLE DESIGN",
//   "DYNAMIC ASSETS SISTEM",
//   "TOUCHPOINTS COHERENCE",
// ];

function Design({ values }: Props) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full ">
      <section className="fixed top-0 left-0 w-full h-[4vw] max-h-[70px] z-50 flex items-center justify-center ">
        <ul className="flex h-full items-center justify-center text-xs md:text-sm gap-[2vw]">
          <p className="h-full flex items-center justify-center text-greyA0 hover:text-white px-[2vw]">
            STRATEGY
          </p>
          <p className="h-full flex items-center justify-center bg-white text-background px-[2vw]">
            DESIGN
          </p>
          <p className="h-full flex items-center justify-center text-greyA0 hover:text-white px-[2vw]">
            ACTIVATION
          </p>
        </ul>
      </section>

      <section className="flex grow flex-col items-center justify-between w-full h-full py-[3vw] ">
        <ul className="flex gap-[3vw] text-sm px-[3vw]  border rounded-full">
          {values.map((value, index) => (
            <li
              key={index}
              className="flex items-center justify-center gap-[3vw] font-favoritRegular tracking-tight"
            >
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
          <h1 className="text-center text-2xl mb-8 uppercase">
            Brand Assets Suite
          </h1>

  

            <section className="flex flex-col items-center justify-center w-[60vw]  ">
              <Image
                src={StrategicReport}
                alt="Strategic Report"
                width={100}
                height={100}
                className="object-contain w-full h-full "
              />
            </section>

            <h2 className="w-[60%] py-[1vw] text-center text-sm mt-8 font-favoritBold border rounded-full">
            BRAND GUIDELINES
            </h2>
          </section>
    </div>
  );
}

export default Design;
