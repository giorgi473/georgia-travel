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

export interface ContentItem {
  title: { ka: string; en: string };
  description: { ka: string; en: string };
  anotherDescription?: { ka: string; en: string };
  imageSrc?: string;
  alt?: { ka: string; en: string };
}

export const sidebarItems: { ka: string; en: string }[] = [
  {
    ka: "კავკასიონის ქედი - შხარა, თეთნულდი, უშბა",
    en: "The Main Caucasus Range - Shkhara, Tetnuldi, and Ushba",
  },
  { ka: "ხოხის ქედი და მყინვარწვერი", en: "Khokhi ridge and glacier" },
  {
    ka: "პიქირითის ქედი და თებულოს მთა",
    en: "Pirikita Ridge and Tebulo Mountain",
  },
  {
    ka: "სამსრის ქედი და დიდი აბული",
    en: "Samsari Ridge and Didi Abuli",
  },
  {
    ka: "საქართველოს მწვერვალები",
    en: "Peaks of Georgia",
  },
];

export const contentItems: ContentItem[] = [
  {
    title: {
      ka: "კავკასიონის ქედი - შხარა, თეთნულდი, უშბა",
      en: "The Main Caucasus Range - Shkhara, Tetnuldi, and Ushba",
    },
    description: {
      ka: "კავკასიონი დიდი მთათა სისტემაა, რომელიც საქართველოს ჩრდილოეთით ესაზღვრება და რეგიონის კლიმატს, ხასიათსა და გეოპოლიტიკას განსაზღვრავს. ის ორ ზღვას შუაა გადაჭიმული და მარადთოვლიანი მწვერვალებითაა ცნობილი. მათ შორის ყველაზე მაღალი საქართველოში შხარაა, რომელიც 5203 მეტრის სიმაღლისაა და ზემო სვანეთში მდებარეობს.  \n\n კავკასიონი ათობით მდინარის „მშობელია“. ისინი შავ, კასპიისა და აზოვის ზღვების აუზებს მიეკუთვნება. მათ შორისაა: ბზიფი, კოდორი, ენგური, რიონი, თერგი და სხვები. აქ შეხვდები მყინვარულ, კარსტულ, ტექტონიკურ, ვულკანურ და სხვა სახის ტბებს, გასაოცარ მყინვარებსა და მრავალფეროვან ლანდშაფტებს, რაც, საერთო ჯამში, კავკასიონს იდეალურ დანიშნულების ადგილად აქცევს ბუნებისა და თავგადასავლების მოყვარულებისთვის.",
      en: "The Caucasus is a large mountain range stretching between the Black and the Caspian seas that largely defines the climate, character, and geopolitics of the region. \n\n The Caucasus is abundant with rivers, such as the Bziphi, Kodori, Enguri, Rioni, and Tergi, belonging to the Black, Caspian, and Azov sea basins. Glacial, karst, tectonic, volcanic, and other types of lakes lie along the range with dazzling glaciers and diverse landscapes. The Caucasus is an ideal destination for nature and adventure lovers.",
    },
    anotherDescription: {
      ka: "საქართველოს მწვერვალები მხოლოდ ქვეყნის ლანდშაფტის ნაწილი როდია - დევებივით აღმართული ეს უზარმაზარი მთები საუკუნეების განმავლობაში გვიცავდნენ და ქართულ ხასიათს აყალიბებდნენ. საქართველოში მთები მხოლოდ მთები არაა - მათ ღრმა კულტურული მნიშვნელობაც აქვს,  რომელმაც თავი ხალხურ ლეგენდებში, თქმულებებსა და მითებში გამოავლინა. ასეთები მრავლადაა ქართულ ზეპირსიტყვიერებაში.",
      en: "The highest peak in Georgia, 5,203 meters above sea level, is Shkhara, in Zemo (Upper) Svaneti Region. It attracts professional mountaineers, as there are no medium or easy routes. In 1888, Swiss mountaineers Ulrich Almer and Christian Roth, and British mountaineer John Cockin were the first ones to climb it from the side of the North Caucasus. Shkhara translates as “nine” in Svan, referring to the number of peaks on the ridge. \n\n Tetnuldi peak is one of the main reasons to visit Svaneti. Built from ancient crystalline rocks, 4,852 meters high, Tetnuldi peak frequently hosts climbers and winter sports enthusiasts. The Tetnuldi ski resort, the second largest mountain resort after Gudauri, opened in 2016.",
    },
    imageSrc: "/blog/mtebi-da-mtsvervalebi-shkhara.webp",
    alt: { ka: "მთები", en: "Mountains" },
  },
  {
    title: { ka: "ხოხის ქედი და მყინვარწვერი", en: "Khokhi ridge and glacier" },
    description: {
      ka: "ხოხის ქედი კავკასიონის ჩრდილოეთ გვერდითი ქედია, რომელზედაც რამდენიმე მწვერვალი მდებარეობს. მათ შორის უმაღლესია მყინვარწვერი - მწვერვალი, რომელიც არაერთი პოეტისა თუ პროზაიკოსის შთაგონების წყარო გამხდარა. ხოხის ქედი კავკასიონის მთავარ ქედს უკავშირდება არდონისა და თერგის წყალგამყოფით, სადაც თრუსოს ხეობა მდებარეობს. აღსანიშნავია, რომ ხეობები აქ რთულად მისადგომია, რის გამოც ის ალპინისტებისთვის საინტერესო ადგილია. ქედი გამორჩეულია მყინვარების სიმრავლითაც - აქ  გერგეტი, დევდარაკი, აბანო, მნა, ჩათა, სუათისი მდებარეობს.",
      en: "The Khokhi ridge is the northern lateral ridge of the Caucasus and has several peaks. Kazbegi (Mkinvartsveri) – the highest peak - has been a source of artistic inspiration for many poets and artists. The Khokhi ridge connects to the main ridge of the Caucasus through the Ardoni and Tergi watersheds in the Truso Valley. Most of the valleys in this location are hard to reach, making it even more attractive for alpinists. The ridge is distinguished by the abundance of glaciers like the Gergeti, Devdoraki, Abano, Mna, Chata, and Suatisi.",
    },
    imageSrc: "/blog/mtebi-da-mtsvervalebi-ushba.webp",
    alt: { ka: "მდინარე", en: "River" },
  },
  {
    title: {
      ka: "პიქირითის ქედი და თებულოს მთა",
      en: "Pirikita Ridge and Tebulo Mountain",
    },
    description: {
      ka: "მყინვარებით შემოსილი პირიქითის ქედი და ტებულოს მთა საქართველოს ერთ-ერთ ყველაზე მაღალ, დაკლაკნილგზებიან და კულტურულად მდიდარ მხარეს, თუშეთს დარაჯობს. 4498 მეტრის სიმაღლის მწვერვალი აღმოსავლეთ კავკასიონის უმაღლესი წერტილია. თუმცა ეს ერთადერთი ადგილი ნამდვილად არაა, რის გამოც თუშეთი უნდა მოინახულო. საქართველოს ეს მხარე მაღალი მთებითა და მწვერვალებითაა შემოჯარული, მათ შორის კი დაღარული ხეობებია, რომლებიც არაერთ მდინარესა თუ ჩანჩქერს უთავისუფლებს გზას. \n\n ტებულოს მთის დიდებულების შეცნობის გარდა, თუშეთს მდიდარი კულტურის, ეთნოგრაფიისა და ტრადიციების გამოც უნდა ესტუმრო. მთებს შორის მოქცეული ეს მხარე წელიწადის მეტ დროს იზოლირებული იყო, რამაც ადგილობრივების გამორჩეული ხასიათი, ცხოვრების სტილი, ტრადიციები თუ ფოლკლორი განსაზღვრა. თუ მიხვეულ-მოხვეული გზები არ გაშინებს და ხელუხლებელ გარემოსთან ზიარებაც გსურს, დაუვიწყარი მოგონებების დაგროვებაც ერთ-ერთი იმ მიზეზთაგანია, რის გამოც თუშეთს უნდა ეწვიო. ",
      en: "A part of the Pirikita Ridge, covered with glaciers, Mount Tebulo (Tebulosmta) stands guard over Tusheti. The 4,498-meter peak is one of the highest points of the Eastern Caucasus. However, this is not the only reason you should visit Tusheti. This part of Georgia is surrounded by high mountains, peaks, and valleys with multiple rivers and waterfalls. \n\n Along with the greatness of Mount Tebulo, Tusheti’s rich culture and traditions will attract you. It is isolated for most of the year due to its geographical location, and so the local community developed its distinctive character, lifestyle, traditions, and folklore. If you are brave enough to traverse the twisted roads and want unforgettable memories, Tusheti is waiting for you!",
    },
    imageSrc: "",
    alt: { ka: "ტბა", en: "Lake" },
  },
  {
    title: {
      ka: "სამსრის ქედი და დიდი აბული",
      en: "Samsari Ridge and Didi Abuli",
    },
    description: {
      ka: "ასე უწოდა ქართულ ცეკვას გენიალურმა ქართველმა მწერალმა გრიგოლ რობაქიძემ. ერის გონი, ანბანის თითოეული ასო ქართულ ცეკვაშია მოცემული. ქვეყანა თავის ისტორიას ცეკვით გიყვება. \n\n ცეკვა „ქართული“, „მთიულური“, „ბაღდადური“, „ჯეირანი“, „კინტოური“, „ხანჯლური“, „განდაგანა“, „სამაია“, „ხორუმი“ - ეს ქართული ხალხური ცეკვების მხოლოდ მცირე ჩამონათვალია. მათი ისტორია საუკუნეებს ითვლის, ქორეოგრაფია კი დღევანდელი კლასიკური ბალეტის დონეზეა აყვანილი. ცალკე აღსანიშნავია ტრადიციული ქართული ცეკვების თანამედროვე ვარიაციები, ახალი ცეკვები, რომლებიც საქართველოს აწმყოს შთამბეჭდავი გამოძახილია. \n\n დახვეწილ, ეროვნულ ტანსაცმელში შესრულებული ქართული ხალხური სიმღერები და ცეკვები ულამაზეს სანახაობას ქმნის და ამიტომ არ წყდება ანშლაგები მსოფლიოს უდიდეს სცენებზე, როდესაც მათზე გამოსასვლელად ქართველები ემზადებიან. \n\n ეს ქართულ ფოლკლორში მოგზაურობის მხოლოდ მცირე ტურია. მისი სიდიადე გაცილებით ღრმაა. ამ სიღრმის ყველაზე კარგად შეგრძნება კი, რაღა თქმა უნდა, აქ, საქართველოში შეგიძლია.",
      en: "This is how the brilliant Georgian writer Grigol Robakidze described Georgian dance. The spirit of the nation, each letter of the alphabet, is embodied in Georgian dance. The country tells its history through dance. \n\n Dances like 'Kartuli,' 'Mtiuluri,' 'Bagdaduri,' 'Jeirani,' 'Kintouri,' 'Khanjluri,' 'Gandagana,' 'Samaia,' and 'Khorumi' are just a small list of Georgian folk dances. Their history spans centuries, and their choreography is elevated to the level of modern classical ballet. Modern variations of traditional Georgian dances and new dances are also noteworthy, serving as impressive echoes of Georgia’s present. \n\n Performed in refined national costumes, Georgian folk songs and dances create a stunning spectacle, which is why sold-out performances never cease on the world’s greatest stages when Georgians prepare to perform. \n\n This is just a brief journey into Georgian folklore. Its grandeur is far deeper. The best way to experience this depth, of course, is here in Georgia.",
    },
    imageSrc: "/blog/mtebi-da-mtsvervalebi-samsaris-qedi.webp",
    alt: { ka: "პლაჟი", en: "Beach" },
  },
  {
    title: {
      ka: "საქართველოს მწვერვალები",
      en: "Peaks of Georgia",
    },
    description: {
      ka: "ასე უწოდა ქართულ ცეკვას გენიალურმა ქართველმა მწერალმა გრიგოლ რობაქიძემ. ერის გონი, ანბანის თითოეული ასო ქართულ ცეკვაშია მოცემული. ქვეყანა თავის ისტორიას ცეკვით გიყვება. \n\n ცეკვა „ქართული“, „მთიულური“, „ბაღდადური“, „ჯეირანი“, „კინტოური“, „ხანჯლური“, „განდაგანა“, „სამაია“, „ხორუმი“ - ეს ქართული ხალხური ცეკვების მხოლოდ მცირე ჩამონათვალია. მათი ისტორია საუკუნეებს ითვლის, ქორეოგრაფია კი დღევანდელი კლასიკური ბალეტის დონეზეა აყვანილი. ცალკე აღსანიშნავია ტრადიციული ქართული ცეკვების თანამედროვე ვარიაციები, ახალი ცეკვები, რომლებიც საქართველოს აწმყოს შთამბეჭდავი გამოძახილია. \n\n დახვეწილ, ეროვნულ ტანსაცმელში შესრულებული ქართული ხალხური სიმღერები და ცეკვები ულამაზეს სანახაობას ქმნის და ამიტომ არ წყდება ანშლაგები მსოფლიოს უდიდეს სცენებზე, როდესაც მათზე გამოსასვლელად ქართველები ემზადებიან. \n\n ეს ქართულ ფოლკლორში მოგზაურობის მხოლოდ მცირე ტურია. მისი სიდიადე გაცილებით ღრმაა. ამ სიღრმის ყველაზე კარგად შეგრძნება კი, რაღა თქმა უნდა, აქ, საქართველოში შეგიძლია.",
      en: "This is how the brilliant Georgian writer Grigol Robakidze described Georgian dance. The spirit of the nation, each letter of the alphabet, is embodied in Georgian dance. The country tells its history through dance. \n\n Dances like 'Kartuli,' 'Mtiuluri,' 'Bagdaduri,' 'Jeirani,' 'Kintouri,' 'Khanjluri,' 'Gandagana,' 'Samaia,' and 'Khorumi' are just a small list of Georgian folk dances. Their history spans centuries, and their choreography is elevated to the level of modern classical ballet. Modern variations of traditional Georgian dances and new dances are also noteworthy, serving as impressive echoes of Georgia’s present. \n\n Performed in refined national costumes, Georgian folk songs and dances create a stunning spectacle, which is why sold-out performances never cease on the world’s greatest stages when Georgians prepare to perform. \n\n This is just a brief journey into Georgian folklore. Its grandeur is far deeper. The best way to experience this depth, of course, is here in Georgia.",
    },
    imageSrc: "",
    alt: { ka: "პლაჟი", en: "Beach" },
  },
];

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
    content: { ka: "აქ არის 01 სექცია", en: "This is section 01" },
    image1: "/flags/image2.webp",
    image2: "/flags/image3.webp",
    image3: "/flags/clouds.webp",
    title: { ka: "საქართველოს \n გეოგრაფია", en: "Geography of Georgia" },
    description: {
      ka: "საქართველო ევროპისა და აზიის გზაგასაყარზე, კავკასიაში, შავი ზღვის სანაპიროზე მდებარეობს. ის საუკუნეების განმავლობაში ასრულებდა ცივილიზაციების დამაკავშირებელ ფუნქციას და სწორედ აქ გადიოდა „აბრეშუმის გზაც“ - მსოფლიოს უმსხვილესი სავაჭრო არტერია.",
      en: "Georgia is located at the crossroads of Europe and Asia, in the Caucasus, on the Black Sea coast. For centuries, it has served as a bridge between civilizations, and it was here that the 'Silk Road' passed—the world’s largest trade artery.",
    },
    buttonText: { ka: "გაიგე მეტი", en: "Learn More" },
    geographyOfGeorgia: [
      {
        image: "/blog/mtebi-da-mtsvervalebi-tetnuldi.webp",
        title: {
          ka: "საქართველოს მთები და მწვერვალები",
          en: "Georgia’s Mountains and Peaks",
        },
        description: {
          ka: "შეუძლებელია საქართველოზე ილაპარაკო ისე, რომ ერთხელ მაინც არ ახსენო დიდებული მთები, რომლებსაც, საითაც არ უნდა გაიხედო, ყველგან დაინახავ.",
          en: "Do you know who was the prototype for Prometheus or where Zeus chained him? Where was the 'Golden Fleece' kept, for which Jason crossed seas? Who was Medea, whose name gave rise to the word 'medicine'? Or where 'Chakrulo' is sung, the song sent into space?",
        },
      },
    ],
  },
  {
    id: "section-02",
    content: { ka: "აქ არის 02 სექცია", en: "This is section 02" },
    section02Images: [
      {
        src: "/flags/spring.webp",
        alt: { ka: "სლაიდი 1", en: "Slide 1" },
        text: { ka: "გაზაფხული", en: "Spring" },
      },
      {
        src: "/flags/summer.webp",
        alt: { ka: "სლაიდი 2", en: "Slide 2" },
        text: { ka: "ზაფხული", en: "Summer" },
      },
      {
        src: "/flags/autumn.webp",
        alt: { ka: "სლაიდი 4", en: "Slide 4" },
        text: { ka: "შემოდგომა", en: "Autumn" },
      },
      {
        src: "/flags/winter.webp",
        alt: { ka: "სლაიდი 3", en: "Slide 3" },
        text: { ka: "ზამთარი", en: "Winter" },
      },
    ],
    geographyOfGeorgia: [
      {
        image: "/blog/mtebi-da-mtsvervalebi-tetnuldi.webp",
        title: { ka: "სეზონურობა საქართველოში", en: "Seasonality in Georgia" },
        description: {
          ka: "უკვე იცი, რომ ევროპისა და აზიის გზაგასაყარზე, კავკასიონის ქედის ქვეშ, შავი ზღვის სანაპიროზე მდებარეობს პატარა ქვეყანა - საქართველო, რომელიც მდიდარი ისტორიის, არაჩვეულებრივი ბუნების, თავგადასავლების დიდი შესაძლებლობებისა და უგემრიელესი სამზარეულოს ქვეყანაა!",
          en: "You already know that at the crossroads of Europe and Asia, beneath the Caucasus Mountains, on the Black Sea coast, lies a small country—Georgia, a land of rich history, extraordinary nature, great opportunities for adventure, and delicious cuisine!",
        },
      },
    ],
  },
  {
    id: "section-03",
    content: { ka: "აქ არის 03 სექცია", en: "This is section 03" },
    image: "/blog/mtebi-da-mtsvervalebi-tetnuldi.webp",
    geographyOfGeorgia: [
      {
        image: "/blog/mtebi-da-mtsvervalebi-tetnuldi.webp",
        title: {
          ka: "საქართველო როგორც ღვინის აკვანი",
          en: "Georgia’s Mountains and Peaks",
        },
        description: {
          ka: "ქართული ღვინო 8000 წლისაა - იმ დროს უკვე იცოდნენ ქართველებმა ქვევრის უნიკალური ტექნოლოგია, რომელიც დღეს მსოფლიოს ერთ-ერთ მოწინავე მეთოდად იქცა. იცით, ეს ციფრები რას ნიშნავს? თუ გაინტერესებთ, ღვინის გზას გავუდგეთ…",
          en: "Georgian wine is 8,000 years old—at that time, Georgians already knew the unique qvevri technology, which today has become one of the world’s leading methods. Do you know what these numbers mean? If you’re interested, let’s take the wine route…",
        },
      },
    ],
  },
];
// 1 index
export const sidebarItems1: { ka: string; en: string }[] = [
  {
    ka: "კავკასიონის ქედი - შხარა, თეთნულდი, უშბა",
    en: "The Main Caucasus Range - Shkhara, Tetnuldi, and Ushba",
  },
  { ka: "ხოხის ქედი და მყინვარწვერი", en: "Khokhi ridge and glacier" },
  {
    ka: "პიქირითის ქედი და თებულოს მთა",
    en: "Pirikita Ridge and Tebulo Mountain",
  },
  {
    ka: "სამსრის ქედი და დიდი აბული",
    en: "Samsari Ridge and Didi Abuli",
  },
  {
    ka: "საქართველოს მწვერვალები",
    en: "Peaks of Georgia",
  },
];

