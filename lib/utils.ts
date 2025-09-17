import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
// lib/utils.ts
export function createSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9ა-ჰ]+/g, "-") // Replace non-alphanumeric Georgian characters with hyphens
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
}
