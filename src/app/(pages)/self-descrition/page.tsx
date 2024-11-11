import Header from "@/components/globals/header";
import React from "react";


import Footer from "@/components/globals/footer";
import DynamicBrandsCarousel from "@/components/sections/dynamicBrandsCarousel";
const page = () => {
  return (
    <main className="flex flex-col h-full flex-col items-center justify-between">
      <Header
        title="Self Description"
        prevPage="/bruceLee"
        nextPage="/"
        visible={true}
      />
      <section className="flex flex-1  flex-col items-center justify-start pt-4"> 
        <DynamicBrandsCarousel />
        {/* <h1 className="text-[calc(32px + 2.6vw)]">SHAPELESS BRANDS ® SHAPELESS</h1>
        <Image
          src={simplicity}
          alt="Simplicity"
          width={400}
          height={100}
          className="animate-ownFade"
        /> */}
      </section>
      <Footer title="A Barcelona—based studio where strategy, creativity, and design flow together to reach the next level." red={true} />
    </main>
  );
};

export default page;
