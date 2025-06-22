"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { contentItems, sections, sidebarItems } from "@/constants/data/data";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import SocialList from "@/app/(route)/geography-of-georgia/_components/social-list";

const Page: React.FC = () => {
  const router = useRouter();
  const section01 = sections.find((section) => section.id === "section-03");
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
          <div className="relative w-full h-full">
            <Image
              src={geographyItem.image}
              alt={geographyItem.title}
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute top-0 left-0 lg:left-44 h-full flex flex-col justify-center p-4 sm:p-6 text-white">
              <motion.h1
                className="text-3xl sm:text-4xl font-bold mb-4"
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                {geographyItem.title}
              </motion.h1>
              <motion.p
                className="text-sm sm:text-md max-w-3xl"
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                {geographyItem.description}
              </motion.p>
            </div>
            <div className="absolute bottom-1 p-4 sm:p-6 left-0 lg:left-44">
              <motion.button
                className="text-white flex items-center gap-1 hover:text-red-500 transition-all duration-200 ease-in-out cursor-pointer font-semibold"
                onClick={() => handleClickRoute()}
                initial="hidden"
                animate="visible"
                variants={textVariants}
              >
                მთავარი
                <span>
                  <ArrowRight size={15} className="mt-1" />
                </span>
              </motion.button>
            </div>
          </div>
        )}
      </div>
      <div className="max-w-[1110px] mx-auto p-4 sm:p-6 pt-8 sm:pt-12 grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-12 min-h-screen">
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="flex flex-col space-y-4 col-span-1 sm:sticky sm:top-30 sm:self-start"
        >
          <div className="mb-3 text-red-500 font-bold select-none text-lg">
            სარჩევი
          </div>
          {sidebarItems.map((item, index) => (
            <motion.li
              key={index}
              variants={textVariants}
              className={`text-black text-sm sm:text-base cursor-pointer select-none hover:text-gray-600 transition-colors ${
                activeSection === item ? "text-gray-500 font-semibold" : ""
              }`}
              onClick={() => handleScrollToSection(item)}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>
        <div className="col-span-1 sm:col-span-3 mt-6 sm:mt-0">
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
      <div className="max-w-[1110px] mx-auto px-4 lg:p-6">
        <SocialList />
      </div>
      <div>
        <div className="max-w-[1110px] mx-auto px-4 lg:p-6">
          <h4 className="text-black font-bold mb-3">იხoლეთ ასევე</h4>
        </div>
        <div className="px-2"></div>
      </div>
    </>
  );
};

export default Page;
