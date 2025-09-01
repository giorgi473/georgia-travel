"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { NavItemDetail, navItems } from "@/constants/data/data";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isPanelHovered, setIsPanelHovered] = useState(false);
  const navRefs = useRef<(HTMLLIElement | null)[]>(Array(5).fill(null));
  const [underlineStyle, setUnderlineStyle] = useState<{
    width: number;
    left: number;
  }>({ width: 0, left: 0 });
  const headerRef = useRef<HTMLDivElement | null>(null);
  let leaveTimeout: NodeJS.Timeout | null = null;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsMenuOpen(false);
  };

  const handleMouseEnter = (name: string, index: number) => {
    if (leaveTimeout) {
      clearTimeout(leaveTimeout);
    }
    setHoveredItem(
      name || navItems[index]?.name || navItems[index]?.natureName || null
    );
    const element = navRefs.current[index];
    if (element && headerRef.current) {
      const headerRect = headerRef.current.getBoundingClientRect();
      const rect = element.getBoundingClientRect();
      setUnderlineStyle({
        width: rect.width,
        left: rect.left - headerRect.left,
      });
    }
  };

  const handleMouseLeave = () => {
    if (leaveTimeout) {
      clearTimeout(leaveTimeout);
    }
    leaveTimeout = setTimeout(() => {
      if (!isPanelHovered) {
        setHoveredItem(null);
        setUnderlineStyle({ width: 0, left: 0 });
      }
    }, 200);
  };

  const getColumnTexts = (
    details: NavItemDetail[] | undefined
  ): NavItemDetail[] => {
    if (!details) return [];
    return details;
  };

  const MotionImage = motion(Image);

  return (
    <motion.header
      ref={headerRef}
      className="fixed top-0 w-full z-[1000] transition-all duration-300 shadow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setHoveredItem(null);
        setIsPanelHovered(false);
        setUnderlineStyle({ width: 0, left: 0 });
      }}
      animate={{
        backgroundColor:
          isHovered || isScrolled || isMenuOpen ? "#ffffff" : "transparent",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 sm:gap-6">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo/logo.svg"
                alt="Logo"
                width={80}
                height={50}
                priority
                className="object-contain w-16 sm:w-20 xl:w-24 mr-10"
              />
            </Link>
            <nav className="hidden xl:flex">
              <ul className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm font-medium">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name || item.natureName || index.toString()}
                    ref={(el) => {
                      navRefs.current[index] = el;
                    }}
                    whileHover={{
                      color: "#3b82f6",
                      backgroundColor:
                        (item.name === "რატომ საქართველო" ||
                          item.natureName === "ბუნება და თავგადასავლები") &&
                        hoveredItem === (item.name || item.natureName)
                          ? ""
                          : "transparent",
                    }}
                    animate={{
                      backgroundColor:
                        hoveredItem !== (item.name || item.natureName) &&
                        (item.name === "რატომ საქართველო" ||
                          item.natureName === "ბუნება და თავგადასავლები")
                          ? "transparent"
                          : undefined,
                    }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() =>
                      handleMouseEnter(
                        item.name || item.natureName || index.toString(),
                        index
                      )
                    }
                    onMouseLeave={handleMouseLeave}
                    className="relative px-3 py-2"
                    style={{
                      transition: "background-color 0.3s ease",
                    }}
                  >
                    <Link
                      href={item.href}
                      className={
                        (isHovered || isScrolled || isMenuOpen
                          ? "text-gray-800"
                          : "text-white") + " transition-colors text-md"
                      }
                    >
                      {item.name || item.natureName}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="hidden xl:flex items-center gap-3 sm:gap-3 xl:gap-10">
            <motion.button
              onClick={toggleSearch}
              aria-label="Search"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Search
                className={
                  isHovered || isScrolled || isMenuOpen
                    ? "text-gray-800"
                    : "text-white"
                }
                size={20}
              />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Heart
                className={
                  isHovered || isScrolled || isMenuOpen
                    ? "text-gray-800"
                    : "text-white"
                }
                size={20}
              />
            </motion.button>
          </div>
          <motion.button
            className="xl:hidden text-xl sm:text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <span
              className={
                isHovered || isScrolled || isMenuOpen
                  ? "text-gray-800"
                  : "text-white"
              }
            >
              {isMenuOpen ? "✕" : "☰"}
            </span>
          </motion.button>
        </div>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="xl:hidden mt-4"
          >
            <Accordion type="single" collapsible className="w-full">
              {navItems.map((item, index) => (
                <AccordionItem
                  key={item.name || item.natureName || index.toString()}
                  value={item.name || item.natureName || index.toString()}
                >
                  <AccordionTrigger className="text-left py-6 rounded flex justify-between items-center">
                    {item.name || item.natureName}
                  </AccordionTrigger>
                  <AccordionContent className="pl-4 pt-2 max-h-[300px] overflow-y-auto">
                    {(item.name === "რატომ საქართველო" ||
                      item.name === "ადგილები" ||
                      item.name === "სანახაობები" ||
                      item.natureName === "ბუნება და თავგადასავლები" ||
                      item.name === "სასარგებლო ინფორმაცია") &&
                      item.details.map((column, colIndex) => (
                        <div key={colIndex} className="text-gray-500 mb-4">
                          <h3 className="text-md font-bold text-black">
                            {column.title}
                          </h3>
                          {colIndex === 2 &&
                            column.images &&
                            column.images.length === 2 &&
                            (item.name === "სანახაობები" ||
                              item.natureName === "ბუნება და თავგადასავლები" ||
                              item.name === "სასარგებლო ინფორმაცია") && (
                              <div className="flex gap-4">
                                {column.images.map((image, imgIndex) => (
                                  <div
                                    key={imgIndex}
                                    className="relative flex-1 h-72 overflow-hidden rounded-lg"
                                  >
                                    <MotionImage
                                      src={image}
                                      alt={`${column.title} ${imgIndex + 1}`}
                                      fill
                                      className="object-cover"
                                      whileHover={{ scale: 1.1 }}
                                      transition={{ duration: 0.3 }}
                                    />
                                    <p className="absolute bottom-5 left-3 font-bold w-[220px] text-white text-md bg-opacity-50 px-2 py-1 rounded">
                                      {item.name === "სანახაობები"
                                        ? imgIndex === 0
                                          ? "სვეტიცხოველი მსოპლიო ხელოვნების საგანძური"
                                          : "ალავერდი"
                                        : item.natureName ===
                                          "ბუნება და თავგადასავლები"
                                        ? imgIndex === 0
                                          ? "აღმოაჩინე თავგადასავალი 1"
                                          : "აღმოაჩინე თავგადასავალი 2"
                                        : imgIndex === 0
                                        ? "აღმოაჩინე ინფორმაცია 1"
                                        : "აღმოაჩინე ინფორმაცია 2"}
                                    </p>
                                    {(item.name === "სანახაობები" ||
                                      (item.natureName ===
                                        "ბუნება და თავგადასავლები" &&
                                        imgIndex === 1)) && (
                                      <div className="absolute top-1 right-2">
                                        <Heart
                                          className="text-red-500"
                                          size={20}
                                        />
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          {colIndex === 3 && column.image && (
                            <div className="relative h-60">
                              <Image
                                src={column.image}
                                alt={column.title}
                                fill
                                className="object-cover rounded-lg"
                              />
                              <p
                                className="absolute bottom-4 left-4 font-semibold"
                                style={{ color: "white" }}
                              >
                                {column.title.includes("აღმოაჩინე")
                                  ? "დაგეგმე მოგზაურობა"
                                  : ""}
                              </p>
                            </div>
                          )}
                          {column.items.map((item, textIndex) => (
                            <Link
                              key={textIndex}
                              href={item.href}
                              className="text-sm font-semibold block hover:text-red-500 py-2 w-[230px]"
                            >
                              {item.text}
                            </Link>
                          ))}
                        </div>
                      ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
              <AccordionItem value="search">
                <AccordionTrigger className="text-left py-6 rounded flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Search
                      className={
                        isHovered || isScrolled || isMenuOpen
                          ? "text-gray-800"
                          : "text-white"
                      }
                      size={20}
                    />
                    <span
                      className={
                        isHovered || isScrolled || isMenuOpen
                          ? "text-gray-800"
                          : "text-white"
                      }
                    >
                      ძიება
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-2 pt-2">
                  <Input
                    type="text"
                    placeholder="ძიება..."
                    className="w-full text-sm sm:text-base"
                    autoFocus
                    onFocus={() => setIsSearchOpen(true)}
                  />
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </motion.div>
        )}
      </div>
      {(hoveredItem === "რატომ საქართველო" ||
        hoveredItem === "ადგილები" ||
        hoveredItem === "სანახაობები" ||
        hoveredItem === "ბუნება და თავგადასავლები" ||
        hoveredItem === "სასარგებლო ინფორმაცია" ||
        isPanelHovered) && (
        <motion.div
          className="absolute w-screen bg-white p-6 shadow"
          style={{ top: "100%", left: 0 }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          onMouseEnter={() => {
            if (leaveTimeout) {
              clearTimeout(leaveTimeout);
            }
            setIsPanelHovered(true);
          }}
          onMouseLeave={() => {
            setIsPanelHovered(false);
            setHoveredItem(null);
            setUnderlineStyle({ width: 0, left: 0 });
          }}
        >
          <div className="grid grid-cols-4 gap-4 container mx-auto w-full px-10">
            {getColumnTexts(
              navItems.find(
                (item) =>
                  item.name === hoveredItem || item.natureName === hoveredItem
              )?.details
            ).map((column, colIndex) => (
              <div key={colIndex} className="text-gray-500">
                <h3 className="text-md font-bold text-black mb-3">
                  {column.title}
                </h3>
                {colIndex === 2 &&
                  column.images &&
                  column.images.length === 2 &&
                  (hoveredItem === "სანახაობები" ||
                    hoveredItem === "ბუნება და თავგადასავლები" ||
                    hoveredItem === "სასარგებლო ინფორმაცია") && (
                    <div className="flex gap-4 w-[570px] select-none cursor-pointer">
                      {column.images.map((image, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="relative flex-1 h-60 overflow-hidden rounded-lg"
                        >
                          <MotionImage
                            src={image}
                            alt={`${column.title} ${imgIndex + 1}`}
                            fill
                            className="object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                          />
                          <p className="absolute bottom-5 left-3 font-bold w-[220px] text-white text-md bg-opacity-50 px-2 py-1 rounded">
                            {hoveredItem === "სანახაობები"
                              ? imgIndex === 0
                                ? "სვეტიცხოველი მსოპლიო ხელოვნების საგანძური"
                                : "ალავერდი"
                              : hoveredItem === "ბუნება და თავგადასავლები"
                              ? imgIndex === 0
                                ? "აღმოაჩინე თავგადასავალი 1"
                                : "აღმოაჩინე თავგადასავალი 2"
                              : imgIndex === 0
                              ? "აღმოაჩინე ინფორმაცია 1"
                              : "აღმოაჩინე ინფორმაცია 2"}
                          </p>
                          {(hoveredItem === "სანახაობები" ||
                            (hoveredItem === "ბუნება და თავგადასავლები" &&
                              imgIndex === 1)) && (
                            <div className="absolute top-1 right-2">
                              <Heart className="text-red-500" size={20} />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                {colIndex === 3 && column.image && (
                  <div className="relative h-60">
                    <Image
                      src={column.image}
                      alt={column.title}
                      fill
                      className="object-cover rounded-lg"
                    />
                    <p
                      className="absolute bottom-4 left-4 font-semibold"
                      style={{ color: "white" }}
                    >
                      {column.title.includes("აღმოაჩინე")
                        ? "დაგეგმე მოგზაურობა"
                        : ""}
                    </p>
                  </div>
                )}
                {column.items.map((item, textIndex) => (
                  <Link
                    key={textIndex}
                    href={item.href}
                    className="text-sm font-semibold block hover:text-red-500 py-2 w-[230px]"
                  >
                    {item.text}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      )}
      {hoveredItem && (
        <motion.div
          className="absolute bottom-0 h-0.5 bg-red-500"
          style={{
            width: underlineStyle.width,
            left: underlineStyle.left,
          }}
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          exit={{ opacity: 0, scaleX: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.header>
  );
}

export default Header;
