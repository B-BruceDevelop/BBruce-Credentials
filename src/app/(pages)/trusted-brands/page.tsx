import Header from "@/components/globals/header";
import Footer from "@/components/globals/footer";

import logos from "@/assets/trustedBrandsLogos";
import Image from "next/image";

const TrustedBrands = () => {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between">
      <Header title="Trusted Brands" prevPage="/highlight-reel" />
      <section className="flex flex-grow  items-center justify-center w-full h-full p-4 gap-4">
        {logos.map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt="Trusted Brands"
            width={400}
            height={100}
            className="w-[90%] animate-ownFade"
          />
        ))}
      </section>
      <Footer
        title="Endorsed by leading brands, showcasing lasting partnerships built on mutual success."
        width="75vw"
        size="4xl"
      />
    </main>
  );
};

export default TrustedBrands;
