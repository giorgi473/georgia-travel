import React from "react";
import { Button } from "../ui/button";

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

  return (
    <div>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="">
            <h2 className="font-semibold text-xl">
              აღმოაჩინე ქართული გასტრონომია
            </h2>
            <h3 className="text-xl font-bold">
              აქ ყველა კერძს დაუვიწყარი გემო აქვს
            </h3>
            <p>
              ქართული სამზარეულო საუკუნეების განმავლობაში იზიარებდა ევროპისა და
              ახლო აღმოსავლეთის საუკეთესო ტექნიკებს, ტრადიციებს და ქმნიდა თავის
              ინდივიდუალურ, დახვეწილ გემოებს. აქაურობა გურმანებს დაუვიწყარ
              თავგადასავალს ჰპირდება.
            </p>
            <Button>sdsd</Button>
          </div>
          <div>
            {array.map((item, index) => {
              return <div key={index}>dddf</div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DishesCard;