export const contentItems1: ContentItem[] = [
  {
    title: {
      ka: "კავკასიონის ქედი - შხარა, თეთნულდი, უშბა",
      en: "The Main Caucasus Range - Shkhara, Tetnuldi, and Ushba",
    },
    description: {
      ka: "კავკასიონი დიდი მთათა სისტემაა, რომელიც საქართველოს ჩრდილოეთით ესაზღვრება და რეგიონის კლიმატს, ხასიათსა და გეოპოლიტიკას განსაზღვრავს. ის ორ ზღვას შუაა გადაჭიმული და მარადთოვლიანი მწვერვალებითაა ცნობილი. მათ შორის ყველაზე მაღალი საქართველოში შხარაა, რომელიც 5203 მეტრის სიმაღლისაა და ზემო სვანეთში მდებარეობს.  \n\n კავკასიონი ათობით მდინარის „მშობელია“. ისინი შავ, კასპიისა და აზოვის ზღვების აუზებს მიეკუთვნება. მათ შორისაა: ბზიფი, კოდორი, ენგური, რიონი, თერგი და სხვები. აქ შეხვდები მყინვარულ, კარსტულ, ტექტონიკურ, ვულკანურ და სხვა სახის ტბებს, გასაოცარ მყინვარებსა და მრავალფეროვან ლანდშაფტებს, რაც, საერთო ჯამში, კავკასიონს იდეალურ დანიშნულების ადგილად აქცევს ბუნებისა და თავგადასავლების მოყვარულებისთვის.",
      en: "The Caucasus is a large mountain range stretching between the Black and the Caspian seas that largely defines the climate, character, and geopolitics of the region. \n\n The Caucasus is abundant with rivers, such as the Bziphi, Kodori, Enguri, Rioni, and Tergi, belonging to the Black, Caspian, and Azov sea basins. Glacial, karst, tectonic, volcanic, and other types of lakes lie along the range with dazzling glaciers and diverse landscapes. The Caucasus is an ideal destination for nature and adventure lovers.",
    },
    anotherDescription: {
      ka: "საქართველოს მწვერვალები მხოლოდ ქვეყნის ლანდშაფტის ნაწილი როდია - დევებივით აღმართული ეს უზარმაზარი მთები საუკუნეების განმავლობაში გვიცავდნენ და ქართულ ხასიათს აყალიბებდნენ. საქართველოში მთები მხოლოდ მთები არაა - მათ ღრმა კულტურული მნიშვნელობაც აქვს,  რომელმაც თავი ხალხურ ლეგენდებში, თქმულებებსა და მითებში გამოავლინა. ასეთები მრავლადაა ქართულ ზეპირსიტყვიერებაში.",
      en: "The highest peak in Georgia, 5,203 meters above sea level, is Shkhara, in Zemo (Upper) Svaneti Region. It attracts professional mountaineers, as there are no medium or easy routes. In 1888, Swiss mountaineers Ulrich Almer and Christian Roth, and British mountaineer John Cockin were the first ones to climb it from the side of the North Caucasus. Shkhara translates as “nine” in Svan, referring to the number of peaks on the ridge. \n\n Tetnuldi peak is one of the main reasons to visit Svaneti. Built from ancient crystalline rocks, 4,852 meters high, Tetnuldi peak frequently hosts climbers and winter sports enthusiasts. The Tetnuldi ski resort, the second largest mountain resort after Gudauri, opened in 2016.",
    },
    imageSrc: "/blog/mtebi-da-mtsvervalebi-shkhara.webp",
    alt: { ka: "მთები", en: "Mountains" },
  },
  {
    title: { ka: "ხოხის ქედი და მყინვარწვერი", en: "Khokhi ridge and glacier" },
    description: {
      ka: "ხოხის ქედი კავკასიონის ჩრდილოეთ გვერდითი ქედია, რომელზედაც რამდენიმე მწვერვალი მდებარეობს. მათ შორის უმაღლესია მყინვარწვერი - მწვერვალი, რომელიც არაერთი პოეტისა თუ პროზაიკოსის შთაგონების წყარო გამხდარა. ხოხის ქედი კავკასიონის მთავარ ქედს უკავშირდება არდონისა და თერგის წყალგამყოფით, სადაც თრუსოს ხეობა მდებარეობს. აღსანიშნავია, რომ ხეობები აქ რთულად მისადგომია, რის გამოც ის ალპინისტებისთვის საინტერესო ადგილია. ქედი გამორჩეულია მყინვარების სიმრავლითაც - აქ  გერგეტი, დევდარაკი, აბანო, მნა, ჩათა, სუათისი მდებარეობს.",
      en: "The Khokhi ridge is the northern lateral ridge of the Caucasus and has several peaks. Kazbegi (Mkinvartsveri) – the highest peak - has been a source of artistic inspiration for many poets and artists. The Khokhi ridge connects to the main ridge of the Caucasus through the Ardoni and Tergi watersheds in the Truso Valley. Most of the valleys in this location are hard to reach, making it even more attractive for alpinists. The ridge is distinguished by the abundance of glaciers like the Gergeti, Devdoraki, Abano, Mna, Chata, and Suatisi.",
    },
    imageSrc: "/blog/mtebi-da-mtsvervalebi-ushba.webp",
    alt: { ka: "მდინარე", en: "River" },
  },
  {
    title: {
      ka: "პიქირითის ქედი და თებულოს მთა",
      en: "Pirikita Ridge and Tebulo Mountain",
    },
    description: {
      ka: "მყინვარებით შემოსილი პირიქითის ქედი და ტებულოს მთა საქართველოს ერთ-ერთ ყველაზე მაღალ, დაკლაკნილგზებიან და კულტურულად მდიდარ მხარეს, თუშეთს დარაჯობს. 4498 მეტრის სიმაღლის მწვერვალი აღმოსავლეთ კავკასიონის უმაღლესი წერტილია. თუმცა ეს ერთადერთი ადგილი ნამდვილად არაა, რის გამოც თუშეთი უნდა მოინახულო. საქართველოს ეს მხარე მაღალი მთებითა და მწვერვალებითაა შემოჯარული, მათ შორის კი დაღარული ხეობებია, რომლებიც არაერთ მდინარესა თუ ჩანჩქერს უთავისუფლებს გზას. \n\n ტებულოს მთის დიდებულების შეცნობის გარდა, თუშეთს მდიდარი კულტურის, ეთნოგრაფიისა და ტრადიციების გამოც უნდა ესტუმრო. მთებს შორის მოქცეული ეს მხარე წელიწადის მეტ დროს იზოლირებული იყო, რამაც ადგილობრივების გამორჩეული ხასიათი, ცხოვრების სტილი, ტრადიციები თუ ფოლკლორი განსაზღვრა. თუ მიხვეულ-მოხვეული გზები არ გაშინებს და ხელუხლებელ გარემოსთან ზიარებაც გსურს, დაუვიწყარი მოგონებების დაგროვებაც ერთ-ერთი იმ მიზეზთაგანია, რის გამოც თუშეთს უნდა ეწვიო. ",
      en: "A part of the Pirikita Ridge, covered with glaciers, Mount Tebulo (Tebulosmta) stands guard over Tusheti. The 4,498-meter peak is one of the highest points of the Eastern Caucasus. However, this is not the only reason you should visit Tusheti. This part of Georgia is surrounded by high mountains, peaks, and valleys with multiple rivers and waterfalls. \n\n Along with the greatness of Mount Tebulo, Tusheti’s rich culture and traditions will attract you. It is isolated for most of the year due to its geographical location, and so the local community developed its distinctive character, lifestyle, traditions, and folklore. If you are brave enough to traverse the twisted roads and want unforgettable memories, Tusheti is waiting for you!",
    },
    imageSrc: "",
    alt: { ka: "ტბა", en: "Lake" },
  },
  {
    title: {
      ka: "სამსრის ქედი და დიდი აბული",
      en: "Samsari Ridge and Didi Abuli",
    },
    description: {
      ka: "ასე უწოდა ქართულ ცეკვას გენიალურმა ქართველმა მწერალმა გრიგოლ რობაქიძემ. ერის გონი, ანბანის თითოეული ასო ქართულ ცეკვაშია მოცემული. ქვეყანა თავის ისტორიას ცეკვით გიყვება. \n\n ცეკვა „ქართული“, „მთიულური“, „ბაღდადური“, „ჯეირანი“, „კინტოური“, „ხანჯლური“, „განდაგანა“, „სამაია“, „ხორუმი“ - ეს ქართული ხალხური ცეკვების მხოლოდ მცირე ჩამონათვალია. მათი ისტორია საუკუნეებს ითვლის, ქორეოგრაფია კი დღევანდელი კლასიკური ბალეტის დონეზეა აყვანილი. ცალკე აღსანიშნავია ტრადიციული ქართული ცეკვების თანამედროვე ვარიაციები, ახალი ცეკვები, რომლებიც საქართველოს აწმყოს შთამბეჭდავი გამოძახილია. \n\n დახვეწილ, ეროვნულ ტანსაცმელში შესრულებული ქართული ხალხური სიმღერები და ცეკვები ულამაზეს სანახაობას ქმნის და ამიტომ არ წყდება ანშლაგები მსოფლიოს უდიდეს სცენებზე, როდესაც მათზე გამოსასვლელად ქართველები ემზადებიან. \n\n ეს ქართულ ფოლკლორში მოგზაურობის მხოლოდ მცირე ტურია. მისი სიდიადე გაცილებით ღრმაა. ამ სიღრმის ყველაზე კარგად შეგრძნება კი, რაღა თქმა უნდა, აქ, საქართველოში შეგიძლია.",
      en: "This is how the brilliant Georgian writer Grigol Robakidze described Georgian dance. The spirit of the nation, each letter of the alphabet, is embodied in Georgian dance. The country tells its history through dance. \n\n Dances like 'Kartuli,' 'Mtiuluri,' 'Bagdaduri,' 'Jeirani,' 'Kintouri,' 'Khanjluri,' 'Gandagana,' 'Samaia,' and 'Khorumi' are just a small list of Georgian folk dances. Their history spans centuries, and their choreography is elevated to the level of modern classical ballet. Modern variations of traditional Georgian dances and new dances are also noteworthy, serving as impressive echoes of Georgia’s present. \n\n Performed in refined national costumes, Georgian folk songs and dances create a stunning spectacle, which is why sold-out performances never cease on the world’s greatest stages when Georgians prepare to perform. \n\n This is just a brief journey into Georgian folklore. Its grandeur is far deeper. The best way to experience this depth, of course, is here in Georgia.",
    },
    imageSrc: "/blog/mtebi-da-mtsvervalebi-samsaris-qedi.webp",
    alt: { ka: "პლაჟი", en: "Beach" },
  },
  {
    title: {
      ka: "საქართველოს მწვერვალები",
      en: "Peaks of Georgia",
    },
    description: {
      ka: "ასე უწოდა ქართულ ცეკვას გენიალურმა ქართველმა მწერალმა გრიგოლ რობაქიძემ. ერის გონი, ანბანის თითოეული ასო ქართულ ცეკვაშია მოცემული. ქვეყანა თავის ისტორიას ცეკვით გიყვება. \n\n ცეკვა „ქართული“, „მთიულური“, „ბაღდადური“, „ჯეირანი“, „კინტოური“, „ხანჯლური“, „განდაგანა“, „სამაია“, „ხორუმი“ - ეს ქართული ხალხური ცეკვების მხოლოდ მცირე ჩამონათვალია. მათი ისტორია საუკუნეებს ითვლის, ქორეოგრაფია კი დღევანდელი კლასიკური ბალეტის დონეზეა აყვანილი. ცალკე აღსანიშნავია ტრადიციული ქართული ცეკვების თანამედროვე ვარიაციები, ახალი ცეკვები, რომლებიც საქართველოს აწმყოს შთამბეჭდავი გამოძახილია. \n\n დახვეწილ, ეროვნულ ტანსაცმელში შესრულებული ქართული ხალხური სიმღერები და ცეკვები ულამაზეს სანახაობას ქმნის და ამიტომ არ წყდება ანშლაგები მსოფლიოს უდიდეს სცენებზე, როდესაც მათზე გამოსასვლელად ქართველები ემზადებიან. \n\n ეს ქართულ ფოლკლორში მოგზაურობის მხოლოდ მცირე ტურია. მისი სიდიადე გაცილებით ღრმაა. ამ სიღრმის ყველაზე კარგად შეგრძნება კი, რაღა თქმა უნდა, აქ, საქართველოში შეგიძლია.",
      en: "This is how the brilliant Georgian writer Grigol Robakidze described Georgian dance. The spirit of the nation, each letter of the alphabet, is embodied in Georgian dance. The country tells its history through dance. \n\n Dances like 'Kartuli,' 'Mtiuluri,' 'Bagdaduri,' 'Jeirani,' 'Kintouri,' 'Khanjluri,' 'Gandagana,' 'Samaia,' and 'Khorumi' are just a small list of Georgian folk dances. Their history spans centuries, and their choreography is elevated to the level of modern classical ballet. Modern variations of traditional Georgian dances and new dances are also noteworthy, serving as impressive echoes of Georgia’s present. \n\n Performed in refined national costumes, Georgian folk songs and dances create a stunning spectacle, which is why sold-out performances never cease on the world’s greatest stages when Georgians prepare to perform. \n\n This is just a brief journey into Georgian folklore. Its grandeur is far deeper. The best way to experience this depth, of course, is here in Georgia.",
    },
    imageSrc: "",
    alt: { ka: "პლაჟი", en: "Beach" },
  },
];

