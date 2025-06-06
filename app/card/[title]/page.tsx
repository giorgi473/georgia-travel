"use client";

import { notFound } from "next/navigation";
import { useState, useEffect, use } from "react";
import Image from "next/image";
import { cardSliderImages } from "@/lib/data";
import { Heart, X } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function CardPage({
  params: paramsPromise,
}: {
  params: Promise<{ title: string }>;
}) {
  const params = use(paramsPromise);
  const card = cardSliderImages.find(
    (item) => item.title === decodeURIComponent(params.title)
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!card) {
    notFound();
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Disable background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    // Cleanup on component unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isModalOpen]);

  // Modal animation variants
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

  // Working hours mapping for display
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
    <div className="relative w-full h-screen">
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover"
        // quality={100}
        priority={true}
      />
      <div className="absolute inset-0 flex flex-col justify-start p-4 sm:p-8 container mx-auto">
        <h1 className="text-3xl sm:text-5xl font-bold text-white mt-[200px] mb-10">
          {card.title}
        </h1>
        <p className="text-base mb-4 max-w-2xl text-gray-300 sm:mt-4">
          {card.additionalDescription}
        </p>
        <div className="text-white sm:flex sm:space-x-24 mb-10">
          <div className="font-semibold">
            <div className="text-gray-300 text-lg">რეგიონი</div> {card.region}
          </div>
          <div className="font-semibold">
            <div className="text-gray-300 text-lg">ქალაქი</div>
            <h1 className="text-md">{card.city}</h1>
          </div>
        </div>
        <div className="mb-6">
          <button className="flex items-center gap-2 cursor-pointer">
            <span className="flex items-center justify-center w-10 h-10 border rounded-full">
              <Heart size={20} />
            </span>
            <h3 className="text-md font-semibold text-white">
              მარშრუტებში დამატება
            </h3>
          </button>
        </div>
        <div className="absolute bottom-10 right-32 bg-white px-2 py-2 rounded-lg">
          <button
            className="cursor-pointer text-black font-semibold"
            onClick={toggleModal}
          >
            ინფორმაცია
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div
            className="bg-white rounded-lg shadow-lg max-w-2xl w-full mx-4 relative min-h-[700px] max-h-[50vh] overflow-y-scroll"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-800 z-10 float-right"
              onClick={toggleModal}
            >
              <X
                size={24}
                className="bg-gray-100 rounded-full px-1 cursor-pointer"
              />
            </button>
            <div className="relative w-full h-80 mb-8">
              <Image
                src={card.modalSrc}
                alt={`${card.title} modal`}
                fill
                className="object-cover rounded-tl-lg"
                quality={100}
              />
            </div>
            <div className="px-10">
              <h2 className="text-2xl font-bold mb-8">{card.name}</h2>
              <div className="text-base mb-4">
                <p className="mb-3">
                  <span className="font-semibold mr-1">დასახელება:</span>
                  {card.name}
                </p>
                <p className="mb-3">
                  <span className="font-semibold mr-2">მისამართი:</span>
                  {card.address}
                </p>
                <p className="mb-3">
                  <span className="font-semibold mr-2">ტელეფონი:</span>
                  {card.phone}
                </p>
                <p className="mb-3">
                  <span className="font-semibold mr-2">ვებგვერდი:</span>
                  <Link
                    href={card.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    {card.website}
                  </Link>
                </p>
                <h3 className=" font-medium mt-4 mb-2 text-center text-xl">
                  სამუშაო საათები:
                </h3>
                <div className="list-disc list-inside">
                  {workingHoursDisplay.map(({ day, hours }) => (
                    <div key={day} className="flex items-center gap-2 mb-2">
                      <h1 className="text-lg font-semibold text-gray-600">
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
  );
}
