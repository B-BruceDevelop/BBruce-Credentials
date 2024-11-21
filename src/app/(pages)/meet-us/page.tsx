import Image from "next/image";

import Footer from "@/components/globals/footer";
import Header from "@/components/globals/header";
import ImageCarousel from "@/components/sections/imageCarousel";

import {
  EstadiOlimpic,
  TailorMadeProjects,
  TheVenue,
  Working,
  TheVenueOffice,
} from "@/assets/meetUs";

import {
  TargetPulse,
  BrandIgnition,
  ImpactJumpstart,
  Worldwide,
} from "@/assets/meetUs";

const teamImages = [
  EstadiOlimpic,
  TailorMadeProjects,
  TheVenue,
  Working,
  TheVenueOffice,
  TargetPulse,
  BrandIgnition,
  ImpactJumpstart,
  Worldwide,
  TargetPulse,
  BrandIgnition,
  ImpactJumpstart,
  Worldwide,
  TargetPulse,
  BrandIgnition,
  ImpactJumpstart,
  Worldwide,
];

function MeetUs() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <Header
        title="Meet Us"
        prevPage="/the-origin"
        nextPage="/the-principles"
        visible={true}
      />
      <main className="grid grow grid-cols-3 h-full w-full gap-[0.5vw] p-[1vw]">
        {/* Primera columna */}
        <section
          id="column-1"
          className="h-full rounded-[1vw] flex flex-col gap-[0.5vw]"
        >
          {/* Olympic Stadium */}
          <article
            id="olympic-stadium"
            className="h-[calc(50%-0.25vw)] rounded-[1vw] relative overflow-hidden"
          >
            {/* Imagen de fondo optimizada */}
            <Image
              src={EstadiOlimpic}
              alt="Olympic Stadium - Lluís Companys"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority
            />
            {/* Texto superpuesto */}
            <div className="relative z-10 flex items-start justify-center w-full h-full pt-[1vw] bg-black bg-opacity-0 text-black text-center">
              <p className="text-sm font-favoritMediumLining tracking-[-0.5px]">
                Olympic Stadium—Lluís Companys
              </p>
            </div>
          </article>
          {/* Parte inferior con subdivisiones */}
          <div className="h-[calc(50%-0.25vw)] rounded-[1vw] flex flex-col gap-[0.5vw]">
            <div className="flex gap-[0.5vw]">
              {/* The Venue BCN */}
              <article
                id="venue-bcn"
                className="aspect-[5/3] w-[calc((100%-0.5vw)/2)] rounded-[1vw] relative overflow-hidden"
              >
                {/* Imagen de fondo optimizada */}
                <Image
                  src={TheVenue}
                  alt="The Venue BCN"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
              </article>
              {/* Innovation Zone */}
              <article
                id="innovation-zone"
                className="aspect-[5/3] w-[calc((100%-0.5vw)/2)] bg-white rounded-[1vw] flex flex-col justify-center items-center text-center p-[1vw] shadow-md"
              >
                {/* Título principal */}
                <h2 className="text-3xl  text-black font-favoritMediumLining leading-none">
                  1.200m<sup>2</sup>
                </h2>

                {/* Subtítulo con degradado */}
                <p className="text-lg font-favoritMediumLining tracking-[-2px] leading- bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-purple-500 to-blue-500">
                  Innovation Zone
                </p>
              </article>
            </div>

            {/* Office Image */}
            <article
              id="office-image"
              className="flex-1 rounded-[1vw] relative overflow-hidden"
            >
              {/* Imagen de fondo optimizada */}
              <Image
                src={TheVenueOffice}
                alt="The Venue Office"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority
              />
            </article>
          </div>
        </section>

        {/* Segunda columna */}
        <section
          id="column-2"
          className="h-full rounded-[1vw] flex flex-col gap-[0.5vw]"
        >
          <div className="flex gap-[0.5vw]">
            {/* Holistic Team */}
            <article
              id="holistic-team"
              className="aspect-[3/2] w-[calc((100%-0.5vw)/2)] bg-[#F2F2F2] rounded-[1vw] flex flex-col items-center justify-center text-center p-[1vw]"
            >
              {/* Título */}
              <h2 className="text-8xl text-black font-favoritMediumLining leading-none">
                25
              </h2>

              {/* Subtítulo */}
              <p className="text-sm font-bold font-favoritMediumLining text-black leading-none">
                Holistic Team
              </p>
            </article>
            {/* Team Collaboration */}
            <article
              id="team-collaboration"
              className="aspect-[3/2] w-[calc((100%-0.5vw)/2)] bg-green-200 rounded-[1vw]"
            ></article>
          </div>
          {/* Sticky Notes */}
          <article
            id="sticky-notes"
            className="flex-grow rounded-[1vw] relative overflow-hidden"
          >
            {/* Imagen de fondo optimizada */}
            <Image
              src={Working}
              alt="Sticky Notes Collaboration"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority
            />
          </article>

          {/* Team Photos */}
          <article id="team-photos" className="flex rounded-[1vw]">
          
            <ImageCarousel images={teamImages} />
          </article>
        </section>



        {/* Tercera columna */}
        <section
  id="column-3"
  className="h-full rounded-[1vw] flex flex-col gap-[0.5vw]"
