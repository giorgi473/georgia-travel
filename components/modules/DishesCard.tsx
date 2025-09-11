"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ButtonWrapper from "@/components/ButtonWrapper";

interface Array {
  image: string;
  header: string;
}

function DishesCard() {
  const array: Array[] = [
    {
      image: "/cardImage/ach.webp",
      header: "აჭარული ხაჭაპური",
    },
    {
      image: "/cardImage/mt.webp",
      header: "მწვადი",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <motion.div ref={ref} initial="hidden" animate={controls}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-12 px-4 sm:px-8 md:px-8">
          <motion.div className="flex flex-col gap-4 xl:col-span-2">
            <motion.h2 className="font-semibold text-md lg:text-xl mb-2">
              აღმოაჩინე ქართული გასტრონომია
            </motion.h2>
            <motion.h3 className="text-xl sm:text-3xl md:text-4xl lg:text-4xl font-semibold mb-4">
              აქ ყველა კერძს <br /> დაუვიწყარი გემო აქვს
            </motion.h3>
            <motion.p className="mb-7">
              ქართული სამზარეულო საუკუნეების განმავლობაში იზიარებდა ევროპისა და
              ახლო აღმოსავლეთის საუკეთესო ტექნიკებს, ტრადიციებს და ქმნიდა თავის
              ინდივიდუალურ, დახვეწილ გემოებს. აქაურობა გურმანებს დაუვიწყარ
              თავგადასავალს ჰპირდება.
            </motion.p>
            <motion.div>
              <ButtonWrapper
                handleClick={handleButtonClick}
                disabled={false}
                className="my-custom-class"
                icon={<ArrowRight size={20} />}
                label="დააგემოვნე"
              />
            </motion.div>
          </motion.div>
          <motion.div className="xl:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-5">
            {array.map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center relative cursor-pointer overflow-hidden rounded-lg"
              >
                <Image
                  src={item.image}
                  alt={item.header}
                  width={200}
                  height={120}
                  className="w-full object-cover rounded-lg hover:scale-110 transition-all duration-300 ease-in-out"
                />
                <h4 className="text-center mt-2 font-semibold absolute bottom-6 left-6 text-white text-xl">
                  {item.header}
                </h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default DishesCard;
