"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Heart, MapPin, ArrowRight } from "lucide-react";

interface DestinationCardProps {
  id: string;
  title: { ka: string; en: string };
  description: { ka: string; en: string };
  image: string;
  duration: { ka: string; en: string };
  activities: { ka: string; en: string };
  currency: { ka: string; en: string };
  currentLanguage: "ka" | "en";
}

export function DestinationCard({
  title,
  description,
  image,
  duration,
  activities,
  currency,
  currentLanguage,
}: DestinationCardProps) {
  const [isHeartActive, setIsHeartActive] = useState(false);
  const [showHeartAnimation, setShowHeartAnimation] = useState(false);

  // Static text translations
  const translations = {
    durationLabel: { ka: "დრო", en: "Duration" },
    distanceLabel: { ka: "მანძილი", en: "Distance" },
    learnMore: { ka: "გაიგე მეტი", en: "Learn More" },
  };

  const handleHeartClick = () => {
    setIsHeartActive((prev) => !prev);
    setShowHeartAnimation(true);
    setTimeout(() => {
      setShowHeartAnimation(false);
    }, 1000); // Reset scattering animation after duration
  };

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
    <Card className="overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-200 p-0 flex flex-col h-full">
      <div className="relative h-96 w-full overflow-hidden cursor-pointer group select-none">
        <Image
          src={image || "/placeholder.svg"}
          alt={title[currentLanguage]}
          fill
          className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute top-4 right-4 p-2 transition-colors"
          onClick={handleHeartClick}
        >
          <Heart
            className={`w-6 h-6 ${
              isHeartActive ? "text-red-500" : "text-white"
            } hover:text-red-500 transition-all duration-200 ease-in-out`}
            fill={isHeartActive ? "red" : "none"}
            strokeWidth={2}
          />
          {showHeartAnimation &&
            Array.from({ length: 10 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-2 right-2"
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
        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
          <MapPin className="w-7 h-7 text-red-500" />
          <span className="text-sm sm:text-sm md:text-md lg:text-lg font-bold">
            • {activities[currentLanguage]}
          </span>
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-gray-900 mb-3 text-balance">
          {title[currentLanguage]}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6 text-pretty flex-1">
          {description[currentLanguage]}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex gap-4 sm:gap-5 md:gap-6 lg:gap-8">
            <div>
              <p className="text-xs sm:text-sm md:text-md lg:text-md text-gray-500 mb-1">
                {translations.durationLabel[currentLanguage]}
              </p>
              <p className="text-sm sm:text-md md:text-md lg:text-lg font-semibold text-gray-900">
                {duration[currentLanguage]}
              </p>
            </div>
            <div>
              <p className="text-xs sm:text-sm md:text-md lg:text-md text-gray-500 mb-1">
                {translations.distanceLabel[currentLanguage]}
              </p>
              <p className="text-sm sm:text-md md:text-md lg:text-lg font-semibold text-gray-900">
                {currency[currentLanguage]}
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            className="text-red-500 border-red-200 text-xs sm:text-md md:text-md hover:bg-red-50 cursor-pointer hover:border-red-300 bg-transparent"
          >
            {translations.learnMore[currentLanguage]}
            <ArrowRight className="sm:ml-1 md:ml-2 mt-0.5 md:mt-0" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
