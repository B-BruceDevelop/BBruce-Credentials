
import Image from "next/image";
import Link from "next/link";

import BrandBaloon from "@/components/sections/BrandBaloon";
import BrandBanner from "@/components/sections/BrandBanner";

import BBruce from "@/assets/B—BRUCE.svg";

import { MdClose } from "react-icons/md";

import menuChevron from "../../menu_chevron.svg"



interface Props {
  values: string[];
}

const assets_verbal = [
  "MEANINGFUL NAMING",
  "BASELINE",
  "MANIFESTO",
  "TONE OF VOICE",
];
const assets_visual = [
  "RESPONSIVE LOGOTYPE",
  "COLOUR PALETTE",
  "TYPOGRAPHY",
  "ART DIRECTION",
];
const assets_dynamic = [
  "MOTION BEHAVIOUR",
  "RECOGNIZIBLE DESIGN",
  "DYNAMIC ASSETS SISTEM",
  "TOUCHPOINTS COHERENCE",
];

function Design({values}: Props) {


  return (
    <div className="flex flex-col items-center justify-center w-full h-full ">
      <section className="fixed top-0 left-0 w-full h-[4vw] max-h-[70px] z-50 flex items-center justify-center ">
        <ul className="flex h-full items-center justify-center text-xs md:text-sm gap-[2vw]">
          <Link
            href={"/shapeless-method/strategy"}
            className="h-full flex items-center justify-center text-greyA0 hover:text-white px-[2vw]"
          >
            STRATEGY
          </Link>
          <Link
            href={"/shapeless-method/design"}
            className="h-full flex items-center justify-center bg-white text-background px-[2vw]"

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
          <h1 className="text-center text-2xl mb-8 uppercase">Brand Assets Suite</h1>

          <section className="flex flex-col items-center justify-center w-[50vw] h-[25vh] bg-red-100 ">

          <section className="flex flex-col items-center justify-center ">
          <div className="flex w-full">
            <ul className="flex flex-col grow">
              {assets_verbal.map((asset, index) => (
                <li key={index}>
                  <BrandBaloon texts={[asset]} />
                </li>
              ))}
            </ul>
            <ul className="flex flex-col grow">
              {assets_visual.map((asset, index) => (
                <li key={index}>
                  <BrandBaloon texts={[asset]} />
                </li>
              ))}
            </ul>
            <ul className="flex flex-col grow">
              {assets_dynamic.map((asset, index) => (
                <li key={index}>
                  <BrandBaloon texts={[asset]} />
                </li>
              ))}
            </ul>
          </div>
        </section>
        <BrandBanner
          texts={[
            "VERBAL EXPRESSION",
            "VISUAL EXPRESSION",
            "DYNAMIC EXPRESSION",
          ]}
        />

          </section>

          <h2 className="text-center text-sm mt-8 font-favoritBold">STRATEGIC REPORT</h2>
        </div>
      </section>
    </div>
  );










  return (
    <div className="flex flex-col items-center justify-center w-full h-[100vh]">

      <header className="flex flex-cols-3 w-full h-[4vw]  items-center justify-between border-b border-white">
        <p className="w-[20vw] text-xs sm:text-base ml-4">
          Shapeless Method
        </p>

        <ul className="flex w-full items-center justify-center text-xs md:text-sm gap-4">
         
              <Link     href={"/shapeless-method/strategy"} className="text-greyA0 hover:text-white"> STRATEGY   </Link> 
              <Link     href={"/shapeless-method/design"} className="text-white"> DESIGN   </Link>
              <Link     href={"/shapeless-method/activation"} className="text-greyA0 hover:text-white"> ACTIVATION   </Link>
          
         
        </ul>

        <div className="flex w-[20vw] items-center justify-end">
          <Link
            href="/shapeless-method"
            className="flex items-center justify-center w-[4vw] bg-white rounded-full  mr-4"
          >
            <p className="text-sm md:text-md text-background py-[0.4vw]">
              <MdClose />
            </p>
          </Link>
        </div>
      </header>




    <main className="flex grow flex-col items-center justify-between w-full h-full  ">
      <div className="flex  flex-col items-center  w-full ">
        <ul className="flex gap-8 text-sm p-8">
          {values.map((value, index) => (
            <li key={index}>{value}</li>
          ))}
        </ul>
        <h1 className="text-center text-2xl mb-8">Brand Assets Suite</h1>

        <section className="flex flex-col items-center justify-center ">
          <div className="flex w-full">
            <ul className="flex flex-col grow">
              {assets_verbal.map((asset, index) => (
                <li key={index}>
                  <BrandBaloon texts={[asset]} />
                </li>
              ))}
            </ul>
            <ul className="flex flex-col grow">
              {assets_visual.map((asset, index) => (
                <li key={index}>
                  <BrandBaloon texts={[asset]} />
                </li>
              ))}
            </ul>
            <ul className="flex flex-col grow">
              {assets_dynamic.map((asset, index) => (
                <li key={index}>
                  <BrandBaloon texts={[asset]} />
                </li>
              ))}
            </ul>
          </div>
        </section>
        <BrandBanner
          texts={[
            "VERBAL EXPRESSION",
            "VISUAL EXPRESSION",
            "DYNAMIC EXPRESSION",
          ]}
        />
        <h1 className="text-center text-sm mt-8">BRAND GUIDELINES</h1>
      </div>

      
    </main>

    <footer className="flex justify-end w-full p-8">
        <Image
          src={BBruce}
          alt="bbruce"
          width={100}
          height={50}
          className="w-[8vw]"
        />
      </footer>

    </div>
  );
}

export default Design;
