"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Heart, Search, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
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
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const { currentLanguage, setCurrentLanguage } = useLanguage();
  const languageOptions = [
    {
      code: "ka",
      name: currentLanguage === "ka" ? "ქართული" : "Georgian",
      flag: "🇬🇪",
    },
    {
      code: "en",
      name: currentLanguage === "ka" ? "ინგლისური" : "English",
      flag: "🇺🇸",
    },
  ];

  const { tours, sights, addSight, removeSight, isSightInCart } = useCart();
  const navRefs = useRef<(HTMLLIElement | null)[]>(
    Array(navItems.length).fill(null)
  );
  const languageDropdownRef = useRef<HTMLDivElement | null>(null);
  const [underlineStyle, setUnderlineStyle] = useState<{
    width: number;
    left: number;
  }>({ width: 0, left: 0 });
  const headerRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  let leaveTimeout: NodeJS.Timeout | null = null;

  // ენის დამახსოვრება localStorage-ში
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage && (savedLanguage === "ka" || savedLanguage === "en")) {
      setCurrentLanguage(savedLanguage as "ka" | "en");
    }
  }, [setCurrentLanguage]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target as Node)
      ) {
        setIsLanguageDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSearchOpen(false);
    setIsLanguageDropdownOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsMenuOpen(false);
    setIsLanguageDropdownOpen(false);
  };

  const handleLanguageChange = (langCode: "ka" | "en") => {
    setCurrentLanguage(langCode);
    localStorage.setItem("language", langCode); // ენის შენახვა localStorage-ში
    setIsLanguageDropdownOpen(false);
    console.log(`Language changed to: ${langCode}`);
  };

  const handleMouseEnter = (id: string, index: number) => {
    if (leaveTimeout) {
      clearTimeout(leaveTimeout);
    }
    setHoveredItem(id);
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

  const handleLinkClick = (href: string, isLogo: boolean = false) => {
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsHovered(false);
      setHoveredItem(null);
      setIsPanelHovered(false);
      setUnderlineStyle({ width: 0, left: 0 });
      setActiveRegion(null);
      setIsLanguageDropdownOpen(false);
      router.push(isLogo ? "/" : href);
    }, 200);
  };

  interface SightData {
    id: string | number;
    title: string;
    titleEn?: string;
    description: string;
    descriptionEn?: string;
    image: string;
  }

  const handleHeartClick = (
    index: number,
    e: React.MouseEvent,
    itemData?: SightData
  ) => {
    e.stopPropagation();
    e.preventDefault();

    setHeartAnimations((prev) => ({ ...prev, [index]: true }));
    setTimeout(() => {
      setHeartAnimations((prev) => ({ ...prev, [index]: false }));
    }, 1000);

    if (itemData) {
      const sightId =
        typeof itemData.id === "string"
          ? parseInt(itemData.id.replace(/\D/g, "")) || Date.now() + index
          : Number(itemData.id) || Date.now() + index;
      const sight = {
        id: sightId,
        title:
          currentLanguage === "ka"
            ? itemData.title || `სანახაობა ${index + 1}`
            : itemData.titleEn || `Sight ${index + 1}`,
        description:
          currentLanguage === "ka"
            ? itemData.description || "საინტერესო სანახაობა საქართველოში"
            : itemData.descriptionEn || "Interesting Sight in Georgia",
        src: itemData.image || "/placeholder-image.jpg",
      };

      const isInCart = isSightInCart(sightId);

      if (isInCart) {
        removeSight(sightId);
      } else {
        addSight(sight);
      }
    } else {
      const sight = {
        id: Date.now() + index,
        title:
          currentLanguage === "ka"
            ? hoveredItem === "sights"
              ? index === 0
                ? "სვეტიცხოველი"
                : "ალავერდი"
              : `თავგადასავალი ${index + 1}`
            : hoveredItem === "sights"
            ? index === 0
              ? "Svetitskhoveli"
              : "Alaverdi"
            : `Adventure ${index + 1}`,
        description:
          currentLanguage === "ka"
            ? hoveredItem === "sights"
              ? index === 0
                ? "სვეტიცხოველი მსოპლიო ხელოვნების საგანძური"
                : "ალავერდის ისტორიული ძეგლი"
              : `საინტერესო თავგადასავალი ${index + 1}`
            : hoveredItem === "sights"
            ? index === 0
              ? "Svetitskhoveli World Art Treasure"
              : "Alaverdi Historical Monument"
            : `Interesting Adventure ${index + 1}`,
        src: "/placeholder-image.jpg",
      };

      addSight(sight);
    }
  };

  const scatterHeartVariants = {
    initial: { opacity: 0, scale: 0, x: 0, y: 0 },
    animate: (i: number) => ({
      opacity: [0, 1, 0],
      scale: [0, Math.random() * 0.5 + 0.3, 0],
      x: Math.cos((i * Math.PI * 2) / 10) * (20 + Math.random() * 20),
      y: Math.sin((i * Math.PI * 2) / 10) * (20 + Math.random() * 20),
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

  const dropdownVariants = {
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" },
    },
    closed: {
      opacity: 0,
      y: -10,
      scale: 0.95,
      transition: { duration: 0.2, ease: "easeIn" },
    },
  };

  const totalCartItems = tours.length + sights.length;

  const getCurrentLanguageData = () => {
    return languageOptions.find((lang) => lang.code === currentLanguage);
  };

  // თარგმანი navItems-ისთვის
  const translatedNavItems = navItems.map((item) => ({
    ...item,
    name: currentLanguage === "ka" ? item.name : item.nameEn || item.name,
    natureName:
      currentLanguage === "ka"
        ? item.natureName
        : item.natureNameEn || item.natureName,
    details: item.details.map((detail) => ({
      ...detail,
      title:
        currentLanguage === "ka"
          ? detail.title
          : detail.titleEn || detail.title,
      items: detail.items.map((subItem) => ({
        ...subItem,
        text:
          currentLanguage === "ka"
            ? subItem.text
            : subItem.textEn || subItem.text,
      })),
    })),
  }));

  // თარგმანი UI ელემენტებისთვის
  const translations = {
    ka: {
      logoAlt: "ლოგო",
      search: "ძიება",
      searchPlaceholder: "ძიება...",
      itineraries: "მარშრუტები",
      toggleMenu: "მენიუს გახსნა",
      changeLanguage: "ენის შეცვლა",
      sights: {
        svetitskhoveli: {
          title: "სვეტიცხოველი",
          description: "სვეტიცხოველი მსოპლიო ხელოვნების საგანძური",
        },
        alaverdi: {
          title: "ალავერდი",
          description: "ალავერდის ისტორიული ძეგლი",
        },
        adventure: (index: number) => ({
          title: `თავგადასავალი ${index + 1}`,
          description: `საინტერესო თავგადასავალი ${index + 1}`,
        }),
      },
    },
    en: {
      logoAlt: "Logo",
      search: "Search",
      searchPlaceholder: "Search...",
      itineraries: "Itineraries",
      toggleMenu: "Toggle menu",
      changeLanguage: "Change Language",
      sights: {
        svetitskhoveli: {
          title: "Svetitskhoveli",
          description: "Svetitskhoveli World Art Treasure",
        },
        alaverdi: {
          title: "Alaverdi",
          description: "Alaverdi Historical Monument",
        },
        adventure: (index: number) => ({
          title: `Adventure ${index + 1}`,
          description: `Interesting Adventure ${index + 1}`,
        }),
      },
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
              onClick={() => handleLinkClick("/", true)}
            >
              <Image
                src="/logo/logo.svg"
                alt={translations[currentLanguage].logoAlt}
                width={80}
                height={50}
                priority
                className="object-contain w-16 sm:w-20 xl:w-24 mr-10"
              />
            </Link>
            <nav className="hidden xl:flex">
              <ul className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm font-medium">
                {translatedNavItems.map((item, index) => (
                  <motion.li
                    key={item.id}
                    ref={(el) => {
                      navRefs.current[index] = el;
                    }}
                    whileHover={{
                      color: "#3b82f6",
                      backgroundColor: "transparent",
                    }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => handleMouseEnter(item.id, index)}
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
            <div
              ref={languageDropdownRef}
              className="relative"
              onMouseEnter={() => setIsLanguageDropdownOpen(true)}
              onMouseLeave={() => setIsLanguageDropdownOpen(false)}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors cursor-pointer ${
                  isHovered || isScrolled || isMenuOpen
                    ? "text-gray-800 hover:bg-gray-100"
                    : "text-white hover:bg-white/10"
                }`}
                aria-label={translations[currentLanguage].changeLanguage}
              >
                <span className="text-sm font-medium">
                  {getCurrentLanguageData()?.flag}
                </span>
                <motion.div
                  animate={{ rotate: isLanguageDropdownOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={14} />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {isLanguageDropdownOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="absolute top-full right-0 mt-2 w-15 bg-white rounded-lg cursor-pointer shadow-lg border border-gray-200 py-1 z-50 hover:bg-gray-100"
                  >
                    {languageOptions
                      .filter((language) => language.code !== currentLanguage)
                      .map((language) => (
                        <motion.button
                          key={language.code}
                          onClick={() =>
                            handleLanguageChange(language.code as "ka" | "en")
                          }
                          className="w-full px-2 py-1 text-center flex items-center justify-center cursor-pointer transition-colors text-gray-700"
                        >
                          <span className="text-sm font-medium">
                            {language.flag}
                          </span>
                        </motion.button>
                      ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              onClick={toggleSearch}
              aria-label={translations[currentLanguage].search}
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
                } ${totalCartItems > 0 ? "" : ""}`}
                size={20}
              />
              {totalCartItems > 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2.5 -right-2.5 bg-red-500 font-bold text-md w-fit px-2 scale-50 rounded-md text-white"
                >
                  {totalCartItems}
                </motion.div>
              )}
            </motion.button>
          </div>
          <motion.button
            className="xl:hidden text-xl sm:text-2xl"
            onClick={toggleMenu}
            aria-label={translations[currentLanguage].toggleMenu}
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
              {translatedNavItems.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger className="text-left py-5 text-sm font-bold rounded flex justify-between items-center">
                    <Link
                      href={item.href}
                      onClick={() => handleLinkClick(item.href)}
                    >
                      {item.name || item.natureName}
                    </Link>
                  </AccordionTrigger>
                  <AccordionContent className="pl-1 max-h-[300px] overflow-y-auto">
                    {(item.id === "why-georgia" ||
                      item.id === "places" ||
                      item.id === "sights" ||
                      item.id === "nature-adventures" ||
                      item.id === "useful-information") &&
                      item.details.map((column, colIndex) => (
                        <div key={colIndex} className="text-gray-500 mb-4">
                          <h3 className="text-md font-bold text-black mb-5">
                            {column.title}
                          </h3>
                          {colIndex === 2 &&
                            column.items &&
                            column.items.length === 2 &&
                            (item.id === "sights" ||
                              item.id === "nature-adventures" ||
                              item.id === "useful-information") && (
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
                                      {item.id === "sights"
                                        ? imgIndex === 0
                                          ? translations[currentLanguage].sights
                                              .svetitskhoveli.description
                                          : translations[currentLanguage].sights
                                              .alaverdi.description
                                        : translations[
                                            currentLanguage
                                          ].sights.adventure(imgIndex)
                                            .description}
                                    </p>
                                    {(item.id === "sights" ||
                                      (item.id === "nature-adventures" &&
                                        imgIndex === 1)) && (
                                      <div className="absolute top-5 right-5">
                                        <motion.button
                                          onClick={(e) =>
                                            handleHeartClick(imgIndex, e, {
                                              id: `mobile-${imgIndex}`,
                                              title:
                                                item.id === "sights"
                                                  ? imgIndex === 0
                                                    ? translations[
                                                        currentLanguage
                                                      ].sights.svetitskhoveli
                                                        .title
                                                    : translations[
                                                        currentLanguage
                                                      ].sights.alaverdi.title
                                                  : translations[
                                                      currentLanguage
                                                    ].sights.adventure(imgIndex)
                                                      .title,
                                              titleEn:
                                                item.id === "sights"
                                                  ? imgIndex === 0
                                                    ? translations["en"].sights
                                                        .svetitskhoveli.title
                                                    : translations["en"].sights
                                                        .alaverdi.title
                                                  : translations[
                                                      "en"
                                                    ].sights.adventure(imgIndex)
                                                      .title,
                                              description:
                                                item.id === "sights"
                                                  ? imgIndex === 0
                                                    ? translations[
                                                        currentLanguage
                                                      ].sights.svetitskhoveli
                                                        .description
                                                    : translations[
                                                        currentLanguage
                                                      ].sights.alaverdi
                                                        .description
                                                  : translations[
                                                      currentLanguage
                                                    ].sights.adventure(imgIndex)
                                                      .description,
                                              descriptionEn:
                                                item.id === "sights"
                                                  ? imgIndex === 0
                                                    ? translations["en"].sights
                                                        .svetitskhoveli
                                                        .description
                                                    : translations["en"].sights
                                                        .alaverdi.description
                                                  : translations[
                                                      "en"
                                                    ].sights.adventure(imgIndex)
                                                      .description,
                                              image:
                                                image.image ||
                                                "/placeholder-image.jpg",
                                            })
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
                                    if (
                                      column.title ===
                                      (currentLanguage === "ka"
                                        ? "ტოპ რეგიონები"
                                        : "Top Regions")
                                    ) {
                                      setActiveRegion(item.text);
                                    }
                                  }}
                                  onMouseLeave={() => {
                                    if (
                                      column.title ===
                                      (currentLanguage === "ka"
                                        ? "ტოპ რეგიონები"
                                        : "Top Regions")
                                    ) {
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
              <AccordionItem value="language">
                <AccordionTrigger className="text-left py-6 rounded flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <span
                      className={
                        isHovered || isScrolled || isMenuOpen
                          ? "text-gray-800"
                          : "text-white"
                      }
                    >
                      {getCurrentLanguageData()?.flag}{" "}
                      {getCurrentLanguageData()?.name}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-2 pt-2">
                  <div className="space-y-1">
                    {languageOptions
                      .filter((language) => language.code !== currentLanguage)
                      .map((language) => (
                        <button
                          key={language.code}
                          onClick={() =>
                            handleLanguageChange(language.code as "ka" | "en")
                          }
                          className="w-full px-2 py-1 text-center flex items-center justify-center rounded-md transition-colors text-gray-700 hover:bg-gray-50"
                        >
                          <span className="text-sm font-medium">
                            {language.flag} {language.name}
                          </span>
                        </button>
                      ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
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
                      {translations[currentLanguage].search}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-2 pt-2">
                  <Input
                    type="text"
                    placeholder={
                      translations[currentLanguage].searchPlaceholder
                    }
                    className="w-full text-sm sm:text-base"
                    autoFocus
                    onFocus={() => setIsSearchOpen(true)}
                  />
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="cart">
                <AccordionTrigger className="text-left py-6 rounded flex justify-between items-center">
                  <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => {
                      router.push("/itinerary");
                      setIsMenuOpen(false);
                      setIsHovered(false);
                      setHoveredItem(null);
                      setIsPanelHovered(false);
                      setUnderlineStyle({ width: 0, left: 0 });
                      setActiveRegion(null);
                      setIsLanguageDropdownOpen(false);
                    }}
                  >
                    <Heart
                      className={`${
                        isHovered || isScrolled || isMenuOpen
                          ? "text-gray-800"
                          : "text-white"
                      } ${
                        totalCartItems > 0 ? "fill-current text-red-500" : ""
                      }`}
                      size={20}
                    />
                    <span
                      className={
                        isHovered || isScrolled || isMenuOpen
                          ? "text-gray-800"
                          : "text-white"
                      }
                    >
                      {translations[currentLanguage].itineraries}{" "}
                      {totalCartItems > 0 ? `(${totalCartItems})` : ""}
                    </span>
                  </div>
                </AccordionTrigger>
              </AccordionItem>
            </Accordion>
          </motion.div>
        )}
      </div>
      {(hoveredItem === "why-georgia" ||
        hoveredItem === "places" ||
        hoveredItem === "sights" ||
        hoveredItem === "nature-adventures" ||
        hoveredItem === "useful-information" ||
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
              hoveredItem === "places"
                ? "grid grid-cols-[1fr_1fr_2fr] gap-2"
                : "grid grid-cols-4 gap-4"
            } container mx-auto w-full px-8`}
          >
            {getColumnTexts(
              translatedNavItems.find((item) => item.id === hoveredItem)
                ?.details
            ).map((column, colIndex) => (
              <div
                key={colIndex}
                className={`text-gray-500 ${
                  hoveredItem === "places" && colIndex === 2 ? "col-span-1" : ""
                }`}
              >
                <h3 className="text-md font-bold text-black mb-3">
                  {column.title}
                </h3>
                {colIndex === 2 &&
                  column.items &&
                  column.items.length === 2 &&
                  (hoveredItem === "sights" ||
                    hoveredItem === "nature-adventures" ||
                    hoveredItem === "useful-information") && (
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
                            {hoveredItem === "sights"
                              ? imgIndex === 0
                                ? translations[currentLanguage].sights
                                    .svetitskhoveli.description
                                : translations[currentLanguage].sights.alaverdi
                                    .description
                              : translations[currentLanguage].sights.adventure(
                                  imgIndex
                                ).description}
                          </p>
                          {(hoveredItem === "sights" ||
                            (hoveredItem === "nature-adventures" &&
                              imgIndex === 1)) && (
                            <div className="absolute top-5 right-5">
                              <motion.button
                                onClick={(e) =>
                                  handleHeartClick(imgIndex, e, {
                                    id: `desktop-${imgIndex}`,
                                    title:
                                      hoveredItem === "sights"
                                        ? imgIndex === 0
                                          ? translations[currentLanguage].sights
                                              .svetitskhoveli.title
                                          : translations[currentLanguage].sights
                                              .alaverdi.title
                                        : translations[
                                            currentLanguage
                                          ].sights.adventure(imgIndex).title,
                                    titleEn:
                                      hoveredItem === "sights"
                                        ? imgIndex === 0
                                          ? translations["en"].sights
                                              .svetitskhoveli.title
                                          : translations["en"].sights.alaverdi
                                              .title
                                        : translations["en"].sights.adventure(
                                            imgIndex
                                          ).title,
                                    description:
                                      hoveredItem === "sights"
                                        ? imgIndex === 0
                                          ? translations[currentLanguage].sights
                                              .svetitskhoveli.description
                                          : translations[currentLanguage].sights
                                              .alaverdi.description
                                        : translations[
                                            currentLanguage
                                          ].sights.adventure(imgIndex)
                                            .description,
                                    descriptionEn:
                                      hoveredItem === "sights"
                                        ? imgIndex === 0
                                          ? translations["en"].sights
                                              .svetitskhoveli.description
                                          : translations["en"].sights.alaverdi
                                              .description
                                        : translations["en"].sights.adventure(
                                            imgIndex
                                          ).description,
                                    image:
                                      image.image || "/placeholder-image.jpg",
                                  })
                                }
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
                        {hoveredItem === "places" && (
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
                          if (
                            column.title ===
                            (currentLanguage === "ka"
                              ? "ტოპ რეგიონები"
                              : "Top Regions")
                          ) {
                            setActiveRegion(item.text);
                          }
                        }}
                        onMouseLeave={() => {
                          if (
                            column.title ===
                            (currentLanguage === "ka"
                              ? "ტოპ რეგიონები"
                              : "Top Regions")
                          ) {
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
