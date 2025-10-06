"use client";

import { useLanguage } from "@/context/LanguageContext";

interface DescriptionTextProps {
  titleKa: string;
  titleEn: string;
  descriptionKa: string;
  descriptionEn: string;
}

function DescriptionText({
  titleKa,
  titleEn,
  descriptionKa,
  descriptionEn,
}: DescriptionTextProps) {
  const { currentLanguage } = useLanguage();

  const title = currentLanguage === "ka" ? titleKa : titleEn;
  const description = currentLanguage === "ka" ? descriptionKa : descriptionEn;

  return (
    <div className="container mx-auto flex flex-col items-center space-y-5">
      <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl text-center">
        {title}
      </h3>
      <div className="text-gray-600 text-sm sm:text-base space-y-4">
        {description.split("\n\n").map((paragraph, idx) => (
          <p
            key={idx}
            className="text-gray-600 text-sm sm:text-base max-w-3xl text-center"
          >
            {paragraph.trim()}
          </p>
        ))}
      </div>
    </div>
  );
}

export default DescriptionText;
