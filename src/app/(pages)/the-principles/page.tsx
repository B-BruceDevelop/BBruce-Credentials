import Footer from "@/components/globals/footer";
import Header from "@/components/globals/header";
import Image from "next/image";

import beAwareImg from "@/assets/principles/Be_aware 2.svg";
import keepUsefulIMG from "@/assets/principles/keep-the-useful.svg";
import strikeOnceIMG from "@/assets/principles/strike-once.svg";

type Principle = {
  id: string;
  description: string;
  icon: string;
};

const principles: Principle[] = [
  {
    id: "01",
    description: "Be aware of yourself.",
    icon: beAwareImg,
  },
  {
    id: "02",
    description: "Keep the useful, reject the useless and add your uniqueness.",
    icon: keepUsefulIMG,
  },
  {
    id: "03",
    description: "Strike once, reach many.",
    icon: strikeOnceIMG,
  },
];

const ThePrinciples = () => {
  return (
    <main className="flex flex-col h-screen  items-center justify-center p-4">
      <Header
        title="The Principles"
        prevPage="the-origin"
        nextPage="shapeless-method"
        visible={true}
      />
      <div className="flex-1 items-center justify-center w-full px-8 py-[4vw]">
        <article className="grid grid-cols-3 w-full  rounded-xl border divide-x">
          {principles.map(({ id, description, icon }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-between w-full  "
            >
              <div className="w-full  p-8 items-center justify-center">
                <p className="text-base">{id}.</p>
                <div className="flex items-center w-[25vw] justify-center">

                <Image
                  src={icon}
                  alt="icon"
                  width={100}
                  height={100}
                  className=" w-full aspect-square "
                  />
                  </div>
              </div>
              <h3 className="text-3xl pb-8 leading-none w-[80%]">{description}</h3>
            </div>
          ))}
        </article>
      </div>
      <Footer />
    </main>
  );
};

export default ThePrinciples;
