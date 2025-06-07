"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";

interface Props {
  img: string;
  title: string;
  desc: string;
}

function Blogs() {
  const blogs: Props[] = [
    {
      img: "/cardImage/mta.webp",
      title: "საქართველოს მთები და მწერვალები",
      desc: "შეუძლებელია საქართველოზე ილაპარაკო ისე, რომ ერთხელ მაინც არ ახსენო მისი თვალწარმტაცი მთები, რომლებიც სულს აფრთხობს.",
    },
    {
      img: "/cardImage/opa.webp",
      title: "ქართული ღვინის ისტორია",
      desc: "ღვინო პირველად 8000 წლის წინ საქართველოში დააყენეს, ქვევრში დაყენების უნიკალური ტექნოლოგიით.",
    },
    {
      img: "/cardImage/world.webp",
      title: "ქართული კულტურის სიმდიდრე",
      desc: "ქართული ცეკვა, სიმღერა და ტრადიციები მსოფლიოს ერთ-ერთ უძველეს კულტურას წარმოადგენს.",
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
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between gap-4 mb-8">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
          გაეცანი ბლოგს
        </h2>
        <button className="text-red-500 cursor-pointer font-semibold hover:text-red-600 transition-colors">
          ყველას ნახვა
        </button>
      </div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        {blogs.map((blog) => (
          <motion.div
            key={blog.title}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden"
            variants={cardVariants}
          >
            <motion.div variants={imageVariants} className="relative">
              <Image
                src={blog.img}
                alt={blog.title}
                width={400}
                height={300}
                className="w-full h-[200px] sm:h-[250px] lg:h-[300px] object-cover hover:scale-110 transition-all duration-300 ease-in-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>
            <div className="p-4 sm:p-6 flex flex-col">
              <motion.h3
                className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-2 sm:mb-4"
                variants={textVariants}
                style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
              >
                {blog.title}
              </motion.h3>
              <motion.p
                className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 line-clamp-3"
                variants={descriptionVariants}
              >
                {blog.desc}
              </motion.p>
              <motion.button
                className="border-2 rounded-xl sm:w-28 md:w-32 lg:w-36 sm:py-2 md:py-3 border-red-400 bg-gradient-to-r from-red-500 to-red-700 text-white cursor-pointer hover:scale-105 hover:from-red-600 hover:to-red-800 transition-transform duration-300"
                variants={buttonVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                გაეცანი
              </motion.button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Blogs;
