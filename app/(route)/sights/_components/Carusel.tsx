"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Place {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface CaruselProps {
  title: string;
  viewAllText: string;
  places: Place[];
  onViewAllClick?: () => void;
}

function Carusel({ title, viewAllText, places }: CaruselProps) {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <span className="text-lg font-semibold text-gray-900">{title}</span>
            <button className="text-red-500 cursor-pointer hover:text-red-600 transition-all duration-300 ease-in-out font-medium">
              {viewAllText}
            </button>
          </div>
        </div>
        <div className="relative">
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
                      alt={place.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300 select-none"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h3 className="font-semibold text-lg mb-1 select-none">
                        {place.title}
                      </h3>
                      <p className="text-white/90 text-sm leading-relaxed select-none">
                        {place.description}
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
