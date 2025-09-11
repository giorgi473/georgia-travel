"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ParagraphText from "@/components/TextContent";
import SocialList from "@/components/SocialList";
import {
  contentItems,
  sections,
  sidebarItems,
} from "@/constants/data/whyGeorgiaData";

const Page: React.FC = () => {
  const router = useRouter();
  const section01 = sections.find((section) => section.id === "section-01");
  const geographyItem = section01?.geographyOfGeorgia?.[0];

  const [activeSection, setActiveSection] = useState<string | null>(null);

  const handleClickRoute = () => {
    router.push(`/`);
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const contentRefs = useRef<(HTMLDivElement | null)[]>(
    new Array(contentItems.length).fill(null)
  );

  const handleScrollToSection = (title: string) => {
    const index = contentItems.findIndex((item) => item.title === title);
    if (index !== -1 && contentRefs.current[index]) {
      setActiveSection(title);
      const offset = 120; // Offset to account for sticky sidebar (top-30 = 120px)
      const elementPosition =
        contentRefs.current[index]!.getBoundingClientRect().top +
        window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {geographyItem && (
          <div className="relative w-full h-screen">
            <Image
              src={geographyItem.image}
              alt={geographyItem.title}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="absolute inset-0 flex flex-col justify-start p-4 sm:p-6 lg:px-8 container mx-auto z-20">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-[250px] sm:mt-[250px] mb-8">
                {geographyItem.title}
              </h1>
              <p className="text-sm sm:text-base max-w-xl text-gray-300 mt-4 mb-10">
                {geographyItem.description}
              </p>
              <div className="absolute bottom-10 pl-2">
                <button
                  className="cursor-pointer border flex items-center gap-2 border-red-500 px-4 py-2 text-white hover:bg-red-500 rounded-lg transition-all duration-200 ease-in-out font-semibold text-sm sm:text-base"
                  onClick={() => handleClickRoute()}
                >
                  მთავარი
                  <span>
                    <ArrowRight size={15} className="mt-0.5" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-11 pt-12 sm:pt-12 grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-5 min-h-screen">
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="flex flex-col space-y-4 col-span-1 sm:sticky sm:top-30 sm:self-start"
        >
          <div className="mb-3 text-black font-bold select-none text-lg sm:text-lg lg:text-2xl">
            სარჩევი
          </div>
          {sidebarItems.map((item, index) => (
            <motion.li
              key={index}
              variants={textVariants}
              className={`text-black text-sm sm:text-sm cursor-pointer select-none transition-colors ${
                activeSection === item ? "text-red-500 font-semibold" : ""
              }`}
              onClick={() => handleScrollToSection(item)}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
        <div className="col-span-1 sm:col-span-3 mt-6 sm:mt-0">
          <ParagraphText />
          {contentItems.map((item, index) => (
            <motion.div
              key={index}
              ref={(el) => {
                contentRefs.current[index] = el;
              }}
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              className="min-w-[200px] mb-4"
            >
              <motion.h2
                variants={textVariants}
                className="text-lg sm:text-xl font-bold mb-5"
              >
                {item.title}
              </motion.h2>
              {item.imageSrc && (
                <motion.div variants={textVariants} className="mt-2 mb-7">
                  <Image
                    src={item.imageSrc}
                    alt={item.alt || ""}
                    width={550}
                    height={500}
                    className="object-cover w-full rounded-lg"
                  />
                </motion.div>
              )}
              {item.description.length > 0 && (
                <motion.p
                  variants={textVariants}
                  className="text-xs sm:text-sm mb-8"
                >
                  {item.description.split("\n\n").map((part, i) => (
                    <span key={i}>
                      {part}
                      {i < item.description.split("\n\n").length - 1 && <br />}
                      <br />
                    </span>
                  ))}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="container mx-auto px-6 sm:px-8 md:px-10 lg:px-11 pt-8 sm:pt-8">
        <SocialList />
      </div>
    </>
  );
};

export default Page;
