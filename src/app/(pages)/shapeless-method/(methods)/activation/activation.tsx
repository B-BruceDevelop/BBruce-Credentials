import Image from "next/image";
import Link from "next/link";



import menuChevron from "../../menu_chevron.svg"

interface Props {
  values: string[];
}

function Activation({ values }: Props) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full ">
<section className="fixed top-0 left-0 w-full h-[4vw] max-h-[70px] z-50 flex items-center justify-center ">
  <ul className="flex w-[40%] h-full items-center justify-between text-xs md:text-sm">
    <Link
      href={"/shapeless-method/strategy"}
      className="flex-1 h-[80%] flex items-center justify-center text-greyA0 hover:text-white border-l border-white first:border-l-0 px-4 text-center"
    >
      STRATEGY
    </Link>
    <Link
      href={"/shapeless-method/design"}
      className="flex-1 h-[80%] flex items-center justify-center text-greyA0 hover:text-white border-l border-white px-4 text-center"
    >
      DESIGN
    </Link>
    <Link
      href={"/shapeless-method/activation"}
      className="flex-1 h-[80%] flex items-center justify-center bg-white text-background border-x border-white px-4 text-center"
    >
      ACTIVATION
    </Link>
  </ul>
</section>

      <section className="flex grow flex-col items-center justify-between w-full h-full  ">
        <div className="flex  flex-col items-center  w-full ">
          <ul className="flex gap-[1vw] text-sm px-8  border rounded-full">
            {values.map((value, index) => (
              <li
                key={index}
                className="flex items-center justify-center gap-[1vw] font-favoritRegular tracking-tight"
              >
                {" "}
                {index !== 0 && (
                 <span className="relative flex items-center">
                 <Image
                   src={menuChevron}
                   alt="chevron"
                   width={14}
                   height={60}
                   className="-my-[1px]" /* Añadimos un margen negativo */
                 />
               </span>
                )}
                {value}
              </li>
            ))}
          </ul>
          <h1 className="text-center text-2xl mb-8 uppercase">Brand Growth Framework</h1>

          <section className="flex flex-col items-center justify-center w-[50vw] h-[25vh] bg-red-100 "></section>

          <h2 className="text-center text-sm mt-8 font-favoritBold">STRATEGIC REPORT</h2>
        </div>
      </section>
    </div>
  );
}

export default Activation;
