import React from "react";
import Image from "next/image";

interface HeroSectionProps {
  imageUrl?: string;
  title?: string;
  description?: string;
  overlay?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const heroImages: string[] = ["/space/back-batumi.webp"];

function HeroSection({
  imageUrl,
  title,
  description,
  buttonText,
  onButtonClick,
}: HeroSectionProps) {
  return (
    <div className="relative w-full h-[50vh] overflow-hidden">
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
            {title || "მთავარი სათაური"}
          </h1>
          <p className="text-md md:text-lg max-w-[700px]">
            {description || "აქ შეგიძლიათ დაამატოთ თქვენი კონტენტი"}
          </p>
          {buttonText && (
            <button
              onClick={onButtonClick}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
