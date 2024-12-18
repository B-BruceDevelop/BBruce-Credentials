import Header from "@/components/globals/header";

const OurConviction = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <Header
        title="Our conviction"
        prevPage="/"
        nextPage="/our-essence"
        visible={true}
      />
      <main className="flex grow w-full p-[1vw] relative overflow-hidden">
        {/* Video principal */}
        <video
          autoPlay
          className="w-full h-full object-contain rounded-3xl animate-fadeIn"
        >
          <source
            src="https://video.wixstatic.com/video/4cd4b0_d6a747fd0d134564ac8c39e03447b693/1080p/mp4/file.mp4"
            type="video/mp4"
          />
        </video>
      </main>
    </div>
  );
};

export default OurConviction;