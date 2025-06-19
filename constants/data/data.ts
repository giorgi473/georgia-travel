export interface NavItemDetail {
  title: string;
  image?: string;
  images?: string[];
  items: { text: string; href: string }[];
}

export interface NavItem {
  name?: string;
  natureName?: string;
  href: string;
  details: NavItemDetail[];
}

export interface Section {
  id: string;
  content: string;
  image?: string;
  image1?: string;
  image2?: string;
  image3?: string;
  title?: string;
  description?: string;
  buttonText?: string;
}

export const sections: Section[] = [
  {
    id: "start",
    content: "აქ არის Start სექცია",
    image1: "/flags/image1.webp",
    image2: "/flags/image2.webp",
    image3: "/flags/clouds.webp",
  },
  {
    id: "section-01",
    content: "აქ არის 01 სექცია",
    image1: "/flags/image2.webp",
    image2: "/flags/image3.webp",
    image3: "/flags/clouds.webp",
    title: "საქართველოს \n გეოგრაფია",
    description:
      "საქართველო ევროპისა და აზიის გზაგასაყარზე, კავკასიაში, შავი ზღვის სანაპიროზე მდებარეობს. ის საუკუნეების განმავლობაში ასრულებდა ცივილიზაციების დამაკავშირებელ ფუნქციას და სწორედ აქ გადიოდა „აბრეშუმის გზაც“ - მსოფლიოს უმსხვილესი სავაჭრო არტერია.",
    buttonText: "გაიგე მეტი",
  },
  {
    id: "section-02",
    content: "აქ არის 02 სექცია",
    image: "/flags/clouds.webp",
  },
  {
    id: "section-03",
    content: "აქ არის 03 სექცია",
    image: "/flags/image1.webp",
  },
  {
    id: "section-04",
    content: "აქ არის 04 სექცია",
    image: "/flags/image2.webp",
  },
];

