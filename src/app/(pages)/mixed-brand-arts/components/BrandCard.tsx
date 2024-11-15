"use client";

import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface BrandCardProps {
  title: string;
  description: string;
  isExpanded: boolean;
  onClick: () => void;
  services?: string[];
  videoUrl?: string;
  anyExpanded: boolean;
  image?: string;
}

export default function BrandCard({
  title,
  description,
  isExpanded,
  onClick,
  services,
  videoUrl,
  anyExpanded,
  image
}: BrandCardProps) {
  return (
    <div
      className={cn(
        "relative transition-all duration-500 ease-in-out cursor-pointer",
        isExpanded ? "flex-[3]" : anyExpanded ? "flex-[0.4]" : "flex-1"
      )}
      onClick={onClick}
    >
      <div className={cn(
        "absolute inset-[1px] rounded-[1vw] bg-black",
        "before:absolute before:inset-0 before:rounded-[1vw] before:border before:border-white/50"
      )}>
        <div className="h-full flex">
          {isExpanded ? (
            <>
              <div className="flex flex-[0.4] flex-col max-w-[18vw] p-[2vw] border-r border-white/30 justify-between">
                <div className="flex justify-between items-start gap-[1vw]">
                  <h2 className="text-base font-bold tracking-tight">{title}</h2>
                  <button className="rounded-full bg-black border-[.5px] border-white/50 p-[1vh]">
                    <Minus className="h-[1.2vw] w-[2.6vw] text-white" />
                  </button>
                </div>
                {services && (
                  <ul className="mt-2 space-y-[0.5vh] text-xs text-gray-400">
                    {services.map((service, index) => (
                      <li key={index} className="hover:text-white transition-colors">{service}</li>
                    ))}
                  </ul>
                )}
              </div>
              <div className="flex-1 p-4">
                {videoUrl && (
                  <video
                    className="w-full h-full object-cover rounded-xl"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={videoUrl} type="video/mp4" />
                  </video>
                )}
              </div>
            </>
          ) : (
            <div className={cn(
              "  ",
              anyExpanded ? " flex-col w-full  z-10 " : "p-[2vw] flex flex-col h-full justify-between  "
            )}>
              <div className={cn(
                "flex items-start justify-between",
                anyExpanded && "flex flex-col-reverse w-full h-full items-center pt-[1vw] z-10 "
              )}>
               
                <h2 className={cn(
                  " text-base font-bold tracking-tight transition-all duration-500",
                  anyExpanded && "-rotate-90 origin-top-left translate-x-[6vw] whitespace-nowrap"
                )}>{title}</h2>
                 <button className="rounded-full bg-white p-[1vh] ">
                  <Plus className="h-[1.2vw] w-[2.6vw] text-black" />
                </button>
              </div>
              {!anyExpanded && (
                <>
              {image ?  <p className="mt-4 h-full w-full text-base text-gray-400">{image}</p> : <p className="mt-4 text-xs text-gray-400">IMAGE</p>}
                <p className="mt-4 text-xs text-gray-400">{description}</p>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

