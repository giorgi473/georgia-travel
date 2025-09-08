"use client";

import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { blogs } from "@/constants/data/data";

function Blogs() {
  if (!blogs || !Array.isArray(blogs) || blogs.length === 0) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-8">
          გაეცანი ბლოგს
        </h2>
        <p className="text-red-500">
          No blogs available. Please check the data source.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-8 lg:px-10 py-8">
      <div className="flex items-center justify-between gap-4 mb-8">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
          გაეცანი ბლოგს
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {blogs.map((blog, index) => (
          <Card
            key={blog.title || index}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-[500px]"
          >
            <div className="relative flex-grow">
              <Image
                src={blog.img || "/fallback-image.jpg"}
                alt={blog.title || "Blog image"}
                layout="fill"
                className="object-cover hover:scale-110 cursor-pointer transition-transform duration-300 ease-in-out"
                priority={index < 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 pointer-events-none">
                <CardContent className="p-0">
                  <CardTitle
                    className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2"
                    style={{ textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
                  >
                    {blog.title || "Untitled Blog"}
                  </CardTitle>
                  <CardDescription className="text-sm sm:text-base text-gray-200 line-clamp-3">
                    {blog.desc || "No description available."}
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
