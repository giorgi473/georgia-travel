"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { servicesData } from "@/constants/data/data";
import { useLanguage } from "@/context/LanguageContext";

function FeaturedServicesCarousel() {
  const { currentLanguage } = useLanguage();

  return (
    <div className="py-10 px-5">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={false}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        loop={true}
        className="pb-10 [&_.swiper-button-next]:!text-red-500 [&_.swiper-button-prev]:!text-red-500 [&_.swiper-button-next]:!w-10 [&_.swiper-button-prev]:!w-10 [&_.swiper-button-next]:!h-10 [&_.swiper-button-prev]:!h-10 [&_.swiper-button-next]:!rounded-full [&_.swiper-button-prev]:!rounded-full [&_.swiper-button-next]:!shadow-lg [&_.swiper-button-prev]:!shadow-lg [&_.swiper-button-next:after]:!text-xl [&_.swiper-button-prev:after]:!text-xl"
      >
        {servicesData.map((service) => (
          <SwiperSlide key={service.id}>
            <div className="relative h-72 md:h-80 rounded-2xl select-none overflow-hidden cursor-pointer transition-transform duration-300 group">
              <Image
                src={service.image}
                alt={service.title[currentLanguage]}
                fill
                className="object-cover hover:scale-110 transition-all duration-300 ease-in-out"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                priority={service.id <= 4}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-5 text-white z-10">
                <h3 className="text-lg font-semibold mb-2 leading-tight group-hover:text-red-500 transition-colors duration-300">
                  {service.title[currentLanguage]}
                </h3>
                <p className="text-sm opacity-90">
                  {service.description[currentLanguage]}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default FeaturedServicesCarousel;
