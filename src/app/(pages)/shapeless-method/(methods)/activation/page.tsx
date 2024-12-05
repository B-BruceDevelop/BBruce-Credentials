import Image from "next/image";
import Link from "next/link";

import BBruce from "@/assets/B—BRUCE.svg";

import { MdClose } from "react-icons/md";

const values = [
  "Strategic Growth Plan   ",
  "Touchpoints definition",
  "Implementation",
  "Follow up",
];

function Strategy() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[100vh]">
      <header className="flex flex-cols-3 w-full h-[4vw]  items-center justify-between border-b border-white">
        <p className="w-[20vw] text-xs sm:text-base ml-4">Shapeless Method</p>

        <ul className="flex w-full items-center justify-center text-xs md:text-sm gap-4">
          <Link
            href={"/shapeless-method/strategy"}
            className="text-greyA0 hover:text-white"
          >
            {" "}
            STRATEGY{" "}
          </Link>
          <Link
            href={"/shapeless-method/design"}
            className="text-greyA0 hover:text-white"
          >
            {" "}
            DESIGN{" "}
          </Link>
          <Link href={"/shapeless-method/activation"} className="text-white">
            {" "}
            ACTIVATION{" "}
          </Link>
        </ul>

        <div className="flex w-[20vw] items-center justify-end">
          <Link
            href="/shapeless-method"
            className="flex items-center justify-center w-[4vw] bg-white rounded-full  mr-4"
          >
            <p className="text-sm md:text-md text-black py-[0.4vw]">
              <MdClose />
            </p>
          </Link>
        </div>
      </header>

      <main className="flex grow flex-col items-center justify-between w-full h-full  ">
        <div className="flex  flex-col items-center  w-full ">
          <ul className="flex gap-8 text-sm p-8">
            {values.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
          <h1 className="text-center text-2xl mb-8">Brand Growth Framework</h1>

          <section className="flex flex-col items-center justify-center w-[50vw] h-[25vh] bg-red-100 "></section>

          <h1 className="text-center text-sm mt-8">
            MATERIALS ACTIONS REPORTING
          </h1>
        </div>
      </main>

      <footer className="flex justify-end w-full p-8">
        <Image
          src={BBruce}
          alt="bbruce"
          width={100}
          height={50}
          className="w-[8vw]"
        />
      </footer>
    </div>
  );
}

export default Strategy;
