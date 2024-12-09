import tavares1 from "./tavares_pic.png";
import logo from "./euroleague_logo.svg";
import basquetbolShooting from "./basquetbol_shoot.png";
import tavaresHigh from "./tavares_high.png";
import Logo_2 from "./euroleague.svg";
import turkish_motorola_logos from "./turkish_motorola_logos.svg";

import Image from "next/image";

function Motorola() {
  return (
    <div className="grid h-full w-full grid-cols-4 grid-rows-2 gap-[1vw] p-[1vw]">
      <article className="bg-red-500 flex items-center justify-center text-white  rounded-[1vw] animate-slideIn5">
        <Image
          src={logo}
          alt="Imagen 1"
          width={300}
          height={300}
          className="object-cover w-full h-full rounded-[1vw]"
        />
      </article>

      <article className="col-start-1 row-start-2 bg-blue-500 flex items-center justify-center text-white  rounded-[1vw] animate-slideIn8">
        <Image
          src={tavares1}
          alt="Imagen 2"
          width={300}
          height={300}
          className="object-cover w-full h-full rounded-[1vw]"
        />
      </article>

      <article className="col-start-2 row-start-1 bg-green-500 flex items-center justify-center text-white  rounded-[1vw] animate-slideIn8">
        <Image
          src={basquetbolShooting}
          alt="Imagen 3"
          width={300}
          height={300}
          className="object-cover w-full h-full rounded-[1vw]"
        />
      </article>

      <article className="col-start-3 row-start-1 bg-purple-500 flex items-center justify-center text-white  rounded-[1vw] animate-slideIn10">
        {/* <LottieComponent asset={spark} loop={true} className="w-full h-full" /> */}
      </article>

      <article className="col-span-2 col-start-2 row-start-2 bg-yellow-500 flex items-center justify-center text-white  rounded-[1vw] animate-slideIn10">
        <Image
          src="/images/img5.png"
          alt="Imagen 5"
          width={300}
          height={300}
          className="object-cover w-full h-full rounded-[1vw]"
        />
      </article>

      <article className="row-span-2 col-start-4 row-start-1 bg-pink-500 flex items-center justify-center text-white rounded-[1vw] relative animate-slideIn12">
        <Image
          src={tavaresHigh}
          alt="Imagen Principal"
          width={300}
          height={300}
          className="object-cover w-full h-full rounded-[1vw]"
        />

        {/* Imagen Superpuesta */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={Logo_2}
            alt="Logos"
            width={150}
            height={150}
            className=" object-contain h-full w-full rounded-[1vw] scale-[1.7] translate-x-[10%]"
          />
        </div>

        {/* Imagen Superpuesta en la Esquina Superior Izquierda */}
        <div className="absolute top-0 left-0 p-[1vw]">
          <Image
            src={turkish_motorola_logos}
            alt="Extra Imagen"
            width={120}
            height={120}
            className="object-contain w-[10vw]"
          />
        </div>
      </article>
    </div>
  );
}

export default Motorola;
