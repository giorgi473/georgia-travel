"use client";

import React from "react";
import Image from "next/image";

interface GzisparProps {
  imageSrc: string;
  title: string;
  description: string;
}

function Gzispar({ imageSrc, title, description }: GzisparProps) {
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="relative z-10 w-full h-full flex flex-col justify-center text-white px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-semibold mb-4 sm:mb-6 md:mb-8 px-4 pl-2 sm:pl-16 md:pl-28 lg:pl-28 py-2 max-w-[90%] sm:max-w-[80%] md:max-w-[90%] lg:max-w-[60%]">
          {title}
        </div>
        <div className="text-sm sm:text-base md:text-lg lg:text-lg px-4 pl-2 sm:pl-16 md:pl-28 lg:pl-28 py-2 mb-4 sm:mb-6 max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]">
          {description}
        </div>
        <button className="border-2 rounded-xl cursor-pointer w-32 sm:w-36 md:w-40 ml-2 sm:ml-16 md:ml-28 lg:ml-28 lg:w-44 py-1 sm:py-2 md:py-2 border-red-500 hover:bg-red-500 transition-all duration-300 ease-in-out">
          გაგიმარჯოს!
        </button>
      </div>
    </div>
  );
}

export default Gzispar;
