"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { motion, useInView, useAnimation } from "framer-motion";

interface Array {
  image: string;
  header: string;
}

function DishesCard() {
  const array: Array[] = [
    {
      image: "/cardImage/ach.webp",
      header: "აჭარული ხაჭაპური",
    },
    {
      image: "/cardImage/mt.webp",
      header: "მწვადი",
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

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 20,
        duration: 0.6,
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

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-12 px-4 md:px-8">
          <motion.div
            className="flex flex-col gap-4 xl:col-span-2"
            variants={containerVariants}
          >
            <motion.h2
              className="font-semibold text-md lg:text-xl mb-2"
              variants={textVariants}
            >
              აღმოაჩინე ქართული გასტრონომია
            </motion.h2>
            <motion.h3
              className="text-xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold mb-4"
              variants={textVariants}
            >
              აქ ყველა კერძს <br /> დაუვიწყარი გემო აქვს
            </motion.h3>
            <motion.p className="mb-7" variants={textVariants}>
              ქართული სამზარეულო საუკუნეების განმავლობაში იზიარებდა ევროპისა და
              ახლო აღმოსავლეთის საუკეთესო ტექნიკებს, ტრადიციებს და ქმნიდა თავის
              ინდივიდუალურ, დახვეწილ გემოებს. აქაურობა გურმანებს დაუვიწყარ
              თავგადასავალს ჰპირდება.
            </motion.p>
            <motion.div variants={buttonVariants}>
              <Button
                className="cursor-pointer hover:text-white hover:bg-red-500 transition-all duration-200 ease-in-out text-md"
                size={"lg"}
                variant={"outline"}
              >
                დააგემოვნე
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            className="xl:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-5"
            variants={containerVariants}
          >
            {array.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center relative cursor-pointer overflow-hidden rounded-lg"
                variants={cardVariants}
              >
                <Image
                  src={item.image}
                  alt={item.header}
                  width={200}
                  height={120}
                  className="w-full object-cover rounded-lg hover:scale-110 transition-all duration-300 ease-in-out"
                />
                <h4 className="text-center mt-2 font-semibold absolute bottom-6 left-6 text-white text-xl">
                  {item.header}
                </h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default DishesCard;
