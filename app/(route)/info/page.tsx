"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { services } from "@/constants/data/data";
import { useLanguage } from "@/context/LanguageContext";
import { ServiceCard } from "@/components/ServiceCard";

const cardsPerPage = 9;
const totalPages = Math.ceil(services.length / cardsPerPage);

function Page() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const router = useRouter();
  const { currentLanguage } = useLanguage();

  const handleDetailsClick = (title: string) => {
    router.push(`/info/${encodeURIComponent(title)}`);
  };

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentServices = services.slice(startIndex, endIndex);

  const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="lg:pr-0">
      <div className="container mx-auto">
        <div className="space-y-6 mb-8">
          {Array.from(
            { length: Math.ceil(currentServices.length / 2) },
            (_, rowIndex) => (
              <div
                key={rowIndex}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
              >
                {currentServices
                  .slice(rowIndex * 2, rowIndex * 2 + 2)
                  .map((service, cardIndex) => (
                    <ServiceCard
                      key={startIndex + rowIndex * 2 + cardIndex}
                      image={service.image}
                      title={service.title[currentLanguage]}
                      description={service.description[currentLanguage]}
                      details={service.details[currentLanguage]}
                      onDetailsClick={() =>
                        handleDetailsClick(service.title.en)
                      }
                    />
                  ))}
              </div>
            )
          )}
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <button
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg border transition-colors duration-200 w-full sm:w-auto ${
              currentPage === 1
                ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400"
            }`}
          >
            {currentLanguage === "ka" ? "← წინა" : "← Previous"}
          </button>
          <div className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => changePage(page)}
                className={`px-4 py-2 rounded-lg border transition-colors duration-200 ${
                  currentPage === page
                    ? "bg-red-500 text-white border-red-500"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-red-50 hover:border-red-300"
                }`}
              >
                {page}
              </button>
            ))}
          </div>
          <button
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg border transition-colors duration-200 w-full sm:w-auto ${
              currentPage === totalPages
                ? "bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50 hover:border-gray-400"
            }`}
          >
            {currentLanguage === "ka" ? "შემდეგი →" : "Next →"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
