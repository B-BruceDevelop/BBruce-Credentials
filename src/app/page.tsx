import NikeLogo from "@/components/nikeLogo";
import Link from "next/link";
import Header from "@/components/globals/header";

import { PiArrowLeftThin, PiArrowRightThin } from "react-icons/pi";

export default function Home() {
  return (
    <main className="flex w-full h-full flex-col items-center justify-center p-4">
      <Header nextPage="/bruceLee" visible={false} />
      <section className="grid grid-cols-3 w-full items-center">
  <h1 className="text-3xl font-favoritMedium tracking-[-0.3px] text-left">
    Hello
  </h1>
  <div className="flex justify-center">
    <NikeLogo />
  </div>
  <Link
    href={"/bruceLee"}
    className="text-sm flex items-center justify-end gap-1 font-favoritRegular"
  >
    Press
    <PiArrowLeftThin className="stroke-[6px] mx-1" />
    |
    <PiArrowRightThin className="stroke-[6px] mx-1" />
    to navigate
  </Link>
</section>
    </main>
  );
}
