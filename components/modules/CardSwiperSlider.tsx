"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Heart } from "lucide-react";
import Link from "next/link";
import { cardSliderImages } from "@/lib/data";
import { TextAnimate } from "@/components/magicui/text-animate";

export default function CardSwiperSlider() {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-8 md:px-12">
        <h2 className="max-w-[630px] text-3xl sm:text-4xl md:text-5xl pb-12 md:pb-[110px]">
          <TextAnimate animation="slideLeft" by="character">
            ეს საქართველოა ქვეყანა, რომელიც დაუვიწყარ სანახაობებს გთავაზობს!
          </TextAnimate>
        </h2>
        <div className="flex items-center justify-between pr-2 mb-5">
          <div className="flex items-center gap-2">
            <h3 className="text-lg sm:text-xl md:text-2xl mr-3">
              <TextAnimate animation="slideLeft" by="character">
                აღმოაჩინე პოპულარული სანახაობები
              </TextAnimate>
            </h3>
            <button className="text-red-500 font-semibold cursor-pointer select-none text-sm sm:text-base md:text-lg">
              <TextAnimate animation="slideLeft" by="character">
                ყველას ნახვა
              </TextAnimate>
            </button>
          </div>
          <div className="flex gap-2">
            <button className="custom-prev-button bg-gray-200 p-2 rounded-full hover:bg-gray-300">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="custom-next-button bg-gray-200 p-2 rounded-full hover:bg-gray-300">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-6 md:px-8">
        <Swiper
          modules={[Navigation]}
          spaceBetween={35}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          navigation={{
            nextEl: ".custom-next-button",
            prevEl: ".custom-prev-button",
          }}
          className="w-full"
        >
          {cardSliderImages.map((item, index) => (
            <SwiperSlide key={index}>
              <Link href={`/card/${encodeURIComponent(item.title)}`}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer select-none">
                  <div className="relative w-full h-80 sm:h-96 md:h-96">
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover hover:scale-110 transition-all duration-300 ease-in-out"
                      quality={75}
                    />
                  </div>
                  <div className="absolute top-5 right-5">
                    <Heart
                      size={16}
                      className="text-white hover:text-red-500 transition-all duration-200 ease-in-out"
                    />
                  </div>
                  <div className="p-4 absolute bottom-2 text-white">
                    <h4 className="text-sm sm:text-lg font-semibold mb-2">
                      <TextAnimate animation="scaleUp" by="text">
                        {item.title}
                      </TextAnimate>
                    </h4>
                    <div className="text-sm">
                      <TextAnimate animation="scaleUp" by="text">
                        {item.description}
                      </TextAnimate>
                    </div>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
