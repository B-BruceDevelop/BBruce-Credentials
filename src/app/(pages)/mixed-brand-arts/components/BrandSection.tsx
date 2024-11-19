"use client";

import { useState } from "react";
import BrandCard from "./BrandCard";
import Footer from "@/components/globals/footer";
import { cn } from "@/lib/utils";

const brandData = [
  {
    id: 1,
    title: "DYNAMIC BRANDING",
    description:
      "We create flexible branding systems that evolve with your business.",
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
    title: "CREATIVE CAMPAIGNS",
    description:
      "We craft innovative campaigns activations through sponsorships brands.",
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
    title: "DIGITAL PRODUCTS",
    description:
      "We design user-centric digital products that enhance engagement.",
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
    title: "ICONIC PACKAGING",
    description:
      "We design memorable packaging that resonates with your brand and leaves a lasting impact.",
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
    <div className="flex flex-col w-full h-full justify-between">
      <div 
      className={cn(
        "flex h-[60vh] w-full  p-[1vw]",
        expandedId !== null ? "gap-none" : "gap-[1vw]"
      )}>
        {brandData.map((brand) => (
          <BrandCard
            key={brand.id}
            title={brand.title}
            description={brand.description}
            isExpanded={expandedId === brand.id}
            onClick={() => {
              setExpandedId(expandedId === brand.id ? null : brand.id);
              setFooterText(brand.footer);
            }}
            services={brand.services}
            videoUrl={expandedId === brand.id ? brand.videoUrl : undefined}
            anyExpanded={expandedId !== null}
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
