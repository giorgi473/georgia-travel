"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

// ენის ტიპი
export type Language = "ka" | "en";

// ტრანსლაციების ინტერფეისი
interface Translations {
  [key: string]: {
    ka: string;
    en: string;
  };
}

// ენის კონტექსტის ინტერფეისი
interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  translations: Translations;
}

// ყველა ტექსტის ტრანსლაციები
const translations: Translations = {
  // Header Navigation
  "რატომ საქართველო": {
    ka: "რატომ საქართველო",
    en: "Why Georgia",
  },
  ადგილები: {
    ka: "ადგილები",
    en: "Places",
  },
  სანახაობები: {
    ka: "სანახაობები",
    en: "Sights",
  },
  "ბუნება და თავგადასავლები": {
    ka: "ბუნება და თავგადასავლები",
    en: "Nature & Adventures",
  },
  "სასარგებლო ინფორმაცია": {
    ka: "სასარგებლო ინფორმაცია",
    en: "Useful Information",
  },

  // Header UI Elements
  ძიება: {
    ka: "ძიება",
    en: "Search",
  },
  "ძიება...": {
    ka: "ძიება...",
    en: "Search...",
  },
  მარშრუტები: {
    ka: "მარშრუტები",
    en: "Routes",
  },

  // Sights
  სვეტიცხოველი: {
    ka: "სვეტიცხოველი",
    en: "Svetitskhoveli",
  },
  ალავერდი: {
    ka: "ალავერდი",
    en: "Alaverdi",
  },
  "სვეტიცხოველი მსოპლიო ხელოვნების საგანძური": {
    ka: "სვეტიცხოველი მსოპლიო ხელოვნების საგანძური",
    en: "Svetitskhoveli World Art Treasury",
  },
  "ალავერდის ისტორიული ძეგლი": {
    ka: "ალავერდის ისტორიული ძეგლი",
    en: "Alaverdi Historical Monument",
  },

  // Adventures
  "აღმოაჩინე თავგადასავალი 1": {
    ka: "აღმოაჩინე თავგადასავალი 1",
    en: "Discover Adventure 1",
  },
  "აღმოაჩინე თავგადასავალი 2": {
    ka: "აღმოაჩინე თავგადასავალი 2",
    en: "Discover Adventure 2",
  },

  // Information
  "აღმოაჩინე ინფორმაცია 1": {
    ka: "აღმოაჩინე ინფორმაცია 1",
    en: "Discover Information 1",
  },
  "აღმოაჩინე ინფორმაცია 2": {
    ka: "აღმოაჩინე ინფორმაცია 2",
    en: "Discover Information 2",
  },

  // Regions (ამ ტექსტები შეიძლება data.js-დან მოდის)
  თბილისი: {
    ka: "თბილისი",
    en: "Tbilisi",
  },
  კახეთი: {
    ka: "კახეთი",
    en: "Kakheti",
  },
  იმერეთი: {
    ka: "იმერეთი",
    en: "Imereti",
  },
  გურია: {
    ka: "გურია",
    en: "Guria",
  },
  "მცხეთა-მთიანეთი": {
    ka: "მცხეთა-მთიანეთი",
    en: "Mtskheta-Mtianeti",
  },
  "ქვემო ქართლი": {
    ka: "ქვემო ქართლი",
    en: "Kvemo Kartli",
  },
  "შიდა ქართლი": {
    ka: "შიდა ქართლი",
    en: "Shida Kartli",
  },
  "სამცხე-ჯავახეთი": {
    ka: "სამცხე-ჯავახეთი",
    en: "Samtskhe-Javakheti",
  },
  "რაჭა-ლეჩხუმი და ქვემო სვანეთი": {
    ka: "რაჭა-ლეჩხუმი და ქვემო სვანეთი",
    en: "Racha-Lechkhumi and Kvemo Svaneti",
  },
  "სამეგრელო-ზემო სვანეთი": {
    ka: "სამეგრელო-ზემო სვანეთი",
    en: "Samegrelo-Zemo Svaneti",
  },
  აჭარა: {
    ka: "აჭარა",
    en: "Adjara",
  },

  // Navigation Panel Titles (ეს მონაცემები შეიძლება navItems.details-დან მოდის)
  "ტოპ რეგიონები": {
    ka: "ტოპ რეგიონები",
    en: "Top Regions",
  },
  კატეგორიები: {
    ka: "კატეგორიები",
    en: "Categories",
  },
  რეკომენდაციები: {
    ka: "რეკომენდაციები",
    en: "Recommendations",
  },
  გალერეა: {
    ka: "გალერეა",
    en: "Gallery",
  },

  // General Terms
  სანახაობა: {
    ka: "სანახაობა",
    en: "Sight",
  },
  თავგადასავალი: {
    ka: "თავგადასავალი",
    en: "Adventure",
  },
  "საინტერესო სანახაობა საქართველოში": {
    ka: "საინტერესო სანახაობა საქართველოში",
    en: "Interesting sight in Georgia",
  },
  "საინტერესო თავგადასავალი": {
    ka: "საინტერესო თავგადასავალი",
    en: "Interesting adventure",
  },
  "მიმდინარე ენა": {
    ka: "მიმდინარე ენა",
    en: "Current language",
  },

  // navItems specific translations
  // Why Georgia section
  "უნიკალური ქართული ფოლკლორი": {
    ka: "უნიკალური ქართული ფოლკლორი",
    en: "Unique Georgian Folklore",
  },
  "მსოფლიო მნიშვნელობის მემკვიდრეობა": {
    ka: "მსოფლიო მნიშვნელობის მემკვიდრეობა",
    en: "World Heritage Sites",
  },
  "უნიკალური ქართული ანბანი": {
    ka: "უნიკალური ქართული ანბანი",
    en: "Unique Georgian Alphabet",
  },
  "შავი ზღვის სანაპიროები": {
    ka: "შავი ზღვის სანაპიროები",
    en: "Black Sea Coastlines",
  },
  "საქართველოს ისტორია": {
    ka: "საქართველოს ისტორია",
    en: "History of Georgia",
  },
  "ტურიზმის სტატისტიკა საქართველოში": {
    ka: "ტურიზმის სტატისტიკა საქართველოში",
    en: "Tourism Statistics in Georgia",
  },
  "ქართული კულტურა": {
    ka: "ქართული კულტურა",
    en: "Georgian Culture",
  },
  "ქართული ლიტერატურა": {
    ka: "ქართული ლიტერატურა",
    en: "Georgian Literature",
  },
  "ქართული ცეკვა": {
    ka: "ქართული ცეკვა",
    en: "Georgian Dance",
  },
  "უგემრიელესი ქართული სამზარეულო": {
    ka: "უგემრიელესი ქართული სამზარეულო",
    en: "Delicious Georgian Cuisine",
  },
  "საქართველოს ბუნება": {
    ka: "საქართველოს ბუნება",
    en: "Nature of Georgia",
  },
  "საქართველოს მთავარი ქალაქები": {
    ka: "საქართველოს მთავარი ქალაქები",
    en: "Georgia's Major Cities",
  },
  "საქართველო როგორც ღვინის აკვანი": {
    ka: "საქართველო როგორც ღვინის აკვანი",
    en: "Georgia as the Cradle of Wine",
  },
  "პირველი ევროპული ცივილიზაცია": {
    ka: "პირველი ევროპული ცივილიზაცია",
    en: "First European Civilization",
  },
  "თავგადასავლები საქართველოში": {
    ka: "თავგადასავლები საქართველოში",
    en: "Adventures in Georgia",
  },
  "ევროპის ყველაზე მაღალი დასახლებული პუნქტი...": {
    ka: "ევროპის ყველაზე მაღალი დასახლებული პუნქტი...",
    en: "Europe's Highest Inhabited Settlement...",
  },
  "სეზონურობა საქართველოში": {
    ka: "სეზონურობა საქართველოში",
    en: "Seasonality in Georgia",
  },
  "საქართველოს გეოგრაფია": {
    ka: "საქართველოს გეოგრაფია",
    en: "Geography of Georgia",
  },
  "აღმოაჩინე საქართველო": {
    ka: "აღმოაჩინე საქართველო",
    en: "Discover Georgia",
  },

  // Places section
  "ტოპ ქალაქები": {
    ka: "ტოპ ქალაქები",
    en: "Top Cities",
  },
  ქუთაისი: {
    ka: "ქუთაისი",
    en: "Kutaisi",
  },
  ბათუმი: {
    ka: "ბათუმი",
    en: "Batumi",
  },
  სტეფანწმინდა: {
    ka: "სტეფანწმინდა",
    en: "Stepantsminda",
  },
  მესტია: {
    ka: "მესტია",
    en: "Mestia",
  },
  მცხეთა: {
    ka: "მცხეთა",
    en: "Mtskheta",
  },
  ბორჯომი: {
    ka: "ბორჯომი",
    en: "Borjomi",
  },
  რაჭა: {
    ka: "რაჭა",
    en: "Racha",
  },

  // Sights section
  "ტოპ კატეგორიები": {
    ka: "ტოპ კატეგორიები",
    en: "Top Categories",
  },
  "ხელოვნება და კულტურა": {
    ka: "ხელოვნება და კულტურა",
    en: "Art and Culture",
  },
  "კულტურული ძეგლები": {
    ka: "კულტურული ძეგლები",
    en: "Cultural Monuments",
  },
  "სამზარეულო და ღვინო": {
    ka: "სამზარეულო და ღვინო",
    en: "Cuisine and Wine",
  },
  "გამაჯანსაღებელი პროცედურები": {
    ka: "გამაჯანსაღებელი პროცედურები",
    en: "Wellness Procedures",
  },
  "საოჯახო სანახაობები": {
    ka: "საოჯახო სანახაობები",
    en: "Family Attractions",
  },
  "დასვენება ქალაქში": {
    ka: "დასვენება ქალაქში",
    en: "City Recreation",
  },
  "ტოპ სანახაობები": {
    ka: "ტოპ სანახაობები",
    en: "Top Sights",
  },
  "გერგეთის სამება": {
    ka: "გერგეთის სამება",
    en: "Gergeti Trinity",
  },
  "ილია ჭავჭავაძის სახლ-მუზეუმი": {
    ka: "ილია ჭავჭავაძის სახლ-მუზეუმი",
    en: "Ilia Chavchavadze House Museum",
  },
  "ხერთვისის ციხე": {
    ka: "ხერთვისის ციხე",
    en: "Khertvisi Fortress",
  },
  "საქართველოს ეროვნული მუზეუმი": {
    ka: "საქართველოს ეროვნული მუზეუმი",
    en: "Georgian National Museum",
  },
  დავითგარეჯი: {
    ka: "დავითგარეჯი",
    en: "David Gareja",
  },
  "ბოლნისის სიონი": {
    ka: "ბოლნისის სიონი",
    en: "Bolnisi Sioni",
  },
  "თვის სანახაობები": {
    ka: "თვის სანახაობები",
    en: "Monthly Sights",
  },

  // Nature and Adventures section
  "ზამთრის თავგადასავლები": {
    ka: "ზამთრის თავგადასავლები",
    en: "Winter Adventures",
  },
  "საზაფხულო თავგადასავლები": {
    ka: "საზაფხულო თავგადასავლები",
    en: "Summer Adventures",
  },
  "ეროვნული პარკები": {
    ka: "ეროვნული პარკები",
    en: "National Parks",
  },
  მთები: {
    ka: "მთები",
    en: "Mountains",
  },
  ტბები: {
    ka: "ტბები",
    en: "Lakes",
  },
  "ბუნების ძეგლები": {
    ka: "ბუნების ძეგლები",
    en: "Natural Monuments",
  },
  "პრომეთეს მღვიმე": {
    ka: "პრომეთეს მღვიმე",
    en: "Prometheus Cave",
  },
  "მუსიკოსების პარკი": {
    ka: "მუსიკოსების პარკი",
    en: "Musicians Park",
  },
  "ოკაცეს კანიონი": {
    ka: "ოკაცეს კანიონი",
    en: "Okatse Canyon",
  },
  ვარძია: {
    ka: "ვარძია",
    en: "Vardzia",
  },
  "ძამას ხეობა": {
    ka: "ძამას ხეობა",
    en: "Dzama Valley",
  },
  "შაორის ტბა": {
    ka: "შაორის ტბა",
    en: "Shaori Lake",
  },

  // Useful Information section
  "საქართველოში ვიზიტი": {
    ka: "საქართველოში ვიზიტი",
    en: "Visiting Georgia",
  },
  "ადგილობრივი ტრანსპორტი": {
    ka: "ადგილობრივი ტრანსპორტი",
    en: "Local Transport",
  },
  "რეგიონალური ტრანსპორტი": {
    ka: "რეგიონალური ტრანსპორტი",
    en: "Regional Transport",
  },
  "ადგილობრივი ტრანსპორტის გაქირავება": {
    ka: "ადგილობრივი ტრანსპორტის გაქირავება",
    en: "Local Vehicle Rental",
  },
  "ამინდი და ადგილობრივი კლიმატი": {
    ka: "ამინდი და ადგილობრივი კლიმატი",
    en: "Weather and Local Climate",
  },
  "ხშირად დასმული კითხვები": {
    ka: "ხშირად დასმული კითხვები",
    en: "Frequently Asked Questions",
  },
  "საჭირო ინფორმაცია საქართველოზე": {
    ka: "საჭირო ინფორმაცია საქართველოზე",
    en: "Essential Information About Georgia",
  },
  "სამედიცინო ინფორმაცია": {
    ka: "სამედიცინო ინფორმაცია",
    en: "Medical Information",
  },
  "უქმე დღეები საქართველოში": {
    ka: "უქმე დღეები საქართველოში",
    en: "Public Holidays in Georgia",
  },
  "ამინდი და სეზონურობა": {
    ka: "ამინდი და სეზონურობა",
    en: "Weather and Seasonality",
  },
  "პოპულარული სტატიები": {
    ka: "პოპულარული სტატიები",
    en: "Popular Articles",
  },

  // Common words that might appear anywhere
  მთავარი: {
    ka: "მთავარი",
    en: "Home",
  },
  შესახებ: {
    ka: "შესახებ",
    en: "About",
  },
  კონტაქტი: {
    ka: "კონტაქტი",
    en: "Contact",
  },
  "გაიგე მეტი": {
    ka: "გაიგე მეტი",
    en: "Learn More",
  },
  დაწვრილებით: {
    ka: "დაწვრილებით",
    en: "Details",
  },
  ყველა: {
    ka: "ყველა",
    en: "All",
  },
  პოპულარული: {
    ka: "პოპულარული",
    en: "Popular",
  },
  ახალი: {
    ka: "ახალი",
    en: "New",
  },
  რეკომენდებული: {
    ka: "რეკომენდებული",
    en: "Recommended",
  },
};

// კონტექსტის შექმნა
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Provider კომპონენტი
interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>("ka");

  // Local Storage-დან ენის წაკითხვა (ბრაუზერში მუშაობს)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as Language;
      if (savedLanguage && (savedLanguage === "ka" || savedLanguage === "en")) {
        setCurrentLanguage(savedLanguage);
      }
    }
  }, []);

  // ენის შენახვა Local Storage-ში
  const setLanguage = (lang: Language) => {
    setCurrentLanguage(lang);
    if (typeof window !== "undefined") {
      localStorage.setItem("language", lang);
    }
  };

  // გაუმჯობესებული ტრანსლაციის ფუნქცია
  const t = (text: string): string => {
    // თუ ტექსტი არსებობს translations-ში
    if (translations[text]) {
      return translations[text][currentLanguage];
    }

    // თუ ტექსტი არ არსებობს, დაბრუნდება ორიგინალი
    console.warn(`Translation missing for: "${text}"`);
    return text;
  };

  const value: LanguageContextType = {
    currentLanguage,
    setLanguage,
    t,
    translations,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook კონტექსტის გამოსაყენებლად
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
