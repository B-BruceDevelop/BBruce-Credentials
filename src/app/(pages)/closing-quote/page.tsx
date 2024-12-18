"use client";

import Header from "@/components/globals/header";
import Image from "next/image";
import image from "./Bruce.jpg";
import { motion } from "framer-motion";

import { useStore } from "@/store/useStore";
import { codesConfig } from "@/config/codesConfig";

const defaultQuote =
  "Not having a path as a path, nor any limitation as a limitation.";
const [firstPart, secondPart] = defaultQuote.split(",");

const CloseingQuote = () => {
  const { code } = useStore();
  const imageSrc =
    code && codesConfig[code]?.closingQuote && codesConfig[code].closingQuote;

  return (
    <main className="flex flex-col min-h-screen items-center justify-between">
      <Header
        title="Bruce Quote"
        prevPage="/trusted-brands"
        nextPage="bbruce"
        visible={false}
      />

      <section className="flex grow items-center justify-center w-full h-full p-[1vw] relative">
        {/* Imagen que ocupa toda la sección */}
        <Image
          src={image}
          alt=""
          fill
          className="absolute inset-0 object-cover"
          style={{ objectPosition: "90% center" }} // Desplaza 10% a la izquierda
        />

        <motion.div
          className="relative z-10 flex justify-start items-center w-full h-full pl-[5vw]"
          initial={{ opacity: 0, x: -100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: 100, scale: 0.8 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {imageSrc ? (
            <motion.img
              src={imageSrc.src}
              alt="Closing Quote"
              width={300}
              height={300}
              className="w-[30vw] h-auto"
            />
          ) : (
            <motion.div
              className="text-left text-white text-xl font-favoritRegular font-bold leading-tight"
              initial={{ opacity: 0, x: -100, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 100, scale: 0.8 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <p>{firstPart},</p>
              <p>{secondPart}</p>
            </motion.div>
          )}
        </motion.div>
      </section>
    </main>
  );
};

export default CloseingQuote;
