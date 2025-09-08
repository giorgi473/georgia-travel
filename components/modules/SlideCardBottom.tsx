"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useInView, useAnimation } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

interface EventCard {
  id: number;
  image: string;
  title: string;
  description: string;
  href: string;
}

function SlideCardBottom() {
  const events: EventCard[] = [
    {
      id: 1,
      image: "/cardImage/kloun.webp",
      title: "კლოუნის თვალთახედვა",
      description: "თეატრი",
      href: "https://tkt.ge/show/21191",
    },
    {
      id: 2,
      image: "/cardImage/batumi.webp",
      title: "SOHO BATUMI ENDORPHINS",
      description: "კონცერტები",
      href: "https://tkt.ge/show/23725/soho-batumi-endorphins",
    },
    {
      id: 3,
      image: "/cardImage/sevil.webp",
      title: "JENNIFER LOPEZ",
      description: "კონცერტები",
      href: "https://tkt.ge/show/21191",
    },
    {
      id: 4,
      image: "/cardImage/ten.webp",
      title: "ECHO EVENTS TH;EN",
      description: "კონცერტები",
      href: "https://tkt.ge/show/23841/echo-events-then",
    },
    {
      id: 5,
      image: "/cardImage/ero.webp",
      title: "ეროვნული სიმპონიური ორკესტრი",
      description: "კონცერტები",
      href: "https://tkt.ge/show/22093/erovnuli-simfoniuri-orkestri",
    },
    {
      id: 6,
      image: "/cardImage/soho.webp",
      title: "SOHO BATUMI - CHINAU",
      description: "კონცერტები",
      href: "https://tkt.ge/show/23633/soho-batumi-chinau",
    },
    {
      id: 7,
      image: "/cardImage/mausi.webp",
      title: "ავი მუსაიფი",
      description: "თეატრი",
      href: "https://tkt.ge/show/13255/avi-musaifi",
    },
    {
      id: 8,
      image: "/cardImage/piano.webp",
      title: "თბილისი პიანო ფესტი",
      description: "კონცერტები",
      href: "https://tkt.ge/show/23780/tbilisi-piano-festi",
    },
    {
      id: 9,
      image: "/cardImage/sux.webp",
      title: "სუხიშვილები 80",
      description: "კონცერტები",
      href: "https://tkt.ge/show/23806/sukhishvilebi-80",
    },
    {
      id: 10,
      image: "/cardImage/lisi.webp",
      title: "ლისის სამთო ფესტივალი",
      description: "სპორტი",
      href: "https://tkt.ge/show/21716/lisis-samto-festivali",
    },
    {
      id: 11,
      image: "/cardImage/teatri.webp",
      title: "ტკბილი ნოემბერი (პრემიერა)",
      description: "თეატრი",
      href: "https://tkt.ge/show/23735/tkbili-noemberi-premiera",
    },
    {
      id: 12,
      image: "/cardImage/magic.webp",
      title: "ANDREA CASTA - Magical Night",
      description: "კონცერტები",
      href: "https://tkt.ge/show/23732/andrea-casta-magical-night",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="mb-5 select-none"
    >
      <div className="container mx-auto pl-6 pr-2 sm:pl-8 sm:pr-2 md:pl-8 md:pr-2 lg:pl-10 lg:pr-5 mb-5 select-none">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center gap-3"
            variants={textVariants}
          >
            <h4 className="text-sm font-semibold sm:text-lg md:text-xl lg:text-xl">
              აღმოაჩინე საუკეთესო ადგილები საქართველოში
            </h4>
          </motion.div>
          <motion.div
            variants={textVariants}
            className="flex items-center gap-7"
          >
            <button className="swiper-button-prev custom-nav-button pt-6 text-black hover:text-gray-800 cursor-pointer">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <button className="swiper-button-next custom-nav-button pt-6 text-black hover:text-gray-800 cursor-pointer">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
      <motion.div
        variants={containerVariants}
        className="w-full overflow-hidden"
      >
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2.2, spaceBetween: 15 },
            768: { slidesPerView: 3.2, spaceBetween: 20 },
            1024: { slidesPerView: 4.2, spaceBetween: 20 },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="my-6 relative"
        >
          {events.map((event) => (
            <SwiperSlide key={event.id}>
              <Link href={event.href} target="_blank">
                <motion.div
                  className="flex flex-col items-center relative cursor-pointer overflow-hidden rounded-lg mx-2"
                  variants={cardVariants}
                >
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={300}
                    height={200}
                    className="w-full h-64 object-cover rounded-lg hover:scale-110 transition-all duration-300 ease-in-out"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <h4 className="text-white text-lg font-semibold">
                      {event.title}
                    </h4>
                    <p className="text-white text-sm">{event.description}</p>
                  </div>
                </motion.div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
      <style jsx>{`
        .custom-nav-button {
          z-index: 20 !important;
          position: relative;
          transition: all 0.3s ease;
          color: black !important;
        }
        .custom-nav-button:hover {
          color: #1f2937 !important;
        }
        .swiper-button-prev:after,
        .swiper-button-next:after {
          display: none;
        }
      `}</style>
    </motion.div>
  );
}

export default SlideCardBottom;
