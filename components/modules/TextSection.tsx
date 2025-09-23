"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface TextSectionProps {
  title?: { ka: string; en: string };
  description?: { ka: string; en: string };
  buttonText?: { ka: string; en: string };
  image?: string;
}

function TextSection({
  title,
  description,
  buttonText,
  image,
}: TextSectionProps) {
  const { currentLanguage } = useLanguage();

  return (
    <div className="relative pt-30 flex items-center justify-center px-4 h-[70vh]">
      {image && (
        <>
          <Image
            src={image}
            alt={title ? title[currentLanguage] : "Background image"} // Use title in current language for alt text
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </>
      )}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-5">
          <h1 className="text-5xl md:text-7xl font-light text-gray-100 mb-4 tracking-tight">
            {title ? title[currentLanguage] : ""}{" "}
            {/* Display title in current language */}
          </h1>
        </div>
        <p className="text-md text-white leading-relaxed mb-5 font-light max-w-3xl mx-auto">
          {description ? description[currentLanguage] : ""}{" "}
          {/* Display description in current language */}
        </p>
        {buttonText && (
          <button className="group relative px-5 py-2 md:px-10 cursor-pointer md:py-3 lg:py-3 md:text-md bg-white border-2 border-gray-200 rounded-full text-gray-800 font-medium text-xs hover:border-red-500 hover:text-red-600 transition-all duration-300 shadow-lg hover:shadow-xl">
            <span className="relative z-10 flex items-center gap-2">
              {buttonText[currentLanguage]}{" "}
              <ArrowRight className="mt-1" size={15} />{" "}
              {/* Display button text in current language */}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        )}
      </div>
    </div>
  );
}

export default TextSection;
