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

const KeyIndustriesExpertise = () => {
  return (
    <main className="flex flex-col h-screen items-center justify-center">
      <Header
        title="Shapeless Method"
        prevPage="/shapeless-method"
        nextPage="/mixed-brand-arts"
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
              <Image
                src={category.image}
                alt={`${category.title} category`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"

              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70" />
              <div className="absolute bottom-0 left-0 right-0 py-4">
                <h2 className="text-white text-sm md:text-base font-medium tracking-wider text-center">
                  • {category.title} •
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <Footer
        title="Our expertise is driven by consumer understanding."
        size="4xl"
        width="90%"
      />
    </main>
  );
};

export default KeyIndustriesExpertise;
