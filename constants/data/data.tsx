import GeorgianMap from "@/components/GeorgianMap";

export interface NavItemDetail {
  title: string;
  titleEn?: string;
  image?: string;
  images?: string[];
  items: {
    text: string;
    textEn?: string;
    href: string;
    image?: string;
    renderComponent?: () => React.ReactNode;
  }[];
}

export interface NavItem {
  id: string;
  name?: string;
  nameEn?: string;
  natureName?: string;
  natureNameEn?: string;
  href: string;
  details: NavItemDetail[];
}

export interface ContentItem {
  title: string;
  description: string;
  imageSrc?: string; // Optional image source
  alt?: string; // Optional alt text
}

export const sidebarItems = [
  "საქართველოს საზღვრები",
  "საქართველოს მთები",
  "საქართველოს კლიმატი",
  "საქართველოს ფართობი",
  "საქართველოს წყლის რესურსი",
  "საქართველოს მდინარეები",
  "საქართველოს ტბები და ჩანჩქერები",
  "ფრინველების სამიგრაციო გზები",
];

export const contentItems: ContentItem[] = [
  {
    title: "საქართველოს საზღვრები",
    description:
      "საქართველოს ოთხ ქვეყანასთან აქვს სახმელეთო საზღვარი: ჩრდილოეთით - რუსეთის ფედერაციასთან, სამხრეთით – სომხეთსა და თურქეთთან, აღმოსავლეთით და სამხრეთ-აღმოსავლეთით – აზერბაიჯანთან. \n\n დასავლეთიდან კი შავი ზღვა ესაზღვრება, საიდანაც შავიზღვისპირეთის ქვეყნებს უკავშირდება;  ბოსფორისა და დარდანელის სრუტეებით - ხმელთაშუა ზღვის აუზის ქვეყნებს; გიბრალტარის სრუტით - ატლანტის ოკეანეს და მთელ მსოფლიოს. \n\n საქართველოს გეოგრაფიული ცენტრია ხარაგაულის რაიონში, ტყეებით დაფარულ უზარმაზარ მთებში ჩაფლული სოფელი ხევი.",
    imageSrc: "",
    alt: "Mountains",
  },
  {
    title: "საქართველოს მთები",
    description:
      "საქართველოს ტერიტორიის ორი მესამედი მთებით არის დაფარული. დიდი კავკასიონის უმაღლესი მწვერვალებია: შხარა (5203 მ) -  ერთ-ერთი ურთულესია ევროპაში, ყაზბეგი (5054 მ), ჯანღა (5078 მ), თეთნულდი (4852 მ) და უშბა (4700 მ). სამხრეთით მდებარე მცირე კავკასიონის ქედი უფრო დაბალია და აქ ყველაზე მაღალი ადგილი დიდი აბულის მწვერვალია – 3301 მ ზღვის დონიდან. \n\n სხვა სირთულის ეს მწვერვალები საინტერესოა როგორც ალპინისტებისთვის, მეკლდეურებისა და მთამსვლელებისთვის, ისე მოყვარული მოლაშქრეებისთვის.",
    imageSrc: "/flags/1.webp",
    alt: "River",
  },
  {
    title: "საქართველოს კლიმატი",
    description:
      "საქართველოში სუბტროპიკული კლიმატური სარტყლის ჰავის თითქმის ყველა ტიპი გვხვდება - ნოტიო სუბტროპიკული, ზომიერად ნოტიო, ზომიერად მშრალი და მშრალი კონტინენტური. ამას განაპირობებს საქართველოს მდებარეობა სუბტროპიკული და ზომიერი კლიმატური სარტყლების მიჯნაზე, ასევე ბუნებრივი ბარიერები, რომლებსაც კავკასიონის ქედები და შავი ზღვა ქმნის.\n\n საქართველოში მოგზაურობისას საინტერესოა ის, რომ დასავლეთ საქართველოს ბარის კლიმატი მნიშვნელოვნად განსხვავდება აღმოსავლეთ საქართველოს ბარისაგან, დიდი კავკასიონის მთიანეთის ბუნებრივი პირობები კი - საქართველოს სამხრეთ მთიანეთისგან. ეს კი, ქვეყნის ფართობის გათვალისწინებით, იმას ნიშნავს, რომ საქართველოში შესაძლებელია, რამდენიმე საათში სრულიად განსხვავებულ კლიმატურ პირობებში იმოგზაურო. ",
    imageSrc: "/flags/2.webp",
    alt: "Lake",
  },
  {
    title: "საქართველოს ფართობი",
    description:
      "საქართველოს ტერიტორიის ფართობი ამჟამად 69,700 კვ.კმ-ია. ქვეყნის უკიდურესი ჩრდილოეთი წერტილი აფხაზეთში, მდინარე ფსოუს ნაპირზე, სოფელ აიბგასთანაა, სამხრეთით - მთა ოკუზდაღთან (სომხეთის საზღვართან), დასავლეთით - დაბა ლესელიძესთან (მდინარე ფსოუს შესართავი) და აღმოსავლეთით - მდინარეების აგრიჩაისა და ალაზნის შეერთების ადგილზე.", // Empty description example
    imageSrc: "/flags/3.webp",
    alt: "Beach",
  },
  {
    title: "საქართველოს წყლის რესურსი",
    description:
      "საქართველო ევროპაში ერთ-ერთი წყალუხვი ქვეყანაა, ერთ მოსახლეზე განახლებადი წყლის რესურსების ჯამით. \n\n ქვეყნის ტერიტორიაზე 860-ამდე მტკნარი ტბა, 26 000-ზე მეტი მდინარე და 43 ხელოვნური წყალსაცავია. ისინი საინტერესოა სხვადასხვა ტურისტული აქტივობისთვის. \n\n ხელოვნური წყალსაცავებიდან „ენგურჰესის“ თაღოვანი კაშხალი გამოირჩევა, რომელიც წლების განმავლობაში მსოფლიოში ყველაზე მაღალი ჰიდრონაგებობა იყო", // Empty description example
    imageSrc: "/flags/4.webp",
    alt: "Beach",
  },
  {
    title: "საქართველოს მდინარეები",
    description:
      "ამ პატარა ქვეყანაში იმდენი მდინარეა, რომ მათი სიგრძე, ჯამში, დედამიწის გარშემოწერილობას აღემატება - საქართველოს მდინარეების საერთო სიგრძე 60 ათასი კილომეტრია (ეკვატორის სიგრძე - 40 075 კმ). \n\n დასავლეთ საქართველოს მდინარეები (ქვეყნის მდინარეების 75%-ზე მეტი) შავ ზღვაში ჩადის; \n\n აღმოსავლეთ საქართველოს მდინარეები კი, თითქმის ყველა, მტკვარს უერთდება, რომელიც აზერბაიჯანის ტერიტორიის გავლით კასპიის ზღვაში ჩაედინება. მტკვარი (1384 კმ ) სამხრეთ კავკასიაში ყველაზე გრძელი მდინარეა. ის თურქეთის მთებში იღებს სათავეს. მისი სიგრძე საქართველოს ტერიტორიაზე 383 კმ-ია. \n\n საქართველოს ყველაზე გრძელი მდინარე ალაზანია (406 კმ), შემდეგი ადგილი იორსა (343 კმ) და რიონს (327 კმ) უკავია. \n\n გაზაფხულზე მდინარეთა უმეტესობა თოვლის ნადნობი წყლებით საზრდოობს, ზაფხულსა და ზამთარში კი - მიწისქვეშა წყლებით. \n\n საქართველოს მდინარეების უმეტესობა სათავეს მთებში იღებს და შემდეგ ვიწრო ხეობებში სწრაფად მიედინება. ეს კი საუკეთესო პირობებს ქმნის ჯომარდობისა და კაიაკინგისთვის. სპორტის ამ სახეობებისთვის ყველაზე პოპულარული მტკვარი და არაგვია.", // Empty description example
    imageSrc: "/flags/5.webp",
    alt: "Beach",
  },
  {
    title: "საქართველოს ტბები და ჩანჩქერები",
    description:
      "საქართველო მდიდარია ტბებითა და ჩანჩქერებით, რომლებიც ზამთარ-ზაფხულ მაგნიტივით იზიდავს ბუნებაში ლაშქრობის, თევზაობის, კანიონინგის მოყვარულებს. ტბების მიმდებარედ შესაძლებელია დაგეგმო საფეხმავლო, საავტომობილო, ველო- და საცხენოსნო ტურები.\n\n ტბების უმეტესობა მცირე კავკასიონის ფერდობებზე, სამცხე-ჯავახეთშია თავმოყრილი. \n\n მაგალითად, სამცხე-ჯავახეთის მხარეშია სარკის ფართობით ყველაზე დიდი და თევზით მდიდარი ფარავნის ტბა (37,5 კმ², ზღვის დონიდან 2073 მ) და კარწახის ტბა (26,3 კმ², ზღვის დონიდან  1799 მ). \n\n დასავლეთ საქართველოში, კოლხეთის დაბლობზე კი შეგიძლია ნავებით ან კატერით გაისეირნო პალიასტომის ტბაზე, რომელიც საქართველოს ტბებს შორის ზედაპირის ფართობით სიდიდით მესამეა (18,2 კმ², ზღვის დონიდან 0.3 მ დაბლა). ", // Empty description example
    imageSrc: "/flags/6.webp",
    alt: "Beach",
  },
  {
    title: "ფრინველების სამიგრაციო გზები",
    description:
      "საქართველო საერთაშორისო თვალსაზრისით უმნიშვნელოვანესი გეოგრაფიული არეალია გადამფრენი ფრინველებისთვისაც. \n\n მაგალითად, აჭარაში, შავი ზღვის სანაპირო ზოლზე, აგვისტოდან ოქტომბრამდე მილიონზე მეტი გადამფრენი ფრინველი აღირიცხება. აღმოსავლეთ შავი ზღვის სამიგრაციო დერეფანი - ე.წ. „ბათუმის სამიგრაციო ძაბრი“, გიბრალტართან, მესინა-სიცილიასთან და ბოსფორთან ერთად, ევროპის ოთხ ყველაზე მნიშვნელოვან ადგილად მოიხსენიება. \n\n ფრინველების დასვენებისთვის და, შესაბამისად, მათზე დაკვირვებისთვის საუკეთესო ადგილებია სტეფანწმინდა, ვაშლოვანის დაცული ტერიტორია, მდინარეების - ალაზნისა და ივრის ქვემო წელი და ჯავახეთის ზეგანი.", // Empty description example
    imageSrc: "/flags/7.webp",
    alt: "Beach",
  },
];

export interface Section {
  id: string;
  content: { ka: string; en: string };
  image?: string;
  image1?: string;
  image2?: string;
  image3?: string;
  title?: { ka: string; en: string };
  description?: { ka: string; en: string };
  buttonText?: { ka: string; en: string };
  section02Images?: {
    src: string;
    alt: { ka: string; en: string };
    text: { ka: string; en: string };
  }[];
  geographyOfGeorgia?: {
    image: string;
    title: { ka: string; en: string };
    description: { ka: string; en: string };
  }[];
}

export const sections: Section[] = [
  {
    id: "start",
    content: { ka: "აქ არის Start სექცია", en: "This is the Start section" },
    image1: "/flags/image1.webp",
    image2: "/flags/image2.webp",
    image3: "/flags/clouds.webp",
  },
  {
    id: "section-01",
    content: { ka: "აქ არის 01 სექცია", en: "This is Section 01" },
    image1: "/flags/image2.webp",
    image2: "/flags/image3.webp",
    image3: "/flags/clouds.webp",
    title: { ka: "საქართველოს \n გეოგრაფია", en: "Geography of \n Georgia" },
    description: {
      ka: "საქართველო ევროპისა და აზიის გზაგასაყარზე, კავკასიაში, შავი ზღვის სანაპიროზე მდებარეობს. ის საუკუნეების განმავლობაში ასრულებდა ცივილიზაციების დამაკავშირებელ ფუნქციას და სწორედ აქ გადიოდა „აბრეშუმის გზაც“ - მსოფლიოს უმსხვილესი სავაჭრო არტერია.",
      en: "Georgia is located at the crossroads of Europe and Asia, in the Caucasus, on the Black Sea coast. For centuries, it has served as a bridge between civilizations, and the 'Silk Road'—the world's largest trade route—passed through here.",
    },
    buttonText: { ka: "გაიგე მეტი", en: "Learn More" },
    geographyOfGeorgia: [
      {
        image: "/flags/blabla.webp",
        title: { ka: "საქართველოს გეოგრაფია", en: "Geography of Georgia" },
        description: {
          ka: "საქართველო პატარა, ლამაზი ქვეყანაა, მრავალფეროვანი ბუნებითა და რბილი კლიმატით, რასაც საინტერესო გეოგრაფიული მდებარეობა განაპირობებს. ჩრდილოეთიდან და სამხრეთიდან ოროგრაფიული საზღვრები იცავს – ჩრდილოეთით დიდი კავკასიონის ქედი თავისი მყინვარებით.",
          en: "Georgia is a small, beautiful country with diverse nature and a mild climate, shaped by its unique geographical location. It is protected by orographic borders— the Greater Caucasus Range with its glaciers in the north.",
        },
      },
    ],
  },
  {
    id: "section-02",
    content: { ka: "აქ არის 02 სექცია", en: "This is Section 02" },
    section02Images: [
      {
        src: "/flags/spring.webp",
        alt: { ka: "გაზაფხული", en: "Spring" },
        text: { ka: "გაზაფხული", en: "Spring" },
      },
      {
        src: "/flags/summer.webp",
        alt: { ka: "ზაფხული", en: "Summer" },
        text: { ka: "ზაფხული", en: "Summer" },
      },
      {
        src: "/flags/autumn.webp",
        alt: { ka: "შემოდგომა", en: "Autumn" },
        text: { ka: "შემოდგომა", en: "Autumn" },
      },
      {
        src: "/flags/winter.webp",
        alt: { ka: "ზამთარი", en: "Winter" },
        text: { ka: "ზამთარი", en: "Winter" },
      },
    ],
    geographyOfGeorgia: [
      {
        image: "/flags/bla2.webp",
        title: { ka: "სეზონურობა საქართველოში", en: "Seasonality in Georgia" },
        description: {
          ka: "უკვე იცი, რომ ევროპისა და აზიის გზაგასაყარზე, კავკასიონის ქედის ქვეშ, შავი ზღვის სანაპიროზე მდებარეობს პატარა ქვეყანა - საქართველო, რომელიც მდიდარი ისტორიის, არაჩვეულებრივი ბუნების, თავგადასავლების დიდი შესაძლებლობებისა და უგემრიელესი სამზარეულოს ქვეყანაა!",
          en: "You already know that at the crossroads of Europe and Asia, under the Caucasus Mountains, on the Black Sea coast, lies a small country—Georgia, a land of rich history, extraordinary nature, great adventure opportunities, and delicious cuisine!",
        },
      },
    ],
  },
  {
    id: "section-03",
    content: { ka: "აქ არის 03 სექცია", en: "This is Section 03" },
    image: "/flags/doqi.png",
    geographyOfGeorgia: [
      {
        image: "/flags/image03.webp",
        title: {
          ka: "საქართველო როგორც ღვინის აკვანი",
          en: "Georgia as the Cradle of Wine",
        },
        description: {
          ka: "ქართული ღვინო 8000 წლისაა - იმ დროს უკვე იცოდნენ ქართველებმა ქვევრის უნიკალური ტექნოლოგია, რომელიც დღეს მსოფლიოს ერთ-ერთ მოწინავე მეთოდად იქცა. იცით, ეს ციფრები რას ნიშნავს? თუ გაინტერესებთ, ღვინის გზას გავუდგეთ…",
          en: "Georgian wine is 8,000 years old—back then, Georgians already knew the unique qvevri technology, which has become one of the world’s leading methods today. Curious about what these numbers mean? Let’s embark on the wine journey…",
        },
      },
    ],
  },
];

// space page
export const navItems: NavItem[] = [
  {
    id: "why-georgia",
    name: "რატომ საქართველო",
    nameEn: "Why Georgia",
    href: "/why-georgia",
    details: [
      {
        title: "ქართული კულტურის მიმოხილვა",
        titleEn: "Overview of Georgian Culture",
        items: [
          {
            text: "უნიკალური ქართული ფოლკლორი",
            textEn: "Unique Georgian Folklore",
            href: "/why-georgia/georgian-folklore",
          },
          {
            text: "მსოფლიო მნიშვნელობის მემკვიდრეობა",
            textEn: "World Heritage Sites",
            href: "/why-georgia/heritage-world-importance",
          },
          {
            text: "უნიკალური ქართული ანბანი",
            textEn: "Unique Georgian Alphabet",
            href: "/why-georgia/unique-georgian-alphabet",
          },
          {
            text: "შავი ზღვის სანაპიროები",
            textEn: "Black Sea Coast",
            href: "/why-georgia/black-sea-coast",
          },
          {
            text: "საქართველოს ისტორია",
            textEn: "History of Georgia",
            href: "/why-georgia/history-of-georgia",
          },
          {
            text: "ტურიზმის სტატისტიკა საქართველოში",
            textEn: "Tourism Statistics in Georgia",
            href: "/why-georgia/tourism-statistics-in-georgia",
          },
        ],
      },
      {
        title: "ქართული ხელოვნება",
        titleEn: "Georgian Arts",
        items: [
          {
            text: "ქართული კულტურა",
            textEn: "Georgian Culture",
            href: "/why-georgia/georgian-culture",
          },
          {
            text: "ქართული ლიტერატურა",
            textEn: "Georgian Literature",
            href: "/why-georgia/georgian-literature",
          },
          {
            text: "ქართული ცეკვა",
            textEn: "Georgian Dance",
            href: "/why-georgia/georgian-dance",
          },
          {
            text: "უგემრიელესი ქართული სამზარეულო",
            textEn: "Delicious Georgian Cuisine",
            href: "/why-georgia/delicious-georgian-cuisine",
          },
          {
            text: "საქართველოს ბუნება",
            textEn: "Nature of Georgia",
            href: "/why-georgia/nature-of-georgia",
          },
          {
            text: "საქართველოს მთავარი ქალაქები",
            textEn: "Georgia's Major Cities",
            href: "/why-georgia/georgias-major-cities",
          },
        ],
      },
      {
        title: "საქართველოს უნიკალურობა",
        titleEn: "Uniqueness of Georgia",
        items: [
          {
            text: "საქართველო როგორც ღვინის აკვანი",
            textEn: "Georgia as the Cradle of Wine",
            href: "/why-georgia/georgia-as-the-cradle-of-wine",
          },
          {
            text: "პირველი ევროპული ცივილიზაცია",
            textEn: "First European Civilization",
            href: "/why-georgia/first-european-civilization",
          },
          {
            text: "თავგადასავლები საქართველოში",
            textEn: "Adventures in Georgia",
            href: "/why-georgia/adventures-in-georgia",
          },
          {
            text: "ევროპის ყველაზე მაღალი დასახლებული პუნქტი",
            textEn: "Europe's Highest Inhabited Settlement",
            href: "/why-georgia/high-altitude-settlement",
          },
          {
            text: "სეზონურობა საქართველოში",
            textEn: "Seasonality in Georgia",
            href: "/why-georgia/seasonality-in-georgia",
          },
          {
            text: "საქართველოს გეოგრაფია",
            textEn: "Geography of Georgia",
            href: "/why-georgia/geography-of-georgia",
          },
        ],
      },
      {
        title: "აღმოაჩინე საქართველო",
        titleEn: "Discover Georgia",
        image: "/flags/why-georgia-nature.webp",
        items: [{ text: "", href: "/why-georgia" }],
      },
    ],
  },
  {
    id: "places",
    name: "ადგილები",
    nameEn: "Destinations",
    href: "/places",
    details: [
      {
        title: "ტოპ რეგიონები",
        titleEn: "Top Regions",
        items: [
          { text: "კახეთი", textEn: "Kakheti", href: "/region/კახეთი" },
          { text: "იმერეთი", textEn: "Imereti", href: "/region/იმერეთი" },
          { text: "აჭარა", textEn: "Adjara", href: "/region/აჭარა" },
          {
            text: "მცხეთა-მთიანეთი",
            textEn: "Mtskheta-Mtianeti",
            href: "/region/მცხეთა-მთიანეთი",
          },
          { text: "რაჭა", textEn: "Racha", href: "/region/რაჭა" },
          {
            text: "შიდა ქართლი",
            textEn: "Shida Kartli",
            href: "/region/შიდა%20ქართლი",
          },
          {
            text: "სამეგრელო-ზემო სვანეთი",
            textEn: "Samegrelo-Zemo Svaneti",
            href: "/region/სამეგრელო-ზემო%20სვანეთი",
          },
        ],
      },
      {
        title: "ტოპ ქალაქები",
        titleEn: "Top Cities",
        items: [
          { text: "ქუთაისი", textEn: "Kutaisi", href: "/places/kutaisi" },
          { text: "ბათუმი", textEn: "Batumi", href: "/places/batumi" },
          { text: "თბილისი", textEn: "Tbilisi", href: "/places/tbilisi" },
          {
            text: "სტეფანწმინდა",
            textEn: "Stepantsminda",
            href: "/places/stepanwminda",
          },
          { text: "მესტია", textEn: "Mestia", href: "/places/mestia" },
          { text: "მცხეთა", textEn: "Mtskheta", href: "/places/mcxeta" },
          { text: "ბორჯომი", textEn: "Borjomi", href: "/places/borjomi" },
        ],
      },
      {
        title: "რეგიონები",
        titleEn: "Regions",
        items: [
          {
            text: "",
            textEn: "",
            href: "",
            renderComponent: () => <GeorgianMap activeRegion={""} />,
          },
        ],
      },
    ],
  },
  {
    id: "sights",
    name: "სანახაობები",
    nameEn: "Things To Do",
    href: "/sights",
    details: [
      {
        title: "ტოპ კატეგორიები",
        titleEn: "Top Categories",
        items: [
          {
            text: "ხელოვნება და კულტურა",
            textEn: "Art and Culture",
            href: "/sights/arts-culture",
          },
          {
            text: "კულტურული ძეგლები",
            textEn: "Cultural Monuments",
            href: "/sights/cultural-monuments",
          },
          {
            text: "სამზარეულო და ღვინო",
            textEn: "Cuisine and Wine",
            href: "/sights/food-wine",
          },
          {
            text: "გამაჯანსაღებელი პროცედურები",
            textEn: "Wellness Activities",
            href: "/sights/health-and-wellness",
          },
          {
            text: "საოჯახო სანახაობები",
            textEn: "Family Attractions",
            href: "/sights/david-gareji",
          },
          {
            text: "დასვენება ქალაქში",
            textEn: "City Leisure",
            href: "/sights/city-breaks",
          },
        ],
      },
      {
        title: "ტოპ სანახაობები",
        titleEn: "Top Sights",
        items: [
          {
            text: "გერგეთის სამება",
            textEn: "Gergeti Trinity",
            href: "/sights/bagrati",
          },
          {
            text: "ილია ჭავჭავაძის სახლ-მუზეუმი",
            textEn: "Ilia Chavchavadze House-Museum",
            href: "/sights/samtskhe",
          },
          {
            text: "ხერთვისის ციხე",
            textEn: "Khertvisi Fortress",
            href: "/sights/paravani",
          },
          {
            text: "საქართველოს ეროვნული მუზეუმი",
            textEn: "National Museum of Georgia",
            href: "/sights/chkhorotsku",
          },
        ],
      },
      {
        title: "თვის სანახაობები",
        titleEn: "Sights of the Month",
        items: [
          {
            text: "",
            textEn: "",
            href: "/card/Svetitskhoveli",
            image: "/flags/svetitskhoveli-cathedral-gnta.webp",
          },
          {
            text: "",
            textEn: "",
            href: "/dsdsdsdsd",
            image: "/flags/alaverdi-gnta.webp",
          },
        ],
      },
    ],
  },
  {
    id: "nature-adventures",
    natureName: "ბუნება და თავგადასავლები",
    natureNameEn: "Nature and Adventures",
    href: "/nature-adventures",
    details: [
      {
        title: "ტოპ კატეგორიები",
        titleEn: "Top Categories",
        items: [
          {
            text: "ზამთრის თავგადასავლები",
            textEn: "Winter Adventures",
            href: "/nature-adventures/winter-adventures",
          },
          {
            text: "ბუნების ძეგლები",
            textEn: "Natural Wonders",
            href: "/nature-adventures/natural-wonders",
          },
          {
            text: "საზაფხულო აქტივობები",
            textEn: "Summer Adventures",
            href: "/nature-adventures/summer-adventures",
          },
          { text: "მთები", textEn: "Mountains", href: "/nature/kinchkha" },
          { text: "ტბები", textEn: "Lakes", href: "/nature/dedoflis-tsqaro" },
          {
            text: "ბუნების ძეგლები",
            textEn: "Natural Monuments",
            href: "/nature/khadi",
          },
        ],
      },
      {
        title: "ტოპ სანახაობები",
        titleEn: "Top Attractions",
        items: [
          {
            text: "ოკაცეს კანიონი",
            textEn: "Okatse Canyon",
            href: "card/Martvili%20Canyon",
          },
          {
            text: "აბუდელაურის ტბები",
            textEn: "Abudelauri Lakes",
            href: "/card/Abudelauri%20Colored%20Lakes",
          },
          {
            text: "სათაფლიის მღვიმე და ნაკრძალი",
            textEn: "Sataplia Cave",
            href: "/card/Sataplia%20Cave",
          },
          {
            text: "გოგნის წმ. გიორგის ეკლესია",
            textEn: "St. George's Church in Gogni",
            href: "/card/St.%20George's%20Church%20in%20Gogni",
          },
          {
            text: "ვარძია",
            textEn: "Vardzia",
            href: "/card/Vardzia",
          },
          {
            text: "ხვამლის მთა",
            textEn: "Khvamli Mountain",
            href: "/card/Khvamli%20Mountain",
          },
        ],
      },
      {
        title: "თვის სანახაობები",
        titleEn: "Attractions of the Month",
        items: [
          {
            text: "",
            textEn: "",
            href: "/sdsd",
            image: "/flags/svetitskhoveli-cathedral-gnta.webp",
          },
          {
            text: "",
            textEn: "",
            href: "/dsdsdsdsd",
            image: "/flags/alaverdi-gnta.webp",
          },
        ],
      },
    ],
  },
  {
    id: "useful-information",
    name: "სასარგებლო ინფორმაცია",
    nameEn: "Useful Information",
    href: "/info",
    details: [
      {
        title: "ძირითადი ინფორმაცია",
        titleEn: "Basic Information",
        items: [
          {
            text: "საქართველოში ვიზიტი",
            textEn: "Visiting Georgia",
            href: "/info",
          },
          {
            text: "ადგილობრივი ტრანსპორტი",
            textEn: "Local Transport",
            href: "/info/local-transport",
          },
          {
            text: "რეგიონალური ტრანსპორტი",
            textEn: "Regional Transport",
            href: "/info/regional-transport",
          },
          {
            text: "ადგილობრივი ტრანსპორტის გაქირავება",
            textEn: "Local Vehicle Rental",
            href: "/info/local-vehicle-rental",
          },
          {
            text: "ამინდი და ადგილობრივი კლიმატი",
            textEn: "Weather and Local Climate",
            href: "/info/weather-local-climate",
          },
          {
            text: "ხშირად დასმული კითხვები",
            textEn: "Frequently Asked Questions",
            href: "/info/frequently-asked-questions",
          },
        ],
      },
      {
        title: "საჭირო ინფორმაცია საქართველოზე",
        titleEn: "Essential Information about Georgia",
        items: [
          {
            text: "შიდა ფრენები",
            textEn: "Domestic Flights",
            href: "/info/Domestic%20Flights",
          },
          {
            text: "საინფორმაციო",
            textEn: "Information",
            href: "/info/Information",
          },
          {
            text: "მგზავრობის დრო და მანძილი",
            textEn: "Travel Time and Distance",
            href: "/info/Travel%20Time%20and%20Distance",
          },
          {
            text: "საბაჟო",
            textEn: "Customs",
            href: "/info/Customs",
          },
        ],
      },
      {
        title: "პოპულარული სტატიები",
        titleEn: "Popular Articles",
        items: [
          {
            text: "",
            textEn: "",
            href: "/sdsd",
            image: "/flags/svetitskhoveli-cathedral-gnta.webp",
          },
          {
            text: "",
            textEn: "",
            href: "/dsdsdsdsd",
            image: "/flags/alaverdi-gnta.webp",
          },
        ],
      },
    ],
  },
];

