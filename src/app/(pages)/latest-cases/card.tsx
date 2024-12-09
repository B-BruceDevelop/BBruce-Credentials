import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

interface CaseProps {
  link: string;
  backgroundImage?: string | StaticImageData;
  backgroundColor?: string;
  logo?: string | StaticImageData;
  title: string;
  subtitle: string;
  id: number;
}

export default function CaseCard({
  link,
  backgroundImage,
  backgroundColor = "bg-transparent",
  logo,
  title,
  subtitle,
  id,
}: CaseProps) {
  return (
    <Link href={link} className="block w-full h-full group">
      {/* Contenedor de imagen y logo */}
      <div className="relative w-full h-full rounded-xl">
        {/* Imagen de fondo */}
        {backgroundImage ? (
          <Image
            src={backgroundImage}
            alt={title}
            fill
            className="object-cover transition-transform duration-300  "
            sizes="w-full h-[90%] object-cover"
            priority
          />
        ) : (
          <div
            className={`w-full h-full ${backgroundColor || "bg-transparent"}`}
          />
        )}
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-background/40 transition-opacity duration-300 group-hover:opacity-0" />
        {/* Logo */}
        {logo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className={cn("relative transition-transform duration-300 group-hover:scale-110",
            id === 3 ? "w-4/5 h-2/4  " : "w-1/2 h-1/4 "


            )}>
           
              <Image
                src={logo}
                alt={`${title} logo`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          </div>
        )}
      </div>

      {/* Contenedor de título y subtítulo */}
      <div className=" flex flex-wrap w-[25vw] mt-[1vw] items-start gap-2 z-10 leading-none font-favoritRegular tracking-[-1.1px]">
        <h2 className="text-sm tracking-tight text-white truncate">{title}</h2>
        <p className="text-sm text-[#939393] ">{subtitle}</p>
      </div>
    </Link>
  );
}