export const sections1: Section[] = [
  {
    id: "start",
    content: { ka: "აქ არის Start სექცია", en: "This is the Start section" },
    image1: "/flags/image1.webp",
    image2: "/flags/image2.webp",
    image3: "/flags/clouds.webp",
  },
  {
    id: "section-01",
    content: { ka: "აქ არის 01 სექცია", en: "This is section 01" },
    image1: "/flags/image2.webp",
    image2: "/flags/image3.webp",
    image3: "/flags/clouds.webp",
    title: { ka: "საქართველოს \n გეოგრაფია", en: "Geography of Georgia" },
    description: {
      ka: "საქართველო ევროპისა და აზიის გზაგასაყარზე, კავკასიაში, შავი ზღვის სანაპიროზე მდებარეობს. ის საუკუნეების განმავლობაში ასრულებდა ცივილიზაციების დამაკავშირებელ ფუნქციას და სწორედ აქ გადიოდა „აბრეშუმის გზაც“ - მსოფლიოს უმსხვილესი სავაჭრო არტერია.",
      en: "Georgia is located at the crossroads of Europe and Asia, in the Caucasus, on the Black Sea coast. For centuries, it has served as a bridge between civilizations, and it was here that the 'Silk Road' passed—the world’s largest trade artery.",
    },
    buttonText: { ka: "გაიგე მეტი", en: "Learn More" },
    geographyOfGeorgia: [
      {
        image: "/blog/traditsiuli-samosi-qartuli-klasikuri-samosi.webp",
        title: {
          ka: "ქართული ტრადიციული სამოსი",
          en: "Traditional Georgian Clothes",
        },
        description: {
          ka: "უნიკალურობა და მრავალფეროვნება ქართული ეროვნული სამოსისა, რომელიც საუკუნეების განმავლობაში იქმნებოდა და დროთა განმავლობაში იცვლებოდა, ქვეყნის გეოგრაფიულმა, სოციალურ-პოლიტიკურმა მდგომარეობამ განაპირობა. მემატიანეების, ჟამთააღმწერლების მიერ",
          en: "The geographical and socio-political context of the nation has had an impact on the diversity of Georgian national dress, which has evolved over the centuries. Our understanding of how our ancestors lived or dressed is influenced by the stories that chroniclers have told. Moreover, the precise details of Georgian clothing are depicted on frescoes, bas-reliefs, and miniatures.",
        },
      },
    ],
  },
  {
    id: "section-02",
    content: { ka: "აქ არის 02 სექცია", en: "This is section 02" },
    section02Images: [
      {
        src: "/flags/spring.webp",
        alt: { ka: "სლაიდი 1", en: "Slide 1" },
        text: { ka: "გაზაფხული", en: "Spring" },
      },
      {
        src: "/flags/summer.webp",
        alt: { ka: "სლაიდი 2", en: "Slide 2" },
        text: { ka: "ზაფხული", en: "Summer" },
      },
      {
        src: "/flags/autumn.webp",
        alt: { ka: "სლაიდი 4", en: "Slide 4" },
        text: { ka: "შემოდგომა", en: "Autumn" },
      },
      {
        src: "/flags/winter.webp",
        alt: { ka: "სლაიდი 3", en: "Slide 3" },
        text: { ka: "ზამთარი", en: "Winter" },
      },
    ],
    geographyOfGeorgia: [
      {
        image: "/blog/mtebi-da-mtsvervalebi-tetnuldi.webp",
        title: { ka: "სეზონურობა საქართველოში", en: "Seasonality in Georgia" },
        description: {
          ka: "უკვე იცი, რომ ევროპისა და აზიის გზაგასაყარზე, კავკასიონის ქედის ქვეშ, შავი ზღვის სანაპიროზე მდებარეობს პატარა ქვეყანა - საქართველო, რომელიც მდიდარი ისტორიის, არაჩვეულებრივი ბუნების, თავგადასავლების დიდი შესაძლებლობებისა და უგემრიელესი სამზარეულოს ქვეყანაა!",
          en: "You already know that at the crossroads of Europe and Asia, beneath the Caucasus Mountains, on the Black Sea coast, lies a small country—Georgia, a land of rich history, extraordinary nature, great opportunities for adventure, and delicious cuisine!",
        },
      },
    ],
  },
  {
    id: "section-03",
    content: { ka: "აქ არის 03 სექცია", en: "This is section 03" },
    image: "/blog/mtebi-da-mtsvervalebi-tetnuldi.webp",
    geographyOfGeorgia: [
      {
        image: "/blog/mtebi-da-mtsvervalebi-tetnuldi.webp",
        title: {
          ka: "საქართველო როგორც ღვინის აკვანი",
          en: "Georgia’s Mountains and Peaks",
        },
        description: {
          ka: "ქართული ღვინო 8000 წლისაა - იმ დროს უკვე იცოდნენ ქართველებმა ქვევრის უნიკალური ტექნოლოგია, რომელიც დღეს მსოფლიოს ერთ-ერთ მოწინავე მეთოდად იქცა. იცით, ეს ციფრები რას ნიშნავს? თუ გაინტერესებთ, ღვინის გზას გავუდგეთ…",
          en: "Georgian wine is 8,000 years old—at that time, Georgians already knew the unique qvevri technology, which today has become one of the world’s leading methods. Do you know what these numbers mean? If you’re interested, let’s take the wine route…",
        },
      },
    ],
  },
];

