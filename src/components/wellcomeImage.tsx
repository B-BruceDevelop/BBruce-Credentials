import Image from "next/image";

import nikeLogo from "@/assets/nike.svg";

const WellcomeImage = () => {
  return (
    <Image
      src={nikeLogo}
      alt="Nike Logo"
      width={200}
      height={200}
      className="animate-ownFade"    
    />
  );
};

export default WellcomeImage;

