"use client";

import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface Location {
  title: { ka: string; en: string };
  items: number;
  image: string;
}

interface FeaturedLocationsProps {
  locations: Location[];
}

function FeaturedLocations({ locations }: FeaturedLocationsProps) {
  const { currentLanguage } = useLanguage();

  return (
    <div className="bg-gray-100 py-20">
      <div className="container mx-auto px-5 sm:px-8 md:px-8 lg:px-11">
        <h2 className="text-sm font-bold mb-4 flex items-center gap-2">
          <Star size={20} className="mb-0.5 text-red-500" />
          {currentLanguage === "ka" ? "ძირითადი ლოკაციები" : "Top Locations"}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-8 justify-items-center">
          {locations.map((location, index) => (
            <div
              key={location.title[currentLanguage] || index}
              className="relative w-full"
            >
              <Image
                src={location.image}
                alt={location.title[currentLanguage]}
                width={400}
                height={150}
                className="rounded-lg w-full h-auto max-h-[150px] sm:min-h-[150px]"
              />
              <div className="absolute inset-0 bg-black/20 cursor-pointer rounded-lg" />
              <div className="absolute bottom-2 left-2 text-white p-1 rounded">
                <h3 className="text-sm font-semibold">
                  {location.title[currentLanguage]}
                </h3>
                <p className="text-xs">{location.items} items</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeaturedLocations;
