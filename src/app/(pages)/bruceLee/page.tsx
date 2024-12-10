'use client'
import Header from "@/components/globals/header";

const page = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <Header
        title="Our conviction"
        prevPage="/"
        nextPage="/self-descrition"
        visible={true}
      />
      <main className="flex-grow w-full max-h-[93vh] p-[1vw] relative overflow-hidden">
        {/* Video principal */}
        <video
          autoPlay
          className="w-full h-full object-cover rounded-3xl animate-fadeIn"
        >
          <source
            src="https://video.wixstatic.com/video/4cd4b0_e3c418d1d8e14d3fb8d1babf3189ac17/1080p/mp4/file.mp4"
            type="video/mp4"
          />
        </video>
      </main>
    </div>
  );
};

export default page;