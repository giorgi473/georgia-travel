"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import "swiper/css";

interface Section {
  id: string;
  content: string;
  image?: string;
  image1?: string;
  image2?: string;
  image3?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  section02Images?: { src: string; alt: string; text: string }[];
}

const Page: React.FC = () => {
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

  const sections: Section[] = [
    {
      id: "start",
      content: "აქ არის Start სექცია",
      image1: "/flags/image1.webp",
      image2: "/flags/image2.webp",
      image3: "/flags/clouds.webp",
    },
    {
      id: "section-01",
      content: "აქ არის 01 სექცია",
      image1: "/flags/image2.webp",
      image2: "/flags/image3.webp",
      image3: "/flags/clouds.webp",
      title: "საქართველოს \n გეოგრაფია",
      description:
        "საქართველო ევროპისა და აზიის გზაგასაყარზე, კავკასიაში, შავი ზღვის სანაპიროზე მდებარეობს. ის საუკუნეების განმავლობაში ასრულებდა ცივილიზაციების დამაკავშირებელ ფუნქციას და სწორედ აქ გადიოდა „აბრეშუმის გზაც“ - მსოფლიოს უმსხვილესი სავაჭრო არტერია.",
      buttonText: "გაიგე მეტი",
    },
    {
      id: "section-02",
      content: "აქ არის 02 სექცია",
      section02Images: [
        { src: "/flags/spring.webp", alt: "Slide 1", text: "გაზაფხული" },
        { src: "/flags/summer.webp", alt: "Slide 2", text: "ზაფხული" },
        { src: "/flags/autumn.webp", alt: "Slide 4", text: "შემოდგობა" },
        { src: "/flags/winter.webp", alt: "Slide 3", text: "ზამთარი" },
      ],
    },
    {
      id: "section-03",
      content: "აქ არის 03 სექცია",
      image: "/flags/image1.webp",
    },
    {
      id: "section-04",
      content: "აქ არის 04 სექცია",
      image: "/flags/image2.webp",
    },
  ];

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Georgian:wght@400;700&display=swap");

        html,
        body {
          margin: 0;
          padding: 0;
          overflow: hidden;
          height: 100vh;
          width: 100vw;
          font-family: "Noto Sans Georgian", sans-serif;
        }

        .content-container {
          height: 500vh;
          position: relative;
          width: 100%;
          transition: transform 0.5s ease;
        }

        .section {
          height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: clamp(1.5rem, 4vw, 2rem);
          color: white;
          width: 100%;
          position: relative;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .start-section {
          background: none;
        }

        .black-fill {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 70%;
          background-color: black;
          z-index: 5;
        }

        .start-text {
          will-change: transform, opacity;
          font-size: clamp(2rem, 8vw, 4rem);
          line-height: 1.2;
        }

        .custom-button {
          position: relative;
          overflow: hidden;
          z-index: 1;
          font-size: clamp(0.75rem, 2vw, 1rem);
          padding: clamp(0.5rem, 1.5vw, 0.75rem) clamp(1rem, 3vw, 1.5rem);
        }
        .custom-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: #ef4444;
          transition: left 0.3s ease;
          z-index: -1;
        }
        .custom-button:hover::before {
          left: 0;
        }

        .slide-nav-text {
          cursor: pointer;
          transition: transform 0.3s ease, color 0.3s ease;
          font-size: clamp(0.75rem, 2vw, 1rem);
        }
        .slide-nav-text.active {
          transform: scale(1.3);
          color: #ffffff;
        }

        .slide-nav-text.section-02 {
          padding: clamp(0.25rem, 1vw, 0.5rem) clamp(0.5rem, 2vw, 1rem);
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          backdrop-filter: blur(5px);
          position: relative;
          color: white;
          font-size: clamp(0.65rem, 1.8vw, 0.875rem);
          transition: transform 0.3s ease, color 0.3s ease, background 0.3s ease;
        }
        .slide-nav-text.section-02.active {
          transform: scale(1.2);
          color: #000000;
        }
        .slide-nav-text.section-02.active::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: clamp(2rem, 5vw, 2.5rem);
          height: clamp(2rem, 5vw, 2.5rem);
          border-radius: 50%;
          z-index: -1;
        }

        .slide-nav-container {
          margin-top: 1rem;
          margin-left: 1rem;
          display: flex;
          gap: clamp(0.5rem, 2vw, 1rem);
          font-size: clamp(0.75rem, 2vw, 1rem);
        }
        .slide-nav-container.section-02 {
          margin-top: 0;
          justify-content: center;
          position: absolute;
          bottom: clamp(1rem, 3vw, 2rem);
          left: 50%;
          transform: translateX(-50%);
          z-index: 50;
          gap: clamp(0.25rem, 1vw, 0.5rem);
        }

        @media (max-width: 767px) {
          .section {
            font-size: clamp(1rem, 3vw, 1.2rem);
          }
          .black-fill {
            height: 55%;
            background: linear-gradient(
              180deg,
              transparent,
              rgba(0, 0, 0, 0.95)
            );
          }
          .start-image2 {
            top: auto !important;
            bottom: 0 !important;
            width: 100% !important;
            height: 300px !important;
            overflow: hidden !important;
            object-fit: cover !important;
          }
          .start-image3 {
            top: auto !important;
            bottom: -150px !important;
            width: 100% !important;
            height: 300px !important;
            overflow: hidden !important;
            object-fit: cover !important;
          }
          .black-section-container {
            align-items: flex-start !important;
            padding-top: 50px !important;
          }
          .black-section-text {
            margin-top: 150px !important;
            transform: translateY(50px) !important;
            flex-direction: column-reverse;
          }
          .swiper-container {
            margin-left: auto;
            margin-right: auto;
            margin-top: 2.5rem;
            max-width: 90%;
            width: 100%;
          }
          .swiper-container.section-02 {
            width: 100vw;
            height: 100vh;
            margin: 0;
          }
          .swiper-slide img {
            width: 100%;
            height: auto;
            object-fit: cover;
          }
          .swiper-slide.section-02 img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .slide-nav-container {
            font-size: 0.875rem;
          }
          .slide-nav-container.section-02 {
            font-size: 0.75rem;
            gap: 0.25rem;
          }
          .vertical-nav {
            right: 2px !important;
            font-size: 0.75rem !important;
          }
          .vertical-nav-line {
            right: 1px !important;
            height: 120px !important;
          }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .section {
            font-size: clamp(1rem, 2.5vw, 1.2rem);
          }
          .black-section-container {
            align-items: flex-start !important;
            padding-top: 50px !important;
          }
          .black-section-text {
            margin-top: 100px !important;
            transform: translateY(50px) !important;
            flex-direction: column-reverse;
            padding-right: 2rem;
          }
          .text-content h5 {
            white-space: nowrap;
          }
          .swiper-container {
            margin-left: auto;
            margin-right: auto;
            margin-top: 2rem;
            max-width: 600px;
            width: 100%;
          }
          .swiper-container.section-02 {
            width: 100vw;
            height: 100vh;
            margin: 0;
          }
          .swiper-slide img {
            width: 100%;
            height: auto;
            object-fit: cover;
          }
          .swiper-slide.section-02 img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .slide-nav-container {
            font-size: 1rem;
          }
          .slide-nav-container.section-02 {
            font-size: 0.875rem;
            gap: 0.5rem;
          }
          .vertical-nav {
            right: 8px !important;
            font-size: 1rem !important;
          }
          .vertical-nav-line {
            right: 4px !important;
            height: 160px !important;
          }
        }

        @media (min-width: 1024px) {
          .start-image3 {
            top: 40% !important;
            bottom: auto !important;
            width: auto !important;
            height: auto !important;
            max-width: none !important;
          }
          .black-section-container {
            align-items: flex-end !important;
            padding-bottom: 2rem !important;
          }
          .black-section-text {
            margin-top: 0 !important;
            transform: none !important;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
          }
          .text-content {
            max-width: 40%;
          }
          .swiper-container {
            max-width: 65%;
            margin-top: 3rem;
          }
          .swiper-container.section-02 {
            width: 100vw;
            height: 100vh;
            margin: 0;
          }
          .swiper-slide img {
            width: 100%;
            height: auto;
            object-fit: cover;
          }
          .swiper-slide.section-02 img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .slide-nav-container {
            font-size: 1.125rem;
          }
          .slide-nav-container.section-02 {
            font-size: 1rem;
            gap: 0.75rem;
          }
          .vertical-nav {
            right: 16px !important;
            font-size: 1.25rem !important;
          }
          .vertical-nav-line {
            right: 8px !important;
            height: 200px !important;
          }
        }
      `}</style>
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
                    className="custom-button text-red-500 text-xs md:text-sm lg:text-base font-semibold border border-red-400 rounded-lg px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-3 w-fit bg-transparent hover:text-white hover:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-300 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
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
            transition={{ duration: 0.3, ease: "easeOut" }}
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
                        initial={{ y: "20%", opacity: 0 }}
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
                  // ცენტრში აქტიური სლაიდი, მარცხნივ წინა, მარჯვნივ შემდეგი
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
                <button className="bg-red-400 py-1.5 hidden lg:block rounded-md px-4 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer hover:text-white hover:bg-red-600">
                  გადასვლა
                </button>
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
            რატომ <br />
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
        {/* ვერტიკალური ნავიგაცია */}
        <motion.div
          className="absolute top-1/2 transform -translate-y-1/2 flex flex-col justify-center items-center z-50 select-none vertical-nav"
          initial={{ opacity: 0, x: 20 }}
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
          className="absolute top-1/2 transform -translate-y-1/2 w-0.5 bg-gray-300 z-50 vertical-nav-line"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
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