>
  {/* Tailor-Made Projects */}
  <article
    id="tailor-made-projects"
    className="flex-grow bg-blue-300 rounded-[1vw] relative overflow-hidden"
  >
    <Image
      src={TailorMadeProjects}
      alt="Tailor—Made Projects"
      fill
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      className="object-cover"
      priority
    />
    {/* Texto superpuesto */}
    <div className="relative z-10 flex items-start justify-center w-full h-full pt-[1vw] bg-black bg-opacity-0 text-black text-center">
      <p className="text-sm font-favoritMediumLining tracking-[-0.5px]">
        Tailor—Made Projects
      </p>
    </div>
  </article>

  {/* Contenedores inferiores */}
  <div className="flex flex-wrap gap-[0.5vw]">
    {/* Turnover */}
    <article
      id="turnover"
      className="aspect-[3/4] w-[calc((100%-1vw)/2)] bg-[#F2F2F2] rounded-[1vw] flex flex-col items-center justify-center text-center p-[1vw]"
    >
      <p className="text-sm font-bold font-favoritMediumLining text-black leading-none">
        Turnover
      </p>
      <h2 className="text-8xl text-black font-favoritMediumLining leading-none tracking-[-3px]">
        1.3M
      </h2>
    </article>

    {/* Brand Ignition */}
    <article
      id="brand-ignition"
      className="aspect-[3/4] w-[calc((100%-1vw)/2)] bg-[#C9AAFC] rounded-[1vw] flex flex-col justify-between overflow-hidden"
    >
      <div className="relative flex-grow">
        <Image
          src={BrandIgnition}
          alt="Brand Ignition Icon"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="text-center">
        <p className="text-base font-favoritMediumLining text-black pb-[.5vw]">
          Brand Ignition<sup>®</sup>
        </p>
      </div>
    </article>

    {/* Worldwide Clients */}
    <article
      id="worldwide-clients"
      className="aspect-[3/4] w-[calc((100%-1vw)/2)] bg-[#F2F2F2] rounded-[1vw] flex flex-col justify-between items-center text-center p-[1vw]"
    >
      <p className="text-sm font-bold text-black mb-[0.5vw]">
        Worldwide Clients
      </p>
      <div className="w-[50%] aspect-square relative mb-[1vw]">
        <Image
          src={Worldwide}
          alt="Worldwide Clients Globe"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="w-full flex justify-around">
        <ul className="text-black text-sm font-favoritMediumLining text-left tracking-[-1.5px]">
          <li>Spain</li>
          <li>France</li>
          <li>England</li>
          <li>Italy</li>
        </ul>
        <ul className="text-black text-sm font-favoritMediumLining text-left tracking-[-1.5px]">
          <li>Portugal</li>
          <li>Switzerland</li>
          <li>Morocco</li>
          <li>USA</li>
        </ul>
      </div>
    </article>

    {/* Impact Jumpstart */}
    <article
      id="impact-jumpstart"
      className="aspect-[3/4] w-[calc((100%-1vw)/2)] bg-[#EAFF37] rounded-[1vw] flex flex-col justify-between overflow-hidden"
    >
      <div className="relative flex-grow">
        <Image
          src={ImpactJumpstart}
          alt="Impact Jumpstart Icon"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="text-center">
        <p className="text-base font-favoritMediumLining text-black pb-[.5vw]">
          Impact Jumpstart<sup>®</sup>
        </p>
      </div>
    </article>

    {/* Target Pulse */}
    <article
      id="target-pulse"
      className="aspect-[3/4] w-[calc((100%-1vw)/2)] bg-[#0DF8F8] rounded-[1vw] flex flex-col justify-between overflow-hidden"
    >
      <div className="relative flex-grow">
        <Image
          src={TargetPulse}
          alt="Target Pulse Icon"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="text-center">
        <p className="text-base font-favoritMediumLining text-black pb-[.5vw]">
          Target Pulse<sup>®</sup>
        </p>
      </div>
    </article>
  </div>
</section>





      </main>

      <Footer />
    </div>
  );
}

export default MeetUs;
