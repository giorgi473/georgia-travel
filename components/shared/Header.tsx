"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
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
import { useCart } from "@/context/CartContext";
import { NavItemDetail, navItems } from "@/constants/data/data";
import GeorgianMap from "@/components/GeorgianMap";
import EarthCanvas from "../modules/EarthCanvas";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isPanelHovered, setIsPanelHovered] = useState(false);
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const [heartAnimations, setHeartAnimations] = useState<{
    [key: number]: boolean;
  }>({});

  // Cart hook გამოყენება
  const { tours } = useCart();

  const navRefs = useRef<(HTMLLIElement | null)[]>(Array(5).fill(null));
  const [underlineStyle, setUnderlineStyle] = useState<{
    width: number;
    left: number;
  }>({ width: 0, left: 0 });
  const headerRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
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
        setActiveRegion(null);
      }
    }, 200);
  };

  const getColumnTexts = (
    details: NavItemDetail[] | undefined
  ): NavItemDetail[] => {
    if (!details) return [];
    return details;
  };

  const handleLinkClick = (href: string) => {
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsHovered(false);
      setHoveredItem(null);
      setIsPanelHovered(false);
      setUnderlineStyle({ width: 0, left: 0 });
      setActiveRegion(null);
      router.push(href);
    }, 200);
  };

  const handleHeartClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent link click when heart is clicked
    setHeartAnimations((prev) => ({ ...prev, [index]: true }));
    setTimeout(() => {
      setHeartAnimations((prev) => ({ ...prev, [index]: false }));
    }, 1000); // Reset scattering animation after duration
  };

  const scatterHeartVariants = {
    initial: { opacity: 0, scale: 0, x: 0, y: 0 },
    animate: (i: number) => ({
      opacity: [0, 1, 0],
      scale: [0, Math.random() * 0.5 + 0.3, 0], // Random scale between 0.3 and 0.8
      x: Math.cos((i * Math.PI * 2) / 10) * (20 + Math.random() * 20), // Random radius
      y: Math.sin((i * Math.PI * 2) / 10) * (20 + Math.random() * 20), // Random radius
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: Math.random() * 0.2,
      },
    }),
  };

  const MotionImage = motion(Image);

  const menuVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
  };

  const panelVariants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    closed: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  return (
    <motion.header
      ref={headerRef}
      className="fixed top-0 w-full z-[1000] transition-all duration-300 shadow select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setHoveredItem(null);
        setIsPanelHovered(false);
        setUnderlineStyle({ width: 0, left: 0 });
        setActiveRegion(null);
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
            <Link
              href="/"
              className="flex-shrink-0"
              onClick={() => handleLinkClick("/")}
            >
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
                      onClick={() => handleLinkClick(item.href)}
                    >
                      {item.name || item.natureName}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="hidden xl:flex items-center gap-3 sm:gap-3 lg:gap-5">
            <motion.button
              onClick={toggleSearch}
              aria-label="Search"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              className="cursor-pointer"
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
              className="cursor-pointer relative"
              onClick={() => router.push(`/itinerary`)}
            >
              <Heart
                className={`${
                  isHovered || isScrolled || isMenuOpen
                    ? "text-gray-800"
                    : "text-white"
                } ${tours.length > 0 ? "fill-white" : ""}`}
                size={20}
              />
              {/* Cart რაოდენობის Badge */}
              {tours.length > 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2.5 -right-2.5 bg-red-500 font-bold text-md w-fit px-2 scale-50 rounded-md text-white"
                >
                  {tours.length}
                </motion.div>
              )}
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
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="xl:hidden mt-4"
          >
            <Accordion type="single" collapsible className="w-full">
              {navItems.map((item, index) => (
                <AccordionItem
                  key={item.name || item.natureName || index.toString()}
                  value={item.name || item.natureName || index.toString()}
                >
                  <AccordionTrigger className="text-left py-5 text-sm font-bold rounded flex justify-between items-center">
                    <Link
                      href={item.href}
                      onClick={() => handleLinkClick(item.href)}
                    >
                      {item.name || item.natureName}
                    </Link>
                  </AccordionTrigger>
                  <AccordionContent className="pl-1 max-h-[300px] overflow-y-auto">
                    {(item.name === "რატომ საქართველო" ||
                      item.name === "ადგილები" ||
                      item.name === "სანახაობები" ||
                      item.natureName === "ბუნება და თავგადასავლები" ||
                      item.name === "სასარგებლო ინფორმაცია") &&
                      item.details.map((column, colIndex) => (
                        <div key={colIndex} className="text-gray-500 mb-4">
                          <h3 className="text-md font-bold text-black mb-5">
                            {column.title}
                          </h3>
                          {colIndex === 2 &&
                            column.items &&
                            column.items.length === 2 &&
                            (item.name === "სანახაობები" ||
                              item.natureName === "ბუნება და თავგადასავლები" ||
                              item.name === "სასარგებლო ინფორმაცია") && (
                              <div className="flex flex-col sm:flex-row sm:pr-5 gap-4 w-full">
                                {column.items.map((image, imgIndex) => (
                                  <div
                                    key={imgIndex}
                                    className="relative w-[96%] sm:flex-1 flex-col h-72 overflow-hidden rounded-lg"
                                  >
                                    <Link
                                      href={image.href}
                                      onClick={() =>
                                        handleLinkClick(image.href)
                                      }
                                    >
                                      <MotionImage
                                        src={image.image}
                                        alt={`${column.title} ${imgIndex + 1}`}
                                        fill
                                        className="object-cover"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                      />
                                    </Link>
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
                                      <div className="absolute top-5 right-5">
                                        <motion.button
                                          onClick={(e) =>
                                            handleHeartClick(imgIndex, e)
                                          }
                                          className="relative"
                                        >
                                          <Heart
                                            className="text-white hover:text-red-500 hover:fill-red-500 transition-all duration-200 ease-in-out"
                                            size={20}
                                          />
                                          {heartAnimations[imgIndex] &&
                                            Array.from({ length: 10 }).map(
                                              (_, i) => (
                                                <motion.div
                                                  key={i}
                                                  className="absolute top-0 right-0"
                                                  variants={
                                                    scatterHeartVariants
                                                  }
                                                  initial="initial"
                                                  animate="animate"
                                                  custom={i}
                                                >
                                                  <Heart
                                                    className="text-white fill-white"
                                                    size={12}
                                                  />
                                                </motion.div>
                                              )
                                            )}
                                        </motion.button>
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          {colIndex === 3 && column.image && (
                            <div
                              className="flex items-center justify-center mt-4 -ml-5"
                              onClick={() =>
                                handleLinkClick(column.items[0].href)
                              }
                            >
                              <EarthCanvas />
                            </div>
                          )}
                          {column.items.map((item, textIndex) => (
                            <div key={textIndex}>
                              {item.renderComponent ? (
                                <div className="mb-2 w-full">
                                  {item.renderComponent()}
                                </div>
                              ) : (
                                <Link
                                  href={item.href}
                                  className="text-md text-black block hover:text-red-500 mb-4 w-[230px]"
                                  onClick={() => handleLinkClick(item.href)}
                                  onMouseEnter={() => {
                                    if (column.title === "ტოპ რეგიონები") {
                                      setActiveRegion(item.text);
                                    }
                                  }}
                                  onMouseLeave={() => {
                                    if (column.title === "ტოპ რეგიონები") {
                                      setActiveRegion(null);
                                    }
                                  }}
                                >
                                  {item.text}
                                </Link>
                              )}
                            </div>
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
              {/* Mobile Cart Button */}
              <AccordionItem value="cart">
                <AccordionTrigger className="text-left py-6 rounded flex justify-between items-center">
                  <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => router.push("/itinerary")}
                  >
                    <Heart
                      className={`${
                        isHovered || isScrolled || isMenuOpen
                          ? "text-gray-800"
                          : "text-white"
                      } ${tours.length > 0 ? "fill-current text-red-500" : ""}`}
                      size={20}
                    />
                    <span
                      className={
                        isHovered || isScrolled || isMenuOpen
                          ? "text-gray-800"
                          : "text-white"
                      }
                    >
                      მარშრუტები {tours.length > 0 ? `(${tours.length})` : ""}
                    </span>
                  </div>
                </AccordionTrigger>
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
          variants={panelVariants}
          initial="closed"
          animate="open"
          exit="closed"
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
            setActiveRegion(null);
          }}
        >
          <div
            className={`${
              hoveredItem === "ადგილები"
                ? "grid grid-cols-[1fr_1fr_2fr] gap-2"
                : "grid grid-cols-4 gap-4"
            } container mx-auto w-full px-8`}
          >
            {getColumnTexts(
              navItems.find(
                (item) =>
                  item.name === hoveredItem || item.natureName === hoveredItem
              )?.details
            ).map((column, colIndex) => (
              <div
                key={colIndex}
                className={`text-gray-500 ${
                  hoveredItem === "ადგილები" && colIndex === 2
                    ? "col-span-1"
                    : ""
                }`}
              >
                <h3 className="text-md font-bold text-black mb-3">
                  {column.title}
                </h3>
                {colIndex === 2 &&
                  column.items &&
                  column.items.length === 2 &&
                  (hoveredItem === "სანახაობები" ||
                    hoveredItem === "ბუნება და თავგადასავლები" ||
                    hoveredItem === "სასარგებლო ინფორმაცია") && (
                    <div className="flex gap-4 w-[590px] select-none cursor-pointer mt-6">
                      {column.items.map((image, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="relative flex-1 h-70 overflow-hidden rounded-lg"
                        >
                          <Link
                            href={image.href}
                            onClick={() => handleLinkClick(image.href)}
                          >
                            <MotionImage
                              src={image.image}
                              alt={`${column.title} ${imgIndex + 1}`}
                              fill
                              className="object-cover"
                              whileHover={{ scale: 1.1 }}
                              transition={{ duration: 0.3 }}
                            />
                          </Link>
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
                            <div className="absolute top-5 right-5">
                              <motion.button
                                onClick={(e) => handleHeartClick(imgIndex, e)}
                                className="relative"
                              >
                                <Heart
                                  className="text-white hover:text-red-500 hover:fill-red-500 transition-all duration-200 ease-in-out"
                                  size={20}
                                />
                                {heartAnimations[imgIndex] &&
                                  Array.from({ length: 10 }).map((_, i) => (
                                    <motion.div
                                      key={i}
                                      className="absolute top-0 right-0"
                                      variants={scatterHeartVariants}
                                      initial="initial"
                                      animate="animate"
                                      custom={i}
                                    >
                                      <Heart
                                        className="text-white fill-white"
                                        size={12}
                                      />
                                    </motion.div>
                                  ))}
                              </motion.button>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                {colIndex === 3 && column.image && (
                  <div
                    className="-ml-11 cursor-pointer"
                    onClick={() => handleLinkClick(column.items[0].href)}
                  >
                    <EarthCanvas />
                  </div>
                )}
                {column.items.map((item, textIndex) => (
                  <div key={textIndex}>
                    {item.renderComponent ? (
                      <div className="mb-2">
                        {hoveredItem === "ადგილები" && (
                          <div className="col-span-1">
                            <GeorgianMap activeRegion={activeRegion} />
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-sm block hover:text-red-500 py-3 w-[230px]"
                        onClick={() => handleLinkClick(item.href)}
                        onMouseEnter={() => {
                          if (column.title === "ტოპ რეგიონები") {
                            setActiveRegion(item.text);
                          }
                        }}
                        onMouseLeave={() => {
                          if (column.title === "ტოპ რეგიონები") {
                            setActiveRegion(null);
                          }
                        }}
                      >
                        {item.text}
                      </Link>
                    )}
                  </div>
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
