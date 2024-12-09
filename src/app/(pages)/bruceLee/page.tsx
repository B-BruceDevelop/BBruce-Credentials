'use client'
import { motion } from "framer-motion";
import Header from "@/components/globals/header";

const page = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <Header
        title="Bruce Lee Intro"
        prevPage="/"
        nextPage="/bbruce"
        visible={true}
      />
      <main className="flex-grow w-full max-h-[93vh] p-4 relative overflow-hidden">
        {/* Video principal */}
        <motion.video
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          autoPlay
          loop
          className="w-full h-full object-cover rounded-3xl"
        >
          <source
            src="https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4"
            type="video/mp4"
          />
        </motion.video>

      </main>
    </div>
  );
};

export default page;