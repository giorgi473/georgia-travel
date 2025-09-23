import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

function DestinationCard() {
  const { currentLanguage } = useLanguage();

  const images = [
    {
      src: "/space/mtsketa.webp",
      alt: {
        ka: "მცხეთა-მთიანეთის ხედი",
        en: "Mtskheta-Mtianeti View",
      },
      title: {
        ka: "მცხეთა-მთიანეთი",
        en: "Mtskheta-Mtianeti",
      },
    },
    {
      src: "/space/imereti.webp",
      alt: {
        ka: "იმერეთის ხედი",
        en: "Imereti View",
      },
      title: {
        ka: "იმერეთი",
        en: "Imereti",
      },
    },
    {
      src: "/space/kaxeti.webp",
      alt: {
        ka: "კახეთის ხედი",
        en: "Kakheti View",
      },
      title: {
        ka: "კახეთი",
        en: "Kakheti",
      },
    },
    {
      src: "/space/zemo-svaneti.webp",
      alt: {
        ka: "სამეგრელო-ზემო სვანეთის ხედი",
        en: "Samegrelo-Zemo Svaneti View",
      },
      title: {
        ka: "სამეგრელო-ზემო სვანეთი",
        en: "Samegrelo-Zemo Svaneti",
      },
    },
    {
      src: "/space/kvemo-sva.webp",
      alt: {
        ka: "რაჭა-ლეჩხუმი და ქვემო სვანეთის ხედი",
        en: "Racha-Lechkhumi and Kvemo Svaneti View",
      },
      title: {
        ka: "რაჭა-ლეჩხუმი და ქვემო სვანეთი",
        en: "Racha-Lechkhumi and Kvemo Svaneti",
      },
    },
  ];

  const titles = {
    ka: "აქ აუცილებლად უნდა იმოგზაურო",
    en: "You must definitely travel here",
  };

  return (
    <React.Fragment>
      <h1 className="flex items-center justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-8 sm:mb-12 md:mb-16 lg:mb-20 px-4 text-center">
        {titles[currentLanguage]}
      </h1>
      <div className="hidden lg:block">
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-1 relative h-[400px] overflow-hidden rounded-lg cursor-pointer">
            <motion.div
              className="relative h-full rounded-lg"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={images[0].src}
                alt={images[0].alt[currentLanguage]}
                fill
                className="object-cover"
              />
            </motion.div>
            <div className="absolute bottom-5 left-4 p-2 text-white w-full">
              <h2 className="text-2xl font-bold">
                {images[0].title[currentLanguage]}
              </h2>
            </div>
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-6">
            <div className="relative h-[400px] overflow-hidden rounded-lg cursor-pointer">
              <motion.div
                className="relative h-full rounded-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={images[1].src}
                  alt={images[1].alt[currentLanguage]}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute bottom-5 left-4 p-2 text-white w-full">
                <h2 className="text-2xl font-bold">
                  {images[1].title[currentLanguage]}
                </h2>
              </div>
            </div>
            <div className="relative h-[400px] overflow-hidden rounded-lg cursor-pointer">
              <motion.div
                className="relative h-full rounded-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={images[2].src}
                  alt={images[2].alt[currentLanguage]}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute bottom-5 left-4 p-2 text-white w-full">
                <h2 className="text-2xl font-bold">
                  {images[2].title[currentLanguage]}
                </h2>
              </div>
            </div>
          </div>
          <div className="col-span-3 grid grid-cols-3 gap-6 mt-4">
            <div className="col-span-2 relative h-[400px] overflow-hidden rounded-lg cursor-pointer">
              <motion.div
                className="relative h-full rounded-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={images[3].src}
                  alt={images[3].alt[currentLanguage]}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute bottom-5 left-4 p-2 text-white w-full">
                <h2 className="text-2xl font-bold">
                  {images[3].title[currentLanguage]}
                </h2>
              </div>
            </div>
            <div className="col-span-1 relative h-[400px] overflow-hidden rounded-lg cursor-pointer">
              <motion.div
                className="relative h-full rounded-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={images[4].src}
                  alt={images[4].alt[currentLanguage]}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute bottom-5 left-4 p-2 text-white w-full">
                <h2 className="text-2xl font-bold">
                  {images[4].title[currentLanguage]}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block lg:hidden">
        <div className="grid grid-cols-2 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative h-[300px] overflow-hidden rounded-lg cursor-pointer ${
                index === 0 ? "col-span-2" : ""
              }`}
            >
              <motion.div
                className="relative h-full rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt[currentLanguage]}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute bottom-3 left-3 p-2 text-white w-full">
                <h2 className="text-lg sm:text-xl font-bold">
                  {image.title[currentLanguage]}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="block md:hidden">
        <div className="space-y-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-[250px] overflow-hidden rounded-lg cursor-pointer"
            >
              <motion.div
                className="relative h-full rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt[currentLanguage]}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div className="absolute bottom-3 left-3 p-2 text-white w-full">
                <h2 className="text-lg font-bold">
                  {image.title[currentLanguage]}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default DestinationCard;
