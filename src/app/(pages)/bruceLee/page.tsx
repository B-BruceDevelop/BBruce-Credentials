import React from "react";
import { Suspense } from "react";

import Header from "@/components/header";


const page = () => {
  return (
    <div className="flex flex-col w-full h-full flex-col items-center justify-between">
      <Header title="Bruce Lee Intro" prevPage="/" nextPage="/bbruce" visible={true} />
      <main className="flex flex-col flex-1 w-full justify-end mp-4 p-4 ">
        <Suspense fallback={<p>Loading video...</p>}>
          <video width="320" height="240" controls preload="none" className=" w-full aspect-video rounded-3xl"> 
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
