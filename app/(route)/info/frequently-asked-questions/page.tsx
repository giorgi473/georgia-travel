import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/constants/data/data";

export default function Page() {
  return (
    <div className="lg:pl-2">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-2xl -mt-3 mb-5 font-semibold text-gray-800">
          ხშირად დასმული კითხვები
        </h3>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className="mb-5"
            >
              <AccordionTrigger className="py-4 text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="py-4 text-base">
                <div className="space-y-4 text-gray-600 text-sm sm:text-base">
                  {item.answer.split("\n\n").map((paragraph, idx) => (
                    <p key={idx} className="text-gray-600 text-sm sm:text-base">
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
