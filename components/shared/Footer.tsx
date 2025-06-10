"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface FooterItem {
  text: string;
  href: string;
}

interface FooterColumn {
  title: string;
  titleHref: string;
  items: FooterItem[];
}

function Footer() {
  // სოციალური ქსელების მასივი
  const socialLinks: FooterItem[] = [
    { text: "Facebook", href: "https://www.facebook.com/GeorgiaTravel" },
    { text: "Instagram", href: "https://www.instagram.com/GeorgiaTravel" },
    { text: "X.com", href: "https://www.x.com/GeorgiaTravel" },
    { text: "YouTube", href: "https://www.youtube.com/GeorgiaTravel" },
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/company/GeorgiaTravel",
    },
  ];

  // ფუტერის სვეტები
  const footerColumns: FooterColumn[] = [
    {
      title: "სანახაობები",
      titleHref: "/about",
      items: [
        { text: "ხელოვნება", href: "/category/art-culture" },
        { text: "სამზარეულო და ღვინო", href: "/category/cuisine-wine" },
        { text: "კულტურული ძეგლები", href: "/category/monuments" },
        { text: "საოჯახო სანახაობები", href: "/category/family" },
        { text: "მიმდინარე ღონისძიებები", href: "/category/events" },
        { text: "გამაჯანსაღებელი პროცედურები", href: "/category/wellness" },
        { text: "დასვენება ქალაქში", href: "/category/city-relaxation" },
        { text: "ბუნების ძეგლები", href: "/category/nature" },
        { text: "ზამთრის თავგადასავლები", href: "/category/winter-adventures" },
        {
          text: "საზაფხულო თავგადასავლები",
          href: "/category/summer-adventures",
        },
      ],
    },
    {
      title: "სასარგებლო ინფორმაცია",
      titleHref: "/tours",
      items: [
        { text: "საქართველოში ჩამოსვლა", href: "/info/arrival" },
        { text: "რეგიონები", href: "/info/regions" },
        { text: "საქართველოს რუკა", href: "/info/map" },
        { text: "პრესა და მედია", href: "/info/media" },
        { text: "ბლოგი", href: "/blog" },
        { text: "პოპულარული ტურები", href: "/tours/popular" },
        { text: "ხშირად დასმული კითხვები", href: "/info/faq" },
      ],
    },
    {
      title: "საკონტაქტო ინფორმაცია",
      titleHref: "/services",
      items: [
        { text: "ცხელი ხაზი: 0 800 80 09 09", href: "tel:0800800909" },
        {
          text: "მისამართი: სანაპიროს ქ.4, თბილისი 0105, საქართველო",
          href: "/contact/address",
        },
        {
          text: "ელ.ფოსტა: feedback@georgia.travel",
          href: "mailto:feedback@georgia.travel",
        },
        { text: "სასტუმროს ჯავშანი", href: "/services/hotels" },
        { text: "დაზღვევა", href: "/services/insurance" },
      ],
    },
    {
      title: "დაგვიკავშირდით",
      titleHref: "/contact-us",
      items: [
        { text: "ტელეფონი: +995 555 123 456", href: "tel:+995555123456" },
        { text: "ელ.ფოსტა: info@travel.ge", href: "mailto:info@travel.ge" },
        {
          text: "მისამართი: თბილისი, რუსთაველის გამზ.",
          href: "/contact/address",
        },
        { text: "სამუშაო საათები: 9:00-18:00", href: "/contact/hours" },
        { text: "სოციალური ქსელები", href: "/social" },
      ],
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-5 border-t-1 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <Image
            src="/logo/logo.svg"
            alt="Georgia Travel Logo"
            width={100}
            height={50}
            className="object-contain"
          />
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-4">
          {footerColumns.map((column, index) => (
            <div key={index} className="w-full lg:w-1/4">
              <div className="lg:hidden border-b border-gray-300 pb-2 mb-2">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="flex justify-between items-center w-full text-lg font-semibold text-gray-800 hover:text-red-600 mb-3"
                >
                  <Link href={column.titleHref}>{column.title}</Link>
                  <svg
                    className={`w-4 h-4 transform transition-transform text-gray-500 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
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
                            {item.text}
                          </a>
                        ) : (
                          <Link
                            href={item.href}
                            className="text-sm text-gray-600 hover:text-red-600"
                          >
                            {item.text}
                          </Link>
                        )}
                      </li>
                    ))}
                    {/* სოციალური ქსელები საკონტაქტო ინფორმაციისთვის */}
                    {column.title === "საკონტაქტო ინფორმაცია" && (
                      <li className="mt-4">
                        <h6 className="text-base font-semibold mb-2">
                          <Link
                            href="/social"
                            className="text-gray-800 hover:text-red-600"
                          >
                            სოციალური ქსელები
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
                                {social.text}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              <div className="hidden lg:block">
                <h6 className="text-lg font-semibold mb-3">
                  <Link
                    href={column.titleHref}
                    className="text-gray-800 hover:text-gray-800"
                  >
                    {column.title}
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
                          {item.text}
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          className="text-sm text-gray-600 hover:text-red-600"
                        >
                          {item.text}
                        </Link>
                      )}
                    </li>
                  ))}
                  {/* სოციალური ქსელები საკონტაქტო ინფორმაციისთვის */}
                  {column.title === "საკონტაქტო ინფორმაცია" && (
                    <li className="mt-4">
                      <h6 className="text-base font-semibold mb-2">
                        <Link
                          href="/social"
                          className="text-gray-800 hover:text-red-600"
                        >
                          სოციალური ქსელები
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
                              {social.text}
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
      <div className="flex flex-col md:flex-row justify-between container mx-auto items-start md:items-center gap-4 text-sm text-gray-600">
        <div className="flex flex-col md:flex-row gap-10">
          <span>
            <Link href={""} className="hover:text-red-600">
              კონფიდენციალურობის პოლიტიკა
            </Link>
          </span>
          <span>
            <Link href={""}>Cookie პოლიტიკა</Link>
          </span>
          <span>
            <Link href={""}>წესები და პირობები</Link>
          </span>
          <span>
            <Link href={""}>Text to Speech</Link>
          </span>
        </div>
        <span className="text-right">
          © Georgian National Tourism Administration
        </span>
      </div>
    </div>
  );
}

export default Footer;
