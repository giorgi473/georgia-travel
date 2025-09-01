"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Destination {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  isLogo?: boolean;
}

const destinations: Destination[] = [
  {
    id: 1,
    title: "VISIT",
    subtitle: "საქართველო",
    image: "/visit-georgia-logo-green.png",
    isLogo: true,
  },
  {
    id: 2,
    title: "შავერგე ღვინის მარანი და კოტეჯები",
    subtitle: "ღვინო და გასტრონომია",
    image: "/nature-adventures/koteji.webp",
  },
  {
    id: 3,
    title: "კომორები",
    subtitle: "განთავსების ობიექტი",
    image: "/nature-adventures/komorebi.webp",
  },
  {
    id: 4,
    title: "გეთევეი ვანდერს ჯორჯია",
    subtitle: "ტურისტული მომსახურება",
    image: "/nature-adventures/getevei.webp",
  },
  {
    id: 5,
    title: "ჭრებალოს მარანი",
    subtitle: "ღვინო და გასტრონომია",
    image: "/nature-adventures/marani.webp",
  },
  {
    id: 6,
    title: "კარდანახის მამული",
    subtitle: "განთავსების ობიექტები",
    image: "/nature-adventures/mamuli.webp",
  },
  {
    id: 7,
    title: "ვილა ჯიჯი",
    subtitle: "განთავსების ობიექტები",
    image: "/nature-adventures/vila.webp",
  },
  {
    id: 8,
    title: "საქართველო იწყება აქ",
    subtitle: "ტურისტული მომსახურება",
    image: "/nature-adventures/aq.webp",
  },
  {
    id: 9,
    title: "სადგური",
    subtitle: "ღვინო და გასტრონომია",
    image: "/nature-adventures/sadguri.webp",
  },
  {
    id: 10,
    title: "რუმს ბათუმი",
    subtitle: "განთავსების ობიექტები",
    image: "/nature-adventures/rums.webp",
  },
  {
    id: 11,
    title: "მელოგრანო",
    subtitle: "ღვინო და გასტრონომია",
    image: "/nature-adventures/melograni.webp",
  },
  {
    id: 12,
    title: "ნიკოლაძეების მარანი",
    subtitle: "ღვინო და გასტრონომია",
    image: "/nature-adventures/nikolaze.webp",
  },
];

export default function DestinationsSwiper() {
  return (
    <div className="w-full select-none">
      <div className="flex items-center justify-between mb-10 px-4 max-w-7xl mx-auto lg:px-8">
        <div className="flex items-center gap-2">
          <h2 className="text-xs font-medium text-gray-900">
            აღმოაჩინე საუკეთესო ადგილები საქართველოში
          </h2>
          <Button
            variant="link"
            className="text-red-500 hover:text-red-600 p-0 h-auto font-normal text-xs"
          >
            ყველას ნახვა
          </Button>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="swiper-button-prev-custom h-8 w-8 rounded-full border-gray-300 hover:bg-gray-50 bg-transparent"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="swiper-button-next-custom h-8 w-8 rounded-full border-gray-300 hover:bg-gray-50 bg-transparent"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <Swiper
        className="px-6"
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={1.2}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        breakpoints={{
          640: {
            slidesPerView: 2.2,
          },
          768: {
            slidesPerView: 3.2,
          },
          1024: {
            slidesPerView: 4.2,
          },
          1280: {
            slidesPerView: 5.2,
          },
        }}
      >
        {destinations.map((destination) => (
          <SwiperSlide key={destination.id}>
            <div className="group cursor-pointer">
              <div
                className={`relative overflow-hidden rounded-lg ${
                  destination.isLogo ? "bg-green-800" : "bg-white"
                } shadow-sm hover:shadow-md transition-shadow h-60`}
              >
                {destination.isLogo ? (
                  <div className="h-full flex flex-col items-center justify-center text-white p-4">
                    <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center mb-2">
                      <span className="text-lg font-bold">V</span>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold">
                        {destination.title}
                      </div>
                      <div className="text-xs">{destination.subtitle}</div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="relative h-full overflow-hidden">
                      <Image
                        src={destination.image || "/placeholder.svg"}
                        alt={destination.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <h3 className="font-medium text-white text-sm mb-1">
                          {destination.title}
                        </h3>
                        <p className="text-xs text-gray-200">
                          {destination.subtitle}
                        </p>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
