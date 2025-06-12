"use client";

import { Heart, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const navRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [underlineStyle, setUnderlineStyle] = useState<{
    width: number;
    left: number;
  }>({ width: 0, left: 0 });
  const headerRef = useRef<HTMLDivElement | null>(null);

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

  const navItems = [
    { name: "რატომ საქართველო", href: "/why-georgia" },
    { name: "ადგილები", href: "/places" },
    { name: "სანახაობები", href: "/sights" },
    { name: "ბუნება და თავგადასავლები", href: "/nature-adventures" },
    { name: "სასარგებლო ინფორმაცია", href: "/info" },
  ];

  const handleMouseEnter = (name: string, index: number) => {
    setHoveredItem(name);
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
    setHoveredItem(null);
    setUnderlineStyle({ width: 0, left: 0 });
  };

  return (
    <motion.header
      ref={headerRef}
      className="fixed top-0 w-full z-50 transition-all duration-300 shadow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        handleMouseLeave();
      }}
      animate={{
        backgroundColor: isHovered || isScrolled ? "#ffffff" : "transparent",
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
                height={72}
                priority
                className="object-contain w-16 sm:w-20 lg:w-24 mr-10"
              />
            </Link>

            {/* ნავიგაციის მენიუ (დესკტოპ) */}
            <nav className="hidden lg:flex">
              <ul className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm font-medium">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    whileHover={{ color: "#3b82f6" }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => handleMouseEnter(item.name, index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={item.href}
                      className={`${
                        isHovered || isScrolled ? "text-gray-800" : "text-white"
                      } transition-colors text-md px-3`}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="hidden lg:flex items-center gap-3 sm:gap-3 lg:gap-10">
            <motion.button
              onClick={toggleSearch}
              aria-label="Search"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Search
                className={
                  isHovered || isScrolled ? "text-gray-800" : "text-white"
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
                  isHovered || isScrolled ? "text-gray-800" : "text-white"
                }
                size={20}
              />
            </motion.button>
          </div>

          {/* მობილური მენიუს ღილაკი */}
          <motion.button
            className="lg:hidden text-xl sm:text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <span
              className={
                isHovered || isScrolled ? "text-gray-800" : "text-white"
              }
            >
              {isMenuOpen ? "✕" : "☰"}
            </span>
          </motion.button>
        </div>

        {/* ძიების ინპუტი (დესკტოპი და მობილური) */}
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mt-3 sm:mt-4"
          >
            <Input
              type="text"
              placeholder="ძიება..."
              className="w-full text-sm sm:text-base"
              autoFocus
            />
          </motion.div>
        )}

        {/* მობილური მენიუ */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden mt-4"
          >
            <ul className="flex flex-col gap-3 text-sm sm:text-base font-medium">
              {navItems.map((item) => (
                <motion.li
                  key={item.href}
                  whileHover={{ scale: 1.05, color: "#3b82f6" }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={item.href}
                    className={`${
                      isHovered || isScrolled ? "text-gray-800" : "text-white"
                    } block py-2`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
              <motion.li
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  className="flex items-center gap-2 py-2"
                  onClick={toggleSearch}
                >
                  <Search
                    className={
                      isHovered || isScrolled ? "text-gray-800" : "text-white"
                    }
                    size={20}
                  />
                  <span
                    className={
                      isHovered || isScrolled ? "text-gray-800" : "text-white"
                    }
                  >
                    ძიება
                  </span>
                </button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </div>
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
