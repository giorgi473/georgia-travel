"use client";

import { useState, useEffect, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Heart, X } from "lucide-react";
import { motion } from "framer-motion";
import { cardSliderImages } from "@/constants/data/placeData";

export default function CardPage({
  params: paramsPromise,
}: {
  params: Promise<{ title: string }>;
}) {
  const params = use(paramsPromise);
  const card = cardSliderImages
    .flatMap((item) => item.slideCard)
    .find((slide) => slide.title === decodeURIComponent(params.title));

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  if (!card) {
    notFound();
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isModalOpen]);

  const modalVariants = {
    hidden: { scale: 0.5, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    exit: {
      scale: 0.5,
      opacity: 0,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  const workingHoursDisplay = [
    { day: "ორშაბათი", hours: card.workingHours.monday },
    { day: "სამშაბათი", hours: card.workingHours.tuesday },
    { day: "ოთხშაბათი", hours: card.workingHours.wednesday },
    { day: "ხუთშაბათი", hours: card.workingHours.thursday },
    { day: "პარასკევი", hours: card.workingHours.friday },
    { day: "შაბათი", hours: card.workingHours.saturday },
    { day: "კვირა", hours: card.workingHours.sunday },
  ];

  return (
    <>
      <div className="relative w-full h-screen">
        <Image
          src={card.src as string}
          alt={card.title}
          fill
          className="object-cover"
          priority={true}
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 flex flex-col justify-center px-5 sm:px-8 md:px-8 lg:px-10 container mx-auto z-20">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8">
            {card.title}
          </h1>
          <p className="text-sm sm:text-base max-w-xl text-gray-300 sm:mt-3 mb-8">
            {card.additionalDescription}
          </p>
          <div className="text-white sm:flex sm:space-x-16 mb-8">
            <div className="font-semibold">
              <div className="text-sm sm:text-base text-gray-300">რეგიონი</div>
              {card.region}
            </div>
            <div className="font-semibold">
              <div className="text-sm sm:text-base text-gray-300">ქალაქი</div>
              <h1 className="text-sm sm:text-base">{card.city}</h1>
            </div>
          </div>
          <div className="mb-5">
            <button
              className="flex items-center gap-4 cursor-pointer group"
              onClick={handleClick}
            >
              <span
                className={`flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 border-2 rounded-full group-hover:bg-red-500 group-hover:border-red-500 transition-colors duration-300 ${
                  isActive ? "bg-red-500 border-red-500" : ""
                }`}
              >
                <Heart size={16} className="text-white" />
              </span>
              <h3
                className={`text-sm sm:text-base font-semibold transition-colors duration-300 ${
                  isActive ? "text-red-500" : "text-white"
                }`}
              >
                მარშრუტებში დამატება
              </h3>
            </button>
          </div>
          <div className="absolute bottom-8">
            <button
              className="cursor-pointer text-white border border-red-500 rounded-lg px-4 py-2 hover:bg-red-500 transition-all duration-200 ease-in-out"
              onClick={toggleModal}
            >
              ინფორმაცია
            </button>
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <motion.div
              className="bg-white rounded-sm shadow-lg max-w-xl w-full mx-4 relative min-h-[500px] max-h-[40vh] overflow-y-scroll"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <button
                className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 z-10 float-right"
                onClick={toggleModal}
              >
                <X
                  size={25}
                  className="bg-gray-100 hover:text-red-500 transition-all duration-200 ease-in-out rounded-full px-1 cursor-pointer"
                />
              </button>
              <div className="relative w-full h-64 sm:h-72 mb-6">
                <Image
                  src={card.modalSrc}
                  alt={`${card.title} modal`}
                  fill
                  className="object-cover rounded-tl-sm"
                  quality={100}
                />
              </div>
              <div className="px-6 sm:px-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-6">
                  {card.name}
                </h2>
                <div className="text-sm sm:text-base mb-4">
                  <p className="mb-2">
                    <span className="font-semibold mr-1">Name:</span>
                    {card.name}
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold mr-2">Address:</span>
                    {card.address}
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold mr-2">Phone Number:</span>
                    {card.phone}
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold mr-2">Web:</span>
                    <Link
                      href={card.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=""
                    >
                      {card.website}
                    </Link>
                  </p>
                  <h3 className="font-bold mt-3 mb-2 text-center text-base sm:text-lg">
                    Working Schedule:
                  </h3>
                  <div className="list-disc list-inside">
                    {workingHoursDisplay.map(({ day, hours }) => (
                      <div key={day} className="flex items-center gap-2 mb-3">
                        <h1 className="text-md tracking-wider sm:text-base font-semibold text-gray-800">
                          {day}:
                        </h1>
                        {hours}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </>
  );
}
