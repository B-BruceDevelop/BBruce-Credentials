import Link from "next/link";

import { MdClose } from "react-icons/md";
import Footer from "@/components/globals/footer";

function Atrapalo() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[100vh]">
      <header className="flex flex-cols-3 w-full h-[4vw]  items-center justify-between border-b border-white">
        <p className="w-[20vw] text-xs sm:text-base ml-4">
          Last Cases
        </p>

        <ul className="flex w-full items-center justify-center text-xs md:text-sm gap-4">
          <Link href={"/latest-cases/atrapalo"} className="text-white">
            ATRÁPALO
          </Link>
          <Link
            href={"/latest-cases/nutrisport"}
            className="text-greyA0 hover:text-white"
          >
            NUTRISPORT
          </Link>
          <Link
            href={"/latest-cases/motorola"}
            className="text-greyA0 hover:text-white"
          >
            MOTOROLA
          </Link>
        </ul>

        <div className="flex w-[20vw] items-center justify-end">
          <Link
            href="/latest-cases"
            className="flex items-center justify-center w-[4vw] bg-white rounded-full  mr-4"
          >
            <p className="text-sm md:text-md text-black py-[0.4vw]">
              <MdClose />
            </p>
          </Link>
        </div>
      </header>

        <main className="grid grow grid-cols-4 grid-rows-4 h-full w-full gap-[1vw] p-4">
          <div className="bg-red-500 rounded-lg">1</div>
          <div className="row-span-3 col-start-1 row-start-2 bg-white rounded-lg">2</div>
          <div className="col-span-3 row-span-4 col-start-2 row-start-1 bg-red-500 rounded-lg">3</div>
        </main>
      

      <Footer
        title="Our goal was to revitalize the brand with a cohesive design system and tone of voice to better engage its millions of daily users."
        width="35vw"
        size="sm"
        className="text-[#939393]"
      />
    </div>
  );
}

export default Atrapalo;
