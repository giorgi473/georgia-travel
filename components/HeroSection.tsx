"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  imageUrl?: string;
  title?: string;
  description?: string;
  overlay?: string;
  buttonText?: string;
}

const content = {
  ka: {
    title: "სასარგებლო ინფორმაცია",
    description:
      "სანამ საქართველოში ჩამოხვალ, მნიშვნელოვანია გაეცნო ჩვენი ქვეყნის ცხოვრების სტილსა და ისეთ საჭირო დეტალებს, როგორებიცაა, სავიზო პოლიტიკა, ადგილობრივი და რეგიონული ტრანსპორტი, ამინდი, კლიმატი, სასტუმროთა ქსელები და სხვა.",
    buttonText: "მთავარი",
  },
  en: {
    title: "Useful Information",
    description:
      "Before arriving in Georgia, it’s important to familiarize yourself with our country’s lifestyle and essential details such as visa policies, local and regional transportation, weather, climate, hotel networks, and more.",
    buttonText: "Home",
  },
};

const heroImages: string[] = ["/space/back-batumi.webp"];

function HeroSection({
  imageUrl,
  title,
  description,
  buttonText,
}: HeroSectionProps) {
  const router = useRouter();
  const { currentLanguage } = useLanguage();

  const handleClick = () => {
    router.push("/");
  };

  return (
    <div className="relative w-full h-[60vh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={imageUrl || heroImages[0]}
          alt="Hero background"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-black/50 bg-opacity-30"></div>
      <div className="relative z-10 container mx-auto flex flex-col justify-center inset-0 h-full px-5 sm:px-8 md:px-8 lg:px-11">
        <div className="text-white">
          <h1 className="text-2xl md:text-4xl font-bold mb-5">
            {title || content[currentLanguage].title}
          </h1>
          <p className="text-md md:text-lg max-w-[700px] mb-5">
            {description || content[currentLanguage].description}
          </p>
          <button
            onClick={handleClick}
            className="flex items-center gap-2 border border-red-500 rounded-lg px-4 py-2 hover:bg-red-500 transition-all duration-200 ease-in-out cursor-pointer"
          >
            {buttonText || content[currentLanguage].buttonText}{" "}
            <ArrowRight size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
