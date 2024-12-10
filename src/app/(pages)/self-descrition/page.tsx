import Header from "@/components/globals/header";
import React from "react";


import Footer from "@/components/globals/footer";
import DynamicBrandsCarousel from "@/components/sections/dynamicBrandsCarousel";

const SelfDescription = () => {
  return (
    <div className="flex flex-col h-full flex-col items-center justify-between">
      <Header
        title="Self Description"
        prevPage="/bruceLee"
        nextPage="/the-origin"
        visible={true}
      />
      <main className="flex flex-1 flex-col items-center justify-start pt-4"> 
        <DynamicBrandsCarousel />
       
      </main>
      <Footer title="A Barcelona—based studio where strategy, creativity, and design flow together to reach the next level." width="70vw" size="8xl"  />
    </div>
  );
};

export default SelfDescription;
