// import Footer from "@/components/globals/footer";
import Header from "@/components/globals/header";
import BrandSection from "./components/BrandSection";

const MixedBrandArts = () => {
  return (
    <main className="flex flex-col h-screen items-center justify-center">
      <Header
        title="Mixed Brand Arts"
        prevPage="/key-industries-expertise"
        nextPage="/lates-cases"
        visible={true}
      />
      {/* <section className="flex-1 w-full max-w-[95vw] px-[2vw] md:px-[4vw] pt-[2vh] md:pt-[4vh]"> */}
        <BrandSection />
      {/* </section> */}
      {/* <Footer
        title="Our expertise is driven by consumer understanding."
        size="4xl"
        width="90%"
     
      /> */}
    </main>
  );
};

export default MixedBrandArts;
