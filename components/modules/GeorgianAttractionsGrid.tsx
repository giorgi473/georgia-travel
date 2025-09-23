"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

interface Attraction {
  id: number;
  title: { ka: string; en: string };
  count: number;
  image: string;
  size: "large" | "medium" | "small";
}

const attractions: Attraction[] = [
  {
    id: 1,
    title: { ka: "კულტურული ძეგლები", en: "Cultural Monuments" },
    count: 294,
    image: "/ancient-georgian-stone-towers-svaneti-mountains.png",
    size: "large",
  },
  {
    id: 2,
    title: { ka: "ხელოვნება და კულტურა", en: "Art and Culture" },
    count: 259,
    image: "/traditional-georgian-architecture-ornate-wooden-ba.png",
    size: "medium",
  },
  {
    id: 3,
    title: { ka: "სამზარეულო და ღვინო", en: "Cuisine and Wine" },
    count: 107,
    image: "/georgian-wine-vineyard-grapes-wine-glass-kakheti.png",
    size: "medium",
  },
  {
    id: 4,
    title: { ka: "სოფვები ხანახები", en: "Villages and Sights" },
    count: 50,
    image: "/ferris-wheel-amusement-park-batumi.png",
    size: "small",
  },
  {
    id: 5,
    title: { ka: "დასვენება ქალაქში", en: "City Recreation" },
    count: 60,
    image: "/colorful-georgian-church-architecture-signagi.png",
    size: "small",
  },
  {
    id: 6,
    title: { ka: "ბუნების ძეგლები", en: "Natural Monuments" },
    count: 198,
    image: "/caucasus-mountains-landscape-georgia-nature.png",
    size: "small",
  },
];

function GeorgianAttractionsGrid() {
  const { currentLanguage } = useLanguage(); // Get the current language from context

  const largeAttraction = attractions.find((attr) => attr.size === "large");
  const mediumAttractions = attractions.filter(
    (attr) => attr.size === "medium"
  );
  const smallAttractions = attractions.filter((attr) => attr.size === "small");

  return (
    <div>
      <h2 className="mb-7 font-mono text-lg">
        {currentLanguage === "ka" ? "რა გაინტერესებს?" : "What interests you?"}
      </h2>
      <div className="flex flex-col lg:flex-row gap-3 md:gap-4 h-auto lg:h-[550px]">
        {largeAttraction && (
          <div className="w-full lg:flex-[0.8] h-64 md:h-80 lg:h-full relative group cursor-pointer overflow-hidden rounded-lg">
            <Image
              src={largeAttraction.image || "/placeholder.svg"}
              alt={largeAttraction.title[currentLanguage]} // Use title in current language
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
            <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 text-white">
              <h3 className="text-lg md:text-xl font-semibold mb-1">
                {largeAttraction.title[currentLanguage]}{" "}
                {/* Display title in current language */}
              </h3>
              <span className="text-sm opacity-90">
                ({largeAttraction.count})
              </span>
            </div>
          </div>
        )}
        <div className="w-full lg:flex-1 flex flex-col gap-3 md:gap-4">
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 lg:h-1/2">
            {mediumAttractions.map((attraction) => (
              <div
                key={attraction.id}
                className="flex-1 h-48 md:h-56 lg:h-full relative group cursor-pointer overflow-hidden rounded-lg"
              >
                <Image
                  src={attraction.image || "/placeholder.svg"}
                  alt={attraction.title[currentLanguage]} // Use title in current language
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-2 md:bottom-3 left-2 md:left-3 text-white">
                  <h4 className="text-sm md:text-base font-medium mb-1">
                    {attraction.title[currentLanguage]}{" "}
                    {/* Display title in current language */}
                  </h4>
                  <span className="text-xs opacity-90">
                    ({attraction.count})
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 lg:h-1/2">
            {smallAttractions.map((attraction) => (
              <div
                key={attraction.id}
                className="h-32 md:h-40 lg:h-full relative group cursor-pointer overflow-hidden rounded-lg"
              >
                <Image
                  src={attraction.image || "/placeholder.svg"}
                  alt={attraction.title[currentLanguage]} // Use title in current language
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-2 left-2 text-white">
                  <h5 className="text-xs md:text-sm font-medium mb-1">
                    {attraction.title[currentLanguage]}{" "}
                    {/* Display title in current language */}
                  </h5>
                  <span className="text-xs opacity-90">
                    ({attraction.count})
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GeorgianAttractionsGrid;
