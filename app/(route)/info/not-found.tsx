"use client";

import { useState, useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleGoHome = () => {
    router.push("/");
  };

  const handleGoBack = () => {
    if (typeof window !== "undefined") {
      window.history.back();
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-8 py-12">
      <div
        className={`text-center max-w-md mx-auto transition-all duration-700 ease-out ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* 404 Number */}
        <div className="mb-16 relative">
          <div className="absolute inset-0 text-[120px] md:text-[160px] font-extralight text-gray-100 leading-none tracking-[-0.05em] select-none blur-sm">
            404
          </div>
          <h1 className="relative text-[120px] md:text-[160px] font-extralight bg-gradient-to-br from-black via-gray-800 to-gray-600 bg-clip-text text-transparent leading-none tracking-[-0.05em] select-none animate-pulse">
            404
          </h1>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-black to-transparent opacity-30"></div>
        </div>

        {/* Content */}
        <div className="space-y-6 mb-16">
          <h2 className="text-xl font-normal text-black">
            გვერდი ვერ მოიძებნა
          </h2>
          <p className="text-gray-400 text-base leading-relaxed max-w-xs mx-auto">
            მითითებული რესურსი ვერ მოიძებნა ან არ არსებობს
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleGoHome}
            className="group inline-flex items-center justify-center gap-3 bg-black text-white px-8 py-4 rounded-full text-sm font-normal hover:bg-gray-900 transition-all duration-300 ease-out transform hover:scale-[1.02] active:scale-95 min-w-[140px]"
          >
            <Home className="w-4 h-4" />
            მთავარი
          </button>

          <button
            onClick={handleGoBack}
            className="group inline-flex items-center justify-center gap-3 bg-gray-50 text-gray-700 px-8 py-4 rounded-full text-sm font-normal hover:bg-gray-100 transition-all duration-300 ease-out transform hover:scale-[1.02] active:scale-95 min-w-[140px]"
          >
            <ArrowLeft className="w-4 h-4" />
            უკან
          </button>
        </div>
      </div>
    </div>
  );
}
