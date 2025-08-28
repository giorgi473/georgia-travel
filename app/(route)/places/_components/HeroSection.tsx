import React from "react";
import Image from "next/image";

// Props-ების ტიპები
interface HeroSectionProps {
  imageUrl?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

// სურათების მასივი
const heroImages: string[] = [
  "https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=1024x1024&w=0&k=20&c=z8_rWaI8x4zApNEEG9DnWlGXyDIXe-OmsAyQ5fGPVV8=",
];

function HeroSection({
  imageUrl,
  title,
  description,
  buttonText,
  onButtonClick,
}: HeroSectionProps) {
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
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 px-4">
            {title || "მთავარი სათაური"}
          </h1>
          <p className="text-lg md:text-xl mb-8 px-10">
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
