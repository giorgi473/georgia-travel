"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { footerColumns, socialLinks } from "@/constants/get/getData";

function Footer() {
  const { currentLanguage } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-5 border-t-1 mt-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-5 lg:px-6">
        <div className="flex justify-between items-center mb-4">
          <div className="mb-6">
            <Image
              src="/logo/logo.svg"
              alt={
                currentLanguage === "ka"
                  ? "საქართველოს ტურიზმის ლოგო"
                  : "Georgia Travel Logo"
              }
              width={100}
              height={50}
              className="object-contain w-[63px] sm:w-[80px] md:ml-2 md:w-[80px] lg:ml-3 lg:w-[95px] xl:ml-3"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-4">
          {footerColumns.map((column, index) => (
            <div key={index} className="w-full lg:w-1/4">
              <div className="lg:hidden border-b border-gray-300 pb-2 mb-2">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex justify-between items-center w-full text-sm font-bold text-gray-800 hover:text-red-600 mb-3"
                >
                  <Link href={column.titleHref}>
                    {column.title[currentLanguage]}
                  </Link>
                  <svg
                    className="w-4 h-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{
                      transform:
                        openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="overflow-hidden">
                    <ul className="space-y-2 pl-4">
                      {column.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          {item.href.startsWith("http") ||
                          item.href.startsWith("tel") ||
                          item.href.startsWith("mailto") ? (
                            <a
                              href={item.href}
                              className="text-sm text-gray-600 hover:text-red-600"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {item.text[currentLanguage]}
                            </a>
                          ) : (
                            <Link
                              href={item.href}
                              className="text-sm text-gray-600 hover:text-red-600"
                            >
                              {item.text[currentLanguage]}
                            </Link>
                          )}
                        </li>
                      ))}
                      {column.title[currentLanguage] ===
                        (currentLanguage === "ka"
                          ? "საკონტაქტო ინფორმაცია"
                          : "Contact Information") && (
                        <li className="mt-4">
                          <h6 className="text-base font-semibold mb-2">
                            <Link
                              href="/social"
                              className="text-gray-800 hover:text-red-600"
                            >
                              {currentLanguage === "ka"
                                ? "სოციალური ქსელები"
                                : "Social Media"}
                            </Link>
                          </h6>
                          <ul className="space-y-1">
                            {socialLinks.map((social, socialIndex) => (
                              <li key={socialIndex}>
                                <a
                                  href={social.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-sm text-gray-600 hover:text-red-600"
                                >
                                  {social.text[currentLanguage]}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      )}
                    </ul>
                  </div>
                )}
              </div>
              <div className="hidden lg:block">
                <h6 className="text-lg font-semibold mb-3">
                  <Link
                    href={column.titleHref}
                    className="text-gray-800 hover:text-gray-800"
                  >
                    {column.title[currentLanguage]}
                  </Link>
                </h6>
                <ul className="space-y-2">
                  {column.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {item.href.startsWith("http") ||
                      item.href.startsWith("tel") ||
                      item.href.startsWith("mailto") ? (
                        <a
                          href={item.href}
                          className="text-sm text-gray-600 hover:text-red-600"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.text[currentLanguage]}
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          className="text-sm text-gray-600 hover:text-red-600"
                        >
                          {item.text[currentLanguage]}
                        </Link>
                      )}
                    </li>
                  ))}
                  {column.title[currentLanguage] ===
                    (currentLanguage === "ka"
                      ? "საკონტაქტო ინფორმაცია"
                      : "Contact Information") && (
                    <li className="mt-4">
                      <h6 className="text-base font-semibold mb-2">
                        <Link
                          href="/social"
                          className="text-gray-800 hover:text-red-600"
                        >
                          {currentLanguage === "ka"
                            ? "სოციალური ქსელები"
                            : "Social Media"}
                        </Link>
                      </h6>
                      <ul className="space-y-1">
                        {socialLinks.map((social, socialIndex) => (
                          <li key={socialIndex}>
                            <a
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-gray-600 hover:text-red-600"
                            >
                              {social.text[currentLanguage]}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <hr className="border-gray-300 my-6" />
      <div className="flex flex-col md:flex-row justify-between py-5 px-4 container mx-auto items-start md:items-center gap-4 text-sm text-gray-600">
        <div className="flex flex-col md:flex-row gap-10">
          {[
            { ka: "კონფიდენციალურობის პოლიტიკა", en: "Privacy Policy" },
            { ka: "Cookie პოლიტიკა", en: "Cookie Policy" },
            { ka: "წესები და პირობები", en: "Terms & Conditions" },
            { ka: "Text to Speech", en: "Text to Speech" },
          ].map((text, index) => (
            <Link
              key={index}
              href=""
              className="hover:text-red-600 font-semibold"
            >
              {text[currentLanguage]}
            </Link>
          ))}
        </div>
        <span className="text-right font-medium">
          {currentLanguage === "ka"
            ? "© საქართველოს ტურიზმის ეროვნული ადმინისტრაცია"
            : "© Georgian National Tourism Administration"}
        </span>
      </div>
    </div>
  );
}

export default Footer;
