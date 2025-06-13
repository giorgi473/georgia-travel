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

interface NavItemDetail {
  title: string;
  image?: string;
  images?: string[];
  items: { text: string; href: string }[];
}

interface NavItem {
  name?: string;
  natureName?: string;
  href: string;
  details: NavItemDetail[];
}

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

  const navItems: NavItem[] = [
    {
      name: "რატომ საქართველო",
      href: "/why-georgia",
      details: [
        {
          title: "",
          items: [
            {
              text: "უნიკალური ქართული ფოლკლორი",
              href: "/why-georgia/history",
            },
            {
              text: "მსოფლიო მნიშვნელობის მემკვიდრეობა",
              href: "/why-georgia/culture",
            },
            {
              text: "უნიკალური ქართული ანბანი",
              href: "/why-georgia/tourist-spots",
            },
            {
              text: "შავი ზღვის სანაპიროები",
              href: "/why-georgia/family-travel",
            },
            { text: "საქართველოს ისტორია", href: "/why-georgia/food-wine" },
            {
              text: "ტურიზმის სტატისტიკა საქართველოში",
              href: "/why-georgia/nature",
            },
          ],
        },
        {
          title: "",
          items: [
            { text: "ქართული კულტურა", href: "/why-georgia/food-wine" },
            { text: "ქართული ლიტერატურა", href: "/why-georgia/nature" },
            { text: "ქართული ცეკვა", href: "/why-georgia/music" },
            {
              text: "უგემრიელესი ქართული სამზარეულო",
              href: "/why-georgia/dances",
            },
            { text: "საქართველოს ბუნება", href: "/why-georgia/nature" },
            {
              text: "საქართველოს მთავარი ქალაქები",
              href: "/why-georgia/music",
            },
          ],
        },
        {
          title: "",
          items: [
            {
              text: "საქართველო როგორც ღვინის აკვანი",
              href: "/why-georgia/economy",
            },
            {
              text: "პირველი ევროპული ცივილიზაცია",
              href: "/why-georgia/education",
            },
            {
              text: "თავგადასავლები საქართველოში",
              href: "/why-georgia/sports",
            },
            {
              text: "ევროპის ყველაზე მაღალი დასახლებული პუნქტი...",
              href: "/why-georgia/health",
            },
            { text: "სეზონურობა საქართველოში", href: "/why-georgia/sports" },
            { text: "საქართველოს გეოგრაფია", href: "/why-georgia/sports" },
          ],
        },
        {
          title: "აღმოაჩინე საქართველო",
          image: "/flags/ph.jpg",
          items: [],
        },
      ],
    },
    {
      name: "ადგილები",
      href: "/places",
      details: [
        {
          title: "ტოპ რეგიონები",
          items: [
            { text: "კახეთი", href: "/places/tbilisi" },
            { text: "იმერეთი", href: "/places/batumi" },
            { text: "აჭარა", href: "/places/kutaisi" },
            { text: "მცხეთა-მთიანეთი", href: "/places/signagi" },
            { text: "რაჭა-ლეჩხუმი და ქვემო სვანეთი", href: "/places/mestia" },
            { text: "შიდა ქართლი", href: "/places/gudauri" },
            { text: "სამეგრელო-ზემო სვანეთი", href: "/places/gudauri" },
          ],
        },
        {
          title: "ტოპ ქალაქები",
          items: [
            { text: "ქუთაისი", href: "/places/rustavi" },
            { text: "ბათუმი", href: "/places/zugdidi" },
            { text: "თბილისი", href: "/places/telavi" },
            { text: "სტეფაწმინდა", href: "/places/poti" },
            { text: "მესტია", href: "/places/akhaltsikhe" },
            { text: "მცხეთა", href: "/places/ambrolauri" },
            { text: "ბორჯომი", href: "/places/ambrolauri" },
          ],
        },
        {
          title: "რეგიონები",
          items: [],
        },
      ],
    },
    {
      name: "სანახაობები",
      href: "/sights",
      details: [
        {
          title: "ტოპ კატეგორიები",
          items: [
            { text: "ხელოვნება და კულტურა", href: "/sights/jvari" },
            { text: "კულტურული ძეგლები", href: "/sights/svetitskhoveli" },
            { text: "სამზარეულო და ღვინო", href: "/sights/ushguli" },
            { text: "გამაჯანსაღებელი პროცედურები", href: "/sights/gelati" },
            { text: "საოჯახო სანახაობები", href: "/sights/david-gareji" },
            { text: "დასვენება ქალაქში", href: "/sights/bridge-of-peace" },
          ],
        },
        {
          title: "ტოპ სანახაობები",
          items: [
            { text: "გერგეთის სამება", href: "/sights/bagrati" },
            { text: "ილია ჭავჭავაძის სახლ-მუზეუმი", href: "/sights/samtskhe" },
            { text: "ხერთვისის ციხე", href: "/sights/paravani" },
            {
              text: "საქართველოს ეროვნული მუზეუმი",
              href: "/sights/chkhorotsku",
            },
            { text: "დავითგარეჯი", href: "/sights/batumi-forest" },
            { text: "ბოლნისის სიონი", href: "/sights/alaverdi" },
          ],
        },
        {
          title: "თვის სანახაობები",
          images: ["/flags/ph.jpg", "/flags/ph.jpg"],
          items: [],
        },
      ],
    },
    {
      natureName: "ბუნება და თავგადასავლები",
      href: "/nature-adventures",
      details: [
        {
          title: "ტოპ კატეგორიები",
          items: [
            { text: "სვანეთის მთები", href: "/nature/svaneti" },
            { text: "ტრუსოს ხეობა", href: "/nature/truso" },
            { text: "მარტვილის კანიონი", href: "/nature/martvili-canyon" },
            { text: "ქინძღის ეროვნული პარკი", href: "/nature/kinchkha" },
            {
              text: "დედოფლისწყაროს ჩანჩქერი",
              href: "/nature/dedoflis-tsqaro",
            },
            { text: "ხადის ხეობა", href: "/nature/khadi" },
          ],
        },
        {
          title: "",
          items: [
            {
              text: "ბორჯომ-ხარაგაულის ეროვნული პარკი",
              href: "/nature/borjomi",
            },
            { text: "ლაგოდეხის დაცული ტერიტორია", href: "/nature/lagodekhi" },
            { text: "ოკაცეს კანიონი", href: "/nature/okace" },
            { text: "ჩხოროწყუს ეროვნული პარკი", href: "/nature/chkhorotsku" },
            { text: "აბასთუმნის ხეივანი", href: "/nature/abastumani" },
            { text: "სამწუხარო-ჯავახეთის მთები", href: "/nature/samtskhe" },
          ],
        },
        {
          title: "",
          items: [
            { text: "ტუშეთის ეროვნული პარკი", href: "/nature/tusheti" },
            { text: "რაჭის მთები", href: "/nature/racha" },
            { text: "გომარეთის ტყე", href: "/nature/gomareti" },
            { text: "ფშავ-ხევსურეთი", href: "/nature/pshavi" },
            { text: "ჩაქვის ტბა", href: "/nature/chakvi" },
            { text: "ლეჩხუმის ბორცვები", href: "/nature/lechkhumi" },
          ],
        },
        {
          title: "აღმოაჩინე ბუნება",
          image: "/images/nature.jpg",
          items: [],
        },
      ],
    },
    {
      name: "სასარგებლო ინფორმაცია",
      href: "/info",
      details: [
        {
          title: "",
          items: [
            { text: "ვიზის მოთხოვნები", href: "/info/visa" },
            { text: "ტრანსპორტი", href: "/info/transport" },
            { text: "სასტუმროები", href: "/info/hotels" },
            { text: "საბიუჯეტო მოგზაურობა", href: "/info/budget" },
            { text: "ჯანმრთელობა და უსაფრთხოება", href: "/info/health" },
            { text: "კონტაქტი", href: "/info/contact" },
          ],
        },
        {
          title: "",
          items: [
            { text: "სეზონური ამინდი", href: "/info/weather" },
            { text: "ტურისტული რუკა", href: "/info/map" },
            { text: "ღირსშესანიშნაობები", href: "/info/attractions" },
            { text: "ლოკალური კვება", href: "/info/food" },
            { text: "ღამის ცხოვრება", href: "/info/nightlife" },
            { text: "ფესტივალები", href: "/info/festivals" },
          ],
        },
        {
          title: "",
          items: [
            { text: "საფრენი დრო", href: "/info/flight" },
            { text: "საბანკო მომსახურება", href: "/info/banking" },
            { text: "ინტერნეტი და Wi-Fi", href: "/info/internet" },
            { text: "ტურისტული აგენტები", href: "/info/agencies" },
            { text: "გზამკვლევი", href: "/info/guide" },
            { text: "საგადასახადო ინფორმაცია", href: "/info/tax" },
          ],
        },
        {
          title: "აღმოაჩინე ინფორმაცია",
          image: "/images/info.jpg",
          items: [],
        },
      ],
    },
  ];

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
      className="fixed top-0 w-full z-50 transition-all duration-300 shadow"
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

            {/* ნავიგაციის მენიუ (დესკტოპ) */}
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
                          ? "#ffffff"
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

          {/* ბურგერ მენიუს ღილაკი */}
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

        {/* აკორდიონი ბურგერ მენიუში */}
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
                            item.name === "სანახაობები" && (
                              <div className="flex gap-4">
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
                                    <p className="absolute bottom-[5px] left-[5px] font-semibold text-white bg-opacity-50 px-2 py-1 rounded">
                                      {imgIndex === 0
                                        ? "აღმოაჩინე სანახაობა 1"
                                        : "აღმოაჩინე სანახაობა 2"}
                                    </p>
                                    <Heart className="text-red-500" size={20} />
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
                  navItems.find(
                    (item) =>
                      item.name === hoveredItem ||
                      item.natureName === hoveredItem
                  )?.name === "სანახაობები" && (
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
                            {imgIndex === 0
                              ? "სვეტიცხოველი მსოპლიო ხელოვნების საგანძური"
                              : "ალავერდი"}
                          </p>
                          <div className="mt-2 flex justify-center absolute top-1 right-2">
                            <Heart className="text-red-500" size={20} />
                          </div>
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
