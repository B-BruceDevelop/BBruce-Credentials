"use client";

import { useState } from "react";
import BrandCard from "./BrandCard";
import Footer from "@/components/globals/footer";
import { cn } from "@/lib/utils";
import {formatTextWithLineBreaks} from "@/lib/functions";

import tavares_Img from "@/assets/MixedBrandArts/tavares_img.png";
import cocteleo_img from "@/assets/MixedBrandArts/cocteleo.png";
import hello_img from "@/assets/MixedBrandArts/HOLA CIAO HELLO NI HAO.png"; 
import digitalProducts_img from "@/assets/MixedBrandArts/digital_products.png";

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
      "https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4",
    footer: "Brands with Clarity & Flow.",
  },
  {
    id: 2,
    title: "CREATIVE \n CAMPAIGNS",
    description:
      "We craft innovative campaigns activations through sponsorships brands.",
      image: tavares_Img,
    services: [
      "Campaign Strategy",
      "Creative Direction",
      "Content Creation",
      "Social Media",
      "Digital Marketing",
      "Event Activation",
      "Sponsorship Integration",
    ],
    videoUrl:
      "https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4",
    footer: "Stories that Resonate & Move.",
  },
  {
    id: 3,
    title: "DIGITAL \n PRODUCTS",
    description:
      "We design user-centric digital products that enhance engagement.",
      image: digitalProducts_img,
    services: [
      "UX/UI Design",
      "Web Development",
      "Mobile Apps",
      "E-commerce",
      "Digital Platforms",
      "Interactive Experiences",
    ],
    videoUrl:
      "https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4",
    footer: "Flows with Friendly Connections.",
  },
  {
    id: 4,
    title: "ICONIC \n PACKAGING",
    description:
      "We design memorable packaging that resonates with your brand and leaves a lasting impact.",
      image: cocteleo_img,
    services: [
      "Packaging Design",
      "Structural Design",
      "Material Selection",
      "Sustainability",
      "Production Management",
    ],
    videoUrl:
      "https://framerusercontent.com/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4",
    footer: "Products that Entice the Sense.",
  },
];

export default function BrandSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [footerText, setFooterText] = useState<string>(
    "Blending strategy, creativity & design for brands that leave a profund mark."
  );

  return (
    <div className="flex flex-col w-[98vw] h-full justify-between items-center">
      <div 
      className={cn(
        "flex h-[60vh] w-full  m-[1vw] rounded-[2vw] overflow-hidden",
        expandedId !== null ? "gap-none border border-white" : "gap-[1vw] "
      )}>
        {brandData.map(({ id, title, description, services, videoUrl, footer, image }, index) => (
          <BrandCard
            key={id}
            title={formatTextWithLineBreaks(title) }

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
        ))}
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
