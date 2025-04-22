import Image from "next/image";

import StrategicReport from "./design_motion.svg";
import ShapelessValues from "../../shapelessValues";

interface Props {
  values: string[];
}

function Design({ values }: Props) {
  return (
    <>
      <section className="flex flex-col items-center justify-between w-full h-full py-[3vw]">
        <ShapelessValues values={values} />
        <div className="flex grow flex-col items-center justify-center w-full">
          <h1 className="text-center text-2xl mb-8 animate-zoomInFast">
            Brand Assets Suite
          </h1>
          <Image
            src={StrategicReport}
            alt="Strategic Report"
            width={0}
            height={0}
            className="object-contain w-[50vw]  h-auto max-h-[45vh]  animate-zoomInFast"
          />
        </div>
        <h2 className="w-[60%] py-[1vw] text-center text-sm mt-8 font-favoritBold border rounded-full animate-slideInfromBottom">
          BRAND GUIDELINES
        </h2>
      </section>
    </>
  );
}

export default Design;
