"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroSection } from "@/components/hero-section";
import Image from "next/image";
import { Trash2, Heart, Clock, MapPin, Activity } from "lucide-react";
import { useCart } from "@/context/CartContext";

type TabType = "sights" | "activities" | "locations" | "tours" | "trails";

interface TabData {
  id: TabType;
  title: string;
  content: string;
}

function CartPage() {
  const [activeTab, setActiveTab] = useState<TabType>("tours");
  const { tours, removeTour, clearTours } = useCart();

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
      title: `ტურები (${tours.length})`,
      content: "",
    },
    {
      id: "trails",
      title: "ბილიკები",
      content:
        "აქ იქნება ბილიკების კონტენტი - ფეხით სიარულის მარშრუტები, სირთულის ხარისხი, ხანგრძლივობა და რეკომენდაციები.",
    },
  ];

  const renderToursContent = () => {
    if (tours.length === 0) {
      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-12"
        >
          <Heart size={64} className="mx-auto text-gray-300 mb-4" />
          <h3 className="text-2xl font-semibold text-gray-600 mb-2">
            მარშრუტი ცარიელია
          </h3>
          <p className="text-gray-500">
            დაამატეთ თქვენთვის საინტერესო ტურები მარშრუტში
          </p>
        </motion.div>
      );
    }

    return (
      <div className="space-y-6">
        {/* Clear All Button */}
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">
            შერჩეული ტურები ({tours.length})
          </h3>
          <button
            onClick={clearTours}
            className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors duration-200"
          >
            <Trash2 size={16} />
            ყველას წაშლა
          </button>
        </div>

        {/* Tours Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tours.map((tour, index) => (
            <motion.div
              key={tour.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Tour Image */}
              <div className="relative h-48">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => removeTour(tour.id)}
                  className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-red-50 hover:text-red-500 transition-colors duration-200"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              {/* Tour Info */}
              <div className="p-4">
                <h4 className="font-semibold text-lg mb-2 line-clamp-2">
                  {tour.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {tour.descriptin}
                </p>

                {/* Tour Details */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock size={14} />
                    <span>{tour.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin size={14} />
                    <span>{tour.distance}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Activity size={14} />
                    <span>{tour.difficulty}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  const renderTabContent = () => {
    if (activeTab === "tours") {
      return renderToursContent();
    }

    // Other tabs content
    const currentTab = tabs.find((tab) => tab.id === activeTab);
    return (
      <div className="py-12 text-center">
        <p className="text-gray-600">{currentTab?.content}</p>
      </div>
    );
  };

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
                  className={`flex-shrink-0 py-2.5 px-4 select-none rounded-full font-medium text-sm cursor-pointer relative min-w-max ${
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

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="min-h-64 sm:min-h-80 lg:min-h-96"
          >
            {renderTabContent()}
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
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
}

export default CartPage;
