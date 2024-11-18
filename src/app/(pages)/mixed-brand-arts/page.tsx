import Header from "@/components/globals/header";
import BrandSection from "./components/BrandSection";

const MixedBrandArts = () => {
  return (
    <main className="flex flex-col h-screen items-center justify-center">
      <Header
        title="Mixed Brand Arts"
        prevPage="/key-industries-expertise"
        nextPage="/latest-cases"
        visible={true}
      />
        <BrandSection />
      
    </main>
  );
};

export default MixedBrandArts;
