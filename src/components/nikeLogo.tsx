import Image from "next/image";

import nikeLogo from "@/assets/nike.svg";

const NikeLogo = () => {
  return (
    <Image
      src={nikeLogo}
      alt="Nike Logo"
      width={200}
      height={200}
      style={{ width: "15vw", height: "auto" }} // Ajusta automáticamente el otro valor

      className="object-contain  animate-ownFade"
      priority
    />
  );
};

export default NikeLogo;


