import Footer from "@/components/globals/footer";
import Header from "@/components/globals/header";
import Timeline from "@/components/sections/timeline";
import React from "react";
import { Suspense } from "react";

const TheOrigin = () => {
  return (
    <div className="flex flex-col h-full flex-col items-center justify-center bg-black">
      <Header
        title="The Origin"
        prevPage="/self-descrition"
        nextPage="/meet-us"
        visible={true}
      />
      <main className="flex grow flex-col w-full h-[35vh]] items-center p-4 ">
        <section className="w-full   rounded-3xl">
          <Suspense fallback={<p>Loading video...</p>}>
            <video
              width="320"
              height="240"
              autoPlay
              className=" w-full  h-[35vh] object-cover  rounded-3xl"
            >
              <source
                src="https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4"
                type="video/mp4"
              />
            </video>
          </Suspense>
        </section>
        <section className="flex grow w-full items-center">
          <Timeline />
        </section>
      </main>
      <Footer title="Stages of physical and mental evolution." red={false} />
    </div>
  );
};

export default TheOrigin;
