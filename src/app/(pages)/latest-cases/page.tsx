import { StaticImageData } from "next/image";
// import Link from "next/link";

import Footer from "@/components/globals/footer";
import Header from "@/components/globals/header";
import CaseCard from "./card";

import atrapalo_bg from "./img/Atrapalo_BG.png";
import atrapalo_Logo from "./img/atrapalo_Logo.svg";
import motorola_BG from "./img/euroleague_img.png";
import motorola_logo from "./img/euroleague_Logo_Full.svg";
import nutrisport_BG from "./img/nutriesport_img.png";
import nutrisport_Logo from "./img/Nutriesport_logo_white.svg";


type Case = {
  id: number;
  link: string;
  backgroundImage?: StaticImageData; // Imagen de fondo opcional
  backgroundColor?: string; // Color de fondo opcional
  logo?: StaticImageData; // Logo opcional
  title: string;
  subtitle: string;
};

const lastCases: Case[] = [
  {
    id: 1,
    backgroundImage: atrapalo_bg,
    logo: atrapalo_Logo,
    link: "latest-cases/atrapalo",
    title: "Atrápalo",
    subtitle: "Rebranding + UX/UI",
  },
  {
    id: 2,
    backgroundImage: nutrisport_BG,
    logo: nutrisport_Logo,
    link: "latest-cases/nutrisport",
    title: "Nutrisport",
    subtitle: "Rebranding + Campaign + Packaging",
  },
  {
    id: 3,
    backgroundImage: motorola_BG,
    logo: motorola_logo,
    link: "latest-cases/motorola",
    title: "Motorola",
    subtitle: "Creative Campaign",
  },
];

const MixedBrandArts = () => {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between">
      <Header
        title="Latest Cases"
        prevPage="/mixed-brand-arts"
        nextPage="/highlight-reel"
      />
      <section className="flex flex-grow items-center justify-center w-full h-full p-4 gap-4 ">
        {lastCases.map(
          ({
            id,
            title,
            subtitle,
            backgroundImage,
            logo,
            backgroundColor,
            link,
          }) => (
            <div
              key={id}
              className=" flex-grow flex-shrink-0 h-[75vh] transition-[flex-grow] duration-300 ease-in-out hover:flex-grow-[4]"
            >
              <CaseCard
                key={id}
                id={id}
                backgroundImage={backgroundImage}
                logo={logo}
                backgroundColor={backgroundColor}
                title={title}
                subtitle={subtitle}
                link={link}
              />
            </div>
          )
        )}
      </section>
      <Footer />
    </main>
  );
};

export default MixedBrandArts;
