import React from "react";
import Image from "next/image";
import Olin_date from "./Frame410.png";
import { cn } from "@/lib/utils";

const Olin = () => {
  return (
    <div className="flex gap-[1vw] h-full w-full p-[1vw]">
      {/* Columna derecha (ahora principal, antes izquierda) */}
      <section className="flex flex-col gap-[1vw] aspect-[9/16] h-full">
        <article className="h-full w-full rounded-[1vw] relative overflow-hidden animate-slideIn12 flex-shrink-0">
          <Image
            src={Olin_date}
            alt="Olin packaging"
            fill
            className="object-cover"
            priority
          />
        </article>
      </section>

      {/* Columna izquierda (antes derecha) */}
      <section className="flex flex-col gap-[1vw] w-3/4">
        <div className="flex flex-row gap-[1vw] ">
          {/* Contenedor 3 */}
          <article className="flex-grow rounded-[1vw] relative overflow-hidden animate-slideIn10">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="https://video.wixstatic.com/video/ff2239_f7e35006431a46c8ac17b6d4daf7936c/1080p/mp4/file.mp4"
                type="video/mp4"
              />
            </video>
          </article>
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
                  src="https://video.wixstatic.com/video/ff2239_ba2f99c1d131490e94908b06fd888465/720p/mp4/file.mp4"
                  type="video/mp4"
                />
              </video>
            </article>

            {/* Contenedor 2 */}
            <article className="max-h-[35vh] aspect-square bg-[#03282C] flex items-center justify-center rounded-xl animate-slideIn10 overflow-hidden">
              <video
                className="w-full h-full object-cover rounded-xl"
                autoPlay
                loop
                muted
                playsInline
              >
                <source
                  src="https://video.wixstatic.com/video/ff2239_8ede552ea02d4e7d9d3338358cdf3cfd/720p/mp4/file.mp4"
                  type="video/mp4"
                />
              </video>
            </article>
          </div>
        </div>

        {/* Contenedor colores Olin */}
        <article className="flex-grow rounded-[1vw] relative overflow-hidden animate-slideIn8 ">
          <div className="flex w-full h-full">
            <div
              className="flex-1 flex items-center justify-center "
              style={{ backgroundColor: "#AFFF00" }}
            >
              <span className="font-bold text-xl text-black">Fibra</span>
            </div>
            <div
              className="flex-1 flex items-center justify-center"
              style={{ backgroundColor: "#00EDFF" }}
            >
              <span className="font-bold text-xl text-black">Movil</span>
            </div>
            <div
              className="flex-1 flex items-center justify-center"
              style={{ backgroundColor: "#EF07F6" }}
            >
              <span className="font-bold text-xl text-black">Olin TV</span>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default Olin;
