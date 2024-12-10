import Header from "@/components/globals/header";
import Footer from "@/components/globals/footer";

const HighlightReel = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-between">
      <Header
        title="Highlight Reel"
        prevPage="/latest-cases"
        nextPage="/trusted-brands"
      />
      <main className="flex flex-grow items-center justify-center w-full h-full max-h-[85vw] p-[1vw] ">
       <video
          className="w-full h-full object-cover rounded-xl "
          autoPlay
          
          playsInline
        >
          <source
            src="https://video.wixstatic.com/video/4cd4b0_80efd8431c8c46dda3dc9f05b6d6325a/1080p/mp4/file.mp4"
            type="video/mp4"
          />
        </video>
      </main>
      <Footer
        title="We don’t aim to impress; it’s to create lasting impact, aligning each element with the brand’s spirit to resonate deeply with audiences."
        width="full"
        size="4xl"
      />
    </div>
  );
};

export default HighlightReel;
