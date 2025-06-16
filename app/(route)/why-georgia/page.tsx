"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";

interface Section {
  id: string;
  content: string;
  image?: string; // ოპციონალური სექციებისთვის 01-04
  image1?: string; // Start სექციისთვის
  image2?: string; // Start სექციისთვის
  image3?: string; // Start სექციისთვის
  title?: string;
  description?: string;
  buttonText?: string;
}

const Page: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<number>(0);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.transform = `translateY(-${
        activeSection * 100
      }vh)`;
    }
  }, [activeSection]);

  const handleClick = (index: number) => {
    setActiveSection(index);
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
      image: "/flags/clouds.webp",
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
        html,
        body {
          margin: 0;
          padding: 0;
          overflow: hidden;
          height: 100vh;
          width: 100vw;
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
          font-size: 2rem;
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
          height: 70%; /* გაზარდა 50%-დან 70%-მდე */
          background-color: black;
          z-index: 5;
        }
      `}</style>
      <div className="relative h-screen overflow-hidden">
        {/* image1.webp Start-ისთვის - ოდნავ ზევით სქროლავს */}
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
        {/* image2.webp Start-ისთვის - ცენტრიდან ქვევით სქროლავს */}
        {activeSection === 0 && sections[0].image2 && (
          <motion.img
            src={sections[0].image2}
            alt="Middle Image"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 z-20 object-cover"
            initial={{ y: "-20%", opacity: 1, scale: 1.2 }}
            animate={{ y: "1%", opacity: 1, scale: 1.4 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        )}
        {/* image1.webp section-01-ისთვის - მაღლა ამოდის ანიმაციურად */}
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
        {/* image2.webp section-01-ისთვის - სრულ ეკრანზე, შავი ფონი გრადიენტით */}
        {activeSection === 1 && sections[1].image2 && (
          <motion.div
            className="absolute top-0 left-0 w-full h-full z-20"
            initial={{ opacity: 1, y: "30%" }}
            animate={{ opacity: 1, y: "-20%" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {/* image2.webp - სრულ ეკრანზე */}
            <motion.img
              src={sections[1].image2}
              alt="Full Screen Image Section 01"
              className="absolute top-0 left-0 w-full h-full object-cover z-20"
            />
            {activeSection === 1 && (
              <div>
                <motion.div
                  className="absolute top-0 w-full h-full z-40"
                  initial={{ opacity: 1, y: "-15%" }}
                  animate={{ opacity: 1, y: "40%" }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                >
                  <div className="flex items-center max-w-6xl mx-auto justify-between gap-10">
                    <div className="flex flex-col">
                      <div className="relative">
                        <h3 className="text-gray-400 text-8xl mb-10">01 </h3>
                        <span className="text-red-600 absolute top-14 left-4 text-sm tracking-[5px] flex items-center gap-2">
                          <div className="w-[65px] h-0.5 bg-red-600" />
                          შენი მოგზაურობის <br /> დასაწყისი
                        </span>
                      </div>
                      <h5 className="text-white text-5xl mb-8 font-bold">
                        საქართველოს <br /> გეოგრაფია
                      </h5>
                      <p className="text-white text-md max-w-md mb-7">
                        {sections[1].description}
                      </p>
                      <button className="text-red-500 text-sm cursor-pointer border flex items-center align-middle border-red-400 hover:border-white w-fit px-12 rounded-lg py-2 hover:text-white transition-all duration-200 ease-in-out">
                        {sections[1].buttonText}
                      </button>
                    </div>
                    <div className="text-white w-2/3">
                      <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        grabCursor={true}
                        className="w-full h-96"
                      >
                        <SwiperSlide>
                          <Image
                            src="/flags/ka.svg"
                            className="mt-4"
                            alt="Slide 1"
                            width={700}
                            height={384}
                            style={{ objectFit: "cover" }}
                            sizes="(max-width: 768px) 100vw, 600px"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <Image
                            src="/flags/kaa.svg"
                            alt="Slide 2"
                            className="mt-12"
                            width={700}
                            height={384}
                            style={{ objectFit: "cover" }}
                            sizes="(max-width: 768px) 100vw, 600px"
                          />
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
            {/* შავი ფონი გრადიენტით, სურათის წინ */}
            <motion.div
              className="absolute top-1/2 left-0 w-full h-1/2 z-30"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(21, 19, 19, 0.7) 20%, rgba(14, 13, 13, 0.9) 50%, #131212 80%",
              }}
              initial={{ opacity: 0.7 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
            <div className="bg-[#131212] -bottom-64 z-20 absolute w-full h-[280px]" />
          </motion.div>
        )}
        {/* sdsd */}
        {activeSection === 1 && sections[1].image3 && (
          <motion.img
            src={sections[1].image3}
            alt="Background Image Section 01"
            className="absolute top-0 left-0 w-full h-full object-cover z-40"
            initial={{ y: "-30%", opacity: 1 }}
            animate={{ y: "-44%", opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        )}
        {/* image3.webp Start-ისთვის - ღრუბლები */}
        {activeSection === 0 && sections[0].image3 && (
          <motion.img
            src={sections[0].image3}
            alt="Clouds Image"
            className="absolute top-2/3 left-1/2 transform -translate-x-1/2 z-30 object-cover"
            initial={{ y: "20%", opacity: 0, scale: 2.5 }}
            animate={{ y: "-5%", opacity: 1, scale: 1.3 }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
        )}
        {/* ცენტრირებული текста - მხოლოდ Start-ისთვის */}
        {activeSection === 0 && (
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 text-white text-6xl font-bold text-center leading-tight"
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ opacity: 1, scale: 1.3 }}
            transition={{ duration: 2, ease: "easeOut", delay: 1 }}
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
        {/* ვერტიკალური ნომრები */}
        <motion.div
          className="absolute right-16 top-1/2 transform select-none -translate-y-1/2 flex flex-col justify-center items-center z-40"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {sections.map((section, index) => (
            <div key={section.id} className="relative my-4 flex items-center">
              <span
                className={`text-white text-xl font-semibold cursor-pointer ${
                  activeSection === index ? "text-yellow-300" : ""
                }`}
                onClick={() => handleClick(index)}
              >
                {section.id === "start" ? "Start" : section.id.split("-")[1]}
              </span>
            </div>
          ))}
        </motion.div>
        {/* ვერტიკალური ხაზი */}
        <motion.div
          className="absolute right-8 top-1/2 transform -translate-y-1/2 h-[18rem] w-0.5 bg-gray-300 z-40"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        {/* კონტენტის კონტეინერი */}
        <div ref={contentRef} className="content-container">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`section ${
                section.id === "start" ? "start-section" : ""
              }`}
              style={
                section.image
                  ? { backgroundImage: `url(${section.image})` }
                  : {}
              }
            >
              {section.content}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
