import React from "react";
import Image from "next/image";

interface WeatherCardProps {
  image: string;
  title: string;
  description: string;
  details: string;
  onDetailsClick: (title: string) => void;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({
  image,
  title,
  description,
  details,
  onDetailsClick,
}) => {
  return (
    <div className="rounded-lg border border-gray-200 p-4 sm:p-6 hover:border-red-500 transition-colors duration-300 min-h-[16rem] flex flex-col">
      <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full mb-4 overflow-hidden relative">
        <Image
          src={image}
          alt={title}
          width={40}
          height={48}
          className="object-contain"
        />
      </div>
      <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm sm:text-base mb-3 flex-1">
        {description}
      </p>
      <div className="flex justify-between items-center">
        <p
          className="text-black text-sm sm:text-md font-semibold cursor-pointer hover:text-red-500"
          onClick={() => onDetailsClick(title)}
        >
          {details}
        </p>
      </div>
    </div>
  );
};
