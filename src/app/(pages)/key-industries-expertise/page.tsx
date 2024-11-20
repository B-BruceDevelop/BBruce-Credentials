import Image from "next/image";
// import Link from "next/link";

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
    image: sports,
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
    <div className="flex flex-col h-screen items-center justify-center">
      <Header
        title="Key Industries Expertise"
        prevPage="/shapeless-method"
        nextPage="/mixed-brand-arts"
        visible={true}
      />
      <main className="flex grow flex-col items-center justify-center w-full p-[1vw] ">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-4 w-full max-h-[80vh]  mx-auto px-4">
          {categories.map((category) => (
            // <Link
            //   key={category.title}
            //   href={category.href}
            //   className="group relative overflow-hidden bg-black "
            //   style={{ aspectRatio: "3 / 4" }}

            // >
            <div
            key={category.title}
            className="group relative overflow-hidden bg-black grayscale hover:grayscale-0 rounded-3xl transition-all duration-300 ease-in-out transform "
            style={{
              aspectRatio: "3 / 4",
              maxHeight: "70vh", // Restringe el tamaño máximo de las tarjetas
            }}
          >
            <Image
              src={category.image}
              alt={`${category.title} category`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              style={{
                objectFit: "contain", // Asegura que la imagen se ajuste sin exceder los límites
                maxWidth: "100%",
                maxHeight: "100%",
              }}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 py-4">
              <h2 className="text-white text-sm md:text-base font-favorite-favoritMediumLining tracking-wider text-center">
                • {category.title} •
              </h2>
            </div>
          </div>
            // </Link>
          ))}
        </div>
      </main>
      <Footer
        title="Our expertise is driven by consumer understanding."
        size="4xl"
        width="90%"
      />
    </div>
  );
};

export default KeyIndustriesExpertise;
