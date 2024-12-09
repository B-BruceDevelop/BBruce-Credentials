
import Image from "next/image";
import Link from "next/link";

import BrandBaloon from "@/components/sections/BrandBaloon";
import BrandBanner from "@/components/sections/BrandBanner";

import BBruce from "@/assets/B—BRUCE.svg";

import { MdClose } from "react-icons/md";



const values = [
  "Conceptualisation",
  "Tone Exploration",
  "Code Creation",
  "Brand Show",
];

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

function Strategy() {
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

export default Strategy;
