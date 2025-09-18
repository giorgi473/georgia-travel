"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroSection } from "@/components/hero-section";

type TabType = "sights" | "activities" | "locations" | "tours" | "trails";

interface TabData {
  id: TabType;
  title: string;
  content: string;
}

function CartPage() {
  const [activeTab, setActiveTab] = useState<TabType>("sights");

  const tabs: TabData[] = [
    {
      id: "sights",
      title: "სანახაობა",
      content:
        "აქ იქნება სანახაობების კონტენტი - ისტორიული ძეგლები, მუზეუმები, ტაძრები და სხვა საინტერესო ადგილები.",
    },
    {
      id: "activities",
      title: "აქტივობა",
      content:
        "აქ იქნება აქტივობების კონტენტი - ზღვაში ცურვა, ფეხით ლაშქრობა, ველოსიპედით ტური და სხვა სპორტული აქტივობები.",
    },
    {
      id: "locations",
      title: "ადგილმდებარეობები",
      content:
        "აქ იქნება ადგილმდებარეობების კონტენტი - რეგიონები, ქალაქები, სოფლები და მათი აღწერილობა.",
    },
    {
      id: "tours",
      title: "ტურები",
      content:
        "აქ იქნება ტურების კონტენტი - მზა ტურისტული პაკეტები, ღირებულება, ხანგრძლივობა და ყოველდღიური პროგრამა.",
    },
    {
      id: "trails",
      title: "ბილიკები",
      content:
        "აქ იქნება ბილიკების კონტენტი - ფეხით სიარულის მარშრუტები, სირთულის ხარისხი, ხანგრძლივობა და რეკომენდაციები.",
    },
  ];

  return (
    <>
      <div>
        <HeroSection
          image="/cart/online-shopping-hd.avif"
          title="ჩემი მარშრუტები"
          description=""
          overlay="bg-black/40"
          button="მთავარი"
          href="/"
          tours="ტურები საქართველოში"
          className="h-[340px] mb-10"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-5 lg:px-11">
        {/* Tab Navigation */}
        <div className="mb-6 sm:mb-8 -mx-4 sm:mx-0">
          {/* Mobile: Horizontal Scroll */}
          <div className="sm:hidden px-4">
            <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-shrink-0 py-2.5 px-4 rounded-full font-medium text-sm cursor-pointer relative min-w-max ${
                    activeTab === tab.id
                      ? "text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeTabMobile"
                      className="absolute inset-0 bg-gray-800 rounded-full"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      }}
                    />
                  )}
                  <span className="relative z-10">{tab.title}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Desktop/Tablet: Flex wrap */}
          <nav
            className="hidden sm:flex sm:flex-wrap sm:justify-center lg:justify-start gap-2"
            aria-label="Tabs"
          >
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-3 px-5 lg:px-6 rounded-3xl font-medium text-sm lg:text-base cursor-pointer relative ${
                  activeTab === tab.id
                    ? "text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabDesktop"
                    className="absolute inset-0 bg-gray-800 rounded-3xl"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  />
                )}
                <span className="relative z-10">{tab.title}</span>
              </motion.button>
            ))}
          </nav>
        </div>

        {/* Tab Content - Empty for now */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="min-h-64 sm:min-h-80 lg:min-h-96"
          >
            {/* კონტენტი გასაუქმებელი */}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </>
  );
}

export default CartPage;
