"use client";

import Image from "next/image";
import { Adventure } from "@/constants/get/data";
import { useLanguage } from "@/context/LanguageContext";

interface AdventureHeroProps {
  adventures: Adventure[];
  badgeText?: { ka: string; en: string }; // Optional badge text for reusability
}

export default function AdventureHero({
  adventures,
  badgeText = { ka: "ავტომობილი", en: "Adventure" }, // Default badge text
}: AdventureHeroProps) {
  const { currentLanguage } = useLanguage(); // Get the current language from context

  return (
    <>
      {adventures?.map((item) => (
        <div key={item.id}>
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>✦</span>
                <span>{badgeText[currentLanguage]}</span>{" "}
                {/* Display badge text in current language */}
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                {item.title[currentLanguage]}{" "}
                {/* Display title in current language */}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {item.description[currentLanguage]}{" "}
                {/* Display description in current language */}
              </p>
              <div className="flex justify-center lg:justify-start pt-2">
                <button className="border border-red-500 text-red-500 font-semibold rounded-md py-2 px-10 sm:py-2 sm:px-10 md:py-3 md:px-20 lg:py-3 lg:px-10 hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out cursor-pointer relative group">
                  <span className="relative z-10 flex items-center gap-3">
                    {item.buttonText[currentLanguage]}{" "}
                    {/* Display button text in current language */}
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </span>
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  ></div>
                </button>
              </div>
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {item.images?.map((image, index) => (
                  <div key={index} className="relative group">
                    <div className="relative overflow-hidden rounded-lg aspect-[4/5]">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt[currentLanguage]} // Use alt text in current language
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white font-medium">
                        {image.caption[currentLanguage]}{" "}
                        {/* Display caption in current language */}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
