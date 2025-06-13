"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";

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
  const logoRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const isLogoInView = useInView(logoRef, { once: true, margin: "-50px" });
  const isFooterInView = useInView(footerRef, { once: true, margin: "-50px" });
  const isBottomInView = useInView(bottomRef, { once: true, margin: "-50px" });

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        duration: 0.5,
      },
    },
  };

  const bottomItemVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      x: index % 2 === 0 ? -20 : 20, // Slide from left for even, right for odd
      filter: "blur(5px)",
    }),
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.5,
      },
    },
  };

  return (
    <div className="py-5 border-t-1 mt-20">
      <div className="container mx-auto px-4">
        <motion.div
          ref={logoRef}
          initial={{ opacity: 0, scale: 0.7, filter: "blur(5px)" }}
          animate={
            isLogoInView ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}
          }
          transition={{ type: "spring", stiffness: 150, damping: 15 }}
          className="mb-6"
        >
          <Image
            src="/logo/logo.svg"
            alt="Georgia Travel Logo"
            width={100}
            height={50}
            className="object-contain w-[63px] sm:w-[80px] md:ml-2 md:w-[80px] lg:ml-3 lg:w-[100px] xl:ml-3 xl:w-[100px]"
          />
        </motion.div>
        <motion.div
          ref={footerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isFooterInView ? "visible" : "hidden"}
          className="flex flex-col lg:flex-row lg:justify-between gap-4 lg:gap-4"
        >
          {footerColumns.map((column, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="w-full lg:w-1/4"
            >
              <div className="lg:hidden border-b border-gray-300 pb-2 mb-2">
                <motion.button
                  onClick={() => toggleAccordion(index)}
                  className="flex justify-between items-center w-full text-lg font-semibold text-gray-800 hover:text-red-600 mb-3"
                  whileHover={{
                    scale: 1.05,
                    textShadow: "0px 0px 8px rgba(255,0,0,0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  variants={itemVariants}
                >
                  <motion.div variants={itemVariants}>
                    <Link href={column.titleHref}>{column.title}</Link>
                  </motion.div>
                  <motion.svg
                    className="w-4 h-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 150, damping: 15 }}
                    variants={itemVariants}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </motion.svg>
                </motion.button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0, filter: "blur(5px)" }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        filter: "blur(0px)",
                      }}
                      exit={{ height: 0, opacity: 0, filter: "blur(5px)" }}
                      transition={{
                        type: "spring",
                        stiffness: 120,
                        damping: 15,
                      }}
                      className="overflow-hidden"
                    >
                      <motion.ul
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-2 pl-4"
                      >
                        {column.items.map((item, itemIndex) => (
                          <motion.li key={itemIndex} variants={itemVariants}>
                            {item.href.startsWith("http") ||
                            item.href.startsWith("tel") ||
                            item.href.startsWith("mailto") ? (
                              <motion.a
                                href={item.href}
                                className="text-sm text-gray-600 hover:text-red-600"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{
                                  x: 5,
                                  scale: 1.05,
                                  textShadow: "0px 0px 8px rgba(255,0,0,0.3)",
                                }}
                                transition={{ duration: 0.2 }}
                                variants={itemVariants}
                              >
                                {item.text}
                              </motion.a>
                            ) : (
                              <motion.div
                                whileHover={{
                                  x: 5,
                                  scale: 1.05,
                                  textShadow: "0px 0px 8px rgba(255,0,0,0.3)",
                                }}
                                transition={{ duration: 0.2 }}
                                variants={itemVariants}
                              >
                                <Link
                                  href={item.href}
                                  className="text-sm text-gray-600 hover:text-red-600"
                                >
                                  {item.text}
                                </Link>
                              </motion.div>
                            )}
                          </motion.li>
                        ))}
                        {column.title === "საკონტაქტო ინფორმაცია" && (
                          <motion.li variants={itemVariants} className="mt-4">
                            <motion.h6
                              className="text-base font-semibold mb-2"
                              variants={itemVariants}
                            >
                              <motion.div
                                whileHover={{
                                  x: 5,
                                  scale: 1.05,
                                  textShadow: "0px 0px 8px rgba(255,0,0,0.3)",
                                }}
                                transition={{ duration: 0.2 }}
                                variants={itemVariants}
                              >
                                <Link
                                  href="/social"
                                  className="text-gray-800 hover:text-red-600"
                                >
                                  სოციალური ქსელები
                                </Link>
                              </motion.div>
                            </motion.h6>
                            <motion.ul
                              variants={containerVariants}
                              initial="hidden"
                              animate="visible"
                              className="space-y-1"
                            >
                              {socialLinks.map((social, socialIndex) => (
                                <motion.li
                                  key={socialIndex}
                                  variants={itemVariants}
                                >
                                  <motion.a
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-600 hover:text-red-600"
                                    whileHover={{
                                      x: 5,
                                      scale: 1.05,
                                      textShadow:
                                        "0px 0px 8px rgba(255,0,0,0.3)",
                                    }}
                                    transition={{ duration: 0.2 }}
                                    variants={itemVariants}
                                  >
                                    {social.text}
                                  </motion.a>
                                </motion.li>
                              ))}
                            </motion.ul>
                          </motion.li>
                        )}
                      </motion.ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className="hidden lg:block">
                <motion.h6
                  className="text-lg font-semibold mb-3"
                  variants={itemVariants}
                >
                  <motion.div
                    whileHover={{
                      x: 5,
                      scale: 1.05,
                      textShadow: "0px 0px 8px rgba(255,0,0,0.3)",
                    }}
                    transition={{ duration: 0.2 }}
                    variants={itemVariants}
                  >
                    <Link
                      href={column.titleHref}
                      className="text-gray-800 hover:text-gray-800"
                    >
                      {column.title}
                    </Link>
                  </motion.div>
                </motion.h6>
                <motion.ul
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-2"
                >
                  {column.items.map((item, itemIndex) => (
                    <motion.li key={itemIndex} variants={itemVariants}>
                      {item.href.startsWith("http") ||
                      item.href.startsWith("tel") ||
                      item.href.startsWith("mailto") ? (
                        <motion.a
                          href={item.href}
                          className="text-sm text-gray-600 hover:text-red-600"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{
                            x: 5,
                            scale: 1.05,
                            textShadow: "0px 0px 8px rgba(255,0,0,0.3)",
                          }}
                          transition={{ duration: 0.2 }}
                          variants={itemVariants}
                        >
                          {item.text}
                        </motion.a>
                      ) : (
                        <motion.div
                          whileHover={{
                            x: 5,
                            scale: 1.05,
                            textShadow: "0px 0px 8px rgba(255,0,0,0.3)",
                          }}
                          transition={{ duration: 0.2 }}
                          variants={itemVariants}
                        >
                          <Link
                            href={item.href}
                            className="text-sm text-gray-600 hover:text-red-600"
                          >
                            {item.text}
                          </Link>
                        </motion.div>
                      )}
                    </motion.li>
                  ))}
                  {column.title === "საკონტაქტო ინფორმაცია" && (
                    <motion.li variants={itemVariants} className="mt-4">
                      <motion.h6
                        className="text-base font-semibold mb-2"
                        variants={itemVariants}
                      >
                        <motion.div
                          whileHover={{
                            x: 5,
                            scale: 1.05,
                            textShadow: "0px 0px 8px rgba(255,0,0,0.3)",
                          }}
                          transition={{ duration: 0.2 }}
                          variants={itemVariants}
                        >
                          <Link
                            href="/social"
                            className="text-gray-800 hover:text-red-600"
                          >
                            სოციალური ქსელები
                          </Link>
                        </motion.div>
                      </motion.h6>
                      <motion.ul
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-1"
                      >
                        {socialLinks.map((social, socialIndex) => (
                          <motion.li key={socialIndex} variants={itemVariants}>
                            <motion.a
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-gray-600 hover:text-red-600"
                              whileHover={{
                                x: 5,
                                scale: 1.05,
                                textShadow: "0px 0px 8px rgba(255,0,0,0.3)",
                              }}
                              transition={{ duration: 0.2 }}
                              variants={itemVariants}
                            >
                              {social.text}
                            </motion.a>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </motion.li>
                  )}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <hr className="border-gray-300 my-6" />
      <motion.div
        ref={bottomRef}
        variants={containerVariants}
        initial="hidden"
        animate={isBottomInView ? "visible" : "hidden"}
        className="flex flex-col md:flex-row justify-between py-5 px-4 container mx-auto items-start md:items-center gap-4 text-sm text-gray-600"
      >
        <motion.div
          className="flex flex-col md:flex-row gap-10"
          variants={containerVariants}
        >
          {[
            "კონფიდენციალურობის პოლიტიკა",
            "Cookie პოლიტიკა",
            "წესები და პირობები",
            "Text to Speech",
          ].map((text, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={bottomItemVariants}
            >
              <motion.div
                whileHover={{
                  x: 5,
                  scale: 1.05,
                  textShadow: "0px 0px 8px rgba(255,0,0,0.3)",
                }}
                transition={{ duration: 0.2 }}
                variants={bottomItemVariants}
              >
                <Link href={""} className="hover:text-red-600 font-semibold">
                  {text}
                </Link>
              </motion.div>
            </motion.span>
          ))}
        </motion.div>
        <motion.span
          variants={bottomItemVariants}
          custom={4}
          className="text-right font-medium"
        >
          © Georgian National Tourism Administration
        </motion.span>
      </motion.div>
    </div>
  );
}

export default Footer;
