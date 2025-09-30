"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { SlideCard } from "@/constants/data/placeData";

interface SliderProps {
  data: SlideCard[];
  currentLanguage: "ka" | "en";
}

export default function Slider({ data, currentLanguage }: SliderProps) {
  // State to track favorite status for each slide
  const [heartActive, setHeartActive] = useState<boolean[]>(
    new Array(data.length).fill(false)
  );

  // State to track heart animation for each slide
  const [heartAnimations, setHeartAnimations] = useState<{
    [key: number]: boolean;
  }>({});

  // Static text translations
  const translations = {
    discoverAttractions: {
      ka: "აღმოაჩინე პოპულარული სანახაობები",
      en: "Discover Popular Attractions",
    },
  };

  // Handle heart click to toggle favorite and trigger animation
  const handleHeartClick = (index: number) => {
    setHeartAnimations((prev) => ({ ...prev, [index]: true }));
    setHeartActive((prev) => {
      const newHeartActive = [...prev];
      newHeartActive[index] = !newHeartActive[index];
      return newHeartActive;
    });
    setTimeout(() => {
      setHeartAnimations((prev) => ({ ...prev, [index]: false }));
    }, 1000); // Reset scattering animation after duration
  };

  // Framer Motion animation variants for hearts
  const scatterHeartVariants = {
    initial: { opacity: 0, scale: 0, x: 0, y: 0 },
    animate: (i: number) => ({
      opacity: [0, 1, 0],
      scale: [0, Math.random() * 0.5 + 0.3, 0], // Random scale between 0.3 and 0.8
      x: Math.cos((i * Math.PI * 2) / 10) * (20 + Math.random() * 20), // Random radius
      y: Math.sin((i * Math.PI * 2) / 10) * (20 + Math.random() * 20), // Random radius
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: Math.random() * 0.2,
      }, // Random delay
    }),
  };

  return (
    <>
      <div className="container mx-auto pr-5 pl-5 sm:pr-5 sm:pl-8 md:pr-5 md:pl-8 lg:pr-7 lg:pl-10">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <h3 className="text-sm sm:text-lg md:text-xl font-semibold">
              {translations.discoverAttractions[currentLanguage]}
            </h3>
          </div>
          <div className="flex gap-2">
            <button className="custom-prev-button cursor-pointer">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
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
            <button className="custom-next-button cursor-pointer">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
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
      <div className="px-4">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          navigation={{
            nextEl: ".custom-prev-button",
            prevEl: ".custom-next-button",
          }}
          className="w-full"
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative">
                <Link
                  href={`/places/${encodeURIComponent(
                    item.title[currentLanguage]
                  )}`}
                >
                  <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer select-none">
                    <div className="relative w-full h-80 sm:h-96 md:h-96 group">
                      <div className="relative w-full h-full overflow-hidden">
                        <Image
                          src={item.src as string}
                          alt={item.title[currentLanguage]}
                          fill
                          className="object-cover group-hover:scale-110 transition-all duration-300 ease-in-out z-0"
                          quality={75}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                      </div>
                      <div className="p-4 absolute bottom-2 text-white z-20">
                        <h4 className="text-sm sm:text-lg font-semibold mb-2">
                          {item.title[currentLanguage]}
                        </h4>
                        <div className="text-sm">
                          {item.additionalDescription[currentLanguage]}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <button
                  className="absolute top-5 right-5 z-30"
                  onClick={() => handleHeartClick(index)}
                >
                  <Heart
                    className={`transition-all duration-200 ease-in-out ${
                      heartActive[index]
                        ? "text-red-500 fill-red-500"
                        : "text-white hover:text-red-500"
                    }`}
                  />
                </button>
                {/* Animated hearts with Framer Motion */}
                <AnimatePresence>
                  {heartAnimations[index] &&
                    Array.from({ length: 10 }).map((_, i) => (
                      <motion.div
                        key={`${index}-${i}`}
                        className="absolute text-white"
                        style={{
                          left: "calc(100% - 2.5rem)", // Center around heart icon
                          top: "1.25rem", // Center around heart icon
                        }}
                        variants={scatterHeartVariants}
                        initial="initial"
                        animate="animate"
                        custom={i}
                      >
                        <Heart className="w-4 h-4 fill-white" />
                      </motion.div>
                    ))}
                </AnimatePresence>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
