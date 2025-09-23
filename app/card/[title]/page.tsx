"use client";

import { useState, useEffect, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Heart, X } from "lucide-react";
import { motion } from "framer-motion";
import { cardSliderImages } from "@/lib/data";
import { Map } from "@/components/Map";
import { useLanguage } from "@/context/LanguageContext";

export default function CardPage({
  params: paramsPromise,
}: {
  params: Promise<{ title: string }>;
}) {
  const params = use(paramsPromise);
  const { currentLanguage } = useLanguage();

  // Find card by checking both ka and en titles
  const card = cardSliderImages.find(
    (item) =>
      item.title.ka === decodeURIComponent(params.title) ||
      item.title.en === decodeURIComponent(params.title)
  );

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

  if (!card || !Array.isArray(card.slideCard) || card.slideCard.length === 0) {
    return null;
  }

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
    {
      day: currentLanguage === "en" ? "Monday" : "ორშაბათი",
      hours: card.workingHours.Monday,
    },
    {
      day: currentLanguage === "en" ? "Tuesday" : "სამშაბათი",
      hours: card.workingHours.Tuesday,
    },
    {
      day: currentLanguage === "en" ? "Wednesday" : "ოთხშაბათი",
      hours: card.workingHours.Wednesday,
    },
    {
      day: currentLanguage === "en" ? "Thursday" : "ხუთშაბათი",
      hours: card.workingHours.Thursday,
    },
    {
      day: currentLanguage === "en" ? "Friday" : "პარასკევი",
      hours: card.workingHours.Friday,
    },
    {
      day: currentLanguage === "en" ? "Saturday" : "შაბათი",
      hours: card.workingHours.Saturday,
    },
    {
      day: currentLanguage === "en" ? "Sunday" : "კვირა",
      hours: card.workingHours.Sunday,
    },
  ];

  return (
    <div className="space-y-14">
      <div className="relative w-full h-screen">
        <Image
          src={card.src}
          alt={card.title[currentLanguage]}
          fill
          className="object-cover"
          priority={true}
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="absolute inset-0 flex flex-col justify-start p-4 sm:p-6 lg:px-8 container mx-auto z-20">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-[150px] sm:mt-[180px] mb-8">
            {card.title[currentLanguage]}
          </h1>
          <p className="text-sm sm:text-base max-w-xl text-gray-300 mt-4 mb-10">
            {card.additionalDescription[currentLanguage]}
          </p>
          <div className="text-white flex space-x-14 sm:flex sm:space-x-16 mb-8">
            <div className="font-semibold">
              <div className="text-sm sm:text-base text-gray-300">
                {currentLanguage === "en" ? "Region" : "რეგიონი"}
              </div>
              {card.region[currentLanguage]}
            </div>
            <div className="font-semibold">
              <div className="text-sm sm:text-base text-gray-300">
                {currentLanguage === "en" ? "City" : "ქალაქი"}
              </div>
              <h1 className="text-sm sm:text-base">
                {card.city[currentLanguage]}
              </h1>
            </div>
          </div>
          <div className="mb-5">
            <button
              className="flex items-center gap-3 cursor-pointer group"
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
                } group-hover:text-red-500`}
              >
                {currentLanguage === "en"
                  ? "Add to Routes"
                  : "მარშრუტებში დამატება"}
              </h3>
            </button>
          </div>
          <div className="absolute bottom-10">
            <button
              className="cursor-pointer border border-red-500 px-4 py-2 text-white hover:bg-red-500 rounded-lg transition-all duration-200 ease-in-out font-semibold text-sm sm:text-base"
              onClick={toggleModal}
            >
              {currentLanguage === "en" ? "Information" : "ინფორმაცია"}
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
                <X className="bg-gray-100 rounded-sm px-1 cursor-pointer hover:text-red-500 ease-in-out duration-200 transition-all" />
              </button>
              <div className="relative w-full h-64 sm:h-72 mb-6">
                <Image
                  src={card.modalSrc}
                  alt={`${card.title[currentLanguage]} modal`}
                  fill
                  className="object-cover rounded-tl-sm"
                  quality={100}
                />
              </div>
              <div className="px-6 sm:px-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-6">
                  {card.name[currentLanguage]}
                </h2>
                <div className="text-sm sm:text-base mb-4">
                  <p className="mb-2">
                    <span className="font-semibold mr-1">
                      {currentLanguage === "en" ? "Name" : "სახელი"}:
                    </span>
                    {card.name[currentLanguage]}
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold mr-2">
                      {currentLanguage === "en" ? "Address" : "მისამართი"}:
                    </span>
                    {card.address}
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold mr-2">
                      {currentLanguage === "en"
                        ? "Phone Number"
                        : "ტელეფონის ნომერი"}
                      :
                    </span>
                    {card.phone}
                  </p>
                  <p className="mb-2">
                    <span className="font-semibold mr-2">
                      {currentLanguage === "en" ? "Web" : "ვებგვერდი"}:
                    </span>
                    <Link
                      href={card.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {card.website}
                    </Link>
                  </p>
                  <h3 className="mt-3 mb-2 text-center font-bold text-base sm:text-lg">
                    {currentLanguage === "en"
                      ? "Working Schedule"
                      : "სამუშაო გრაფიკი"}
                    :
                  </h3>
                  <div className="list-disc list-inside">
                    {workingHoursDisplay.map(({ day, hours }) => (
                      <div key={day} className="flex items-center gap-2 mb-3">
                        <h1 className="text-sm sm:text-base font-semibold text-gray-800 tracking-wider">
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
      <section>
        <div className="mx-auto space-y-4 px-5 sm:container sm:px-8 lg:max-w-4xl">
          <div>
            <h3 className="text-3xl font-bold">
              {card.anotherSection.name1?.[currentLanguage]}
            </h3>
          </div>
          <div className="space-y-4 text-gray-800">
            {card.anotherSection.description?.[currentLanguage]
              ?.split("\n\n")
              .map((paragraph, idx) => (
                <p key={idx} className="text-gray-800">
                  {paragraph.trim()}
                </p>
              ))}
          </div>
          <div>
            <p className="text-3xl font-bold">
              {card.anotherSection.name2?.[currentLanguage]}
            </p>
          </div>
          <div>
            {Array.isArray(card.anotherSection.image) ? (
              card.anotherSection.image.map(
                (img, idx) =>
                  img && (
                    <Image
                      key={idx}
                      src={img}
                      alt={`image-${idx}`}
                      width={600}
                      height={500}
                      className="rounded-md"
                    />
                  )
              )
            ) : card.anotherSection.image &&
              card.anotherSection.image !== "" ? (
              <Image
                src={card.anotherSection.image}
                alt={
                  currentLanguage === "en" ? "section image" : "სექციის სურათი"
                }
                width={1000}
                height={500}
                className="rounded-md"
              />
            ) : null}
          </div>
          <div className="space-y-4 text-gray-800">
            {card.anotherSection.description2?.[currentLanguage]
              ?.split("\n\n")
              .map((paragraph, idx) => (
                <p key={idx} className="text-gray-800">
                  {paragraph.trim()}
                </p>
              ))}
          </div>
          <div>
            <p className="text-3xl font-bold">
              {card.anotherSection.name3?.[currentLanguage]}
            </p>
          </div>
          <div className="space-y-4 text-gray-800">
            {card.anotherSection.description3?.[currentLanguage]
              ?.split("\n\n")
              .map((paragraph, idx) => (
                <p key={idx} className="text-gray-800">
                  {paragraph.trim()}
                </p>
              ))}
          </div>
          <div>
            <p className="text-3xl font-bold">
              {card.anotherSection.name4?.[currentLanguage]}
            </p>
          </div>
          <div className="space-y-4 text-gray-800">
            {card.anotherSection.description4?.[currentLanguage]
              ?.split("\n\n")
              .map((paragraph, idx) => (
                <p key={idx} className="text-gray-800">
                  {paragraph.trim()}
                </p>
              ))}
          </div>
          <div>
            <p className="text-3xl font-bold">
              {card.anotherSection.name5?.[currentLanguage]}
            </p>
          </div>
          <div className="space-y-4 text-gray-800">
            {card.anotherSection.description5?.[currentLanguage]
              ?.split("\n\n")
              .map((paragraph, idx) => (
                <p key={idx} className="text-gray-800">
                  {paragraph.trim()}
                </p>
              ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container mx-auto pr-4 pl-5 sm:pr-5 sm:pl-8 md:pr-5 md:pl-8 lg:pr-7 lg:pl-10">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center">
              <h3 className="text-sm sm:text-lg md:text-xl font-semibold">
                {card.slideCard[0]?.text?.[currentLanguage] ||
                  (currentLanguage === "en"
                    ? "Explore top attractions"
                    : "აღმოაჩინეთ ტოპ სანახაობები")}
              </h3>
            </div>
            <div className="flex gap-2">
              <button className="custom-prev-button cursor-pointer">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button className="custom-next-button cursor-pointer">
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="px-4">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            navigation={{
              nextEl: ".custom-next-button",
              prevEl: ".custom-prev-button",
            }}
            className="w-full"
          >
            {card.slideCard.map((item, index) => {
              if (!item.src || item.src === "") {
                return null;
              }
              return (
                <SwiperSlide key={index}>
                  <Link
                    href={`/card/${encodeURIComponent(
                      item.name[currentLanguage] || "unnamed"
                    )}`}
                  >
                    <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer select-none">
                      <div className="relative w-full h-80 sm:h-96 md:h-96 group">
                        <div className="relative w-full h-full overflow-hidden">
                          <Image
                            src={item.src}
                            alt={item.title[currentLanguage] || "Slide image"}
                            fill
                            className="object-cover group-hover:scale-110 transition-all duration-300 ease-in-out z-0"
                            quality={75}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                        </div>
                        <div className="absolute top-5 right-5 z-20">
                          <Heart
                            size={16}
                            className="text-white hover:text-red-500 transition-all duration-200 ease-in-out"
                          />
                        </div>
                        <div className="p-4 absolute bottom-2 text-white z-20">
                          <h4 className="text-sm sm:text-lg font-semibold mb-2">
                            {item.title[currentLanguage] || "No title"}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
      <section>
        <div className="px-5 lg:px-0">
          <Map />
        </div>
      </section>
      <section>
        <div className="container mx-auto px-4 sm:px-8 md:px-8 lg:px-10">
          <div className="flex items-center justify-between gap-4 mb-5">
            <h2 className="text-sm sm:text-lg md:text-xl font-semibold text-black pl-1">
              {card.blogs[0]?.blogText?.[currentLanguage] ||
                (currentLanguage === "en"
                  ? "Related Blogs"
                  : "დაკავშირებული ბლოგები")}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {card.blogs
              .filter(
                (blog) =>
                  blog.title?.[currentLanguage]?.trim() &&
                  blog.img?.trim() &&
                  blog.desc?.[currentLanguage]?.trim()
              )
              .map((blog, index) => (
                <Card
                  key={blog.title[currentLanguage] || index}
                  className="relative bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-[500px]"
                >
                  <div className="relative flex-grow">
                    <Image
                      src={blog.img}
                      alt={blog.title[currentLanguage] as string}
                      layout="fill"
                      className="object-cover hover:scale-110 cursor-pointer transition-transform duration-300 ease-in-out"
                      priority={index < 3}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                    <div className="absolute bottom-4 left-4 pointer-events-none">
                      <CardContent className="p-0">
                        <CardTitle
                          className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2 w-60 md:w-full lg:w-80 line-clamp-2"
                          style={{
                            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)",
                          }}
                        >
                          {blog.title[currentLanguage]}
                        </CardTitle>
                        <CardDescription className="text-sm sm:text-base text-gray-200 line-clamp-2">
                          {blog.desc[currentLanguage]}
                        </CardDescription>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
