"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import { cardSliderImages } from "@/lib/data";
import { useCart } from "@/context/CartContext";

export default function CardSwiperSlider() {
  const [heartAnimations, setHeartAnimations] = useState<
    Record<number, boolean>
  >({});
  const { addSight, removeSight, isSightInCart } = useCart();

  const handleHeartClick = (index: number, event: React.MouseEvent) => {
    event.preventDefault(); // Link-ის კლიკს რომ არ გააქტიუროს
    event.stopPropagation();

    const item = cardSliderImages[index];
    const sight = {
      id: item.id || index, // id-ისთვის item.id-ს ან index-ს გამოვიყენებთ
      title: item.title,
      description: item.description,
      src: item.src,
    };

    const isInCart = isSightInCart(sight.id);

    if (isInCart) {
      removeSight(sight.id);
    } else {
      addSight(sight);
    }

    // Animation trigger
    setHeartAnimations((prev) => ({ ...prev, [index]: true }));
    setTimeout(() => {
      setHeartAnimations((prev) => ({ ...prev, [index]: false }));
    }, 1000);
  };

  const scatterHeartVariants = {
    initial: { opacity: 0, scale: 0, x: 0, y: 0 },
    animate: (i: number) => ({
      opacity: [0, 1, 0],
      scale: [0, Math.random() * 0.5 + 0.3, 0],
      x: Math.cos((i * Math.PI * 2) / 10) * (20 + Math.random() * 20),
      y: Math.sin((i * Math.PI * 2) / 10) * (20 + Math.random() * 20),
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: Math.random() * 0.2,
      },
    }),
  };

  return (
    <>
      <div className="container mx-auto pr-4 pl-5 sm:pr-5 sm:pl-8 md:pr-5 md:pl-8 lg:pr-7 lg:pl-10">
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <h3 className="text-sm sm:text-lg md:text-xl font-semibold">
              აღმოაჩინე პოპულარული სანახაობები
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
            nextEl: ".custom-next-button",
            prevEl: ".custom-prev-button",
          }}
          className="w-full"
        >
          {cardSliderImages.map((item, index) => {
            const sightId = item.id || index;
            const isInCart = isSightInCart(sightId);

            return (
              <SwiperSlide key={sightId}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
                  <Link href={`/card/${encodeURIComponent(item.title)}`}>
                    <div className="cursor-pointer select-none">
                      <div className="relative w-full h-80 sm:h-96 md:h-96 group">
                        <div className="relative w-full h-full overflow-hidden">
                          <Image
                            src={item.src}
                            alt={item.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-all duration-300 ease-in-out z-0"
                            quality={75}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                        </div>
                        <div className="p-4 absolute bottom-2 text-white z-20">
                          <h4 className="text-sm sm:text-lg font-semibold mb-2">
                            {item.title}
                          </h4>
                          <div className="text-sm">{item.description}</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <div className="absolute top-5 right-5 z-30">
                    <div className="relative">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => handleHeartClick(index, e)}
                        className="cursor-pointer"
                      >
                        <Heart
                          size={20}
                          className={`transition-all duration-200 ease-in-out ${
                            isInCart
                              ? "text-red-500 fill-red-500"
                              : "text-white hover:text-red-500"
                          }`}
                        />
                      </motion.div>

                      {/* Scattered hearts animation */}
                      {heartAnimations[index] && (
                        <div className="absolute top-0 left-0 pointer-events-none">
                          {Array.from({ length: 10 }, (_, i) => (
                            <motion.div
                              key={i}
                              custom={i}
                              variants={scatterHeartVariants}
                              initial="initial"
                              animate="animate"
                              className="absolute top-2 left-2"
                            >
                              <Heart
                                size={12}
                                className="text-white fill-white"
                              />
                            </motion.div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
