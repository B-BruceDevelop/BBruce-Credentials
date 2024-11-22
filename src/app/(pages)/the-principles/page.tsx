import Footer from "@/components/globals/footer";
import Header from "@/components/globals/header";
import Image from "next/image";

import beAwareImg from "@/assets/principles/Be_aware 2.svg";
import keepUsefulIMG from "@/assets/principles/keep-the-useful.svg";
import strikeOnceIMG from "@/assets/principles/strike-once.svg";
import ResourceLoader from "@/components/globals/recourceLoader";

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
    <div className="flex flex-col h-screen w-full items-center justify-center ">
      <Header
        title="The Principles"
        prevPage="meet-us"
        nextPage="shapeless-method"
        visible={true}
      />
      <main className="grow flex items-center justify-center w-full p-[2vw] md:p-[4vw] ">
        <article className="grid grid-cols-3 w-full  rounded-xl border divide-x">
          {principles.map(({ id, description, icon }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-between w-full  "
            >
              <div className="w-full p-[1vw] items-center justify-center ">
                <p className="text-base">{id}.</p>
                <div className="flex items-center w-full justify-center">
                  <ResourceLoader>
                    <Image
                      src={icon}
                      alt="icon"
                      width={100}
                      height={100}
                      className=" w-full aspect-square max-h-[25vh] "
                    />
                  </ResourceLoader>
                </div>
              </div>
              <h3 className="w-[80%] pb-[1vw] md:pb-[1vw] text-3xl font-favoritMedium leading-none">
                {description}
              </h3>
            </div>
          ))}
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ThePrinciples;
