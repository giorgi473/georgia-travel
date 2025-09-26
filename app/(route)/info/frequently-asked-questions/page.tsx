"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/context/LanguageContext";
import { faqItems } from "@/constants/data/data";

export default function FaqPage() {
  const { currentLanguage } = useLanguage();

  return (
    <div className="lg:pl-2">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl -mt-3 font-semibold text-gray-800">
            {currentLanguage === "ka"
              ? "ხშირად დასმული კითხვები"
              : "Frequently Asked Questions"}
          </h3>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className="mb-5"
            >
              <AccordionTrigger className="py-4 text-lg">
                {item.question[currentLanguage]}
              </AccordionTrigger>
              <AccordionContent className="py-4 text-base">
                <div className="space-y-4 text-gray-600 text-sm sm:text-base">
                  {item.answer[currentLanguage]
                    .split("\n\n")
                    .map((paragraph, idx) => (
                      <p
                        key={idx}
                        className="text-gray-600 text-sm sm:text-base"
                      >
                        {paragraph.trim()}
                      </p>
                    ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
