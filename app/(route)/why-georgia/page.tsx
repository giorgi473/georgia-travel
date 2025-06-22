"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import "swiper/css";
import "./why-georgia.css";
import { sections } from "@/constants/data/data";
import { useRouter } from "next/navigation";

const Page: React.FC = () => {
  const router = useRouter();
  const contentRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const section02SwiperRef = useRef<SwiperType | null>(null);
  const [activeSection, setActiveSection] = useState<number>(0);
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [activeSection02Slide, setActiveSection02Slide] = useState<number>(0);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.transform = `translateY(-${
        activeSection * 100
      }vh)`;
    }
    if (activeSection === 2 && section02SwiperRef.current) {
      section02SwiperRef.current.slideTo(0);
      setActiveSection02Slide(0);
    }
  }, [activeSection]);

  const handleClick = (index: number) => {
    setActiveSection(index);
  };

  const handleSlideChange = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
      setActiveSlide(index);
    }
  };

  const handleSection02SlideChange = (index: number) => {
    if (section02SwiperRef.current) {
      section02SwiperRef.current.slideTo(index);
      setActiveSection02Slide(index);
    }
  };

  const handleClickRoute = () => {
    router.push(`geography-of-georgia`);
  };

  return (
    <>
      <div className="relative h-screen overflow-hidden select-none">
        {/* Start სექციის სურათები */}
        {activeSection === 0 && sections[0].image1 && (
          <motion.img
            src={sections[0].image1}
            alt="Top Image"
            className="absolute top-0 left-0 w-full h-full object-cover z-10"
            initial={{ y: 0, opacity: 1 }}
            animate={{ y: "-30%", opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        )}
        {activeSection === 0 && sections[0].image2 && (
          <motion.img
            src={sections[0].image2}
            alt="Middle Image"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 z-20 object-cover max-w-[85%] lg:max-w-none start-image2 lg:top-1/2 lg:bottom-auto lg:w-auto lg:h-auto"
            initial={{ y: 0, opacity: 1, scale: 1.2 }}
            animate={{ y: "1%", opacity: 1, scale: 1.3 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        )}
        {activeSection === 0 && sections[0].image3 && (
          <motion.img
            src={sections[0].image3}
            alt="Clouds Image"
            className="absolute top-2/3 left-1/2 transform -translate-x-1/2 z-30 object-cover max-w-[85%] lg:max-w-none start-image3"
            initial={{ y: "15%", opacity: 1, scale: 1.5 }}
            animate={{ y: "-5%", opacity: 1, scale: 1.2 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        )}
        {/* Section 01 სურათები */}
        {activeSection === 1 && sections[1].image1 && (
          <motion.img
            src={sections[1].image1}
            alt="Background Image Section 01"
            className="absolute top-0 left-0 w-full h-full object-cover z-10"
            initial={{ y: "-15%", opacity: 1 }}
            animate={{ y: "-60%", opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        )}
        {activeSection === 1 && sections[1].image2 && (
          <motion.div
            className="absolute top-0 left-0 w-full h-full z-20"
            initial={{ opacity: 1, y: "30%" }}
            animate={{ opacity: 1, y: "-20%" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.img
              src={sections[1].image2}
              alt="Full Screen Image Section 01"
              className="absolute top-0 left-0 w-full h-full object-cover z-20"
            />
            <div className="absolute top-0 w-full h-full z-40 flex items-center justify-center black-section-container">
              <div className="container mx-auto px-4 lg:px-0 max-w-6xl black-section-text">
                <div className="text-content">
                  <div className="relative">
                    <h3 className="text-gray-400 text-4xl lg:text-8xl mb-4 lg:mb-10">
                      01
                    </h3>
                    <span className="text-red-600 absolute top-6 lg:top-14 text-xs lg:text-sm tracking-[4px] lg:tracking-[5px] flex items-center gap-2">
                      <div className="w-10 lg:w-[65px] h-0.5 bg-red-600" />
                      შენი მოგზაურობის <br /> დასაწყისი
                    </span>
                  </div>
                  <h5 className="text-white text-2xl lg:text-5xl mb-3 lg:mb-8 select-none font-bold whitespace-pre-line">
                    {sections[1].title}
                  </h5>
                  <p className="text-white text-xs lg:text-md max-w-sm mb-4 lg:mb-7">
                    {sections[1].description}
                  </p>
                  <motion.button
                    className="custom-button text-red-500 text-xs cursor-pointer md:text-sm lg:text-base font-semibold border border-red-400 rounded-lg px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-3 w-fit bg-transparent hover:text-white hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-300 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    onClick={() => handleClickRoute()}
                  >
                    {sections[1].buttonText}
                  </motion.button>
                </div>
                <div className="swiper-container">
                  <Swiper
                    spaceBetween={15}
                    slidesPerView={1}
                    grabCursor={true}
                    className="w-full lg:h-96"
                    breakpoints={{
                      640: { slidesPerView: 1, spaceBetween: 15 },
                      1024: { slidesPerView: 1, spaceBetween: 30 },
                    }}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) =>
                      setActiveSlide(swiper.activeIndex)
                    }
                  >
                    <SwiperSlide>
                      <Image
                        src="/flags/ka.svg"
                        alt="Slide 1"
                        width={700}
                        height={384}
                        className="w-full h-auto object-cover"
                        sizes="(max-width: 767px) 90vw, (max-width: 1023px) 600px, 700px"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <Image
                        src="/flags/kaa.svg"
                        alt="Slide 2"
                        width={700}
                        height={384}
                        className="w-full h-auto object-cover"
                        sizes="(max-width: 767px) 90vw, (max-width: 1023px) 600px, 700px"
                      />
                    </SwiperSlide>
                  </Swiper>
                  <div className="slide-nav-container space-x-12 flex items-center">
                    <span
                      className={`slide-nav-text text-white ${
                        activeSlide === 0 ? "active" : ""
                      }`}
                      onClick={() => handleSlideChange(0)}
                    >
                      გეოგრაფია
                    </span>
                    <span
                      className={`slide-nav-text text-white ${
                        activeSlide === 1 ? "active" : ""
                      }`}
                      onClick={() => handleSlideChange(1)}
                    >
                      მთავარი ქალაქები
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              className="absolute top-1/2 left-0 w-full h-1/2 z-30"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(21, 19, 19, 0.7) 20%, rgba(14, 13, 13, 0.9) 50%, #131212 80%)",
              }}
              initial={{ opacity: 0.7 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
            <div className="bg-[#131212] -bottom-64 z-20 absolute w-full h-[280px] lg:h-[280px]" />
          </motion.div>
        )}
        {activeSection === 1 && sections[1].image3 && (
          <motion.img
            src={sections[1].image3}
            alt="Background Image Section 01"
            className="absolute top-0 left-0 w-full h-full object-cover z-40"
            initial={{ y: "-60%", opacity: 1 }}
            animate={{ y: "-47%", opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        )}
        {/* Section 02 Swiper */}
        {activeSection === 2 && (
          <motion.div
            className="absolute top-0 left-0 w-full h-full z-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="swiper-container section-02">
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                grabCursor={true}
                className="w-[100vw] h-[100vh]"
                onSwiper={(swiper) => (section02SwiperRef.current = swiper)}
                onSlideChange={(swiper) =>
                  setActiveSection02Slide(swiper.activeIndex)
                }
              >
                {sections[2].section02Images?.map((image, index) => (
                  <SwiperSlide key={index} className="section-02">
                    {index === 1 ? (
                      <motion.div
                        initial={{ y: "20%", opacity: 1 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="w-[100vw] h-[100vh] object-cover"
                          priority
                          sizes="100vw"
                          loading="eager"
                        />
                      </motion.div>
                    ) : (
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="w-[100vw] h-[100vh] object-cover"
                        sizes="100vw"
                        loading="eager"
                      />
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="slide-nav-container section-02 space-x-5 flex items-center">
                {sections[2].section02Images?.map((item, index) => {
                  if (
                    index === activeSection02Slide ||
                    index === activeSection02Slide - 1 ||
                    index === activeSection02Slide + 1
                  ) {
                    return (
                      <span
                        key={index}
                        className={`slide-nav-text section-02 ${
                          activeSection02Slide === index
                            ? "active scale-110"
                            : ""
                        }`}
                        onClick={() => handleSection02SlideChange(index)}
                      >
                        {item.text}
                      </span>
                    );
                  }
                  return null;
                })}
                <button
                  onClick={() => router.push(`seasen-georgia`)}
                  className="bg-red-400 py-1.5 hidden lg:block rounded-md px-4 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer hover:text-white hover:bg-red-600"
                >
                  გაიგე მეტი
                </button>
              </div>
            </div>
          </motion.div>
        )}
        {/* Section 03 */}
        {activeSection === 3 && (
          <motion.div
            className="absolute top-0 left-0 w-full h-full z-20 bg-[#131212]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mx-4 sm:mx-8 lg:mx-10 lg:px-0 h-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
              {/* Desktop Layout */}
              <div className="hidden lg:flex flex-row items-center justify-between gap-12 w-full">
                {/* მარცხენა სვეტი - სურათი */}
                <motion.div
                  className="w-1/3 mb-0"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                >
                  <Image
                    src={sections[3].image || "/flags/doqi.png"}
                    alt="Section 03 Image"
                    width={200}
                    height={200}
                    className="w-3/4 h-auto object-cover rounded-lg mx-auto lg:mx-0"
                    sizes="(max-width: 767px) 60vw, (max-width: 1023px) 200px, 200px"
                  />
                </motion.div>
                {/* შუა სვეტი - ტექსტი */}
                <motion.div
                  className="w-1/3 text-white px-4 lg:pl-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                  <h3 className="flex items-center gap-4 text-3xl mb-8 tracking-widest">
                    <span className="flex w-14 h-0.5 bg-white" />
                    კულტურული <br /> მემკვიდრეობა
                  </h3>
                  <p className="text-md mb-10 leading-7">
                    ქართული ღვინო 8000 წლისაა
                  </p>
                  <div className="pl-8">
                    <h4 className="flex items-center gap-4 text-2xl mb-6">
                      <span className="flex w-14 h-0.5 bg-white" />
                      ქვევრის <br /> ღვინო
                    </h4>
                    <p className="text-base leading-8 max-w-md">
                      ქვევრის ღვინის დაყენების უძველესი ქართული ტრადიციული
                      მეთოდი იუნესკოს არამატერიალური კულტურული მემკვიდრეობის
                      წარმომადგენლობით სიაშია შეტანილი.
                    </p>
                  </div>
                </motion.div>
                {/* მარჯვენა სვეტი - ტექსტი */}
                <motion.div
                  className="w-1/3 text-white px-4 lg:pl-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                >
                  <div>
                    <figure className="relative">
                      <figcaption className="text-8xl font-semibold text-gray-300 opacity-25">
                        03
                      </figcaption>
                      <p className="absolute bottom-5 left-14 flex items-center gap-4 text-red-500 text-base tracking-widest">
                        <span className="w-14 h-0.5 bg-red-500" />
                        აღმოაჩინე საქართველო
                      </p>
                    </figure>
                  </div>
                  <div className="pl-8">
                    <h5 className="text-4xl font-bold mb-6">ღვინის აკვანი</h5>
                    <p className="text-base mb-8 leading-8 max-w-md">
                      8000 წლის წინ ქართველებმა უკვე იცოდნენ ქვევრის უნიკალური
                      ტექნოლოგია, რომელიც დღეს მსოფლიოს ერთ-ერთ მოწინავე მეთოდად
                      იქცა. თიხისა და ვაზის ასეთი ხანგრძლივი და ჰარომონიული
                      თანაცხოვრება ადასტურებს თუ რამდენად საინტერესო და
                      გამორჩეულია ქართული ღვინის გზა.
                    </p>
                    <button
                      onClick={() => router.push(`georgia-cradle-wine`)}
                      className="border border-red-500 px-8 py-2 rounded-md text-red-500 text-base transition-all duration-300 ease-in-out hover:text-white hover:border-white cursor-pointer"
                    >
                      გაიგე მეტი
                    </button>
                  </div>
                </motion.div>
              </div>
              {/* Mobile Layout */}
              <div className="flex lg:hidden flex-col items-center gap-6 w-full px-4 sm:px-8">
                {/* სურათი და მის გვერდით ტექსტი */}
                <div className="flex flex-col sm:flex-row items-center justify-center sm:items-center gap-4 sm:gap-6 w-full">
                  <motion.div
                    className="w-full sm:w-1/2 max-w-[150px] sm:max-w-[200px]"
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  >
                    <Image
                      src={sections[3].image || "/flags/doqi.png"}
                      alt="Section 03 Image"
                      width={150}
                      height={150}
                      className="w-full h-auto object-cover rounded-lg"
                      sizes="(max-width: 640px) 75vw, 200px"
                    />
                  </motion.div>
                  <motion.div
                    className="w-full sm:w-1/2 text-white text-center sm:text-left"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                  >
                    <h3 className="flex items-center justify-center sm:justify-start gap-4 text-lg sm:text-xl mb-4 tracking-widest">
                      <span className="flex w-10 h-0.5 bg-white" />
                      კულტურული მემკვიდრეობა
                    </h3>
                    <p className="text-xs sm:text-sm leading-6">
                      ქართული ღვინო 8000 წლისაა
                    </p>
                  </motion.div>
                </div>
                {/* ქვევრის ღვინის სექცია */}
                <motion.div
                  className="w-full text-white text-center sm:text-left flex flex-col items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                >
                  <h4 className="flex items-center justify-center sm:justify-start gap-4 text-base sm:text-lg mb-4">
                    <span className="flex w-10 h-0.5 bg-white" />
                    ქვევრის ღვინო
                  </h4>
                  <p className="text-xs sm:text-sm leading-6 max-w-[520px] mx-auto sm:mx-0">
                    ქვევრის ღვინის დაყენების უძველესი ქართული ტრადიციული მეთოდი
                    იუნესკოს არამატერიალური კულტურული მემკვიდრეობის
                    წარმომადგენლობით სიაშია შეტანილი.
                  </p>
                </motion.div>
                {/* ღვინის აკვანის სექცია */}
                <motion.div
                  className="w-full text-white text-center sm:text-left flex flex-col items-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                >
                  <div className="relative mb-4">
                    <figcaption className="text-4xl sm:text-5xl font-semibold text-gray-300 opacity-25 text-center sm:text-left">
                      03
                    </figcaption>
                    <p className="absolute bottom-2 sm:bottom-3 left-0 sm:left-10 flex items-center justify-center sm:justify-start gap-4 text-red-500 text-xs tracking-widest">
                      <span className="w-10 h-0.5 bg-red-500" />
                      აღმოაჩინე საქართველო
                    </p>
                  </div>
                  <h5 className="text-lg sm:text-xl font-bold mb-4">
                    ღვინის აკვანი
                  </h5>
                  <p className="text-xs sm:text-sm leading-6 mb-4 max-w-[520px] mx-auto sm:mx-0">
                    8000 წლის წინ ცქართველებმა უკვე იცოდნენ ქვევრის უნიკალური
                    ტექნოლოგია, რომელიც დღეს მსოფლიოს ერთ-ერთ მოწინავე მეთოდად
                    იქცა. თიხისა და ვაზის.
                  </p>
                  <button className="border border-red-500 px-4 sm:px-6 py-2 rounded-md text-red-500 text-xs transition-all duration-300 ease-in-out hover:text-white hover:border-white cursor-pointer">
                    გაიგე მეტი
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
        {/* Start სექციის ცენტრირებული ტექსტი */}
        {activeSection === 0 && (
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 text-white text-4xl lg:text-6xl font-bold text-center leading-tight start-text"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.05 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.1, 0.25, 1],
              delay: 0.5,
            }}
          >
            რატომ
            <br />
            საქართველო
          </motion.div>
        )}
        {/* შავი ფონი Start სექციისთვის */}
        {activeSection === 0 && (
          <motion.div
            className="black-fill"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        )}
        {/* ვერტიკალური נסיעות */}
        <motion.div
          className="absolute top-1/2 transform -translate-y-1/2 flex flex-col justify-center items-center z-40 select-none vertical-nav"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {sections.map((section, index) => (
            <div
              key={section.id}
              className="relative my-1 lg:my-4 flex items-center"
            >
              <span
                className={`text-white font-semibold cursor-pointer ${
                  activeSection === index ? "text-yellow-300" : ""
                }`}
                onClick={() => handleClick(index)}
              >
                {section.id === "start" ? "Start" : section.id.split("-")[1]}
              </span>
            </div>
          ))}
        </motion.div>
        <motion.div
          className="absolute top-1/2 transform -translate-y-1/2 z-40"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <div ref={contentRef} className="content-container">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`section ${
                section.id === "start" ? "start-section" : ""
              } ${section.id === "section-02" ? "hidden" : ""}`}
              style={
                section.id !== "section-02" && section.image
                  ? { backgroundImage: `url(${section.image})` }
                  : {}
              }
            >
              {section.id !== "section-02" && section.content}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
