"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useLanguage } from "@/context/LanguageContext";
import { Place } from "@/lib/data";

interface CaruselProps {
  title: { ka: string; en: string };
  viewAllText: { ka: string; en: string };
  places: Place[];
  onViewAllClick?: () => void;
}

function Carusel({ title, viewAllText, places, onViewAllClick }: CaruselProps) {
  const { currentLanguage } = useLanguage();

  return (
    <>
      <div className="px-2 lg:px-3">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3 container mx-auto px-3 sm:px-8 md:px-8 lg:px-11">
            <span className="text-lg font-semibold text-gray-900">
              {title[currentLanguage]}
            </span>
            <button
              onClick={onViewAllClick}
              className="text-red-500 cursor-pointer hover:text-red-600 transition-all duration-300 ease-in-out font-medium"
            >
              {viewAllText[currentLanguage]}
            </button>
          </div>
        </div>
        <div className="relative cursor-pointer select-none">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {places.map((place) => (
                <CarouselItem
                  key={place.id}
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden group rounded-lg hover:shadow-lg transition-shadow duration-300">
                    <Image
                      src={place.image || "/placeholder.svg"}
                      alt={place.title[currentLanguage]}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300 select-none"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-semibold text-lg mb-1 select-none">
                        {place.title[currentLanguage]}
                      </h3>
                      <p className="text-white/90 text-sm leading-relaxed select-none">
                        {place.description[currentLanguage]}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/90 hover:bg-white shadow-lg border-gray-200 cursor-pointer" />
            <CarouselNext className="right-4 bg-white/90 hover:bg-white shadow-lg border-gray-200 cursor-pointer" />
          </Carousel>
        </div>
      </div>
    </>
  );
}

export type { CaruselProps, Place };
export default Carusel;