// 2 index

export const sidebarItems2: { ka: string; en: string }[] = [
  {
    ka: "აბრეშუმის დიდი გზა – კულტურის, მეცნიერებისა და ტექნოლოგიების მდინარე",
    en: "The Great Silk Road is a river of culture, science, and technology",
  },
  {
    ka: "ვინც ფლობდა თბილისს, ის ფლობდა კავკასიის კარიბჭეს",
    en: "Whoever owned Tbilisi, owned the gate of the Caucasus",
  },
  {
    ka: "აბრეშუმის გზა – ამბიციური სამხედრო კამპანიების მაგისტრალი",
    en: "The Georgian section of the Great Silk Road today",
  },
  {
    ka: "აბრეშუმის დიდი გზის საქართველოს მონაკვეთი დღეს",
    en: "",
  },
];

export const contentItems2: ContentItem[] = [
  {
    title: {
      ka: "აბრეშუმის დიდი გზა – კულტურის, მეცნიერებისა და ტექნოლოგიების მდინარე",
      en: "The Great Silk Road is a river of culture, science, and technology",
    },
    description: {
      ka: "12 000 კილომეტრზე გადაჭიმული აბრეშუმის გზით დაიწყო მოძრაობა ამბებმა მანამდე ყველასთვის უცნობი რელიგიური თუ ფილოსოფიური მიმდინარეობების შესახებ. \n\n ამ გზამ ჩაიტანა ევროპაში ინფორმაცია ბუდიზმის, კონფუციანელების, ზოროასტრიზმის შესახებ. აღმოსავლეთმა კი ქრისტიანული მოძღვრების შესახებ შეიტყო. ამის შემდეგ დასავლეთის ქვეყნები მისიონერებსაც აგზავნიან აზიაში ქრისტიანობის გავრცელების მიზნით. \n\n აბრეშუმის გზის გავლით ასეთი მნიშვნელოვანი ცნობების გავრცელებამ, სხვადასხვა კულტურების შერწყმამ სრულიად ახალი მიმდინარეობების გაჩენა განაპირობა ფილოსოფიაში, ხელოვნების სხვადასხვა დარგში, ლიტერატურაში. \n\n საქართველოს დედაქალაქ თბილისში, რომელიც ისტორიულად აბრეშუმის გზის ერთ-ერთი ლოგისტიკური პუნქტი იყო, საუკუნეების განმავლობაში შემოდიოდა როგორც აღმოსავლეთის ქვეყნების ღრმა ისტორიის მქონე კულტურის ელემენტები, ისე დასავლეთის ცივილიზაციიდან წამოსული ინოვაციები. ეს ყველაფერი ნარიყალაზე იყრიდა თავს და შემდეგ ყველა მიმართულებით ვრცელდებოდა. ეს ადგილი თბილისის ცენტრია, მტკვრის ნაპირზე. აქ დღეს ევროპის პარკი მდებარეობს, რომელიც ყოველდღიურად უამრავ ტურისტს იზიდავს კეთილმოწყობის, ატრაქციებისა და ხელსაყრელი ადგილმდებარეობის წყალობით. \n\n თავდაპირველად, ჩვ.წ. II საუკუნიდან, როდესაც რომის იმპერიამ ჩინეთთან სავაჭრო ურთიერთობები დაამყარა, აბრეშუმის გზა ირანის საქარავნო მაგისტრალზე გადიოდა. შემდეგ, როდესაც რომსა და ირანს შორის ურთიერთობები უკიდურესად დაიძაბა, საქარავნო მაგისტრალი უსაფრთხო და საიმედო აღარ იყო. შესაბამისად, ვაჭრებმა შედარებით რთული რელიეფის საქართველოზე გადმოინაცვლეს. \n\n სამეცნიერო წყაროებში გვხვდება ბერძენი ისტორიკოსების მიერ დოკუმენტირებული ცნობები, რომელთა თანახმადაც, ჩვ.წ. IV-I საუკუნეებში საქართველო იყო არა მხოლოდ აბრეშუმის გზის ნაწილი, არამედ ამ ქვეყნის ტერიტორიაზე გადიოდა ჩრდილოეთ-სამხრეთის სავაჭრო გზაც. ასე რომ, საქართველო გლობალური სავაჭრო ხაზების გზაჯვარედინი იყო. \n\n აბრეშუმის გზის საქართველოს მონაკვეთი დღესაც, XXI საუკუნეშიც, აქტუალურია და სულ უფრო იკრებს ძალებს მსოფლიოში განვითარებული გეოპოლიტიკური რყევების ფონზე. ",
      en: "Along its 12,000-kilometre network, the Silk Road carried information about new religious and philosophical ideas. \n\n Buddhism, Confucianism, Christianity, and Zoroastrianism made their way to Europe via this route. Following this, Christian pilgrims from the West were sent to Asia to convert the locals. \n\n The spread of such salient information through the Silk Road and the fusion of different cultures led to the emergence of new flows in philosophy, various fields of art, and literature.  \n\n The Georgian capital of Tbilisi served as a trade hub along the Silk Road, allowing it to absorb ancient Eastern culture and Western thoughts over many centuries. The ideas were thrown into the melting pot of Tbilisi, reached noble houses, then marketplaces and then spread out to other corners of the country.  \n\n At first, in the 2nd century BCE, when the Roman Empire established trade relations with China, the Silk Road passed through the caravan route of Persia. Then, when relations between Rome and Iran became extremely strained, the caravan route was no longer safe and reliable. Consequently, merchants moved to Georgia, to relatively difficult terrain. \n\n Scholarly accounts from the 4th and 1st centuries BCE, recorded by Greek historians, suggest that Georgia served as both a stop along the Silk Road and as a major node on the north-south trade route. Georgia was a pivotal location for global trade. \n\n Amidst ongoing geopolitical upheaval, the Georgian section of the Silk Road gained momentum and still maintains its relevance in the twenty-first century.",
    },
    anotherDescription: {
      ka: "აბრეშუმის გზას ასეთი სახელი აღმოსავლეთიდან დასავლეთით მხოლოდ აბრეშუმის გადაზიდვის გამო არ დარქმევია – ეს მარშრუტი მრავალფუნქციური იყო და აქ გადიოდა როგორც აბრეშუმი, ისე ნებისმიერი სხვა ძვირფასი, ძალიან საჭირო და ვაჭრობისთვის სარფიანი ტვირთი. ქარავნებს, ტვირთებთან ერთად, მოჰყვებოდა ინფორმაცია და კულტურა, ხელოვნების ნიმუშები, უამრავი ცოდნა – დაწყებული სოფლის მეურნეობიდან, დამთავრებული მშენებლობით. სწორედ აბრეშუმის გზით შემოსული სხვადასხვა კულტურებისა და ტექნოლოგიების გავლენითაა შექმნილი თბილისში არაერთი არქიტექტურული ძეგლი.",
      en: "",
    },
    imageSrc: "",
    alt: { ka: "მთები", en: "Mountains" },
  },
  {
    title: {
      ka: "ვინც ფლობდა თბილისს, ის ფლობდა კავკასიის კარიბჭეს",
      en: "Whoever owned Tbilisi, owned the gate of the Caucasus",
    },
    description: {
      ka: "საქართველო ისტორიულად მნიშვნელოვანი ქვეყანა იყო აბრეშუმის დიდ გზაზე. ვინც ფლობდა თბილისს, ის აკონტროლებდა მთელ კავკასიას და, შესაბამისად, აბრეშუმის დიდი გზის ამ უმნიშვნელოვანეს მონაკვეთს. ამიტომ საქართველო საუკუნეების განმავლობაში სხვადასხვა იმპერიის სამიზნე ხდებოდა.",
      en: "Georgia stood out as a notable nation along the Great Silk Road. Whoever controlled Tbilisi, controlled the entire Caucasus region and this vital section of the Great Silk Road. This meant that Georgia was a target for numerous empires over many centuries. \n\n Silk Road - the highway of ambitious military campaigns \n\n In addition to trade-economic relations and dialogue between cultures, the Silk Road also had a military-strategic purpose. The Georgian section of this road was not an exception. \n\n The Romans built so-called Pompeus bridge across the Mtkvari river in Mtskheta, Georgia's ancient capital and site where a piece of Christ's robe is preserved. The bridge only comes to the surface and becomes visible when the water level drops to a critically low level. \n\n Mtskheta has been a strategic center since ancient times and the main roads of the Caucasus pass through here. Among them is a path from the Dariali valley to the southern border of Georgia, and another path is the route from the Black Sea to the Caspian Sea.",
    },
    imageSrc: "/blog/tbilisi.webp",
    alt: { ka: "მდინარე", en: "River" },
  },
  {
    title: {
      ka: "აბრეშუმის გზა – ამბიციური სამხედრო კამპანიების მაგისტრალი",
      en: "The Georgian section of the Great Silk Road today",
    },
    description: {
      ka: "სავაჭრო-ეკონომიკური ურთიერთობებისა და კულტურებს შორის დიალოგის გარდა, აბრეშუმის გზას სამხედრო-სტრატეგიული დანიშნულებაც ჰქონდა. გამონაკლისი არც ამ შემთხვევაში იყო ამ გზის საქართველოს მონაკვეთი, სადაც თვით ალექსანდრე მაკედონელის ძლევამოსილ არმიასაც გაუვლია აზიური ლაშქრობის დროს. \n\n საქართველოს უძველეს დედაქალაქ მცხეთაში კი, სადაც იესო ქრისტეს კვართი ინახება, რომაელების მიერ მდინარე მტკვარზე აგებული პომპეუსის ხიდი დღემდე შენარჩუნებულია. მას მოგვთა ხიდსაც უწოდებენ. უბრალოდ, მისი ხილვა ყოველთვის არ არის შესაძლებელი. ამ ხიდს, რომელიც მცხეთის შესასვლელში არსებული თანამედროვე ხიდიდან აღმოსავლეთით, დაახლოებით 100 მეტრში მდებარეობს და რომლის ისტორიაც 2 300 წლის წინათ იწყება, XX საუკუნის დასაწყისში აშენებულ კაშხალში დაგუბებული წყალი ფარავს. იშვიათად, როდესაც წყლის დონე საცავში კრიტიკულად მცირდება, ხიდი ზედაპირზე ამოდის და მისი დანახვა შესაძლებელია. პომპეუსის ხიდს მოგვთა ხიდი მას შემდეგ ეწოდა, რაც ძვ.წ. III საუკუნეში ქართლის მეფე ფარნაჯომმა აქ სპარსეთიდან გადმოსახლებული მოგვები დაასახლა და ამ ადგილს მოგვთაკარი უწოდა.  \n\n მცხეთა უხსოვარი დროიდან სტრატეგიული ცენტრი იყო და აქ გადიოდა კავკასიის მთავარი გზები. მათ შორის, დარიალის ხეობიდან საქართველოს სამხრეთ საზღვრამდე და შავი ზღვიდან კასპიის ზღვის მიმართულებით.",
      en: "In the 90s, after the Soviet Union collapsed and Georgia was taking the first steps toward independence, it became necessary to establish the country’s importance and function. \n\n The European Union launched a program, called the Transport Corridor at the time, which connected Europe, the South Caucasus, and Central Asia. TRACECA (Transport Corridor Europe-Caucasus-Asia) is currently working on the infrastructural and logistical development of the most important transit corridor. It also actively cooperates with the European Union and Asian countries to synchronize legislation and regulations to make it an even more convenient and profitable route for international carriers. \n\n Positioned along the Silk Road, Georgia has played a pivotal role in world events. Europe sought years for alternatives to Russian energy resources. The Baku-Tbilisi-Ceyhan oil pipeline, which supplies the world markets with Caspian oil, and the southern gas corridor, which is of vital importance for European countries in the new geopolitical situation, both pass through Georgia. \n\n Another promising project is the development of a deep-water port in Anaklia, which, once complete, will be the only such facility in the eastern Black Sea and will be able to accommodate vessels with as many as 10,000 TEUs. \n\n Over the past few years, Georgia has seen the completion of the Baku-Tbilisi-Kars railway, an important railway project along the Great Silk Road. This road not only links the Azerbaijani capital of Baku to the Georgian capital of Tbilisi but also the Turkish city of Kars. There is now a direct route for a cargo train from China to reach London, the farthest western point in Europe. \n\n On December 13th, 2015, the first Chinese cargo train carrying electrical equipment set out on this railway, also known as the `Silk Railway,`` and made it safely to its destination. The leaders of Georgia, Azerbaijan, and Turkey came together on October 30th, 2017, to officially open the railway. \n\n Georgia continues to play a pivotal role in the region's economy, energy security, and the realization of global transit highways, just as it has throughout history.",
    },
    imageSrc: "",
    alt: { ka: "ტბა", en: "Lake" },
  },
  {
    title: {
      ka: "აბრეშუმის დიდი გზის საქართველოს მონაკვეთი დღეს",
      en: "",
    },
    description: {
      ka: "გასული საუკუნის 90-იან წლებში, როდესაც საბჭოთა კავშირი უკვე დაშლილი იყო და საქართველო დამოუკიდებლობის პირველ ნაბიჯებს დგამდა, საჭირო გახდა ახალი ქვეყნის მნიშვნელობისა და ფუნქციის დამკვიდრება რეგიონში. \n\n სწორედ ამ პერიოდში ქმნის ევროკავშირი პროექტს: სატრანსპორტო დერეფანი – ევროპა, სამხრეთი კავკასია, ცენტრალური აზია. ეს პროექტი, რომელსაც დღეს ვიცნობთ სახელწოდებით: TRACECA (Transport Corridor Europe-Caucasus-Asia), აქტიურად მუშაობს ამ უმნიშვნელოვანესი სატრანზიტო დერეფნის ინფრასტრუქტურულ და ლოგისტიკურ განვითარებაზე, ასევე აქტიურად თანამშრომლობს ევროკავშირთან და აზიის ქვეყნებთან კანონმდებლობებისა და რეგულაციების სინქრონიზაციის მიზნით, რათა კიდევ უფრო ხელსაყრელი და მოგებიანი გახდეს ეს მარშრუტი საერთაშორისო გადამზიდავებისთვის. \n\n აბრეშუმის გზაზე მდებარეობამ უმნიშვნელოვანესი ფუნქციით დატვირთა საქართველო. წლების განმავლობაში რუსეთის ენერგორესურსებზე დამოკიდებული ევროპა ალტერნატიულ მიმწოდებლებს ეძებდა და სწორედ საქართველოზე გატარდა დღეს უმნიშვნელოვანესი მილსადენები: ბაქო-თბილისი-ჯეიჰანის ნავთობსადენი, რომელიც მსოფლიო ბაზრებს კასპიის ნავთობს აწვდის, და გაზის სამხრეთის დერეფანი, რომელსაც  ევროპის ქვეყნებისთვის ახალ გეოპოლიტიკურ ვითარებაში სასიცოცხლო მნიშვნელობა აქვს. ასევე მნიშვნელოვანი პროექტია განხორციელების პერსპექტივით ანაკლიის ღრმაწყლოვანი პორტი, რომლის აშენების შემდეგ ეს იქნება შავი ზღვის აღმოსავლეთ ნაწილში ერთადერთი ღრმაწყლოვანი პორტი 10 000-კონტეინერიანი ტანკერების მისაღებად. \n\n აბრეშუმის დიდი გზის საქართველოს მონაკვეთზე ბოლო წლებში ასევე მნიშვნელოვანი სარკინიგზო პროექტი განხორციელდა - ბაქო-თბილისი-ყარსის რკინიგზა. ამ მაგისტრალით, გარდა იმისა, რომ აზერბაიჯანის დედაქალაქი ბაქო თბილისსა და შემდეგ თურქეთის ქალაქ ყარსს უკავშირდება, უნიკალური მარშრუტი შეიქმნა. დღეს უკვე შესაძლებელია, უმოკლეს დროში ჩავიდეს საკონტეინერო მატარებელი ჩინეთიდან ევროპის უკიდურეს დასავლეთში – ლონდონში. ამ რკინიგზას „აბრეშუმის რკინიგზასაც“ უწოდებენ, რომელზედაც ელექტროტექნიკით დატვირთული პირველი ჩინური საკონტეინერო მატარებელი 2015 წლის 13 დეკემბერს შედგა და სატესტო მარშრუტი დანიშნულების ადგილამდე წარმატებით გაიარა. საერთაშორისო დანიშნულების ეს სარკინიგზო მაგისტრალი ოფიციალურად 2017 წლის 30 ოქტომბერს გახსნეს საქართველოს, აზერბაიჯანისა და თურქეთის ლიდერებმა. \n\n შესაბამისად, როგორც ეს იყო ისტორიულად, საქართველო დღესაც მნიშვნელოვან როლს ასრულებს გლობალური სატრანზიტო მაგისტრალების რეალიზება-განვითარებაში, მონაწილეობს ეკონომიკურ პროცესებში და რეგიონის ენერგოუსაფრთხოების უზრუნველყოფაში.",
      en: "",
    },
    imageSrc: "",
    alt: { ka: "ტბა", en: "Lake" },
  },
];