// constants/data/data.ts
export interface ServiceItem {
  id: number;
  title: { ka: string; en: string };
  description: { ka: string; en: string };
  image: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 1,
    title: { ka: "კრაფტ ჰაუსი", en: "Craft House" },
    description: { ka: "ღვინო და გასტრონომია", en: "Wine and Gastronomy" },
    image: "/space/craft.webp",
  },
  {
    id: 2,
    title: { ka: "ტაბერნე გურიაში-აცანა", en: "Tavern Gurian-Atsana" },
    description: { ka: "ღვინო და გასტრონომია", en: "Wine and Gastronomy" },
    image: "/space/acana.webp",
  },
  {
    id: 3,
    title: { ka: "სასტუმრო პანორამა ლისი", en: "Panorama Lisi Hotel" },
    description: {
      ka: "განთავსების ობიექტები",
      en: "Accommodation Facilities",
    },
    image: "/space/lisi.webp",
  },
  {
    id: 4,
    title: { ka: "ლელო ინნ", en: "Lelo Inn" },
    description: {
      ka: "განთავსების ობიექტები",
      en: "Accommodation Facilities",
    },
    image: "/space/inn.webp",
  },
  {
    id: 5,
    title: { ka: "1740 სასტუმრო", en: "1740 Hotel" },
    description: {
      ka: "განთავსების ობიექტები",
      en: "Accommodation Facilities",
    },
    image: "/space/1740.webp",
  },
  {
    id: 6,
    title: { ka: "იპოდრუმი", en: "Hippodrome" },
    description: {
      ka: "განთავსების ობიექტები",
      en: "Accommodation Facilities",
    },
    image: "/space/opodrumi.webp",
  },
  {
    id: 7,
    title: { ka: "ლუხუმიჩის მარანი", en: "Lukhumichis Marani" },
    description: { ka: "ღვინო და გასტრონომია", en: "Wine and Gastronomy" },
    image: "/space/mariani.webp",
  },
  {
    id: 8,
    title: { ka: "როშე დუდაური", en: "Roshe Dudaura" },
    description: {
      ka: "განთავსების ობიექტები",
      en: "Accommodation Facilities",
    },
    image: "/space/rose.webp",
  },
  {
    id: 9,
    title: { ka: "ვინერა კახეთი", en: "Vinera Kakheti" },
    description: { ka: "ღვინო და გასტრონომია", en: "Wine and Gastronomy" },
    image: "/space/vineria.webp",
  },
  {
    id: 10,
    title: { ka: "მარანი ნატურალისტი", en: "Naturalist Marani" },
    description: { ka: "ღვინო და გასტრონომია", en: "Wine and Gastronomy" },
    image: "/space/marani.webp",
  },
  {
    id: 11,
    title: { ka: "სასტუმრო ლოპტი ბაკურიანში", en: "Lopti Hotel in Bakuriani" },
    description: {
      ka: "განთავსების ობიექტები",
      en: "Accommodation Facilities",
    },
    image: "/space/sastumro.webp",
  },
  {
    id: 12,
    title: {
      ka: "სასტუმრო თელა და მეღვინეობა მარელი",
      en: "Tela Hotel and Mareli Winery",
    },
    description: {
      ka: "განთავსების ობიექტები",
      en: "Accommodation Facilities",
    },
    image: "/space/mareli.webp",
  },
];
// info page interface

export interface AdditionalInfo1 {
  description?: { ka: string; en: string };
  image?: string;
  additionalDescription: { ka: string; en: string };
  title?: { ka: string; en: string };
}

export interface Service {
  image: string;
  title: { ka: string; en: string };
  description: { ka: string; en: string };
  details: { ka: string; en: string };
  additionalInfo?: AdditionalInfo1[];
}

