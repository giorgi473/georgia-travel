"use client";

import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";
import { blogs } from "@/constants/data/data";
import { useRouter } from "next/navigation";

function Blogs() {
  const { currentLanguage } = useLanguage();
  const router = useRouter();
  const uiTexts = {
    blogTitle: {
      ka: "გაეცანი ბლოგს",
      en: "Explore Blog",
    },
    noBlogsAvailable: {
      ka: "ბლოგები არ მოიძებნა. გთხოვთ შეამოწმოთ მონაცემები.",
      en: "No blogs available. Please check the data source.",
    },
    untitledBlog: {
      ka: "უსახელო ბლოგი",
      en: "Untitled Blog",
    },
    noDescription: {
      ka: "აღწერა არ არის ხელმისაწვდომი.",
      en: "No description available.",
    },
  };

  if (!blogs || !Array.isArray(blogs) || blogs.length === 0) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-8">
          {uiTexts.blogTitle[currentLanguage]}
        </h2>
        <p className="text-red-500">
          {uiTexts.noBlogsAvailable[currentLanguage]}
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-8 lg:px-10 py-8">
      <div className="flex items-center justify-between gap-4 mb-8">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
          {uiTexts.blogTitle[currentLanguage]}
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {blogs.map((blog, index) => (
          <Card
            key={blog.title[currentLanguage] || index}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-[500px]"
          >
            <div className="relative flex-grow">
              <Image
                src={blog.img || "/fallback-image.jpg"}
                alt={
                  blog.title[currentLanguage] ||
                  uiTexts.untitledBlog[currentLanguage]
                }
                layout="fill"
                className="object-cover hover:scale-110 cursor-pointer transition-transform duration-300 ease-in-out"
                priority={index < 3}
                onClick={() => router.push(`${blog.href}`)}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 pointer-events-none">
                <CardContent className="p-0">
                  <CardTitle
                    className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2"
                    style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
                  >
                    {blog.title[currentLanguage] ||
                      uiTexts.untitledBlog[currentLanguage]}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base text-gray-200 line-clamp-3">
                    {blog.desc[currentLanguage] ||
                      uiTexts.noDescription[currentLanguage]}
                  </CardDescription>
                </CardContent>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
