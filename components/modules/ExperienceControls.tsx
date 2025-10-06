"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

interface ExperienceControlsProps {
  currentLanguage: "ka" | "en";
  onSortChange?: (isTopStatus: boolean) => void;
  initialSortState?: boolean;
}

function ExperienceControls({
  currentLanguage,
  onSortChange,
  initialSortState = false,
}: ExperienceControlsProps) {
  const [isTopStatus, setIsTopStatus] = useState(initialSortState);

  useEffect(() => {
    setIsTopStatus(initialSortState);
  }, [initialSortState]);

  const translations = {
    ka: {
      showingResult: "ძიების შედეგი:",
      browseAll: "აღმოაჩინე შენი თავგადასავალი",
      sortBy: "დალაგება",
      topStatus: "პოპულარული",
    },
    en: {
      showingResult: "Showing Result:",
      browseAll: "Browse All Experiences",
      sortBy: "Sort By",
      topStatus: "Top Status",
    },
  };

  const t = translations[currentLanguage];

  const handleSwitchChange = (checked: boolean) => {
    setIsTopStatus(checked);
    if (onSortChange) {
      onSortChange(checked);
    }
  };

  return (
    <div className="container mx-auto space-y-5 px-5 sm:px-8 md:px-8 lg:px-10">
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm sm:text-lg text-gray-500">
            {t.showingResult}
          </h3>
          <p className="text-red-500 text-xs sm:text-sm flex items-center gap-2 cursor-pointer hover:text-gray-500 transition-all duration-300 ease-in-out">
            {t.browseAll}
            <ArrowRight className="mt-0.5 hidden sm:flex" size={15} />
          </p>
        </div>
        <div className="flex items-center gap-5 bg-gray-100 py-3 px-2 sm:px-4 rounded-lg">
          <div className="flex flex-col">
            <p className="text-xs text-gray-600">{t.sortBy}</p>
            <Label htmlFor="top-status">{t.topStatus}</Label>
          </div>
          <Switch
            id="top-status"
            checked={isTopStatus}
            onCheckedChange={handleSwitchChange}
          />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default ExperienceControls;