export const services: Service[] = [
  {
    image: "/icons/minivans.webp",
    title: {
      ka: "საბაჟო",
      en: "Customs",
    },
    description: {
      ka: "საქართველოს სხვადასხვა კუთხეში 20 სასაზღვრო გამშვები პუნქტი მოქმედებს და მათ გასავლელად აუცილებელია იქონიო პასპორტი ან ID ბარათი.",
      en: "There are 20 border checkpoints operating in various parts of Georgia, and a passport or ID card is required to pass through them.",
    },
    details: {
      ka: "გაიგე მეტი",
      en: "Learn More",
    },
    additionalInfo: [
      {
        description: {
          ka: "საქართველოს სხვადასხვა კუთხეში 20 სასაზღვრო გამშვები პუნქტი მოქმედებს და მათ გასავლელად აუცილებელია იქონიო პასპორტი ან ID ბარათი.აჭარაში სამი საბაჟო პუნქტია: „სარფის“ საავტომობილო საბაჟო გამშვები პუნქტი, „ბათუმის პორტი“ და „ბათუმის აეროპორტი“. სამივე მათგანი მგზავრთა ნაკადის მიღება/გაშვებას ემსახურება. საბაჟოებია, აგრეთვე, ფოთის პორტში; სენაკსა და ქუთაისში საბაჟო პუნქტები მოქმედებს აეროპორტებში.",
          en: "There are 20 border checkpoints operating in various parts of Georgia, and a passport or ID card is required to pass through them. In Adjara, there are three customs checkpoints: 'Sarpi' road border checkpoint, 'Batumi Port,' and 'Batumi Airport.' All three serve the flow of passengers. There are also customs checkpoints at Poti Port; in Senaki and Kutaisi, customs operate at the airports.",
        },
        image:
          "https://storage.georgia.travel/images/custom-transport-customs-2.webp",
        additionalDescription: {
          ka: "საქართველოს საზღვარს ყველაზე ხშირად თბილისის საერთაშორისო აეროპორტიდან კვეთენ. ტურისტების დიდი ნაკადი შემოდის, აგრეთვე, ლარსის გამშვები პუნქტიდან. ახალქალაქის მხრიდან საქართველოში შემოსვლა კარწახისა და კარწახი-ახალქალაქის საბაჟოებიდან არის შესაძლებელი. ნინოწმინდის მუნიციპალიტეტიდან სოფელ სამების ტერიტორიაზე ნინოწმინდის საბაჟო გამშვები პუნქტია განთავსებული. ადიგენში კი ვალეს საბაჟოა. კახეთში დედოფლისწყაროსა და ლაგოდეხის მუნიციპალიტეტებში ორი პუნქტი - „სამთაწყარო“ და „ლაგოდეხია“. დმანისში - „გუგუთის“, მარნეულში კი „ახკერპის“ საბაჟოებია. მარნეულში „სადახლოს საავტომობილო“ და სარკინიგზო საბაჟოები ფუნქციონირებს, აქვეა ე.წ. „წითელი ხიდის“ საბაჟოც; გარდაბანში „მტკვრისა“ და „გარდაბნის“ საბაჟოებია. \n\n საქართველოს ტერიტორიაზე შემოსვლა ყველა ჩამოთვლილი საბაჟოდანაა შესაძლებელი. ტურისტი, რომელიც საქართველოში მოგზაურობას გეგმავს და ცხოველით, ან გარკვეული რაოდენობის ნაღდი ფულით აპირებს საზღვრის კვეთას, თან აქვს მედიკამენტი, რომელსაც აუცილებლად საჭიროებს, განსაკუთრებული ნივთის შემოტანას აპირებს, ან ტვირთის გადაზიდვა ესაჭიროება, უმჯობესია, გაეცნოს საქართველოს შემოსავლების სამსახურის ოფიციალურ პორტალს https://www.rs.ge/, სადაც დეტალურად არის განმარტებული ყველა საკითხი და პროცედურა, რაც საბაჟოს გავლის პროცედურას გაუმარტივებს. \n\n რაც შეეხება Tax Free-ს და Duty Free-ს, საქართველოში ორივე ამ მომსახურებით სარგებლობას შეძლებ. Tax Free-ის შემთხვევაში, საბაჟოს ოფიცერს მიმართავ და შესაბამის დოკუმენტს წარუდგენ. Duty Free-სთვის შესაბამისი ზონებია მოწყობილი თბილისის, ბათუმისა და ქუთაისის აეროპორტებში, აგრეთვე, „წითელ ხიდზე”, სადახლოს საავტომობილო, ვალეს, სარფის, კარწახის, ყაზბეგის საბაჟოებზე.",
          en: "Georgia’s border is most frequently crossed via Tbilisi International Airport. A large flow of tourists also enters through the Larsi checkpoint. Entry from the Akhalkalaki side is possible through the Kartsakhi and Kartsakhi-Akhalkalaki customs points. In the Ninotsminda municipality, the Ninotsminda customs checkpoint is located in the village of Sameba. In Adigeni, there is the Vale customs point. In Kakheti, the Dedoplistskaro and Lagodekhi municipalities have two checkpoints: 'Samtatskaro' and 'Lagodekhi.' In Dmanisi, there is the 'Guguti' customs point, and in Marneuli, the 'Akhkerpi' customs point. Marneuli also has the 'Sadakhlo' road and railway customs points, as well as the so-called 'Red Bridge' customs point; in Gardabani, there are the 'Mtkvari' and 'Gardabani' customs points. \n\n Entry to Georgia is possible through all the listed customs points. A tourist planning to travel to Georgia with a pet, a certain amount of cash, necessary medication, special items, or requiring cargo transportation should visit the official portal of the Georgian Revenue Service at https://www.rs.ge/, where all issues and procedures are explained in detail to facilitate the customs process. \n\n Regarding Tax Free and Duty Free, both services are available in Georgia. For Tax Free, you can approach a customs officer and present the relevant documents. Duty Free zones are available at Tbilisi, Batumi, and Kutaisi airports, as well as at the 'Red Bridge,' Sadakhlo road, Vale, Sarpi, Kartsakhi, and Kazbegi customs points.",
        },
      },
    ],
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png",
    title: {
      ka: "მოტოციკლეტების დაჯავშნა",
      en: "Motorcycle Booking",
    },
    description: {
      ka: "ალბათ უკვე იცი, რომ საქართველოში ვერ მოიწყენ და აქ შენთვის საინტერესო უამრავი თავგადასავალი შეგიძლია აღმოაჩინო. როგორი ინტერესებიც არ უნდა გქონდეს და რაც არ უნდა მოგწონდეს, ეს ქვეყანა ყველა მიმართულებით შემოგთავაზებს აქტივობებს, მოგხიბლავს მრავალფეროვანი შესაძლებლობებით და დაუვიწყარ ადგილებში გამოგზაურებს.",
      en: "You probably already know that you won't get bored in Georgia, and here you can discover countless exciting adventures. Whatever your interests or preferences, this country offers activities in every direction, captivates with diverse opportunities, and takes you to unforgettable places.",
    },
    details: {
      ka: "გაიგე მეტი",
      en: "Learn More",
    },
    additionalInfo: [
      {
        description: {
          ka: "ალბათ უკვე იცი, რომ საქართველოში ვერ მოიწყენ და აქ შენთვის საინტერესო უამრავი თავგადასავალი შეგიძლია აღმოაჩინო. როგორი ინტერესებიც არ უნდა გქონდეს და რაც არ უნდა მოგწონდეს, ეს ქვეყანა ყველა მიმართულებით შემოგთავაზებს აქტივობებს, მოგხიბლავს მრავალფეროვანი შესაძლებლობებით და დაუვიწყარ ადგილებში გამოგზაურებს.",
          en: "You probably already know that you won't get bored in Georgia, and here you can discover countless exciting adventures. Whatever your interests or preferences, this country offers activities in every direction, captivates with diverse opportunities, and takes you to unforgettable places.",
        },
        additionalDescription: {
          ka: "თუ თავგადასავლები გიზიდავს, მაშინ ჩათვალე, რომ გაგიმართლა, რადგან ხალხმრავალ თბილისში, მზიან ბათუმში, კოპწია თელავში, მაღალმთიან მესტიაში, ყაზბეგსა თუ სხვა ქალაქებში, მრავლად არის ადგილები, სადაც მოტოციკლეტით გასეირნება შეგიძლია.\n\n საქართველოში კარგად არის აწყობილი მოტოციკლეტების გაქირავების სერვისი და ადგილობრივ კომპანიებს გამართული მოტოები ჰყავთ. შეგიძლია საძიებო სისტემაში „მოტოციკლეტების გაქირავება“ ჩაწერო, კომპანია აირჩიო და შენთვის სასურველი მოტო იქირაო, თანაც სრული აღჭურვილობით. \n\n მოტოციკლეტის გაქირავების ფასი დამოკიდებულია არჩეულ მოდელზე, ქირაობის ხანგრძლივობასა და გასავლელ მანძილზე. ასე რომ, თუ შენთვის სასურველი მარშრუტი ჯერ კიდევ არ დაგიგეგმავს, ეს შანსი ხელიდან არ გაუშვა - მოტოციკლით მოგზაურობა საქართველოსნაირ ეგზოტიკურ ქვეყანას კიდევ უფრო მეტ ხიბლს სძენს.",
          en: "If adventures attract you, then consider yourself lucky, as there are plenty of places in bustling Tbilisi, sunny Batumi, quaint Telavi, highland Mestia, Kazbegi, and other cities where you can go for a motorcycle ride.\n\n Motorcycle rental services are well-organized in Georgia, and local companies offer reliable bikes. You can search for 'motorcycle rental' in a search engine, choose a company, and rent the motorcycle you want, complete with full equipment. \n\n The cost of renting a motorcycle depends on the model chosen, the duration of the rental, and the distance to be covered. So, if you haven't planned your desired route yet, don't miss this opportunity—traveling by motorcycle adds even more charm to an exotic country like Georgia.",
        },
      },
    ],
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/1232/1232515.png",
    title: {
      ka: "მანქანების ქირაობა",
      en: "Car Rental",
    },
    description: {
      ka: "ქვეყანაში მოგზაურობისათვის, ტურისტები ხშირად მანქანის ქირაობას ამჯობინებენ. საქართველოში კარგად არის განვითარებული ეს სერვისი. შესაბამისად, მანქანის ქირაობას უპრობლემოდ შეძლებ.",
      en: "For traveling around the country, tourists often prefer to rent a car. This service is well-developed in Georgia, so you can rent a car without any hassle.",
    },
    details: {
      ka: "გაიგე მეტი",
      en: "Learn More",
    },
    additionalInfo: [
      {
        description: {
          ka: "თბილისში ოპერირებენ კომპანიები, რომლებსაც ყველა ტიპის მანქანა ჰყავთ - სედანი, ჯიპი, მინივენი. შეგიძლია საძიებო სისტემაში ჩაწერო „მანქანების გაქირავება საქართველოში“, კომპანია შეარჩიო და სასურველი შეკვეთა გააკეთო. მნიშვნელობა არ აქვს, თბილისში აპირებ ჩასვლას თუ რომელიმე სხვა ქალაქში, კომპანია სასურველ მანქანას იქ დაგახვედრებს, სადაც გჭირდება - აეროპორტი იქნება ეს თუ საქართველოს რომელიმე კუთხე. შესაძლებელია, მანქანა თბილისში აიყვანო, მოგზაურობა ბათუმში დაასრულო და კომპანია ბათუმში ჩაიბარებს შენგან მანქანას.",
          en: "In Tbilisi, there are companies that offer all types of cars—sedans, SUVs, minivans. You can search for 'car rental in Georgia' in a search engine, select a company, and place your desired order. It doesn’t matter if you’re arriving in Tbilisi or another city; the company will deliver the car you want to wherever you need it—be it an airport or any other part of Georgia. It’s also possible to pick up a car in Tbilisi, complete your trip in Batumi, and have the company collect the car from you in Batumi.",
        },
        additionalDescription: { ka: "", en: "" },
        title: {
          ka: "თბილისი",
          en: "Tbilisi",
        },
      },
    ],
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
    title: {
      ka: "შიდა ფრენები",
      en: "Domestic Flights",
    },
    description: {
      ka: "საქართველოს სხვადასხვა კუთხეში სწრაფად რომ მოხვდე, შეგიძლია შიდა ფრენებით ისარგებლო. ამისათვის ნატახტრის აეროდრომს უნდა მიმართო.",
      en: "To quickly reach various parts of Georgia, you can take advantage of domestic flights. For this, you should contact Natakhtari Airfield.",
    },
    details: {
      ka: "გაიგე მეტი",
      en: "Learn More",
    },
    additionalInfo: [
      {
        description: {
          ka: "საქართველოს სხვადასხვა კუთხეში სწრაფად რომ მოხვდე, შეგიძლია შიდა ფრენებით ისარგებლო. ამისათვის ნატახტრის აეროდრომს უნდა მიმართო. თბილისის ცენტრიდან მანქანით 45 წუთის სავალზე მდებარე ნატახტრის აეროდრომი ფრენის მსურველებს ყოველდღე ელის და მათ სხვადასხვა ტიპის მომსახურებას სთავაზობს. ნატახტრიდან რეისები მესტიის, ბათუმისა და ამბროლაურის მიმართულებით ხორციელდება.",
          en: "To quickly reach various parts of Georgia, you can take advantage of domestic flights. For this, you should contact Natakhtari Airfield. Located a 45-minute drive from Tbilisi city center, Natakhtari Airfield welcomes flight enthusiasts daily and offers various types of services. Flights from Natakhtari operate to Mestia, Batumi, and Ambrolauri.",
        },
        additionalDescription: {
          ka: "ორშაბათს, სამშაბათს, ოთხშაბათს, პარასკევსა და კვირას ნატახტრიდან ფრენები მესტიის მიმართულებით ხორციელდება. იმავე დღეებშია შესაძლებელი ფრენა უკან - მესტიიდან ნატახტრამდეც.",
          en: "Flights from Natakhtari to Mestia operate on Mondays, Tuesdays, Wednesdays, Fridays, and Sundays. Return flights from Mestia to Natakhtari are also available on the same days.",
        },
        title: {
          ka: "ფრენები",
          en: "Flights",
        },
        image: "https://storage.georgia.travel/images/internal-flights-2.webp",
      },
    ],
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/3652/3652191.png",
    title: {
      ka: "მგზავრობის დრო და მანძილი",
      en: "Travel Time and Distance",
    },
    description: {
      ka: "საქართველოში მოხვედრას მსოფლიოს ნებისმიერი კუთხიდან მოახერხებ და ეს შესაძლებელია როგორც საჰაერო, ისე სახმელეთო გზით, აგრეთვე, ზღვით.",
      en: "You can reach Georgia from any corner of the world, and this is possible by air, land, or sea.",
    },
    details: {
      ka: "გაიგე მეტი",
      en: "Learn More",
    },
    additionalInfo: [
      {
        description: {
          ka: "ყველაზე სწრაფი, რა თქმა უნდა, საჰაერო გზაა. საქართველოს მიმართულებით ფრენებს არაერთი საერთაშორისო ქართული და უცხოური ავიაკომპანია ახორციელებს თბილისის, ქუთაისისა და ბათუმის მიმართულებით.",
          en: "The fastest way, of course, is by air. Several international Georgian and foreign airlines operate flights to Tbilisi, Kutaisi, and Batumi.",
        },
        title: {
          ka: "საჰაერო გზა",
          en: "Air Travel",
        },
        additionalDescription: {
          ka: "ყველაზე სწრაფი, რა თქმა უნდა, საჰაერო გზაა. საქართველოს მიმართულებით ფრენებს არაერთი საერთაშორისო ქართული და უცხოური ავიაკომპანია ახორციელებს თბილისის, ქუთაისისა და ბათუმის მიმართულებით. \n\n პირდაპირი რეისებით ფრენა შესაძლებელია ევროპისა და აზიის რამდენიმე ქვეყნის ქალაქიდან. რეგულარული რეისები ხორციელდება: ამსტერდამიდან, მიუნხენიდან, ერევნიდან, სტამბოლიდან, რიგიდან, ბაქოდან, კიშინიოვიდან, ტაშკენტიდან, მინსკიდან, დოჰადან და დუბაიდან. \n\n ზაფხულობით, ტურისტების დიდი ნაკადის გამო, შესაძლებელია, სხვადასხვა ევროპული ქალაქიდან დაინიშნოს ჩარტერული რეისებიც. ტურისტული სეზონი საქართველოში მთელი წლის მანძილზე გრძელდება, მაგრამ განსაკუთრებით აქტიური სეზონი ზაფხულია, შესაბამისად, ამ დროს ფრენების რაოდენობაც მატულობს და რეისები სხვადასხვა ქალაქიდან სეზონურად ემატება. ამიტომ ბილეთების დაჯავშნას წინასწარ გირჩევთ.",
          en: "The fastest way, of course, is by air. Several international Georgian and foreign airlines operate flights to Tbilisi, Kutaisi, and Batumi. \n\n Direct flights are available from several cities in Europe and Asia. Regular flights operate from Amsterdam, Munich, Yerevan, Istanbul, Riga, Baku, Chisinau, Tashkent, Minsk, Doha, and Dubai. \n\n During the summer, due to the large influx of tourists, charter flights may also be scheduled from various European cities. The tourist season in Georgia lasts year-round, but summer is particularly active, so the number of flights increases, and seasonal flights are added from various cities. Therefore, we recommend booking tickets in advance.",
        },
      },
    ],
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/929/929927.png",
    title: {
      ka: "საელჩოები",
      en: "Embassies",
    },
    description: {
      ka: "ჩვენი გზამკვლევი შეიცავს სრულფასოვან ინფორმაციას საქართველოში მოქმედი საელჩოებისა და საკონსულოების შესახებ.",
      en: "Our guide provides comprehensive information about embassies and consulates operating in Georgia.",
    },
    details: {
      ka: "გაიგე მეტი",
      en: "Learn More",
    },
    additionalInfo: [
      {
        description: {
          ka: "ჩვენი გზამკვლევი შეიცავს სრულფასოვან ინფორმაციას საქართველოში მოქმედი საელჩოებისა და საკონსულოების შესახებ. ასევე გთავაზობთ იმ ქვეყნების საელჩოების ჩამონათვალს, რომლებიც სხვა ქვეყნებიდან ემსახურებიან საქართველოს. აქვე აღვნიშნავთ, რომ ყველა ოფისი სამუშაო დღეებში 10:00 სთ-დან 18:00 სთ-მდე მუშაობს. ასევე უნდა გაითვალისწინოთ როგორც საქართველოში დაწესებული უქმე დღეები, ისე იმ ქვეყნებში მოქმედი დღესასწაულები, რომელ ქვეყანაში მდებარე საელჩოსაც მიმართავთ.",
          en: "Our guide provides comprehensive information about embassies and consulates operating in Georgia. We also offer a list of embassies of countries that serve Georgia from other countries. Note that all offices operate on weekdays from 10:00 AM to 6:00 PM. You should also consider public holidays in Georgia as well as holidays in the country where the embassy you are contacting is located.",
        },
        additionalDescription: {
          ka: `ამერიკის შეერთებული შტატების საელჩო \n\n

მის.: თბილისი, დიღმის მასივი, ქართულ-ამერიკული მეგობრობის გამზ. №29.

ტელ.: +995 32 277 000,  ფაქსი +995 32 253 23 10. 

ელფოსტა: TbilisiProtocol@state.gov 

ვებგვერდი: www.usembassy.ge

აზერბაიჯანის რესპუბლიკის საელჩო

მის.: თბილისი, ვახტანგ გორგასლის ქ. №4

ტელ.: +995 32 224 22 20

ფაქსი: +995 32 224 22 33

ელფოსტა: tbilisi@mission.mfa.gov.az

აზერბაიჯანის რესპუბლიკის საკონსულო 

მის.: ბათუმი, ფარნავაზ მეფის ქ. №62/24

ტელ.: +995 42 2276700

ფაქსი: +995 42 2273443

ელფოსტა: batumi@mission.mfa.gov.az

ავსტრიის რესპუბლიკის საელჩო

მის.: თბილისი, გრიბოედოვის ქ. №31 

ტელ.: +995 32 243 44 02

ელფოსტა: tiflis-ob@bmeia.gv.at

ვებგვერდი: www.aussenministerium.at/tiflis

ბულგარეთის რესპუბლიკის საელჩო

მის.: თბილისი, ვახტანგ გორგასლის ქ. №15 

ტელ.: +995 32 291 01 94; +995 32 291 01 95

ფაქსი: +995 32 272 22 63

ელფოსტა: Embassy.tbilisi@mfa.bg

ვებგვერდი: www.mfa.bg/embassies/georgia

ბელორუსიის რესპუბლიკის საელჩო

მის.: თბილისი, კრწანისის ქ. №18

ტელ.: +995 32 223 41 10

ფაქსი: +995 32 223 41 25

ელფოსტა: georgia@mfa.gov.by

ვებგვერდი: http://georgia.mfa.gov.by

ბრაზილიის ფედერაციული რესპუბლიკის საელჩო

მის.: თბილისი, ლევან მიქელაძის ქ. №11

ტელ.: +995 322220636

ელფოსტა: brasemb.tbilisi@itamaraty.gov.br

გერმანიის ფედერაციული რესპუბლიკის საელჩო

მის.: თბილისი,  ნინო ჩხეიძის ქ. №38, 0102

ტელ.: +995 32 244 73 00

ფაქსი: +49 30 5000 67133

ელფოსტა: info@tiflis.diplo.de

ვებგვერდი: www.tiflis.diplo.de

დიდი ბრიტანეთისა და ჩრდილოეთ ირლანდიის გაერთიანებული სამეფოს საელჩო

მის.: თბილისი, კრწანისის ქ. №51 

ტელ.: +995 32 227 47 47

ფაქსი: +995 32 227 47 92

ელფოსტა british.embassy.tbilisi@fco.gov.uk

ესპანეთის სამეფოს საელჩოს ოფისი (ესპანეთის საელჩო მდებარეობს თურქეთში)

მის.: თბილისი, თავისუფლების მოედანი №4

ტელ.: +995 32 220 00 63

ფაქსი: +995 32 220 00 61

ელფოსტა: emb.tbilisi@maec.es

ესპანეთის სამეფოს საპატიო კონსული საქართველოში

მის.: თბილისი, ფალიაშვილის ქ. №52
ტელ.: +995 32 2252 606
ფაქსი: +995 32 2224 199

ერაყის რესპუბლიკის საელჩო

მის.:  თბილისი, ტ. ტაბიძის ქ. №9 

ტელ.: +995 32 223 45 01/02/03

+995 32 200 02 58

ფაქსი: +995 32 229 45 03

ელფოსტა: iraqiageoemb@yahoo.com

ესტონეთის რესპუბლიკის საელჩო

მის.: თბილისი, კიტა ბუაჩიძის ქ. №4, 

ტელ.: +995 32 236 51 22

ელფოსტა: tbilisisaatkond@mfa.ee

ესტონეთის რესპუბლიკის საკონსულო განყოფილება

მის.: თბილისი, საბურთალო, დოლიძის ქ. №55

ტელ.: +995 32 236 51 27

ელფოსტა: tbilisi.consular@mfa.ee

www.facebook.com/estemb.tbilisi

ვატიკანის საელჩო - HOLY SEE 

მის.: თბილისი, ბ. ჟღენტის ქ. №40

ტელ.: +995 32 253 76 01/04

ფაქსი: +995 32 253 67 04

ელფოსტა: nuntius@vaticange.org

თურქეთის რესპუბლიკის საელჩო

მის.: თბილისი, ჭავჭავაძის გამზ. №35
ტელ.:  (+995 32) 2252 072, 2252 073, 2252 074, 2252 076
საკონსულო განყოფილება +995 32 225 20 78

ფაქსი: +995 32 2220 666
ელფოსტა: embassy.tbilisi@mfa.gov.tr 

ვებგვერდი: www.mfa.gov.tr

თურქეთის საკონსულო

მის.: ბათუმი, ნინოშვილის ქ. №9

ტელ.: +995 422 25 58 00

ფაქსი: +995 422 25 58 10

ელფოსტა: consulate.batumi@mfa.gov.tr

თურქმენეთის საელჩო

მის.: თბილისი, რაზმაძის ქ. №31ა 

ტელ.: +995 32 225 29 63

ფაქსი: +995 32 225 28 90

ელფოსტა: tmemb.ge1@gmail.com

ვებგვერდი: www.georgia.tmembassy.gov.tm

იაპონიის სახელმწიფოს საელჩო

მის.: თბილისი, კრწანისის ქ. №9

ტელ.:  +995 32 2752 111

ფაქსი: +995 32 275 21 12

საკონსულო: +995 32 275 21 14

ელფოსტა: protocol@embjapan.ge

ვებგვერდი: www.ge.emb-japan.go.jp

ირანის ისლამური რესპუბლიკის საელჩო

მის.: თბილისი,  ჭავჭავაძის გამზ. №80 

ტელ.: +995 32 291 36 56/57/58/59/60

ფაქსი: +995 32 291 36 27

ელფოსტა: info@iran.ge iranemb.tbs@mfa.gov.ir

ვებგვერდი: www.tbilisi.mfa.ir

ირანის ისლამური რესპუბლიკის საკონსულო

მის.: ბათუმი, ფარნავაზ მეფის ქ. №83 

ტელ.: +995 422 22 86 01/02

ფაქსი: +995 422 22 50 30

ელფოსტა: iranconsulate.bus@mfa.gov.ir

ისრაელის სახელმწიფოს საელჩო

მის.: თბილისი, დავით აღმაშენებლის გამზ. №154

ტელ.: +995 32 255 65 00

ფაქსი: +995 32 255 65 66

ელფოსტა: press@tbilisi.mfa.gov.il

ვებგვერდი: http://tbilisi.mfa.gov.il

იტალიის რესპუბლიკის საელჩო

მის.: თბილისი, ჩიტაძის ქ. №3ა

ტელ.: +995 32 299 64 18, +995 32 292 18 54 

ფაქსი: +995 32 299 64 15

ელფოსტა: embassy.tbilisi@esteri.it

ინდონეზიის რესპუბლიკის საელჩოს ოფისი (ინდონეზიის საელჩო მდებარეობს უკრაინაში)

მის.: ვაკე საბურთალო, ნ. ყიფშიძის ქ 7გ

ტელ: +995 579283649

ელფოსტა: indonesia@tbilisioffice.id

ლატვიის რესპუბლიკის საელჩო

მის.: თბილისი, ალექსანდრე ხახანაშვილის ქ. №46

ტელ.: +995 32 2244 858

საკონსულო საკითხები: +995 32 238 14 05 

ფაქსი: +995 32 2381 406

ელფოსტა: embassy.georgia@mfa.gov.lv 

ვებგვერდი: www.mfa.gov.lv/en/georgia

ლიეტუვის რესპუბლიკის საელჩო

მის.: თბილისი, კრწანისის ქ. №29

ტელ.:  +995 32 2912 933;

საკონსულო განყოფილება: +995 32 291 60 56

ელფოსტა: amb.ge@urm.lt

ვებგვერდი:http://ge.mfa.lt/ 

მალტის სუვერენული სამხედრო ორდენის საელჩო

მალტის რესპუბლიკის საელჩოს ოფისი

მის.: თბილისი, გიორგი ლეონიძის 1, III სართული, აპ. 1. №9,

ტელ.: +995 32 298 65 08

ელფოსტა: georgiaembassy@orderofmalta.int

ნიდერლანდების სამეფოს საელჩო

მის.: თბილისი, ილია ჭავჭავაძის გამზ. №34

ტელ.: +995 32 227 62 00

ელფოსტა: tbi@minbuza.nl

ვებგვერდი: https://www.netherlandsandyou.nl/

ნორვეგიის სამეფოს საელჩო

მის.: თბილისი, გიორგი ლეონიძის №1. №2

ტელ.: +995 591 451 571

ელფოსტა: emb.tbilisi@mfa.no

ნორვეგიის საპატიო კონსულის ოფისი  

მის.: თბილისი, აბაშელის ქ. №20 

ტელ.: +995 32 2290 979

ფაქსი: +995 32 2293 553

ელფოსტა: lianahaerum@dsl.ge

პოლონეთის რესპუბლიკის საელჩო

მის.: თბილისი, ონიაშვილის ქ. №24 

ტელ.: +995 32 2920 398

ფაქსი: +995 32 2920 397

ელფოსტა: tbilisi.amb.sekretariat@msz.gov.pl 

ვებგვერდი: www.tbilisi.msz.gov.pl

რუმინეთის  საელჩო

მის.: თბილისი, ქუშიტაშვილის (ლვოვის) ქ. №7

ტელ.: +995 32 238 53 10 

ფაქსი: + 995 32 238 52 10 

ელფოსტა: tbilisi@mae.ro

საბერძნეთის რესპუბლიკის საელჩო

მის.: თბილისი, ტ. ტაბიძის ქ. №37დ

ტელ.: +995 32 291 49 70-4

ფაქსი: +995 32 291 49 80

ელფოსტა: gremb.tbi@mfa.gr

საფრანგეთის რესპუბლიკის საელჩო

მის.: თბილისი, კრწანისის ქ. №51ა 

ტელ.: +995 32 272 14 90

ელფოსტა: contact.tbilissi-amba@diplomatie.gouv.fr

ვებგვერდი: www.ambafrance-ge.org

სლოვაკეთის რესპუბლიკის საელჩო 

მის.: თბილისი, მცხეთის ქ. №13. 

ტელ.: +995 32 222 4437

ელფოსტა: emb.tbilisi@mzv.sk

სომხეთის რესპუბლიკის საელჩო

მის.: თბილისი,  ტეტელაშვილის ქ. №4 

ტელ.: +995 32 2959 443, 2951 723

ფაქსი: +995 32 296 42 87 

ელფოსტა: armemb@caucasus.net

ვებგვერდი: georgia.mfa.am

სომხეთის გენერალური საკონსულო 

მის.: ბათუმი, ზურაბ გორგილაძის ქ. №5/5

ტელ.: +995 422 273812

ფაქსი: +995 422279990

ელფოსტა: armgenconsulatebatumi@mfa.am

საუდის არაბეთის სამეფოს საელჩო

მის.: თბილისი, ალექსიძის ქ. №12 - „მეფე დავითის“ რეზიდენცია

ტელ.: +995 32 2009505; 2009504

ფაქსი: +995 32 2009506

ელფოსტა: goemb@mofa.gov.sa

კორეის რესპუბლიკის საელჩოს ოფისი (კორეის რესპუბლიკის საელჩო მდებარეობს აზერბაიჯანში)

მის.: თბილისი, ილია ჭავჭავაძის გამზ., პირველი შესახვევი №8

ტელ.: +995 32 297 03 18, +995 32 297 03 20

ფაქსი: +995 32 242 74 40

ელფოსტა: georgia@mofa.go.kr

ვებგვერდი: http://overseas.mofa.go.kr/geko/index.do

უკრაინის რესპუბლიკის საელჩო

მის.: თბილისი, ჭავჭავაძის გამზ. №76გ

ტელ.:  +995 32 2311 161, 

საკონსულო განყოფილება: +995 32 231 14 54

ელფოსტა: emb_ge@mfa.gov.ua  

უნგრეთის საელჩო

მის.: თბილისი, ლვოვის ქ. № 83

ტელ.: +995 32 239 90 08

ფაქსი: +995 32 239 90 04

ელფოსტა: mission.tbs@mfa.gov.hu

ვებგვერდი: www.mfa.gov.hu/emb/tbilisi

ყაზახეთის რესპუბლიკის საელჩო

მის.: თბილისი, ლვოვის ქ. №77

ტელ.: +995 32 255 20 00

ელფოსტა: tbilisi@mfa.kz; secretariat@kazembassy.ge;

შვედეთის სამეფოს საელჩო

მის.: თბილისი, ყიფშიძის ქუჩის შესახვევი №15

ტელ.: +995 32 550 320

ფაქსი: +995 32 222 48 90 

ელფოსტა: ambassaden.tbilisi@sida.se

ვებგვერდი: www.swedenabroad.com/en-GB/Embassies/Tblisi

www.facebook.com/EmbasstOfSwedenInTbilisi

შვეიცარიის კონფედერაციის საელჩო

მის.: თბილისი, შალვა რადიანის ქ. №12

ტელ.: +955 32 225 36 82/83 

საკონსულო განყოფილება: +995 32 2753 001/02

ფაქსი: +995 32 2753 006
ელფოსტა: tbilisi@eda.admin.ch

ვებგვერდი: www.eda.admin.ch/georgia

ჩეხეთის რესპუბლიკის საელჩო

მის.: თბილისი, ჭავჭავაძის გამზ., №37 

ტელ: +995 32 291 67 40 - 43

ელფოსტა: tbilisi@embassy.mzv.cz; consulate_tbilisi@mzv.cz

ვებგვერდი: www.mzv.cz/tbilisi

ჩინეთის სახალხო რესპუბლიკის საელჩო

მის.: თბილისი, ბარნოვის ქ. №52

ტელ.:  +995 32 2252670

ფაქსი: +995 32 2250 996

საკონსულო: +995 32 225 90 00 

ელფოსტა: chinaembgeo@gmail.com

ვებგვერდი: http://ge.chineseembassy.org

ყატარის სახელმწიფოს საელჩო

მის.: თბილისი, ლვოვის ქ. №17

ტელ.: +995 32 224 44 90

ფაქსი: +995 32 224 44 70

ელფოსტა: tbilisi@mofa.gov.qa`,
          en: `United States Embassy \n\n
Address: Tbilisi, Dighomi Massif, Georgian-American Friendship Ave. №29\n
Tel.: +995 32 277 000, Fax: +995 32 253 23 10\n
Email: TbilisiProtocol@state.gov\n
Website: www.usembassy.ge\n\n
Azerbaijan Republic Embassy\n
Address: Tbilisi, Vakhtang Gorgasali St. №4\n
Tel.: +995 32 224 22 20\n
Fax: +995 32 224 22 33\n
Email: tbilisi@mission.mfa.gov.az\n\n
Azerbaijan Republic Consulate\n
Address: Batumi, Parnavaz Mepe St. №62/24\n
Tel.: +995 42 2276700\n
Fax: +995 42 2273443\n
Email: batumi@mission.mfa.gov.az\n\n
Austrian Republic Embassy\n
Address: Tbilisi, Griboedov St. №31\n
Tel.: +995 32 243 44 02\n
Email: tiflis-ob@bmeia.gv.at\n
Website: www.aussenministerium.at/tiflis\n\n
Bulgarian Republic Embassy\n
Address: Tbilisi, Vakhtang Gorgasali St. №15\n
Tel.: +995 32 291 01 94; +995 32 291 01 95\n
Fax: +995 32 272 22 63\n
Email: Embassy.tbilisi@mfa.bg\n
Website: www.mfa.bg/embassies/georgia\n\n
Belarus Republic Embassy\n
Address: Tbilisi, Krtsanisi St. №18\n
Tel.: +995 32 223 41 10\n
Fax: +995 32 223 41 25\n
Email: georgia@mfa.gov.by\n
Website: http://georgia.mfa.gov.by\n\n
Brazil Federal Republic Embassy\n
Address: Tbilisi, Levan Mikeladze St. №11\n
Tel.: +995 322220636\n
Email: brasemb.tbilisi@itamaraty.gov.br\n\n
German Federal Republic Embassy\n
Address: Tbilisi, Nino Chkheidze St. №38, 0102\n
Tel.: +995 32 244 73 00\n
Fax: +49 30 5000 67133\n
Email: info@tiflis.diplo.de\n
Website: www.tiflis.diplo.de\n\n
United Kingdom of Great Britain and Northern Ireland Embassy\n
Address: Tbilisi, Krtsanisi St. №51\n
Tel.: +995 32 227 47 47\n
Fax: +995 32 227 47 92\n
Email: british.embassy.tbilisi@fco.gov.uk\n\n
Spanish Kingdom Embassy Office (Spanish Embassy located in Turkey)\n
Address: Tbilisi, Freedom Square №4\n
Tel.: +995 32 220 00 63\n
Fax: +995 32 220 00 61\n
Email: emb.tbilisi@maec.es\n\n
Honorary Consul of the Kingdom of Spain in Georgia\n
Address: Tbilisi, Paliashvili St. №52\n
Tel.: +995 32 2252 606\n
Fax: +995 32 2224 199\n\n
Iraq Republic Embassy\n
Address: Tbilisi, T. Tabidze St. №9\n
Tel.: +995 32 223 45 01/02/03\n
+995 32 200 02 58\n
Fax: +995 32 229 45 03\n
Email: iraqiageoemb@yahoo.com\n\n
Estonian Republic Embassy\n
Address: Tbilisi, Kita Buachidze St. №4\n
Tel.: +995 32 236 51 22\n
Email: tbilisisaatkond@mfa.ee\n\n
Estonian Republic Consular Section\n
Address: Tbilisi, Saburtalo, Doladze St. №55\n
Tel.: +995 32 236 51 27\n
Email: tbilisi.consular@mfa.ee\n
Website: www.facebook.com/estemb.tbilisi\n\n
Holy See (Vatican) Embassy\n
Address: Tbilisi, B. Zhgenti St. №40\n
Tel.: +995 32 253 76 01/04\n
Fax: +995 32 253 67 04\n
Email: nuntius@vaticange.org\n\n
Turkish Republic Embassy\n
Address: Tbilisi, Chavchavadze Ave. №35\n
Tel.: (+995 32) 2252 072, 2252 073, 2252 074, 2252 076\n
Consular Section: +995 32 225 20 78\n
Fax: +995 32 2220 666\n
Email: embassy.tbilisi@mfa.gov.tr\n
Website: www.mfa.gov.tr\n\n
Turkish Consulate\n
Address: Batumi, Ninoshvili St. №9\n
Tel.: +995 422 25 58 00\n
Fax: +995 422 25 58 10\n
Email: consulate.batumi@mfa.gov.tr\n\n
Turkmenistan Embassy\n
Address: Tbilisi, Razmadze St. №31a\n
Tel.: +995 32 225 29 63\n
Fax: +995 32 225 28 90\n
Email: tmemb.ge1@gmail.com\n
Website: www.georgia.tmembassy.gov.tm\n\n
Japanese State Embassy\n
Address: Tbilisi, Krtsanisi St. №9\n
Tel.: +995 32 2752 111\n
Fax: +995 32 275 21 12\n
Consular: +995 32 275 21 14\n
Email: protocol@embjapan.ge\n
Website: www.ge.emb-japan.go.jp\n\n
Islamic Republic of Iran Embassy\n
Address: Tbilisi, Chavchavadze Ave. №80\n
Tel.: +995 32 291 36 56/57/58/59/60\n
Fax: +995 32 291 36 27\n
Email: info@iran.ge iranemb.tbs@mfa.gov.ir\n
Website: www.tbilisi.mfa.ir\n\n
Islamic Republic of Iran Consulate\n
Address: Batumi, Parnavaz Mepe St. №83\n
Tel.: +995 422 22 86 01/02\n
Fax: +995 422 22 50 30\n
Email: iranconsulate.bus@mfa.gov.ir\n\n
State of Israel Embassy\n
Address: Tbilisi, David Aghmashenebeli Ave. №154\n
Tel.: +995 32 255 65 00\n
Fax: +995 32 255 65 66\n
Email: press@tbilisi.mfa.gov.il\n
Website: http://tbilisi.mfa.gov.il\n\n
Italian Republic Embassy\n
Address: Tbilisi, Chitadze St. №3a\n
Tel.: +995 32 299 64 18, +995 32 292 18 54\n
Fax: +995 32 299 64 15\n
Email: embassy.tbilisi@esteri.it\n\n
Indonesian Republic Embassy Office (Indonesian Embassy located in Ukraine)\n
Address: Vake Saburtalo, N. Kipshidze St. 7g\n
Tel: +995 579283649\n
Email: indonesia@tbilisioffice.id\n\n
Latvian Republic Embassy\n
Address: Tbilisi, Alexandre Khakhanashvili St. №46\n
Tel.: +995 32 2244 858\n
Consular Issues: +995 32 238 14 05\n
Fax: +995 32 2381 406\n
Email: embassy.georgia@mfa.gov.lv\n
Website: www.mfa.gov.lv/en/georgia\n\n
Lithuanian Republic Embassy\n
Address: Tbilisi, Krtsanisi St. №29\n
Tel.: +995 32 2912 933;\n
Consular Section: +995 32 291 60 56\n
Email: amb.ge@urm.lt\n
Website: http://ge.mfa.lt/\n\n
Sovereign Military Order of Malta Embassy\n
Maltese Republic Embassy Office\n
Address: Tbilisi, Giorgi Leonidze 1, 3rd Floor, Apt. 1. №9\n
Tel.: +995 32 298 65 08\n
Email: georgiaembassy@orderofmalta.int\n\n
Netherlands Kingdom Embassy\n
Address: Tbilisi, Ilia Chavchavadze Ave. №34\n
Tel.: +995 32 227 62 00\n
Email: tbi@minbuza.nl\n
Website: https://www.netherlandsandyou.nl/\n\n
Norwegian Kingdom Embassy\n
Address: Tbilisi, Giorgi Leonidze №1. №2\n
Tel.: +995 591 451 571\n
Email: emb.tbilisi@mfa.no\n\n
Norwegian Honorary Consul Office\n
Address: Tbilisi, Abasheli St. №20\n
Tel.: +995 32 2290 979\n
Fax: +995 32 2293 553\n
Email: lianahaerum@dsl.ge\n\n
Polish Republic Embassy\n
Address: Tbilisi, Oniashvili St. №24\n
Tel.: +995 32 2920 398\n
Fax: +995 32 2920 397\n
Email: tbilisi.amb.sekretariat@msz.gov.pl\n
Website: www.tbilisi.msz.gov.pl\n\n
Romanian Embassy\n
Address: Tbilisi, Kushitashvili (Lvov) St. №7\n
Tel.: +995 32 238 53 10\n
Fax: +995 32 238 52 10\n
Email: tbilisi@mae.ro\n\n
Greek Republic Embassy\n
Address: Tbilisi, T. Tabidze St. №37d\n
Tel.: +995 32 291 49 70-4\n
Fax: +995 32 291 49 80\n
Email: gremb.tbi@mfa.gr\n\n
French Republic Embassy\n
Address: Tbilisi, Krtsanisi St. №51a\n
Tel.: +995 32 272 14 90\n
Email: contact.tbilissi-amba@diplomatie.gouv.fr\n
Website: www.ambafrance-ge.org\n\n
Slovak Republic Embassy\n
Address: Tbilisi, Mtskheta St. №13\n
Tel.: +995 32 222 4437\n
Email: emb.tbilisi@mzv.sk\n\n
Armenian Republic Embassy\n
Address: Tbilisi, Tetelashvili St. №4\n
Tel.: +995 32 2959 443, 2951 723\n
Fax: +995 32 296 42 87\n
Email: armemb@caucasus.net\n
Website: georgia.mfa.am\n\n
Armenian General Consulate\n
Address: Batumi, Zurab Gorgiladze St. №5/5\n
Tel.: +995 422 273812\n
Fax: +995 422279990\n
Email: armgenconsulatebatumi@mfa.am\n\n
Saudi Arabia Kingdom Embassy\n
Address: Tbilisi, Alexidze St. №12 - “King David” Residence\n
Tel.: +995 32 2009505; 2009504\n
Fax: +995 32 2009506\n
Email: goemb@mofa.gov.sa\n\n
Republic of Korea Embassy Office (Republic of Korea Embassy located in Azerbaijan)\n
Address: Tbilisi, Ilia Chavchavadze Ave., 1st Lane №8\n
Tel.: +995 32 297 03 18, +995 32 297 03 20\n
Fax: +995 32 242 74 40\n
Email: georgia@mofa.go.kr\n
Website: http://overseas.mofa.go.kr/geko/index.do\n\n
Ukrainian Republic Embassy\n
Address: Tbilisi, Chavchavadze Ave. №76g\n
Tel.: +995 32 2311 161,\n
Consular Section: +995 32 231 14 54\n
Email: emb_ge@mfa.gov.ua\n\n
Hungarian Embassy\n
Address: Tbilisi, Lvov St. №83\n
Tel.: +995 32 239 90 08\n
Fax: +995 32 239 90 04\n
Email: mission.tbs@mfa.gov.hu\n
Website: www.mfa.gov.hu/emb/tbilisi\n\n
Kazakhstan Republic Embassy\n
Address: Tbilisi, Lvov St. №77\n
Tel.: +995 32 255 20 00\n
Email: tbilisi@mfa.kz; secretariat@kazembassy.ge\n\n
Swedish Kingdom Embassy\n
Address: Tbilisi, Kipshidze St. Lane №15\n
Tel.: +995 32 550 320\n
Fax: +995 32 222 48 90\n
Email: ambassaden.tbilisi@sida.se\n
Website: www.swedenabroad.com/en-GB/Embassies/Tblisi\n
Website: www.facebook.com/EmbasstOfSwedenInTbilisi\n\n
Swiss Confederation Embassy\n
Address: Tbilisi, Shalva Radiani St. №12\n
Tel.: +955 32 225 36 82/83\n
Consular Section: +995 32 2753 001/02\n
Fax: +995 32 2753 006\n
Email: tbilisi@eda.admin.ch\n
Website: www.eda.admin.ch/georgia\n\n
Czech Republic Embassy\n
Address: Tbilisi, Chavchavadze Ave. №37\n
Tel: +995 32 291 67 40 - 43\n
Email: tbilisi@embassy.mzv.cz; consulate_tbilisi@mzv.cz\n
Website: www.mzv.cz/tbilisi\n\n
People’s Republic of China Embassy\n
Address: Tbilisi, Barnov St. №52\n
Tel.: +995 32 2252670\n
Fax: +995 32 2250 996\n
Consular: +995 32 225 90 00\n
Email: chinaembgeo@gmail.com\n
Website: http://ge.chineseembassy.org\n\n
Qatar State Embassy\n
Address: Tbilisi, Lvov St. №17\n
Tel.: +995 32 224 44 90\n
Fax: +995 32 224 44 70\n
Email: tbilisi@mofa.gov.qa`,
        },
      },
    ],
  },
  {
    image: "https://cdn-icons-png.flaticon.com/512/561/561127.png",
    title: {
      ka: "საინფორმაციო",
      en: "Information",
    },
    description: {
      ka: "ნებისმიერი სერვისის ონლაინ ჯავშნის შესაძლებლობა მობილური აპლიკაციის საშუალებით",
      en: "The ability to book any service online through a mobile application",
    },
    details: {
      ka: "გაიგე მეტი",
      en: "Learn More",
    },
    additionalInfo: [
      {
        description: {
          ka: "საქართველოში ჩამოსული და ადგილობრივი ტურისტების ტურისტული მომსახურებისა და ტურისტული პროდუქტების შესახებ ინფორმაციით უზრუნველყოფა ტურიზმის საინფორმაციო ცენტრების მოვალეობაა. ტურიზმის საინფორმაციო ცენტრები ამას როგორც პირისპირ, ისე ტელეფონისა და ელექტრონული ფოსტის საშუალებით აკეთებენ. ისინი მოგაწვდიან საჭირო ცნობებს ტურისტული ღირსშესანიშნაობების, ტურისტული ადგილებისა და ტურისტული მიმართულებების შესახებ. ამისთვის მათ აქვთ ტურისტული ობიექტების მონაცემთა ბაზა, რომელსაც მუდმივად აახლებენ.",
          en: "Providing information on tourism services and products for both arriving and local tourists is the responsibility of tourism information centers. These centers offer information in person, via phone, and through email. They provide essential details about tourist attractions, destinations, and travel routes. To do this, they maintain a constantly updated database of tourism objects.",
        },
        additionalDescription: {
          ka: `თბილისის ტურისტული საინფორმაციო ცენტრი\n
მისამართი: თავისუფლების მოედანი, ალექსანდრე პუშკინის სახელობის სკვერი\n
ტელ: (+995 32) 2 15 86 97\n
ელ.ფოსტა: tictbilisi@gmail.com\n
სამუშაო საათები: ყოველდღე, ოქტომბერი - მარტი - 10:00 - 21:00, აპრილი - სექტემბერი - 09:00 - 21:00\n\n
თბილისის საერთაშორისო აეროპორტის ტურისტული საინფორმაციო ცენტრი\n
მისამართი: თბილისის საერთაშორისო აეროპორტი (მოფრენის ტერმინალი)\n
ტელ: (+995 32) 2 31 00 07\n
ელ.ფოსტა: ticairport@gmail.com\n
სამუშაო საათები: ფრენის მიხედვით\n\n
მცხეთის ტურისტული საინფორმაციო ცენტრი\n
მისამართი: არსუკიძის ქუჩა N3\n
ტელ: (+995 32) 2 51 21 28\n
ელ.ფოსტა: ticmtskheta@gmail.com\n
სამუშაო საათები: ყოველდღე, ოქტომბერი-მარტი - 10:00 -18:00, აპრილი-სექტემბერი - 09:00-18:00\n\n
სტეფანწმინდის ტურისტული საინფორმაციო ცენტრი\n
მისამართი: ალ. ყაზბეგის მე-2 შესახვევი\n
ელ.ფოსტა: tickazbegi1@gmail.com\n
სამუშაო საათები: ყოველდღე, 09:00 - 18:00\n\n
თელავის ტურისტული საინფორმაციო ცენტრი\n
მისამართი: ერეკლე II -ს ქუჩა N8\n
ტელ: (+995 350) 27 53 17\n
ელ.ფოსტა: tictelavi1@gmail.com\n
სამუშაო საათები: ორშაბათი-პარასკევი, 09:00-18:00\n\n
ყვარლის ტურისტული საინფორმაციო ცენტრი\n
მისამართი: რუსთაველის ქუჩა N8\n
ტელ: (+995 352) 22 13 40\n
ელ.ფოსტა: tickvareli@gmail.com\n
სამუშაო საათები: ორშაბათი - პარასკევი, ოქტომბერი - მარტი - 10:00 - 17:00, აპრილი - სექტემბერი - 09:00 - 18:00\n\n
სიღნაღის ტურისტული საინფორმაციო ცენტრი\n
მისამართი: დავით აღმაშენებლის ქუჩა N2\n
ელ.ფოსტა: ticsignagi@gmail.com\n
სამუშაო საათები: ორშაბათი - პარასკევი, 10:00 - 18:00\n\n
ლაგოდეხის ტურისტული საინფორმაციო ცენტრი\n
მისამართი: წმინდა ნინოს ქუჩა N14\n
ელ.ფოსტა: lagodekhitourisminfo@gmail.com\n
სამუშაო საათები: ორშაბათი - პარასკევი, 09:00 - 18:00\n\n
ბოლნისის ტურისტული საინფორმაციო ცენტრი\n
მისამართი: სულხან-საბა ორბელიანის ქუჩა N115\n
ელ.ფოსტა: ticbolnisi@gmail.com\n
სამუშაო საათები: ყოველდღე, 09:00 - 18:00\n\n
დმანისის ტურისტული საინფორმაციო ცენტრი\n
მისამართი: წმინდა ნინოს ქუჩა N56\n
ელ.ფოსტა: Dmanisikultura@gmail.com\n
სამუშაო საათები: ორშაბათი - პარასკევი, 10:00 - 18:00\n\n
გორის ტურისტული საინფორმაციო ცენტრი\n
მისამართი: ქუთაისის ქუჩა N23ა\n
ტელ: (+995 370) 27 07 76\n
ელ.ფოსტა: ticgori@gmail.com\n
სამუშაო საათები: ყოველდღე - 10:00-იდან 18:00, ზამთრის პერიოდში 10:00-იდან 17:00\n\n
გორის ტურისტული საინფორმაციო ცენტრი\n
მისამართი: 26 მაისის სახელობის სანაპირო (“ლომჭაბუკის” მიმდებარე ტერიტორია)\n
სამუშაო საათები: ყოველდღე, 10.00 - 18.00\n\n
ქარელის ტურისტული საინფორმაციო ცენტრი\n
მისამართი: თამარ მეფის ქუჩა\n
ელ.ფოსტა: karelisturistuli@gmail.com\n
სამუშაო საათები: ორშაბათი - პარასკევი, 10:00 - 17:00\n\n
ბორჯომის ტურისტული საინფორმაციო ცენტრი\n
მისამართი: რუსთაველის ქუჩა (სილამაზის ხიდის მიმდებარე სკვერი)\n
ტელ: (+995 367) 22 13 97\n
ელ.ფოსტა: ticborjomi@gmail.com\n
სამუშაო საათები: ყოველდღე, ოქტომბერი - მარტი - 10:00 - 18:00, აპრილი - სექტემბერი - 09:00 - 18:00\n\n
ბაკურიანის ტურისტული საინფორმაციო ცენტრი\n
მისამართი: აღმაშენებლის ქუჩა N17\n
ელ.ფოსტა: ticbakuriani@gmail.com\n
სამუშაო საათები: მუშაობს სეზონურად, ყოველდღე, 10:00 - 18:00\n\n
ახალციხის ტურისტული საინფორმაციო ცენტრი\n
მისამართი: ხარისჭირაშვილის ქუჩა N1\n
ტელ: (+995 365) 20 05 00\n
ელ.ფოსტა: ticakhaltsikhe@gmail.com\n
სამუშაო საათები: ყოველდღე, 08:00 - 18:00\n\n
ქუთაისის ტურისტული საინფორმაციო ცენტრი\n
მისამართი: რუსთაველის ქუჩა N9ა\n
ტელ: (+995 322) 370 000 (21)\n
ელ.ფოსტა: info@kutaisi.travel\n
სამუშაო საათები: ყოველდღე, 09:00 - 18:00\n\n
ქუთაისის საერთაშორისო აეროპორტის ტურისტული საინფორმაციო ცენტრი\n
მისამართი: ქუთაისის საერთაშორისო აეროპორტი (მოფრენის ტერმინალი)\n
ტელ.: (+995 322) 370 000 (21)\n
ელ.ფოსტა: info@kutaisi.travel\n
სამუშაო საათები: ფრენის მიხედვით\n\n
წყალტუბოს ტურისტული საინფორმაციო ცენტრი\n
მისამართი: ტაბიძის ქუჩა 3ა\n
ელფოსტა: tictskaltubo@gmail.com\n
სამუშაო საათები: ორშაბათ-პარასკევი - 09:00 - 18:00\n\n
ზუგდიდის ტურისტული საინფორმაციო ცენტრი\n
მისამართი: რუსთაველის ქუჩა N79\n
ტელ: (+995 595) 63 05 77\n
ელ.ფოსტა: ticzugdidi@gmail.com\n
სამუშაო საათები: ორშაბათი - პარასკევი, 10:00-18:00\n\n
მესტიის ტურისტული საინფორმაციო ცენტრი\n
მისამართი: სეტის მოედანი N7\n
ტელ: (+995 5 51) 08 08 94\n
ელ.ფოსტა: ticmestia@gmail.com\n
სამუშაო საათები: ორშაბათი - პარასკევი, ოქტომბერი - მარტი 10:00 - 18:00; აპრილი - სექტემბერი 09:00 - 18:00\n\n
ამბროლაურის ტურისტული საინფორმაციო ცენტრი\n
მისამართი: ვაჟა-ფშაველას ქუჩა N17\n
ტელ: (+995 595) 00 36 56\n
ელ.ფოსტა: ticambrolauri@gmail.com\n
სამუშაო საათები: ყოველდღე, 10:00 - 18:00\n\n
ცაგერის ტურისტული საინფორმაციო ცენტრი\n
მისამართი: რუსთაველის ქუჩა N67\n
ელ.ფოსტა: turizmiscentri123@gmail.com\n
სამუშაო საათები: ორშაბათი - პარასკევი, 10:00 - 18:00`,
          en: `Tbilisi Tourist Information Center\n
Address: Freedom Square, Alexandre Pushkin Park\n
Tel: (+995 32) 2 15 86 97\n
Email: tictbilisi@gmail.com\n
Working Hours: Daily, October - March - 10:00 - 21:00, April - September - 09:00 - 21:00\n\n
Tbilisi International Airport Tourist Information Center\n
Address: Tbilisi International Airport (Arrivals Terminal)\n
Tel: (+995 32) 2 31 00 07\n
Email: ticairport@gmail.com\n
Working Hours: According to flight schedule\n\n
Mtskheta Tourist Information Center\n
Address: Arsukidze Street N3\n
Tel: (+995 32) 2 51 21 28\n
Email: ticmtskheta@gmail.com\n
Working Hours: Daily, October - March - 10:00 - 18:00, April - September - 09:00 - 18:00\n\n
Stepantsminda Tourist Information Center\n
Address: Al. Kazbegi 2nd Lane\n
Email: tickazbegi1@gmail.com\n
Working Hours: Daily, 09:00 - 18:00\n\n
Telavi Tourist Information Center\n
Address: Erekle II Street N8\n
Tel: (+995 350) 27 53 17\n
Email: tictelavi1@gmail.com\n
Working Hours: Monday - Friday, 09:00 - 18:00\n\n
Kvareli Tourist Information Center\n
Address: Rustaveli Street N8\n
Tel: (+995 352) 22 13 40\n
Email: tickvareli@gmail.com\n
Working Hours: Monday - Friday, October - March - 10:00 - 17:00, April - September - 09:00 - 18:00\n\n
Sighnaghi Tourist Information Center\n
Address: David Aghmashenebeli Street N2\n
Email: ticsignagi@gmail.com\n
Working Hours: Monday - Friday, 10:00 - 18:00\n\n
Lagodekhi Tourist Information Center\n
Address: St. Nino Street N14\n
Email: lagodekhitourisminfo@gmail.com\n
Working Hours: Monday - Friday, 09:00 - 18:00\n\n
Bolnisi Tourist Information Center\n
Address: Sulkhan-Saba Orbeliani Street N115\n
Email: ticbolnisi@gmail.com\n
Working Hours: Daily, 09:00 - 18:00\n\n
Dmanisi Tourist Information Center\n
Address: St. Nino Street N56\n
Email: Dmanisikultura@gmail.com\n
Working Hours: Monday - Friday, 10:00 - 18:00\n\n
Gori Tourist Information Center\n
Address: Kutaisi Street N23a\n
Tel: (+995 370) 27 07 76\n
Email: ticgori@gmail.com\n
Working Hours: Daily, 10:00 - 18:00, Winter period 10:00 - 17:00\n\n
Gori Tourist Information Center\n
Address: May 26 Embankment (near “Lomchabuki” area)\n
Working Hours: Daily, 10:00 - 18:00\n\n
Kareli Tourist Information Center\n
Address: Tamar Mepe Street\n
Email: karelisturistuli@gmail.com\n
Working Hours: Monday - Friday, 10:00 - 17:00\n\n
Borjomi Tourist Information Center\n
Address: Rustaveli Street (near Beauty Bridge Park)\n
Tel: (+995 367) 22 13 97\n
Email: ticborjomi@gmail.com\n
Working Hours: Daily, October - March - 10:00 - 18:00, April - September - 09:00 - 18:00\n\n
Bakuriani Tourist Information Center\n
Address: Aghmashenebeli Street N17\n
Email: ticbakuriani@gmail.com\n
Working Hours: Operates seasonally, Daily, 10:00 - 18:00\n\n
Akhaltsikhe Tourist Information Center\n
Address: Kharischirashvili Street N1\n
Tel: (+995 365) 20 05 00\n
Email: ticakhaltsikhe@gmail.com\n
Working Hours: Daily, 08:00 - 18:00\n\n
Kutaisi Tourist Information Center\n
Address: Rustaveli Street N9a\n
Tel: (+995 322) 370 000 (21)\n
Email: info@kutaisi.travel\n
Working Hours: Daily, 09:00 - 18:00\n\n
Kutaisi International Airport Tourist Information Center\n
Address: Kutaisi International Airport (Arrivals Terminal)\n
Tel: (+995 322) 370 000 (21)\n
Email: info@kutaisi.travel\n
Working Hours: According to flight schedule\n\n
Tskaltubo Tourist Information Center\n
Address: Tabidze Street 3a\n
Email: tictskaltubo@gmail.com\n
Working Hours: Monday - Friday, 09:00 - 18:00\n\n
Zugdidi Tourist Information Center\n
Address: Rustaveli Street N79\n
Tel: (+995 595) 63 05 77\n
Email: ticzugdidi@gmail.com\n
Working Hours: Monday - Friday, 10:00 - 18:00\n\n
Mestia Tourist Information Center\n
Address: Seti Square N7\n
Tel: (+995 5 51) 08 08 94\n
Email: ticmestia@gmail.com\n
Working Hours: Monday - Friday, October - March 10:00 - 18:00; April - September 09:00 - 18:00\n\n
Ambrolauri Tourist Information Center\n
Address: Vazha-Pshavela Street N17\n
Tel: (+995 595) 00 36 56\n
Email: ticambrolauri@gmail.com\n
Working Hours: Daily, 10:00 - 18:00\n\n
Tsageri Tourist Information Center\n
Address: Rustaveli Street N67\n
Email: turizmiscentri123@gmail.com\n
Working Hours: Monday - Friday, 10:00 - 18:00`,
        },
      },
    ],
  },
  // -----
  {
    image: "https://cdn-icons-png.flaticon.com/512/1077/1077114.png",
    title: {
      ka: "კომუნიკაციები",
      en: "Communications",
    },
    description: {
      ka: "დიდი ჯგუფებისთვის სპეციალური ტრანსპორტის მოწყობა და ორგანიზება ღონისძიებებისთვის",
      en: "Arranging and organizing special transportation for large groups for events",
    },
    details: {
      ka: "გაიგე მეტი",
      en: "Learn More",
    },
    additionalInfo: [
      {
        description: {
          ka: "საქართველოში კომუნიკაციის ხარისხი გამართულია. 3G თითქმის ყველგან ხელმისაწვდომია, ხოლო დიდ ქალაქებში - თბილისსა და ბათუმში შეგიძლია  ascended4G-თაც ისარგებლო. ფინანსური თვალსაზრისით, მოგზაურისთვის ადგილობრივ ოპერატორთან დაკავშირება ხელსაყრელია. ადგილობრივი SIM ბარათის შესაძენად, რომელიც ნებისმიერ ხალხმრავალ ადგილზე იყიდება, მხოლოდ პასპორტია საჭირო.",
          en: "The quality of communication in Georgia is well-established. 3G is available almost everywhere, and in major cities like Tbilisi and Batumi, you can also use 4G. From a financial perspective, it is cost-effective for travelers to connect with a local operator. To purchase a local SIM card, which is sold in many crowded places, only a passport is required.",
        },
        title: {
          ka: "მობილური ქსელები",
          en: "Mobile Networks",
        },
        additionalDescription: {
          ka: "საქართველოში სამი ძირითადი მობილური ოპერატორია: „ჯეოსელი“, „მაგთი“ და „ბილაინი“. \n\n „ჯეოსელი“ - www.silknet.com ტელეფონი: 110 110 ან 277 01 77. \n\n „ჯეოსელი“ კომპანია „სილქნეტის“ მობილური კავშირგაბმულობის მიმართულება და საქართველოში ყველაზე გავრცელებული ქსელია. „ჯეოსელის“ სიმ-ბარათის შეძენა შესაძლებელია კომპანიის ოფისებში, აეროპორტში, სასტუმროებში და სხვა. \n\n „მაგთი“ - www.magticom.ge ტელეფონი: 110 011 ან 2217 00 00.\n\n ეს ინტერნეტპროვაიდერი უნდა აირჩიო, თუ საქართველოს ყველაზე შორეულ კუთხეებში აპირებ მოგზაურობას. „მაგთის“ SIM ბარათის შეძენა შესაძლებელია კომპანიის ოფისებში, საქართველოს ფოსტის 81 სერვისცენტრში და ა.შ. \n\n „ბილაინი“ - www.beeline.ge ტელეფონი: 110 101 ან 220 06 11. \n\n „ბილაინი“ იმ შემთხვევაში უნდა შეიძინო, თუკი დასახლებული ადგილის დატოვებას არ აპირებ, რადგან მოგზაურობის დროს მობილური კავშირი, შეიძლება, შეფერხდეს. \n\n მობილურზე ანგარიშის შევსება შესაძლებელია სწრაფი გადახდის აპარატებიდან, რომლებსაც თითქმის ყველა ქუჩაზე შეხვდები.",
          en: "There are three main mobile operators in Georgia: Geocell, Magti, and Beeline. \n\n Geocell - www.silknet.com Phone: 110 110 or 277 01 77. \n\n Geocell is the mobile division of Silknet and the most widespread network in Georgia. Geocell SIM cards can be purchased at company offices, airports, hotels, and other locations. \n\n Magti - www.magticom.ge Phone: 110 011 or 2217 00 00. \n\n Choose this provider if you plan to travel to the most remote areas of Georgia. Magti SIM cards can be purchased at company offices, 81 Georgian Post service centers, and other locations. \n\n Beeline - www.beeline.ge Phone: 110 101 or 220 06 11. \n\n Purchase Beeline if you do not plan to leave populated areas, as mobile connectivity may be disrupted during travel. \n\n You can top up your mobile account using quick payment machines, which are found on almost every street.",
        },
      },
    ],
  },

  {
    image: "https://cdn-icons-png.flaticon.com/512/3063/3063822.png",
    title: {
      ka: "სამუშაო საათები",
      en: "Working Hours",
    },
    description: {
      ka: "ყველა სახის ტრანსპორტის ტექნიკური შემოწმება და რემონტის მომსახურება",
      en: "Technical inspection and repair services for all types of transport",
    },
    details: {
      ka: "გაიგე მეტი",
      en: "Learn More",
    },
    additionalInfo: [
      {
        description: {
          ka: "საქართველოში საჯარო უწყებები მუშაობას 9:00 საათზე იწყებენ და 18:00 საათზე ამთავრებენ. შაბათი და კვირა დასვენების დღეებია, თუმცა არის გამონაკლისებიც. მაგალითად, შაბათ-კვირას თბილისის, ქუთაისისა და ბათუმის იუსტიციის სახლები 10:00-იდან 17:00 საათამდე მუშაობენ.",
          en: "In Georgia, public institutions start work at 9:00 AM and close at 6:00 PM. Saturday and Sunday are rest days, though there are exceptions. For example, on weekends, the Public Service Halls in Tbilisi, Kutaisi, and Batumi operate from 10:00 AM to 5:00 PM.",
        },
        additionalDescription: {
          ka: "თბილისის მეტროპოლიტენის სამუშაო საათები ყოველდღე 06:00-იდან 24:00 საათამდე განისაზღვრება. \n\n საზოგადოებრივი ტრანსპორტი მუშაობს ყოველდღე 07:00-იდან 23:00 საათამდე. \n\n თბილისის სავაჭრო ცენტრები და სუპერმარკეტები ძირითადად 8:00-დან 22-23:00 საათამდე მუშაობენ. შაბათსა და კვირას ბევრი სავაჭრო ცენტრი და სუპერმარკეტი მუშაობას 15:00-16:00 საათზე ამთავრებს \n\n როგორც წესი, თბილისის ბაზრობები ყოველდღიურად, დილის 9 საათიდან საღამოს 5 საათამდე მუშაობენ, თუმცა არის გამონაკლისებიც: \n\n ოქროს ბირჟა — 11:00-18:00 ყოველდღე. \n\n მშრალი ხიდის ბაზარი - 9:00-17:00 ყოველდღე. \n\n ლილოს ბაზრობა - 7:00-14:00 ყოველდღე. \n\n ე.წ. დეზერტირების ბაზრობა - 7:00-17:00 ყოველდღე. \n\n „მშრალი ხიდის“ ბაზრობა - 9:00-17:00 ყოველდღე. \n\n ბანკები სამუშაო დღეებში, ძირითადად, 10:00-იდან 18:00 საათამდე მუშაობენ, შაბათს კი - 10:00-იდან 14:00 საათამდე.",
          en: "Tbilisi Metro operates daily from 6:00 AM to 12:00 AM. \n\n Public transport operates daily from 7:00 AM to 11:00 PM. \n\n Tbilisi shopping centers and supermarkets generally operate from 8:00 AM to 10:00-11:00 PM. On Saturdays and Sundays, many shopping centers and supermarkets close at 3:00-4:00 PM. \n\n As a rule, Tbilisi markets operate daily from 9:00 AM to 5:00 PM, though there are exceptions: \n\n Gold Exchange — 11:00 AM-6:00 PM daily. \n\n Dry Bridge Market — 9:00 AM-5:00 PM daily. \n\n Lilo Market — 7:00 AM-2:00 PM daily. \n\n So-called Desertirebi Market — 7:00 AM-5:00 PM daily. \n\n “Dry Bridge” Market — 9:00 AM-5:00 PM daily. \n\n Banks generally operate on weekdays from 10:00 AM to 6:00 PM, and on Saturdays from 10:00 AM to 2:00 PM.",
        },
      },
    ],
  },

  {
    image: "https://cdn-icons-png.flaticon.com/512/1828/1828970.png",
    title: {
      ka: "პრემიუმ სერვისი",
      en: "Premium Service",
    },
    description: {
      ka: "ლუქს კლასის ტრანსპორტი და განსაკუთრებული მომსახურება VIP მომხმარებლებისთვის",
      en: "Luxury class transportation and exceptional service for VIP customers",
    },
    details: {
      ka: "გაიგე მეტი",
      en: "Learn More",
    },
    additionalInfo: [],
  },
];

