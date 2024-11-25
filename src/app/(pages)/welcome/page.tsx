
import Image from "next/image";

import prevIcon from "@/assets/Polygon_left.svg";
import nextIcon from "@/assets/Polygon_right.svg";
import WelcomeImage from "@/components/wellcomeImage";
import Link from "next/link";
import Header from "@/components/globals/header";

export default function Home() {

  return (
    <main className="flex w-full h-full flex-col items-center justify-center p-4">
      <Header prevPage="/" nextPage="/bruceLee" visible={false} />
      <section className="flex w-full items-center justify-between">
        <h1 className="text-3xl font-favoritMedium tracking-[-0.3px]">Hello</h1>
        <WelcomeImage />
        <Link href={"/bruceLee"}
         className="text-sm flex gap-1" >
          Press
          <Image src={prevIcon} alt="Previous Icon" width={16} height={16} />
          |
          <Image src={nextIcon} alt="Next Icon" width={16} height={16} />
          to navigate
        </Link>
      </section>
    </main>
  );
}
