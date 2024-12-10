import Image from "next/image";
import React from "react";

import BBruceLogo from "@/assets/B-BRUCE_FullName_RED.svg";
import Header from "@/components/globals/header";



const BBruce = () => {
  return (
    <main className="flex w-full h-full flex-col items-center justify-center p-4">
      <Header prevPage="/last-page"  visible={false} />
      <Image
        src={BBruceLogo}
        alt="B-Bruce"
        width={400}
        height={100}
        className="animate-FadeINScale"
      />
     
    </main>
  );
};

export default BBruce;