// tabs
export interface TabContent {
  city: { ka: string; en: string };
  description: { ka: string; en: string };
  title?: { ka: string; en: string };
  image?: string;
  aditionalDescription: { ka: string; en: string };
}

export const tabContent: TabContent[] = [
  {
    city: {
      ka: "თბილისი",
      en: "Tbilisi",
    },
    description: {
      ka: `
<strong>მეტრო</strong> \n\n
საქართველოს აქვს კარგად განვითარებული სატრანსპორტო სისტემა, რომელიც საჰაერო, წყლის, სარკინიგზო და საავტომობილო ტრანსპორტს მოიცავს. საქართველოს დედაქალაქში ერთ-ერთი ყველაზე მნიშვნელოვანი ტრანსპორტი მეტროპოლიტენია. თბილისში მეტრო 1966 წლის 11 იანვარს გაიხსნა. ის საბჭოთა კავშირში რიგით მეოთხე მეტროს სისტემა იყო მოსკოვის, ლენინგრადისა და კიევის შემდეგ.

დღეისათვის თბილისის მეტროპოლიტენი 2 ხაზსა და 23 მოქმედ სადგურს მოიცავს. აქედან 16 განლაგებულია გლდანი-ვარკეთილის, ხოლო 7 – საბურთალოს ხაზზე. ხაზების საერთო სიგრძე 26,4 კმ-ია. 

<strong>პირველი ხაზის სადგურები:</strong>

1. მ/ს ვარკეთილი (ჯავახეთის ქუჩა) \n\n
2. მ/ს სამგორი (ქეთევან წამებულის გამზირი) \n\n
3. მ/ს ისანი (ქეთევან წამებულის გამზირი) \n\n
4. მ/ს 300 არაგველი (ქეთევან წამებულის გამზირი) \n\n
5. მ/ს ავლაბარი (ქეთევან წამებულის გამზირი) \n\n
6. მ/ს თავისუფლების მოედანი (თავისუფლების მოედანი) \n\n
7. მ/ს რუსთაველი (კოსტავას ქუჩა) \n\n
8. მ/ს მარჯანიშვილი (კოტე მარჯანიშვილის ქუჩა) \n\n
9. მ/ს სადგურის მოედანი (სადგურის მოედანი) \n\n
10. მ/ს ნაძალადევი (ცოტნე დადიანის ქუჩა) \n\n
11. მ/ს გოცირიძე (ზესტაფონის ქუჩა) \n\n
12. მ/ს დიდუბე (თორნიკე ერისთავის ქუჩა; ტრანსპორტის ქუჩა) \n\n
13. მ/ს ღრმაღელე (გურამიშვილის გამზირი) \n\n
14. მ/ს გურამიშვილი (გურამიშვილის გამზირი) \n\n
15. მ/ს სარაჯიშვილი (გურამიშვილის გამზირი) \n\n
16. მ/ს ახმეტელის თეატრი (ხიზანიშვილის ქუჩა) \n\n

<strong>მეორე (საბურთალოს) ხაზის სადგურების სია:</strong>

1. მ/ს სადგურის მოედანი (სადგურის მოედანი) \n\n
2. მ/ს წერეთელი (წერეთლის გამზირი) \n\n
3. მ/ს ტექნიკური უნივერსიტეტი (26 მაისის მოედანი) \n\n
4. მ/ს სამედიცინო უნივერსიტეტი (ვაჟა-ფშაველას გამზირი) \n\n
5. მ/ს დელისი (ვაჟა-ფშაველას გამზირი) \n\n
6. მ/ს ვაჟა-ფშაველა (ვაჟა-ფშაველას გამზირი) \n\n
7. სახელმწიფო უნივერსიტეტი (ვაჟა-ფშაველას გამზირი) \n\n

თბილისის მეტროპოლიტენი მგზავრებისთვის 6:00-იდან 24:00-ამდე მუშაობს. 

თბილისში საზოგადოებრივი ტრანსპორტის სააბონენტო სისტემა მოქმედებს. ბარათი განკუთვნილია მეტროს, ავტობუსის, მიკროავტობუსისა და საბაგიროსთვის. სააბონენტო ბარათის შეძენა მეტროს სადგურების სალაროებსა და საქართველოს ბანკის ექსპრეს ფილიალებშია შესაძლებელი. ერთი მიმართულებით მგზავრობის საფასური 1 ლარია. ერთი გადახდის შემდგომ კი მომხმარებელს შეუძლია, 90 წუთის განმავლობაში ნებისმიერი მიმართულებით უფასოდ იმგზავროს.

<strong>ავტობუსი</strong> \n\n
საქართველოში საზოგადოებრივი ტრანსპორტის სეგმენტში ყველაზე მრავალრიცხოვანი სატრანსპორტო საშუალება ავტობუსია. 

<strong>ავტობუსით თბილისში</strong>

თბილისში მუნიციპალური ტრანსპორტი 06:00-იდან 00:00-ამდე ფუნქციონირებს. ერთი მიმართულებით მგზავრობის ტარიფი 1 ლარია. გადახდა ხდება ბარათის ან სამგზავრო აბონემენტის საშუალებით. თუკი თბილისში ყოფნისას აქტიურად აპირებ საზოგადოებრივი ტრანსპორტის გამოყენებას, უმჯობესი იქნება, აბონემენტი შეიძინო. აბონემენტის ყიდვა შესაძლებელია მასტერქარდის საბანკო ბარათით ან აბონემენტით, რომელიც შეგიძლია მეტროპოლიტენის სალაროებში შეიძინო.

დედაქალაქში მოქმედებს ერთდღიანი, ერთკვირიანი, ერთთვიანი, სამთვიანი, ექვსთვიანი და ერთწლიანი აბონემენტები. ისინი გამოიყენება როგორც ავტობუსებში, ისე მიკროავტობუსებსა და მეტროში და დღის განმავლობაში 20-ამდე მიმართულებით უფასოდ მგზავრობის შესაძლებლობას გაძლევს. `,
      en: `
<strong>Metro</strong> \n\n
Georgia has a well-developed transportation system that includes air, water, rail, and road transport. One of the most important forms of transport in the capital of Georgia is the metro. The Tbilisi Metro opened on January 11, 1966. It was the fourth metro system in the Soviet Union, following Moscow, Leningrad, and Kyiv.

Currently, the Tbilisi Metro consists of 2 lines and 23 operational stations. Of these, 16 are located on the Gldani-Varketili line, and 7 on the Saburtalo line. The total length of the lines is 26.4 km.

<strong>First Line Stations:</strong>

1. Varketili Station (Javakheti Street) \n\n
2. Samgori Station (Ketevan Tsamebuli Avenue) \n\n
3. Isani Station (Ketevan Tsamebuli Avenue) \n\n
4. 300 Aragveli Station (Ketevan Tsamebuli Avenue) \n\n
5. Avlabari Station (Ketevan Tsamebuli Avenue) \n\n
6. Freedom Square Station (Freedom Square) \n\n
7. Rustaveli Station (Kostava Street) \n\n
8. Marjanishvili Station (Kote Marjanishvili Street) \n\n
9. Station Square Station (Station Square) \n\n
10. Nadzaladevi Station (Tsotne Dadiani Street) \n\n
11. Gotsiridze Station (Zestaponi Street) \n\n
12. Didube Station (Tornike Eristavi Street; Transport Street) \n\n
13. Ghrmaghele Station (Guramishvili Avenue) \n\n
14. Guramishvili Station (Guramishvili Avenue) \n\n
15. Sarajishvili Station (Guramishvili Avenue) \n\n
16. Akhmeteli Theatre Station (Khizanishvili Street) \n\n

<strong>Second (Saburtalo) Line Stations:</strong>

1. Station Square Station (Station Square) \n\n
2. Tsereteli Station (Tsereteli Avenue) \n\n
3. Technical University Station (May 26 Square) \n\n
4. Medical University Station (Vazha-Pshavela Avenue) \n\n
5. Delisi Station (Vazha-Pshavela Avenue) \n\n
6. Vazha-Pshavela Station (Vazha-Pshavela Avenue) \n\n
7. State University Station (Vazha-Pshavela Avenue) \n\n

The Tbilisi Metro operates for passengers from 6:00 AM to 12:00 AM.

Tbilisi has a public transport subscription system. The card is valid for the metro, buses, minibuses, and cable cars. Subscription cards can be purchased at metro station ticket offices and Bank of Georgia Express branches. The fare for a single journey is 1 GEL. After one payment, passengers can travel in any direction for free within 90 minutes.

<strong>Bus</strong> \n\n
In Georgia, the bus is the most numerous mode of public transport.

<strong>Bus in Tbilisi</strong>

In Tbilisi, municipal transport operates from 6:00 AM to 12:00 AM. The fare for a single journey is 1 GEL. Payment is made using a card or travel pass. If you plan to actively use public transport during your stay in Tbilisi, it’s better to purchase a pass. Passes can be bought with a MasterCard or a special card available at metro ticket offices.

The capital offers daily, weekly, monthly, three-month, six-month, and annual passes. These can be used on buses, minibuses, and the metro, allowing up to 20 free journeys per day in various directions. `,
    },
    image: "https://storage.georgia.travel/images/minibuses-1.webp",
    aditionalDescription: {
      ka: `თბილისის ავტობუსები ადაპტირებულია შშმ პირებისთვის, აღჭურვილია Wifi-ით, მგზავრობის განმავლობაში შესაძლებელია გაჯეტების დატენაც.

ავტობუსების მოძრაობას რეალურ დროში შეგიძლია დააკვირდე ვებგვერდზე https://ttc.com.ge/ აგრეთვე, მობილური აპლიკაციით - moovit, რომელიც ხელმისაწვდომია როგორც ios-ის, ისე Android-ის მომხმარებლებისთვის.

<strong>მიკროავტობუსი</strong> \n\n
თბილისში, მუნიციპალური ტრანსპორტი, მეტროსა და ავტობუსებთან ერთად, მოიცავს მიკროავტობუსებსაც. მიკროავტობუსები 06:00-დან 23:00 საათამდე მუშაობს. ტარიფი 1 ლარია. გადახდა ხდება ბარათის ან სამგზავრო აბონემენტის საშუალებით. თუკი თბილისში ყოფნისას აქტიურად აპირებ საზოგადოებრივი ტრანსპორტის გამოყენებას, უმჯობესი იქნება აბონემენტი შეიძინო. აბონემენტის ყიდვა შესაძლებელია მასტერქარდის საბანკო ბარათით ან სპეციალური ბარათით, რომელიც შეგიძლია მეტროპოლიტენის სალაროებში შეიძინო.

<strong>ტაქსი</strong> \n\n
თბილისში 24 საათის განმავლობაში შეუფერხებლად შეგიძლია გადაადგილდე ტაქსით. დღის ნებისმიერ მონაკვეთში ქალაქის ქუჩებში თეთრი ფერის კერძო ტაქსები სიამოვნებით გაგიწევენ დახმარებას. მათთან ანგარიშსწორება ნაღდი ფულის გადახდით ხდება. ბარათის საშუალებით შეგიძლია გადაიხადო მობილური აპლიკაციის მეშვეობით “ბოლტის’, “იანდექსის”, “მაქსიმის” და სხვა კომპანიის ტაქსების მომსახურებისას. მომსახურების ტარიფები იცვლება მარშრუტის ხანგრძლივობის შესაბამისად.

<strong>ელექტროსკუტერი</strong> \n\n
თბილისი ელექტროსკუტერების სიმრავლითაც გამოირჩევა. Scroll პირველი ბრენდია, რომელმაც თბილისში სკუტერების გაქირავება დაიწყო. მისი სკუტერებით სარგებლობის პრინციპი საკმაოდ მარტივია.

შექმნილია სპეციალური აპლიკაცია (BIRD) და ვებგვერდი www.scroll.eco, სადაც სკუტერის გამოყენების წესები და გადაადგილებისთვის აუცილებელი დეტალებია აღწერილი.

ელექტროსკუტერების გაქირავება სხვა კომპანიებშიცაა შესაძლებელი. ასეთია, მაგალითად: 

* KICK <strong>https://kicky.city</strong>

* JET <strong>https://jetshr.com</strong>

* “ქარი” <strong>https://qari.eco</strong>

„სქროლის“ გააქტიურება სმარტფონში ჩაწერილი შესაბამისი აპლიკაციით შეგიძლია. რთავ კამერას, ასკანერებ QR კოდს, აჭერ „ანლოქს“ და სწრაფად და მარტივად გადაადგილდები.

<strong>ველოსიპედი</strong>

თბილისის რთული რელიეფის მიუხედავად, ველოსიპედით მოძრაობა ნებისმიერი ტიპის გზაზეა შესაძლებელი. ახალბედა ველომოყვარულებისთვის ქალაქის დასასვენებელ პარკებში მოკლე ბილიკებია მოწყობილი. ლისის ტბასა და კუს ტბაზე არსებული ველობილიკით სარგებლობა საინტერესოა როგორც დამწყები, ისე გამოცდილი ველომოყვარულისთვის. 42-კილომეტრიანი ველობილიკია თბილისის ეროვნულ პარკშიც, ველოსიპედისთვის სპეციალური ბილიკებია დაგებული ქალაქის ცენტრალურ ქუჩებში. გასეირნება შესაძლებელია ქალაქგარეთაც, თუმცა იქ სპეციალური ბილიკები არ შეგხვდება. ველოსიპედის ქირაობა შესაძლებელია ლისისა და კუს ტბებზე, აგრეთვე, თბილისში არსებულ სხვადასხვა ობიექტზე.`,
      en: `Tbilisi buses are adapted for people with disabilities, equipped with Wi-Fi, and allow device charging during travel.

You can track bus movements in real-time on the website https://ttc.com.ge/ or via the Moovit mobile app, available for both iOS and Android users.

<strong>Minibus</strong> \n\n
In Tbilisi, municipal transport includes minibuses alongside the metro and buses. Minibuses operate from 6:00 AM to 11:00 PM. The fare is 1 GEL. Payment is made using a card or travel pass. If you plan to actively use public transport during your stay in Tbilisi, it’s better to purchase a pass. Passes can be bought with a MasterCard or a special card available at metro ticket offices.

<strong>Taxi</strong> \n\n
In Tbilisi, you can travel by taxi 24 hours a day without interruption. At any time of day, white private taxis on the city streets will gladly assist you. Payment with them is by cash. You can pay by card through mobile apps like Bolt, Yandex, Maxim, and other companies’ taxi services. Service rates vary depending on the route duration.

<strong>Electric Scooter</strong> \n\n
Tbilisi is also known for its abundance of electric scooters. Scroll was the first brand to start scooter rentals in Tbilisi. The principle of using their scooters is quite simple.

A dedicated app (BIRD) and website www.scroll.eco provide details on scooter usage rules and essential travel information.

Electric scooter rentals are also available from other companies, such as:

* KICK <strong>https://kicky.city</strong>

* JET <strong>https://jetshr.com</strong>

* “Qari” <strong>https://qari.eco</strong>

You can activate a Scroll scooter using the corresponding app on your smartphone. Turn on the camera, scan the QR code, press “Unlock,” and travel quickly and easily.

<strong>Bicycle</strong>

Despite Tbilisi’s challenging terrain, cycling is possible on any type of road. Short paths in the city’s recreational parks are designed for beginner cyclists. The bike paths at Lisi Lake and Turtle Lake are interesting for both novice and experienced cyclists. A 42-kilometer bike path is available in Tbilisi National Park, and dedicated bike lanes are laid out in the city’s central streets. Cycling is also possible outside the city, though dedicated paths are not available there. Bicycle rentals are available at Lisi and Turtle Lakes, as well as various locations in Tbilisi.`,
    },
  },
  {
    city: {
      ka: "ბათუმი",
      en: "Batumi",
    },
    description: {
      ka: `
<strong>მატარებელი</strong> \n\n
საქართველოში სამოგზაუროდ ჩამოსულ სტუმარს შესაძლებლობა აქვს, ქვეყნის შიგნით რკინიგზის საშუალებით გადაადგილდეს. ყველაზე აქტიურად მატარებლები თბილისსა და ბათუმს შორის მოძრაობენ, განსაკუთრებით - ზაფხულის სეზონზე, როდესაც უამრავი ტურისტი შავი ზღვისკენ მიიჩქარის. ამ დროს თბილისიდან ბათუმისკენ და უკან დღეში რამდენიმე რეისიც კი სრულდება. 

„შტადლერის“ ტიპის ორსართულიანი მატარებელი პირველად - ურეკში, შემდეგ - ქობულეთში, ბოლოს კი ბათუმში ჩერდება. თბილისის რკინიგზის სადგურიდან მატარებლები დასავლეთ საქართველოს სხვა ქალაქებშიც გადაადგილდებიან - ზუგდიდის, ფოთის, ოზურგეთისა და საჩხერის მიმართულებით. 

მატარებლით შეგიძლია რამდენიმე საათში თბილისიდან ბორჯომში ჩახვიდე, იქიდან კი ე.წ. „კუკუშკას“ მეშვეობით ბაკურიანში ამოყო თავი. გზად ულამაზესი ბორჯომის ხეობის დათვალიერებასაც შეძლებ. „კუკუშკა“ გაივლის ცემს, წაღვერს, ტბას და კიდევ რამდენიმე ულამაზეს საკურორტო ადგილს. 

მატარებლით შეგიძლია ქუთაისიდან - საჩხერეში, ხაშურიდან - ზესტაფონში და პირიქით იმგზავრო. ჯამში, საქართველოს შიდა რკინიგზას 15 მიმართულება აქვს და ერთიც - საერთაშორისო, თბილისი-ერევნის მიმართულება.

სასურველი მიმართულებების შესახებ დეტალური ინფორმაციის მიღებას, განრიგის, მგზავრობის ხანგრძლივობისა და ბილეთების რაოდენობის თაობაზე ინფორმაციის მოძიებას საქართველოს რკინიგზის ოფიციალურ საიტზე შეძლებ - www.railway.ge. 

აქვეა შესაძლებელი შერჩეული მიმართულებით ბილეთების წინასწარ შეძენა. რა თქმა უნდა, ბილეთების შეძენა უშუალოდ რკინიგზის სადგურის სალაროებშიც შეგიძლია და სწრაფი გადახდის აპარატების მეშვეობითაც. 

<strong>ავტობუსი</strong> \n\n
ბათუმში ავტობუსით გადაადგილება დილის 07:00 საათიდან საღამოს 22:30 საათამდეა შესაძლებელი. მოძრაობის ინტერვალი, საშუალოდ, 15-20 წუთია. ბილეთის საფასური 30 თეთრს შეადგენს. 

ქალაქში არსებულ გაზეთების ჯიხურებში, სუპერმარკეტებში: „სპარი“, „გუდვილი“, „მაგნიტი“, აგრეთვე, აეროპორტის მაღაზიებში შესაძლებელია შეიძინო ფასდაკლების ბარათი, ე.წ. „ბათუმი ქარდი“, რომლის ღირებულებაც 15 ლარს შეადგენს, 10-დღიანი ვადა აქვს და ავტობუსით 10-ჯერ მგზავრობისთვის არის გათვლილი.

<strong>მიკროავტობუსი</strong> \n\n
ბათუმში მიკროავტობუსებით მგზავრობა 07:00 საათიდან 23:00 საათამდეა შესაძლებელი. მოძრაობის ინტერვალი დაახლოებით 5-10 წუთია. მგზავრობის საფასური 0.70 თეთრს შეადგენს, გადახდა შესაძლებელია მხოლოდ ნაღდი ანგარიშსწორებით.

<strong>ტაქსი</strong> \n\n
ქალაქ ბათუმში ტაქსით გადაადგილება, აგრეთვე, 24 საათის განმავლობაშია შესაძლებელი. ვებგვერდზე - infoajara.com ტრანსპორტის გრაფაში დეტალურად შეგიძლია გაეცნო ინფორმაციას ტაქსის შესახებ. იქვე მითითებულია საკონტაქტო მონაცემებიც. მომსახურება, ძირითადად, ნაღდი ანგარიშსწორებით ხდება. ტარიფები იცვლება მარშრუტის ხანგრძლივობის შესაბამისად.

<strong>ელექტროსკუტერი</strong> \n\n
მეორე დიდი ქალაქი, სადაც სკუტერებს აქტიურად იყენებენ, ზღვისპირა ბათუმია. ზაფხულში ბათუმი თბილისზე არანაკლებ დატვირთულია, ელექტროსკუტერი კი საშუალებას მოგცემს, ამ ულამაზეს ქალაქში სწრაფად გადაადგილდე.

ელექტროსკუტერების დასაქირავებლად შექმნილია სპეციალური აპლიკაცია (BIRD) და ვებგვერდი www.scroll.eco, სადაც სკუტერის გამოყენების წესები და გადაადგილებისთვის აუცილებელი დეტალებია აღწერილი.

ელექტროსკუტერების გაქირავება სხვა კომპანიებშიცაა შესაძლებელი. ასეთია, მაგალითად: 

* KICK <strong>https://kicky.city/ka</strong> \n\n
* JET <strong>https://jetshr.com/ka</strong> \n\n
* “ქარი” <strong>https://qari.eco/</strong> \n\n
<strong>ველოსიპედი</strong> \n\n
ბათუმი კიდევ ერთი ქალაქია, სადაც ველოსიპედით სეირნობა ძალზე პოპულარულია. გამორჩეულად სასიამოვნოა ბულვარში ველოსიპედით გასეირნება. როგორც ძველ, ისე ახალ ბულვარს განსაკუთრებული ხიბლი აქვს. ველოსიპედის ქირაობა აქვე, ბულვარში შეგიძლია.`,
      en: `
<strong>Train</strong> \n\n
Visitors traveling to Georgia have the opportunity to move within the country by rail. Trains are most active between Tbilisi and Batumi, especially during the summer season when many tourists head to the Black Sea coast. During this time, several daily trips are made between Tbilisi and Batumi and back.

The Stadler-type double-decker train stops first in Ureki, then in Kobuleti, and finally in Batumi. From Tbilisi’s railway station, trains also travel to other cities in western Georgia, including Zugdidi, Poti, Ozurgeti, and Sachkhere.

By train, you can reach Borjomi from Tbilisi in a few hours and then take the so-called “Kukushka” to Bakuriani. Along the way, you can enjoy the beautiful Borjomi Gorge. The “Kukushka” passes through Tsemi, Tsaghveri, Tba, and several other stunning resort areas.

You can also travel by train from Kutaisi to Sachkhere, from Khashuri to Zestaponi, and vice versa. In total, Georgia’s domestic railway has 15 routes and one international route, Tbilisi-Yerevan.

Detailed information about desired routes, schedules, travel duration, and ticket availability can be found on the official Georgian Railway website - www.railway.ge.

Tickets can be purchased in advance on the website, at railway station ticket offices, or through quick payment machines.

<strong>Bus</strong> \n\n
In Batumi, bus travel is available from 7:00 AM to 10:30 PM. The average interval between buses is 15-20 minutes. The ticket price is 0.30 GEL.

At newspaper kiosks, supermarkets like Spar, Goodwill, and Magniti, and airport shops, you can purchase a discount card, the so-called “Batumi Card,” which costs 15 GEL, is valid for 10 days, and allows 10 bus trips.

<strong>Minibus</strong> \n\n
In Batumi, minibus travel is available from 7:00 AM to 11:00 PM. The interval between minibuses is approximately 5-10 minutes. The fare is 0.70 GEL, and payment is only possible with cash.

<strong>Taxi</strong> \n\n
In Batumi, taxi travel is available 24 hours a day. On the website infoajara.com, under the transport section, you can find detailed taxi information, including contact details. Payment is mainly by cash. Rates vary depending on the route duration.

<strong>Electric Scooter</strong> \n\n
The second major city where scooters are actively used is seaside Batumi. In summer, Batumi is no less busy than Tbilisi, and electric scooters allow you to move quickly through this beautiful city.

A dedicated app (BIRD) and website www.scroll.eco provide details on scooter usage rules and essential travel information.

Electric scooter rentals are also available from other companies, such as:

* KICK <strong>https://kicky.city/ka</strong> \n\n
* JET <strong>https://jetshr.com/ka</strong> \n\n
* “Qari” <strong>https://qari.eco/</strong> \n\n
<strong>Bicycle</strong> \n\n
Batumi is another city where cycling is very popular. Cycling along the boulevard is particularly enjoyable. Both the old and new boulevards have a special charm. Bicycle rentals are available right on the boulevard.`,
    },
    aditionalDescription: {
      ka: "",
      en: "",
    },
  },
  {
    city: {
      ka: "ქუთაისი",
      en: "Kutaisi",
    },
    description: {
      ka: `<strong>ავტობუსი</strong> \n\n
ქუთაისში კეთილმოწყობილი, ლურჯი ფერის ავტობუსებით ისარგებლებ. ისინი დილის 8 საათიდან საღამოს 22 საათამდე მუშაობენ. მოძრაობის ინტერვალი, საშუალოდ, 5-10 წუთია. ბილეთის საფასური 40 თეთრს შეადგენს.

<strong>ტაქსი</strong> \n\n
ქუთაისში 24 საათის განმავლობაში შეგიძლია ტაქსის აყვანა. აქაც არის შესაძლებელი ისარგებლო კერძო ტაქსების მომსახურებით, რაც ნაღდი ანგარიშსწორებას გულისხმობს და კომპანიების - მაქსიმის, ბოლტის და იანდექსის მობილური აპლიკაციებით, რომლის საშუალებითაც მგზავრობის ღირებულება შეგიძლია ბარათით დაფარო. მომსახურების ტარიფები იცვლება მარშრუტის ხანგრძლივობის შესაბამისად.

<strong>მიკროავტობუსი</strong> \n\n
ქუთაისში, ტაქსებისა და ავტობუსების გარდა, მიკროავტობუსებიც მოძრაობს. ზამთრის პერიოდში ტრანსპორტის ეს სახეობა 07:00 საათიდან 22:00 საათამდე, ზაფხულში კი - 07:00-დან 23:00 საათამდე მოგემსახურება. მოძრაობის ინტერვალი დაახლოებით 5-10 წუთია. მგზავრობის ღირებულება 50 თეთრია. გადახდა, ძირითადად, ნაღდი ანგარიშსწორებით ხდება.

<strong>ველოსიპედი</strong> \n\n
ქუთაისში ველოსიპედს იმ მაღაზიებში იქირავებ, სადაც სხვადასხვა სასპორტო აღჭურვილობა იყიდება.`,
      en: `<strong>Bus</strong> \n\n
In Kutaisi, you can use well-equipped blue buses. They operate from 8:00 AM to 10:00 PM. The average interval between buses is 5-10 minutes. The ticket price is 0.40 GEL.

<strong>Taxi</strong> \n\n
In Kutaisi, taxis are available 24 hours a day. You can use private taxi services, which require cash payment, or company services like Maxim, Bolt, and Yandex via their mobile apps, allowing payment by card. Service rates vary depending on the route duration.

<strong>Minibus</strong> \n\n
In Kutaisi, besides taxis and buses, minibuses also operate. In winter, this mode of transport runs from 7:00 AM to 10:00 PM, and in summer from 7:00 AM to 11:00 PM. The interval between minibuses is approximately 5-10 minutes. The fare is 0.50 GEL. Payment is mainly by cash.

<strong>Bicycle</strong> \n\n
In Kutaisi, you can rent bicycles at shops selling various sports equipment.`,
    },
    aditionalDescription: {
      ka: "",
      en: "",
    },
  },
];
// data 3 cards
export interface Service2 {
  title: { ka: string; en: string };
  logo: string;
  description: { ka: string; en: string };
  location: { ka: string; en: string };
  phone: string;
  link: string;
}

