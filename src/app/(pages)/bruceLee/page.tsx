import React, { Suspense } from "react";
import Header from "@/components/globals/header";

const page = () => {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-between">
      <Header
        title="Bruce Lee Intro"
        prevPage="/"
        nextPage="/bbruce"
        visible={true}
      />
      <main className="grow w-full h-full max-h-[95vh] p-4 ">
        <Suspense fallback={<p>Loading video...</p>}>
          <video
            width="320"
            height="240"
            autoPlay
            className="w-full h-full object-cover rounded-3xl"
          >
            <source
              src="https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4"
              type="video/mp4"
            />
          </video>
        </Suspense>
      </main>
    </div>
  );
};

export default page;