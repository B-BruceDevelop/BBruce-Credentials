import Image from "next/image";

import nutrisport_logo from "./Nutriesport_logo_white.svg";
import nutrisport_Strong_logo from "./nutrisport_strong.svg";
import nutrisport_mockup from "./Nutrisport_MockupMacBook.png";
import nutrisport_men from "./nutrisport_men.png";
import nutrisport_package from "./nutrisport_packaging.png";
import nutrisport_streetWall from "./nutrisport_streetWall.png";
import { cn } from "@/lib/utils";

import LottieComponent from "@/components/globals/lottie";
import nutri_1 from "./Nutri1.json";
import nutri_2 from "./nutri2.json"; 
import nutri_3 from "./nutri3.json";
import spark from "@/assets/lotties/spark.json";

// const primaryColor = "[#FF002D]";
// const secondaryColor = "[#F8F7EF]";

const Nutrisport = () => {
  return (
    <div className="flex gap-[1vw] h-full w-full p-[1vw]">
      {/* Columna izquierda */}
      <section className="flex flex-col gap-[1vw] w-3/4">
        <div className="flex flex-row gap-[1vw] ">
          <div className="flex flex-col w-[20vw] gap-[1vw] max-w-[16vw]">
            {/* Contenedor 1 */}
            <article
              className={cn(
                `max-h-[35vh] aspect-[9/10] bg-[#FF002D] flex items-center justify-center rounded-xl animate-slideIn12 `,
                "animate-fadeIn"
              )}
            >
              <Image
                src={nutrisport_logo}
                alt="Nutriesport"
                width={100}
                height={100}
                className="object-contain w-full h-full px-[4vw] py-[2vw] "
              />
            </article>

            {/* Contenedor 2 */}
            <article
              className={`max-h-[35vh] aspect-square bg-[#F8F7EF]  flex items-center justify-center rounded-xl animate-slideIn10`}
            >
              <Image
                src={nutrisport_Strong_logo}
                alt="Nutriesport strong"
                width={100}
                height={100}
                className="object-contain w-full h-full px-[4vw] py-[2vw] "
              />
            </article>
          </div>
          {/* Contenedor 3 */}
          <article className="flex-grow rounded-[1vw] relative overflow-hidden animate-slideIn10">
            <Image
              src={nutrisport_streetWall}
              alt="Nutriesport street wall"
              fill
              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </article>
        </div>

        <article className="flex-grow rounded-[1vw] relative overflow-hidden animate-slideIn8 ">
          <Image
            src={nutrisport_men}
            alt="Nutriesport men"
            fill
            className="object-cover object-[50%_25%]"
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-left ">
            <p
              className={`font-stagBoldNutrisport text-4xl px-[3vw] text-center text-[#F8F7EF] animate-slideIn5 `}
            >
              Es lo que sientes.
            </p>
          </div>
        </article>
      </section>

      {/* Columna derecha */}
      <section className="flex flex-col gap-[1vw] w-1/4">
        {/* Contenedor 5 */}
        <article className="flex-grow rounded-[1vw] relative overflow-hidden animate-slideIn12">
          <Image
            src={nutrisport_package}
            alt="Nutriesport packaging"
            fill
            className="object-cover"
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </article>

        {/* Contenedor 6 */}
        <article className="flex-grow rounded-[1vw] relative overflow-hidden animate-slideIn12">
          {/* <Image
            src={nutrisport_mockup}
            alt="Nutriesport mockup"
            fill
            className="object-cover"
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          /> */}
          <LottieComponent
            asset={nutri_1}
            loop={true}
            className="w-full h-full"
          />
        </article>
      </section>
    </div>
  );
};

export default Nutrisport;
