"use client";

import React, { useState, useRef, forwardRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { sliderImages } from "@/lib/data";

interface ThumbnailProps {
  src: string;
  index: number;
  activeIndex: number;
  isPaused: boolean;
  onClick: (index: number, pause: boolean) => void;
}

const Thumbnail: React.FC<ThumbnailProps> = ({
  src,
  index,
  activeIndex,
  isPaused,
  onClick,
}) => {
  return (
    <div
      className={`relative w-12 h-8 sm:w-16 sm:h-12 md:w-20 md:h-14 lg:w-28 lg:h-16 cursor-pointer transition-all flex items-center justify-center ${
        activeIndex === index ? "opacity-100" : "opacity-80 hover:opacity-100"
      }`}
      onClick={() => onClick(index, activeIndex === index ? !isPaused : false)}
    >
      {activeIndex === index && (
        <div
          className="absolute w-4 h-4 sm:w-5 sm:h-5 rounded-full border-[2px] z-20 border-white flex items-center justify-center"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <div
            className={`w-1 h-1 sm:w-2 sm:h-2 bg-white ${
              isPaused ? "rotate-90" : ""
            }`}
            style={{
              ...(isPaused && {
                top: "50%",
                left: "50%",
                transform: "translate(-2%, -11%)",
                clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
              }),
            }}
          />
        </div>
      )}
      <Image
        src={src}
        alt={`Thumbnail ${index + 1}`}
        fill
        className="object-cover rounded-md"
        quality={75}
      />
    </div>
  );
};

const SwiperSliderImage = forwardRef(() => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const swiperRef = useRef<SwiperRef>(null);

  const handleThumbnailClick = (index: number, pause: boolean) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
      setActiveIndex(index);
      setIsPaused(pause);
      if (pause) {
        swiperRef.current.swiper.autoplay.stop();
      } else {
        swiperRef.current.swiper.autoplay.start();
      }
    }
  };

  return (
    <div className="relative w-full h-screen">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
          if (isPaused) {
            setIsPaused(false);
            swiper.autoplay.start();
          }
        }}
        className="w-full h-full"
      >
        {sliderImages.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={item.src}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
                quality={85}
              />
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="absolute left-4 sm:left-8 md:left-20 lg:left-40 top-1/2 transform -translate-y-1/2 text-white text-left max-w-full sm:max-w-3xl md:max-w-5xl lg:max-w-5xl select-none">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl lg:pr-4 font-bold mb-4 sm:mb-6 md:mb-8 lg:mb-10 mt-0 sm:mt-12 md:mt-16 lg:mt-[100px]">
                  {item.title}
                </h3>
                <p className="text-sm pr-1.5 sm:text-base sm:pr-5 md:text-lg lg:text-lg mb-4 sm:mb-6 md:mb-8 lg:mb-6 max-w-full sm:max-w-md md:max-w-lg lg:max-w-2xl text-gray-300">
                  {item.description}
                </p>
                <div className="flex flex-row gap-3 sm:gap-4 mt-8 sm:mt-12 md:mt-20 lg:mt-28">
                  <button className="bg-red-500 text-white px-4 sm:px-5 md:px-6 lg:px-6 py-1.5 sm:py-2 rounded hover:bg-red-600 cursor-pointer text-sm sm:text-base md:text-lg lg:text-lg">
                    დაგეგმე მოგზაურობა
                  </button>
                  <button className="bg-gray-800 text-white px-4 sm:px-5 md:px-6 lg:px-6 py-1.5 sm:py-2 rounded hover:bg-gray-600 cursor-pointer text-sm sm:text-base md:text-lg lg:text-lg">
                    გაიგე მეტი
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-10 sm:bottom-4 md:bottom-20 lg:bottom-40 right-5 sm:right-5 md:right-20 lg:right-40 z-10 flex gap-1 sm:gap-2 md:gap-3 lg:gap-3 items-center justify-start lg:hidden xl:flex md:hidden sm:hidden">
        {sliderImages.map((item, index) => (
          <Thumbnail
            key={index}
            src={item.src}
            index={index}
            activeIndex={activeIndex}
            isPaused={isPaused}
            onClick={handleThumbnailClick}
          />
        ))}
      </div>
    </div>
  );
});

SwiperSliderImage.displayName = "SwiperSliderImage";

export default SwiperSliderImage;
