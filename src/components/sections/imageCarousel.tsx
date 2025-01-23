"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import Image, { StaticImageData } from "next/image";

type CarouselProps = {
  images: StaticImageData[];
};

const ImageCarousel = ({ images }: CarouselProps) => {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={4} // Espacio entre slides en px (0.25rem ≈ 0.25vw dinámico con Tailwind)
      slidesPerView={5}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      loop={true}
      className="w-full max-w-4xl h-auto"
    >
      {images.map((image, index) => (
        <SwiperSlide
          key={index}
          className="aspect-[2/3] flex justify-center items-center relative overflow-hidden rounded-lg"
        >
          <Image
            src={image || "/placeholder.svg"}
            alt={`Slide ${index + 1}`}
            fill
            sizes="w-full h-full"
            className="object-cover w-full w-full rounded-lg"
            />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;