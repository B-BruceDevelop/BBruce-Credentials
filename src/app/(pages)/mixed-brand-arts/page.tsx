import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/globals/footer";
import Header from "@/components/globals/header";

import food from "@/assets/KeyIndustriesExpertise/food&drinks.png";
import sports from "@/assets/KeyIndustriesExpertise/sports.png";
import beauty from "@/assets/KeyIndustriesExpertise/beauty.png";
import telco from "@/assets/KeyIndustriesExpertise/telco.png";

const categories = [
  {
    title: "FOOD & DRINKS",
    image: food,
    href: "#food-drinks",
  },
  {
    title: "SPORTS",
    image:  sports,
    href: "#sports",
  },
  {
    title: "BEAUTY",
    image: beauty,
    href: "#beauty",
  },
  {
    title: "TELCO",
    image: telco,
    href: "#telco",
  },
];

const MixedBrandArts = () => {
  return (
    <main className="flex flex-col h-screen items-center justify-center">
      <Header
        title="Mixed Brand Arts"
        prevPage="/key-industries-expertise"
        nextPage="/lates-cases"
        visible={true}
      />
      <section className="flex grow flex-col items-center justify-center w-full ">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 w-full max-h-[80vh]  mx-auto px-4">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group relative overflow-hidden bg-black rounded-lg"
              style={{ aspectRatio: "3 / 4" }}
              
            >
            
            </Link>
            
          ))}
        </div>
      </section>
      <Footer
        title="Our expertise is driven by consumer understanding."
        size="4xl"
        width="80%"
        red={true}
      />
    </main>
  );
};

export default MixedBrandArts;
