"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Footer from "@/components/globals/footer";
import Header from "@/components/globals/header";
import ImageCarousel from "@/components/sections/imageCarousel";

import { teamMatesImages } from "@/assets/team/index";

import work1 from "./DSC015931.png"
import work2 from "./DSC015932.png"
import work3 from "./DSC015933.png"
import work4 from "./DSC015934.png"
import work6 from "./DSC015936.png"
import work7 from "./DSC015937.png"
const workImages = [
  work1,
  work2,
  work3,
  work4,
  work6,
  work7,
];
import {
  EstadiOlimpic,
  TheVenue,
  TheVenueOffice,
} from "@/assets/meetUs";

import { Worldwide } from "@/assets/meetUs";
import BarProgress from "@/components/sections/progressBar";

const teamCollaborationData = [
  { label: "Strategy", percentage: 15 },
  { label: "Creative", percentage: 20 },
  { label: "Design", percentage: 40 },
  { label: "Technology", percentage: 15 },
  { label: "Management", percentage: 10 },
];

// Definir múltiples variantes de animación
const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const scaleUpVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 10 },
  },
};

const slideInVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 10 },
  },
};

// Variante para el contenedor principal para escalonar las animaciones de los hijos
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

function MeetUs() {

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === workImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // Cambia cada 3 segundos
    return () => clearInterval(interval); // Limpia el intervalo
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <Header
        title="Meet Us"
        prevPage="/the-origin"
        nextPage="/the-principles"
        visible={true}
      />
      <motion.main
        className="grid grow grid-cols-3 h-full w-full gap-[0.5vw] p-[1vw]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Primera columna */}
        <motion.section
          id="column-1"
          className="h-full rounded-[1vw] flex flex-col gap-[0.5vw]"
          variants={containerVariants}
        >
          {/* Olympic Stadium */}
          <motion.article
            id="olympic-stadium"
            className="h-[calc(50%-0.25vw)] rounded-[1vw] relative overflow-hidden"
            variants={fadeInVariants}
          >
            <Image
              src={EstadiOlimpic}
              alt="Olympic Stadium - Lluís Companys"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority
            />
        
          </motion.article>
          {/* Parte inferior con subdivisiones */}
          <motion.div
            className="h-[calc(50%-0.25vw)] rounded-[1vw] flex flex-col gap-[0.5vw]"
            variants={containerVariants}
          >
            <motion.div
              className="flex gap-[0.5vw]"
              variants={containerVariants}
            >
              {/* The Venue BCN */}
              <motion.article
                id="venue-bcn"
                className="aspect-[5/3] w-[calc((100%-0.5vw)/2)] rounded-[1vw] relative overflow-hidden"
                variants={scaleUpVariants}
              >
                <Image
                  src={TheVenue}
                  alt="The Venue BCN"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
              </motion.article>
              {/* Innovation Zone */}
              <motion.article
                id="innovation-zone"
                className="aspect-[5/3] w-[calc((100%-0.5vw)/2)] bg-white rounded-[1vw] flex flex-col justify-center items-center text-center shadow-md"
                variants={slideInVariants}
              >
                <h2 className="text-3xl text-background font-favoritMedium leading-none tracking-[-1px]">
                  1.200m<sup>2</sup>
                </h2>
                <p className="mt-[-6px] text-md font-favoritMedium tracking-[-1px] leading-none bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-purple-500 to-blue-500">
                  Innovation Zone
                </p>
              </motion.article>
            </motion.div>

            {/* Office Image */}
            <motion.article
              id="office-image"
              className="flex-1 rounded-[1vw] relative overflow-hidden"
              variants={slideInVariants}
            >
              <Image
                src={TheVenueOffice}
                alt="The Venue Office"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority
              />
            </motion.article>
          </motion.div>
        </motion.section>

        {/* Segunda columna */}
        <motion.section
          id="column-2"
          className="h-full rounded-[1vw] flex flex-col gap-[0.5vw]"
          variants={containerVariants}
        >
          <motion.div className="flex gap-[0.5vw]" variants={containerVariants}>
            {/* Holistic Team */}
            <motion.article
              id="holistic-team"
              className="aspect-[3/2] w-[calc((100%-0.5vw)/2)] bg-[#F2F2F2] rounded-[1vw] flex flex-col items-center justify-center text-center p-[1vw]"
              variants={scaleUpVariants}
            >
              <h2 className="text-8xl text-background font-favoritMedium leading-none">
                25
              </h2>
              <p className="text-sm font-favoritMedium text-background leading-none">
                Holistic Team
              </p>
            </motion.article>

            {/* Team Collaboration */}
            <motion.article
              id="team-collaboration"
              className="flex flex-col justify-between items-center w-[calc((100%-0.5vw)/2)] bg-green-200 rounded-[1vw] p-[.5vw] py-[1.5vw]"
              variants={fadeInVariants}
            >
              {teamCollaborationData.map((item, index) => (
                <BarProgress
                  key={index}
                  label={item.label}
                  percentage={item.percentage}
                />
              ))}
            </motion.article>
          </motion.div>
          {/* Sticky Notes */}
          <motion.article
          id="sticky-notes"
          className="flex-grow rounded-[1vw] relative overflow-hidden"
        >
          <motion.div
          key={currentIndex}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0,  }}
          animate={{ opacity: 1,  }}
          exit={{ opacity: 0,  }}
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <Image
            src={workImages[currentIndex]}
            alt={`Trabajo ${currentIndex + 1}`}
            fill
            className="object-cover rounded-[1vw]"
          />
        </motion.div>
        </motion.article>

          {/* Team Photos */}
          <article id="team-photos" className="flex rounded-[1vw]">
            <ImageCarousel images={teamMatesImages} />
          </article>
        </motion.section>

        {/* Tercera columna */}
        <motion.section
          id="column-3"
          className="h-full rounded-[1vw] flex flex-col gap-[0.5vw]"
          variants={containerVariants}
        >
          {/* Tailor-Made Projects */}
          <motion.article
            id="tailor-made-projects"
            className="flex-grow bg-blue-300 rounded-[1vw] relative overflow-hidden"
            variants={slideInVariants}
          >
            <video
              src="https://video.wixstatic.com/video/4cd4b0_ece2a0322eb344cf96d775f99dae8564/1080p/mp4/file.mp4"
              autoPlay
              loop
              muted
              className="absolute inset-0 w-full h-full object-cover"
            />
        
          </motion.article>

          {/* Contenedores inferiores */}
          <motion.div
            className="flex flex-col gap-[0.5vw]"
            variants={containerVariants}
          >
            <motion.div
              className="grid grid-cols-2 gap-[0.5vw]"
              variants={containerVariants}
            >
              {/* Turnover */}
              <motion.article
                id="turnover"
                className="bg-[#F2F2F2] rounded-[1vw] flex flex-col items-center justify-center text-center p-[1vw]"
                variants={scaleUpVariants}
              >
                <p className="text-sm font-favoritMedium text-background leading-none">
                  turnover
                </p>
                <h2 className="text-8xl text-background font-favoritMedium leading-none tracking-[-3px]">
                  1.3M
                </h2>
              </motion.article>

              {/* Brand Ignition */}
              <motion.article
                id="brand-ignition"
                className="aspect-[3.4/2] bg-[#C9AAFC] rounded-[1vw] flex flex-col justify-between overflow-hidden"
                variants={scaleUpVariants}
              >
                <div className="relative flex-grow">
                  <Image
                    src="https://static.wixstatic.com/media/4cd4b0_4b80f356db9b4511aced6a3186ef4af2~mv2.gif"
                    alt="Brand Ignition Icon"
                    fill
                    className="object-contain translate-y-[10%] scale-110"
                    priority
                  />
                </div>
                <div className="text-center">
                  <p className="text-base font-favoritMedium text-background pb-[.5vw]">
                    Brand Ignition<sup>®</sup>
                  </p>
                </div>
              </motion.article>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-[0.5vw]"
              variants={containerVariants}
            >
              {/* Worldwide Clients */}
              <motion.article
                className="bg-[#F2F2F2] rounded-[1vw] flex flex-col justify-between items-center text-center p-[1vw]"
                variants={fadeInVariants}
              >
                <p className="text-sm2 font-favoritMedium text-background">
                  Worldwide Clients
                </p>
                <div className="grow m-2 aspect-square relative">
                  <Image
                    src={Worldwide}
                    alt="Worldwide Clients Globe"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="w-full flex justify-around">
                  <ul className="text-background text-sm font-favoritMedium text-left tracking-[-1px] leading-tight">
                    <li>Spain</li>
                    <li>France</li>
                    <li>England</li>
                    <li>Italy</li>
                  </ul>
                  <ul className="text-background text-sm font-favoritMedium text-left tracking-[-1px] leading-tight">
                    <li>Portugal</li>
                    <li>Switzerland</li>
                    <li>Morocco</li>
                    <li>USA</li>
                  </ul>
                </div>
              </motion.article>

              <motion.div
                className="flex flex-col gap-[0.5vw]"
                // variants={containerVariants}
              >
                {/* Impact Jumpstart */}
                <motion.article
                  className="aspect-[3.4/2] bg-[#EAFF37] rounded-[1vw] flex flex-col justify-between overflow-hidden"
                  variants={scaleUpVariants}
                >
                  <div className="relative flex-grow">
                    <Image
                      src="https://static.wixstatic.com/media/4cd4b0_df283ac5736a44789404097bf22da676~mv2.gif"
                      alt="Impact Jumpstart Icon"
                      fill
                      className="object-contain translate-y-[20%] scale-125"
                      priority
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-base font-favoritMedium text-background pb-[.5vw]">
                      Impact Jumpstart<sup>®</sup>
                    </p>
                  </div>
                </motion.article>

                {/* Target Pulse */}
                <motion.article
                  className="aspect-[3.4/2] bg-[#0DF8F8] rounded-[1vw] flex flex-col justify-between overflow-hidden"
                  variants={scaleUpVariants}
                >
                  <div className="relative flex-grow">
                    <Image
                      src="https://static.wixstatic.com/media/4cd4b0_412658229df04bf7aff1834778a6f757~mv2.gif"
                      alt="Target Pulse Icon"
                      fill
                      className="object-contain translate-y-[22%] scale-[1.4]"
                      priority
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-base font-favoritMedium text-background pb-[.5vw]">
                      Target Pulse<sup>®</sup>
                    </p>
                  </div>
                </motion.article>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.section>
      </motion.main>

      <Footer />
    </div>
  );
}

export default MeetUs;