export const sections2: Section[] = [
  {
    id: "start",
    content: { ka: "აქ არის Start სექცია", en: "This is the Start section" },
    image1: "/flags/image1.webp",
    image2: "/flags/image2.webp",
    image3: "/flags/clouds.webp",
  },
  {
    id: "section-01",
    content: { ka: "აქ არის 01 სექცია", en: "This is section 01" },
    image1: "/flags/image2.webp",
    image2: "/flags/image3.webp",
    image3: "/flags/clouds.webp",
    title: { ka: "საქართველოს \n გეოგრაფია", en: "Geography of Georgia" },
    description: {
      ka: "საქართველო ევროპისა და აზიის გზაგასაყარზე, კავკასიაში, შავი ზღვის სანაპიროზე მდებარეობს. ის საუკუნეების განმავლობაში ასრულებდა ცივილიზაციების დამაკავშირებელ ფუნქციას და სწორედ აქ გადიოდა „აბრეშუმის გზაც“ - მსოფლიოს უმსხვილესი სავაჭრო არტერია.",
      en: "Georgia is located at the crossroads of Europe and Asia, in the Caucasus, on the Black Sea coast. For centuries, it has served as a bridge between civilizations, and it was here that the 'Silk Road' passed—the world’s largest trade artery.",
    },
    buttonText: { ka: "გაიგე მეტი", en: "Learn More" },
    geographyOfGeorgia: [
      {
        image: "/blog/trade-district-georgia.webp",
        title: {
          ka: "საქართველო აბრეშუმის დიდ გზაზე",
          en: "Georgia on the Great Silk Road",
        },
        description: {
          ka: "საქართველოს გლობუსზე თუ დახედავ, პირველი, რაც შენს ყურადღებას მიიპყრობს, ამ პატარა ქვეყნის გეოპოლიტიკური მდებარეობაა ევროპისა და აზიის გზაგასაყარზე და, ბუნებრივია, ოდითგანვე სწორედ ამ ქვეყანაზე გადიოდა აბრეშუმის დიდი გზა.",
          en: "Glance at Georgia on the globe and notice the geopolitical location at the crossroads of Europe and Asia, where the Great Silk Road passed through in ancient times. This road got its name not only because of the transportation of silk from the east to the west. This network of routes was multi-functional and carried any other valuable and lucrative cargo for trade. Along with the cargo, the caravans carried information, works of art, and a lot of knowledge, from rural development to construction. Several architectural monuments were created in Tbilisi under the influence of different cultures and technologies that came in through the Silk Road.",
        },
      },
    ],
  },
  {
    id: "section-02",
    content: { ka: "აქ არის 02 სექცია", en: "This is section 02" },
    section02Images: [
      {
        src: "/flags/spring.webp",
        alt: { ka: "სლაიდი 1", en: "Slide 1" },
        text: { ka: "გაზაფხული", en: "Spring" },
      },
      {
        src: "/flags/summer.webp",
        alt: { ka: "სლაიდი 2", en: "Slide 2" },
        text: { ka: "ზაფხული", en: "Summer" },
      },
      {
        src: "/flags/autumn.webp",
        alt: { ka: "სლაიდი 4", en: "Slide 4" },
        text: { ka: "შემოდგომა", en: "Autumn" },
      },
      {
        src: "/flags/winter.webp",
        alt: { ka: "სლაიდი 3", en: "Slide 3" },
        text: { ka: "ზამთარი", en: "Winter" },
      },
    ],
    geographyOfGeorgia: [
      {
        image: "/blog/mtebi-da-mtsvervalebi-tetnuldi.webp",
        title: { ka: "სეზონურობა საქართველოში", en: "Seasonality in Georgia" },
        description: {
          ka: "უკვე იცი, რომ ევროპისა და აზიის გზაგასაყარზე, კავკასიონის ქედის ქვეშ, შავი ზღვის სანაპიროზე მდებარეობს პატარა ქვეყანა - საქართველო, რომელიც მდიდარი ისტორიის, არაჩვეულებრივი ბუნების, თავგადასავლების დიდი შესაძლებლობებისა და უგემრიელესი სამზარეულოს ქვეყანაა!",
          en: "You already know that at the crossroads of Europe and Asia, beneath the Caucasus Mountains, on the Black Sea coast, lies a small country—Georgia, a land of rich history, extraordinary nature, great opportunities for adventure, and delicious cuisine!",
        },
      },
    ],
  },
  {
    id: "section-03",
    content: { ka: "აქ არის 03 სექცია", en: "This is section 03" },
    image: "/blog/mtebi-da-mtsvervalebi-tetnuldi.webp",
    geographyOfGeorgia: [
      {
        image: "/blog/mtebi-da-mtsvervalebi-tetnuldi.webp",
        title: {
          ka: "საქართველო როგორც ღვინის აკვანი",
          en: "Georgia’s Mountains and Peaks",
        },
        description: {
          ka: "ქართული ღვინო 8000 წლისაა - იმ დროს უკვე იცოდნენ ქართველებმა ქვევრის უნიკალური ტექნოლოგია, რომელიც დღეს მსოფლიოს ერთ-ერთ მოწინავე მეთოდად იქცა. იცით, ეს ციფრები რას ნიშნავს? თუ გაინტერესებთ, ღვინის გზას გავუდგეთ…",
          en: "Georgian wine is 8,000 years old—at that time, Georgians already knew the unique qvevri technology, which today has become one of the world’s leading methods. Do you know what these numbers mean? If you’re interested, let’s take the wine route…",
        },
      },
    ],
  },
];
