"use client";

import { useState, useEffect } from "react";
import BrandCard from "./BrandCard";
import Footer from "@/components/globals/footer";
import { cn } from "@/lib/utils";
import { formatTextWithLineBreaks } from "@/lib/functions";

import tavares_Img from "@/assets/MixedBrandArts/tavares_img.png";
import cocteleo_img from "@/assets/MixedBrandArts/cocteleo.png";
import hello_img from "@/assets/MixedBrandArts/HOLA CIAO HELLO NI HAO.png";
import digitalProducts_img from "@/assets/MixedBrandArts/b_bruce_MM_WEB-1.jpg";

const brandData = [
  {
    id: 1,
    title: "DYNAMIC \n BRANDING",
    description:
      "We create flexible branding systems that evolve with your business.",
    image: hello_img,
    services: [
      "Brand Positioning",
      "Brand Purpose",
      "Brand Platform",
      "Brand Architecture",
      "Brand Personality",
      "Naming Generation",
      "Brand Assets Creation",
      "Visual & Verbal Identity",
      "Pictorial Language",
      "Typography Design",
      "Motion Design",
      "Brand Guidelines",
    ],
    videoUrl:
      "https://video.wixstatic.com/video/4cd4b0_3b73053045c54aacb68b7836c7486be1/1080p/mp4/file.mp4",
    footer: "Brands with Clarity & Flow.",
  },
  {
    id: 2,
    title: "CREATIVE \n CAMPAIGNS",
    description:
      "We craft innovative campaigns activations through sponsorships brands.",
    image: tavares_Img,
    services: [
      "Comunication Strategy",
      "Creative Copywriting",
      "Creative Activations",
      "Sponsorship Activation",
      "OOH Campaigns",
      "Social Campaigns",
      "Performance Campaigns",
      "Influencer Campaigns",
      "TV Commercials",
      "Radio Ads",
      "Live-Action / CGI",
      "Image Curation",
    ],
    videoUrl:
      "https://video.wixstatic.com/video/4cd4b0_32df797a6a3a4d99a3b0854e12c58a87/1080p/mp4/file.mp4",
    footer: "Stories that Resonate & Move.",
  },
  {
    id: 3,
    title: "DIGITAL \n PRODUCTS",
    description:
      "We design user-centric digital products that enhance engagement.",
    image: digitalProducts_img,
    services: [
"      UX Research & Strategy",
      "UI Design & Guidelines",
      "Responsive Design",
      "Interactive Prototyping",
      "Frontend Development",
      "Backend Development",
      "Software Development",
      "E-commerce Platforms",
      "Content Management Systems",
      "User Testing & Optimization",
      "Motion & Microinteractions",
    ],
    videoUrl:
      "https://video.wixstatic.com/video/4cd4b0_64c42c3107c54279a06c8664efb6cc79/1080p/mp4/file.mp4",
    footer: "Flows with Friendly Connections.",
  },
  {
    id: 4,
    title: "ICONIC \n PACKAGING",
    description:
      "We design memorable packaging that resonates with your brand and leaves a lasting impact.",
    image: cocteleo_img,
    services: [
      "Packaging Strategy",
      "Structural Design",
      "Graphic Packaging Design",
      "Sustainable Solutions",
      "Material Innovation",
      "Illustration",
      "Pictorial Language",
      "Packaging Prototyping",
      "Packaging Guidelines",
      "Consumer Testing",
      "Shelf Impact Testing",
    ],
    videoUrl:
      "https://video.wixstatic.com/video/4cd4b0_fbf0cc40b8654e1ea0db7fdb627e1b24/1080p/mp4/file.mp4",
    footer: "Products that Entice the Sense.",
  },
];

interface BrandSectionProps {
  index: number;
}

export default function BrandSection({ index }: BrandSectionProps) {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [footerText, setFooterText] = useState<string>(
    "Blending strategy, creativity & design for brands that leave a profound mark."
  );

  // Activar la tarjeta correspondiente al cargar el componente
  useEffect(() => {
    if (index > 0 && index <= brandData.length) {
      setExpandedId(index); // Activar la tarjeta correspondiente
      setFooterText(brandData[index - 1].footer); // Cambiar el texto del footer
    } else {
      setExpandedId(null); // No activar ninguna tarjeta si el índice es 0
      setFooterText(
        "Blending strategy, creativity & design for brands that leave a profound mark."
      );
    }
  }, [index]);

  return (
    <div className="flex flex-col w-[98vw] h-full justify-between items-center pt-[2vw]">
      <div className="flex grow w-full h-full flex-col items-center ">
        <div
          className={cn(
            "flex h-[65vh] max-h-[65vw] w-full  m-[1vw] rounded-[2vw] overflow-hidden",
            expandedId !== null ? "gap-none border border-white" : "gap-[1vw] "
          )}
        >
          {brandData.map(
            (
              { id, title, description, services, videoUrl, footer, image },
              index
            ) => (
              <BrandCard
                key={id}
                title={formatTextWithLineBreaks(title)}
                description={description}
                isExpanded={expandedId === id}
                onClick={() => {
                  setExpandedId(expandedId === id ? null : id);
                  setFooterText(footer);
                }}
                services={services}
                videoUrl={expandedId === id ? videoUrl : undefined}
                anyExpanded={expandedId !== null}
                index={index}
                footer={footer}
                image={image}
              />
            )
          )}
        </div>
      </div>
      <Footer
        title={
          expandedId === null
            ? "Blending strategy, creativity & design for brands that leave a profund mark."
            : footerText
        }
        size="4xl"
        width="60vw"
      />
    </div>
  );
}