// Define the services array with type
export const services2: Service2[] = [
  {
    title: {
      ka: "Bene Exclusive",
      en: "Bene Exclusive",
    },
    logo: "/info/bene.webp",
    description: {
      ka: "სატრანსპორტო კომპანია ბენე ექსკლუზივი 2017 წელს დაარსდა და თავდაპირველად პრემიუმ კლასის ავტომობილებით მომსახურებას სთავაზობდა სტუმარ-მასპინძლობის სფეროს. საქმისადმი პროფესიონალური მიდგომით ბენე ექსკლუზივმა უმოკლეს დროში მოიპოვა მომხმარებლის ნდობა და მყარად დაიმკვიდრა ღირსეული ადგილი ქართულ ბაზარზე. დღეს ბენე ექსკლუზივი საქართველოში არსებული ყველაზე მსხვილი სატრანსპორტო კომპანია და დარგის უპირობო ლიდერია. იგი ორიენტირებულია მომხმარებლისთვის ხარისხიანი მომსახურების მიწოდებაზე, უსაფრთხოებასა და მაქსიმალური კომფორტის შექმნაზე.",
      en: "The transport company Bene Exclusive was founded in 2017 and initially offered premium-class vehicle services to the hospitality sector. With a professional approach, Bene Exclusive quickly gained customer trust and firmly established a reputable position in the Georgian market. Today, Bene Exclusive is the largest transport company in Georgia and an undisputed leader in the industry. It focuses on delivering high-quality services, ensuring safety, and creating maximum comfort for customers.",
    },
    location: {
      ka: "თბილისის საერთაშორისო აეროპორტი მოფრენის დარბაზი",
      en: "Tbilisi International Airport Arrival Hall",
    },
    phone: "+995 595 30 73 07",
    link: "https://bene-exclusive.com/",
  },
  {
    title: {
      ka: "Omni Bus",
      en: "Omni Bus",
    },
    logo: "/info/omnibus.webp",
    description: {
      ka: "Omnibus გთავაზობთ უსაფრთხო და კომფორტულ ტრანსფერებს საქართველოს ყველა საჯარო აეროპორტიდან.",
      en: "Omnibus offers safe and comfortable transfers from all public airports in Georgia.",
    },
    location: {
      ka: "თბილისის საერთაშორისო აეროპორტი",
      en: "Tbilisi International Airport",
    },
    phone: "+995 595 85 18 50",
    link: "https://www.omnibusexpress.ge/",
  },
  {
    title: {
      ka: "Georgian Bus",
      en: "Georgian Bus",
    },
    logo: "/info/bus.webp",
    description: {
      ka: "შპს ‘ჯორჯიან ბას’ ერთ-ერთი მოწინავე სატრანსპორტო კომპანიაა, რომელიც 7 წელზე მეტია რაც გამოჩნდა ბიზნეს ასპარეზზე სატრანსპორტო და ტურიზმის სფეროში, საქართველოში. ‘ჯორჯიან ბას’ ერთადერთი კომპანიაა, რომელიც 2014 წლიდან უზრუნველყოფს მგზავრების კომფორტულ და უსაფრთხო ტრანსპორტირებას საქართველოს სხვადასხვა ქალაქებიდან ქუთაისის საერთაშორისო აეროპორტის მიმართულებით და პირიქით ფრენების შესაბამისად.",
      en: "LLC ‘Georgian Bus’ is one of the leading transport companies, operating in the transport and tourism sectors in Georgia for over 7 years. It is the only company that, since 2014, has provided comfortable and safe transportation for passengers from various cities in Georgia to Kutaisi International Airport and vice versa, aligned with flight schedules.",
    },
    location: {
      ka: "ქუთაისის აეროპორტი",
      en: "Kutaisi Airport",
    },
    phone: "+995 555 39 73 87",
    link: "https://georgianbus.com/",
  },
];

