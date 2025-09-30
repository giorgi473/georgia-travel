"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface ImageContentProps {
  image: string;
  title: { ka: string; en: string };
  description: { ka: string; en: string };
  buttonText?: { ka: string; en: string };
  buttonHref?: string;
  spanText?: { ka: string; en: string };
}

function ImageContent({
  image,
  title,
  description,
  buttonText = { ka: "მთავარი", en: "Home" },
  buttonHref = "/",
  spanText = { ka: "ბუნება და თავგადასავლები", en: "Nature and Adventures" },
}: ImageContentProps) {
  const { currentLanguage } = useLanguage(); // Get the current language from context

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${image}')`,
        }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-5 sm:px-8 md:px-8 lg:px-11">
          <div className="max-w-2xl">
            <h1 className="text-balance font-sans text-xl font-bold leading-tight text-white sm:text-2xl md:text-3xl lg:text-4xl">
              {title[currentLanguage]} {/* Display title in current language */}
            </h1>
            <p className="mt-6 text-pretty font-sans text-sm text-white leading-relaxed md:text-md lg:text-md">
              {description[currentLanguage]}{" "}
              {/* Display description in current language */}
            </p>
          </div>
          <div className="absolute bottom-8 flex items-center gap-2 z-10">
            <Link href={buttonHref} className="flex items-center gap-2">
              <button className="text-gray-300 hover:text-red-500 transition-all duration-300 ease-in-out cursor-pointer font-medium">
                {buttonText[currentLanguage]}{" "}
                {/* Display button text in current language */}
              </button>
              <ArrowRight className="text-white mt-1" size={15} />
            </Link>
            <span className="text-white font-sans hover:text-red-400 transition-all duration-300 ease-in-out">
              {spanText[currentLanguage]}{" "}
              {/* Display span text in current language */}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageContent;
