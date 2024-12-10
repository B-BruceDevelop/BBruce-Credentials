import Header from "@/components/globals/header";
import Image from "next/image";
import image from "./Bruce.jpg";
import text from "./Frase+Logo_Nike.svg";

const TrustedBrands = () => {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between">
      <Header title="Trusted Brands" prevPage="/highlight-reel" nextPage="bbruce" visible={false} />
      
      <section className="flex grow items-center justify-center w-full h-full p-[1vw] relative">
        {/* Imagen que ocupa toda la sección */}
        <Image
          src={image}
          alt=""
          fill
          className="absolute inset-0 object-cover"
        />

        {/* Imagen centrada y alineada a la izquierda */}
        <div className="relative z-10 flex justify-start items-center w-full h-full pl-[5vw]">
          <Image
            src={text}
            alt=""
            width={300}
            height={300}
            className="w-[30vw] h-auto"
          />
        </div>
      </section>

    </main>
  );
};

export default TrustedBrands;