// wather climate page data

export interface AdditionalInfo {
  description?: { ka: string; en: string };
  image?: string;
  additionalDescription: { ka: string; en: string };
  title?: { ka: string; en: string };
}

export interface ClimateData {
  image: string;
  title: { ka: string; en: string };
  description: { ka: string; en: string };
  details: { ka: string; en: string };
  additionalInfo?: AdditionalInfo[];
}

export const climateData: ClimateData[] = [
  {
    image: "/icons/weather.webp",
    title: {
      ka: "ამინდი და სეზონურობა",
      en: "Weather and Seasonality",
    },
    description: {
      ka: "რას აკეთებ პირველად, როდესაც მოგზაურობის ადგილს ირჩევ? რა თქმა უნდა, იქაურ ამინდსა და სეზონურობას ეცნობი. ზოგან ცხელი ზაფხულია, ზოგან - ცივი ზამთარი, ზოგან ან მხოლოდ ერთია, ან - მეორე. საქართველოში როგორაა? აქ, ამ 69 700 კვადრატულ კილომეტრზე, დედამიწის ზედაპირზე არსებული ჰავის თითქმის ყველა ზონაა - ნოტიო სუბტროპიკულიდან დაწყებული, მარადი თოვლისა და მყინვარების ზონით დამთავრებული.",
      en: "What’s the first thing you do when choosing a travel destination? Naturally, you check the local weather and seasonality. Some places have hot summers, others have cold winters, and some have only one or the other. What about Georgia? Here, within 69,700 square kilometers, you’ll find nearly every climate zone on Earth—from humid subtropical to zones of perpetual snow and glaciers.",
    },
    details: {
      ka: "გაიგე მეტი",
      en: "Learn More",
    },
    additionalInfo: [
      {
        description: {
          ka: "",
          en: "",
        },
        image: "",
        additionalDescription: {
          ka: `რას აკეთებ პირველად, როდესაც მოგზაურობის ადგილს ირჩევ? რა თქმა უნდა, იქაურ ამინდსა და სეზონურობას ეცნობი. ზოგან ცხელი ზაფხულია, ზოგან - ცივი ზამთარი, ზოგან ან მხოლოდ ერთია, ან - მეორე. 

საქართველოში როგორაა? აქ, ამ 69 700 კვადრატულ კილომეტრზე, დედამიწის ზედაპირზე არსებული ჰავის თითქმის ყველა ზონაა - ნოტიო სუბტროპიკულიდან დაწყებული, მარადი თოვლისა და მყინვარების ზონით დამთავრებული.

<strong>კახეთი</strong>

კახეთში როგორც სუბტროპიკული, ისე სტეპური კლიმატია. აქ ზამთარში საშუალო ტემპერატურა 0,5-+1.4°C-ია, ხოლო ზაფხულში - +23-30°C. კახეთში შეგხვდება ნახევრად უდაბნოები, ვაკეები, სუბალპური ტერიტორიები. ალაზნის ველზე ზომიერად სუბტროპიკული ჰავაა. აქ ზამთარში ტემპერატურა, საშუალოდ, 0°C-ია, ზაფხულში კი - 23-25°C. ანალოგიური ტემპერატურაა გარეკახეთში - ივრის ზეგანზე, გომბორისა და იალნოს ქედების წინა მთებზე.

<strong>აჭარა</strong>

რადიკალურად განსხვავებული ტემპერატურებია აჭარის ზღვისპირეთსა და მაღალმთიან აჭარაში. ზღვისპირეთში სუბტროპიკული ჰავაა. აქ თბილი ზამთარი და ცხელი ზაფხული იცის. დეკემბრიდან მარტის ჩათვლით ტემპერატურა, საშუალოდ, 4-6°C-ია, ზაფხულში კი 22-24°C-ს აჭარბებს. მაღალმთიან რაიონებში, სადაც სუბალპური ზონაა, ხანგრძლივი ზამთარია, ტემპერატურა 3-2°C-ს აღწევს, ზაფხულში კი ჰაერი 17-21°C-ამდე თბება.

<strong>აფხაზეთი</strong>

შავი ზღვის სანაპიროზე მდებარე აფხაზეთის დაბლობში ზღვის ნოტიო სუბტროპიკული ჰავაა და ის თბილი ზამთრითა და ცხელი ზაფხულით  გამოირჩევა. ზამთარში ხშირად ტემპერატურა 6°C აღემატება, ზაფხულში კი - 24.5°C-ს. რეგიონის მთიანი მხარისთვის ნოტიო ჰავა, ცივი ზამთარი და გრილი ზაფხულია დამახასიათებელი. ტემპერატურა ზამთარში -9, -10°C-ამდე ეცემა, ზაფხულში კი +10°C-ის ზევით ფიქსირდება.

<strong>გურია</strong>

გურია ბუნებრივი პირობების მიხედვით ორ - ბარისა და მთის ნაწილად იყოფა. დაბლობისთვის დამახასიათებელია ნოტიო სუბტროპიკული ჰავა, ზომიერად ცხელი ზაფხული და ზომიერად გრილი ზამთარი. ზამთარში საშუალო ტემპერატურა 4,8°C-ია, ზაფხულში კი - დაახლოებით 22,3°C. მთიან გურიაში მინიმალური ტემპერატურა -19°C-ია,  მაქსიმალური კი - 41°C.

<strong>ქვემო ქართლი</strong>

ქვემო ქართლი განლაგებულია ნახევრად უდაბნო, მშრალი სუბტროპიკული და მაღალმთიანი ალპური ზონის საზღვრებში. ამიტომ ბარში ნოტიო სუბტროპიკული და სუბტროპიკულ-კონტინენტური ჰავაა. მთიან რეგიონში ჰავა ზომიერად ნოტიოა, წალკის მიდამოებში კი - ზომიერად ნოტიოდან მშრალ სუბტროპიკულზე გარდამავალი. საშუალო წლიური ტემპერატურა 15.3℃-ია, იანვრის საშუალო ტემპერატურა - 4℃, ხოლო ივლის-აგვისტოსი - 25.2℃.

<strong>რაჭა-ლეჩხუმი</strong>

რაჭა-ლეჩხუმისთვის გრძელი ზამთარი და მოკლე ზაფხულია დამახასიათებელი. თუმცა  ზემო რაჭაში გაცილებით მკაცრი კლიმატია. ზამთარში ტემპერატურა ზოგჯერ -12°C-იდან -18°C-ამდე მერყეობს. შესაბამისად, ზაფხული გრილი და მოკლეა, ტემპერატურა, საშუალოდ, 20.4°C-ია. ქვემო რაჭასა და ლეჩხუმში შედარებით ნოტიო ჰავაა. აქ ზამთარში ტემპერატურა -0,3°C-ია, აგვისტოში კი - მინიმუმ, 22°C.

<strong>სამაჩაბლო</strong>

სამაჩაბლოში (ე.წ. სამხრეთ ოსეთი) ზომიერად ნოტიო ჰავაა - ზომიერად ცივი ზამთრითა და ხანგრძლივი, თბილი ზაფხულით. ჰაერის საშუალო წლიური ტემპერატურა 9,6°C-ია. მაგ., იანვარში შეიძლება ტემპერატურა -1,6°C-ამდე დაეცეს, ივლისიდან კი ზაფხულის განმავლობაში 20,3°-30°C-ამდე ავიდეს.

<strong>სამეგრელო</strong>

სამეგრელოს კლიმატზე გავლენას ახდენს როგორც ზღვის სიახლოვე, ისე მთიანი მხარე. ვაკე ნაწილში ტემპერატურა ზამთარში, საშუალოდ, 6-7°C-ია, ზაფხულში კი 22°C-ს აღემატება. რაც შეეხება მთიან ზონებს, აქ ზამთარში 0°C-ია.

<strong>სვანეთი</strong>

ზემო და ქვემო სვანეთში ნოტიო ჰავაა, ზამთარი გრძელი და ცივია, ხოლო ზაფხული - ხანმოკლე, თბილი და ზოგჯერ ცხელიც. საშუალო ტემპერატურა ზამთარში შეიძლება -6,4°C-იც იყოს, ზაფხულში კი მაქსიმალური ტემპერატურა +35°C-ზე ზევითაც ფიქსირდება.

<strong>თუშეთი</strong>

თუშეთი საქართველოს ერთ-ერთი ყველაზე ლამაზი, მაღალმთიანი რეგიონია, რომლის ტერიტორია ზღვის დონიდან დაახლოებით 2000 მ-იდან  4500 მ-ზეა განფენილი. აქ ზამთარი 5-6 თვე გრძელდება. ტემპერატურა, საშუალოდ, 3-8°C-ია, ივლის-აგვისტოში ჰაერი 15-30°C-ამდე თბება.

<strong>სამცხე-ჯავახეთი</strong>

სამცხე-ჯავახეთის უმეტეს ნაწილში ზამთარი ცივი და ხანგრძლივია, ტემპერატურა ხშირად 0℃-ის ქვევითაც ჩადის, საშუალოდ, -4°C-ამდე. ამიტომ ზაფხული შედარებით გვიან იწყება და ტემპერატურა +15-+30℃-ში მერყეობს. ზამთარი უფრო მკაცრია ჯავახეთის ზეგანზე, სადაც ტემპერატურის აბსოლუტური მინიმუმი -40℃-ია დაფიქსირებული.

<strong>იმერეთი</strong>

იმერეთში ძირითადად ზღვის ნოტიო სუბტროპიკული კლიმატია. აქ ზამთარი ცივია, ზაფხული კი - შედარებით მშრალი და ცხელი. იანვრის  ტემპერატურა +2-5°C-ია, ხოლო ზაფხულში მაქსიმალური ტემპერატურა +38-40°C-ს აღწევს.

<strong>მცხეთა-მთიანეთი</strong>

მრავალფეროვანი გეოგრაფიული მდებარეობით გამოირჩევა მცხეთა-მთიანეთი, რომელშიც შედის მთიანი ნაწილი - ხევი, ერწო-თიანეთი, ფშავი, ხევსურეთი, მთიულეთი, გუდამაყარი და ნაწილობრივ ქსნისხევი. შესაბამისად, ეს მხარეები განსხვავებული კლიმატური პირობებით გამოირჩევა.

მცხეთა-მთიანეთის მხარის დაბლობ ნაწილში ჰავა ზომიერად ნოტიოა. იცის ზომიერად ცივი ზამთარი და ცხელი, ხანგრძლივი ზაფხული. იანვარში ტემპერატურა 0℃-ზე დაბალიც კია, ზაფხულში კი +22°C-ზე ზევითაა. მთაში ზამთარში -12°C-იდან -18°C-იც ფიქსირდება. აქ გაზაფხული გვიან დგება, შემოდგომა კი - ადრე.

<strong>შიდა ქართლი</strong>

შიდა ქართლში ჰავა ზომიერად თბილი და ტენიანია, ზოგან - მშრალი. ზაფხულში მაქსიმალური ტემპერატურა 22°C-იდან 40°C-ამდე აღწევს. ზამთარში კი - 1°C-ამდე ეცემა. ნალექების რაოდენობა წელიწადში, საშუალოდ, 330-760 მმ-ია.`,
          en: `What’s the first thing you do when choosing a travel destination? Naturally, you check the local weather and seasonality. Some places have hot summers, others have cold winters, and some have only one or the other.

What about Georgia? Here, within 69,700 square kilometers, you’ll find nearly every climate zone on Earth—from humid subtropical to zones of perpetual snow and glaciers.

<strong>Kakheti</strong>

Kakheti features both subtropical and steppe climates. The average winter temperature ranges from 0.5 to +1.4°C, while in summer it’s +23 to 30°C. You’ll find semi-deserts, plains, and subalpine areas here. The Alazani Valley has a moderately subtropical climate, with average winter temperatures around 0°C and summer temperatures of 23-25°C. Similar temperatures are found in Outer Kakheti—on the Iori Plateau, and the foothills of the Gombori and Ialno ranges.

<strong>Adjara</strong>

Temperatures differ significantly between Adjara’s coastal areas and its highlands. The coast has a subtropical climate with warm winters and hot summers. From December to March, the average temperature is 4-6°C, while in summer it exceeds 22-24°C. In the highland areas, which are subalpine, winters are long with temperatures reaching 2-3°C, and summers warm up to 17-21°C.

<strong>Abkhazia</strong>

On the Black Sea coast, Abkhazia’s lowlands have a humid subtropical climate with warm winters and hot summers. Winter temperatures often exceed 6°C, while summer temperatures reach 24.5°C. The region’s mountainous areas have a humid climate with cold winters and cool summers. Winter temperatures can drop to -9 to -10°C, while summer temperatures rise above +10°C.

<strong>Guria</strong>

Guria is divided into lowland and mountainous parts based on natural conditions. The lowlands have a humid subtropical climate with moderately hot summers and cool winters. The average winter temperature is 4.8°C, and in summer, it’s around 22.3°C. In mountainous Guria, the minimum temperature is -19°C, and the maximum is 41°C.

<strong>Kvemo Kartli</strong>

Kvemo Kartli lies within semi-desert, dry subtropical, and highland alpine zones. The lowlands have humid subtropical and subtropical-continental climates. In the mountainous regions, the climate is moderately humid, transitioning to dry subtropical around Tsalka. The average annual temperature is 15.3°C, with January averaging -4°C and July-August averaging 25.2°C.

<strong>Racha-Lechkhumi</strong>

Racha-Lechkhumi is characterized by long winters and short summers. Upper Racha has a harsher climate, with winter temperatures ranging from -12°C to -18°C. Summers are cool and short, averaging 20.4°C. Lower Racha and Lechkhumi have a relatively humid climate, with winter temperatures around -0.3°C and August temperatures at least 22°C.

<strong>Samachablo</strong>

In Samachablo (also known as South Ossetia), the climate is moderately humid with moderately cold winters and long, warm summers. The average annual temperature is 9.6°C. For example, January temperatures may drop to -1.6°C, while summer temperatures from July range from 20.3°C to 30°C.

<strong>Samegrelo</strong>

Samegrelo’s climate is influenced by both its proximity to the sea and its mountainous areas. In the lowland areas, winter temperatures average 6-7°C, while summer temperatures exceed 22°C. In the mountainous zones, winter temperatures are around 0°C.

<strong>Svaneti</strong>

Upper and Lower Svaneti have a humid climate with long, cold winters and short, warm, sometimes hot summers. Winter temperatures can drop to -6.4°C, while summer maximums exceed +35°C.

<strong>Tusheti</strong>

Tusheti, one of Georgia’s most beautiful highland regions, spans from approximately 2,000 to 4,500 meters above sea level. Winters here last 5-6 months, with average temperatures of 3-8°C. In July-August, temperatures warm up to 15-30°C.

<strong>Samtskhe-Javakheti</strong>

In most of Samtskhe-Javakheti, winters are cold and long, with temperatures often dropping below 0°C, averaging around -4°C. Summers start relatively late, with temperatures ranging from +15 to +30°C. Winters are harsher on the Javakheti Plateau, where the absolute minimum temperature recorded is -40°C.

<strong>Imereti</strong>

Imereti mainly has a humid subtropical maritime climate. Winters are cold, and summers are relatively dry and hot. January temperatures range from +2 to 5°C, while summer maximums reach +38 to 40°C.

<strong>Mtskheta-Mtianeti</strong>

Mtskheta-Mtianeti is distinguished by diverse geographical locations, including mountainous areas like Khevi, Ertso-Tianeti, Pshavi, Khevsureti, Mtiulet, Gudamakari, and parts of Ksniskhevi. These regions have varied climatic conditions.

In the lowland areas, the climate is moderately humid with moderately cold winters and hot, long summers. January temperatures can drop below 0°C, while summer temperatures exceed +22°C. In the mountains, winter temperatures range from -12°C to -18°C, with spring arriving late and autumn early.

<strong>Shida Kartli</strong>

Shida Kartli has a moderately warm and humid climate, dry in some areas. Summer maximum temperatures range from 22°C to 40°C, while winter temperatures drop to around -1°C. Annual precipitation averages 330-760 mm.`,
        },
      },
    ],
  },
];

