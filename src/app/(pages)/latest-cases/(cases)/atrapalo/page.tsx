import Image from "next/image";

import Atrapalo_04 from "./Atrapalo_04.png";
import tipo_Atrapalo from "./tipografi_atrapalo.svg";

function Atrapalo() {
  return (
    <div className="flex gap-[1vw] h-full w-full p-[1vw]">
      {/* Columna izquierda */}
      <section className="flex flex-col gap-[1vw] w-1/4 ">
        <article className="aspect-[9/5] bg-red-100 rounded-xl"></article>
        <article className="flex-grow bg-red-400 rounded-xl"></article>
      </section>
      {/* Contenedor 1 */}
      <section className="flex flex-col gap-[1vw] w-2/4">
        <div className="flex flex-row h-1/2 gap-[1vw]">
        <article className="flex-grow w-2/3 bg-white rounded-[1vw] relative overflow-hidden">
  <Image
    src={tipo_Atrapalo}
    alt="Tipografia Atrapalo"
    fill
    className="h-full object-cover object-left py-[1vw] pl-[1vw]"
    priority
  />
</article>
          <article className="w-1/3 bg-blue-400 rounded-xl"></article>
        </div>
        <div className="flex flex-row h-1/2 gap-[1vw]">
          <article className="flex flex-col w-1/3 gap-[1vw] rounded-xl">
            <article className="flex grow bg-[#FF002D] rounded-xl justify-center items-center">
              <p className="text-xs2 font-favoritRegular tracking-tight">
                Rojo Atrapalo
              </p>
            </article>
            <article className="h-1/4 flex bg-[#05A15B] rounded-xl justify-center items-center">
              <p className="text-xs2 font-favoritRegular tracking-tight">
                Verde Floresta
              </p>
            </article>
            <article className="h-1/4 flex bg-[#FDCA06] rounded-xl justify-center items-center">
              <p className="text-xs2 font-favoritRegular tracking-tight text-[#191919]">
                Amarillo Supernova
              </p>
            </article>
          </article>
          <article className="w-2/3 bg-blue-300 rounded-xl"></article>
        </div>
      </section>
      <section className="flex flex-col gap-[1vw] w-1/4 ">
        <article className="flex-grow rounded-[1vw] relative overflow-hidden ">
          <Image
            src={Atrapalo_04}
            alt="Atrapalo img"
            fill
            className="object-cover"
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        </article>
        <article className="aspect-[9/5] bg-green-100 rounded-xl"></article>
      </section>
    </div>
  );
}

export default Atrapalo;