export const navItems: NavItem[] = [
  {
    name: "რატომ საქართველო",
    href: "/why-georgia",
    details: [
      {
        title: "",
        items: [
          {
            text: "უნიკალური ქართული ფოლკლორი",
            href: "/why-georgia/history",
          },
          {
            text: "მსოფლიო მნიშვნელობის მემკვიდრეობა",
            href: "/why-georgia/culture",
          },
          {
            text: "უნიკალური ქართული ანბანი",
            href: "/why-georgia/tourist-spots",
          },
          {
            text: "შავი ზღვის სანაპიროები",
            href: "/why-georgia/family-travel",
          },
          { text: "საქართველოს ისტორია", href: "/why-georgia/food-wine" },
          {
            text: "ტურიზმის სტატისტიკა საქართველოში",
            href: "/why-georgia/nature",
          },
        ],
      },
      {
        title: "",
        items: [
          { text: "ქართული კულტურა", href: "/why-georgia/food-wine" },
          { text: "ქართული ლიტერატურა", href: "/why-georgia/nature" },
          { text: "ქართული ცეკვა", href: "/why-georgia/music" },
          {
            text: "უგემრიელესი ქართული სამზარეულო",
            href: "/why-georgia/dances",
          },
          { text: "საქართველოს ბუნება", href: "/why-georgia/nature" },
          {
            text: "საქართველოს მთავარი ქალაქები",
            href: "/why-georgia/music",
          },
        ],
      },
      {
        title: "",
        items: [
          {
            text: "საქართველო როგორც ღვინის აკვანი",
            href: "/why-georgia/economy",
          },
          {
            text: "პირველი ევროპული ცივილიზაცია",
            href: "/why-georgia/education",
          },
          {
            text: "თავგადასავლები საქართველოში",
            href: "/why-georgia/sports",
          },
          {
            text: "ევროპის ყველაზე მაღალი დასახლებული პუნქტი...",
            href: "/why-georgia/health",
          },
          { text: "სეზონურობა საქართველოში", href: "/why-georgia/sports" },
          { text: "საქართველოს გეოგრაფია", href: "/why-georgia/sports" },
        ],
      },
      {
        title: "აღმოაჩინე საქართველო",
        image: "/flags/ph.jpg",
        items: [],
      },
    ],
  },
  {
    name: "ადგილები",
    href: "/places",
    details: [
      {
        title: "ტოპ რეგიონები",
        items: [
          { text: "კახეთი", href: "/places/tbilisi" },
          { text: "იმერეთი", href: "/places/batumi" },
          { text: "აჭარა", href: "/places/kutaisi" },
          { text: "მცხეთა-მთიანეთი", href: "/places/signagi" },
          { text: "რაჭა-ლეჩხუმი და ქვემო სვანეთი", href: "/places/mestia" },
          { text: "შიდა ქართლი", href: "/places/gudauri" },
          { text: "სამეგრელო-ზემო სვანეთი", href: "/places/gudauri" },
        ],
      },
      {
        title: "ტოპ ქალაქები",
        items: [
          { text: "ქუთაისი", href: "/places/rustavi" },
          { text: "ბათუმი", href: "/places/zugdidi" },
          { text: "თბილისი", href: "/places/telavi" },
          { text: "სტეფაწმინდა", href: "/places/poti" },
          { text: "მესტია", href: "/places/akhaltsikhe" },
          { text: "მცხეთა", href: "/places/ambrolauri" },
          { text: "ბორჯომი", href: "/places/ambrolauri" },
        ],
      },
      {
        title: "რეგიონები",
        items: [],
      },
    ],
  },
  {
    name: "სანახაობები",
    href: "/sights",
    details: [
      {
        title: "ტოპ კატეგორიები",
        items: [
          { text: "ხელოვნება და კულტურა", href: "/sights/jvari" },
          { text: "კულტურული ძეგლები", href: "/sights/svetitskhoveli" },
          { text: "სამზარეულო და ღვინო", href: "/sights/ushguli" },
          { text: "გამაჯანსაღებელი პროცედურები", href: "/sights/gelati" },
          { text: "საოჯახო სანახაობები", href: "/sights/david-gareji" },
          { text: "დასვენება ქალაქში", href: "/sights/bridge-of-peace" },
        ],
      },
      {
        title: "ტოპ სანახაობები",
        items: [
          { text: "გერგეთის სამება", href: "/sights/bagrati" },
          { text: "ილია ჭავჭავაძის სახლ-მუზეუმი", href: "/sights/samtskhe" },
          { text: "ხერთვისის ციხე", href: "/sights/paravani" },
          {
            text: "საქართველოს ეროვნული მუზეუმი",
            href: "/sights/chkhorotsku",
          },
          { text: "დავითგარეჯი", href: "/sights/batumi-forest" },
          { text: "ბოლნისის სიონი", href: "/sights/alaverdi" },
        ],
      },
      {
        title: "თვის სანახაობები",
        images: ["/flags/ph.jpg", "/flags/ph.jpg"],
        items: [],
      },
    ],
  },
  {
    natureName: "ბუნება და თავგადასავლები",
    href: "/nature-adventures",
    details: [
      {
        title: "ტოპ კატეგორიები",
        items: [
          { text: "ზამთრის თავგადასავლები", href: "/nature/svaneti" },
          { text: "საზაპხულო თავგადასავლები", href: "/nature/truso" },
          { text: "ეროვნული პარკები", href: "/nature/martvili-canyon" },
          { text: "მთები", href: "/nature/kinchkha" },
          { text: "ტბები", href: "/nature/dedoflis-tsqaro" },
          { text: "ბუნების ძეგლები", href: "/nature/khadi" },
        ],
      },
      {
        title: "ტოპ სანახაობები",
        items: [
          { text: "პრომეთეს მღვიმე", href: "/nature/borjomi" },
          { text: "მუსიკოსების პარკი", href: "/nature/lagodekhi" },
          { text: "ოკაცეს კანიონი", href: "/nature/okace" },
          { text: "ვარძია", href: "/nature/chkhorotsku" },
          { text: "ძამას ხეობა", href: "/nature/abastumani" },
          { text: "შაორის ტბა", href: "/nature/samtskhe" },
        ],
      },
      {
        title: "თვის სანახაობები",
        images: ["/flags/ph.jpg", "/flags/ph.jpg"],
        items: [],
      },
    ],
  },
  {
    name: "სასარგებლო ინფორმაცია",
    href: "/info",
    details: [
      {
        title: "",
        items: [
          { text: "საქართველოში ვიზიტი", href: "/info/visa" },
          { text: "ადგილობრივი ტრანსპორტი", href: "/info/transport" },
          { text: "რეგიონალური ტრანსპორტი", href: "/info/hotels" },
          {
            text: "ადგილობრივი ტრანსპორტის გაქირავება",
            href: "/info/budget",
          },
          { text: "ამინდი და ადგილობრივი კლიმატი", href: "/info/health" },
          { text: "ხშირად დასმული კითხვები", href: "/info/contact" },
        ],
      },
      {
        title: "საჭირო ინფორმაცია საქართველოზე",
        items: [
          { text: "სამედიცინო ინფორმაცია", href: "/info/weather" },
          { text: "უქმე დღეები საქართველოში", href: "/info/map" },
          { text: "ამინდი და სეზონურობა", href: "/info/attractions" },
        ],
      },
      {
        title: "პოპულარული სტატიები",
        images: ["/flags/ph.jpg", "/flags/ph.jpg"],
        items: [],
      },
    ],
  },
];
