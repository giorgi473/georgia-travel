export interface CuisineCard {
  id: number;
  image: string;
  title: {
    ka: string;
    en: string;
  };
  popularity: number;
}

export const cuisineCards: CuisineCard[] = [
  {
    id: 1,
    image:
      "/card/abkhazian-dishes-abkhazia-ajika-citrus-jams-feihoa-sauces.webp",
    title: {
      ka: "აჭარული ხაჭაპური",
      en: "Adjarian Khachapuri",
    },
    popularity: 4,
  },
  {
    id: 2,
    image: "/card/adjarian-dishes-chirbuli.webp",
    title: {
      ka: "მწვადი",
      en: "Mtsvadi (Georgian BBQ)",
    },
    popularity: 9,
  },
  {
    id: 3,
    image: "/card/wine-made-dishes-churchkhela.webp",
    title: {
      ka: "ხინკალი",
      en: "Khinkali",
    },
    popularity: 10,
  },
  {
    id: 4,
    image: "/card/jurjani-dalila.webp",
    title: {
      ka: "ლობიო",
      en: "Lobio",
    },
    popularity: 7,
  },
  {
    id: 5,
    image: "/card/download.webp",
    title: {
      ka: "ფხალი",
      en: "Pkhali",
    },
    popularity: 6,
  },
  {
    id: 6,
    image: "/card/duck-chakhokhbili-1.webp",
    title: {
      ka: "ჩაქაფული",
      en: "Chakapuli",
    },
    popularity: 8,
  },
  {
    id: 7,
    image: "/card/ritual-menu-bridal-kelekhi-3.webp",
    title: {
      ka: "ჩურჩხელა",
      en: "Churchkhela",
    },
    popularity: 8,
  },
  {
    id: 8,
    image: "/card/meskhetian-dishes-1.webp",
    title: {
      ka: "საწივი",
      en: "Satsivi",
    },
    popularity: 7,
  },
  {
    id: 9,
    image: "/card/kaymagh-gnta.webp",
    title: {
      ka: "საწივი",
      en: "Satsivi",
    },
    popularity: 7,
  },
  {
    id: 10,
    image: "/card/chinuri-gnta.webp",
    title: {
      ka: "საწივი",
      en: "Satsivi",
    },
    popularity: 7,
  },
  {
    id: 11,
    image: "/card/saperavi-gnta.webp",
    title: {
      ka: "საწივი",
      en: "Satsivi",
    },
    popularity: 7,
  },
  {
    id: 12,
    image: "/card/satsivi-gnta.webp",
    title: {
      ka: "საწივი",
      en: "Satsivi",
    },
    popularity: 7,
  },
  {
    id: 13,
    image: "/card/goruli-mtsvane-gnta.webp",
    title: {
      ka: "საწივი",
      en: "Satsivi",
    },
    popularity: 7,
  },
  {
    id: 14,
    image: "/card/ojaleshi-gnta.webp",
    title: {
      ka: "საწივი",
      en: "Satsivi",
    },
    popularity: 7,
  },
];
