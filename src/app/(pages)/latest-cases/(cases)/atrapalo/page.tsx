import Image from "next/image";

import Atrapalo_04 from "./Atrapalo_04.png";
import Atrapalo_gif from "./Atrapalo1.json";
import Atrapalo_logo from "./Atrapalo2.json";
import Atrapalo_Hola from "./Atrapalo3_2.json";

import tipo_Atrapalo from "./tipografi_atrapalo.svg";
import LottieComponent from "@/components/globals/lottie";

function Atrapalo() {
  return (
    <div className="flex gap-[1vw] h-full w-full p-[1vw]">
      {/* Columna izquierda */}
      <section className="flex flex-col gap-[1vw] w-1/4 rounded-[1vw] ">
        <article className="aspect-[9/5]  rounded-[1vw] animate-slideIn5 overflow-hidden">
          <LottieComponent
            asset={Atrapalo_logo}
            loop={true}
            className=" rounded-xl "
          />
        </article>
        <article className="flex-grow bg-white rounded-[1vw] animate-slideIn8 bg-[#F2F2F2] overflow-hidden">
          <LottieComponent
            asset={Atrapalo_Hola}
            loop={true}
            className="w-full h-full rrounded-[1vw]"
          />
        </article>
      </section>

      {/* Contenedor principal */}
      <section className="flex flex-col gap-[1vw] w-2/4">
        <div className="flex flex-row h-1/2 gap-[1vw]">
          <article className="flex-grow w-2/3 bg-white rounded-[1vw] relative overflow-hidden animate-slideIn10">
            <Image
              src={tipo_Atrapalo}
              alt="Tipografia Atrapalo"
              fill
              className="h-full object-cover object-left py-[1vw] pl-[1vw]"
              priority
            />
          </article>
          <article className="w-1/3 bg-blue-400 rounded-xl animate-slideIn12"></article>
        </div>

        <div className="flex flex-row h-1/2 gap-[1vw]">
          <article className="flex flex-col w-1/3 gap-[1vw] rounded-xl">
            <article className="flex grow bg-[#FF002D] rounded-xl justify-center items-center animate-slideIn5">
              <p className="text-xs2 font-favoritRegular tracking-tight">
                Rojo Atrapalo
              </p>
            </article>
            <article className="h-1/4 flex bg-[#05A15B] rounded-xl justify-center items-center animate-slideIn8">
              <p className="text-xs2 font-favoritRegular tracking-tight">
                Verde Floresta
              </p>
            </article>
            <article className="h-1/4 flex bg-[#FDCA06] rounded-xl justify-center items-center animate-slideIn10">
              <p className="text-xs2 font-favoritRegular tracking-tight text-[#191919]">
                Amarillo Supernova
              </p>
            </article>
          </article>

          <article className="w-2/3 rounded-[1vw] animate-slideIn12 overflow-hidden">
            <video
              className="w-full h-full object-cover scale-[1.01]"
              autoPlay
              loop
              muted
              playsInline
              src="https://video.wixstatic.com/video/4cd4b0_b54571b08db04766ac987e2a7c6976d2/360p/mp4/file.mp4"
            />
          </article>
        </div>
      </section>

      <section className="flex flex-col gap-[1vw] w-1/4 ">
        <article className="flex-grow rounded-[1vw] relative overflow-hidden animate-slideIn8">
          <Image
            src={Atrapalo_04}
            alt="Atrapalo img"
            fill
            className="object-cover"
            priority
          />
        </article>
        <article className=" bg-green-100 rounded-[1vw] animate-slideIn5 overflow-hidden">
          <LottieComponent
            asset={Atrapalo_gif}
            loop={true}
            className=" rounded-[1vw] "
          />
        </article>
      </section>
    </div>
  );
}

export default Atrapalo;
