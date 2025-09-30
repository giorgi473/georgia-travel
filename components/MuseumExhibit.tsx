"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface Translation {
  ka: string;
  en: string;
}

interface MuseumExhibitProps {
  mainImageSrc: string;
  detailImage1Src: string;
  detailImage2Src: string;
  heading: Translation;
  description: Translation;
  buttonText: Translation;
  detailText1: Translation;
  detailText2: Translation;
  topSights: Translation;
}

function MuseumExhibit({
  mainImageSrc,
  detailImage1Src,
  detailImage2Src,
  heading,
  description,
  buttonText,
  detailText1,
  detailText2,
  topSights,
}: MuseumExhibitProps) {
  const { currentLanguage } = useLanguage();

  return (
    <div className="flex justify-center items-center">
      <div className="container mx-auto lg:px-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-3">
        <div className="flex flex-col justify-around p-5 sm:p-8 md:p-8 max-w-lg">
          <p className="text-black font-bold text-lg flex items-center gap-2 mb-5 lg:mb-0">
            <Star size={20} className="mb-0.5 text-red-500" />
            {topSights[currentLanguage]}
          </p>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {heading[currentLanguage]}
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            {description[currentLanguage]}
          </p>
          <button className="w-fit flex items-center gap-2 border border-red-500 text-black py-2 px-4 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
            {buttonText[currentLanguage]} <ArrowRight size={15} />
          </button>
        </div>
        <div className="flex items-center justify-start px-5 sm:px-8 md:px-8">
          <div className="relative h-[450px] w-full">
            <Image
              src={mainImageSrc}
              alt="Exhibit"
              fill
              className="rounded-lg shadow-lg object-cover"
            />
            <div className="absolute bottom-7 left-5 lg:-left-7 flex space-x-4">
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={detailImage1Src}
                  alt="Exhibit Detail 1"
                  width={180}
                  height={200}
                  className="rounded-lg shadow-lg w-28 h-32 sm:w-44 sm:h-56 cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out"
                />
                <p className="absolute bottom-5 left-5 right-2 text-white text-xs sm:text-sm">
                  {detailText1[currentLanguage]}
                </p>
              </div>
              <div className="relative overflow-hidden rounded-lg">
                <Image
                  src={detailImage2Src}
                  alt="Exhibit Detail 2"
                  width={180}
                  height={200}
                  className="rounded-lg shadow-lg w-28 h-32 sm:w-44 sm:h-56 cursor-pointer hover:scale-105 transition-all duration-200 ease-in-out"
                />
                <p className="absolute bottom-5 left-5 right-2 text-white text-xs sm:text-sm">
                  {detailText2[currentLanguage]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MuseumExhibit;
