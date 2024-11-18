import Header from "@/components/globals/header";
import Footer from "@/components/globals/footer";


import spark from "./spark.json";
import LottieComponent from "@/components/globals/lottie";

const HighlightReel = () => {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between">
      <Header
        title="Highlight Reel"
        prevPage="/latest-cases"
        nextPage="/trusted-brands"
      />
      <section className="flex flex-grow  items-center justify-center w-full h-full p-4 gap-4 bg-red-500">
        <LottieComponent
          asset={spark}
          loop={true}
          className="w-full h-full"
        />
      </section>
      <Footer
        title="We don’t aim to impress; it’s to create lasting impact, aligning each element with the brand’s spirit to resonate deeply with audiences."
        width="90vw"
        size="4xl"
      />
    </main>
  );
};

export default HighlightReel;
