"use client";

import { BabyIcon, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSearchOpen(false); // დახურვა ძიების ინპუტის მობილური მენიუს გახსნისას
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsMenuOpen(false); // დახურვა მობილური მენიუს ძიების გახსნისას
  };

  const navItems = [
    { name: "რატომ საქართველო", href: "/why-georgia" },
    { name: "ადგილები", href: "/places" },
    { name: "სანახაობები", href: "/sights" },
    { name: "ბუნება და თავგადასავლები", href: "/nature-adventures" },
    { name: "სასარგებლო ინფორმაცია", href: "/info" },
  ];

  const langItems = [
    { name: "ქართული", code: "ka" },
    { name: "English", code: "en" },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 hover:bg-white ${
        isScrolled ? "bg-white shadow-md" : ""
      }`}
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
                className="object-contain w-16 sm:w-20 lg:w-24"
              />
            </Link>

            {/* ნავიგაციის მენიუ (დესკტოპი) */}
            <nav className="hidden lg:flex">
              <ul className="flex flex-wrap gap-3 sm:gap-4 text-sm sm:text-base font-medium">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`${
                        isScrolled ? "text-gray-800" : "text-white"
                      } hover:text-blue-500 transition-colors`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* მარჯვენა ელემენტები (დესკტოპი) */}
          <div className="hidden sm:flex items-center gap-2 sm:gap-3 lg:gap-4">
            <div className="relative">
              <button
                className={`${
                  isScrolled ? "text-gray-800" : "text-white"
                } hover:text-blue-500 transition-colors font-medium text-sm sm:text-base`}
                onMouseEnter={() => setIsLangMenuOpen(true)}
                onMouseLeave={() => setIsLangMenuOpen(false)}
              >
                en / ka
              </button>
              {isLangMenuOpen && (
                <ul
                  className={`absolute top-full mt-2 w-32 bg-white shadow-lg rounded-md py-2 text-gray-800 text-sm sm:text-base`}
                  onMouseEnter={() => setIsLangMenuOpen(true)}
                  onMouseLeave={() => setIsLangMenuOpen(false)}
                >
                  {langItems.map((lang) => (
                    <li key={lang.code}>
                      <Link
                        href={`/${lang.code}`}
                        className="block px-4 py-2 hover:bg-blue-100 transition-colors"
                      >
                        {lang.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button
              className="p-1 sm:p-2 rounded-full hover:bg-gray-200 transition-colors"
              onClick={toggleSearch}
              aria-label="Search"
            >
              <Search
                className={isScrolled ? "text-gray-800" : "text-white"}
                size={20}
              />
            </button>
            <button className="p-1 sm:p-2 rounded-full hover:bg-gray-200 transition-colors">
              <BabyIcon
                className={isScrolled ? "text-gray-800" : "text-white"}
                size={20}
              />
            </button>
          </div>

          {/* მობილური მენიუს ღილაკი */}
          <button
            className="sm:hidden text-xl sm:text-2xl"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* ძიების ინპუტი (დესკტოპი და მობილური) */}
        {isSearchOpen && (
          <div className="mt-3 sm:mt-4">
            <Input
              type="text"
              placeholder="ძიება..."
              className="w-full text-sm sm:text-base"
              autoFocus
            />
          </div>
        )}

        {/* მობილური მენიუ */}
        {isMenuOpen && (
          <div className="sm:hidden mt-4">
            <ul className="flex flex-col gap-3 text-sm sm:text-base font-medium">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`${
                      isScrolled ? "text-gray-800" : "text-white"
                    } hover:text-blue-500 transition-colors block py-2`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <div className="flex flex-col gap-2">
                  <button
                    className="flex items-center gap-2 py-2"
                    onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  >
                    <span
                      className={isScrolled ? "text-gray-800" : "text-white"}
                    >
                      ენა: en / ka
                    </span>
                  </button>
                  {isLangMenuOpen && (
                    <ul className="pl-4 flex flex-col gap-2">
                      {langItems.map((lang) => (
                        <li key={lang.code}>
                          <Link
                            href={`/${lang.code}`}
                            className="block py-1 hover:text-blue-500"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {lang.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
              <li>
                <button
                  className="flex items-center gap-2 py-2"
                  onClick={toggleSearch}
                >
                  <Search
                    className={isScrolled ? "text-gray-800" : "text-white"}
                    size={20}
                  />
                  <span className={isScrolled ? "text-gray-800" : "text-white"}>
                    ძიება
                  </span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
