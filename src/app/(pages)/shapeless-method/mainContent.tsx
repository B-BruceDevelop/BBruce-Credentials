"use client";

import LottieComponent from "@/components/globals/lottie";
import esquema from "./Esquema_Normal_v2.json";

import { motion } from "framer-motion";

type MethodsType = {
  name: string;
  keywords: string[];
};

type MainContentProps = {
  methods: MethodsType[];
};

const MainContent = ({ methods }: MainContentProps) => {
  return (
    <>
      <div className="flex flex-col-3 w-[90%] items-start justify-around  text-xl pt-8">
        <p className="w-[20%] text-center font-favoritRegularMono text-xs2 tracking-tight">
          Be aware of yourself.
        </p>
        <div className="w-[35%] text-center font-favoritRegularMono text-xs2 tracking-tight">
          <p>Keep the useful, reject the useless </p>
          <p> and add your uniqueness. </p>
        </div>
        <p className="w-[20%] text-center font-favoritRegularMono text-xs2 tracking-tight">
          Strike once, reach many.
        </p>
      </div>

      <div className="w-[90%] h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          className="w-[98%] absolute -mt-10 py-8"
        >
          <LottieComponent asset={esquema} />
        </motion.div>

        <div className="absolute top-50% left-0 w-full flex items-center justify-center h-[400px] px-8">
          <div className="flex justify-between w-[40vw] items-center">
            {["HYPOTHESIS", "SOLUTION"].map((word) => (
              <div
                key={word}
                className="flex flex-col items-center justify-center w-[8vw] aspect-square bg-white text-background rounded-full z-10"
              >
                <p className="text-xs2 font-favoritRegularMono">{word}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute top-50% left-0 w-full flex items-center justify-between h-[400px] px-8">
          {methods.map(({ name, keywords }) => (
            <article
              key={name}
              className="flex flex-col justify-between w-1/3 h-[20vw] items-center rounded-lg "
            >
              <p className="text-xs2 font-favoritRegularMono">{keywords[0]}</p>
              <div className="flex flex-col items-center justify-center w-full h-full">
                <h2 className="text-lg font-favoritMedium">{name}</h2>
                {/* <div
                  className="w-[5vw] bg-white rounded-full flex items-center justify-center hover:bg-white/50"
                >
                  <p className="text-base text-background">+</p>
                </div> */}
              </div>
              <p className="text-xs2 font-favoritRegularMono">{keywords[1]}</p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainContent;
