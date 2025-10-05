"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import ButtonWrapper from "@/components/ButtonWrapper";
import { useLanguage } from "@/context/LanguageContext";
import { useRouter } from "next/navigation";

export interface CardItem {
  image: string;
  header: {
    ka: string;
    en: string;
  };
  title?: {
    ka: string;
    en: string;
  };
  text?: {
    ka: string;
    en: string;
  };
  description?: {
    ka: string;
    en: string;
  };
}

export interface Card {
  id: string;
  title: string;
  array: CardItem[];
}

interface RecipeGalleryProps {
  items: CardItem[];
}

function RecipeGallery({ items }: RecipeGalleryProps) {
  const { currentLanguage } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();
  const [heartAnimations, setHeartAnimations] = useState<{
    [key: number]: boolean;
  }>({});
  const [heartActive, setHeartActive] = useState<{ [key: number]: boolean }>(
    {}
  );
  const router = useRouter();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const handleButtonClick = () => {
    router.push(`/kitchen-and-wine`);
  };

  const handleHeartClick = (index: number) => {
    setHeartAnimations((prev) => ({ ...prev, [index]: true }));
    setHeartActive((prev) => ({ ...prev, [index]: !prev[index] }));
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

  // Button labels based on language
  const buttonLabels = {
    ka: "დააგემოვნე",
    en: "Taste it",
  };

  return (
    <motion.div ref={ref} initial="hidden" animate={controls}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-12 px-5 sm:px-8 md:px-8 lg:pl-11 lg:pr-10">
          <motion.div className="flex flex-col gap-4 xl:col-span-2">
            <motion.div className="font-semibold text-md lg:text-xl mb-2">
              {items.map((item, index) => (
                <p key={item.title?.[currentLanguage] || index}>
                  {item.title?.[currentLanguage]}
                </p>
              ))}
            </motion.div>
            <motion.div className="text-xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold mb-4">
              {items.map((item, index) => (
                <p key={item.text?.[currentLanguage] || index}>
                  {item.text?.[currentLanguage]}
                </p>
              ))}
            </motion.div>
            <motion.div className="mb-7">
              {items.map((item, index) => (
                <p key={item.description?.[currentLanguage] || index}>
                  {item.description?.[currentLanguage]}
                </p>
              ))}
            </motion.div>
            <motion.div>
              <ButtonWrapper
                handleClick={handleButtonClick}
                disabled={false}
                className="my-custom-class"
                icon={<ArrowRight className="w-4 h-4 mt-0.5" />}
                label={buttonLabels[currentLanguage]}
              />
            </motion.div>
          </motion.div>
          <motion.div className="xl:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-5 select-none">
            {items.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center relative cursor-pointer overflow-hidden rounded-lg"
              >
                <Image
                  src={item.image}
                  alt={item.header[currentLanguage]}
                  width={200}
                  height={120}
                  className="w-full h-full object-cover rounded-lg hover:scale-110 transition-all duration-300 ease-in-out"
                />
                <div
                  className="absolute top-5 right-5"
                  onClick={() => handleHeartClick(index)}
                >
                  <Heart
                    className={`w-6 h-6 ${
                      heartActive[index] ? "text-red-500" : "text-white"
                    } hover:text-red-500 transition-colors duration-200`}
                    fill={heartActive[index] ? "red" : "none"}
                    strokeWidth={2}
                  />
                  {heartAnimations[index] &&
                    Array.from({ length: 10 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute top-0 right-0"
                        custom={i}
                        variants={scatterHeartVariants}
                        initial="initial"
                        animate="animate"
                      >
                        <Heart
                          className="w-4 h-4 text-white"
                          fill="white"
                          strokeWidth={1}
                        />
                      </motion.div>
                    ))}
                </div>
                <h4 className="text-center mt-2 font-semibold absolute bottom-6 left-6 text-white text-xl">
                  {item.header[currentLanguage]}
                </h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default RecipeGallery;
