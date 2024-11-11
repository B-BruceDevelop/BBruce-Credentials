import Footer from "@/components/globals/footer";
import Header from "@/components/globals/header";
import Timeline from "@/components/sections/timeline";
import React from "react";
import { Suspense } from "react";

const TheOrigin = () => {
  return (
    <main className="flex flex-col h-full flex-col items-center justify-center p-4">
      <Header
        title="The Origin"
        prevPage="/self-descrition"
        nextPage="/the-principles"
        visible={true}
      />
      <section className="flex flex-1 flex-col w-full h-[350px]  items-center pt-4 ">
        <div className="w-full h-full rounded-3xl overflow-hidden">
          <Suspense fallback={<p>Loading video...</p>}>
            <video
              width="320"
              height="240"
              controls
              preload="none"
              className=" w-full  h-[350px] object-cover  rounded-3xl"
            >
              <source
                src="https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4"
                type="video/mp4"
              />
            </video>
          </Suspense>
          <Timeline />
        </div>
      </section>
      <Footer title="Stages of physical and mental evolution." red={false} />
    </main>
  );
};

export default TheOrigin;
