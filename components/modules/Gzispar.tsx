"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

interface GzisparProps {
  imageSrc: string;
  titleKa: string;
  titleEn: string;
  descriptionKa: string;
  descriptionEn: string;
  buttonTextKa?: string;
  buttonTextEn?: string;
}

function Gzispar({
  imageSrc,
  titleKa,
  titleEn,
  descriptionKa,
  descriptionEn,
  buttonTextKa = "გაგიმარჯოს!",
  buttonTextEn = "Cheers!",
}: GzisparProps) {
  const { currentLanguage } = useLanguage();

  const title = currentLanguage === "ka" ? titleKa : titleEn;
  const description = currentLanguage === "ka" ? descriptionKa : descriptionEn;
  const buttonText = currentLanguage === "ka" ? buttonTextKa : buttonTextEn;

  return (
    <div className="relative w-full h-[500px] sm:h-[500px] md:h-[600px] lg:h-[600px] flex items-center justify-center">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="w-full h-full object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 w-full h-full flex flex-col justify-center text-white">
        <div className="container mx-auto pl-6 sm:pl-8 md:pl-8 lg:pl-11 inset-0 absolute flex flex-col justify-center">
          <div className="text-lg w-[85%] sm:w-[65%] md:w-[90%] lg:w-[70%] sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-semibold mb-8 sm:mb-6 md:mb-8 py-2">
            {title}
          </div>
          <div className="text-sm w-[95%] sm:w-[90%] md:w-[90%] lg:w-[65%] sm:text-base md:text-lg lg:text-lg py-2 mb-8 sm:mb-8 md:mb-8">
            {description}
          </div>
          <button className="border-2 rounded-xl cursor-pointer w-32 sm:w-36 md:w-40 lg:w-44 py-1 sm:py-2 md:py-2 border-red-500 hover:bg-red-500 transition-all duration-300 ease-in-out">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Gzispar;
