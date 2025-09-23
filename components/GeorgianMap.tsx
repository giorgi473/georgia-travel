"use client";

import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { images } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

interface GeorgianMapProps {
  activeRegion: string | null;
}

const GeorgianMap: React.FC<GeorgianMapProps> = ({ activeRegion }) => {
  const router = useRouter();
  const { currentLanguage } = useLanguage();
  const svgRef = useRef<SVGSVGElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [clickedRegion, setClickedRegion] = useState<string | null>(null);

  // Get region data from images array
  const getRegionByName = (regionName: string) => {
    return images.find(
      (region) =>
        region.translations.ka === regionName ||
        region.translations.en === regionName ||
        region.region === regionName
    );
  };

  // Get translated region name
  const getTranslatedRegionName = (regionName: string) => {
    const region = getRegionByName(regionName);
    return region ? region.translations[currentLanguage] : regionName;
  };

  // Get fill color for region
  const getRegionFillColor = (regionName: string) => {
    const region = getRegionByName(regionName);
    if (!region) return "#ffffff";

    const translatedName = region.translations[currentLanguage];

    // Check if this region is clicked (for mobile)
    if (clickedRegion === regionName || clickedRegion === translatedName) {
      return "red";
    }

    // Check if this is the active region from props
    if (activeRegion === translatedName || activeRegion === regionName) {
      return "red";
    }

    // Special regions with different background color
    const specialRegions = [
      "აფხაზეთი",
      "სამაჩაბლო",
      "აჭარა",
      "კახეთი",
      "თბილისი",
    ];
    if (specialRegions.includes(regionName)) {
      return "#eeebf3";
    }

    return "#ffffff";
  };

  useEffect(() => {
    const svg = svgRef.current;
    const tooltip = tooltipRef.current;

    if (svg && tooltip) {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = svg.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const tooltipWidth = tooltip.getBoundingClientRect().width;
        tooltip.style.left = `${x - tooltipWidth / 2}px`;
        tooltip.style.top = `${y - 48}px`;
      };

      const handleMouseOver = (e: Event) => {
        const target = e.target as SVGPathElement;
        if (target.tagName === "path" && tooltip) {
          const region = target.getAttribute("data-title") || "";
          const translatedRegion = getTranslatedRegionName(region);
          tooltip.textContent = translatedRegion;
          tooltip.style.display = "block";
        }
      };

      const handleMouseOut = () => {
        if (tooltip) tooltip.style.display = "none";
      };

      svg.addEventListener("mousemove", handleMouseMove);
      svg.querySelectorAll("path").forEach((path) => {
        path.addEventListener("mouseover", handleMouseOver);
        path.addEventListener("mouseout", handleMouseOut);
      });

      return () => {
        svg.removeEventListener("mousemove", handleMouseMove);
        svg.querySelectorAll("path").forEach((path) => {
          path.removeEventListener("mouseover", handleMouseOver);
          path.removeEventListener("mouseout", handleMouseOut);
        });
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLanguage]);

  const handlePathClick = (regionName: string) => {
    // Toggle clicked region - if same region clicked, deactivate it
    if (clickedRegion === regionName) {
      setClickedRegion(null);
    } else {
      setClickedRegion(regionName);
    }

    const translatedName = getTranslatedRegionName(regionName);
    router.push(`/region/${encodeURIComponent(translatedName)}`);
  };

  return (
    <div className="mt-7">
      <div className="flex justify-center">
        <div className="w-full relative">
          <svg
            ref={svgRef}
            viewBox="0 0 900 500"
            className="w-full h-auto"
            preserveAspectRatio="xMidYMid meet"
          >
            <style>
              {`
                .tooltip {
                  position: absolute;
                  background: white;
                  border: 1px solid #837f7c;
                  padding: 9px 12px;
                  border-radius: 6px;
                  font-size: 16px;
                  pointer-events: none;
                  display: none;
                  z-index: 10;
                  white-space: nowrap;
                }
              `}
            </style>
            <rect fill="#ffff" />

            <path
              data-title="აფხაზეთი"
              d="M1 32.6L1.7 29.7L10 7.9L11.7 5.2L14.6 3.3L22.8 1H31.3L61.5 12.3L66.4 12.9L70.2 11.9L78.1 7.8L82.6 7.2L86.2 9.1L87.3 10L93.5 14.7L106.1 19.1L110.1 21.4L126.9 35L130.7 35.9L143.5 34.2L147.6 35.1L151.6 37.1L155.4 40.2L159.7 42.1L168.5 40.4L172.2 41.8L173.3 43.5L175 47.5L176.1 49.2L177.9 50.6L184.3 52.6L187.5 54.5L192.9 60.1L196.2 62L200.7 62.4L209.7 61.2L214.2 61.7L222.2 64L226 64.4L234.5 63.4L238.1 63.6L241.6 64.6L245.5 66.5L249.4 67.6L253.3 67.8L257.2 67L266.9 61.6L265.2 65.6L263.8 70L264.2 74.8L264.3 79.5L262.6 84.2L260.2 88.3L257.4 91.5L255.1 95.3L248.7 98.1L236.8 100.3L235.8 101.5L233.9 104L236.1 106.8L237.1 110.3L237.8 114.2L238 114.8L239 117.8L239.6 121.4L237.7 124L236.2 125L234.8 126.4L234.7 128.2L235.7 129.7L237 137.4L236.8 141.7L237.3 145.8L240.8 151.7L241.3 155.7L241.7 158.9L240.6 161.9L238.4 163.3L235.8 165.4L233.9 168.2L233.7 168.4L224 177.8L213.6 184L213.2 184.2L207.1 186.2L205.4 188.3L202.6 191.7L198 194.6L196.6 195.3L193.7 196.7L193.1 197L186.8 158L184.7 151.4L181.6 145.9L177.6 141.5L172.6 138.7L163.3 137L161.3 135.9L159.3 134.1L156.3 132.4L153.2 131.2L150.8 130.8L149.4 131.2L146.9 132.7L145.4 133L144.1 132.2L138.6 123.7L135.8 113.4L130.7 104.5L128.6 99.7L125.6 99.8L120.8 102L117.6 100.9L113.9 95.3L111.8 94V93.1L108.9 88.1L108 87.5L99.1 83.9L86.8 82.2L81.1 82.5L77.1 83.5L75.6 83.7L74.2 83.2L71.8 80.8L70.3 80.2L69.7 79.7L67.6 77.4L66.5 76.6L65.3 76.2L61.4 75.5L51.5 70.7L47 70.2L43.8 74.3L42.5 73L40.7 68.5L39.6 66.3L36.8 63.5L35.6 61.7L36.1 56.4L34.2 51.4L31.5 46.9L29.5 44.4L25.7 42.6L19 40.6L15.1 36.6L13.3 35.7L7.6 34.8L3.8 33.2L1 32.6Z"
              stroke="#b7b7b7"
              fill={getRegionFillColor("აფხაზეთი")}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="cursor-pointer hover:fill-red-500"
              onClick={() => handlePathClick("აფხაზეთი")}
            />

            {/* Add more regions from the images array when available */}
            {images.length > 1 &&
              images
                .slice(1)
                .map((region, index) => (
                  <path
                    key={index}
                    data-title={region.translations.ka}
                    d={region.path}
                    stroke="#b7b7b7"
                    fill={getRegionFillColor(region.translations.ka)}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="cursor-pointer hover:fill-red-500"
                    onClick={() => handlePathClick(region.translations.ka)}
                  />
                ))}
          </svg>
          <div
            ref={tooltipRef}
            className="tooltip font-medium select-none"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default GeorgianMap;
