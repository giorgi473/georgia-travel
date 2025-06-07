"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { TextAnimate } from "../magicui/text-animate";

interface ImageDescription {
  id: number;
  text: string;
  description: string;
}

function VineCard() {
  const imageDescription: ImageDescription[] = [
    {
      id: 1,
      text: "გაგისინჯავს ქართული ღვინო?",
      description:
        "ღვინო პირველად 8000 წლის წინ, საქართველოში დააყენეს. ღვინის დამზადების მსოფლიოში არსებული ორი ტექნოლოგიიდან კი ერთი - ღვინის ქვევრში დაყენების ტექნოლოგია, სწორედ ქართულია.",
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

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
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

  const descriptionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        duration: 0.6,
        delay: 0.2,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20,
        duration: 0.6,
        delay: 0.4,
      },
    },
  };

  return (
    <motion.div
      className="relative h-auto min-h-[300px] sm:min-h-[450px] lg:min-h-[630px]"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.div variants={imageVariants} className="relative">
        <Image
          src="/image/vine.webp"
          alt="image"
          width={500}
          height={630}
          className="w-full object-center shadow-lg h-[300px] sm:h-[450px] lg:h-[630px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </motion.div>
      {imageDescription.map((item) => (
        <motion.div
          key={item.id}
          className="absolute top-1/2 sm:left-4 md:left-10 lg:left-36 transform -translate-y-1/2 text-white flex flex-col px-4"
          variants={containerVariants}
        >
          <motion.div
            className="sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 sm:mb-8 px-4 py-2 rounded-lg shadow-md"
            variants={textVariants}
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
          >
            <TextAnimate animation="blurInUp" by="character">
              {item.text}
            </TextAnimate>
          </motion.div>
          <motion.div
            className="sm:text-sm md:text-base sm:max-w-sm md:max-w-lg lg:max-w-2xl px-4 py-2 rounded-lg shadow-md mb-4 sm:mb-6"
            variants={descriptionVariants}
          >
            <TextAnimate animation="slideLeft" by="character">
              {item.description}
            </TextAnimate>
          </motion.div>
          <motion.button
            className="border-2 rounded-xl sm:w-28 md:w-32 lg:w-36 sm:py-2 md:py-3 border-red-400 ml-2 bg-gradient-to-r from-red-500 to-red-700 text-white cursor-pointer hover:scale-105 hover:from-red-600 hover:to-red-800 transition-transform duration-300"
            variants={buttonVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            გაგიმარჯოს!
          </motion.button>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default VineCard;
