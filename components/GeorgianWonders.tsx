"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

interface Wonder {
  id: string;
  name: { ka: string; en: string };
  image: string;
  description: { ka: string; en: string };
}

interface GeorgianWondersProps {
  wonders: Wonder[];
}

const GeorgianWonders: React.FC<GeorgianWondersProps> = ({ wonders }) => {
  const { currentLanguage } = useLanguage();

  return (
    <div className="container mx-auto px-5 sm:px-8 md:px-8 lg:px-11 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-5">
      {wonders.map((wonder) => (
        <div key={wonder.id}>
          <div className="overflow-hidden rounded-lg">
            <Image
              src={wonder.image}
              alt={currentLanguage === "ka" ? wonder.name.ka : wonder.name.en}
              width={400}
              height={192}
              className="w-full h-64 object-cover rounded-lg cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out"
            />
          </div>
          <h3 className="mt-2 font-semibold">
            {currentLanguage === "ka" ? wonder.name.ka : wonder.name.en}
          </h3>
          <p className="text-sm text-gray-600">
            {currentLanguage === "ka"
              ? wonder.description.ka
              : wonder.description.en}
          </p>
        </div>
      ))}
    </div>
  );
};

export default GeorgianWonders;
