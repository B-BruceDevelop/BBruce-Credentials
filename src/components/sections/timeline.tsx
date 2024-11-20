"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

const timelineData = [
  {
    id: "savia",
    year: "2005",
    buttonText: "SAVIA DESIGN",
    location: "Sant Feliu de Codines",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae suscipit officia iste excepturi vitae, fuga nobis blanditiis fugiat molestias. Cupiditate eaque ducimus consectetur, possimus incidunt natus ut id dicta accusantium.",
    justify: "start",
    align: "left",
  },
  {
    id: "logic",
    year: "2015",
    buttonText: "LOGIC DESIGN",
    location: "Barcelona / París / Warsaw",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae suscipit officia iste excepturi vitae, fuga nobis blanditiis fugiat molestias. Cupiditate eaque ducimus consectetur, possimus incidunt natus ut id dicta accusantium.",
    justify: "center",
    align: "center",
  },
  {
    id: "bbruce",
    year: "2024",
    buttonText: "B–BRUCE",
    location: "Barcelona",
    details:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae suscipit officia iste excepturi vitae, fuga nobis blanditiis fugiat molestias. Cupiditate eaque ducimus consectetur, possimus incidunt natus ut id dicta accusantium.",
    justify: "end",
    align: "right",
  },
];

const Timeline = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setActiveButton(id === activeButton ? null : id);
  };

  const activeItem = timelineData.find((item) => item.id === activeButton);

  return (
    <section className="flex flex-col w-full items-center justify-center text-sm">
      {/* Años */}
      <div className="relative flex w-[77vw] text-white mb-4">
        {timelineData.map((item) => (
          <div
            key={item.id}
            className={cn(
              "flex-1 flex flex-col font-favoritRegularLining",
              `items-${item.align}`,
              `text-${item.align}`
            )}
          >
            <p>{item.year}</p>
          </div>
        ))}

        {/* Contenedor superpuesto con textos */}
        <div className="absolute inset-0 flex items-center justify-around w-full pointer-events-none">
          {["Desarrollo de la técnica", "Desarrollo del pensamiento"].map((text) => (
              <p
                key={text}
                className="text-white text-sm text-center pt-2 font-favoritRegularMono"
              >
                {text}
              </p>
            ))}
        </div>
      </div>

      {/* Línea y círculos */}
      <div className="relative flex items-center justify-between w-[75vw] bg-black">
        <div
          className="absolute flex items-center left-0 right-0"
          style={{ height: "20px" }}
        >
          <div className="w-full h-0.5 bg-white"></div>
        </div>
        {timelineData.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-center w-5 h-5 bg-black border-2 border-white rounded-full z-10"
            style={{ width: "20px", height: "20px" }}
          >
            {activeButton === item.id && (
              <div className="w-3 h-3 bg-white border-white rounded-full z-10"></div>
            )}
          </div>
        ))}
      </div>

      {/* Botones y detalles */}
      <div className="flex flex-col items-center w-[94%] pt-4 space-y-4">
        <div className="flex justify-between w-full">
          {timelineData.map((item) => (
            <div
              key={item.id}
              className={cn(
                "flex flex-col justify-start items-center min-w-[18vw] gap-4",
                `text-${item.align}`
              )}
            >
              <button
                className={cn(
                  "px-4 py-2 border rounded-full w-full font-favoritMediumLining text-sm",
                  activeButton === item.id
                    ? "bg-white text-black"
                    : "bg-transparent text-white hover:bg-greyA0/50"
                )}
                onClick={() => handleClick(item.id)}
              >
                {item.buttonText}
              </button>
              <p className="text-sm font-favoritRegularLining">{item.location}</p>
            </div>
          ))}
        </div>

        <div
          className={cn(
            "flex w-full text-xs text-[#888888]",
            activeItem
              ? `justify-${activeItem.justify}  `
              : "justify-center"
          )}
        >
          <p className={cn(
            "w-[70vw] md:w-[30vw] opacity-100 text-right font-favoritRegularMono",
            activeItem ? `text-${activeItem.align}` : "text-left"
          )}
          >
            {activeItem ? activeItem.details : ""}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
