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

function Gzispar() {
  const imageDescription: ImageDescription[] = [
    {
      id: 1,
      text: "გასტრონომოული თავგადასავალი ოჯახურ მასპინძლებთან ერთად",
      description:
        "მზიკარი - აერთიანებს ქვეყნის მასშტაბით ოჯახურ მასპინძლებს, რომლებიც სთავაზობენ ადგილობრივ/რეგიონისთვის დამახასიათებელ გასტრონომიულ გამოცდილებას. ქართული მასპინძლობის ტრადიცია რომელიც ყველაზე საინტერესო გამოცდილებაა მოგზაურისთვის, არსად იგრძნობა ისე როგორც ოჯახურ გარემოში.",
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
      className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[600px] flex items-center justify-center"
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <motion.div
        variants={imageVariants}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src="/cardImage/gza.jpg"
          alt="გასტრონომიული თავგადასავალი"
          fill
          className="w-full h-full object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </motion.div>
      {imageDescription.map((item) => (
        <motion.div
          key={item.id}
          className="relative z-10 w-full h-full flex flex-col justify-center text-white px-4 sm:px-6 md:px-8 lg:px-12"
          variants={containerVariants}
        >
          <motion.div
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold mb-4 sm:mb-6 md:mb-8 px-4 pl-4 md:pl-20 lg:pl-36 py-2 max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]"
            variants={textVariants}
          >
            <TextAnimate animation="blurInUp" by="character">
              {item.text}
            </TextAnimate>
          </motion.div>
          <motion.div
            className="text-sm sm:text-base md:text-lg lg:text-xl px-4 pl-4 md:pl-20 lg:pl-36 py-2 mb-4 sm:mb-6 max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%]"
            variants={descriptionVariants}
          >
            {item.description}
          </motion.div>
          <motion.button
            className="border-2 rounded-xl w-32 sm:w-36 md:w-40 ml-4 md:ml-20 lg:ml-36 lg:w-44 py-2 sm:py-3 md:py-4 border-red-400 bg-gradient-to-r from-red-500 to-red-700 text-white cursor-pointer hover:scale-105 hover:from-red-600 hover:to-red-800 transition-transform duration-300"
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

export default Gzispar;
