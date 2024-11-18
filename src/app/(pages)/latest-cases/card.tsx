import Image from 'next/image'
import Link from 'next/link'
import type { StaticImageData } from 'next/image'

interface CaseProps {
  link: string
  backgroundImage?: string | StaticImageData
  backgroundColor?: string
  logo?: string | StaticImageData
  title: string
  subtitle: string
}

export default function CaseCard({
  link,
  backgroundImage,
  backgroundColor = "bg-transparent",
  logo,
  title,
  subtitle
}: CaseProps) {
  return (
    <Link href={link} className="block w-full h-full group">
      {/* Contenedor de imagen y logo */}
      <div className="relative w-full h-full rounded-xl overflow-hidden">
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
          <div className={`w-full h-full ${backgroundColor || 'bg-transparent'}`} />
        )}
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-0" />
        {/* Logo */}
        {logo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-1/2 h-1/4 transition-transform duration-300 group-hover:scale-110">
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
      <div className=" flex items-start gap-2 z-10"> 
        <h2 className="text-sm tracking-tight text-white">{title}</h2>
        <p className="text-sm text-[#939393]">{subtitle}</p>
      </div>
    </Link>
  )
}