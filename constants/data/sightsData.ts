export interface Demo {
  title: string;
  description: string;
}

export interface Sight {
  id: number;
  title: string;
  image: string;
  description: string;
  demo: Demo[];
}

export const sightsData: Sight[] = [
  {
    id: 1,
    title: "ხელოვნება და კულტურა",
    image: "",
    description:
      "საქართველო უძველესი ქვეყანაა და ქართული კულტურაც უპირველესი ცივილიზაციების ეპოქიდან იწყება. აქაურობა გაგაოცებს სიძველისა და თანამედროვეობის კომბინაციით, კულტურული მემკვიდრეობის ძეგლებით და ისეთი სანახაობებით, რომლებშიც საუკუნოვანი ტრადიციები ახლებურ ფორმებშია გაცოცხლებული.",
    demo: [
      {
        title: "",
        description: "",
      },
    ],
  },
];
