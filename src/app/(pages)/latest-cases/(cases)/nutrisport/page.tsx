import Image from "next/image";

import nutrisport_mockup from "./Nutrisport_MockupMacBook.png";
import nutrisport_men from "./nutrisport_men.png";
import nutrisport_package from "./nutrisport_packaging.png";
import nutrisport_streetWall from "./nutrisport_streetWall.png";
import { cn } from "@/lib/utils";

import nutri_icons from "./NutriIcons.json";
import LottieComponent from "@/components/globals/lottie";


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
             <video
                className="w-full h-full object-cover rounded-xl scale-[1.01]"
                autoPlay
                loop
                muted
                playsInline
              >
                <source
                  src="https://video.wixstatic.com/video/4cd4b0_ef78372e1dd84f19b220fe6377e65681/1080p/mp4/file.mp4"
                  type="video/mp4"
                />
              </video>
            </article>

            {/* Contenedor 2 */}
            <article
              className="max-h-[35vh] aspect-square bg-[#F8F7EF]  flex items-center justify-center rounded-xl animate-slideIn10 overflow-hidden"
            >
              <LottieComponent
                asset={nutri_icons}
                loop={true}
                className="w-full h-full rounded-xl"
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
        <article className="flex-grow rounded-[1vw] relative overflow-hidden animate-slideIn10">
          <Image
            src={nutrisport_mockup}
            alt="Nutriesport mockup"
            fill
            className="object-cover"
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
          {/* <LottieComponent
            asset={nutri_1}
            loop={true}
            className="w-full h-full"
          /> */}
        </article>
      </section>
    </div>
  );
};

export default Nutrisport;
