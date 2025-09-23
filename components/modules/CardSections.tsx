"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";
import { cardDescription, translations } from "@/lib/data";

function CardSections() {
  const { currentLanguage } = useLanguage();

  const text = translations[currentLanguage].title;
  const description = translations[currentLanguage].description;

  return (
    <div>
      <div className="container mx-auto w-full">
        <div className="flex flex-col md:flex-col lg:flex-row items-center justify-between px-5 sm:px-8 md:px-8 lg:pl-10 lg:pr-8 mb-10 md:mb-20">
          <h1 className="text-xl w-full sm:text-3xl md:text-4xl mt-2 font-semibold mb-4 md:mb-5 whitespace-pre-line">
            {text}
          </h1>
          <div className="w-full text-gray-400 text-sm md:text-base">
            {description}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4">
        {cardDescription.map((itemCard) => (
          <Card
            key={itemCard.id}
            className="relative overflow-hidden select-none cursor-pointer"
          >
            <CardContent className="overflow-hidden">
              <Image
                src={itemCard.image}
                alt={itemCard.header[currentLanguage]}
                width={130}
                height={133}
                className="w-full object-cover rounded-md hover:scale-110 transition-all duration-300 ease-in-out"
              />
              <div className="absolute bottom-5 left-5 lg:left-5 right-0">
                <CardHeader className="">
                  <CardTitle className="text-white">
                    <h2 className="text-md sm:text-lg md:text-lg lg:text-2xl mb-2">
                      {itemCard.header[currentLanguage]}
                    </h2>
                    <p className="text-white text-sm md:text-base">
                      {itemCard.description[currentLanguage]}
                    </p>
                  </CardTitle>
                </CardHeader>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default CardSections;