// acordion data

export interface FaqItem {
  question: { ka: string; en: string };
  answer: { ka: string; en: string };
}

export const faqItems: FaqItem[] = [
  {
    question: {
      ka: "იყო თუ არა საქართველო ღვინის სამშობლო?",
      en: "Is Georgia the birthplace of wine?",
    },
    answer: {
      ka: "საქართველო ფართოდ მოიხსენიება ღვინის სამშობლოდ, რადგან მას მეღვინეობის ხანგრძლივი და მდიდარი - 8000 წლიანი ისტორია აქვს. არქეოლოგიური გათხრების შედეგად დადგინდა, რომ საქართველოში, ღვინის დაყენების ტრადიციული მეთოდით, ღვინოს ჯერ კიდევ ძვ.წ. მეექვსე ათასწლეულში ამზადებდნენ, ხოლო ქვევრის ღვინის დაყენების უძველესი ქართული მეთოდი კი იუნესკოს არამატერიალური კულტურული მემკვიდრეობის წარმომადგენლობით სიაშია შეტანილი. \n\n ქართული ღვინის გემო და ხარისხი უნიკალურია - საქართველოში 500-ზე მეტი ჯიშის ადგილობრივ ყურძენს შეხვდები, რომელთაგან ბევრი საზღვარგარეთ არც კი ხარობს, ხოლო ყველაზე ცნობილი ქართული ღვინოებია - საფერავი, რქაწითელი და ქისი. \n\n ღვინის განსაკუთრებული მნიშვნელობა ქართულ კულტურაში საკმაოდ ბევრ წეს-ჩვეულებაში ჩანს, მათ შორის თამადისა და სადღეგრძელოების ტრადიციებში. \n\n საქართველოს მეღვინეობის მდიდარმა ისტორიამ ქართული ღვინო ქვეყნის კულტურული მემკვიდრეობის უნიკალურ და მნიშვნელოვან ნაწილად აქცია, რაც დღესაც გრძელდება და როდესაც აქ ჩამოხვალ, ამ განსაკუთრებულ თავგადასავალს თავად გამოცდი.",
      en: "Georgia is widely regarded as the birthplace of wine, boasting a rich and extensive winemaking history spanning 8,000 years. Archaeological findings have confirmed that wine was produced in Georgia as early as the 6th millennium BC using traditional methods, and the ancient Georgian technique of qvevri winemaking is included in UNESCO’s Representative List of the Intangible Cultural Heritage of Humanity. \n\n The taste and quality of Georgian wine are unique—Georgia is home to over 500 varieties of local grapes, many of which are not grown anywhere else in the world. The most famous Georgian wines include Saperavi, Rkatsiteli, and Kisi. \n\n The special significance of wine in Georgian culture is evident in numerous traditions, including those of the tamada (toastmaster) and toasting ceremonies. \n\n Georgia’s rich winemaking history has made Georgian wine a unique and significant part of the country’s cultural heritage, a legacy that continues today. When you visit, you’ll experience this extraordinary adventure firsthand.",
    },
  },
  {
    question: {
      ka: "უსაფრთხოა თუ არა საქართველოში მოგზაურობა?",
      en: "Is it safe to travel to Georgia?",
    },
    answer: {
      ka: "სხვადასხვა წყაროებზე დაყრდნობით, მათ შორის See.place-ისა და Numbeo-ს მიხედვით, საქართველო მსოფლიოში ყველაზე უსაფრთხო ქვეყნების ათეულშია - დანაშაულის დონის დაბალი და დანაშაულის გახსნის მაღალი მაჩვენებლით. \n\n ბოლო წლებში, ქვეყანაში, უსაფრთხოების მხარდასაჭერად რიგი რეფორმები გატარდა, მათ შორის, მეთვალყურეობისთვის ვიდეოკამერების გამოყენების, პოლიციის, საზოგადოებრივი უსაფრთხოებისა და გადაუდებელი დახმარების ერთიანი ნომრის(112) მიმართულებით. \n\n აქ ასევე კარგადაა განვითარებული გიდების სისტემაც - სერტიფიცირებული გიდებით, რომლებიც პასუხისმგებელნი არიან ტურისტების უსაფრთხოებაზე მოგზაურობის განმავლობაში. \n\n სანაპირო ზოლის ვიზიტორების უსაფრთხოება კი ქვეყნის სანაპირო დაცვის პასუხისმგებლობაა, რომელიც ასევე ეფექტურადაა გამართული. გარდა ამისა, ქვეყნის ვიზიტორების ჯანმრთელობისა და უსაფრთხოების უზრუნველსაყოფად, საქართველომ, Covid-19-ის პანდემიის დროს, სპეციალური ზომებიც მიიღო, შესაბამისად, თუ საქართველოში ჩამოსვლას აპირებ, იცოდე, რომ ეს უსაფრთხო გადაწყვეტილება იქნება და ქართველების სტუმართმოყვარეობა განსაკუთრებული შთაბეჭდილებებით აგავსებს.",
      en: "Based on various sources, including See.place and Numbeo, Georgia ranks among the top ten safest countries in the world, with low crime rates and high crime resolution rates. \n\n In recent years, the country has implemented several reforms to enhance safety, including the use of surveillance cameras, improvements in policing, public safety measures, and a unified emergency number (112). \n\n The guide system is also well-developed, with certified guides responsible for ensuring tourists’ safety during their travels. \n\n The safety of visitors to the coastal areas is managed by the country’s efficient coast guard. Additionally, to ensure the health and safety of visitors, Georgia implemented special measures during the Covid-19 pandemic. Therefore, if you’re planning to visit Georgia, rest assured it’s a safe decision, and the hospitality of Georgians will leave you with unforgettable impressions.",
    },
  },
  {
    question: {
      ka: "რომელია საუკეთესო სეზონი საქართველოში მოგზაურობისთვის?",
      en: "What is the best season to travel to Georgia?",
    },
    answer: {
      ka: "ალბათ უკვე იცი, რომ საქართველოში მოგზაურობა წლის ნებისმიერ დროს შესანიშნავია და აქ, თითოეული სეზონი თავისი უნიკალურობით მოგხიბლავს, თუმცა იდეალური დრო კულტურული და ისტორიული ტურებით დაინტერესებულთათვის გაზაფხული(აპრილიდან ივლისის დასაწყისამდე) და შემოდგომაა(სექტემბრიდან ნოემბრის ბოლომდე). ამ პერიოდში ამინდი მეტწილად თბილია, თუმცა ზოგჯერ არის მსუბუქი ქარიც და წვიმაც \n\n ზაფხული შესანიშნავია ექსტრემალური გამოცდილებებისა და ლაშქრობების მოყვარულთათვის და თუკი საქართველოში ამ სეზონზე ჩამოხვალ, აუცილებლად ესტუმრე სვანეთსა და თუშეთს. ასევე, თუ წელიწადის ყველაზე ცხელ პერიოდში ზღვაზე დასვენებაც გინდა, ქვეყნის დასავლეთ ნაწილში, შავი ზღვის სანაპირო ზოლი ამ მიმართულებითაც მოგხიბლავს. \n\n რაც შეეხება ზამთარს - ამ დროს შესაძლებლობა გექნება პოპულარული ზამთრის კურორტები - თოვლიანი გუდაური და ბაკურიანი მოინახულო, თხილამურებითა და სნოუბორდით ისრიალო და მრავალი სხვა, შენთვის საინტერესო გამოცდილება მიიღო.",
      en: "You probably already know that traveling to Georgia is wonderful any time of year, with each season offering its own unique charm. However, the ideal time for those interested in cultural and historical tours is spring (April to early July) and autumn (September to late November). During these periods, the weather is mostly warm, though occasionally accompanied by light winds or rain. \n\n Summer is perfect for adventure seekers and hiking enthusiasts. If you visit Georgia during this season, be sure to explore Svaneti and Tusheti. Additionally, if you want to relax by the sea during the hottest time of the year, the Black Sea coast in western Georgia will captivate you. \n\n As for winter, you’ll have the chance to visit popular winter resorts like snowy Gudauri and Bakuriani, where you can ski, snowboard, and enjoy many other exciting experiences.",
    },
  },
  {
    question: {
      ka: "არიან თუ არა ქართველები მეგობრულები?",
      en: "Are Georgians friendly?",
    },
    answer: {
      ka: "ქართველები დიდი სტუმართმოყვარეობით გამოირჩევიან და საქართველოს, როგორც სტუმართმოყვარე ქვეყანას, მთელი მსოფლიოს მასშტაბით იცნობენ. ამ ყველაფერს ხშირად, ძალიან პატარა დეტალებშიც კი შეატყობ, როგორიცაა ქუჩაში მისალმების, გამოლაპარაკებისა და კაფე-ბარებში ახალი მეგობრების შეძენის შემთხვევები. ეს ქართველებისთვის დამახასიათებელია, რადგან მათ სტუმრების მიღებისა და გაზიარების სიყვარული ტრადიციად აქვთ - სტუმართმოყვარეობა ქართული კულტურის ერთ-ერთ მნიშვნელოვანი ნაწილია, ამიტომ არ გაგიკვირდეს, თუკი შენთვის სრულიად უცნობი ადამიანი გემრიელი საკვებითა და სასმლით გაგიმასპინძლდება. \n\n თუ საქართველოში ვიზიტს გეგმავ, იცოდე, რომ ქართველებს ძალიან უყვართ თავისი ისტორია, ტრადიციები და კულტურა, შესაბამისად, შენი თავგადასავალი კიდევ უფრო ლამაზი, მეგობრული, სიახლეებით დატვირთული და დასამახსოვრებელი გახდება.",
      en: "Georgians are renowned for their great hospitality, and Georgia is recognized worldwide as a welcoming country. You’ll notice this in small details, such as greetings on the street, casual conversations, and making new friends in cafés or bars. This is characteristic of Georgians, as their love for hosting and sharing is a cherished tradition—hospitality is a cornerstone of Georgian culture. Don’t be surprised if a complete stranger treats you to delicious food or drinks. \n\n If you’re planning a visit to Georgia, know that Georgians take great pride in their history, traditions, and culture, making your adventure even more beautiful, friendly, enriching, and memorable.",
    },
  },
  {
    question: {
      ka: "როგორი ადგილია თბილისი საცხოვრებლად?",
      en: "What is Tbilisi like for living?",
    },
    answer: {
      ka: "თბილისი შესანიშნავი ადგილია საცხოვრებლად - ეს ქალაქი მრავალ შესაძლებლობას გთავაზობს, მათ შორის, მდიდარ და უნიკალურ ისტორიას, საოცარ კულტურულ მემკვიდრეობას, შთამბეჭდავი ხელოვნებით ტკბობასა და თავდაუვიწყარ გართობას. \n\n ის კეთილმოწყობილი, კოსმოპოლიტური ქალაქია, რომლის ინფრასტრუქტურა და კარგად განვითარებული საზოგადოებრივი ტრანსპორტი აუცილებლად მოგხიბლავს. ქალაქში გადაადგილებას ყველაზე მეტად მეტრო და ავტობუსები გაგიმარტივებს, ასევე, მომსახურებას თანამედროვე ჯანდაცვის ობიექტები გაგიწევს და საჭიროების შემთხვევაში, მრავალ საერთაშორისო სკოლასა და უნივერსიტეტსაც აღმოაჩენ. \n\n თბილისში ცხოვრების ერთ-ერთი მთავარი უპირატესობა ცხოვრების დაბალი ღირებულებაა ევროპის სხვა დიდ ქალაქებთან შედარებით. საცხოვრებელი, საკვები და გართობა უფრო მეტად ხელმისაწვდომია, ვიდრე ევროპის სხვა ქალაქებში, რაც თბილისს ემიგრანტებისთვისა და ახალგაზრდა, ციფრული თაობისთვის კიდევ უფრო მიმზიდველ ვარიანტად აქცევს. \n\n გარდა ამისა, თბილისი ცნობილია თავისი სტუმართმოყვარეობით, სხვადასხვა კულტურების მიმღებლობითა და მეგობრული სივრცეებით. ქალაქი გარშემორტყმულია მთებითა და სიმწვანით, რაც მშვიდ გარემოს ქმნის და გახვედრებს, რომ ამ ქალაქში ცხოვრება ნამდვილად საინტერესო თავგადასავალი იქნება, განსაკუთრებით კი მათთვის, ვისაც უძველესი ისტორიისა და თანამედროვე კულტურის ერთიანობა განსაკუთრებით ხიბლავს.",
      en: "Tbilisi is a wonderful place to live, offering numerous opportunities, including a rich and unique history, remarkable cultural heritage, inspiring arts, and unforgettable entertainment. \n\n It is a well-equipped, cosmopolitan city with infrastructure and well-developed public transportation that will surely captivate you. Getting around the city is made easy with the metro and buses, and modern healthcare facilities provide excellent services. You’ll also find numerous international schools and universities if needed. \n\n One of the main advantages of living in Tbilisi is the low cost of living compared to other major European cities. Housing, food, and entertainment are more affordable, making Tbilisi an attractive option for expatriates and the young, digital generation. \n\n Additionally, Tbilisi is known for its hospitality, openness to diverse cultures, and friendly spaces. Surrounded by mountains and greenery, the city creates a peaceful environment, convincing you that living here is truly an exciting adventure, especially for those enchanted by the blend of ancient history and modern culture.",
    },
  },
  {
    question: {
      ka: "რა ენაზე საუბრობენ საქართველოში?",
      en: "What language is spoken in Georgia?",
    },
    answer: {
      ka: "ქართული საქართველოს ოფიციალური ენაა, რომელზეც ლაპარაკობს ქვეყნის მოსახლეობის უმრავლესობა. \n\n ქართული არის ქართველური ენა, რომელიც არ არის დაკავშირებული სხვა ენათა ოჯახთან. მას აქვს თავისი უნიკალური დამწერლობა, რომელიც ცნობილია როგორც მხედრული და XI საუკუნიდან გამოიყენება წერილობით ქართულად. \n\n ქართულის გარდა, საქართველოში ასევე საუბრობენ რამდენიმე სხვა ენაზე, მათ შორის რუსულად, სომხურად და აზერბაიჯანულად. \n\n ჩვენს ქვეყანაში ასევე ხშირად გაიგებ ინგლისურ ენასაც, რომელიც ფართოდაა ათვისებული ახალგაზრდა თაობებში და ტურისტულად მნიშვნელოვან ადგილებში აქტიურად გამოიყენება. \n\n თუ საქართველოს ეწვევი, ქართული ენის გაცნობას მთელი ქვეყნის მასშტაბით შეძლებ, თუმცა ასევე სხვა ენების აღმოჩენის შესაძლებლობაც გექნება, გააჩნია რომელ რეგიონში გეგმავ მოგზაურობას.",
      en: "Georgian is the official language of Georgia, spoken by the majority of the population. \n\n Georgian is a Kartvelian language, unrelated to any other language family. It has its own unique script, known as Mkhedruli, which has been used for written Georgian since the 11th century. \n\n In addition to Georgian, several other languages are spoken in Georgia, including Russian, Armenian, and Azerbaijani. \n\n You’ll also frequently hear English, widely adopted by younger generations and actively used in tourist-friendly areas. \n\n When you visit Georgia, you’ll have the chance to experience the Georgian language nationwide, but you may also encounter other languages depending on the region you travel to.",
    },
  },
  {
    question: {
      ka: "რა ჰქვია საქართველოს დედაქალაქს?",
      en: "What is the capital of Georgia?",
    },
    answer: {
      ka: "საქართველოს დედაქალაქი თბილისია, ქვეყნის უდიდესი ქალაქი, რომელიც 1,1 მილიონზე მეტ მაცხოვრებელს აერთიანებს. \n\n ის ქვეყნის აღმოსავლეთ ნაწილში მდებარეობს, მდინარე მტკვრის ნაპირებზეა გაშენებული და უდიდესი ისტორიის მატარებელია. \n\n თბილისი, ჩვენი წელთაღრიცხვით მე-5 საუკუნით თარიღდება და თავისი ისტორიის მანძილზე სხვადასხვა სამეფოების, მათ შორის სპარსეთის, არაბეთისა და ოსმალეთის იმპერიების მიერ იმართებოდა. \n\n დღესდღეობით, თბილისი საკმაოდ ცოცხალი და კოსმოპოლიტური ქალაქია, რომელიც მრავალფეროვანი არქიტექტურით, მდიდარი კულტურული მახასიათებლებითა და საოცარი სტუმართმოყვარეობით ხასიათდება, მნიშვნელოვან ტურისტულ სანახაობებს აერთიანებს და მოგზაურებს უნიკალურ თავგადასავალს ჰპირდება. \n\n თუ თბილისს ეწვევი, ძველ თბილისს, ნარიყალას ციხეს, თბილისის ოპერისა და ბალეტის თეატრს და სხვა ბევრ მიმზიდველ ღირსშესანიშნაობას იხილავ.",
      en: "The capital of Georgia is Tbilisi, the country’s largest city, home to over 1.1 million residents. \n\n Located in the eastern part of the country, Tbilisi is built along the banks of the Mtkvari River and carries a profound historical legacy. \n\n Tbilisi dates back to the 5th century AD and has been governed by various kingdoms and empires throughout its history, including the Persian, Arab, and Ottoman empires. \n\n Today, Tbilisi is a vibrant and cosmopolitan city characterized by diverse architecture, rich cultural features, and remarkable hospitality. It hosts significant tourist attractions and promises travelers a unique adventure. \n\n When you visit Tbilisi, you’ll see Old Tbilisi, Narikala Fortress, the Tbilisi Opera and Ballet Theatre, and many other captivating landmarks.",
    },
  },
  {
    question: {
      ka: "სად მდებარეობს საქართველო?",
      en: "Where is Georgia located?",
    },
    answer: {
      ka: "საქართველო ევრაზიაში - ევროპისა და აზიის გზაჯვარედინზე მდებარეობს, კავკასიის რეგიონში, რომელსაც ჩრდილოეთით რუსეთი ესაზღვრება, სამხრეთით თურქეთი და სომხეთი, აღმოსავლეთით აზერბაიჯანი, ხოლო დასავლეთით - შავი ზღვა. \n\n გეოგრაფიულად, საქართველო მრავალფეროვანი ქვეყანაა - აქ შეხვდები თვალუწვდენელ მთებს, უხვი მოსავლით სავსე ხეობებსა და გრძელ სანაპირო ზოლებს. \n\n მისი დედაქალაქი თბილისია, რომელიც აღმოსავლეთ ნაწილში მდებარეობს და ქვეყნის დიდ ქალაქებს შორის პირველია. \n\n მიუხედავად საქართველოს ტერიტორიის მცირე ზომისა, აქ მდიდარ კულტურულ და ისტორიულ მემკვიდრეობას აღმოაჩენ, მრავალსაუკუნოვან შემოქმედებით და ინტელექტუალურ მიღწევებს გაიცნობ და უნიკალური ტრადიციები მოგხიბლავს. შეუდარებელია ქართული სამზარეულო, მუსიკალური ჰანგები და მომაჯადოებელი ცეკვა. \n\n თუ ჩვენს ქვეყანას ეწვევი, აქაურობის სილამაზითა და ვიზიტორების სიმრავლით ნამდვილად გაოცებული დარჩები, საქართველოში მოგზაურობის მრავალფეროვანი გამოცდილება, განსაცვიფრებელი პეიზაჟები და სიცოცხლით სავსე კულტურა კი არასოდეს დაგავიწყდება.",
      en: "Georgia is located in Eurasia, at the crossroads of Europe and Asia, in the Caucasus region. It is bordered by Russia to the north, Turkey and Armenia to the south, Azerbaijan to the east, and the Black Sea to the west. \n\n Geographically, Georgia is a diverse country, offering breathtaking mountains, fertile valleys, and long coastal strips. \n\n Its capital, Tbilisi, is located in the eastern part and is the largest city in the country. \n\n Despite its relatively small size, Georgia boasts a rich cultural and historical heritage. You’ll discover centuries-old creativity, intellectual achievements, and unique traditions. Georgian cuisine, musical melodies, and captivating dances are unparalleled. \n\n When you visit our country, you’ll be amazed by its beauty and the warmth of its visitors. The diverse experiences, stunning landscapes, and vibrant culture of Georgia will leave an unforgettable impression.",
    },
  },
];
export interface Props {
  img: string;
  title: {
    ka: string;
    en: string;
  };
  desc: {
    ka: string;
    en: string;
  };
}

