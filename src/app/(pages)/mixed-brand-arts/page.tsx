import Header from "@/components/globals/header";
import BrandSection from "./components/BrandSection";

const MixedBrandArts = () => {
  return (
    <div className="flex flex-col w-full h-screen items-center justify-between">
      <Header
        title="Mixed Brand Arts"
        prevPage="/key-industries-expertise"
        nextPage="/latest-cases"
        visible={true}
      />
        <BrandSection />
     
    </div>
  );
};

export default MixedBrandArts;
