"use client";

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  speed?: "slow" | "normal" | "fast";
  repeat?: number;
}

export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = true,
  speed = "normal",
  repeat = 2,
}: MarqueeProps) {
  const speedMap = {
    slow: reverse ? "animate-marquee-slow-reverse" : "animate-marquee-slow",
    normal: reverse ? "animate-marquee-reverse" : "animate-marquee",
    fast: reverse ? "animate-marquee-fast-reverse" : "animate-marquee-fast",
  };

  return (
    <div className={cn("group relative flex overflow-hidden", className)}>
      {Array.from({ length: repeat }).map((_, index) => (
        <div
          key={index}
          className={cn(
            "flex shrink-0 items-center justify-around gap-4",
            speedMap[speed],
            pauseOnHover && "group-hover:[animation-play-state:paused]"
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