export const blogs: Props[] = [
  {
    img: "/cardImage/mta.webp",
    title: {
      ka: "საქართველოს მთები და მწერვალები",
      en: "Mountains and Peaks of Georgia",
    },
    desc: {
      ka: "შეუძლებელია საქართველოზე ილაპარაკო ისე, რომ ერთხელ მაინც არ ახსენო მისი თვალწარმტაცი მთები, რომლებიც სულს აფრთხობს.",
      en: "It's impossible to talk about Georgia without mentioning its breathtaking mountains that inspire the soul.",
    },
  },
  {
    img: "/cardImage/opa.webp",
    title: {
      ka: "ქართული ღვინის ისტორია",
      en: "History of Georgian Wine",
    },
    desc: {
      ka: "ღვინო პირველად 8000 წლის წინ საქართველოში დააყენეს, ქვევრში დაყენების უნიკალური ტექნოლოგიით.",
      en: "Wine was first made 8000 years ago in Georgia, using the unique qvevri winemaking technology.",
    },
  },
  {
    img: "/cardImage/world.webp",
    title: {
      ka: "ქართული კულტურის სიმდიდრე",
      en: "The Richness of Georgian Culture",
    },
    desc: {
      ka: "ქართული ცეკვა, სიმღერა და ტრადიციები მსოფლიოს ერთ-ერთ უძველეს კულტურას წარმოადგენს.",
      en: "Georgian dance, song and traditions represent one of the world's oldest cultures.",
    },
  },
];

// ----------
export interface TravelMoment {
  id: number;
  image: string;
  alt: { ka: string; en: string };
  title: { ka: string; en: string };
  description: { ka: string; en: string };
  link: string;
}

export const travelMoments: TravelMoment[] = [
  {
    id: 1,
    image: "/cardImage/1.webp",
    alt: { ka: "ბახმარო", en: "Bakhmaro" },
    title: { ka: "ბახმარო", en: "Bakhmaro" },
    description: {
      ka: "ზამთარში სწორედ რომ ბახმაროში უნდა დაისვენო",
      en: "In winter, Bakhmaro is the perfect place to relax",
    },
    link: "https://www.instagram.com/p/CV3D_3WsRby/",
  },
  {
    id: 2,
    image: "/cardImage/2.webp",
    alt: { ka: "უძირო ტბა", en: "Bottomless Lake" },
    title: { ka: "უძირო ტბა", en: "Bottomless Lake" },
    description: {
      ka: "შეიგრძენი საქართველოს ბუნების მშვენიერება",
      en: "Experience the beauty of Georgia's nature",
    },
    link: "https://www.instagram.com/p/CeWS5BlMkIh/",
  },
  {
    id: 3,
    image: "/cardImage/3.webp",
    alt: { ka: "რთველი", en: "Rtveli" },
    title: { ka: "რთველი", en: "Rtveli" },
    description: {
      ka: "აღმოაჩინე ქართული ვაზის ჯიშები",
      en: "Discover Georgian grape varieties",
    },
    link: "https://www.instagram.com/p/CiudNVOD1xA/",
  },
  {
    id: 4,
    image: "/cardImage/4.webp",
    alt: { ka: "უშბა", en: "Ushba" },
    title: { ka: "უშბა", en: "Ushba" },
    description: {
      ka: "იმოგზაურეთ სვანეთში და შეიგრძენით უშბის მაგიური ატმოსფერო",
      en: "Travel to Svaneti and feel the magical atmosphere of Ushba",
    },
    link: "https://www.instagram.com/p/CfG3QMtMSWo/",
  },
  {
    id: 5,
    image: "/cardImage/5.webp",
    alt: { ka: "ტაბაწყურის ტბა", en: "Tabatskuri Lake" },
    title: { ka: "ტაბაწყურის ტბა", en: "Tabatskuri Lake" },
    description: {
      ka: "ბიომრავალფეროვნებით გამორჩეული ადგილი საქართველოში",
      en: "A place distinguished by biodiversity in Georgia",
    },
    link: "https://www.instagram.com/p/CkikD7gjLUZ/",
  },
  {
    id: 6,
    image: "/cardImage/6.webp",
    alt: { ka: "ხერთვისის ციხე", en: "Khertvisi Fortress" },
    title: { ka: "ხერთვისის ციხე", en: "Khertvisi Fortress" },
    description: {
      ka: "შუა საუკუნეების ციხესიმაგრე საქართველოში",
      en: "A medieval fortress in Georgia",
    },
    link: "https://www.instagram.com/p/CkxdXoYj52Q/",
  },
];

export interface CardItem {
  image: string;
  header: {
    ka: string;
    en: string;
  };
  title?: {
    ka: string;
    en: string;
  };
  text?: {
    ka: string;
    en: string;
  };
  description?: {
    ka: string;
    en: string;
  };
}

export interface Card {
  id: string;
  title: string;
  array: CardItem[];
}

export const card1: Card[] = [
  {
    id: "georgian-cuisine",
    title: "Georgian Cuisine Collection",
    array: [
      {
        image: "/cardImage/ach.webp",
        header: {
          ka: "აჭარული ხაჭაპური",
          en: "Adjarian Khachapuri",
        },
        title: {
          ka: "აღმოაჩინე ქართული გასტრონომია",
          en: "Discover Georgian Gastronomy",
        },
        text: {
          ka: "აქ ყველა კერძს დაუვიწყარი გემო აქვს",
          en: "Every dish here has an unforgettable taste",
        },
        description: {
          ka: "ქართული სამზარეულო საუკუნეების განმავლობაში იზიარებდა ევროპისა და ახლო აღმოსავლეთის საუკეთესო ტექნიკებს, ტრადიციებს და ქმნიდა თავის ინდივიდუალურ, დახვეწილ გემოებს. აქაურობა გურმანებს დაუვიწყარ თავგადასავალს ჰპირდება.",
          en: "Georgian cuisine has been sharing the best techniques and traditions of Europe and the Middle East for centuries, creating its own individual, refined flavors. Local cuisine promises gourmets an unforgettable adventure.",
        },
      },
      {
        image: "/cardImage/mt.webp",
        header: {
          ka: "მწვადი",
          en: "Mtsvadi (Georgian BBQ)",
        },
      },
    ],
  },
];

export interface SmallImage {
  src: string;
  alt: {
    ka: string;
    en: string;
  };
  title: {
    ka: string;
    en: string;
  };
}

export interface Place {
  image: string;
  title: {
    ka: string;
    en: string;
  };
  description: {
    ka: string;
    en: string;
  };
  smallImages: {
    title: {
      ka: string;
      en: string;
    };
    description: {
      ka: string;
      en: string;
    };
    images: SmallImage[];
  };
}

export const places: Place[] = [
  {
    image: `/space/backImage.webp`,
    title: {
      ka: "ადგილმდებარეობები საქართველოში",
      en: "Locations in Georgia",
    },
    description: {
      ka: "აქ ნახავ თოვლიან მთებს, შავი ზღვის სანაპიროებს, აღმოაჩენ უძველეს არქიტექტურულ ძეგლებსა და თანამედროვე, ურბანულ სანახაობებს - ეს მრავალფეროვანი პეიზაჟები და უდიდესი ისტორიის მქონე კულტურა 11 რეგიონსა და სხვადასხვა უნიკალურ ქალაქშია თავმოყრილი, სადაც უამრავ საინტერესო და განსხვავებულ ადგილს შეგიძლია ესტუმრო.",
      en: "Here you will see snow-capped mountains, Black Sea coasts, discover ancient architectural monuments and modern urban landscapes - these diverse landscapes and culture with great history are gathered in 11 regions and various unique cities, where you can visit many interesting and different places.",
    },
    smallImages: {
      title: {
        ka: "მეტი ადგილმდებარეობა",
        en: "More Locations",
      },
      description: {
        ka: "ჩრდილოეთით - კავკასიონი, დასავლეთით - შავი ზღვა, სამხრეთით - მთები, აღმოსავლეთით კი გაშლილი ველ-მინდვრები, მdinarეები, ჩანჩქერები, ულამაზესი ხეობები, ტბები, მღვიმეები, გამოქვაბულები და იდუმალი ტყეები. ეს საქართველოა, ულამაზესი და უძველესი ქვეყანა დედამიწაზე, სადაც წელიწადის ნებისმიერ დროს შეძლებ შენთვის საინტერესო მოგზაურობა ექსტრემალური ტურებითა თუ მსუბუქი სათავგადასავლო დასვენებით დაგეგმო.",
        en: "From the north - Caucasus, from the west - Black Sea, from the south - mountains, and from the east - vast plains, rivers, waterfalls, beautiful valleys, lakes, caves, grottoes and mysterious forests. This is Georgia, the most beautiful and ancient country on earth, where you can plan interesting travels at any time of the year with extreme tours or light adventure recreation.",
      },
      images: [
        {
          src: "/space/gnta.webp",
          alt: {
            ka: "ბახმაროს ხედი",
            en: "Bakhmaro View",
          },
          title: {
            ka: "ბახმარო",
            en: "Bakhmaro",
          },
        },
        {
          src: "/space/mestia.webp",
          alt: {
            ka: "მესტიის ხედი",
            en: "Mestia View",
          },
          title: {
            ka: "მესტია",
            en: "Mestia",
          },
        },
        {
          src: "/space/gudauri.webp",
          alt: {
            ka: "გუდაურის ხედი",
            en: "Gudauri View",
          },
          title: {
            ka: "გუდაური",
            en: "Gudauri",
          },
        },
        {
          src: "/space/bakuriani.webp",
          alt: {
            ka: "ბაკურიანის ხედი",
            en: "Bakuriani View",
          },
          title: {
            ka: "ბაკურიანი",
            en: "Bakuriani",
          },
        },
      ],
    },
  },
];

export interface Activity {
  id: number;
  title: { ka: string; en: string };
  image: string;
  imageAlt: { ka: string; en: string };
}

export const activities: Activity[] = [
  {
    id: 1,
    title: { ka: "მთავალდებულება", en: "Mountaineering" },
    image: "/mountain-peak-climbing-adventure.png",
    imageAlt: {
      ka: "მთის მწვერვალზე ასვლის თავგადასავალი",
      en: "Mountain peak climbing adventure",
    },
  },
  {
    id: 2,
    title: { ka: "ლაშქრობა", en: "Hiking" },
    image: "/forest-hiking-trail-adventure.png",
    imageAlt: {
      ka: "ტყის საფეხმავლო ბილიკის თავგადასავალი",
      en: "Forest hiking trail adventure",
    },
  },
  {
    id: 3,
    title: { ka: "ნულის სპორტი", en: "Water Sports" },
    image: "/extreme-river-rafting-adventure.png",
    imageAlt: {
      ka: "ექსტრემალური მდინარის რაფტინგის თავგადასავალი",
      en: "Extreme river rafting adventure",
    },
  },
  {
    id: 4,
    title: { ka: "ზიპ-ლაინი", en: "Ziplining" },
    image: "/canopy-zipline-adventure.png",
    imageAlt: {
      ka: "ტყის ზიპ-ლაინის თავგადასავალი",
      en: "Canopy zipline adventure",
    },
  },
];
