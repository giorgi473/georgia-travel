// export interface Section {
//   id: string;
//   content: string;
//   image?: string;
//   image1?: string;
//   image2?: string;
//   image3?: string;
//   title?: string;
//   description?: string;
//   buttonText?: string;
//   section02Images?: { src: string; alt: string; text: string }[];
//   geographyOfGeorgia?: { image: string; title: string; description: string }[];
// }

// export interface ContentItem {
//   title: string;
//   description: string;
//   anotherDescription?: string;
//   imageSrc?: string; // Optional image source
//   alt?: string; // Optional alt text
// }

// export const sidebarItems = [
//   "მითების დასაწყისი",
//   "ლექსი და ზღაპარი",
//   "ცაში გაფრენილი ქართული სიმღერა",
//   "ქართული გენია, როკვით განფენილი",
// ];

// export const contentItems: ContentItem[] = [
//   {
//     title: "მითების დასაწყისი",
//     description:
//       "ხვამლის მთა საქართველოში ის ადგილია, სადაც მსოფლიო მითოლოგიაზე არსებული წარმოდგენა სრულიად შეგეცვლება. საქართველოში გაიგებ, რომ ბერძნული ტიტანის პროტოტიპი ქართული მითოლოგიის გამორჩეული გმირი ამირანია, რომლის სახე ძვ.წ. XXX საუკუნიდან ძვ.წ. XX საუკუნემდე ჩნდება და არქეოლოგიურ ნიმუშებზეცაა აღბეჭდილი. ეს ბერძნული მითოლოგიის შექმნამდე დიდი ხნით ადრე იყო. \n\n ამირანის შესახებ ამბებს საქართველოს ყველა კუთხეში მოგიყვებიან - როგორ გადაყლაპა იგი ვეშაპმა ბრძოლის დროს, როგორ გაუჭრა გვერდი და ამოვიდა მისი მუცლიდან, როგორც ჰერკულესი გვიანდელ ბერძნულ მითოლოგიაში. როგორ მოიტაცა ქართველმა გმირმა ზეციური ქალწული, რომელიც ციური ცეცხლის განსახიერება იყო, როგორ შეებრძოლა ღმერთს, რომელმაც გმირი კავკასიონის მთაზე მიაჯაჭვა და გულ-მკერდის საჯიჯგნად არწივი მიუჩინა. \n\n საქართველოში მოგიყვებიან კოლხი მეფის ასულისა და მკურნალის, მედეას ტრაგიკული ისტორიის რეალურ ამბავს. როგორ დაეხმარა საყვარელ ადამიანს, ბერძენ იასონს „ოქროს საწმისის“ მოპოვებაში და როგორ გახდა თავად უდიდესი ღალატის მსხვერპლი. ამ ისტორიით იმასაც გაიგებ, რამდენად ძველია ქართული ფარმაკოლოგიის სათავეები და რატომ დაუკავშირდა მედეას, როგორც მკურნალის, სახელი მედიცინას. \n\n ქართულ მითოლოგიაში უამრავი კითხვის პასუხია კაცობრიობის დაბადებიდან დღემდე - რა ისურვა დამბადებელმა ღმერთმა ადამიანისთვის, რატომ პაექრობდნენ მზე, მთვარე, ცა და დედამიწა და ა. შ. მოაყოლე ეს ისტორიები თუნდაც ასაკოვან ქართველებს და ჩვენი ზეპირსიტყვიერების მნიშვნელობასაც მიხვდები.",
//     anotherDescription:
//       "ამ და მსოფლიო კულტურასთან დაკავშირებული კიდევ უამრავი კითხვის პასუხი ქართულ ფოლკლორშია.",
//     imageSrc: "/why-georgia/khvamli-mountain-georgia.webp",
//     alt: "Mountains",
//   },
//   {
//     title: "ლექსი და ზღაპარი",
//     description:
//       "ქართული ფოლკლორის სიმდიდრე მხოლოდ მითები არ გეგონოს. გაგაოცებს ხალხური ლექსების რითმებით ახსნილი სიყვარული და ამაოების ტკივილი. მთაში სუფრაზე მოხვედრილს გაგამხიარულებს ლექსებით პაექრობა, რასაც ჩვენში კაფიაობასა და შაირობას უწოდებენ. \n\n ცალკე აღსანიშნავია ქართული ანდაზებით გადმოცემული სიბრძნე, საოცარი მოსასმენია ქართული ხალხური ზღაპრები, რომლებიც მოხერხებულობას, ერთგულებას, გმირობასა და ბოროტზე სიკეთის გამარჯვებას ასწავლის მკითხველს.",
//     imageSrc: "",
//     alt: "River",
//   },
//   {
//     title: "ცაში გაფრენილი ქართული სიმღერა",
//     description:
//       "თუ სამყაროში მოგზაურობა გსურს, ქართველების ცოცხლად შესრულებული „ჩაკრულო“ უნდა მოისმინო. მაშინ მიხვდები, რატომ მოხვდა ეს მრავალხმიანი ქართული ხალხური სიმღერა კოსმოსურ თანამგზავრ  „Voyager 2“-ზე მზის სისტემაში სამოგზაუროდ. \n\n აუცილებლად უნდა მოისმინო ქართლ-კახური მრავალჟამიერი, მეგრული „ნანა“, გურული „ხასანბეგურა“ და „კრიმანჭული“ (კრინში შესრულებული ჩახვეული სიმღერა), სვანური „ლილე“, იმერული „ნადური“ და ქართული ფოლკლორის უამრავი სხვა ნიმუში, რომელთა მრავალხმიანობა იუნესკოს მიერ კაცობრიობის ზეპირსიტყვიერი და არამატერიალური მემკვიდრეობის შედევრადაა აღიარებული და შეტანილი არამატერიალური კულტურული მემკვიდრეობის წარმომადგენლობით სიაში. \n\n საქართველოს ყველა კუთხის, 15-ამდე დიალექტზე შესრულებული სიმღერები სათავეს უძველეს დროში იღებს და ჩვენი ქვეყნის ერთ დიდ ისტორიას მოგითხრობს. სრულიად გამორჩეული და ამაღელვებელია ქართული საეკლესიო საგალობლები, რომლებსაც ასევე საუკუნეების წინათ ჩაეყარა საფუძველი და რომელთა მოსმენა ქართულ ეკლესიებში შეიძლება.",
//     imageSrc: "/why-georgia/georgian-national-singers.webp",
//     alt: "Lake",
//   },
//   {
//     title: "ქართული გენია, როკვით განფენილი",
//     description:
//       "ასე უწოდა ქართულ ცეკვას გენიალურმა ქართველმა მწერალმა გრიგოლ რობაქიძემ. ერის გონი, ანბანის თითოეული ასო ქართულ ცეკვაშია მოცემული. ქვეყანა თავის ისტორიას ცეკვით გიყვება. \n\n ცეკვა „ქართული“, „მთიულური“, „ბაღდადური“, „ჯეირანი“, „კინტოური“, „ხანჯლური“, „განდაგანა“, „სამაია“, „ხორუმი“ - ეს ქართული ხალხური ცეკვების მხოლოდ მცირე ჩამონათვალია. მათი ისტორია საუკუნეებს ითვლის, ქორეოგრაფია კი დღევანდელი კლასიკური ბალეტის დონეზეა აყვანილი. ცალკე აღსანიშნავია ტრადიციული ქართული ცეკვების თანამედროვე ვარიაციები, ახალი ცეკვები, რომლებიც საქართველოს აწმყოს შთამბეჭდავი გამოძახილია. \n\n დახვეწილ, ეროვნულ ტანსაცმელში შესრულებული ქართული ხალხური სიმღერები და ცეკვები ულამაზეს სანახაობას ქმნის და ამიტომ არ წყდება ანშლაგები მსოფლიოს უდიდეს სცენებზე, როდესაც მათზე გამოსასვლელად ქართველები ემზადებიან. \n\n ეს ქართულ ფოლკლორში მოგზაურობის მხოლოდ მცირე ტურია. მისი სიდიადე გაცილებით ღრმაა. ამ სიღრმის ყველაზე კარგად შეგრძნება კი, რაღა თქმა უნდა, აქ, საქართველოში შეგიძლია.", // Empty description example
//     imageSrc: "/why-georgia/why-georgia-dance.webp",
//     alt: "Beach",
//   },
// ];

// export const sections: Section[] = [
//   {
//     id: "start",
//     content: "აქ არის Start სექცია",
//     image1: "/flags/image1.webp",
//     image2: "/flags/image2.webp",
//     image3: "/flags/clouds.webp",
//   },
//   {
//     id: "section-01",
//     content: "აქ არის 01 სექცია",
//     image1: "/flags/image2.webp",
//     image2: "/flags/image3.webp",
//     image3: "/flags/clouds.webp",
//     title: "საქართველოს \n გეოგრაფია",
//     description:
//       "საქართველო ევროპისა და აზიის გზაგასაყარზე, კავკასიაში, შავი ზღვის სანაპიროზე მდებარეობს. ის საუკუნეების განმავლობაში ასრულებდა ცივილიზაციების დამაკავშირებელ ფუნქციას და სწორედ აქ გადიოდა „აბრეშუმის გზაც“ - მსოფლიოს უმსხვილესი სავაჭრო არტერია.",
//     buttonText: "გაიგე მეტი",
//     geographyOfGeorgia: [
//       {
//         image: "/why-georgia/georgian-folk.webp",
//         title: "უნიკალური ქართული ფოლკლორი",
//         description:
//           "იცი, ვინ იყო პრომეთეს პროტოტიპი ან სად მიაჯაჭვა იგი ზევსმა? სად ინახებოდა „ოქროს საწმისი“, რომლის მოსაპოვებლად იაზონმა ზღვები გადალახა? ვინ იყო მედეა, ვისი სახელიდანაც მოდის მედიცინა? ან სად მღერიან „ჩაკრულოს“, რომელიც კოსმოსში გაიგზავნა?",
//       },
//     ],
//   },
//   {
//     id: "section-02",
//     content: "აქ არის 02 სექცია",
//     section02Images: [
//       { src: "/flags/spring.webp", alt: "Slide 1", text: "გაზაფხული" },
//       { src: "/flags/summer.webp", alt: "Slide 2", text: "ზაფხული" },
//       { src: "/flags/autumn.webp", alt: "Slide 4", text: "შემოდგომა" },
//       { src: "/flags/winter.webp", alt: "Slide 3", text: "ზამთარი" },
//     ],
//     geographyOfGeorgia: [
//       {
//         image: "/flags/bla2.webp",
//         title: "სეზონურობა საქართველოში",
//         description:
//           "უკვე იცი, რომ ევროპისა და აზიის გზაგასაყარზე, კავკასიონის ქედის ქვეშ, შავი ზღვის სანაპიროზე მდებარეობს პატარა ქვეყანა - საქართველო, რომელიც მდიდარი ისტორიის, არაჩვეულებრივი ბუნების, თავგადასავლების დიდი შესაძლებლობებისა და უგემრიელესი სამზარეულოს ქვეყანაა!",
//       },
//     ],
//   },
//   {
//     id: "section-03",
//     content: "აქ არის 03 სექცია",
//     image: "/flags/doqi.png",
//     geographyOfGeorgia: [
//       {
//         image: "/flags/image03.webp",
//         title: "საქართველო როგორც ღვინის აკვანი",
//         description:
//           "ქართული ღვინო 8000 წლისაა - იმ დროს უკვე იცოდნენ ქართველებმა ქვევრის უნიკალური ტექნოლოგია, რომელიც დღეს მსოფლიოს ერთ-ერთ მოწინავე მეთოდად იქცა. იცით, ეს ციფრები რას ნიშნავს? თუ გაინტერესებთ, ღვინის გზას გავუდგეთ…",
//       },
//     ],
//   },
// ];

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
  { ka: "მითების დასაწყისი", en: "The Beginning of Myths" },
  { ka: "ლექსი და ზღაპარი", en: "Poetry and Fairy Tales" },
  {
    ka: "ცაში გაფრენილი ქართული სიმღერა",
    en: "Georgian Song Soaring in the Sky",
  },
  {
    ka: "ქართული გენია, როკვით განფენილი",
    en: "Georgian Genius, Woven with Dance",
  },
];

export const contentItems: ContentItem[] = [
  {
    title: { ka: "მითების დასაწყისი", en: "The Beginning of Myths" },
    description: {
      ka: "ხვამლის მთა საქართველოში ის ადგილია, სადაც მსოფლიო მითოლოგიაზე არსებული წარმოდგენა სრულიად შეგეცვლება. საქართველოში გაიგებ, რომ ბერძნული ტიტანის პროტოტიპი ქართული მითოლოგიის გამორჩეული გმირი ამირანია, რომლის სახე ძვ.წ. XXX საუკუნიდან ძვ.წ. XX საუკუნემდე ჩნდება და არქეოლოგიურ ნიმუშებზეცაა აღბეჭდილი. ეს ბერძნული მითოლოგიის შექმნამდე დიდი ხნით ადრე იყო. \n\n ამირანის შესახებ ამბებს საქართველოს ყველა კუთხეში მოგიყვებიან - როგორ გადაყლაპა იგი ვეშაპმა ბრძოლის დროს, როგორ გაუჭრა გვერდი და ამოვიდა მისი მუცლიდან, როგორც ჰერკულესი გვიანდელ ბერძნულ მითოლოგიაში. როგორ მოიტაცა ქართველმა გმირმა ზეციური ქალწული, რომელიც ციური ცეცხლის განსახიერება იყო, როგორ შეებრძოლა ღმერთს, რომელმაც გმირი კავკასიონის მთაზე მიაჯაჭვა და გულ-მკერდის საჯიჯგნად არწივი მიუჩინა. \n\n საქართველოში მოგიყვებიან კოლხი მეფის ასულისა და მკურნალის, მედეას ტრაგიკული ისტორიის რეალურ ამბავს. როგორ დაეხმარა საყვარელ ადამიანს, ბერძენ იასონს „ოქროს საწმისის“ მოპოვებაში და როგორ გახდა თავად უდიდესი ღალატის მსხვერპლი. ამ ისტორიით იმასაც გაიგებ, რამდენად ძველია ქართული ფარმაკოლოგიის სათავეები და რატომ დაუკავშირდა მედეას, როგორც მკურნალის, სახელი მედიცინას. \n\n ქართულ მითოლოგიაში უამრავი კითხვის პასუხია კაცობრიობის დაბადებიდან დღემდე - რა ისურვა დამბადებელმა ღმერთმა ადამიანისთვის, რატომ პაექრობდნენ მზე, მთვარე, ცა და დედამიწა და ა. შ. მოაყოლე ეს ისტორიები თუნდაც ასაკოვან ქართველებს და ჩვენი ზეპირსიტყვიერების მნიშვნელობასაც მიხვდები.",
      en: "Khvamli Mountain in Georgia is the place where your perception of world mythology will completely change. In Georgia, you will learn that the prototype of the Greek Titan is the distinguished hero of Georgian mythology, Amirani, whose image appears from the 30th century BC to the 20th century BC and is depicted in archaeological artifacts. This was long before the creation of Greek mythology. \n\n Stories about Amirani are told in every corner of Georgia—how he was swallowed by a monster during a battle, how he cut its side and emerged from its belly, much like Hercules in later Greek mythology. How the Georgian hero abducted a celestial maiden, the embodiment of heavenly fire, how he fought against a god who chained him to the Caucasus Mountain and sent an eagle to peck at his chest. \n\n In Georgia, you will hear the true story of the tragic history of the Colchian king’s daughter and healer, Medea. How she helped her beloved, the Greek Jason, obtain the 'Golden Fleece' and how she became a victim of the greatest betrayal. Through this story, you will also learn how ancient the roots of Georgian pharmacology are and why Medea, as a healer, is associated with the word 'medicine.' \n\n Georgian mythology holds answers to countless questions about humanity from its inception to the present—what the creator god desired for mankind, why the sun, moon, sky, and earth competed, and more. Share these stories with elderly Georgians, and you will understand the significance of our oral tradition.",
    },
    anotherDescription: {
      ka: "ამ და მსოფლიო კულტურასთან დაკავშირებული კიდევ უამრავი კითხვის პასუხი ქართულ ფოლკლორშია.",
      en: "The answers to these and many other questions related to world culture are found in Georgian folklore.",
    },
    imageSrc: "/why-georgia/khvamli-mountain-georgia.webp",
    alt: { ka: "მთები", en: "Mountains" },
  },
  {
    title: { ka: "ლექსი და ზღაპარი", en: "Poetry and Fairy Tales" },
    description: {
      ka: "ქართული ფოლკლორის სიმდიდრე მხოლოდ მითები არ გეგონოს. გაგაოცებს ხალხური ლექსების რითმებით ახსნილი სიყვარული და ამაოების ტკივილი. მთაში სუფრაზე მოხვედრილს გაგამხიარულებს ლექსებით პაექრობა, რასაც ჩვენში კაფიაობასა და შაირობას უწოდებენ. \n\n ცალკე აღსანიშნავია ქართული ანდაზებით გადმოცემული სიბრძნე, საოცარი მოსასმენია ქართული ხალხური ზღაპრები, რომლებიც მოხერხებულობას, ერთგულებას, გმირობასა და ბოროტზე სიკეთის გამარჯვებას ასწავლის მკითხველს.",
      en: "Don’t think that the richness of Georgian folklore is limited to myths. You will be amazed by the love and pain of vanity expressed through the rhythms of folk poetry. At a mountain feast, you will be entertained by poetic competitions, which we call 'kafiaoba' and 'shairobi.' \n\n The wisdom conveyed through Georgian proverbs is noteworthy, and the Georgian folk tales are wonderful to listen to, teaching resourcefulness, loyalty, heroism, and the triumph of good over evil.",
    },
    imageSrc: "",
    alt: { ka: "მდინარე", en: "River" },
  },
  {
    title: {
      ka: "ცაში გაფრენილი ქართული სიმღერა",
      en: "Georgian Song Soaring in the Sky",
    },
    description: {
      ka: "თუ სამყაროში მოგზაურობა გსურს, ქართველების ცოცხლად შესრულებული „ჩაკრულო“ უნდა მოისმინო. მაშინ მიხვდები, რატომ მოხვდა ეს მრავალხმიანი ქართული ხალხური სიმღერა კოსმოსურ თანამგზავრ „Voyager 2“-ზე მზის სისტემაში სამოგზაუროდ. \n\n აუცილებლად უნდა მოისმინო ქართლ-კახური მრავალჟამიერი, მეგრული „ნანა“, გურული „ხასანბეგურა“ და „კრიმანჭული“ (კრინში შესრულებული ჩახვეული სიმღერა), სვანური „ლილე“, იმერული „ნადური“ და ქართული ფოლკლორის უამრავი სხვა ნიმუში, რომელთა მრავალხმიანობა იუნესკოს მიერ კაცობრიობის ზეპირსიტყვიერი და არამატერიალური მემკვიდრეობის შედევრადაა აღიარებული და შეტანილი არამატერიალური კულტურული მემკვიდრეობის წარმომადგენლობით სიაში. \n\n საქართველოს ყველა კუთხის, 15-ამდე დიალექტზე შესრულებული სიმღერები სათავეს უძველეს დროში იღებს და ჩვენი ქვეყნის ერთ დიდ ისტორიას მოგითხრობს. სრულიად გამორჩეული და ამაღელვებელია ქართული საეკლესიო საგალობლები, რომლებსაც ასევე საუკუნეების წინათ ჩაეყარა საფუძველი და რომელთა მოსმენა ქართულ ეკლესიებში შეიძლება.",
      en: "If you wish to travel the universe, you must listen to the live performance of the Georgian polyphonic song 'Chakrulo.' Then you will understand why this folk song was sent into space on the Voyager 2 spacecraft to journey through the solar system. \n\n You must also hear Kartli-Kakhetian polyphonic songs, Megrelian 'Nana,' Gurian 'Khasanbegura' and 'Krimanchuli' (a complex song performed with a high-pitched voice), Svanetian 'Lile,' Imeretian 'Naduri,' and many other examples of Georgian folklore, whose polyphony has been recognized by UNESCO as a masterpiece of humanity’s oral and intangible heritage and included in the representative list of intangible cultural heritage. \n\n Songs performed in up to 15 dialects from every corner of Georgia trace their origins to ancient times and tell the grand story of our country. The Georgian ecclesiastical chants are particularly distinctive and moving, with foundations laid centuries ago, and can be heard in Georgian churches.",
    },
    imageSrc: "/why-georgia/georgian-national-singers.webp",
    alt: { ka: "ტბა", en: "Lake" },
  },
  {
    title: {
      ka: "ქართული გენია, როკვით განფენილი",
      en: "Georgian Genius, Woven with Dance",
    },
    description: {
      ka: "ასე უწოდა ქართულ ცეკვას გენიალურმა ქართველმა მწერალმა გრიგოლ რობაქიძემ. ერის გონი, ანბანის თითოეული ასო ქართულ ცეკვაშია მოცემული. ქვეყანა თავის ისტორიას ცეკვით გიყვება. \n\n ცეკვა „ქართული“, „მთიულური“, „ბაღდადური“, „ჯეირანი“, „კინტოური“, „ხანჯლური“, „განდაგანა“, „სამაია“, „ხორუმი“ - ეს ქართული ხალხური ცეკვების მხოლოდ მცირე ჩამონათვალია. მათი ისტორია საუკუნეებს ითვლის, ქორეოგრაფია კი დღევანდელი კლასიკური ბალეტის დონეზეა აყვანილი. ცალკე აღსანიშნავია ტრადიციული ქართული ცეკვების თანამედროვე ვარიაციები, ახალი ცეკვები, რომლებიც საქართველოს აწმყოს შთამბეჭდავი გამოძახილია. \n\n დახვეწილ, ეროვნულ ტანსაცმელში შესრულებული ქართული ხალხური სიმღერები და ცეკვები ულამაზეს სანახაობას ქმნის და ამიტომ არ წყდება ანშლაგები მსოფლიოს უდიდეს სცენებზე, როდესაც მათზე გამოსასვლელად ქართველები ემზადებიან. \n\n ეს ქართულ ფოლკლორში მოგზაურობის მხოლოდ მცირე ტურია. მისი სიდიადე გაცილებით ღრმაა. ამ სიღრმის ყველაზე კარგად შეგრძნება კი, რაღა თქმა უნდა, აქ, საქართველოში შეგიძლია.",
      en: "This is how the brilliant Georgian writer Grigol Robakidze described Georgian dance. The spirit of the nation, each letter of the alphabet, is embodied in Georgian dance. The country tells its history through dance. \n\n Dances like 'Kartuli,' 'Mtiuluri,' 'Bagdaduri,' 'Jeirani,' 'Kintouri,' 'Khanjluri,' 'Gandagana,' 'Samaia,' and 'Khorumi' are just a small list of Georgian folk dances. Their history spans centuries, and their choreography is elevated to the level of modern classical ballet. Modern variations of traditional Georgian dances and new dances are also noteworthy, serving as impressive echoes of Georgia’s present. \n\n Performed in refined national costumes, Georgian folk songs and dances create a stunning spectacle, which is why sold-out performances never cease on the world’s greatest stages when Georgians prepare to perform. \n\n This is just a brief journey into Georgian folklore. Its grandeur is far deeper. The best way to experience this depth, of course, is here in Georgia.",
    },
    imageSrc: "/why-georgia/why-georgia-dance.webp",
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
        image: "/why-georgia/georgian-folk.webp",
        title: {
          ka: "უნიკალური ქართული ფოლკლორი",
          en: "Unique Georgian Folklore",
        },
        description: {
          ka: "იცი, ვინ იყო პრომეთეს პროტოტიპი ან სად მიაჯაჭვა იგი ზევსმა? სად ინახებოდა „ოქროს საწმისი“, რომლის მოსაპოვებლად იაზონმა ზღვები გადალახა? ვინ იყო მედეა, ვისი სახელიდანაც მოდის მედიცინა? ან სად მღერიან „ჩაკრულოს“, რომელიც კოსმოსში გაიგზავნა?",
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
        image: "/flags/bla2.webp",
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
          en: "Georgian wine is 8,000 years old—at that time, Georgians already knew the unique qvevri technology, which today has become one of the world’s leading methods. Do you know what these numbers mean? If you’re interested, let’s take the wine route…",
        },
      },
    ],
  },
];

// -----------------------------------------------------   1 end

// -----------------------------------------------------  2 start

export const sidebarItems2: { ka: string; en: string }[] = [
  { ka: "ზეზვა და მზია", en: "Zezva and Mzia" },
  { ka: "ქართული დამწერლობა", en: "Georgian Script" },
  {
    ka: "მსოფლიო მნიშვნელობის ქართული ძეგლები",
    en: "Georgian Monuments of Global Significance",
  },
  { ka: "ქართული ქვევრის ღვინო", en: "Georgian Qvevri Wine" },
];

export const contentItems2: ContentItem[] = [
  {
    title: { ka: "ზეზვა და მზია", en: "Zezva and Mzia" },
    description: {
      ka: "1991 წელს საქართველოში, დმანისში აღმოჩენილმა პირველმა თავის ქალამ, რომელიც 1.8 მილიონი წლით დათარიღდა, კაცობრიობის ისტორია ლამის ამოატრიალა. ეს იყო პირველი ადამიანი ევროპაში, რომელსაც მეცნიერებმა „ადამიანი საქართველოდან“ – „ჰომო გეორგიკუსი“ უწოდეს. დმანისი კი, სადაც იმ პერიოდის კიდევ ხუთი თავის ქალა იპოვეს, პირველი ევროპელი ადამიანის საცხოვრებლად გამოაცხადეს. \n\n ასე დაინგრა მრავალწლიანი ისტორია აფრიკიდან ჰომინიდების პირველი განსახლების შესახებ და ევრაზიის კოლონიზაციის თარიღმაც ასობით ათასი წლით უკან გადაიწია. \n\n პირველმა ევროპელებმა, რომლებსაც ზეზვა და მზია უწოდეს და რომელთა სახეები რეკონსტრუირებულია, მრავალ ქვეყანაში „იმოგზაურეს“ და მსოფლიოს პირველი ევროპელი ადამიანის სახე, მათი აღნაგობა და ცხოვრების წესი ხილულად გააცნეს. \n\n პირველი ევროპელების - ზეზვასა და მზიას ნახვა მათ სამშობლოში, საქართველოში, ეროვნული მუზეუმის დმანისის მუზეუმ-ნაკრძალშია შესაძლებელი.",
      en: "In 1991, the discovery of a skull in Dmanisi, Georgia, dated to 1.8 million years ago, nearly revolutionized human history. This was the first human in Europe, named 'Homo Georgicus' or 'Human from Georgia' by scientists. Dmanisi, where five more skulls from that period were found, was declared the residence of the first European human. \n\n This discovery overturned the long-standing narrative of the first hominid migration from Africa, pushing back the timeline of Eurasian colonization by hundreds of thousands of years. \n\n The first Europeans, named Zezva and Mzia, whose faces have been reconstructed, 'traveled' to many countries, introducing the world to the appearance, structure, and lifestyle of the first European humans. \n\n You can see the first Europeans—Zezva and Mzia—in their homeland, Georgia, at the Dmanisi Museum-Reserve of the National Museum.",
    },
    anotherDescription: {
      ka: "ისინი იუნესკომ კაცობრიობის არამატერიალური კულტურული მემკვიდრეობის წარმომადგენლობით ნუსხაში შეიტანა. თუმცა ეს ყველაფერი არ არის. ჩვენი ქვეყნის ისტორიაში კიდევ ბევრი რამაა, კაცობრიობა რომ შეცვალა და მსოფლიოს განვითარებას ხელი შეუწყო.",
      en: "They were included by UNESCO in the Representative List of the Intangible Cultural Heritage of Humanity. However, this is not all. Our country’s history contains much more that has changed humanity and contributed to global development.",
    },
    imageSrc: "/why-georgia/dmanisi-georgia.webp",
    alt: { ka: "მთები", en: "Mountains" },
  },
  {
    title: { ka: "ქართული დამწერლობა", en: "Georgian Script" },
    description: {
      ka: "რა ენაზე საუბრობდნენ საქართველოში მცხოვრები პირველი ევროპელები, მეცნიერებს ჯერ არ დაუდგენიათ, თუმცა ვიცით, რომ ქართული დამწერლობა ძვ. წ. III საუკუნეში უკვე სახელმწიფო დამწერლობად იყო გამოცხადებული. \n\n თუკი ნეკრესის ნაქალაქარზე მოხვდები, აუცილებლად დააკვირდი სამარხზე აღმოჩენილ წარწერას. როგორც მეცნიერები ვარაუდობენ, ის შესაძლოა, წინაქრისტიანული პერიოდით დათარიღდეს, რაც იმას ნიშნავს, რომ ეს ჩვენამდე მოღწეული უძველესი ქართული დამწერლობის ნიმუში იქნება. \n\n მსოფლიოში რამდენიმე ათეული დამწერლობაა მათ შორის სამი ქართულია - ასომთავრული, ნუსხური და მხედრული. ისინი ერთ-ერთ უძველეს დამწერლობად მიიჩნევა და, როგორც „ქართული ანბანის სამი სახეობის ცოცხალი კულტურა“, იუნესკოს კაცობრიობის არამატერიალური კულტურული მემკვიდრეობის წარმომადგენლობით ნუსხაშია შეტანილი.",
      en: "The language spoken by the first Europeans living in Georgia has not yet been determined by scientists, but we know that the Georgian script was declared a state script by the 3rd century BC. \n\n If you visit the Nekresi archaeological site, be sure to examine the inscription found on a tomb. Scientists believe it may date to the pre-Christian period, meaning it could be the oldest surviving example of the Georgian script. \n\n There are only a few dozen scripts in the world, three of which are Georgian: Asomtavruli, Nuskhuri, and Mkhedruli. They are considered among the oldest scripts and, as the 'Living Culture of the Three Types of Georgian Alphabet,' are included in UNESCO’s Representative List of the Intangible Cultural Heritage of Humanity.",
    },
    imageSrc: "/why-georgia/why-georgia-a-unique-alphabet.webp",
    alt: { ka: "მდინარე", en: "River" },
  },
  {
    title: {
      ka: "მსოფლიო მნიშვნელობის ქართული ძეგლები",
      en: "Georgian Monuments of Global Significance",
    },
    description: {
      ka: "საქართველოს ტერიტორია, რომელიც ადამიანის ცხოვრების მილიონ საუკუნეზე მეტი ხნის ისტორიას ინახავს, ბუნებრივია, არქიტექტურული ძეგლების სიძველითა და მრავალფეროვნებითაც გამოირჩევა. \n\n ამ ეტაპისთვის იუნესკოს მიერ მსოფლიო კულტურული მემკვიდრეობის ძეგლთა სიაში ხუთი ძეგლია შეტანილი: XI საუკუნის სვეტიცხოვლის საკათედრო ტაძარი, VI საუკუნის მცხეთის ჯვრის მონასტერი, XI საუკუნის სამთავროს მონასტერი, XII-XIII საუკუნეების გელათის სამონასტრო კომპლექსი და უშგულის თემის სოფლები (ლამჯურიში, მურყმელი, ჟიბიანი, ჩაჟაში და ჩვაბიანი) თავიანთი უნიკალური სვანური ციხე-კოშკებით. \n\n ეს ძეგლები საქართველოს უძველეს ისტორიას მოგითხრობს, არქიტექტურული მრავალფეროვნებით, ფრესკებით, ჩუქურთმებითა და წარწერებით. \n\n იუნესკოს მსოფლიო მემკვიდრეობის ძეგლთა სიაშია კოლხეთის ტროპიკული ტყეები და ჭაობები და არც აქ მოგზაურობა უნდა გამოტოვო. სათავგადასავლო ტურიზმის მოყვარულებს დაუვიწყარი თავგადასავალი ელით ეროვნულ პარკებსა და დაცულ ტერიტორიებში, რომლებიც შავი ზღვის ზომიერად თბილი და ნოტიო აღმოსავლეთ სანაპიროს 80 კილომეტრზეა გადაჭიმული.",
      en: "The territory of Georgia, which holds a history of human life spanning over a million years, naturally stands out for the antiquity and diversity of its architectural monuments. \n\n Currently, five monuments are included in UNESCO’s World Cultural Heritage List: the 11th-century Svetitskhoveli Cathedral, the 6th-century Jvari Monastery in Mtskheta, the 11th-century Samtavro Monastery, the 12th-13th-century Gelati Monastery Complex, and the villages of Ushguli (Lamjurishi, Murqmeli, Zhibiani, Chazhashi, and Chvabiani) with their unique Svanetian tower-houses. \n\n These monuments tell the ancient history of Georgia through their architectural diversity, frescoes, carvings, and inscriptions. \n\n Also included in UNESCO’s World Heritage List are the Colchic Rainforests and Wetlands, a must-visit destination. Adventure tourism enthusiasts will find unforgettable experiences in the national parks and protected areas stretching over 80 kilometers along the moderately warm and humid eastern Black Sea coast.",
    },
    imageSrc: "/why-georgia/jvari-monastery(1).webp",
    alt: { ka: "ტბა", en: "Lake" },
  },
  {
    title: { ka: "ქართული ქვევრის ღვინო", en: "Georgian Qvevri Wine" },
    description: {
      ka: "საქართველოში მოგზაურობა ისე არ უნდა დაასრულო, რომ ქართულ მარანში ქვევრის გახსნის რიტუალი არ ნახო, მერე ამ ქვევრის თავზე გაშლილ სახელდახელო სუფრასთან, შოთის პურთან და გუდის ყველთან ერთად, ქვევრში დაყენებული ღვინო არ დააგემოვნო, არ დაილოცო და მრავალხმიანი სიმღერით - „მრავალჟამიერით“ არ დატკბე. \n\n ქვევრის ღვინო იმ მეთოდითაა დაყენებული, რომელიც იუნესკოს არამატერიალური კულტურული მემკვიდრეობის წარმომადგენლობით სიაში აქვს შეტანილი, როგორც „ქვევრის ღვინის დაყენების უძველესი ქართული ტრადიციული მეთოდი“. ეს კიდევ ერთხელ ადასტურებს, რომ ქვევრის ღვინის დაყენების რვა ათასწლიან ისტორიას სათავე საქართველოში დაედო და რომ ღვინის სამშობლო საქართველოა. \n\n იუნესკოს არამატერიალური კულტურული მემკვიდრეობის წარმომადგენლობით სიაშია ქართული მრავალხმიანობაც, რომელიც კაცობრიობის ზეპირსიტყვიერი და არამატერიალური მემკვიდრეობის შედევრად არის აღიარებული. \n\n ეს იმას ნიშნავს, რომ ტერიტორიულად პატარა საქართველო ის ქვეყანაა, სადაც რომელიმე ქართული ოჯახის მარანში, ქვევრის თავზე სახელდახელოდ გაშლილ სუფრასთან ერთდროულად მსოფლიოს რამდენიმე საგანძურთან შეხება შეგიძლია.",
      en: "You shouldn’t end your journey in Georgia without witnessing the ritual of opening a qvevri in a Georgian wine cellar, then tasting qvevri wine at a table set with shoti bread and guda cheese, making a toast, and enjoying the polyphonic song 'Mravalzhamier.' \n\n Qvevri wine is made using a method included in UNESCO’s Representative List of the Intangible Cultural Heritage of Humanity as the 'Ancient Georgian Traditional Qvevri Winemaking Method.' This reaffirms that the 8,000-year history of qvevri winemaking originated in Georgia, confirming Georgia as the homeland of wine. \n\n Georgian polyphony is also included in UNESCO’s Representative List of the Intangible Cultural Heritage of Humanity, recognized as a masterpiece of humanity’s oral and intangible heritage. \n\n This means that in territorially small Georgia, at a table set by a qvevri in any Georgian family’s wine cellar, you can experience several of the world’s treasures simultaneously.",
    },
    imageSrc: "/why-georgia/schuchmann-wines-chateau-villas-spa-gnta.webp",
    alt: { ka: "პლაჟი", en: "Beach" },
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
        image: "/why-georgia/unesco-heritage-georgia.webp",
        title: {
          ka: "მსოფლიო მნიშვნელობის მემკვიდრეობა",
          en: "Heritage of Global Significance",
        },
        description: {
          ka: "იუნესკოს მსოფლიო კულტურული მემკვიდრეობის ძეგლების სიაში, მსოფლიოს მასშტაბით, 1153 ძეგლია შეტანილი. მათ შორისაა ქართული ანბანი და ქვევრის ღვინის დაყენების ქართული ტრადიციული მეთოდი.",
          en: "UNESCO’s World Cultural Heritage List includes 1,153 monuments worldwide, among them the Georgian alphabet and the traditional Georgian method of qvevri winemaking.",
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
        image: "/flags/bla2.webp",
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
          en: "Georgian wine is 8,000 years old—at that time, Georgians already knew the unique qvevri technology, which today has become one of the world’s leading methods. Do you know what these numbers mean? If you’re interested, let’s take the wine route…",
        },
      },
    ],
  },
];

// ------------------------------------------------- 2 end

// ------------------------------------------------- 3 start

export const sidebarItems3: { ka: string; en: string }[] = [
  {
    ka: "ქართული ანბანის განვითარების საფეხურები",
    en: "Stages of Development of the Georgian Alphabet",
  },
  { ka: "წერილობითი წყაროები", en: "Written Sources" },
  { ka: "სამეცნიერო კვლევები", en: "Scientific Research" },
  { ka: "სამი განსხვავებული დამწერლობა", en: "Three Distinct Scripts" },
  {
    ka: "ქართული ენის საინტერესო თავისებურება",
    en: "Unique Features of the Georgian Language",
  },
];

export const contentItems3: ContentItem[] = [
  {
    title: {
      ka: "ქართული ანბანის განვითარების საფეხურები",
      en: "Stages of Development of the Georgian Alphabet",
    },
    description: {
      ka: "ქართულმა ანბანმა თავისი ხანგრძლივი არსებობის განმავლობაში სამი საფეხური განვლო: ასომთავრული (ხუცური ასომთავრული, ანუ მრგლოვანი), ნუსხური (ხუცური, ნუსხა-ხუცური, კუთხოვანი) და მხედრული. თითოეული მათგანი თავისი დამახასიათებელი გრაფიკული სტილით გამოირჩევა. ქართული ანბანის ეს ცვლილებები საუკუნეების განმავლობაში წარმოქმნილმა სხვადასხვა ფაქტორმა განსაზღვრა.",
      en: "Throughout its long history, the Georgian alphabet has undergone three stages of development: Asomtavruli (Khutsuri Asomtavruli, or rounded), Nuskhuri (Khutsuri, Nuskhuri-Khutsuri, or angular), and Mkhedruli. Each is distinguished by its unique graphic style. These changes in the Georgian alphabet were shaped by various factors over centuries.",
    },
    anotherDescription: { ka: "", en: "" },
    imageSrc: "",
    alt: { ka: "მთები", en: "Mountains" },
  },
  {
    title: { ka: "წერილობითი წყაროები", en: "Written Sources" },
    description: {
      ka: "უძველესი წერილობითი ძეგლები, რომლებმაც ჩვენამდე მოაღწია, V საუკუნეს მიეკუთვნება. ბოლნისის სიონის ტაძრის წარწერა 493-494 წლებით თარიღდება. XX საუკუნის 50-იან წლებამდე ის უძველესად მიიჩნეოდა. 1952-1953 წლებში იტალიელმა არქეოლოგმა ვირჯილიო კორბომ პალესტინაში, იუდას უდაბნოში, ბეთლემის მახლობლად, ქართული მონასტრის ნანგრევები აღმოაჩინა სამი ქართული წარწერით. ორი მათგანი V საუკუნის პირველი ნახევრით (428-432 წ.) თარიღდება. \n\n ქართულ დამწერლობას რომ უფრო ხანგრძლივი ისტორია აქვს, ამის მაგალითია, აგრეთვე, XX საუკუნის ბოლოს ნეკრესის ნაქალაქარის (კახეთი, ყვარლის რაიონი) არქეოლოგიური ექსპედიციის მიერ აღმოჩენილი ქართული წარწერები, რომლებიც წინაქრისტიანული ეპოქის ძეგლებად არის მიჩნეული.",
      en: "The oldest written monuments that have survived date back to the 5th century. The inscription at Bolnisi Sioni Cathedral is dated to 493-494 AD. Until the 1950s, it was considered the oldest. In 1952-1953, Italian archaeologist Virgilio Corbo discovered the ruins of a Georgian monastery in Palestine, in the Judean Desert near Bethlehem, with three Georgian inscriptions. Two of them date to the first half of the 5th century (428-432 AD). \n\n Further evidence of the longer history of Georgian script comes from the late 20th-century archaeological expedition at the Nekresi site (Kakheti, Qvarali District), which uncovered Georgian inscriptions considered to be from the pre-Christian era.",
    },
    imageSrc: "",
    alt: { ka: "მდინარე", en: "River" },
  },
  {
    title: { ka: "სამეცნიერო კვლევები", en: "Scientific Research" },
    description: {
      ka: "სამეცნიერო წრეებში დღემდე არსებობს საფუძვლიანი ვარაუდი იმის შესახებ, რომ დამწერლობა ქართველებმა V საუკუნეზე გაცილებით ადრე შექმნეს. ქართველი მეცნიერი ივანე ჯავახიშვილი ხანგრძლივი კვლევის შედეგად მივიდა დასკვნამდე, რომ ქართული ანბანის წარმოშობის სათავეები წარმართულ, ქრისტიანობამდელ ხანაშია საძიებელი. \n\n ანტიკური პერიოდის ბერძნულ-რომაულ წყაროებში არაერთი ცნობა მოიპოვება იმის შესახებ, რომ ქართველებს (კოლხებს) წინაქრისტიანულ ეპოქაში ჰქონდათ დამწერლობა. ასეთი რამ იკითხება პერგამონელის (II ს.), როდოსელისა (IV ს.) და სხვა ისტორიკოსების მიერ დაწერილ საისტორიო წყაროებში. პროფესორი რამაზ პატარიძე გარკვეულწილად ეთანხმება ამ მოსაზრებას და ქართული ასომთავრული ასო-ნიშნების გრაფიკულ ანალიზზე დაყრდნობით ასაბუთებს, რომ ქართული დამწერლობა ფინიკიური დამწერლობის საფუძველზე ქრისტესშობამდე მეხუთე საუკუნის დასასრულს ქართველ ქურუმთა მიერ არის შექმნილი.",
      en: "In academic circles, there is still a well-founded assumption that Georgians created their script long before the 5th century. Georgian scholar Ivane Javakhishvili, through extensive research, concluded that the origins of the Georgian alphabet should be sought in the pre-Christian, pagan era. \n\n Numerous references in ancient Greek-Roman sources indicate that Georgians (Colchians) had a writing system in the pre-Christian era. Such references are found in historical sources by Pergamon (2nd century), Rhodian (4th century), and other historians. Professor Ramaz Pataridze partially agrees with this view and, based on a graphic analysis of Asomtavruli letter-signs, argues that the Georgian script was created by Georgian priests by the end of the 5th century BC, based on the Phoenician script.",
    },
    imageSrc: "",
    alt: { ka: "ტბა", en: "Lake" },
  },
  {
    title: {
      ka: "სამი განსხვავებული დამწერლობა",
      en: "Three Distinct Scripts",
    },
    description: {
      ka: "უძველესი ქართული დამწერლობაა ასომთავრული, რომლის ნიმუშებიც ადრეულ ისტორიულ ძეგლებზე გვხვდება. მათ შორისაა: დავათის სტელა (367), პალესტინის 433 წლის ბაკურისა და გრი-ორმიზიდის წარწერა, ბოლნისის სიონის 493-494 წლების სამშენებლო წარწერა, V-VI საუკუნეების პალიმფსესტური ხელნაწერები. მოხაზულობისა და ფორმების გამო, მას „მრგლოვანიც“ ეწოდება. V საუკუნიდან მოყოლებული ასომთავრულით იწერებოდა ქართული დამწერლობის უძველესი ძეგლები. \n\n IX საუკუნის შემდეგ თანდათან კუთხოვანმა, ანუ ნუსხურმა, დამწერლობამ მოიკიდა ფეხი. ეს არის ქართული ანბანის განვითარების მეორე საფეხური, რომელიც უშუალოდ ასომთავრულის გრაფიკული გარდაქმნის შედეგად ჩამოყალიბდა. \n\n მხედრული დამწერლობით ქართველები უკვე ათი საუკუნეა ვწერთ და ვკითხულობთ. როგორც პალეოგრაფები ამტკიცებენ, მხედრული ნუსხური ასოების გამარტივების გზითაა მიღებული და წყაროებში X საუკუნიდან გვხვდება. ამ დამწერლობის პირველი ნიმუშია ატენის სიონის ერთ-ერთი წარწერა, რომელიც 982-986 წლებით არის დათარიღებული.",
      en: "The oldest Georgian script is Asomtavruli, found on early historical monuments, including the Davati Stela (367 AD), the 433 AD inscription of Bakur and Gri-Ormizd in Palestine, the 493-494 AD construction inscription at Bolnisi Sioni, and 5th-6th century palimpsest manuscripts. Due to its lines and forms, it is also called 'rounded.' From the 5th century, the oldest Georgian script monuments were written in Asomtavruli. \n\n After the 9th century, the angular, or Nuskhuri, script gradually took hold. This is the second stage of the Georgian alphabet’s development, formed directly through the graphic transformation of Asomtavruli. \n\n Georgians have been writing and reading in the Mkhedruli script for ten centuries. As paleographers assert, Mkhedruli was derived through the simplification of Nuskhuri letters and appears in sources from the 10th century. The first example of this script is an inscription at Ateni Sioni, dated to 982-986 AD.",
    },
    imageSrc: "",
    alt: { ka: "პლაჟი", en: "Beach" },
  },
  {
    title: {
      ka: "ქართული ენის საინტერესო თავისებურება",
      en: "Unique Features of the Georgian Language",
    },
    description: {
      ka: "ქართული ენა ერთ-ერთი ყველაზე სრულყოფილი ენაა მსოფლიოში - აქ ყველა ასოს თავისი შესატყვისი ბგერა აქვს და ყველა ისე გამოთქმის, როგორც იწერება. \n\n ქართველმა მწერალმა და საზოგადო მოღვაწემ ილია ჭავჭავაძემ და მისმა თანამებრძოლებმა უმნიშვნელოვანესი წვლილი შეიტანეს ქართული ენის რეფორმირებაში. მათ ანბანიდან ამოიღეს 5 მოძველებული ასო, რომლებიც ცოცხალ ქართულ ენაში აღარ გამოიყენებოდა. ეს ასო-ბგერები დღეს მხოლოდ ქართველურ ენებსა და დიალექტებში (ხევსურული, ფშაური, სვანური, ტაოური, იმერხეული, ფერეიდნული) გვხვდება. \n\n ქართული დამწერლობა უნიკოდის სტანდარტში პირველად 1991 წელს აისახა. ქართული ასო-ნიშნების ჯგუფის შექმნაში დიდი წვლილი მიუძღვით ქართველოლოგ იოსტ გიპერტსა და შრიფტების ექსპერტს დამწერლობისთვის კოდირების განსაზღვრის საკითხში მაიკლ ევერსონს. აღსანიშნავია, რომ ქართულ მხედრულ ანბანს 2016 წელს ოფიციალურად მიენიჭა უფლება, გამოყენებული იყოს „საერთაშორისო საინტერესო მისამართებისთვის“. \n\n 2016 წელს UNESCO-მ „ქართული ანბანის სამი სახეობის ცოცხალი კულტურა“ კაცობრიობის არამატერიალურ კულტურულ მემკვიდრეობად აღიარა. მეოთხე საუკუნის ლიტერატურული ძეგლის, იოანე ზოსიმეს ჯერ კიდევ გაუშიფრავი და ამოუხსნელი „ქებაი და დიდებაი ქართულისა ენისაი“, უამრავი ლექსი თუ ლეგენდა გვეუბნება, რამდენად მნიშვნელოვანია ის იმ ხალხისთვის, ვინც მრავალი საუკუნის წინათ უნიკალური დამწერლობა შექმნა.",
      en: "The Georgian language is one of the most perfect languages in the world—each letter has a corresponding sound, and everything is pronounced as it is written. \n\n Georgian writer and public figure Ilia Chavchavadze and his associates made significant contributions to the reform of the Georgian language. They removed five obsolete letters from the alphabet that were no longer used in living Georgian. These letter-sounds are now found only in Kartvelian languages and dialects (Khevsurian, Pshavian, Svan, Tao, Imeretian, Fereydan). \n\n The Georgian script was first incorporated into the Unicode standard in 1991. Georgian scholar Jost Gippert and font expert Michael Everson, who specializes in script encoding, played significant roles in creating the Georgian letter-sign group. Notably, in 2016, the Georgian Mkhedruli alphabet was officially granted the right to be used for 'internationalized domain names.' \n\n In 2016, UNESCO recognized the 'Living Culture of the Three Types of Georgian Alphabet' as part of humanity’s intangible cultural heritage. The 4th-century literary monument by Ioane Zosime, the still undeciphered and unexplained 'Praise and Glory of the Georgian Language,' along with numerous poems and legends, underscores the importance of this language to the people who created a unique script centuries ago.",
    },
    imageSrc: "",
    alt: { ka: "პლაჟი", en: "Beach" },
  },
];

export const sections3: Section[] = [
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
        image: "/why-georgia/why-georgia-a-unique-alphabet.webp",
        title: {
          ka: "უნიკალური ქართული ანბანი",
          en: "Unique Georgian Alphabet",
        },
        description: {
          ka: "საისტორიო წყაროები, ძველ ტაძრებზე, სამარხებსა თუ სტელებზე აღმოჩენილი წარწერები დღემდე მეცნიერთა კვლევისა და დავის საგანია, თუმცა დადასტურებულია, რომ ქართული ანბანი ერთ-ერთი უძველესი, სრულყოფილი ანბანური სისტემაა.",
          en: "Historical sources and inscriptions found on ancient temples, tombs, and steles remain subjects of scholarly research and debate, but it is confirmed that the Georgian alphabet is one of the oldest and most perfect alphabetic systems.",
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
        image: "/flags/bla2.webp",
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
          en: "Georgian wine is 8,000 years old—at that time, Georgians already knew the unique qvevri technology, which today has become one of the world’s leading methods. Do you know what these numbers mean? If you’re interested, let’s take the wine route…",
        },
      },
    ],
  },
];

// ---------------------------------------------------- 4 start

export const sidebarItems4: { ka: string; en: string }[] = [
  { ka: "აჭარის პლაჟები", en: "Adjara Beaches" },
  { ka: "გურიის მაგნიტური ქვიშა", en: "Guria's Magnetic Sand" },
  {
    ka: "სამეგრელოს ძველი და ახალი პლაჟები",
    en: "Samegrelo's Old and New Beaches",
  },
];

export const contentItems4: ContentItem[] = [
  {
    title: { ka: "აჭარის პლაჟები", en: "Adjara Beaches" },
    description: {
      ka: "თუ ოჯახთან ერთად მშვიდი დასვენება გსურს, თან ისე, რომ, შავი ზღვის კამკამა სანაპიროსთან ერთად, მწვანე მთების გარემოცვაშიც იგრძნო სიმყუდროვე, აჭარის სამი კურორტიდან - (სარფი, კვარიათი და გონიო - ) ერთ-ერთი უნდა შეარჩიო. ცოტა ხნის წინ ისინი პატარა დაბები იყო, დღეს კი საზღვაო კურორტებია. \n\n აქაური მშვენიერი სუბტროპიკული კლიმატი, ეკოლოგიურად სუფთა ზღვა და მთები, კარგად განვითარებულ ტურისტულ ინფრასტრუქტურასთან ერთად, ენერგიის სრულ აღდგენაში დაგეხმარება. ზღვის ქვეშ მოგზაურობის მოყვარულებმა კი უნდა იცოდნენ, რომ კვარიათი მყვინთავებისთვის ერთ-ერთი საუკეთესო ადგილია. \n\n თუ საკურორტო ცხოვრების აურზაური გიზიდავს, მაშინ იქვე, რამდენიმე კილომეტრში, ბათუმში - აჭარის დედაქალაქში უნდა ჩახვიდე. საპორტო ქალაქში დღის განმავლობაში შესაძლებელია კრიალა ცის ქვეშ მოელვარე ზღვაში რუჯის მიღება, კატერებითა და იახტებით შუა ზღვაში მოგზაურობა, სერფინგით ტალღების დაპყრობა და პარაპლანით თოლიებთან ერთად ფრენა. \n\n სიცოცხლე ღამის ბათუმშიც ჩქეფს - კეთილმოწყობილი სანაპიროს ბულვარით, ევროპული მოედნებით, მსოფლიო ბრენდის მაღალი კლასის სასტუმროებით, რესტორნებით, სხვადასხვა მიმართულების ფესტივალებითა და გაჩირაღდნებული კაზინოებით მიხვდები, რომ ბათუმი უფრო აზარტული დასვენების მოყვარულთა ადგილია. \n\n თუ სუბტროპიკული სამოთხის ხილვა გინდა, აჭარის სანაპიროზე მწვანე კონცხს, ციხისძირსა და ჩაქვს უნდა ეწვიო. იშვიათი მცენარეებით გარშემორტყმულ სანაპიროებზე ზღვა ზურმუხტისფერი, გამორჩეულად სუფთა და კამკამაა. გარუჯვის შემდეგ მზის ჩასვლის ცქერა და ბოტანიკური ბაღის სუბტროპიკული მცენარეების ხეივნებში გასეირნება შენს დასვენებას რომანტიზმით შეავსებს. \n\n აჭარის პლაჟებიდან ცალკე აღნიშვნის ღირსია კლიმატურ-ბალნეოლოგიური კურორტი ქობულეთი და მისი ფიჭვნარი, რომელიც ბუნებრივი ანტიბიოტიკებით გაჯერებული ჰაერის წყაროა. ამიტომ, როდესაც ქობულეთზე საუბრობენ, მის პლაჟთან და სუფთა ზღვასთან ერთად, ცნობილ ფიჭვნარსაც იხსენებენ, რომელიც სუნთქვის ორგანოთა არატუბერკულოზური, ნერვული და გულ-სისხლძარღვთა სისტემის პრობლემების, სისხლნაკლებობისა და რაქიტის სამკურნალო საუკეთესო საშუალებაა. \n\n ერთი რჩევაც - აჭარის პლაჟებზე მზითა და ზღვით ტკბობის პარალელურად აჭარული კერძების დაგემოვნებაც არ დაგავიწყდეს.",
      en: "If you’re looking for a peaceful family vacation where you can enjoy the sparkling Black Sea coast while feeling the tranquility of green mountains, choose one of Adjara’s three resorts—Sarpi, Kvariati, or Gonio. Not long ago, these were small towns, but today they are thriving seaside resorts. \n\n The beautiful subtropical climate, ecologically clean sea, and mountains, combined with well-developed tourist infrastructure, will help you fully recharge your energy. Diving enthusiasts should know that Kvariati is one of the best spots for underwater exploration. \n\n If you’re drawn to the vibrant buzz of resort life, head just a few kilometers to Batumi, the capital of Adjara. In this port city, you can bask under clear skies in the shimmering sea, travel by boat or yacht, conquer waves with surfing, or soar with seagulls while paragliding. \n\n Nightlife in Batumi pulses with energy—its well-maintained seaside boulevard, European-style squares, world-class luxury hotels, restaurants, diverse festivals, and lively casinos make it clear that Batumi is a haven for thrill-seekers. \n\n For a glimpse of a subtropical paradise, visit Adjara’s Green Cape, Tsikhisdziri, or Chakvi. Surrounded by rare plants, the emerald, exceptionally clean, and sparkling sea awaits. Watching the sunset after tanning and strolling through the subtropical plant avenues of the botanical garden will add a touch of romance to your vacation. \n\n Among Adjara’s beaches, the climatic-balneo resort of Kobuleti stands out, with its pine forest—a source of air rich in natural antibiotics. When people talk about Kobuleti, they mention not only its beach and clean sea but also its famous pine forest, a natural remedy for non-tuberculous respiratory issues, nervous system disorders, cardiovascular problems, anemia, and rickets. \n\n One tip: while enjoying the sun and sea on Adjara’s beaches, don’t forget to savor local Adjarian cuisine.",
    },
    anotherDescription: {
      ka: "პასუხი მარტივია: თუ გაითვალისწინებ საქართველოს ბუნებისა და კლიმატის მრავალფეროვნებას, რამდენიმე კილომეტრში რადიკალურად რომ იცვლება, ქვეყნის კუთხეების ტრადიციებს, კულტურასა და ეგზოტიკურ სამზარეულოს, კარგად განვითარებულ სათავგადასავლო ტურიზმს, დარწმუნდები, რომ ეს პატარა სანაპირო ზოლი მხოლოდ კამკამა ზღვის ტალღები, მცხუნვარე მზე, გრილი ნიავი და კენჭოვანი ან ქვიშიანი სანაპიროები კი არა, ესაა პლაჟები, რომლებიც ერთდროულად იქცევა შენი მშვიდი, ჯანმრთელობისთვის სასარგებლო და თავგადასავლებით სავსე დასვენების ადგილად.",
      en: "The answer is simple: considering Georgia’s diverse nature and climate, which changes dramatically within a few kilometers, along with the traditions, culture, and exotic cuisine of its regions, and its well-developed adventure tourism, you’ll realize that this small coastal strip is more than just sparkling sea waves, scorching sun, cool breezes, and pebbly or sandy beaches. These are beaches that become a place for peaceful, health-beneficial, and adventure-filled relaxation all at once.",
    },
    imageSrc: "/why-georgia/batumi(1).webp",
    alt: { ka: "მთები", en: "Mountains" },
  },
  {
    title: { ka: "გურიის მაგნიტური ქვიშა", en: "Guria's Magnetic Sand" },
    description: {
      ka: "აჭარის კენჭოვან სანაპიროებს რამდენიმე კილომეტრში გურიის ქვიშიანი პლაჟები ცვლის. უბრალო ქვიშა არ გეგონოს. ურეკისა და გრიგოლეთის ხუთკილომეტრიანი სანაპირო ზოლი უჩვეულო, ნაცრისფერი და შავი ქვიშითაა დაფარული, რომელიც უნიკალური სამკურნალო ეფექტის მაგნეტიტს შეიცავს. ძალიან პოპულარულია შეკვეთილის სანაპირო, რომელიც, ერთი მხრივ, მყუდრო დასვენების შესაძლებლობას მოგცემთ, მეორე მხრივ კი, საოცარი საკონცერტო დარბაზით - ბლექ სი არენა, დენდროლოგიური პარკით და მუსიკოსების, მინიატიურებისა და ციცინათელების პარკითაა გამორჩეული. \n\n ურეკი-გრიგოლეთის მაგნიტური ქვიშა ადამიანის კუნთოვანი სისტემის, გულისა და ფილტვების პრობლემების საუკეთესო სამკურნალო საშუალებაა. ამ კურორტებზე დასვენება განსაკუთრებით სასარგებლოა ბავშვებისთვის. მზის ენერგიით გაცხელებულ ქვიშაში წოლითაც კი უზარმაზარ ენერგიას დააგროვებ, D ვიტამინით აივსები და სხეულს ახალი ენერგიით გააჯერებ. ამიტომ ეს კურორტები აუცილებლად უნდა დაიმახსოვრო.",
      en: "A few kilometers from Adjara’s pebbly shores, Guria’s sandy beaches take over. Don’t think of ordinary sand. The five-kilometer coastal strip of Ureki and Grigoleti is covered with unusual gray and black sand containing magnetite, known for its unique therapeutic effects. The Shekvetili beach is also very popular, offering a peaceful retreat on one hand and standing out with its remarkable concert hall—Black Sea Arena—dendrological park, and parks dedicated to musicians, miniatures, and fireflies on the other. \n\n Ureki-Grigoleti’s magnetic sand is an excellent remedy for musculoskeletal, heart, and lung issues. Resting at these resorts is especially beneficial for children. Even lying on the sun-warmed sand allows you to absorb immense energy, replenish vitamin D, and invigorate your body. These resorts are a must to remember.",
    },
    imageSrc: "/why-georgia/ureki-gnta.webp",
    alt: { ka: "მდინარე", en: "River" },
  },
  {
    title: {
      ka: "სამეგრელოს ძველი და ახალი პლაჟები",
      en: "Samegrelo's Old and New Beaches",
    },
    description: {
      ka: "მართალია, სამეგრელოში ფოთის ერთ-ერთი გარეუბანი - მალთაყვა დიდი ხანია საპლაჟო ადგილად მიიჩნევა, მაგრამ ფოთის პორტი მის ზღვაზე მნიშვნელოვან გავლენას ახდენს და ამიტომ დამსვენებლები აქ უფრო მშვიდი დასვენებისთვის ჩადიან. \n\n ბოლო პერიოდში უფრო და უფრო პოპულარული ხდება ანაკლია და განმუხური, რომლებიც საქართველოს დასავლეთ სანაპიროზე მდებარეობს. ეს არა მარტო ყველაზე ახალგაზრდა კურორტებია, არამედ ერთ-ერთი ყველაზე ეკოლოგიური ადგილია საქართველოს შავი ზღვის სანაპიროზე. აქ მშრალი და ზომიერი კლიმატია, ბათუმისგან, სარფისა და ქობულეთისგან განსხვავებით. \n\n აქვე, მდინარე ენგურზე აგებულია ევროპის ყველაზე გრძელი საფეხმავლო ხიდი, რომლის ნახვაც აუცილებლად მოგინდება. \n\n თუ შავი ზღვის ლაჟვარდოვან სანაპიროებზე დასვენებას გადაწყვეტ, ჩვენს მრავალფეროვან და სამკურნალო თვისებებით გამორჩეულ პლაჟებს შორის აუცილებლად იპოვი შენთვის მოსაწონ დასასვენებელ ადგილს.",
      en: "While Maltakva, a suburb of Poti in Samegrelo, has long been considered a beach destination, the port of Poti significantly impacts its sea, so visitors come here for a quieter retreat. \n\n Recently, Anaklia and Ganmukhuri, located on Georgia’s western coast, have been gaining popularity. These are not only the youngest resorts but also among the most ecologically clean spots on Georgia’s Black Sea coast. Unlike Batumi, Sarpi, or Kobuleti, they offer a dry and temperate climate. \n\n Nearby, the longest pedestrian bridge in Europe, built over the Enguri River, is a must-see attraction. \n\n If you decide to relax on the azure shores of the Black Sea, you’ll surely find a favorite spot among our diverse and therapeutically unique beaches.",
    },
    imageSrc: "/why-georgia/anaklia-ganmukhuri.webp",
    alt: { ka: "ტბა", en: "Lake" },
  },
];

export const sections4: Section[] = [
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
        image: "/why-georgia/seaside-adjara-black-sea.webp",
        title: { ka: "შავი ზღვის სანაპიროები", en: "Black Sea Coast" },
        description: {
          ka: "ალბათ, იკითხავ, მსოფლიოს 81 ზღვიდან რატომ უნდა შეარჩიო ზაფხულში დასასვენებლად მაინცდამაინც შავი ზღვა და შავიზღვისპირა ექვსი სახელმწიფოდან ყველაზე პატარა ქვეყანა - საქართველო?",
          en: "You might ask, out of the world’s 81 seas, why choose the Black Sea for a summer vacation, and from the six Black Sea countries, why pick the smallest one—Georgia?",
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
        image: "/flags/bla2.webp",
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
          en: "Georgian wine is 8,000 years old—at that time, Georgians already knew the unique qvevri technology, which today has become one of the world’s leading methods. Do you know what these numbers mean? If you’re interested, let’s take the wine route…",
        },
      },
    ],
  },
];

// ------------------------------------------------- 5 start

export const sidebarItems5: { ka: string; en: string }[] = [
  { ka: "საქართველო", en: "Georgia" },
  { ka: "როგორ იქმნებოდა საქართველო", en: "How Georgia Was Formed" },
  { ka: "და მაინც, რატომ საქართველო?", en: "And Yet, Why Georgia?" },
];

export const contentItems5: ContentItem[] = [
  {
    title: { ka: "საქართველო", en: "Georgia" },
    description: {
      ka: "ცივილიზაციის ქვეყანა - საქართველო ევროპისა და აზიის გასაყარზე, კავკასიაში მდებარეობს. დასავლეთიდან მას შავი ზღვა ესაზღვრება, ჩრდილოეთიდან - რუსეთის ფედერაცია, სამხრეთ-აღმოსავლეთიდან - აზერბაიჯანი, სამხრეთიდან - სომხეთი და თურქეთი. \n\n 1991 წელს ქვემო ქართლში, დმანისში ჩატარებული არქეოლოგიური გათხრების დროს აღმოჩენილი ჰომინიდების ჩონჩხის ფრაგმენტებმა, რომელთა ასაკი 1 800 000 წელია, არა მარტო ის დაადასტურა, რომ საქართველო ქვეყანაა, არამედ ისიც, რომ პირველი ევროპელები სწორედ მის ტერიტორიაზე ცხოვრობდნენ.",
      en: "A land of civilization—Georgia is located at the crossroads of Europe and Asia, in the Caucasus. It is bordered by the Black Sea to the west, Russia to the north, Azerbaijan to the southeast, and Armenia and Turkey to the south. \n\n In 1991, archaeological excavations in Dmanisi, Kvemo Kartli, uncovered hominid skeletal fragments dating back 1.8 million years, confirming not only that Georgia is a nation but also that the first Europeans lived on its territory.",
    },
    anotherDescription: {
      ka: "მართლაც, კავკასიაში, ევროპისა და აზიის გზაგასაყარზე მდებარე ჩვენი ქვეყანა საუკუნეების განმავლობაში იყო ძლიერი სახელმწიფოების ინტერესის ობიექტი. ბევრ დამპყრობელს შეჰბრძოლებია, ბევრი დამარცხება უგემია, მაგრამ ფეხზე დადგომა ყოველთვის მოუხერხებია. ცალკე აღნიშვნის ღირსია ის, რაც საქართველომ მსოფლიო ცივილიზაციას შესძინა თავისი უნიკალური დამწერლობით, მრავალხმიანი სიმღერითა თუ საოცარი ცეკვით, ღვინის დაყენებით, ძაფის დართვით, რკინის დამუშავებით, ოქროს მოპოვებითა და ბევრი სხვა საოცრებით, რომლებიც კაცობრიობის განვითარების ისტორიის კულუარებიდან ჯერ კიდევ არ გამოუტანიათ.",
      en: "Indeed, our country, located in the Caucasus at the crossroads of Europe and Asia, has been the focus of powerful states for centuries. It has fought many conquerors, endured numerous defeats, yet always managed to rise again. Worth noting separately is what Georgia has contributed to world civilization with its unique script, polyphonic singing, remarkable dances, winemaking, thread spinning, ironworking, gold extraction, and many other wonders that have yet to be fully revealed from the corridors of human history.",
    },
    imageSrc: "/why-georgia/why-georgia-dance-gnta.webp",
    alt: { ka: "მთები", en: "Mountains" },
  },
  {
    title: { ka: "როგორ იქმნებოდა საქართველო", en: "How Georgia Was Formed" },
    description: {
      ka: "პირველი პოლიტიკური გაერთიანება - დიაოხი და კოლხა აქ ძვ. წ. II საუკუნის ბოლოს მდინარე ჭოროხის აუზში შეიქმნა; ძვ წ. IV საუკუნეში იბერიის სამეფო ჩამოყალიბდა დღევანდელი აღმოსავლეთ საქართველოს ტერიტორიაზე; ძვ წ. VI საუკუნეში შექმნილი კოლხეთის (იგივე ეგრისის) სამეფო კი დღევანდელი დასავლეთ საქართველოს ტერიტორიაზე იყო განლაგებული. \n\n VI საუკუნეში საქართველოში ოთხი სამთავრო იყო: ლაზეთის, აფშილების, აბაზგების, სანიგების. VIII საუკუნის ბოლოს აღმოსავლეთ საქართველოში შეიქმნა კახეთის სამთავრო, აგრეთვე, ფერეთის სამეფო, დასავლეთ საქართველოში - აფხაზთა სამეფო. IX საუკუნის დასაწყისში სამხრეთ-დასავლეთ საქართველოში ჩნდება ტაო-კლარჯეთის სამთავრო, რომელიც 888 წლიდან იწოდება, როგორც ქართველთა სამეფო. \n\n X საუკუნის ბოლოსა და XI საუკუნის დასაწყისში გაერთიანდა აფხაზთა და ქართველთა სახელმწიფოები და ერთიანი საქართველოს პირველი მეფე ბაგრატ III გახდა. XII საუკუნეში ამ გაერთიანებას მეფე დავით აღმაშენებელმა კახეთ-ჰერეთი, ტაშირ-ძორაგეტის სამეფო და თბილისის საამირო შემოუერთა. გარეშე მტრების მეცადინეობით კვლავ დანაწევრებული ქვეყანა XIV საუკუნეში გიორგი ბრწყინვალემ გააერთიანა, თუმცა ცოტა ხნით. \n\n 1490 წლიდან საქართველო ქართლის, კახეთის, იმერეთის სამეფოებად, სამცხის საათაბაგოდ დაიშალა, XVI საუკუნეში იმერეთის სამეფოს გამოეყო სამეგრელოს, გურიის, აფხაზეთისა და სვანეთის სამთავროები. 1555 წელს ირანმა და ოსმალეთმა დადეს ამასიის ზავი, რითაც ორად გაყვეს დაპყრობილი საქართველო. ქართლსა და კახეთს ირანი დაეპატრონა, დასავლეთ საქართველოსა და სამცხის საათაბაგოს - ოსმალეთი. \n\n XVIII საუკუნიდან ქართლი და კახეთი ერთიანი სამეფო ხდება. 1783 წელს მისი მეფე - ერეკლე II იძულებულია რუსეთთან გეორგიევსკის ტრაქტატი გააფორმოს. ამით ქართლ-კახეთის სამეფო რუსეთის პროტექტორატის ქვეშ გადადის, ეს უკანასკნელი კი დებს პირობას, შეინარჩუნოს მისი სამეფო ტახტი და ხელი შეუწყოს სამეფოს განვითარებას. სამწუხაროდ, ეს პირობა არ შესრულდა. 1801 წელს რუსეთმა ქართლ-კახეთის სამეფო გააუქმა და გუბერნიის სტატუსით შეიერთა. ამას მოჰყვა დანარჩენი ქართული სამეფოებისა და სამთავროების მიერთება. \n\n 1918 წელს, როცა რუსეთის იმპერია დაემხო, საქართველომ დამოუკიდებლობა გამოაცხადა და შექმნა პირველი რესპუბლიკა. მან მხოლოდ სამი წელი, იმედითა და მომავლის რწმენით სავსე სამი წელი იარსება. 1921 წელს ქვეყანაში საბჭოთა რუსეთის 25-ე არმია შემოვიდა. საქართველოში რუსეთმა სამი ავტონომიური რესპუბლიკა შექმნა: აფხაზეთის, აჭარისა და სამხრეთ ოსეთის. ასე დაიწყო საბჭოთა იმპერიაში ცხოვრების 70-წლიანი ეპოპეა. მორიგი იძულებითი კავშირისგან თავის დახსნა ქვეყანამ 1991 წელს, საბჭოთა კავშირის დაშლის შემდეგ შეძლო. \n\n რამდენიმე აბზაცში ჩატეული ამ საუკუნეების განმავლობაში საქართველო არაერთი ბრძოლისა და ომის მონაწილე იყო. მას იპყრობდნენ: რომაელები, სპარსელები, არაბები, თურქ-სელჯუკები, მონღოლები, ოსმალები, რუსები; დროდადრო თავს ესხმოდნენ კავკასიელი ტომები და სახელმწიფოები. ერთ დროს ნიკოფსიიდან დარუბანდამდე გადაჭიმული ქვეყნის ტერიტორიას იტაცებდნენ და ეპატრონებოდნენ, თუმცა ქართველს არასდროს დაუკარგავს იმედი და რწმენა იმისა, რომ აუცილებლად დადგება დრო, როცა საქართველო კვლავაც მოიპოვებდა დამოუკიდებლობას.",
      en: "The first political entities—Diaokhi and Colchis—emerged in the Chorokhi River basin by the end of the 2nd century BC; in the 4th century BC, the Kingdom of Iberia was established in what is now eastern Georgia; in the 6th century BC, the Kingdom of Colchis (also known as Egrisi) was founded in present-day western Georgia. \n\n By the 6th century AD, Georgia had four principalities: Lazica, Apshileti, Abazgia, and Sanigia. At the end of the 8th century, the Principality of Kakheti and the Kingdom of Hereti emerged in eastern Georgia, while the Kingdom of Abkhazia was established in western Georgia. In the early 9th century, the Principality of Tao-Klarjeti appeared in southwestern Georgia, which, from 888 AD, became known as the Kingdom of the Georgians. \n\n At the end of the 10th century and the beginning of the 11th century, the states of Abkhazia and the Georgians united, with Bagrat III becoming the first king of a unified Georgia. In the 12th century, King David the Builder annexed Kakheti-Hereti, the Kingdom of Tashir-Dzoraget, and the Emirate of Tbilisi to this union. Due to external enemies, the country was fragmented again, but in the 14th century, Giorgi the Brilliant briefly reunified it. \n\n From 1490, Georgia split into the kingdoms of Kartli, Kakheti, Imereti, and the Principality of Samtskhe. In the 16th century, the principalities of Samegrelo, Guria, Abkhazia, and Svaneti separated from the Kingdom of Imereti. In 1555, Iran and the Ottoman Empire signed the Treaty of Amasya, dividing conquered Georgia: Iran took control of Kartli and Kakheti, while the Ottomans seized western Georgia and Samtskhe. \n\n In the 18th century, Kartli and Kakheti became a single kingdom. In 1783, its king, Erekle II, was forced to sign the Treaty of Georgievsk with Russia, placing Kartli-Kakheti under Russian protection, with Russia pledging to preserve its throne and support its development. Unfortunately, this promise was not kept. In 1801, Russia abolished the Kingdom of Kartli-Kakheti, annexing it as a governorate, followed by the annexation of other Georgian kingdoms and principalities. \n\n In 1918, after the fall of the Russian Empire, Georgia declared independence and established the First Republic, which lasted only three years, filled with hope and faith in the future. In 1921, Soviet Russia’s 25th Army invaded, and Russia established three autonomous republics in Georgia: Abkhazia, Adjara, and South Ossetia, marking the start of a 70-year era in the Soviet Empire. Georgia freed itself from this forced union in 1991, after the Soviet Union’s collapse. \n\n Over these centuries, condensed into a few paragraphs, Georgia was a participant in countless battles and wars. It was conquered by Romans, Persians, Arabs, Seljuk Turks, Mongols, Ottomans, and Russians, and occasionally attacked by Caucasian tribes and states. Once stretching from Nikopsia to Daruband, its territory was repeatedly seized, yet Georgians never lost hope and faith that a time would come when Georgia would regain its independence.",
    },
    imageSrc:
      "/why-georgia/da-skhva-progresuli-qartveli-mefeebi-mefe-erekle-m-8.webp",
    alt: { ka: "მდინარე", en: "River" },
  },
  {
    title: { ka: "და მაინც, რატომ საქართველო?", en: "And Yet, Why Georgia?" },
    description: {
      ka: "იმიტომ, რომ საშინელი დამარცხებების პარალელურად საოცარი გამარჯვებები ჰქონია - გაბედულებითა და მოხერხებით, უკომპრომისო ბრძოლებში რაოდენობით ასჯერ მეტი მტერი დაუმარცხებია; \n\n იმიტომ, რომ ომების პარალელურად ახერხებდა, უდიდესი კულტურები შეექმნა, მაგალითად - კოლხური, განევითარებინა მეტალურგია და ოქროს წარმოება; \n\n იმიტომ, რომ უნიკალური ენა, მისი სამნაირი დამწერლობა შექმნა და ამ ენაზე შედევრები დაწერა, მათ შორის - „ვეფხისტყაოსანი“, რომელიც დღეს 50-ზე მეტ ენაზეა თარგმნილი; \n\n იმიტომ, რომ მსოფლიოს აჩუქა ღვინო, ვაზისა და ხორბლის განსაკუთრებული ჯიშები, პირველად დაართო და შეღება ძაფი; \n\n იმიტომ, რომ ხელისგულისტოლა ქვეყანაში შექმნა ორი - გელათისა და იყალთოს აკადემიები, ჰქონდა კოლხეთის უმაღლესი რიტორიკული სკოლა; \n\n იმიტომ, რომ ააშენა ბაგრატი, გელათი, ნიკორწმინდა, ქვაში გამოკვეთა ქალაქები - ვარძია, უფლისციხე; \n\n იმიტომ, რომ მისი მრავალხმიანი სიმღერა ახლა კოსმოსში ისმის, მისი ცეცხლოვანი ცეკვები კი დარბაზებს ფეხზე აყენებს; \n\n იმიტომ, რომ, ბევრი იმედგაცრუების მიუხედავად, არ დაუკარგავს ადამიანების სიყვარული და აქ, მის მიწაზე, დღესაც ერთ მოედანზე დგას მართლმადიდებლური და გრიგორიანული ეკლესიები, მეჩეთი და სინაგოგა; \n\n იმიტომ, რომ ეს საქართველოა.",
      en: "Because, alongside crushing defeats, it has achieved remarkable victories—through courage and ingenuity, defeating enemies a hundred times greater in number in uncompromising battles; \n\n Because, amidst wars, it managed to create great cultures, such as the Colchian, and develop metallurgy and gold production; \n\n Because it created a unique language with three distinct scripts and wrote masterpieces in it, including 'The Knight in the Panther’s Skin,' now translated into over 50 languages; \n\n Because it gifted the world wine, unique grape and wheat varieties, and was the first to spin and dye thread; \n\n Because, in a country the size of a palm, it established two academies—Gelati and Iqalto—and had Colchis’ advanced rhetorical school; \n\n Because it built Bagrati, Gelati, Nikortsminda, and carved cities out of stone—Vardzia and Uplistsikhe; \n\n Because its polyphonic singing now resonates in space, and its fiery dances bring audiences to their feet; \n\n Because, despite many disappointments, it has not lost its love for humanity, and today, on its land, Orthodox and Gregorian churches, mosques, and synagogues stand together in one square; \n\n Because this is Georgia.",
    },
    imageSrc: "/why-georgia/gelati-monastery-gnta.webp",
    alt: { ka: "ტბა", en: "Lake" },
  },
];

export const sections5: Section[] = [
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
        image: "/why-georgia/khertvisi-fortress-gnta.webp",
        title: { ka: "საქართველოს ისტორია", en: "History of Georgia" },
        description: {
          ka: "„საქართველოს ისტორიას რომ გაეცნობი, ნამდვილად ღმერთს იწამებ, რადგან არანაირი ობიექტური საფუძველი იმისა, რომ ამ ერს აქამდე მოეღწია, უბრალოდ არ არსებობს“, - ამბობდა ინგლისელი მწერალი და მთარგმნელი დევიდ ლანგი საქართველოს შესახებ.",
          en: "‘When you study Georgia’s history, you truly believe in God, because there is simply no objective reason for this nation to have survived this long,’ said English writer and translator David Lang about Georgia.",
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
        image: "/flags/bla2.webp",
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
          en: "Georgian wine is 8,000 years old—at that time, Georgians already knew the unique qvevri technology, which today has become one of the world’s leading methods. Do you know what these numbers mean? If you’re interested, let’s take the wine route…",
        },
      },
    ],
  },
];

// ---------------------------------------------------- start 6

export const sidebarItems6: { ka: string; en: string }[] = [
  { ka: "ტურისტული საქართველო", en: "Tourist Georgia" },
  { ka: "ტურისტული გეოგრაფია", en: "Tourist Geography" },
  { ka: "ტურისტული სეზონები", en: "Tourist Seasons" },
];

export const contentItems6: ContentItem[] = [
  {
    title: { ka: "ტურისტული საქართველო", en: "Tourist Georgia" },
    description: {
      ka: "შავი ზღვის სანაპიროდან კავკასიონის თოვლიან მწვერვალებამდე გადაჭიმულ საქართველოს წლიდან წლამდე მსოფლიოს უამრავი ქვეყნიდან სულ უფრო მეტი ტურისტი სტუმრობს. თუ 2015 წელს საქართველოში სულ 6,305,635 საერთაშორისო ვიზიტორი შემოვიდა, რაც იმ დროისთვის რეკორდული მაჩვენებელი იყო, 2019 წელს საერთაშორისო ვიზიტორების რაოდენობამ ყველა დროის რეკორდი მოხსნა და 9,357,964 ადამიანი შეადგინა. შემდეგ დადგა პანდემიური 2020 და როგორც მთელ მსოფლიოში, ისე საქართველოშიც ტურისტული ინდუსტრია, ფაქტობრივად, გაჩერდა. სექტორში დასაქმებული უამრავი ადამიანი დარჩა უმუშევარი და ბიზნესებიც გაკოტრდა. მაგრამ 2022 წელს დარგმა გამოცოცხლება დაიწყო და იანვარ-ოქტომბრის პერიოდში საქართველოში 5,426,903 ვიზიტორი შემოვიდა. ეს იმას ნიშნავს, რომ პანდემიამდელი 2019-ის რეკორდული მაჩვენებელი 58%-ით აღდგა.",
      en: "Stretching from the Black Sea coast to the snowy peaks of the Caucasus, Georgia attracts an increasing number of tourists from countless countries worldwide each year. In 2015, a record-breaking 6,305,635 international visitors arrived in Georgia, and by 2019, this number soared to an all-time high of 9,357,964. Then came the pandemic in 2020, which, as in the rest of the world, nearly halted Georgia’s tourism industry. Countless people in the sector were left unemployed, and businesses went bankrupt. However, in 2022, the industry began to recover, with 5,426,903 visitors arriving from January to October, recovering 58% of the record-breaking 2019 figures.",
    },
    anotherDescription: {
      ka: "ქვეყნის ფართობია 70 ათასამდე კმ2, ხოლო მოსახლეობის რაოდენობა, 2022 წლის 1-ელი იანვრის მდგომარეობით, თითქმის 3,7 მილიონს შეადგენს. მოსახლეობა მრავალეთნიკურია, მსხვილი ეთნოუმცირესობებით. მაგალითად, ეთნიკური აზერბაიჯანის თემი მოსახლეობის 6,2%-ია, სომხების კი - 4,5%. საქართველო განვითარებადი ეკონომიკების ჯგუფს მიეკუთვნება, ერთ სულ მოსახლეზე $5015-იანი მთლიანი შიდა პროდუქტით. ქვეყნის ეკონომიკის ზრდაში უმნიშვნელოვანეს როლს ტურიზმი ასრულებს. ტურისტების რაოდენობა, პანდემიის პერიოდს თუ არ ჩავთვლით, ადგილობრივი მოსახლეობის რაოდენობას უკვე წლებია, ორჯერ და მეტად აჭარბებს.",
      en: "The country’s area is nearly 70,000 km², with a population of almost 3.7 million as of January 1, 2022. The population is multiethnic, with significant ethnic minorities, such as Azerbaijanis making up 6.2% and Armenians 4.5%. Georgia belongs to the group of developing economies, with a per capita GDP of $5,015. Tourism plays a crucial role in the country’s economic growth. Excluding the pandemic period, the number of tourists has consistently exceeded the local population by more than double for years.",
    },
    imageSrc: "",
    alt: { ka: "მთები", en: "Mountains" },
  },
  {
    title: { ka: "ტურისტული გეოგრაფია", en: "Tourist Geography" },
    description: {
      ka: "ტურისტული ნაკადები საქართველოში როგორც მეზობელი ქვეყნებიდან, ისე შორეული საზღვარგარეთიდან შემოდის. საკმაოდ აქტიურად სტუმრობენ საქართველოს აზერბაიჯანელები, სომხები, თურქები, უკრაინელები და რუსები. შემოდიან ევროკავშირის მოქალაქეები. ხშირად შეხვდებით საქართველოში ებრაელი ტურისტების დიდ ჯგუფებსაც. საქართველოს ღირსშესანიშნაობებს აქტიურად ათვალიერებენ იაპონელი, ტაილანდელი ტურისტები. \n\n ყველაზე პოპულარული მიმართულებებია დედაქალაქი თბილისი, მცხეთა, კახეთი და აჭარა, თავისი თვალწარმტაცი საპორტო ქალაქ ბათუმით. 2022 წლის პირველ ნახევარში თბილისს 820 500 ტურისტი სტუმრობდა, აჭარას ამ დროს 548 400 სტუმარი ეწვია, მიუხედავად იმისა, რომ ზღვის სეზონი ჯერ არ იყო დაწყებული. ივლისიდან სექტემბრამდე პერიოდში კი ეს მაჩვენებელი ბათუმში და მთლიანად აჭარაში მნიშვნელოვნად გაიზარდა. \n\n ტურისტები აქტიურად მოგზაურობენ მაღალმთიან სვანეთშიც, ასევე მთიან თუშეთში, ხევსურეთსა და ყაზბეგში. მაღალია ინტერესი, აგრეთვე, იმერეთის, კახეთის, სამცხე–ჯავახეთის, ქვემო ქართლის, გურიისა და სხვა კუთხეებისადმი.",
      en: "Tourist flows to Georgia come from both neighboring countries and far-off destinations. Visitors from Azerbaijan, Armenia, Turkey, Ukraine, and Russia are particularly active. Citizens of the European Union also arrive, and you’ll often encounter large groups of Israeli tourists. Japanese and Thai tourists actively explore Georgia’s attractions. \n\n The most popular destinations are the capital Tbilisi, Mtskheta, Kakheti, and Adjara, with its stunning port city of Batumi. In the first half of 2022, Tbilisi welcomed 820,500 tourists, while Adjara saw 548,400 visitors, even before the sea season began. From July to September, these numbers increased significantly in Batumi and across Adjara. \n\n Tourists also actively travel to highland Svaneti, as well as mountainous Tusheti, Khevsureti, and Kazbegi. There is also high interest in Imereti, Kakheti, Samtskhe-Javakheti, Kvemo Kartli, Guria, and other regions.",
    },
    imageSrc: "/why-georgia/why-georgia-geography-gnta.webp",
    alt: { ka: "მდინარე", en: "River" },
  },
  {
    title: { ka: "ტურისტული სეზონები", en: "Tourist Seasons" },
    description: {
      ka: "იმის გათვალისწინებით, რომ საქართველო ტურისტებს წელიწადის ოთხივე სეზონზე იზიდავს, მათი განაწილება ქვეყნის რეგიონების მიხედვით სეზონურად განსხვავდება. \n\n ზამთრის სეზონზე ტურისტების განსაკუთრებული მიზიდულობის ცენტრებია გუდაურის, ბაკურიანის, მესტიისა და გოდერძის სათხილამურო ტრასები თავისი ინფრასტრუქტურით. \n\n შემოდგომაზე ტურისტებს განსაკუთრებით კახეთი ხიბლავს თავისი ღირსშესანიშნაობებით, სადაც ამ დროს ყურძნის მოსავალს იღებენ და 8 000 წლის ისტორიის მქონე ქართულ ღვინოებს აყენებენ. \n\n ზაფხულში ტურისტების ძირითადი ნაკადი ან შავი ზღვის სანაპიროზე მიდის დასასვენებლად, ან მაღალმთიან საქართველოს მიაშურებს. \n\n როგორც კი დასასვენებლად დროს გამონახავ, წელიწადის რა დროც არ უნდა იყოს, ჩამოდი საქართველოში, ქვეყანაში, საიდანაც მხოლოდ კარგი მოგონებებით წახვალ.",
      en: "Given that Georgia attracts tourists in all four seasons, their distribution across the country’s regions varies seasonally. \n\n In winter, the main attractions are the ski resorts of Gudauri, Bakuriani, Mestia, and Goderdzi, with their well-developed infrastructure. \n\n In autumn, Kakheti captivates tourists with its sights, where the grape harvest takes place and 8,000-year-old Georgian wines are produced. \n\n In summer, the main tourist flow heads to the Black Sea coast for relaxation or to highland Georgia for adventure. \n\n Whenever you find time for a vacation, no matter the season, come to Georgia—a country you’ll leave with only fond memories.",
    },
    imageSrc: "/why-georgia/weather-and-seasonality-gnta.webp",
    alt: { ka: "ტბა", en: "Lake" },
  },
];

export const sections6: Section[] = [
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
        image: "/why-georgia/ski-tour-on-gorvash-1.webp",
        title: {
          ka: "ტურიზმის სტატისტიკა საქართველოში",
          en: "Tourism Statistics in Georgia",
        },
        description: {
          ka: "საქართველო ძალიან მიმზიდველი პატარა ქვეყანაა დიდი ისტორიით, უნიკალური კულტურით, საოცარი რელიეფით, უგემრიელესი ღვინითა და მრავალფეროვანი სამზარეულოთი.",
          en: "Georgia is a highly attractive small country with a rich history, unique culture, stunning landscapes, delicious wine, and diverse cuisine.",
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
        image: "/flags/bla2.webp",
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
          en: "Georgian wine is 8,000 years old—at that time, Georgians already knew the unique qvevri technology, which today has become one of the world’s leading methods. Do you know what these numbers mean? If you’re interested, let’s take the wine route…",
        },
      },
    ],
  },
];

// ----------------------------------------------------- start 7

export const sidebarItems7: { ka: string; en: string }[] = [
  {
    ka: "რა უნდა ვიცოდეთ ქართულ კულტურაზე?",
    en: "What to Know About Georgian Culture?",
  },
  { ka: "ქართული სუფრა", en: "Georgian Supra" },
  { ka: "ქართული ფოლკლორი", en: "Georgian Folklore" },
  { ka: "ქართული ხუროთმოძღვრება", en: "Georgian Architecture" },
  { ka: "არქეოლოგია", en: "Archaeology" },
  { ka: "ანბანი და დამწერლობა", en: "Alphabet and Script" },
];

export const contentItems7: ContentItem[] = [
  {
    title: {
      ka: "რა უნდა ვიცოდეთ ქართულ კულტურაზე?",
      en: "What to Know About Georgian Culture?",
    },
    description: {
      ka: "საქართველო ერთ-ერთი უძველესი ქვეყანაა და ქართული კულტურაც უპირველესი ცივილიზაციების ეპოქიდან იწყება. \n\n ევროპისა და აზიის გზაგასაყარზე მდებარე საქართველოში საუკუნეების განმავლობაში ერთმანეთს ხვდებოდა ევროპული, არაბული, სპარსული, ოსმალური, შორეული აღმოსავლეთისა თუ სხვა ქვეყნების ცივილიზაციები. მათი თავისებურებებისა და თვითმყოფადი ქართული შემოქმედების შერწყმა კი მრავალფეროვან და უნიკალურ კულტურას აყალიბებდა. \n\n საქართველო გაგაოცებს სიძველისა და თანამედროვეობის კომბინაციით, კულტურული მემკვიდრეობის ძეგლებითა და ისეთი სანახაობებით, რომლებშიც საუკუნოვანი ტრადიციები ახლებურ ფორმებშია გაცოცხლებული. \n\n მიუხედავად იმისა, რომ საქართველოს მუდმივად უწევდა ომები დამპყრობლებთან, ჩვენმა ქვეყანამ მაინც შეძლო და შეინარჩუნა: თვითმყოფადი ხუროთმოძღვრება, ენა და უნიკალური დამწერლობა, ლიტერატურა, მუსიკალური და ქორეოგრაფიული ხელოვნება, გასტრონომიული ტრადიციები და სხვა. \n\n და მაინც, რა გამოვცადოთ და რა ვნახოთ საქართველოში იმისთვის, რომ ქართული კულტურა რამდენიმე დღეში შევიცნოთ?",
      en: "Georgia is one of the oldest countries, and its culture dates back to the era of the earliest civilizations. \n\n Located at the crossroads of Europe and Asia, Georgia has been a meeting point for European, Arab, Persian, Ottoman, Far Eastern, and other civilizations over centuries. The blend of their characteristics with unique Georgian creativity has shaped a diverse and distinctive culture. \n\n Georgia will amaze you with its combination of antiquity and modernity, cultural heritage monuments, and spectacles where centuries-old traditions are brought to life in new forms. \n\n Despite constant wars with conquerors, our country managed to preserve its unique architecture, language and distinctive script, literature, musical and choreographic arts, gastronomic traditions, and more. \n\n So, what should you experience and see in Georgia to get to know its culture in just a few days?",
    },
    anotherDescription: {
      ka: "ქართული კულტურის მრავალი წახნაგიდან, პირველ რიგში, ერის ტოლერანტულობას გამოარჩევენ - აქ სტუმარი ღვთისაა და თუ მაინც გაგიჩნდა კითხვა: რატომ უნდა იმოგზაურო საქართველოში, მაშინ შეგიძლია რამდენიმე ფაქტს გაეცნო ჩვენი ქვეყნის კულტურაზე.",
      en: "Among the many facets of Georgian culture, the nation’s tolerance stands out—here, a guest is considered a gift from God. If you’re still wondering why you should travel to Georgia, you can explore a few facts about our country’s culture.",
    },
    imageSrc: "",
    alt: { ka: "მთები", en: "Mountains" },
  },
  {
    title: { ka: "ქართული სუფრა", en: "Georgian Supra" },
    description: {
      ka: "საქართველოში ჩამოსული ბევრი სტუმარი ეთნოკულტურის გაცნობას სუფრითა და ქართული კერძებით იწყებს. \n\n ქვეყანა, სადაც 8200 წლის წინათ ღვინოს წურავდნენ, მართლაც, თავს იწონებს სუფრის ტრადიციით. \n\n საქართველოში სუფრა ლხინსაც ახლავს და ჭირის თანამდევიც არის; სუფრასთან მოისმენ ყველაფერს, რაზედაც აქაური ადამიანი ფიქრობს, რაც უყვარს და რითაც თავს იწონებს. სუფრასთან მღერიან, ცეკვავენ, ლექსებს ამბობენ, აზრებს ცვლიან და ერთმანეთს უმეგობრდებიან ადამიანები. \n\n საქართველოს სხვადასხვა კუთხეში შენთვის გაშლილ სუფრაზე გასინჯავ ამ კუთხისთვის დამახასიათებელ სასმელებსა და კერძებს. მათი საშუალებით კი ამ მხარის თავისებურებებსა და მის ავთენტიკურ გემოს გაიგებ.",
      en: "Many visitors to Georgia begin exploring its ethnoculture with the supra and Georgian dishes. \n\n A country that was making wine 8,200 years ago truly prides itself on its table traditions. \n\n In Georgia, the supra accompanies both joy and sorrow; at the table, you’ll hear everything that locals think about, love, and take pride in. People sing, dance, recite poetry, exchange ideas, and forge friendships at the supra. \n\n In different regions of Georgia, the table set for you will offer drinks and dishes characteristic of that area, allowing you to discover the region’s unique flavors and authenticity.",
    },
    imageSrc: "/why-georgia/new-year-supra-gnta.webp",
    alt: { ka: "მდინარე", en: "River" },
  },
  {
    title: { ka: "ქართული ფოლკლორი", en: "Georgian Folklore" },
    description: {
      ka: "ქართული ცეკვისა და სიმღერის ისტორია ჩვენს წელთაღრიცხვამდე იწყება. \n\n საქართველო პოლიფონიის სამშობლოა. ქართული სიმღერაც ისევე უძველესია, როგორც თავად საქართველო. \n\n ამ ქვეყანაში თითოეულ მხარეს თავისი უნიკალური ჟღერადობა აქვს, მაგრამ ყველას ახასიათებს ერთი რამ - მოწესრიგებული მრავალხმიანობა. \n\n ქართულ მრავალხმიანობის განსაკუთრებულობას ისიც ადასტურებს, რომ მას “იუნესკომ” (UNESCO) კაცობრიობის არამატერიალური კულტურული მემკვიდრეობის სტატუსი მიანიჭა. 1977 წელს კი „ნასამ“ კოსმოსში ოქროს ფირფიტა გაუშვა, რომელზედაც ჩაწერა კაცობრიობის მიერ შექმნილი შედევრები, მათ შორის - ქართული ხალხური პოლიფონიის განძი „ჩაკრულო“. \n\n საქართველომ ქრისტიანულ სამყაროში ერთ-ერთმა პირველმა დაუდო საფუძველი საეკლესიო მუსიკაში სამხმიან გალობას და აქ ჩამოსულ სტუმარს მისი მოსმენა ნებისმიერ მართლმადიდებლურ ტაძარში შეუძლია; \n\n ქართული კულტურის კიდევ ერთი მარგალიტია ცეკვა. ის ჰყვება ამბავს სიყვარულზე, ომზე, რწმენასა და შრომაზე. როცა ქართული ცეკვის განსაკუთრებულობაზე საუბრობენ, პირველ რიგში, მამაკაცის პლასტიკასა და ქალის გრაციოზულობას აღნიშნავენ.",
      en: "The history of Georgian dance and song begins before the Common Era. \n\n Georgia is the homeland of polyphony. Georgian songs are as ancient as the country itself. \n\n Each region in this country has its unique sound, but they all share one characteristic—harmonious polyphony. \n\n The uniqueness of Georgian polyphony is further evidenced by its designation by UNESCO as part of humanity’s intangible cultural heritage. In 1977, NASA launched a golden record into space containing masterpieces of human creation, including the treasure of Georgian folk polyphony, 'Chakrulo.' \n\n Georgia was one of the first in the Christian world to lay the foundation for three-part ecclesiastical chanting, which visitors can hear in any Orthodox church here. \n\n Another gem of Georgian culture is its dance, which tells stories of love, war, faith, and labor. When discussing the uniqueness of Georgian dance, people first highlight the men’s plasticity and the women’s gracefulness.",
    },
    imageSrc: "/why-georgia/unique-folklore-gnta.webp",
    alt: { ka: "ტბა", en: "Lake" },
  },
  {
    title: { ka: "ქართული ხუროთმოძღვრება", en: "Georgian Architecture" },
    description: {
      ka: "არქიტექტურული ძეგლები, სახლები, ციხესიმაგრეები, ჩუქურთმები, ფრესკები თუ ორნამენტები, რომლებსაც ქვეყნის ყველა კუთხეში, მთებსა თუ ბარში წააწყდები, ქართული კულტურის სიმდიდრეს დაგანახვებს. \n\n IV საუკუნიდან, საქართველოში ქრისტიანობის გავრცელების შემდეგ, საეკლესიო ხუროთმოძღვრების განვითარება იწყება. \n\n საქართველო, რომელიც ქრისტიანული და აღმოსავლური რელიგიების გზაჯვარედინზეა, ყოველთვის მიისწრაფოდა კულტურული დასავლეთისაკენ. ქრისტიანობის მიღებით კი ქვეყანამ საბოლოოდ განსაზღვრა თავისი მიმართულება. \n\n დღეს საქართველოში შუა საუკუნეების მრავალი უნიკალური ქრისტიანული ძეგლია შემორჩენილი სრულყოფილი სახით.",
      en: "Architectural monuments, houses, fortresses, carvings, frescoes, and ornaments found in every corner of the country, in mountains and plains alike, reveal the richness of Georgian culture. \n\n From the 4th century, with the spread of Christianity in Georgia, ecclesiastical architecture began to develop. \n\n Situated at the crossroads of Christian and Eastern religions, Georgia always leaned toward Western culture. By adopting Christianity, the country definitively set its course. \n\n Today, many unique medieval Christian monuments remain perfectly preserved in Georgia.",
    },
    imageSrc: "/why-georgia/georgian-architecture.webp",
    alt: { ka: "ტბა", en: "Lake" },
  },
  {
    title: { ka: "არქეოლოგია", en: "Archaeology" },
    description: {
      ka: "საქართველოს ტერიტორიაზე მსოფლიო მნიშვნელობის არაერთი არქეოლოგიური აღმოჩენაა გაკეთებული. \n\n მსოფლიოსთვის სენსაცია გახდა საქართველოში, სოფელ იმირთან, გადაჭრილი გორის არქეოლოგიური გათხრებისას აღმოჩენილი ყურძნის წიპწები, რომელთა ასაკი ძვ. წ. აღ. 6000 წელია. მათი კვლევით დადგინდა, რომ საქართველო ღვინის სამშობლოა - ველური ვაზი ადამიანმა პირველად საქართველოში მოიშინაურა და კულტურული ვაზისგან ღვინო დაწურა. \n\n საქართველოში შეგიძლია ანტიკური ხანის ნაქალაქარებიც ნახო, საქალაქო ცხოვრების მაღალი დონით. ელინიზმის ეპოქაში, როცა ახალი მსოფლიო ცივილიზაცია იბადებოდა, საქართველოზე ერთ-ერთი დიდი, მსოფლიო სავაჭრო-სატრანზიტო მაგისტრალი გადიოდა და შედეგად ქვეყნის ურბანიზაცია მოჰქონდა.",
      en: "Numerous archaeological discoveries of global significance have been made on Georgia’s territory. \n\n A worldwide sensation was the discovery of grape pips near the village of Imiri at the Grakliani Hill excavations, dating back to 6000 BCE. Their study confirmed that Georgia is the cradle of winemaking—humans first domesticated wild vines and produced wine from cultivated grapes here. \n\n In Georgia, you can also see ancient city sites from the Classical era with a high level of urban life. During the Hellenistic period, when a new global civilization was emerging, one of the world’s major trade and transit routes passed through Georgia, contributing to the country’s urbanization.",
    },
    imageSrc: "/why-georgia/vani-archeological-museum-gnta.webp",
    alt: { ka: "ტბა", en: "Lake" },
  },
  {
    title: { ka: "ანბანი და დამწერლობა", en: "Alphabet and Script" },
    description: {
      ka: "მსოფლიოში უძველესი დამწერლობა რამდენიმე ათეულ ენას აქვს. ძირითადი ანბანი კი მხოლოდ ორი ათეულია, რომელთა შორის ქართული ერთ-ერთი უძველესია. ის, სავარაუდოდ, ძვ.წ. III საუკუნეშია შექმნილი. \n\n ქართულ ანბანს ისტორიის განმავლობაში სამი სახის დამწერლობა ჰქონდა: ასომთავრული, ნუსხური და მხედრული - ამ უკანასკნელს დღემდე ვიყენებთ. \n\n 2016 წელს “იუნესკომ” ქართული ანბანის სამივე სახეობა არამატერიალური კულტურული მემკვიდრეობის სიაში შეიტანა. უძველესი ქართული დამწერლობის ნიმუშები საქართველოს სახელმწიფო მუზეუმშია დაცული. \n\n ქართულ კულტურაზე საუბარი დაუსრულებლად შეიძლება, თუმცა მოყოლილს ნანახი და მოსმენილი სჯობს - ამიტომ ეწვიე ქართულ ქალაქებს, სოფლებს, ტაძრებს, ეზიარე ქართულ ფოლკლორს, ტრადიციებს, დაათვალიერე მუზეუმები, ქუჩაში გამოფენილი ნაკეთობები, დაესწარი სპექტაკლებს, უყურე ქართულ კინოს, დააგემოვნე ქართული კერძები და თავად მიიღე პასუხი კითხვაზე: „რატომ საქართველო?“",
      en: "Only a few dozen languages worldwide have ancient scripts, and among the two dozen primary alphabets, the Georgian script is one of the oldest, likely created in the 3rd century BCE. \n\n Throughout its history, the Georgian alphabet has had three types of scripts: Asomtavruli, Nuskhuri, and Mkhedruli—the latter is still used today. \n\n In 2016, UNESCO included all three types of the Georgian alphabet in its list of intangible cultural heritage. Samples of ancient Georgian scripts are preserved in the Georgian State Museum. \n\n One could talk endlessly about Georgian culture, but seeing and hearing it surpasses any tale—so visit Georgian cities, villages, and churches, immerse yourself in Georgian folklore and traditions, explore museums and street exhibitions, attend performances, watch Georgian films, taste Georgian dishes, and find your own answer to the question: 'Why Georgia?'",
    },
    imageSrc: "/why-georgia/why-georgia-a-unique-alphabet.webp",
    alt: { ka: "ტბა", en: "Lake" },
  },
];

export const sections7: Section[] = [
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
        image: "/why-georgia/why-georgia-georgian-culture.webp",
        title: { ka: "ქართული კულტურა", en: "Georgian Culture" },
        description: {
          ka: "ეგზოტიკური, იდუმალი, უნიკალური - თუ ოდესმე გკითხავენ, როგორია ქართული კულტურა, შეგიძლია ამ სამი სიტყვით დაახასიათო. დღეს მსოფლიო საქართველოს ერთ-ერთ ყველაზე სტუმართმოყვარე და თავაზიან ქვეყნად იცნობს.",
          en: "Exotic, mysterious, unique—if anyone ever asks what Georgian culture is like, you can describe it with these three words. Today, the world recognizes Georgia as one of the most hospitable and courteous countries.",
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
        image: "/flags/bla2.webp",
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
          en: "Georgian wine is 8,000 years old—at that time, Georgians already knew the unique qvevri technology, which today has become one of the world’s leading methods. Do you know what these numbers mean? If you’re interested, let’s take the wine route…",
        },
      },
    ],
  },
];

// ------------------------------------------- start 8

export const sidebarItems8: { ka: string; en: string }[] = [
  { ka: "ჰაგიოგრაფია", en: "Hagiography" },
  { ka: "საგმირო-სარაინდო ეპოსი", en: "Heroic-Chivalric Epic" },
  { ka: "პირველი ბეჭდური წიგნები", en: "First Printed Books" },
  { ka: "რომანტიზმი", en: "Romanticism" },
  { ka: "კრიტიკული რეალიზმი", en: "Critical Realism" },
  { ka: "მეოცე საუკუნის მწერლობა", en: "20th Century Literature" },
  { ka: "„ცისფერყანწელები“ და გალაკტიონი", en: "“Blue Horns” and Galaktion" },
  { ka: "თანამედროვე მწერლობა", en: "Contemporary Literature" },
];

export const contentItems8: ContentItem[] = [
  {
    title: { ka: "ჰაგიოგრაფია", en: "Hagiography" },
    description: {
      ka: "პირველი ლიტერატურული ძეგლი „წამებაი წმინდისა შუშანიკისი დედოფლისაი“, რომელმაც ჩვენამდე მოაღწია, 476-483 წლებით თარიღდება. ამავე საუკუნეში შეიქმნა პეტრე იბერის ფილოსოფიური ნაშრომი „არეოპაგეტიკა”, მოგვიანებით, მერვე საუკუნეში კი - უცნობი ავტორის „წმინდა ნინოს ცხოვრება“ და იოანე საბანისძის „აბო ტფილელის წამება“. ჰაგიოგრაფიული ჟანრის შესანიშნავი ნიმუში - გიორგი მერჩულეს „გრიგოლ ხანძთელის ცხოვრება“ 951 წლით თარიღდება.",
      en: "The first literary monument to reach us, 'The Martyrdom of Saint Shushanik the Queen,' dates to 476–483 CE. In the same century, Petre Iberi’s philosophical work 'Areopagetica' was created, followed in the 8th century by the anonymous 'Life of Saint Nino' and Ioane Sabanisdze’s 'Martyrdom of Abo of Tbilisi.' An outstanding example of the hagiographic genre, Giorgi Merchule’s 'Life of Grigol of Khandzta,' dates to 951 CE.",
    },
    anotherDescription: {
      ka: "ქართული დამწერლობის შექმნა უდიდესი მნიშვნელობის მოვლენა იყო საქართველოს კულტურულ და საზოგადოებრივ ცხოვრებაში, რადგან ეროვნულ ენაზე მწერლობის შექმნა ერის ცხოვრებაში უდიდესი წინგადადგმული ნაბიჯია. ქართული ხელნაწერი წიგნების ისტორია ბიბლიური წიგნების თარგმნითა და გადაწერით იწყება. მეხუთე, მერვე საუკუნით დათარიღებულ პალიმფსესტებზე ფრაგმენტების სახითაა შემორჩენილი ძველი აღთქმის წიგნები. დღეისთვის ცნობილია ქართული ხელნაწერი წიგნის 11 ათასამდე ეგზემპლარი, რომლებიც ინახება როგორც საქართველოს, ისე უცხოეთის წიგნსაცავებში.",
      en: "The creation of the Georgian script was a monumental event in Georgia’s cultural and social life, as the development of literature in the national language is a significant step forward for any nation. The history of Georgian manuscripts begins with the translation and copying of biblical texts. Fragments of Old Testament books, preserved on palimpsests, date back to the 5th and 8th centuries. Today, nearly 11,000 Georgian manuscript books are known, stored in repositories both in Georgia and abroad.",
    },
    imageSrc: "",
    alt: { ka: "მთები", en: "Mountains" },
  },
  {
    title: { ka: "საგმირო-სარაინდო ეპოსი", en: "Heroic-Chivalric Epic" },
    description: {
      ka: "განსაკუთრებით საინტერესო XI-XII საუკუნეებია, რადგანაც ამ პერიოდში ქართული წერილობითი კულტურის ძეგლები დამოუკიდებელი და ძლიერი ფეოდალური მონარქიის სამეფო კარის პირობებში იქმნებოდა. ქართული საგმირო-სარაინდო თხზულებები საუკუნეების განმავლობაში ასაზრდოებდა ქართველ მკითხველს. იქმნებოდა სრულიად უნიკალური ხელნაწერები, რომლებიც საოჯახო რელიკვიად, „სამზითვო წიგნებად“ მიიჩნეოდა და მათ გადაწერასა და შემკობას დიდი მნიშვნელობა ჰქონდა. \n\n ქართული საერო მწერლობის გამორჩეული ნიმუშია სარაინდო რომანი „ამირანდარეჯანიანი“, რომელიც ძლევამოსილი გმირის ამირან დარეჯანის ძის თავგადასავალს მოგვითხრობს. ძეგლის ავტორია მოსე ხონელი. ამ პერიოდის მნიშვნელოვანი ძეგლია ქართული სამედიცინო კარაბადინი, ლეონტი მროველის „ცხოვრება ქართველთა მეფეთა“, „ეთერიანი“ (ხალხური ეპოსი), უცნობი ავტორის მიერ დაწერილი „ცხოვრება ფარნავაზისა“, ჩახრუხაძის „თამარიანი“, მეფე დემეტრეს მიერ შექმნილი საგალობელი „შენ ხარ ვენახი“ და ქართული და მსოფლიო პოეზიის მწვერვალი - შოთა რუსთაველის „ვეფხისტყაოსანი“. XIII-XIV საუკუნეებში შეიქმნა მნიშვნელოვანი ნაწარმოებები - იოანე შავთელის „აბდულმესიანი“ და „ქართლის ცხოვრება“.",
      en: "The 11th–12th centuries are particularly notable, as during this period, Georgian literary monuments were created under the conditions of an independent and powerful feudal monarchy’s royal court. Georgian heroic-chivalric works nourished readers for centuries. Unique manuscripts were produced, considered family heirlooms or 'treasured books,' and their copying and decoration held great significance. \n\n A distinguished example of Georgian secular literature is the chivalric romance 'Amirandarejaniani,' which narrates the adventures of the mighty hero Amiran, son of Darejan, authored by Mose Khoneli. Other significant works from this period include the Georgian medical 'Karabadini,' Leonti Mroveli’s 'Life of the Kings of Kartli,' the folk epic 'Eteriani,' the anonymous 'Life of Parnavaz,' Chakhrukhadze’s 'Tamariani,' King Demetre’s hymn 'Thou Art a Vineyard,' and the pinnacle of Georgian and world poetry—Shota Rustaveli’s 'The Knight in the Panther’s Skin.' In the 13th–14th centuries, notable works included Ioane Shavteli’s 'Abdulmesiani' and 'Kartlis Tskhovreba' (Life of Kartli).",
    },
    imageSrc: "",
    alt: { ka: "მდინარე", en: "River" },
  },
  {
    title: { ka: "პირველი ბეჭდური წიგნები", en: "First Printed Books" },
    description: {
      ka: "მდიდარი და გამორჩეულია XVII-XVIII საუკუნეების ქართული მწერლობაც. პირველი ქართული ნაბეჭდი წიგნი იტალიურ-ქართული ლექსიკონია, რომელიც 1629 წელს რომში დაიბეჭდა. როდესაც ვახტანგ მეექვსემ საქართველოში სტამბა ჩამოიტანა, ქართული თხზულებების ბეჭდვა დაიწყო. \n\n 1709 წელს ქართულ სტამბაში პირველად სახარება დაიბეჭდა, შემდეგ კი - სხვა წიგნები, მათ შორის „ვეფხისტყაოსანი“. ამავე პერიოდში დაიბეჭდა სულხან-საბა ორბელიანის „სიბრძნე სიცრუისა“ და „მოგზაურობა ევროპაში“. სულხან-საბა ორბელიანის თხზულება „სიბრძნე სიცრუისა“ XVII–XVIII საუკუნეების უნიკალური ნაწარმოებია, რომელმაც საგანმანათლებლო და დიდაქტიკური დანიშნულება შეიძინა. \n\n ამავე პერიოდს განეკუთვნება ტრაგიკული ბედის მქონე, უცხოეთში გადახვეწილი პოეტის დავით გურამიშვილის მონუმენტური პოემა „დავითიანი“, რომელიც ამ ეპოქის მშფოთვარე ცხოვრებას აღწერს. \n\n 1749-1802 წლებში ქალაქ თბილისში ერეკლე მეორის სტამბა დაარსდა, სადაც ქართული ლიტერატურის ორიგინალური ნიმუშები იბეჭდებოდა, მათ შორის, ანტონ კათალიკოსის „ქადაგება“, „შესხმა ახლისა წიგნი - საბეჭდისა“ და სხვა.",
      en: "The 17th–18th centuries also saw rich and distinctive Georgian literature. The first printed Georgian book, an Italian-Georgian dictionary, was published in Rome in 1629. When Vakhtang VI brought a printing press to Georgia, the printing of Georgian works began. \n\n In 1709, the Gospel was printed in the Georgian press, followed by other books, including 'The Knight in the Panther’s Skin.' During this period, Sulkhan-Saba Orbeliani’s 'Wisdom of Lies' and 'Journey to Europe' were also printed. 'Wisdom of Lies' is a unique 17th–18th-century work that gained educational and didactic significance. \n\n This period also includes the monumental poem 'Davitiani' by the tragic poet Davit Guramishvili, who was exiled abroad and depicted the turbulent life of that era. \n\n Between 1749 and 1802, King Erekle II established a printing press in Tbilisi, where original Georgian literary works were printed, including Anton Katalikos’ 'Sermon,' 'New Book of Printing,' and others.",
    },
    imageSrc: "",
    alt: { ka: "ტბა", en: "Lake" },
  },
  {
    title: { ka: "რომანტიზმი", en: "Romanticism" },
    description: {
      ka: "XIX საუკუნეში მსოფლიო ლიტერატურაში ახალი მიმდინარეობა - რომანტიზმი გაჩნდა, რომელმაც საქართველოშიც შემოაღწია. მისმა ქართველმა წარმომადგენლებმა - ალექსანდრე ჭავჭავაძემ, გრიგოლ ორბელიანმა და ნიკოლოზ ბარათაშვილმა პოეზიის შესანიშნავი ნიმუშები შექმნეს.",
      en: "In the 19th century, a new literary movement—Romanticism—emerged in world literature and reached Georgia. Its Georgian representatives, Alexandre Chavchavadze, Grigol Orbeliani, and Nikoloz Baratashvili, created outstanding poetic works.",
    },
    imageSrc: "",
    alt: { ka: "ტბა", en: "Lake" },
  },
  {
    title: { ka: "კრიტიკული რეალიზმი", en: "Critical Realism" },
    description: {
      ka: "XIX საუკუნის მეორე ნახევარში ასპარეზზე კრიტიკული რეალიზმის წარმომადგენლები, ე.წ. თერგდალეულები გამოდიან: ილია ჭავჭავაძე, აკაკი წერეთელი, ნიკო ნიკოლაძე, დავით კლდიაშვილი, ალექსანდრე ყაზბეგი, იაკობ გოგებაშვილი და სხვები. ამავე პერიოდს მიეკუთვნება ვაჟა-ფშაველას შემოქმედება, რომელიც სამართლიანად არის აღიარებული ქართული მოდერნიზმის საფუძვლად.",
      en: "In the second half of the 19th century, representatives of Critical Realism, known as the 'Tergdaleulebi,' emerged: Ilia Chavchavadze, Akaki Tsereteli, Niko Nikoladze, Davit Kldiashvili, Alexandre Kazbegi, Iakob Gogebashvili, and others. This period also includes the works of Vazha-Pshavela, rightfully recognized as the foundation of Georgian modernism.",
    },
    imageSrc: "",
    alt: { ka: "ტბა", en: "Lake" },
  },
  {
    title: { ka: "მეოცე საუკუნის მწერლობა", en: "20th Century Literature" },
    description: {
      ka: "1916 წელს ახალგაზრდა მწერლებმა ქართველ სიმბოლისტ პოეტთა და პროზაიკოსთა გაერთიანება - „ცისფერყანწელები“ დააარსეს, რომელმაც 1930 წლამდე იარსება. „ცისფერყანწელები“ საბჭოთა წყობილების მიერ იდევნებოდნენ, რადგან მათი იდეები მიუღებელი იყო. „ცისფერყანწელთა“ გამორჩეული წარმომადგენლები იყვნენ: ტიციან ტაბიძე, ვალერიან გაფრინდაშვილი, პაოლო იაშვილი, კოლაუ ნადირაძე, ალექსანდრე არსენიშვილი, გიორგი ლეონიძე და სხვები. ამავე პერიოდში მოღვაწეობდა გამორჩეული პოეტი გალაკტიონ ტაბიძე, რომელსაც შთამომავლობამ „პოეტების მეფე“ უწოდა.",
      en: "In 1916, young writers founded the Georgian Symbolist poets’ and prose writers’ association 'Blue Horns,' which existed until 1930. The 'Blue Horns' were persecuted by the Soviet regime due to their unacceptable ideas. Notable members included Titsian Tabidze, Valerian Gaprindashvili, Paolo Iashvili, Kolau Nadiradze, Alexandre Arsenishvili, Giorgi Leonidze, and others. During the same period, the distinguished poet Galaktion Tabidze, dubbed the 'King of Poets' by posterity, was active.",
    },
    imageSrc: "",
    alt: { ka: "ტბა", en: "Lake" },
  },
  {
    title: {
      ka: "„ცისფერყანწელები“ და გალაკტიონი",
      en: "“Blue Horns” and Galaktion",
    },
    description: {
      ka: "1916 წელს ახალგაზრდა მწერლებმა ქართველ სიმბოლისტ პოეტთა და პროზაიკოსთა გაერთიანება - „ცისფერყანწელები“ დააარსეს, რომელმაც 1930 წლამდე იარსება. „ცისფერყანწელები“ საბჭოთა წყობილების მიერ იდევნებოდნენ, რადგან მათი იდეები მიუღებელი იყო. „ცისფერყანწელთა“ გამორჩეული წარმომადგენლები იყვნენ: ტიციან ტაბიძე, ვალერიან გაფრინდაშვილი, პაოლო იაშვილი, კოლაუ ნადირაძე, ალექსანდრე არსენიშვილი, გიორგი ლეონიძე და სხვები. ამავე პერიოდში მოღვაწეობდა გამორჩეული პოეტი გალაკტიონ ტაბიძე, რომელსაც შთამომავლობამ „პოეტების მეფე“ უწოდა.",
      en: "In 1916, young writers founded the Georgian Symbolist poets’ and prose writers’ association 'Blue Horns,' which existed until 1930. The 'Blue Horns' were persecuted by the Soviet regime due to their unacceptable ideas. Notable members included Titsian Tabidze, Valerian Gaprindashvili, Paolo Iashvili, Kolau Nadiradze, Alexandre Arsenishvili, Giorgi Leonidze, and others. During the same period, the distinguished poet Galaktion Tabidze, dubbed the 'King of Poets' by posterity, was active.",
    },
    imageSrc: "",
    alt: { ka: "ტბა", en: "Lake" },
  },
  {
    title: { ka: "თანამედროვე მწერლობა", en: "Contemporary Literature" },
    description: {
      ka: "მეოცე საუკუნის მეორე ნახევარში, დიდი სამამულო ომის შემდგომ პერიოდში ასპარეზზე გამოვიდნენ ახალგაზრდა ნიჭიერი მწერლები: ოტია იოსელიანი, გურამ დოჩანაშვილი, ოთარ და თამაზ ჭილაძეები, ჯემალ ქარჩხაძე, ჭაბუა ამირეჯიბი, ოთარ ჩხეიძე, რეზო ინანიშვილი, რეზო ჭეიშვილი, ნოდარ დუმბაძე, გურამ რჩეულიშვილი, ზაირა არსენიშვილი და სხვები. ამ პერიოდში დამკვიდრდა დასავლეთიდან შემოსული მაგიური რეალიზმი და ამ ჟანრში მრავალი საინტერესო ნაწარმოები შეიქმნა. \n\n თანამედროვე ქართულ ლიტერატურაში ძირითადი ადგილი პოსტმოდერნიზმს უკავია. მათ შორის მნიშვნელოვანი ადგილი აქვს ბესიკ ხარანაულის, აკა მორჩილაძის, ირაკლი ჯავახაძის, დათო ტურაშვილის, ბექა ქურხულის, შოთა იათაშვილის, ნაირა გელაშვილისა და სხვათა შემოქმედებას. მათი ნაწარმოებები მსოფლიოს მრავალ ენაზე ითარგმნა. ცალკე აღნიშვნის ღირსნი არიან საქართველოს საზღვრებს გარეთ მოღვაწე ქართველი მწერლები. მათ შორის - ნინო ხარატიშვილი, რომლის მსოფლიო ბესტსელერები ქართული თანამედროვე ლიტერატურის მნიშვნელოვანი შენაძენია.",
      en: "In the second half of the 20th century, after the Great Patriotic War, a new generation of talented writers emerged: Otia Ioseliani, Guram Dochanashvili, Otar and Tamaz Chiladze, Jemal Karchkhadze, Chabua Amirejibi, Otar Chkheidze, Rezo Inanishvili, Rezo Cheishvili, Nodar Dumbadze, Guram Rcheulishvili, Zaira Arsenishvili, and others. During this period, magical realism, introduced from the West, took root, and many interesting works were created in this genre. \n\n In contemporary Georgian literature, postmodernism holds a central place. Notable contributors include Besik Kharanauli, Aka Morchiladze, Irakli Javakhadze, Dato Turashvili, Beka Kurkhuli, Shota Iatashvili, Naira Gelashvili, and others, whose works have been translated into many languages worldwide. Special mention goes to Georgian writers active abroad, particularly Nino Kharatishvili, whose global bestsellers are significant contributions to contemporary Georgian literature.",
    },
    imageSrc: "",
    alt: { ka: "ტბა", en: "Lake" },
  },
];

export const sections8: Section[] = [
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
        image: "/why-georgia/georgian-literature.webp",
        title: { ka: "ქართული ლიტერატურა", en: "Georgian Literature" },
        description: {
          ka: "ქართული მწერლობა ისეთივე ძველია, როგორიც მრავალსაუკუნოვანი, წარსულის მქონე საქართველო. ისტორიამ შემოგვინახა როგორც ქრისტიანობამდელი ნაწარმოებები, ხალხური ეპოსის ბრწყინვალე ნიმუშები, ისე ძველი ჰაგიოგრაფიული თუ საერო მწერლობის ძეგლები.",
          en: "Georgian literature is as ancient as Georgia itself, with its centuries-long history. History has preserved both pre-Christian works and brilliant examples of folk epics, as well as ancient hagiographic and secular literary monuments.",
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
        image: "/flags/bla2.webp",
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
          en: "Georgian wine is 8,000 years old—at that time, Georgians already knew the unique qvevri technology, which today has become one of the world’s leading methods. Do you know what these numbers mean? If you’re interested, let’s take the wine route…",
        },
      },
    ],
  },
];

// ------------------------------------------------ start 9

export const sidebarItems9: { ka: string; en: string }[] = [
  {
    ka: "ქართული ცეკვა ჩვენს წელთაღრიცხვამდე",
    en: "Georgian Dance Before Our Era",
  },
  {
    ka: "რა არის ქართული ცეკვის საყოველთაო აღიარების საიდუმლო?",
    en: "What is the Secret of Georgian Dance’s Universal Recognition?",
  },
  { ka: "ცეკვა ქართული - წყვილის ცეკვა", en: "Dance Kartuli - Couple’s Dance" },
  { ka: "ფერხული", en: "Perkhuli" },
  { ka: "„ხორუმი“ - საბრძოლო ცეკვა", en: "“Khorumi” - Battle Dance" },
  { ka: "„ფარიკაობა“ - საბრძოლო ცეკვა", en: "“Parikaoba” - Battle Dance" },
  { ka: "აჭარული  - განდაგანა", en: "Adjarian - Gandagana" },
  { ka: "„ოსური“", en: "“Osuri”" },
  {
    ka: "ქართული ცეკვის ილეთები ჰოლივუდურ ბლოკბასტერში",
    en: "Georgian Dance Moves in a Hollywood Blockbuster",
  },
];

export const contentItems9: ContentItem[] = [
  {
    title: {
      ka: "ქართული ცეკვა ჩვენს წელთაღრიცხვამდე",
      en: "Georgian Dance Before Our Era",
    },
    description: {
      ka: "ქართული ხალხური ქორეოგრაფიის მდიდარი ისტორია არაერთი არქეოლოგიური და უძველესი ლიტერატურული მასალით დასტურდება, რომლებიც საქართველოს ეროვნულ მუზეუმშია გამოფენილი. \n\n ქართული საცეკვაო ხელოვნების ისტორიის სათავედ ჯერ კიდევ უახლოეს წარსულში მიიჩნეოდა ნიღბიანი მონადირეების ერთმწკრივად, ანუ მწყობრად, მოძრაობის გამოსახულება თრიალეთის ვერცხლის თასზე, რომელიც საქართველოს ეროვნული მუზეუმის ყველაზე ცნობილი არქეოლოგიური ექსპონატია - ის დაახლოებით 3700 წლისაა და გვიან ბრინჯაოს ხანას მიეკუთვნება. \n\n თუმცა დღეს საცეკვაო ხელოვნების მიმართულებით განიხილავენ ქვემო ქართლში იმირისა და არუხლოს გორანამოსახლარებზე (ძვ. წ. VI-V ათასწლეულები) აღმოჩენილ თიხის ჭურჭელზე დატანილ სიუჟეტურ კომპოზიციებს. ეს იძლევა მნიშვნელოვან ინფორმაციას იმის შესახებ, რომ ჯერ კიდევ 6000 წლის წინათ (ან უფრო ადრიდანაც) ქართველებს ჰქონდათ სანახაობრივი წარმოდგენების კულტურა, რომელშიც ერთ-ერთი მთავარი ადგილი ცეკვას ეკავა. \n\n პირველი ცეკვა, რომელიც ქართული ხალხური ქორეოგრაფიის წინამორბედი უნდა ყოფილიყო, რიტუალური ფერხულია. ეს ულამაზესი სანახაობაა და დღესაც ერთ-ერთი პოპულარული ცეკვაა.",
      en: "The rich history of Georgian folk choreography is evidenced by numerous archaeological and ancient literary materials displayed at the National Museum of Georgia. \n\n Until recently, the history of Georgian dance was thought to begin with the depiction of masked hunters moving in a row, as seen on the Trialeti silver cup, one of the most famous archaeological exhibits at the National Museum of Georgia, dating back approximately 3,700 years to the Late Bronze Age. \n\n However, today, narrative compositions on clay pottery found at the Imiri and Arukhlo settlements in Kvemo Kartli (6th–5th millennia BCE) are considered in the context of dance art. These provide significant evidence that as early as 6,000 years ago (or even earlier), Georgians had a culture of spectacular performances in which dance played a central role. \n\n The first dance, likely a precursor to Georgian folk choreography, is the ritual Perkhuli, a beautiful spectacle and one of the most popular dances today.",
    },
    anotherDescription: {
      ka: "დღეს ულამაზესი ილეთებით, ურთულესი ხტომითი მოძრაობებით, ცეცხლოვანი მუსიკითა და ჰეროიკული შემართებით მდიდარ ქართულ ცეკვას მსოფლიოს არაერთი ქვეყნის მაყურებელი აღფრთოვანებული უკრავს ტაშს.",
      en: "Today, Georgian dance, rich with exquisite movements, complex jumps, fiery music, and heroic spirit, is enthusiastically applauded by audiences in many countries worldwide.",
    },
    imageSrc: "/why-georgia/why-georgia-dance.webp",
    alt: { ka: "მთები", en: "Mountains" },
  },
  {
    title: {
      ka: "რა არის ქართული ცეკვის საყოველთაო აღიარების საიდუმლო?",
      en: "What is the Secret of Georgian Dance’s Universal Recognition?",
    },
    description: {
      ka: "თითოეული ცეკვა არის ნატიფი მოძრაობით, ფორმითა და სამოსით გადმოცემული ამბავი სიყვარულზე, გმირობაზე, მეგობრობასა და ერთგულებაზე.\n\n საქართველოს ყველა კუთხეს თავისი ცეკვა აქვს - სახასიათო, მრავალგვარი ილეთითა და მუსიკით, რომელიც სხვადასხვა საკრავზე სრულდება: დოლზე, აკორდეონზე, გუდასტვირზე. \n\n ქართულ ცეკვას თავბრუდამხვევად ლამაზი კოსტიუმები კიდევ უფრო შთამბეჭდავს ხდის. \n\n ოთხ ცეკვას მინიჭებული აქვს საქართველოს არამატერიალური მემკვიდრეობის ძეგლის სტატუსი, ესენია: ფერხული, ხორუმი, აჭარული განდაგანა, „ცეკვა ქართული“. \n\n ქართული ხალხური ცეკვა საფრანგეთის არამატერიალური კულტურული მემკვიდრეობის ნუსხაშია შეტანილი.",
      en: "Each dance tells a story of love, heroism, friendship, and loyalty through delicate movements, forms, and costumes. \n\n Every region of Georgia has its own distinctive dance, with varied movements and music performed on instruments like the doli, accordion, and gudastviri. \n\n The stunningly beautiful costumes make Georgian dance even more impressive. \n\n Four dances have been granted the status of Georgia’s intangible cultural heritage: Perkhuli, Khorumi, Adjarian Gandagana, and 'Dance Kartuli.' \n\n Georgian folk dance is also included in France’s list of intangible cultural heritage.",
    },
    imageSrc: "",
    alt: { ka: "მდინარე", en: "River" },
  },
  {
    title: {
      ka: "ცეკვა ქართული - წყვილის ცეკვა",
      en: "Dance Kartuli - Couple’s Dance",
    },
    description: {
      ka: "ეს ცეკვა ქართული ქორეოგრაფიის გვირგვინია. მას არ გააჩნია კუთხურობის ნიშანი. ის ჩვენს დრომდე მოღწეული რომანტიკული ხასიათის წყვილთა ცეკვებიდან უძველესია. \n\n ეს თეატრალიზებული სინთეზური სანახაობა XI-XII საუკუნეებში ჩაისახა. ამ ცეკვაში ქალების ცეკვა გედის სინარნარეს ჰგავს, ვაჟები კი მრავალნაირ გასმებს ტანის შეურხევლად ასრულებენ. ცეკვა „ქართული“ სასიყვარულო ურთიერთობის, პატივისცემის, სინატიფისა და ამასთანავე, თავშეკავებულობის უმაღლესი გამოხატულებაა. \n\n ცეკვა ქართულში მკაცრად დადგენილი წესები ნებისმიერ მაყურებელს აღაფრთოვანებს: \n\n ვაჟი ქალის მიმართ ყველა მოძრაობაში მოკრძალებას გამოხატავს და ის ქალის ტანსაცმელს ნაწიბურებითაც კი არ უნდა შეეხოს \n\n ცეკვას ქალი იწყებს და მთელი ინიციატივა ქალის ხელშია \n\n ვაჟმა უნდა გამოიცნოს ქალის ყველა „სურვილი“ \n\n ვაჟი მთელი ცეკვის განმავლობაში მხოლოდ ქალს უმზერს \n\n სანამ ქალი ცეკვას არ დაამთავრებს, ვაჟი თავს უფლებას არ მისცემს, ცეკვიდან გავიდეს \n\n ცეკვის დამთავრების ნიშანს ქალი თავის დაკვრით აძლევს და ვაჟი ასეთივე მოძრაობით პასუხობს",
      en: "This dance is the crown of Georgian choreography. It lacks regional specificity and is the oldest romantic couple’s dance to have survived to our time. \n\n Originating in the 11th–12th centuries, this theatrical, synthetic spectacle features women dancing with the grace of a swan, while men perform various movements with unwavering poise. The 'Kartuli' dance is the ultimate expression of romantic relationships, respect, delicacy, and restraint. \n\n The strict rules of Dance Kartuli captivate any audience: \n\n The man expresses modesty in every movement toward the woman, not even touching the hem of her dress. \n\n The woman initiates the dance, holding full control. \n\n The man must anticipate the woman’s every 'desire.' \n\n Throughout the dance, the man gazes only at the woman. \n\n The man does not leave the dance until the woman concludes it. \n\n The woman signals the end of the dance with a nod, to which the man responds with the same gesture.",
    },
    imageSrc: "/why-georgia/why-georgia-dance-gnta.webp",
    alt: { ka: "ტბა", en: "Lake" },
  },
  {
    title: { ka: "ფერხული", en: "Perkhuli" },
    description: {
      ka: "ფერხული - ხელიხელ გადაბმული ადამიანების უძველესი ცეკვა სიმღერებითა და შეძახილებით - დღესაც ყველაზე მასობრივი სანახაობაა, რომელიც არ ზღუდავს მონაწილეთა რაოდენობასა და სქესს. \n\n ფერხული ქართულ ენაში ხატოვან გამოთქმადაც კი დამკვიდრდა - „ფერხულშია ჩაბმული“, ანუ საერთო კეთილ საქმეში მონაწილეობს. \n\n ცნობილია ფერხულის მრავალი სახეობა. მათ შორის ერთ-ერთი - გურული ფერხული „ფარცა“ - 1969 წელს „ლა-სკალას“ სცენაზე დიდი წარმატებით შეასრულა ქართულმა ქორეოგრაფიულმა ანსამბლმა „სუხიშვილებმა“. ეს იყო პირველი შემთხვევა, როცა მილანის სახელგანთქმული საოპერო თეატრის სცენა ფოლკლორულ დასს დაეთმო.",
      en: "Perkhuli, an ancient dance of people holding hands, accompanied by songs and shouts, remains the most widespread spectacle today, unrestricted by the number or gender of participants. \n\n Perkhuli has even become a figurative expression in Georgian—'to be engaged in Perkhuli' means participating in a common noble cause. \n\n Many varieties of Perkhuli are known. One of them, the Gurian Perkhuli 'Partsa,' was performed with great success in 1969 by the Georgian choreographic ensemble 'Sukhishvili' on the stage of La Scala. This was the first time Milan’s renowned opera theater stage was dedicated to a folk ensemble.",
    },
    imageSrc: "",
    alt: { ka: "ტბა", en: "Lake" },
  },
  {
    title: { ka: "„ხორუმი“ - საბრძოლო ცეკვა", en: "“Khorumi” - Battle Dance" },
    description: {
      ka: "„ხორუმი“ საბრძოლო ხასიათის, უძველესი ცეკვაა და მისი ფესვები აჭარაშია, თუმცა ჰეროიკულობისა და პოპულარობის გამო კუთხურობის ნიშნის გარეშე მოიხსენებენ. სცენაზე შეიძლება ორმოცდაათამდე მოცეკვავე შემოვიდეს და საბრძოლო სულისკვეთების ცეცხლი დაანთოს. „ხორუმს“ მხოლოდ მამაკაცები ასრულებენ.",
      en: "Khorumi is an ancient battle dance with roots in Adjara, though its heroism and popularity transcend regional boundaries. Up to fifty dancers may take the stage, igniting the fire of a martial spirit. Khorumi is performed exclusively by men.",
    },
    imageSrc: "",
    alt: { ka: "ტბა", en: "Lake" },
  },
  {
    title: {
      ka: "„ფარიკაობა“ - საბრძოლო ცეკვა",
      en: "“Parikaoba” - Battle Dance",
    },
    description: {
      ka: "„ფარიკაობაც“ უძველესი საბრძოლო ცეკვაა. ბოლო დროს სატრფიალო თემით არის გამდიდრებული და მას მაყურებელი „ხევსურული ფარიკაობის“ სახელით იცნობს. საქართველოში სტუმრობისას ერთხელ მაინც უნდა ნახო სცენაზე ნამდვილი ხანჯლებით ბრძოლა, ურთულესი, მილიმეტრამდე გათვლილი აკრობატული ილეთებითა და ვაჟების ყიჟინით. დაუვიწყარი სანახაობაა.",
      en: "Parikaoba is another ancient battle dance, recently enriched with romantic themes and known to audiences as 'Khevsuruli Parikaoba.' When visiting Georgia, you must see a performance featuring real daggers, intricate, precisely calculated acrobatic movements, and the spirited shouts of men—an unforgettable spectacle.",
    },
    imageSrc: "",
    alt: { ka: "ტბა", en: "Lake" },
  },
  {
    title: { ka: "აჭარული  - განდაგანა", en: "Adjarian - Gandagana" },
    description: {
      ka: "განდაგანას ოდითგანვე კაცები და ქალები ასრულებენ. ცეკვაში კაცის მოძრაობები ძლიერი და აქტიურია, ქალის - ნაზი, ხოლო მათ შორის ურთიერთდამოკიდებულება - მსუბუქი და კეკლუცურიც კი.",
      en: "Gandagana has long been performed by both men and women. In the dance, men’s movements are strong and dynamic, while women’s are gentle, with a light and even playful interdependence between them.",
    },
    imageSrc: "",
    alt: { ka: "ტბა", en: "Lake" },
  },
  {
    title: { ka: "„ოსური“", en: "“Osuri”" },
    description: {
      ka: "„ოსური“ ულამაზესი ცეკვაა. ერთ სწორ, ლარივით გაჭიმულ მწკრივში სინქრონული, ნელი და რიტმული სინარნარე - ეს „ოსურის“ ხერხემალია და მთელი ცეკვაც ამ ქარგაზეა აწყობილი. მკაცრი და კუშტი გამომეტყველების ვაჟები ქალებს გვერდით ფარივით უდგანან, ქალისადმი მოკრძალებითა და პატივისცემით.",
      en: "Osuri is a beautiful dance. Its backbone is the synchronized, slow, and rhythmic grace of dancers in a straight, taut line, like a string of beads, with the entire dance built around this structure. Men with stern and resolute expressions stand beside women like shields, with modesty and respect toward them.",
    },
    imageSrc: "",
    alt: { ka: "ტბა", en: "Lake" },
  },
  {
    title: {
      ka: "ქართული ცეკვის ილეთები ჰოლივუდურ ბლოკბასტერში",
      en: "Georgian Dance Moves in a Hollywood Blockbuster",
    },
    description: {
      ka: "ინგლისელი კინორეჟისორის მეთიუ ვონის ფილმში „The King’s Man“, რომელიც 2022 წელს გამოვიდა ეკრანებზე, მთავარი საბრძოლო სცენა ქართველმა მოცეკვავემ და ქორეოგრაფმა დადგა და ქართული ცეკვის სახიფათო ტრიუკები შეასრულა. \n\n Kingsman-ისთვის ქართველმა ქორეოგრაფმა „Taurus World Stunt Awards“-ის დაჯილდოებაზე საუკეთესო ბრძოლის სცენის ნომინაციაში გამარჯვება მოიპოვა. \n\n ბრძოლის სცენაში „მთიულურის“, „ფარიკაობისა“ და „ყაზბეგურის“ ელემენტებია გამოყენებული.",
      en: "In the 2022 film 'The King’s Man' by English director Matthew Vaughn, the main battle scene was choreographed by a Georgian dancer and choreographer who performed daring Georgian dance stunts. \n\n The Georgian choreographer won the 'Taurus World Stunt Awards' for the best fight scene for Kingsman. \n\n The battle scene incorporates elements of 'Mtiuluri,' 'Parikaoba,' and 'Kazbeguri' dances.",
    },
    imageSrc: "",
    alt: { ka: "ტბა", en: "Lake" },
  },
];

export const sections9: Section[] = [
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
        image: "/why-georgia/georgian-folklore-dance.webp",
        title: { ka: "ქართული ცეკვა", en: "Georgian Dance" },
        description: {
          ka: "ქართულ ხალხურ ცეკვას მრავალსაუკუნოვანი ისტორია აქვს. საქართველო სწორედ ქართული ცეკვით გაიცნეს და დაიმახსოვრეს მრავალ ქვეყანაში.",
          en: "Georgian folk dance has a centuries-long history. Georgia has been recognized and remembered in many countries precisely through its dance.",
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
        image: "/flags/bla2.webp",
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
          en: "Georgian wine is 8,000 years old—at that time, Georgians already knew the unique qvevri technology, which today has become one of the world’s leading methods. Do you know what these numbers mean? If you’re interested, let’s take the wine route…",
        },
      },
    ],
  },
];

// ------------------------------------------ start 10

export const sidebarItems10: { ka: string; en: string }[] = [
  { ka: "ვაზი, ხორბალი, თაფლი", en: "Vine, Wheat, Honey" },
  { ka: "რისი გემო აქვს საქართველოს?", en: "What Does Georgia Taste Like?" },
  {
    ka: "ქართული სამზარეულო ნამდვილი სამოთხეა ვეგეტარიანელებისა და ვეგანებისთვის",
    en: "Georgian Cuisine: A True Paradise for Vegetarians and Vegans",
  },
  { ka: "აზიური? არა - ჭეშმარიტად ქართული!", en: "Asian? No—Truly Georgian!" },
  { ka: "და მაინც - რატომ საქართველო?", en: "And Yet—Why Georgia?" },
];

export const contentItems10: ContentItem[] = [
  {
    title: { ka: "ვაზი, ხორბალი, თაფლი", en: "Vine, Wheat, Honey" },
    description: {
      ka: "„ქართველმა კაცმა ამირანის თქმულებაც შექმნა და უფლისციხეც ააშენა, ვაზის ნაირ-ნაირი ჯიშებიც გამოიყვანა და „ვეფხისტყაოსანიც“ დაწერა, კლდეში ვარძიაც გამოკვეთა და საცივიც მოიგონა, სვეტიცხოველიც ააგო და სულგუნიც დაამზადა. დიახ, სრულიად შეგნებულად ვახსენე ერთმანეთის გვერდით, ერთი შეხედვით, არსებითად განსხვავებული ვარძია და საცივი, სვეტიცხოველი და სულგუნი. სულგუნისა და საცივის მომგონებელი ისეთივე ნიჭიერი კაცი იყო თავის საქმეში, როგორიც „ვეფხისტყაოსნის“ ავტორი. ვინც სულგუნსა და საცივს ამზადებდა, ისევე ინახავდა საქართველოს, როგორც დიდგორს გამარჯვებული მხედრები“, - წერს პუბლიცისტი აკაკი ბაქრაძე. \n\n გასტრონომიულ კულტურაში, სადაც ტრაპეზი კულინარიის, ადათებისა და რიტუალების კულტურად მოიაზრება, კარგად ჩანს ერის შემოქმედებითი სული და მიდრეკილებები, ისევე, როგორც მხატვრობაში, ქანდაკებაში, მუსიკაში. ამდენად, გასტრონომიით შეიძლება შთაბეჭდილების შექმნა მთლიანად ეთნოსზე. \n\n საქართველოს ბოტანიკური რუკა საუკუნეების განმავლობაში მდიდრდებოდა და ქართველი გლეხიც თავის მამულში ახარებდა ყველაფერ ახალს. ასე შემოვიდა  უცხოეთიდან და დამკვიდრდა სხვადასხვა კულტურა: ლობიო, სიმინდი, ბრინჯი, პომიდორი, ბადრიჯანი, ყველაფერი ის, რაც საკვებად და სარჩოდ გამოდგებოდა. მერე ქართველმა ეს ყველაფერი საკუთარ სამზარეულოსა და გემოვნებას მოარგო და გაჩნდა ახალ-ახალი რეცეპტები, რომლებიც კუთხიდან კუთხეში ვრცელდებოდა. \n\n საქართველო  ვაზის, ხორბლის, თაფლის სამშობლოდ აღიარეს. ქვევრში ღვინის დაყენებას რვა ათასი წლის ისტორია აქვს და 2013 წელს მას იუნესკოს (UNESCO) არამატერიალური კულტურული მემკვიდრეობის ძეგლის სტატუსი მიანიჭეს. ყურძნის ნატურალური წვენით, ხორბლის ფქვილითა და ნიგვზით დამზადებული კახური ჩურჩხელა მსოფლიო ტკბილეულთა ათეულში მოხვდა.",
      en: "‘The Georgian man created the legend of Amirani and built Uplistsikhe, developed various grape varieties and wrote *The Knight in the Panther’s Skin*, carved Vardzia into the rock and invented satsivi, constructed Svetitskhoveli and crafted sulguni. Yes, I deliberately mention side by side, at first glance, fundamentally different things like Vardzia and satsivi, Svetitskhoveli and sulguni. The creator of sulguni and satsivi was as talented in their craft as the author of *The Knight in the Panther’s Skin*. Those who prepared sulguni and satsivi preserved Georgia just as much as the victorious warriors of Didgori,’ writes publicist Akaki Bakradze. \n\n In a gastronomic culture where the table is considered a fusion of cuisine, customs, and rituals, the creative spirit and inclinations of a nation are vividly displayed, just as in painting, sculpture, or music. Thus, gastronomy can create an impression of an entire ethos. \n\n Over centuries, Georgia’s botanical map has been enriched, and Georgian farmers embraced everything new on their land. This is how various crops were introduced from abroad and became established: beans, corn, rice, tomatoes, eggplants—anything that could be used as food. Georgians then adapted these to their cuisine and tastes, creating new recipes that spread from region to region. \n\n Georgia has been recognized as the homeland of vines, wheat, and honey. Winemaking in qvevri has an 8,000-year history and was granted UNESCO Intangible Cultural Heritage status in 2013. Kakhetian churchkhela, made with natural grape juice, wheat flour, and walnuts, ranks among the world’s top sweets.",
    },
    anotherDescription: { ka: "", en: "" },
    imageSrc: "/why-georgia/georgian-wheat-varieties-2.webp",
    alt: { ka: "მთები", en: "Mountains" },
  },
  {
    title: {
      ka: "რისი გემო აქვს საქართველოს?",
      en: "What Does Georgia Taste Like?",
    },
    description: {
      ka: "მაინც, რა არის ის, რაც ქართულ სამზარეულოს გამოარჩევს და თავს დაგამახსოვრებს? რატომ ქართული კულინარია?  რისი გემო აქვს საქართველოს?\n\n გაზაფხულზე, როცა ბაღ-ბოსტნები, ტყეები და მინდვრები სიმწვანით შეიმოსება, სამზარეულოებში გაჩნდება მინდვრის ფხალი - ჭინჭარი, ნაცარქათამა, დანდური, ონჭო, კეჟერა, ღანძილი, ეკალა. მისი მომზადების მრავალნაირი წესი არსებობს - ზეთით, ნიგვზით ან, უბრალოდ, მწვანილით, მარილითა და ძმრით შენელებული, ფხალეულის წვნიანი და მწნილი.",
      en: "What is it that distinguishes Georgian cuisine and makes it unforgettable? Why Georgian cuisine? What does Georgia taste like? \n\n In spring, when gardens, forests, and fields are cloaked in greenery, kitchens come alive with meadow pkhali—nettle, goosefoot, purslane, amaranth, orach, tarragon, and briar. There are many ways to prepare it: with oil, walnuts, or simply seasoned with herbs, salt, and vinegar, as well as pkhali soups and pickles.",
    },
    imageSrc: "/why-georgia/meadow-pkhali-gnta.webp",
    alt: { ka: "მდინარე", en: "River" },
  },
  {
    title: {
      ka: "ქართული სამზარეულო ნამდვილი სამოთხეა ვეგეტარიანელებისა და ვეგანებისთვის",
      en: "Georgian Cuisine: A True Paradise for Vegetarians and Vegans",
    },
    description: {
      ka: "ზაფხულს მოჰყვება გამორჩეულად გემრიელი ბოსტნეული და ხილი, ახალი ბადრიჯანი ნიგვზით ქართული სუფრის მშვენებაა და ის წლის ყველა სეზონზე მზადდება. ზაფხულის ბოლოდან ვერ ნახავ ოჯახს, სადაც ზამთრისათვის საწებლები არ მზადდებოდეს - ტყემალი, აჯიკა, პომიდვრის საწებელი. ამ დროს განსაკუთრებულ სურნელს აფრქვევს სანელებლები: ომბალო, ცერეცო, რეჰანი და ქართული კულინარიის მთავარი გემო - აყვავებული ქინძი, რომელიც ერთნაირად უხდება ხორციან და ბოსტნეულის კერძებს. \n\n შემოდგომაზე მთელ ქვეყანას მოედება ბადაგის სურნელი. აქ ათეულობით ჯიშის ვაზი ხარობს, ის ამ ქვეყნის იდენტობის ნაწილია, ამიტომ გამორჩეული პატივისცემით ეპყრობიან. წელიწადის ამ დროს თათარაობა და ჩურჩხელების ამოვლება ქართული ოჯახების ერთ-ერთი ყველაზე საყვარელი ტრადიცია და ნამდვილი დღესასწაულია.",
      en: "Summer brings exceptionally delicious vegetables and fruits; fresh eggplant with walnuts is a jewel of the Georgian table, prepared year-round. By late summer, you won’t find a household not preparing sauces for winter—tkemali, ajika, tomato sauce. This is when spices like pennyroyal, marigold, basil, and the star of Georgian cuisine, flowering coriander, release their distinctive aromas, complementing both meat and vegetable dishes equally well. \n\n In autumn, the scent of badagi (grape juice) fills the country. With dozens of grape varieties thriving here, the vine is part of Georgia’s identity and treated with great respect. At this time of year, making tatar (grape pudding) and churchkhela is one of the most beloved traditions and a true celebration for Georgian families.",
    },
    imageSrc: "/why-georgia/eggplant-with-hazelnuts-gnta.webp",
    alt: { ka: "ტბა", en: "Lake" },
  },
  {
    title: {
      ka: "აზიური? არა - ჭეშმარიტად ქართული!",
      en: "Asian? No—Truly Georgian!",
    },
    description: {
      ka: "არსებობს მოსაზრება, რომ ქართულ სამზარეულოში ბევრი აზიური კერძია, თუმცა საქმე სხვაგვარადაა. აბრეშუმის გზაზე მდებარე მთავარი ქვეყანა - საქართველო, რომელიც აზიასა და ევროპას ერთმანეთთან აკავშირებს, იღებდა და თავის ყაიდაზე აქცევდა სხვადასხვა კონტინენტის სამზარეულოს ნიმუშებს. \n\n ქაბაბი, ხინკალი, ტოლმა, ჩიხირთმა, ბოზბაში, ყალია, ხაში, ყაურმა - ეს კერძები საქართველოში ისე მზადდება, სხვა გასტრონომიის კუთვნილებად მისი მოხსენიება მართებულად არ მოგეჩვენება. \n\n პარალელურად არსებობს: საცივი, შქმერული, ჩახოხბილი, კუჭმაჭი, ნიგვზიანი  ხარჩო, ბაჟე და კიდევ არაერთი კერძი, რომლებსაც მხოლოდ და მხოლოდ ქართული ფესვები აქვს. \n\n საქართველო საინტერესოა იმითაც, რომ ამ პატარა ქვეყანაში ყველა კუთხეს თავისი დამახასიათებელი სამზარეულო წარმოაჩენს. მაგალითად, მხოლოდ ქართლში მზადდება შეჭამანდები - მაწვნის, დოს, შინდის, ღოლოს; სვანეთში - უნიკალური ყველი ნარჩვი, საოცარი კუბდარი და თაშმიჯაბი; სამეგრელოში - საუკეთესო ელარჯი და გებჟალია; გურიაში - საცივი, კუპატი; იმერეთში - ვარია ისრიმ-მაყვალში და ათასნაირი ფხალეული; აჯაფსანდალი ნამდვილი ქალაქური, თბილისური კერძია; მწვადი ყველგან იწვება, მაგრამ განთქმული მაინც კახური მწვადია; მთიანეთში უნიკალური დამბალხაჭოა; მესხეთ-ჯავახეთში - აპოხტის ხინკალი, ბაქმაზი; აფხაზეთში - უნიკალური აჯიკა და აფხაზურა; სამაჩაბლოში - ხაბიზგინები და მხლოვანები, აჭარაში - ყურუთი და ბორანო…",
      en: "There’s a notion that Georgian cuisine includes many Asian dishes, but the reality is different. As a key country on the Silk Road, connecting Asia and Europe, Georgia absorbed and adapted culinary samples from various continents. \n\n Kebabs, khinkali, tolma, chikhirtma, bozbashi, qalia, khashi, qaurma—these dishes are prepared in Georgia in such a way that claiming them for another cuisine wouldn’t seem right. \n\n Alongside these, there are satsivi, shkmeruli, chakokhbili, kuchmachi, walnut kharcho, bazhe, and many other dishes with exclusively Georgian roots. \n\n Georgia is also fascinating because, in this small country, each region showcases its distinctive cuisine. For example, only in Kartli are shechamandi soups made—sour milk, dogwood, gooseberry, or ghozi; in Svaneti, the unique narchvi cheese, amazing kubdari, and tashmijabi; in Samegrelo, the best elarji and gebzhalia; in Guria, satsivi and kupati; in Imereti, varia with isrimi-makvali and countless pkhali varieties; ajapsandali is a true urban, Tbilisian dish; mtsvadi is grilled everywhere, but Kakhetian mtsvadi is the most famous; in the mountains, there’s unique dambalkhacho; in Meskheti-Javakheti, apokhti khinkali and bakmazi; in Abkhazia, unique ajika and apkhazura; in Samachablo, khabizgina and mkhlovana; in Adjara, quruti and borano…",
    },
    imageSrc:
      "/why-georgia/a-vegetarian-guide-to-georgian-food-qartuli-kerdzebis-vegetarianuli-gzamkvlevi-skhvadaskhva-khinkali.webp",
    alt: { ka: "ტბა", en: "Lake" },
  },
  {
    title: { ka: "და მაინც - რატომ საქართველო?", en: "And Yet—Why Georgia?" },
    description: {
      ka: "საქართველოში არ არის კუთხე, სადაც სუფრაზე თავმოსაწონი და სამასპინძლო არ ჰქონდეთ. აქ ბევრი გემოა და ბევრი გასტრონომიული სიამოვნება, თუმცა მთავარი მაინც ხაჭაპურია - ქართული სამზარეულოს გვირგვინი. \n\n ხაჭაპური - ესაა ყველის გულსართიანი ცომეული და დღემდე მისი მრავალი სახეობა არსებობს.  ყველა კუთხეს საკუთარი ხაჭაპური აქვს, საოცრება - მესხური ფენოვანი „ჩალმა ხაჭაპური“, უკვე ძალიან პოპულარული - აჭარული ნავის ფორმის ხაჭაპური; მაგრამ ყველაზე გავრცელებული იმერული ხაჭაპურია - მრგვალი ფორმის, თხელ ცომში გახვეული ყველი, რომელიც უგემრიელეს ძაფებად იწელება.  \n\n სტუმარმასპინძლობით განთქმულ, ტრადიციულ და მდიდარ ქართულ სამზარეულოს ყველაზე ძალიან გული და გულის მისართმევი უხდება, ამიტომაც  შეიძლება ითქვას, რომ საქართველოს ხაჭაპურის გემო აქვს. \n\n ეს არის გემო, რომელიც აუცილებლად უნდა გასინჯო.",
      en: "There’s no corner of Georgia where the table isn’t adorned with delightful and hospitable dishes. The country offers many flavors and gastronomic pleasures, but the crown jewel is khachapuri—the pinnacle of Georgian cuisine. \n\n Khachapuri is a cheese-filled pastry with many varieties to this day. Each region has its own khachapuri: the remarkable Meskhuri layered ‘chalma khachapuri,’ the already very popular Adjarian boat-shaped khachapuri; but the most widespread is Imeretian khachapuri—round, with cheese wrapped in thin dough, stretching into delicious strings. \n\n Known for its hospitality, traditional and rich Georgian cuisine is best suited to warm hearts and welcoming gestures, so it can be said that Georgia tastes like khachapuri. \n\n This is a flavor you absolutely must try.",
    },
    imageSrc: "/why-georgia/acharuli-khachapuri-gnta.webp",
    alt: { ka: "ტბა", en: "Lake" },
  },
];

export const sections10: Section[] = [
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
      en: "Georgia is located at the crossroads of Europe and Asia, in the Caucasus, on the Black Sea coast. For centuries, it has served as a bridge between civilizations, and it was here that the ‘Silk Road’ passed—the world’s largest trade artery.",
    },
    buttonText: { ka: "გაიგე მეტი", en: "Learn More" },
    geographyOfGeorgia: [
      {
        image: "/why-georgia/why-georgia-delicious-cuisine.webp",
        title: {
          ka: "უგემრიელესი ქართული სამზარეულო",
          en: "Delicious Georgian Cuisine",
        },
        description: {
          ka: "საქართველო ძირძველ მიწაზე მდებარეობს და ამ ხნის ცივილიზაციები უკვე ძალიან ცოტაღა შემორჩა. თითქმის ყოველწლიურად არქეოლოგიური გათხრებისას ნაპოვნი არტეფაქტები, მათ შორის, მრავალფეროვანი სამზარეულო ჭურჭელი და სამეურნეო ნივთები, ადასტურებს, რომ ამ ქვეყანაში ოდითგან არსებობდა გამორჩეული გასტრონომიული კულტურა.",
          en: "Georgia is situated on ancient land, with few civilizations of its age remaining. Artifacts found almost annually during archaeological excavations, including diverse kitchen utensils and household items, confirm that this country has long had a distinctive gastronomic culture.",
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
        image: "/flags/bla2.webp",
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
          en: "Georgian wine is 8,000 years old—at that time, Georgians already knew the unique qvevri technology, which today has become one of the world’s leading methods. Do you know what these numbers mean? If you’re interested, let’s take the wine route…",
        },
      },
    ],
  },
];

// ----------------------------------------- start 11

export const sidebarItems11: { ka: string; en: string }[] = [
  { ka: "ღვთისგან ნაბოძები მიწა", en: "God-Given Land" },
  { ka: "ტბები, მდინარეები, სხვა", en: "Lakes, Rivers, and More" },
  { ka: "ტყეები, ჭაობები და სხვა", en: "Forests, Marshes, and More" },
  { ka: "წყლები და კლიმატი", en: "Waters and Climate" },
];

export const contentItems11: ContentItem[] = [
  {
    title: { ka: "ღვთისგან ნაბოძები მიწა", en: "God-Given Land" },
    description: {
      ka: "არსებობს ასეთი ლეგენდა: ღმერთი ადამიანებს მიწას რომ უნაწილებდა, ყველაზე ბოლოს ქართველები მისულან და თავი უმართლებიათ, - შენს სადიდებელს ვამბობდით, ლხინსა და პურობას შევყევით, ამიტომ დაგვაგვიანდაო. ღმერთს სათავისოდ გადანახული ზღაპრული მიწა მათთვის დაუთმია. ვინც საქართველოს გაიცნობს, დარწმუნდება, რომ ეს ლეგენდა ძალიან უსაფუძვლოც არ არის. \n\n საქართველო მართლაც ჯადოსნური ადგილია - მთაში შეგიძლია ისრიალო, მერე თხილამურები მოიხსნა და 40 წუთში ზღვის ტალღებში იბანაო. დაგეგმო მარშრუტი და მთაში თოვლზეც იარო, თავსხმაშიც მოყვე და, მერე მზისგან შეწუხებულმა ტანისამოსი გაიძრო და გაირუჯო.",
      en: "There is a legend: when God was distributing land to people, Georgians arrived last and excused themselves, saying, ‘We were singing your praises and celebrating with feasts, so we were delayed.’ God gave them the fairy-tale land He had reserved for Himself. Anyone who discovers Georgia will be convinced that this legend isn’t entirely baseless. \n\n Georgia is truly a magical place—you can ski in the mountains, then take off your skis and swim in the sea waves within 40 minutes. Plan a route to hike in the snow, get caught in the rain, and then, warmed by the sun, shed your clothes and get a tan.",
    },
    anotherDescription: { ka: "", en: "" },
    imageSrc: "",
    alt: { ka: "მთები", en: "Mountains" },
  },
  {
    title: { ka: "ტბები, მდინარეები, სხვა", en: "Lakes, Rivers, and More" },
    description: {
      ka: "ამ პატარა ქვეყანაში 26,060 დიდი და პატარა მდინარეა, 860 ტბა, 55 ჩანჩქერი, 44 წყალსაცავი.  საქართველო მდიდარია მიწისქვეშა სამყაროთი  - მღვიმეებითა და გამოქვაბულებით, რაც სპელეოლოგების ინტერესს იწვევს. \n\n დღეისათვის საქართველოში აღმოჩენილია 28 მღვიმე-გამოქვაბული. უნიკალური სანახაობაა წყალტუბოსთან მდებარე პრომეთეს მღვიმე, სადაც ნამდვილი პრეისტორიული ხანის ნაწილი ხდები. სათაფლიის გამოქვაბული კი მსოფლიოში ერთადერთია, სადაც ერთსა და იმავე ადგილზე აღბეჭდილია როგორც ბალახისმჭამელი, ისე მტაცებელი დინოზავრების ნაკვალევი, რომელიც 120 მილიონ წელს ითვლის.  \n\n საქართველოს ოკუპირებულ ტერიტორიაზე, აფხაზეთში, ახალ ათონში, არის ბუნების უნიკალური ძეგლი - ახალი ათონის მღვიმე, რომელიც უგრძესია მსოფლიოს მღვიმურ სისტემათა შორის. ის წარმოქმნილია მეზოზოური ასაკის კირქვაში და რამდენიმე დარბაზისგან შედგება.",
      en: "This small country boasts 26,060 large and small rivers, 860 lakes, 55 waterfalls, and 44 reservoirs. Georgia is rich in its subterranean world—caves and caverns that spark the interest of speleologists. \n\n To date, 28 caves have been discovered in Georgia. The Prometheus Cave near Tskhaltubo is a unique spectacle, transporting you to a prehistoric era. The Sataplia Cave is the only place in the world where both herbivorous and predatory dinosaur footprints, dating back 120 million years, are preserved in one location. \n\n On Georgia’s occupied territory in Abkhazia, in New Athos, lies a unique natural monument—the New Athos Cave, one of the longest cave systems in the world. Formed in Mesozoic limestone, it consists of several chambers.",
    },
    imageSrc: "/why-georgia/shaori-lake-gnta.webp",
    alt: { ka: "მდინარე", en: "River" },
  },
  {
    title: { ka: "ტყეები, ჭაობები და სხვა", en: "Forests, Marshes, and More" },
    description: {
      ka: "საქართველოს ტერიტორიაზე მაღალი ესთეტიკის მქონე ბევრი კომპაქტური ძეგლია, რომლებსაც ბუნება საუკუნეების განმავლობაში აქანდაკებდა. საქართველოს ეკოსისტემის ნაწილია საერთაშორისო მნიშვნელობის ისპანის უნიკალური ჭაობი ქობულეთთან, რომელიც  ჩვენს ერამდე IV-III საუკუნეებით თარიღდება, ის ერთადერთი მფილტრავი, ყველაზე ხელუხლებელი ჭაობია მსოფლიოში და დღემდე მრავალი მეცნიერისა და ვიზიტორის ყურადღებას იქცევს. \n\n საქართველოს ბუნება განთქმულია გეოგრაფიული და ბიოლოგიური მრავალფეროვნებით. მთების გარდა, შეგიძლია ნახო ყველა ტიპის ტყე, ასევე ფლორისა და ფაუნის ათასობით ადგილობრივი სახეობა. \n\n საქართველოს ბუნება მდიდარი და მრავალფეროვანია ცხოველებით. აქ გავრცელებულია კავკასიური ირემი, შველი, გარეული ღორი, კურდღელი, ციყვი; მტაცებლები: მურა დათვი, მგელი, მაჩვი, ფოცხვერი, გარეული კატა და მელია. მაღალმთიანი ფაუნა დაცულია დიდი კავკასიონის მთებში. საქართველოში გავრცელებული მრავალი სახეობის ცხოველი იშვიათია გლობალური მასშტაბით და შეტანილია ბუნების დაცვის მსოფლიო კავშირის (IUCN) წითელ ნუსხაში.",
      en: "Georgia’s territory is home to many compact, aesthetically striking monuments sculpted by nature over centuries. Part of Georgia’s ecosystem is the internationally significant Ispani Marsh near Kobuleti, dating back to the 4th–3rd centuries BCE. It is the world’s only filtering, most pristine marsh, attracting the attention of scientists and visitors alike. \n\n Georgia’s nature is renowned for its geographical and biological diversity. Beyond mountains, you can find every type of forest and thousands of local flora and fauna species. \n\n Georgia’s nature is rich and varied with wildlife, including Caucasian deer, roe deer, wild boar, hare, and squirrel; predators such as brown bear, wolf, jackal, lynx, wild cat, and fox. High-mountain fauna is protected in the Greater Caucasus Mountains. Many animal species in Georgia are globally rare and listed in the International Union for Conservation of Nature (IUCN) Red List.",
    },
    imageSrc:
      "/why-georgia/alazani-floodplain-forests-natural-monument-gnta.webp",
    alt: { ka: "ტბა", en: "Lake" },
  },
  {
    title: { ka: "წყლები და კლიმატი", en: "Waters and Climate" },
    description: {
      ka: "საქართველოში 2 ათასზე მეტი მინერალური და თერმული წყაროა, ისევე როგორც თერაპიული ტალახის საბადოები. ბევრი მათგანი პოპულარულ ბალნეოლოგიურ კურორტებთან ახლოსაა. \n\n მიუხედავად ტერიტორიის სიმცირისა, საქართველოში გავრცელებულია დედამიწის ზედაპირზე არსებული ჰავის თითქმის ყველა ტიპი, დაწყებული დასავლეთ საქართველოს შავიზღვისპირა თბილი ნოტიო სუბტროპიკულით, გაგრძელებული აღმოსავლეთ საქართველოს ველების მშრალი კონტინენტურით და დამთავრებული კავკასიონის მარადიული თოვლისა და მყინვარის ზონის  ჰავით. \n\n საქართველო ზომიერი კლიმატის ქვეყნებს შორის ერთ-ერთი უმდიდრესია ფლორისტული თვალსაზრისითაც. აქაური ფლორის შემადგენლობაში მცენარეთა 4 100-ზე მეტი სახეობაა (მთელ კავკასიაში 6 350-ამდე სახეობაა აღწერილი). დაახლოებით 21%, ანუ 900-მდე სახეობა ენდემურია (600 - კავკასიის, 300 - საქართველოს ენდემი). მაღალია საქართველოს ფლორის გვარობრივი ენდემიზმიც. აქ 16 ენდემური და სუბენდემური გვარია წარმოდგენილი. ცალკე აღნიშვნის ღირსია გოდერძის ნამარხი ტყე - აჭარაში მდებარე ბუნების უნიკალური ძეგლი.  \n\n საქართველო კულტურულ მცენარეთა წარმოშობისა და მრავალფეროვნების ერთ-ერთი ცენტრია. აქ ჩამოყალიბდა ვაზის, მარცვლოვნების, ხეხილისა და სხვა მრავალი შესანიშნავი ჯიში. ამრიგად, საქართველოს უნიკალური ფიტოგენოფონდი ქვეყნის ბუნებრივ-კულტურული მემკვიდრეობის „ცოცხალი ძეგლია“, რომლის შესწავლას, დაცვასა და აღდგენას საკაცობრიო მნიშვნელობა აქვს.",
      en: "Georgia has over 2,000 mineral and thermal springs, as well as therapeutic mud deposits, many located near popular balneological resorts. \n\n Despite its small territory, Georgia hosts nearly every type of climate found on Earth’s surface, from the warm, humid subtropical climate of Western Georgia’s Black Sea coast to the dry continental climate of Eastern Georgia’s plains, and the eternal snow and glacier zones of the Caucasus. \n\n Georgia is among the richest temperate climate countries in terms of flora. Its flora includes over 4,100 plant species (with around 6,350 described in the entire Caucasus). Approximately 21%, or about 900 species, are endemic (600 to the Caucasus, 300 to Georgia). Georgia’s flora also has high generic endemism, with 16 endemic and sub-endemic genera. The Goderdzi Fossil Forest in Adjara is a unique natural monument worth noting. \n\n Georgia is a center for the origin and diversity of cultivated plants, with exceptional varieties of vines, grains, fruits, and more. Thus, Georgia’s unique phytogenetic fund is a ‘living monument’ of its natural-cultural heritage, with global significance for study, protection, and restoration.",
    },
    imageSrc: "/why-georgia/abasha-waterfall-gnta.webp",
    alt: { ka: "ტბა", en: "Lake" },
  },
];

export const sections11: Section[] = [
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
      en: "Georgia is located at the crossroads of Europe and Asia, in the Caucasus, on the Black Sea coast. For centuries, it has served as a bridge between civilizations, and it was here that the ‘Silk Road’ passed—the world’s largest trade artery.",
    },
    buttonText: { ka: "გაიგე მეტი", en: "Learn More" },
    geographyOfGeorgia: [
      {
        image: "/why-georgia/why-georgia-nature.webp",
        title: { ka: "საქართველოს ბუნება", en: "Nature of Georgia" },
        description: {
          ka: "ჩრდილოეთით - აზიდული დიდი კავკასიონი, დასავლეთით - შემორკალული შავი ზღვა, სამხრეთით - მცირე კავკასიონის მთები, აღმოსავლეთით - გაშლილი ველ-მინდვრები, მდინარეები, ჩანჩქერები, ულამაზესი ხეობები, მწვერვალები, წყაროები, ტბები და წყალსაცავები, ნაკადულები, ტყეები, მღვიმეები და გამოქვაბულები, ყაყაჩოებით, გვირილებით, სოსანებითა და ალპური ყვავილებით სავსე მდელოები - ეს საქართველოა, ერთ-ერთი ულამაზესი და უძველესი ქვეყანა დედამიწაზე.",
          en: "To the north—the towering Greater Caucasus; to the west—the sheltered Black Sea; to the south—the Lesser Caucasus Mountains; to the east—sprawling plains, rivers, waterfalls, stunning valleys, peaks, springs, lakes, and reservoirs, streams, forests, caves, and caverns, meadows filled with poppies, daisies, lilies, and alpine flowers—this is Georgia, one of the most beautiful and ancient countries on Earth.",
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
        image: "/flags/bla2.webp",
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
          en: "Georgian wine is 8,000 years old—at that time, Georgians already knew the unique qvevri technology, which today has become one of the world’s leading methods. Do you know what these numbers mean? If you’re interested, let’s take the wine route…",
        },
      },
    ],
  },
];

// ------------------------------------------- start 12

export const sidebarItems12: { ka: string; en: string }[] = [
  { ka: "თბილისი", en: "Tbilisi" },
  { ka: "ბათუმი", en: "Batumi" },
  { ka: "ქუთაისი", en: "Kutaisi" },
  { ka: "ყაზბეგი/სტეფანწმინდა", en: "Kazbegi/Stepantsminda" },
  { ka: "მესტია", en: "Mestia" },
  { ka: "თელავი", en: "Telavi" },
  { ka: "და მაინც, რატომ საქართველო?", en: "And Yet, Why Georgia?" },
];

export const contentItems12: ContentItem[] = [
  {
    title: { ka: "თბილისი", en: "Tbilisi" },
    description: {
      ka: "ალექსანდრე დიუმა ამბობდა, თბილისი ლეგენდებისა და რომანტიკის ქალაქიაო. თბილისის დაარსების ლეგენდა მოგიყვება, V საუკუნეში როგორ დაედევნა დაჭრილ ხოხობს სანადიროდ გამოსული მეფე ვახტანგ გორგასლის მიმინო, როგორ იპოვეს დახოცილი ფრინველები გოგირდის ცხელ წყალში და როგორ ბრძანა მეფემ ამ ადგილზე ქალაქის, სახელად თბილისის, დაარსება. ეს თბილისის ქალაქად ქცევის ამბავია, თორემ ადამიანის ცხოვრება აქ სათავეს ძვ.წ. IV-III ათასწლეულიდან იღებს. \n\n გოგირდის ის ცხელი წყლები ახლა თბილისის განთქმულ გოგირდის აბანოებშია მოქცეული და ქალაქის უძველეს, აბანოთუბანს და ორთაჭალას, თუნდაც მათ მოსანახულებლად უნდა ეწვიო. ჭრელი აბანოები თბილისური ეგზოტიკის შეგრძნების საუცხოო შესაძლებლობაა, რომ აღარაფერი ვთქვათ გასაოცარ ეფექტზე, რომელსაც ის შენს ჯანმრთელობაზე მოახდენს. \n\n ძველი თბილისი ბევრი თვალსაზრისით გამორჩეული უბანია. აქ ერთ ქუჩაზე ნახავ რამდენიმე კონფესიის სალოცავს - მართლმადიდებლურ ტაძარს, მეჩეთსა და სინაგოგას. ეს თბილისის მრავალეთნიკური ისტორიის სურათია - იმ ადამიანური სიყვარულის, რომელსაც ქართველები სხვა ერების მიმართ იჩენდნენ და იჩენენ. თბილისის ძველ უბნებში ასეთი თანაცხოვრების კიდევ არაერთ მაგალითს წააწყდები. \n\n ევროპის ვერცერთ ქვეყანაში ვერ ნახავ ქართული, რომაული, არაბული, სპარსული, თურქული, ებრაული და სხვა არქიტექტურის ისეთ ბუნებრივ შერწყმას, როგორსაც თბილისში. ეს სურათი სრული სისავსით რომ აღიქვა, ქალაქს ნარიყალას ან მეტეხის სიმაღლიდან უნდა გადმოხედო. მდინარე მტკვრის სანაპიროზე გაშენებულ ამ არქიტექტურულ ჰარმონიაში უამრავ ისტორიულ ძეგლსა და თანამედროვე შენობას აღმოაჩენ - ბრინჯაოს ხანის ნამოსახლარებს, შუა საუკუნეების ტაძრებს, მრავალჯერ ბრძოლაგადატანილ ციხესიმაგრეებს, მოჩუქურთმებულ, ვიტრაჟულ თბილისურ ეზოებს და ა.შ. \n\n უფრო თანამედროვე თბილისი რუსთაველის გამზირიდან იწყება, სადაც XIX-XX საუკუნეების დახვეწილ, ევროპულ არქიტექტურას ნახავ. აქვეა მუზეუმები, სავაჭრო ცენტრები თუ უმაღლესი დონის სასტუმროები თავისი რესტორნებითა და კაფე-ბარებით, სადაც ქართული გასტრონომიის შედევრებს უნიკალურ ქართულ ღვინოებთან ერთად დააგემოვნებ. ქართული სამზარეულოსთვის გემოს გასინჯვას ქალაქის, ფაქტობრივად, ყველა უბანში შეძლებ, თუმცა თითქმის დარწმუნებით შემიძლია გითხრა, რომ რომელიმე ქართველის ოჯახში გაშლილ სუფრასაც აუცილებლად მიუჯდები და, ქართული კერძების გარდა, თამადის ქართულ ინსტიტუტსაც გაუგებ გემოს.   \n\n თბილისში მოგზაურობისას არ დაგავიწყდეს მტკვარზე ტივით გასეირნება, ბოტანიკური ბაღისა და ლეღვთახევის ჩანჩქერების, კუსა და ლისის ტბების მონახულება და, რაც მთავარია, ფუნიკულიორზე ასვლა - არა მხოლოდ ატრაქციონებისთვის, არამედ იმისთვისაც, რომ მისი სიმაღლიდან თბილისი ხელისგულზე გადაშლილს ჰგავს.",
      en: "Alexandre Dumas said, ‘Tbilisi is a city of legends and romance.’ The legend of Tbilisi’s founding tells how, in the 5th century, King Vakhtang Gorgasali’s falcon chased a wounded pheasant, only to find both birds dead in hot sulfur springs. The king ordered a city, named Tbilisi, to be founded on that spot. This is the story of Tbilisi’s transformation into a city, though human life here dates back to the 4th–3rd millennium BCE. \n\n Those hot sulfur springs are now housed in Tbilisi’s famous sulfur baths in the ancient districts of Abanotubani and Ortachala, worth visiting for this alone. The colorful baths offer a unique chance to experience Tbilisi’s exotic charm, not to mention their remarkable health benefits. \n\n Old Tbilisi is exceptional in many ways. On a single street, you’ll find places of worship from multiple faiths—an Orthodox church, a mosque, and a synagogue. This reflects Tbilisi’s multiethnic history, showcasing the love Georgians have shown, and continue to show, toward other peoples. You’ll encounter many such examples of coexistence in Tbilisi’s old quarters. \n\n Nowhere else in Europe will you find such a natural blend of Georgian, Roman, Arabic, Persian, Turkish, Jewish, and other architectural styles as in Tbilisi. To fully appreciate this harmony, view the city from the heights of Narikala or Metekhi. Along the Mtkvari River, you’ll discover countless historical monuments and modern buildings—Bronze Age settlements, medieval churches, battle-scarred fortresses, intricately carved Tbilisi courtyards with stained-glass windows, and more. \n\n Modern Tbilisi begins on Rustaveli Avenue, where you’ll see refined 19th–20th-century European architecture. Here, you’ll find museums, shopping centers, and top-tier hotels with restaurants and café-bars, where you can savor Georgian culinary masterpieces paired with unique Georgian wines. You can taste Georgian cuisine in nearly every district, but I can almost guarantee you’ll also sit at a Georgian family’s table, experiencing not only their dishes but also the Georgian tradition of the tamada (toastmaster). \n\n While exploring Tbilisi, don’t miss a boat ride on the Mtkvari, visits to the Botanical Garden, Leghvtakhevi waterfalls, Kus Tba, and Lisi Lake, and, most importantly, a ride on the funicular—not just for the attractions but because from its heights, Tbilisi looks like it’s spread out in the palm of your hand.",
    },
    anotherDescription: {
      ka: "ქვეყანა, რომელიც დღემდე აღმოსავლეთისა და დასავლეთის კარიბჭედაა მიჩნეული? რომელიც ხორბლისა და ღვინის სამშობლოდ ითვლება? რომლის ფოლკლორმა კოსმოსს მიაღწია, მისი ლეგენდები კი საფუძვლად დაედო ბერძნულ მითოლოგიას? ეს საქართველოა - ქვეყანა, რომელსაც ერთხელ ნახავ და ვეღარასდროს დაივიწყებ.",
      en: "A country still considered the gateway between East and West? The birthplace of wheat and wine? Whose folklore reached the cosmos and whose legends laid the foundation for Greek mythology? This is Georgia—a country you’ll see once and never forget.",
    },
    imageSrc: "/why-georgia/tbilisi-gnta.webp",
    alt: { ka: "მთები", en: "Mountains" },
  },
  {
    title: { ka: "ბათუმი", en: "Batumi" },
    description: {
      ka: "ბათუმს ამერიკის სტუმარმასპინძლობის მეცნიერების აკადემიისგან წლის საუკეთესო ტურისტული დანიშნულების ადგილის წოდებაც აქვს მიღებული და Forbes-ისგან - ადგილი „ხავერდოვან სეზონზე“ დასასვენებელი ქალაქების საუკეთესო ხუთეულში. მისი, როგორც დასვენებისთვის ერთ-ერთი საუკეთესო ქალაქის, ჯილდოები წლიდან წლამდე იმატებს, თუმცა ეს სულაც არ ნიშნავს იმას, რომ ბათუმში მხოლოდ ზღვის სეზონზე უნდა ჩახვიდე. \n\n ეს არის ქალაქი, რომელსაც დასასვენებლადაც შეგიძლია ესტუმრო და საქმიანადაც - ბათუმის მაღალი კლასის სასტუმროები, საკონფერენციო დარბაზები და ევროპული სტანდარტების მომსახურება აქ ნებისმიერი საერთაშორისო ღონისძიების გამართვის შესაძლებლობას იძლევა. ბათუმი ყველა სეზონზე ლამაზია - მის მოკირწყლულ ქუჩებს წვიმის შხაპუნიც უხდება და გაშლილი ქოლგების ფერადოვნებაც, მაგნოლიების მათრობელა სურნელიც და ქვიშაზე მოდუღებული განთქმული ბათუმური ყავის ოხშივარიც.   \n\n უმი საუკეთესო ადგილია პაემნებისთვის. სად უნდა შეხვდეთ? მაგალითად, „ალისა და ნინოს“ ქანდაკებასთან - მარადიული სიყვარულის გამომსახველ საოცარ სკულპტურასთან. თუ შეხვედრა თავგადასავლად გინდა აქციო, ის „სალამურიან ბიჭუნასთან“ დანიშნე. ძველ ბათუმში, პიაცასთან, ისტორიული შენობის აგურის ნიშაში მოკალათებული ამ ქანდაკების პოვნა ნამდვილად არცერთს არ დაგავიწყდებათ.  \n\n ბათუმში გასართობსა და სანახავს რა გამოლევს? შავი ზღვის ეს მარგალიტი თავისი უძველესი პორტით, ძველი თუ ახალი არქიტექტურით, ევროპული მოედნებითა და მყუდრო ბათუმური ეზოებით, მუზეუმებითა და თეატრებით, ფესტივალებითა და კონცერტებით, სამზარეულოთი, რომლის ნიმუში - ნავის ფორმის ხაჭაპური უკვე ლამის მთელმა მსოფლიომ იცის, საქართველოს ერთ-ერთი მთავარი კულტურული ცენტრია",
      en: "Batumi has been named the year’s best tourist destination by the American Academy of Hospitality Sciences and ranked among the top five cities for a ‘velvet season’ vacation by Forbes. Its accolades as a top leisure destination grow yearly, but this doesn’t mean you should only visit Batumi during the sea season. \n\n This is a city you can visit for both leisure and business—Batumi’s high-class hotels, conference halls, and European-standard services make it ideal for hosting international events. Batumi is beautiful in every season—its paved streets are enhanced by the patter of rain, the vibrancy of open umbrellas, the intoxicating scent of magnolias, and the aroma of famous Batumi coffee brewed on the sand. \n\n It’s a perfect place for dates. Where should you meet? At the ‘Ali and Nino’ sculpture, an amazing representation of eternal love. For an adventurous rendezvous, meet at the ‘Boy with a Pipe’ statue. Finding this sculpture, tucked in a brick niche of a historic building near Piazza in old Batumi, is an experience neither of you will forget. \n\n What does Batumi offer for entertainment and sights? This Black Sea pearl, with its ancient port, old and new architecture, European squares, cozy Batumi courtyards, museums, theaters, festivals, concerts, and cuisine—whose boat-shaped khachapuri is known nearly worldwide—is one of Georgia’s main cultural centers.",
    },
    imageSrc: "/why-georgia/miracle-park-gnta.webp",
    alt: { ka: "მდინარე", en: "River" },
  },
  {
    title: { ka: "ქუთაისი", en: "Kutaisi" },
    description: {
      ka: "გაერთიანებული საქართველოს პირველი დედაქალაქი და ევროპის ერთ-ერთი უძველესი ქალაქი, რომლის შესახებაც ძველი ბერძნები ეპოსებს თხზავდნენ. ანტიკური ხანის ქალაქი აია, რომელსაც უკავშირდება ბერძნული მითოსი არგონავტების შესახებ და კოლხი მედეა, ვისი სახელისგანაც წარმოიშვა სიტყვა „მედიცინა“ - ეს ქუთაისია, ქალაქი, საიდანაც X საუკუნეში საქართველოს სახელმწიფოს გაერთიანება დაიწყო და სადაც ქვეყნის ერთ-ერთი ყველაზე გამორჩეული მეფე დავით აღმაშენებელი დაიბადა. \n\n ქუთაისში ჩასვლისთანავე შენიშნავ გორაზე მდგარ დიდებულ ბაგრატის ტაძარს, რომელიც საქართველოს ოქროს ხანის სიმბოლოა; ქალაქიდან რამდენიმე კილომეტრშია იუნესკოს კულტურული მემკვიდრეობის ძეგლის სტატუსის მქონე გელათის სამონასტრო კომპლექსი, თავისი უნიკალური აკადემიით; ქუთაისთანაა პრომეთესა და სათაფლიის მღვიმეები, რომელთა სტალაქტიტები და სტალაგმიტები, მიწაზე აღბეჭდილი დინოზავრის ნაკვალევი სამყაროს ასაკის ისტორიას მოგითხრობს. \n\n საქართველოს ისტორიას ქუთაისის ტაძრების ფრესკები და მოზაიკები მოგიყვება, ქალაქის განსაკუთრებულობის შესახებ კი მისი მუზეუმები, საგამოფენო დარბაზები, ისტორიული ბულვარი და შენობები გიამბობს, რადგან ესაა ქალაქი, რომელმაც უდიდესი ქართველი მწერლები, პოეტები, მეცნიერები, მსახიობები დაბადა. ამასთანავე, ეს არის საქართველოს ერთ-ერთი კოლორიტული ქალაქი კათოლიკური თუ ებრაული უბნებით, თეთრი ქვებითა და მასზე გადებული ისტორიული ხიდებით. \n\n ქუთაისში ქუჩაშიც კი მოისმენ უტკბილეს ქალაქურ სიმღერებს, აქ გულღია მასპინძელი სახელდახელოდ დაგიცხობს სასწაულ იმერული ხაჭაპურს, ვარიას ისრიმ-მაყვალში ჩაგიწყობს და მსუბუქი ღვინის თანხლებით, ცნობილი ქუთაისური იუმორით მოგიყვება ამბებს, რომლებიც მერეც კი, სახლში დაბრუნებულს, გულიან ღიმილს მოგგვრის.",
      en: "The first capital of a united Georgia and one of Europe’s oldest cities, about which ancient Greeks wrote epics. The ancient city of Aia, linked to the Greek myth of the Argonauts and Colchian Medea, from whose name the word ‘medicine’ derives—this is Kutaisi, the city where Georgia’s unification began in the 10th century and where one of the country’s most distinguished kings, David the Builder, was born. \n\n Upon arriving in Kutaisi, you’ll notice the majestic Bagrati Cathedral atop a hill, a symbol of Georgia’s Golden Age. A few kilometers away is the UNESCO World Heritage-listed Gelati Monastery Complex, with its unique academy. Near Kutaisi are the Prometheus and Sataplia caves, where stalactites, stalagmites, and dinosaur footprints etched in the ground tell the story of the world’s age. \n\n Kutaisi’s cathedral frescoes and mosaics narrate Georgia’s history, while its museums, exhibition halls, historic boulevard, and buildings speak to the city’s uniqueness—a city that gave birth to great Georgian writers, poets, scientists, and actors. It’s also one of Georgia’s most vibrant cities, with Catholic and Jewish quarters, white stones, and historic bridges. \n\n Even on the streets of Kutaisi, you’ll hear the sweetest urban songs. A warm-hearted host will bake you a miraculous Imeretian khachapuri, serve you wine in a horn or blackberry vessel, and, with famous Kutaisi humor, share stories that will bring a heartfelt smile even after you return home.",
    },
    imageSrc: "/why-georgia/kutaisi.webp",
    alt: { ka: "ტბა", en: "Lake" },
  },
  {
    title: { ka: "ყაზბეგი/სტეფანწმინდა", en: "Kazbegi/Stepantsminda" },
    description: {
      ka: "მკაცრი მთის ბუნების სილამაზისა და შუა საუკუნეების კულტურის ჰარმონიული შერწყმა - ეს არის ერთ-ერთი მთავარი ღირებულება, რომელიც ყაზბეგს საქართველოს სხვა ქალაქებისგან განასხვავებს. გრანდიოზული მთები, ჩანჩქერები, ტბები, ხეობები, მთის წვერზე აგებული შუა საუკუნეების ტაძრები, ფერდობებზე შეფენილი ნასოფლარები, ციხე-კოშკები და საოცარი ხედები, რომლებიც ყველა კუთხიდან იშლება, ანდამატივით იზიდავს ტურისტებს. \n\n წარმართული და ქრისტიანული ნაზავის დღესასწაული, სტუმარმასპინძლობის განსაკუთრებული ტრადიცია და ეგზოტიკური სამზარეულო ერთნაირად საინტერესოა როგორც ლაშქრობებისა და მთაში დასვენების მოყვარულებისთვის, ისე ნებისმიერი ტურისტისთვის. ცალკე სამყაროა ყაზბეგი საფეხმავლო ტურებისა და ზამთრის აქტივობების მოყვარულებისთვის - აქ ალპინიზმის, თხილმარისა და ბევრი სხვა სახის ტურის მოწყობაა შესაძლებელი. \n\n მაღალი კლასის სასტუმროში დაბინავებულმა შეგიძლია უცქირო გერგეტის სამებისა და მყინვარწვერის გასაოცარ ხედებს ან მცირე საოჯახო სასტუმროში მოწყობილმა იგრძნო მოხევეების ცხოვრების, ერთი შეხედვით, ასკეტური, თუმცა სითბოთი და სიყვარულით გაჯერებული ცხოვრების ხიბლი.",
      en: "The harmonious blend of rugged mountain beauty and medieval culture is a key value that sets Kazbegi apart from other Georgian cities. Grandiose mountains, waterfalls, lakes, valleys, medieval churches built on mountain peaks, villages scattered on slopes, fortress towers, and stunning views from every angle attract tourists like a magnet. \n\n A mix of pagan and Christian festivals, unique hospitality traditions, and exotic cuisine are equally fascinating for hiking and mountain leisure enthusiasts as well as any tourist. Kazbegi is a world of its own for trekking and winter activity lovers—offering opportunities for alpinism, skiing, and various other tours. \n\n Staying in a high-class hotel, you can gaze at the breathtaking views of Gergeti Trinity and Mount Kazbek, or in a small family guesthouse, experience the seemingly ascetic yet warm and love-filled lifestyle of the Mokhevi people.",
    },
    imageSrc: "/why-georgia/stepantsminda-gergeti-stepantsminda-3.webp",
    alt: { ka: "ტბა", en: "Lake" },
  },
  {
    title: { ka: "მესტია", en: "Mestia" },
    description: {
      ka: "რატომ უნდა ეწვიო მესტიას? ეს კითხვა მაშინვე გაგიქარწყლდება, როგორც კი საქართველოს ყველაზე მაღალი მწვერვალების - პირქუში შხარისა და ქათქათა თეთნულდის ძირში აღმოჩნდები. \n\n აქ არის ულამაზესი ტბები, ჩანჩქერები, მყინვარები და ორი უნიკალური ადგილი - კურორტები ჰაწვალი და თეთნულდი, სადაც შესაძლებელია: სათხილამურო ტრასებსა თუ გაუკვალავ თოვლში სრიალი, ჰელისკი, სკიტური, საცხენოსნო ტურის მოწყობა, საფეხმავლო ტურის დაგეგმვა და კიდევ არაერთი აქტივობა, როგორც ზამთრის ისე ზაფხულის დასვენებისთვის. \n\n მესტიაში დაგხვდება გასაოცარი არქიტექტურის შუა საუკუნეების კოშკები, საერო, საკულტო და თავდაცვითი ნაგებობები. აქ მოისმენ დაუვიწყარ სვანური „ლილეს“ და დააგემოვნებ ეგზოტიკურ სვანურ კერძებს, გაიცნობ საოცარ ხალხს - ირგვლივ აზიდული მთებივით მკაცრსა და ამავე დროს სიყვარულით სავსე გულის მატარებელს. \n\n ეს არის ქალაქი, რომელიც აუცილებლად უნდა ნახო.",
      en: "Why visit Mestia? That question will vanish the moment you find yourself at the foot of Georgia’s highest peaks—rugged Shkhara and dazzling Tetnuldi. \n\n Here, you’ll find stunning lakes, waterfalls, glaciers, and two unique resorts—Hatsvali and Tetnuldi—offering skiing on trails or untouched snow, heli-skiing, ski touring, horseback riding, trekking, and many other activities for both winter and summer vacations. \n\n Mestia boasts medieval towers with remarkable architecture, secular and religious buildings, and defensive structures. You’ll hear the unforgettable Svan ‘Lile’ songs, taste exotic Svan dishes, and meet extraordinary people—stern like the surrounding mountains yet full of love and warmth. \n\n This is a city you must see.",
    },
    imageSrc: "/why-georgia/mestia-gnta.webp",
    alt: { ka: "ტბა", en: "Lake" },
  },
  {
    title: { ka: "თელავი", en: "Telavi" },
    description: {
      ka: "საქართველოდან ისე არ უნდა წახვიდე, კახეთის მთავარ ქალაქს - თელავს არ ესტუმრო. თელავში მოგზაურობის თავგადასავალი გომბორის ულამაზესი გზით იწყება, რომლის ნახვაც წელიწადის ნებისმიერ დროს დაუვიწყარ შთაბეჭდილებას დაგიტოვებს. თავად ქალაქი მოგხიბლავს საოცარი არქიტექტურით, ლამაზი ქუჩებით, უძველესი ისტორიული ძეგლებით და, რაც მთავარია, გამორჩეული კახური ღვინის მრავალფეროვნებითა და პურმარილით.\n\n თუ გინდა, ამ ქალაქის ისტორია გაიგო, ქალაქის ცენტრში, უშველებელ ციხე-გალავანში მოქცეულ მეფე ერეკლე II-ის მუზეუმს უნდა ესტუმრო. აქ გვიანდელი ბრინჯაოს ხანიდან დაწყებული ყველა ეპოქის ექსპონატს შეხვდები. აუცილებლად ნახე თელავის მთავარი სიმბოლო - 900-წლიანი ჭადარი და დალიე „ბატონის წყაროს“ ანკარა წყალი, დატკბი ქალაქის ცენტრში მდებარე თეატრის შენობით, რომელშიც უძველესი ციხე-კოშკია მოქცეულია.\n\n აუცილებლად უნდა ახვიდე ნადიკვარზე, ქალაქის მთავარ პარკში და გადახედო კავკასიონის ფეხქვეშ გადაშლილ ალაზნის ველს. კახელების ხასიათის მთელი სიგრძე და სიგანე ამ სურათშია.",
      en: "You shouldn’t leave Georgia without visiting Kakheti’s main city, Telavi. The adventure to Telavi begins with the stunning Gombori road, which leaves an unforgettable impression any time of year. The city itself will captivate you with its remarkable architecture, beautiful streets, ancient historical monuments, and, most importantly, the diversity of Kakhetian wine and hospitality. \n\n To learn the city’s history, visit the Erekle II Museum within the impregnable fortress walls in the city center, where you’ll find exhibits from the Late Bronze Age onward. Be sure to see Telavi’s main symbol—a 900-year-old plane tree—and drink the pure water from ‘Batonis Tskaro’ spring. Enjoy the theater building in the city center, which houses an ancient fortress tower. \n\n You must climb to Nadikvari, the city’s main park, and gaze at the Alazani Valley spread out below the Caucasus. The entire breadth and depth of Kakhetian character is captured in this view.",
    },
    imageSrc: "/why-georgia/telavi-georgia.webp",
    alt: { ka: "ტბა", en: "Lake" },
  },
  {
    title: { ka: "და მაინც, რატომ საქართველო?", en: "And Yet, Why Georgia?" },
    description: {
      ka: "იმიტომ, რომ ამ ქვეყანაში თითქოს მთელი სამყაროა მოქცეული - ძველი და ახალი, პირქუში და მხიარული. ყველა კუთხეს, ყველა ქალაქს თავისი განსაკუთრებული ხიბლი და ხასიათი აქვს. მერე ეს ხასიათი ერთ ეროვნულ ხასიათში იყრის თავს და ასე იქმნება ქართველი, ასე იქმნება საქართველო - ქვეყანა, სადაც სტუმარი ღვთისაა.",
      en: "Because this country seems to contain the entire world—old and new, stern and joyful. Every corner, every city has its own unique charm and character. These traits come together to form a national character, creating the Georgian people and Georgia—a country where a guest is considered a gift from God.",
    },
    imageSrc: "/why-georgia/why-georgia-world-heritage.webp",
    alt: { ka: "ტბა", en: "Lake" },
  },
];

export const sections12: Section[] = [
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
      en: "Georgia is located at the crossroads of Europe and Asia, in the Caucasus, on the Black Sea coast. For centuries, it has served as a bridge between civilizations, and it was here that the ‘Silk Road’ passed—the world’s largest trade artery.",
    },
    buttonText: { ka: "გაიგე მეტი", en: "Learn More" },
    geographyOfGeorgia: [
      {
        image: "/why-georgia/main-cities-of-georgia-country.webp",
        title: {
          ka: "საქართველოს მთავარი ქალაქები",
          en: "Main Cities of Georgia",
        },
        description: {
          ka: "შეგიძლია წარმოიდგინო პატარა ქვეყანა, რომელიც ადამიანის ცხოვრების 1 800 000-წლიან ისტორიას ითვლის და, მიუხედავად მუდმივი ბრძოლებისა, მსოფლიო ცივილიზაციის განვითარების ყველა ეტაპზე საკუთარ ფუნქციას ინარჩუნებს?",
          en: "Can you imagine a small country with a 1,800,000-year history of human life that, despite constant struggles, has maintained its role in the development of world civilization at every stage?",
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
        image: "/flags/bla2.webp",
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
          en: "Georgian wine is 8,000 years old—at that time, Georgians already knew the unique qvevri technology, which today has become one of the world’s leading methods. Do you know what these numbers mean? If you’re interested, let’s take the wine route…",
        },
      },
    ],
  },
];

// ------------------------------------------------ start 13

export const sidebarItems13: { ka: string; en: string }[] = [
  {
    ka: "ადამი და ევა, ნოეს კიდობანი და ქართული ღვინო",
    en: "Adam and Eve, Noah’s Ark, and Georgian Wine",
  },
  {
    ka: "ვაზი და თიხა – ყველაზე ხანდაზმული წყვილი",
    en: "Vine and Clay – The Oldest Couple",
  },
  {
    ka: "ქართული ღვინო და ქართული სიმღერა",
    en: "Georgian Wine and Georgian Song",
  },
  {
    ka: "რატომ საქართველო? – აქ ყველა გზა ღვინოსთან მიდის",
    en: "Why Georgia? – All Roads Lead to Wine",
  },
  {
    ka: "ღვინო და გასტრონომია",
    en: "Wine and Gastronomy",
  },
];

export const contentItems13: ContentItem[] = [
  {
    title: {
      ka: "ადამი და ევა, ნოეს კიდობანი და ქართული ღვინო",
      en: "Adam and Eve, Noah’s Ark, and Georgian Wine",
    },
    description: {
      ka: "ბიბლიის წელთაღრიცხვა ქრისტეს შობამდე 5604 წლიდან იწყება, როდესაც ღმერთმა გველის მიერ ცდუნებული ადამი და ევა სამოთხიდან გააძევა. ჩვენს წელთაღრიცხვასაც თუ დავამატებთ, გამოდის, ეს ამბავი 7626 წლის წინათ მოხდა, ანუ კარგა ხანი იყო გასული მას შემდეგ, რაც ქართველებმა ქვევრის გამოყენება დაიწყეს. \n\n ისიც საინტერესო ამბავია (გინდ დაიჯერე, გინდ - არა), რომ ბიბლიის პერსონაჟებს შორის ღვინის უპირველესი მოყვარული ნოე იყო -  დიახ, კიდობნის შემქმნელი და სამყაროს გადამრჩენი ნოე. \n\n არსებობს ლეგენდაც, რომ, როდესაც კიდობანი ზღვამ დიდი არარატის მთასთან გამორიყა, ნოე თავისი ამალით მაღალი მთებისკენ წასულა. ეს იყო სწორედ კავკასია და ერთ ადგილას ღვინო გაუსინჯავს - სავარაუდოდ, მარნეულის მიდამოებში, სადაც მსოფლიოში უძველესი - 8000 წლის ღვინის ნაკვალევი აღმოაჩინეს. \n\n ამ აღმოჩენას, ქართველ მეცნიერებთან ერთად, 7 ქვეყნის სპეციალისტები 3 წელი იკვლევდნენ, პენსილვანიის უნივერსიტეტის მუზეუმის პროფესორის, ბიოქიმიკოსისა და ღვინის მკვლევრის პატრიკ მაკგოვერნის ხელმძღვანელობით. შედეგად საქართველო ღვინის სამშობლოდ მთელმა მსოფლიომ აღიარა.",
      en: "The biblical timeline begins in 5604 BCE, when God expelled Adam and Eve from paradise after they were tempted by the serpent. Adding our current era, this event occurred 7,626 years ago—well after Georgians had already begun using qvevris for winemaking. \n\n Interestingly (believe it or not), among biblical figures, Noah was the foremost wine enthusiast—yes, Noah, the creator of the ark and savior of the world. \n\n There’s a legend that when the ark came to rest near Mount Ararat, Noah and his entourage headed toward the high mountains of the Caucasus. There, he tasted wine—likely in the Marneuli region, where the world’s oldest 8,000-year-old traces of wine were discovered. \n\n This discovery was studied for three years by specialists from seven countries, led by Professor Patrick McGovern, a biochemist and wine researcher from the University of Pennsylvania Museum. As a result, Georgia was recognized worldwide as the cradle of wine.",
    },
    anotherDescription: { ka: "", en: "" },
    imageSrc: "/why-georgia/georgian-wineyard-kakheti.webp",
    alt: { ka: "მთები", en: "Mountains" },
  },
  {
    title: {
      ka: "ვაზი და თიხა – ყველაზე ხანდაზმული წყვილი",
      en: "Vine and Clay – The Oldest Couple",
    },
    description: {
      ka: "ახლა რაც შეეხება უშუალოდ ქვევრსა და ქართულ ღვინოს. წარმოიდგინეთ, ამ ქვეყანაში ქვევრში ღვინო, სულ მცირე, 8 000-ჯერ არის დაყენებული. თიხისა და ვაზის ასეთი ხანგრძლივი და ჰარმონიული თანაცხოვრება მართლაც რაღაც მაგიასთანაა დაკავშირებული. \n\n ღვინის ქვევრში დაყენება არ არის მარტივი პროცესი, მას ცოდნა სჭირდება და საიდან მიიღო 8000 წლის წინანდელმა ადამიანმა ასეთი ცოდნა? ეს კითხვა იმდენად შორს წაგვიყვანს, რომ შეიძლება, საქართველოსა და ქართულ ღვინოსაც გავცდეთ.",
      en: "Now, regarding qvevris and Georgian wine directly. Imagine, in this country, wine has been made in qvevris at least 8,000 times. The long and harmonious coexistence of vine and clay is truly tied to some kind of magic. \n\n Making wine in a qvevri is not a simple process; it requires knowledge. Where did people 8,000 years ago acquire such expertise? This question could take us so far that we might even stray beyond Georgia and its wine.",
    },
    imageSrc: "/why-georgia/why-georgia-cradle-of-wine.webp",
    alt: { ka: "მდინარე", en: "River" },
  },
  {
    title: {
      ka: "ქართული ღვინო და ქართული სიმღერა",
      en: "Georgian Wine and Georgian Song",
    },
    description: {
      ka: "საქართველოში ღვინო მთელი კულტურის ერთგვარი ღერძია, რომლის გარშემოც იბადება და ვითარდება ყველაფერი: ქართული პოლიფონიური სიმღერების მნიშვნელოვანი ნაწილი ვაზსა და ღვინოს ეძღვნება; არის ფოლკლორული ნაწარმოებები, რომლებსაც სარიტუალოდ ასრულებდნენ ვენახის მოვლის, მოსავლის აღების, ღვინის დაწურვის, ქვევრის მოხდისა და სხვა ეტაპებზე. საინტერესოა, რომ ქართველები ერთი და იმავე სიმღერით ეგებებოდნენ ოჯახში ახალი ბავშვისა და ახალი ღვინის დაბადებას. \n\n ამ სიმღერებს დღესაც ღიღინებენ გლეხები თავიანთ ვენახებსა და მარნებში, პროფესიონალური ფოლკლორული ანსამბლები კი მთელ მსოფლიოს აცნობენ ქართულ ღვინოზე დაშენებულ ამ არამატერიალურ შედევრებს.",
      en: "In Georgia, wine is a central axis of the entire culture, around which everything is born and develops. A significant portion of Georgian polyphonic songs is dedicated to vines and wine. There are folkloric works performed ritually during vineyard care, harvesting, wine pressing, qvevri preparation, and other stages. Interestingly, Georgians used the same song to celebrate the birth of a new child and new wine in a family. \n\n These songs are still sung by farmers in their vineyards and wine cellars, while professional folk ensembles introduce the world to these intangible masterpieces built around Georgian wine.",
    },
    imageSrc: "/why-georgia/georgian-national-singers.webp",
    alt: { ka: "ტბა", en: "Lake" },
  },
  {
    title: {
      ka: "რატომ საქართველო? – აქ ყველა გზა ღვინოსთან მიდის",
      en: "Why Georgia? – All Roads Lead to Wine",
    },
    description: {
      ka: "საქართველოში მოგზაურობისას ბევრგან შეხვდები ერთ მოკრძალებულ საგზაო მანიშნებელს წარწერით - „ღვინის გზა“. \n\n თუ მას გაუყვები, სულ მალე მიხვალ დიდ, ინდუსტრიულ მეღვინეობამდე ან საოჯახო, მცირე მარნამდე, სადაც საუკეთესო ღვინოებს აწარმოებენ - მცირე რაოდენობით და მხოლოდ პრემიუმ ხარისხისას. მცირე მარნებში გასტრონომიაც მხოლოდ ადგილობრივია და იდეალურადაა შეხამებული ადგილწარმოშობის ღვინოებთან. \n\n „ღვინის გზას“, რომელსაც, წარწერასთან ერთად, ყურძნის მტევნის გამოსახულებაც ამშვენებს, საქართველოს თითქმის ყველა კუთხეში შეხვდები. მათ შორის: \n\n აჭარასა და გურიაში ეს ნიშანი ისეთ მარნებამდე მიგიყვანს, სადაც მწიფე ნაკვერცხლისფერ ჩხავერს აყენებენ. ეს უნიკალური ადგილწარმოშობის ღვინო მთიანი აჭარისა და გურიის ტერიტორიებზე მოჰყავთ; \n\n ღვინის გზებითაა დაქსელილი სამეგრელო, თავისი განთქმული ოჯალეშითა და არამხოლოდ; \n\n იმერეთი - მჩქეფარე ციცქა-ცოლიკოურითა და კრახუნათი შეგხვდება; \n\n რაჭა-ლეჩხუმი - ლეგენდარული უსახელოურითა და ხვანჭკარით; \n\n შიდა ქართლი - ელეგანტური ჩინებულითა და გორული მწვანით; \n\n ქვემო ქართლი - ოქროსფერი რქაწითელით და ასურეთული შალათი. \n\n სამცხე-ჯავახეთი - მესხური მწვანითა და მესხური წითლით; \n\n აჭარა - სუბტროპიკული ზონის ჩხავერით; \n\n აფხაზეთი - უნიკალური ავასირხვით; \n\n და, რაღა თქმა უნდა, კახეთი – არომატული კახური მწვანით და ქისით, სხეულიანი რქაწითელით და საფერავით. \n\n საქართველოში ერთადერთი ზონა, სადაც ღვინის გზა არ გადის, ალპური ზონაა. ეს ქვეყანა ხომ შავი ზღვის სანაპიროზე იწყება და კავკასიონის მყინვარებზე მთავრდება.",
      en: "While traveling in Georgia, you’ll often encounter a modest road sign reading ‘Wine Route.’ \n\n Follow it, and you’ll soon arrive at a large industrial winery or a small family cellar, where the best wines are produced—in small quantities and of premium quality. In small cellars, the cuisine is strictly local, perfectly paired with appellation wines. \n\n The ‘Wine Route,’ adorned with an image of a grape cluster alongside the inscription, can be found in nearly every corner of Georgia, including: \n\n In Adjara and Guria, it leads to cellars producing ripe amber Chkhaveri, a unique appellation wine from the mountainous regions of Adjara and Guria; \n\n Samegrelo is crisscrossed with wine routes, famous for Ojaleshi and more; \n\n Imereti greets you with sparkling Tsitska-Tsolikouri and Krakhuna; \n\n Racha-Lechkhumi with legendary Usakhelouri and Khvanchkara; \n\n Shida Kartli with elegant Chinuri and Goruli Mtsvane; \n\n Kvemo Kartli with golden Rkatsiteli and Asuretuli Shala; \n\n Samtskhe-Javakheti with Meskhuri Mtsvane and Meskhuri Red; \n\n Adjara with subtropical Chkhaveri; \n\n Abkhazia with unique Avasirkhva; \n\n And, of course, Kakheti with aromatic Kakhetian Mtsvane and Kisi, full-bodied Rkatsiteli, and Saperavi. \n\n The only zone in Georgia without a wine route is the alpine zone. This country begins on the Black Sea coast and ends at the Caucasus glaciers.",
    },
    imageSrc: "/why-georgia/akhaltsikhe-winemakeing.webp",
    alt: { ka: "ტბა", en: "Lake" },
  },
  {
    title: {
      ka: "ღვინო და გასტრონომია",
      en: "Wine and Gastronomy",
    },
    description: {
      ka: "როგორც ზემოთ დავთვალეთ, ქართული ღვინო ასაკით არა მხოლოდ მის მოყვარულ ნოეზე, არამედ თვით ადამსა და ევაზეც უფროსია. ახლა წარმოვიდგინოთ, როგორ შეძლებდა მაშინდელი მეღვინე არსებობას, თუ თავის დაყენებულ ღვინოს საკვებს არ მიაყოლებდა? \n\n ქართული სამზარეულო და ღვინო ერთად იკვლევს გზას ამ ათასწლეულებში და რამდენადაც მრავალფეროვანია ქართული ღვინო ადგილწარმოშობის მიხედვით (საქართველოში 500-ზე მეტი ადგილობრივი ჯიშის ვაზია ცნობილი), იმდენად მრავალფეროვანია ქართული გასტრონომიაც. საქართველოს ყოველ რეგიონს თავისი უნიკალური პროდუქტი და განუმეორებელი კერძი აქვს. \n\n თვითმყოფადი ქართული გასტრონომია ამავდროულად სხვა გასტრონომიული კულტურების ანარეკლიცაა, რაც ამ ქვეყნის ისტორიული ქარტეხილებითა და სხვა ერებთან ურთიერთობით არის გამოწვეული. ამიტომ არის ქართული გასტრონომია ასე მდიდარი და მრავალფეროვანი. \n\n იმოგზაურე ამ პატარა, მშვიდ, მრავალფerოვან ქვეყანაში და ყურადღებით იყავი – „ღვინის გზა“ არ გამოგრჩეს!",
      en: "As we’ve noted, Georgian wine is older not only than its enthusiast Noah but even Adam and Eve. Now, imagine how a winemaker back then could survive without pairing their wine with food? \n\n Georgian cuisine and wine have journeyed together through millennia, and just as Georgian wine is diverse by appellation (with over 500 known local grape varieties), so too is Georgian gastronomy. Each region of Georgia has its unique products and inimitable dishes. \n\n Distinctive Georgian gastronomy also reflects other culinary cultures, shaped by the country’s historical upheavals and interactions with other nations. This is why Georgian cuisine is so rich and diverse. \n\n Travel through this small, peaceful, diverse country, and stay attentive—don’t miss the ‘Wine Route’!",
    },
    imageSrc: "/why-georgia/wine-and-cheese-festival.webp",
    alt: { ka: "ტბა", en: "Lake" },
  },
];

export const sections13: Section[] = [
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
      en: "Georgia is located at the crossroads of Europe and Asia, in the Caucasus, on the Black Sea coast. For centuries, it has served as a bridge between civilizations, and it was here that the ‘Silk Road’ passed—the world’s largest trade artery.",
    },
    buttonText: { ka: "გაიგე მეტი", en: "Learn More" },
    geographyOfGeorgia: [
      {
        image: "/why-georgia/why-georgia-vine-akvani-gnta.webp",
        title: {
          ka: "საქართველო როგორც ღვინის აკვანი",
          en: "Georgia as the Cradle of Wine",
        },
        description: {
          ka: "ქართული ღვინო 8000 წლისაა - იმ დროს უკვე იცოდნენ ქართველებმა ქვევრის უნიკალური ტექნოლოგია, რომელიც დღეს მსოფლიოს ერთ-ერთ მოწინავე მეთოდად იქცა. იცით, ეს ციფრები რას ნიშნავს? თუ გაინტერესებთ, ღვინის გზას გავუდგეთ…",
          en: "Georgian wine is 8,000 years old—at that time, Georgians already knew the unique qvevri technology, which today has become one of the world’s leading methods. Do you know what these numbers mean? If you’re interested, let’s take the wine route…",
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
        image: "/flags/bla2.webp",
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
          en: "Georgian wine is 8,000 years old—at that time, Georgians already knew the unique qvevri technology, which today has become one of the world’s leading methods. Do you know what these numbers mean? If you’re interested, let’s take the wine route…",
        },
      },
    ],
  },
];

// ------------------------------------ start 14

export const sidebarItems14: { ka: string; en: string }[] = [
  {
    ka: "ადამი და ევა, ნოეს კიდობანი და ქართული ღვინო",
    en: "Adam and Eve, Noah’s Ark, and Georgian Wine",
  },
  {
    ka: "ვაზი და თიხა – ყველაზე ხანდაზმული წყვილი",
    en: "Vine and Clay – The Oldest Couple",
  },
  {
    ka: "ქართული ღვინო და ქართული სიმღერა",
    en: "Georgian Wine and Georgian Song",
  },
  {
    ka: "რატომ საქართველო? – აქ ყველა გზა ღვინოსთან მიდის",
    en: "Why Georgia? – All Roads Lead to Wine",
  },
  {
    ka: "ღვინო და გასტრონომია",
    en: "Wine and Gastronomy",
  },
];

export const contentItems14: ContentItem[] = [
  {
    title: {
      ka: "ადამი და ევა, ნოეს კიდობანი და ქართული ღვინო",
      en: "Adam and Eve, Noah’s Ark, and Georgian Wine",
    },
    description: {
      ka: "ბიბლიის წელთაღრიცხვა ქრისტეს შობამდე 5604 წლიდან იწყება, როდესაც ღმერთმა გველის მიერ ცდუნებული ადამი და ევა სამოთხიდან გააძევა. ჩვენს წელთაღრიცხვასაც თუ დავამატებთ, გამოდის, ეს ამბავი 7626 წლის წინათ მოხდა, ანუ კარგა ხანი იყო გასული მას შემდეგ, რაც ქართველებმა ქვევრის გამოყენება დაიწყეს. \n\n ისიც საინტერესო ამბავია (გინდ დაიჯერე, გინდ - არა), რომ ბიბლიის პერსონაჟებს შორის ღვინის უპირველესი მოყვარული ნოე იყო -  დიახ, კიდობნის შემქმნელი და სამყაროს გადამრჩენი ნოე. \n\n არსებობს ლეგენდაც, რომ, როდესაც კიდობანი ზღვამ დიდი არარატის მთასთან გამორიყა, ნოე თავისი ამალით მაღალი მთებისკენ წასულა. ეს იყო სწორედ კავკასია და ერთ ადგილას ღვინო გაუსინჯავს - სავარაუდოდ, მარნეულის მიდამოებში, სადაც მსოფლიოში უძველესი - 8000 წლის ღვინის ნაკვალევი აღმოაჩინეს. \n\n ამ აღმოჩენას, ქართველ მეცნიერებთან ერთად, 7 ქვეყნის სპეციალისტები 3 წელი იკვლევდნენ, პენსილვანიის უნივერსიტეტის მუზეუმის პროფესორის, ბიოქიმიკოსისა და ღვინის მკვლევრის პატრიკ მაკგოვერნის ხელმძღვანელობით. შედეგად საქართველო ღვინის სამშობლოდ მთელმა მსოფლიომ აღიარა.",
      en: "The biblical timeline begins in 5604 BCE, when God expelled Adam and Eve from paradise after they were tempted by the serpent. Adding our current era, this event occurred 7,626 years ago—well after Georgians had already begun using qvevris for winemaking. \n\n Interestingly (believe it or not), among biblical figures, Noah was the foremost wine enthusiast—yes, Noah, the creator of the ark and savior of the world. \n\n There’s a legend that when the ark came to rest near Mount Ararat, Noah and his entourage headed toward the high mountains of the Caucasus. There, he tasted wine—likely in the Marneuli region, where the world’s oldest 8,000-year-old traces of wine were discovered. \n\n This discovery was studied for three years by specialists from seven countries, led by Professor Patrick McGovern, a biochemist and wine researcher from the University of Pennsylvania Museum. As a result, Georgia was recognized worldwide as the cradle of wine.",
    },
    anotherDescription: { ka: "", en: "" },
    imageSrc: "/why-georgia/georgian-wineyard-kakheti.webp",
    alt: { ka: "მთები", en: "Mountains" },
  },
  {
    title: {
      ka: "ვაზი და თიხა – ყველაზე ხანდაზმული წყვილი",
      en: "Vine and Clay – The Oldest Couple",
    },
    description: {
      ka: "ახლა რაც შეეხება უშუალოდ ქვევრსა და ქართულ ღვინოს. წარმოიდგინეთ, ამ ქვეყანაში ქვევრში ღვინო, სულ მცირე, 8 000-ჯერ არის დაყენებული. თიხისა და ვაზის ასეთი ხანგრძლივი და ჰარმონიული თანაცხოვრება მართლაც რაღაც მაგიასთანაა დაკავშირებული. \n\n ღვინის ქვევრში დაყენება არ არის მარტივი პროცესი, მას ცოდნა სჭირდება და საიდან მიიღო 8000 წლის წინანდელმა ადამიანმა ასეთი ცოდნა? ეს კითხვა იმდენად შორს წაგვიყვანს, რომ შეიძლება, საქართველოსა და ქართულ ღვინოსაც გავცდეთ.",
      en: "Now, regarding qvevris and Georgian wine directly. Imagine, in this country, wine has been made in qvevris at least 8,000 times. The long and harmonious coexistence of vine and clay is truly tied to some kind of magic. \n\n Making wine in a qvevri is not a simple process; it requires knowledge. Where did people 8,000 years ago acquire such expertise? This question could take us so far that we might even stray beyond Georgia and its wine.",
    },
    imageSrc: "/why-georgia/why-georgia-cradle-of-wine.webp",
    alt: { ka: "მდინარე", en: "River" },
  },
  {
    title: {
      ka: "ქართული ღვინო და ქართული სიმღერა",
      en: "Georgian Wine and Georgian Song",
    },
    description: {
      ka: "საქართველოში ღვინო მთელი კულტურის ერთგვარი ღერძია, რომლის გარშემოც იბადება და ვითარდება ყველაფერი: ქართული პოლიფონიური სიმღერების მნიშვნელოვანი ნაწილი ვაზსა და ღვინოს ეძღვნება; არის ფოლკლორული ნაწარმოებები, რომლებსაც სარიტუალოდ ასრულებდნენ ვენახის მოვლის, მოსავლის აღების, ღვინის დაწურვის, ქვევრის მოხდისა და სხვა ეტაპებზე. საინტერესოა, რომ ქართველები ერთი და იმავე სიმღერით ეგებებოდნენ ოჯახში ახალი ბავშვისა და ახალი ღვინის დაბადებას. \n\n ამ სიმღერებს დღესაც ღიღინებენ გლეხები თავიანთ ვენახებსა და მარნებში, პროფესიონალური ფოლკლორული ანსამბლები კი მთელ მსოფლიოს აცნობენ ქართულ ღვინოზე დაშენებულ ამ არამატერიალურ შედევრებს.",
      en: "In Georgia, wine is a central axis of the entire culture, around which everything is born and develops. A significant portion of Georgian polyphonic songs is dedicated to vines and wine. There are folkloric works performed ritually during vineyard care, harvesting, wine pressing, qvevri preparation, and other stages. Interestingly, Georgians used the same song to celebrate the birth of a new child and new wine in a family. \n\n These songs are still sung by farmers in their vineyards and wine cellars, while professional folk ensembles introduce the world to these intangible masterpieces built around Georgian wine.",
    },
    imageSrc: "/why-georgia/georgian-national-singers.webp",
    alt: { ka: "ტბა", en: "Lake" },
  },
  {
    title: {
      ka: "რატომ საქართველო? – აქ ყველა გზა ღვინოსთან მიდის",
      en: "Why Georgia? – All Roads Lead to Wine",
    },
    description: {
      ka: "საქართველოში მოგზაურობისას ბევრგან შეხვდები ერთ მოკრძალებულ საგზაო მანიშნებელს წარწერით - „ღვინის გზა“. \n\n თუ მას გაუყვები, სულ მალე მიხვალ დიდ, ინდუსტრიულ მეღვინეობამდე ან საოჯახო, მცირე მარნამდე, სადაც საუკეთესო ღვინოებს აწარმოებენ - მცირე რაოდენობით და მხოლოდ პრემიუმ ხარისხისას. მცირე მარნებში გასტრონომიაც მხოლოდ ადგილობრივია და იდეალურადაა შეხამებული ადგილწარმოშობის ღვინოებთან. \n\n „ღვინის გზას“, რომელსაც, წარწერასთან ერთად, ყურძნის მტევნის გამოსახულებაც ამშვენებს, საქართველოს თითქმის ყველა კუთხეში შეხვდები. მათ შორის: \n\n აჭარასა და გურიაში ეს ნიშანი ისეთ მარნებამდე მიგიყვანს, სადაც მწიფე ნაკვერცხლისფერ ჩხავერს აყენებენ. ეს უნიკალური ადგილწარმოშობის ღვინო მთიანი აჭარისა და გურიის ტერიტორიებზე მოჰყავთ; \n\n ღვინის გზებითაა დაქსელილი სამეგრელო, თავისი განთქმული ოჭ제ლეშითა და არამხოლოდ; \n\n იმერეთი - მჩქეფარე ციცქა-ცოლიკოურითა და კრახუნათი შეგხვდება; \n\n რაჭა-ლეჩხუმი - ლეგენდარული უსახელოურითა და ხვანჭკარით; \n\n შიდა ქართლი - ელეგანტური ჩინებულითა და გორული მწვანით; \n\n ქვემო ქართლი - ოქროსფერი რქაწითელით და ასურეთული შალათი. \n\n სამცხე-ჯავახეთი - მესხური მწვანითა და მესხური წითლით; \n\n აჭარა - სუბტროპიკული ზონის ჩხავერით; \n\n აფხაზეთი - უნიკალური ავასირხვით; \n\n და, რაღა თქმა უნდა, კახეთი – არომატული კახური მწვანით და ქისით, სხეულიანი რქაწითელით და საფერავით. \n\n საქართველოში ერთადერთი ზონა, სადაც ღვინის გზა არ გადის, ალპური ზონაა. ეს ქვეყანა ხომ შავი ზღვის სანაპიროზე იწყება და კავკასიონის მყინვარებზე მთავრდება.",
      en: "While traveling in Georgia, you’ll often encounter a modest road sign reading ‘Wine Route.’ \n\n Follow it, and you’ll soon arrive at a large industrial winery or a small family cellar, where the best wines are produced—in small quantities and of premium quality. In small cellars, the cuisine is strictly local, perfectly paired with appellation wines. \n\n The ‘Wine Route,’ adorned with an image of a grape cluster alongside the inscription, can be found in nearly every corner of Georgia, including: \n\n In Adjara and Guria, it leads to cellars producing ripe amber Chkhaveri, a unique appellation wine from the mountainous regions of Adjara and Guria; \n\n Samegrelo is crisscrossed with wine routes, famous for Ojaleshi and more; \n\n Imereti greets you with sparkling Tsitska-Tsolikouri and Krakhuna; \n\n Racha-Lechkhumi with legendary Usakhelouri and Khvanchkara; \n\n Shida Kartli with elegant Chinuri and Goruli Mtsvane; \n\n Kvemo Kartli with golden Rkatsiteli and Asuretuli Shala; \n\n Samtskhe-Javakheti with Meskhuri Mtsvane and Meskhuri Red; \n\n Adjara with subtropical Chkhaveri; \n\n Abkhazia with unique Avasirkhva; \n\n And, of course, Kakheti with aromatic Kakhetian Mtsvane and Kisi, full-bodied Rkatsiteli, and Saperavi. \n\n The only zone in Georgia without a wine route is the alpine zone. This country begins on the Black Sea coast and ends at the Caucasus glaciers.",
    },
    imageSrc: "/why-georgia/akhaltsikhe-winemakeing.webp",
    alt: { ka: "ტბა", en: "Lake" },
  },
  {
    title: {
      ka: "ღვინო და გასტრონომია",
      en: "Wine and Gastronomy",
    },
    description: {
      ka: "როგორც ზემოთ დავთვალეთ, ქართული ღვინო ასაკით არა მხოლოდ მის მოყვარულ ნოეზე, არამედ თვით ადამსა და ევაზეც უფროსია. ახლა წარმოვიდგინოთ, როგორ შეძლებდა მაშინდელი მეღვინე არსებობას, თუ თავის დაყენებულ ღვინოს საკვებს არ მიაყოლებდა? \n\n ქართული სამზარეულო და ღვინო ერთად იკვლევს გზას ამ ათასწლეულებში და რამდენადაც მრავალფეროვანია ქართული ღვინო ადგილწარმოშობის მიხედვით (საქართველოში 500-ზე მეტი ადგილობრივი ჯიშის ვაზია ცნობილი), იმდენად მრავალფეროვანია ქართული გასტრონომიაც. საქართველოს ყოველ რეგიონს თავისი უნიკალური პროდუქტი და განუმეორებელი კერძი აქვს. \n\n თვითმყოფადი ქართული გასტრონომია ამავდროულად სხვა გასტრონომიული კულტურების ანარეკლიცაა, რაც ამ ქვეყნის ისტორიული ქარტეხილებითა და სხვა ერებთან ურთიერთობით არის გამოწვეული. ამიტომ არის ქართული გასტრონომია ასე მდიდარი და მრავალფეროვანი. \n\n იმოგზაურე ამ პატარა, მშვიდ, მრავალფეროვან ქვეყანაში და ყურადღებით იყავი – „ღვინის გზა“ არ გამოგრჩეს!",
      en: "As we’ve noted, Georgian wine is older not only than its enthusiast Noah but even Adam and Eve. Now, imagine how a winemaker back then could survive without pairing their wine with food? \n\n Georgian cuisine and wine have journeyed together through millennia, and just as Georgian wine is diverse by appellation (with over 500 known local grape varieties), so too is Georgian gastronomy. Each region of Georgia has its unique products and inimitable dishes. \n\n Distinctive Georgian gastronomy also reflects other culinary cultures, shaped by the country’s historical upheavals and interactions with other nations. This is why Georgian cuisine is so rich and diverse. \n\n Travel through this small, peaceful, diverse country, and stay attentive—don’t miss the ‘Wine Route’!",
    },
    imageSrc: "/why-georgia/wine-and-cheese-festival.webp",
    alt: { ka: "ტბა", en: "Lake" },
  },
];

export const sections14: Section[] = [
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
      en: "Georgia is located at the crossroads of Europe and Asia, in the Caucasus, on the Black Sea coast. For centuries, it has served as a bridge between civilizations, and it was here that the ‘Silk Road’ passed—the world’s largest trade artery.",
    },
    buttonText: { ka: "გაიგე მეტი", en: "Learn More" },
    geographyOfGeorgia: [
      {
        image: "/why-georgia/why-georgia-first-european-civilization-gnta.webp",
        title: {
          ka: "პირველი ევროპული ცივილიზაცია",
          en: "The First European Civilization",
        },
        description: {
          ka: "საქართველოში დღემდე არაერთი არტეფაქტია აღმოჩენილი, რომლებმაც თავის დროზე სამყარო, მათ შორის, ევროპა შეცვალეს.",
          en: "Numerous artifacts have been discovered in Georgia to this day, which, in their time, changed the world, including Europe.",
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
        image: "/flags/bla2.webp",
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
          en: "Georgian wine is 8,000 years old—at that time, Georgians already knew the unique qvevri technology, which today has become one of the world’s leading methods. Do you know what these numbers mean? If you’re interested, let’s take the wine route…",
        },
      },
    ],
  },
];

// ---------------------- start 15

export const sidebarItems15: { ka: string; en: string }[] = [
  {
    ka: "საქართველო - თავგადასავლების სივრცე",
    en: "Georgia - A Space for Adventures",
  },
  { ka: "ტყეები", en: "Forests" },
  { ka: "მთები", en: "Mountains" },
  {
    ka: "მდინარეები, ჩანჩქერები, ტბები",
    en: "Rivers, Waterfalls, Lakes",
  },
  { ka: "კანიონები", en: "Canyons" },
  { ka: "მღვიმეები და გამოქვაბულები", en: "Caves and Caverns" },
  { ka: "შავი ზღვა", en: "Black Sea" },
  {
    ka: "და მაინც, რატომ საქართველო?",
    en: "And Still, Why Georgia?",
  },
];

export const contentItems15: ContentItem[] = [
  {
    title: {
      ka: "საქართველო - თავგადასავლების სივრცე",
      en: "Georgia - A Space for Adventures",
    },
    description: {
      ka: "საქართველო, ერთი შეხედვით, პატარა ქვეყანაა, მისი ფართობი სულ რაღაც 70 ათას კვ.მ-ამდეა, თუმცა ეს არის ქვეყანა, სადაც შეგიძლია დაუვიწყარი მოგონებები დააგროვო.",
      en: "At first glance, Georgia is a small country, with an area of just 70,000 square kilometers, but it’s a place where you can collect unforgettable memories.",
    },
    anotherDescription: {
      ka: "გინდა, სტალაქტიტებსა და სტალაგმიტებს, კლდეში გამოკვეთილ ქალაქებში იმოგზაურო და ქვევრში დავარგებული ღვინო დააგემოვნო? ცას შეგიძლია მისწვდე - ულამაზესი პეიზაჟების თავზე პარაპლანით გადაიფრინო. ამისთვის მხოლოდ ერთი რამაა საჭირო - მხარზე ზურგჩანთა მოიგდო და საქართველოში ჩამოხვიდე.",
      en: "Want to explore stalactites and stalagmites, travel through rock-hewn cities, and taste wine fermented in qvevris? You can reach for the sky—paragliding over stunning landscapes. All you need is to throw a backpack over your shoulder and come to Georgia.",
    },
    imageSrc: "/why-georgia/hiking-gudani-roshka-3.webp",
    alt: { ka: "მთები", en: "Mountains" },
  },
  {
    title: { ka: "ტყეები", en: "Forests" },
    description: {
      ka: "საქართველო მთაგორიანი ქვეყანაა, ამიტომ, სადაც არ უნდა იყო, მცირე მანძილს გაივლი თუ არა, ტყეში აღმოჩნდები. თუ ლაშქრობა გიყვარს, კარგი იქნება, მოგზაურობა დაცულ ტერიტორიებზე დაგეგმო. საქართველოში 14 სახელმწიფო ნაკრძალი, 13 ეროვნული პარკი, 24 აღკვეთილი და 3 დაცული ლანდშაფტია. ეს იმას ნიშნავს, რომ ყველგან, სადაც წახვალ, ხელშეუხებელი ბუნება დაგხვდება იშვიათი ჯიშის ხეებით, წითელ წიგნში შეყვანილი ცხოველებითა და ფრინველებით, ანკარა მდინარეებით, მრავალფეროვანი ყვავილებით მოფენილი მინდვრებით, ტბებითა და ჩანჩქერებით, სიცოცხლით რომ აგავსებს. \n\n არ აქვს მნიშვნელობა, ფეხით მოგზაურობას აირჩევ, ცხენით თუ ველოსიპედით (ეს ტურები საქართველოში კარგადაა განვითარებული) - აქ არსებული ტურისტული ბილიკები მოგზაურობას გაგიმარტივებს. ლაშქრობით დაღლილს კი შესაფერის ადგილზე კარვის გაშლის, კოცონის აგიზგიზებისა და ქართული ცის ღამის სიღრმეში ჩაძირვის სრული ბედნიერება გელოდება.",
      en: "Georgia is a mountainous country, so no matter where you are, a short distance will lead you to a forest. If you love hiking, it’s best to plan your trip in protected areas. Georgia has 14 state reserves, 13 national parks, 24 sanctuaries, and 3 protected landscapes. This means that wherever you go, pristine nature awaits you with rare tree species, animals and birds listed in the Red Book, wild rivers, fields covered with diverse flowers, lakes, and waterfalls that fill you with life. \n\n Whether you choose to travel on foot, by horse, or by bicycle (these tours are well-developed in Georgia), the existing tourist trails will make your journey easier. After a tiring hike, the joy of pitching a tent, lighting a campfire, and immersing yourself in the depths of the Georgian night sky awaits you.",
    },
    imageSrc: "/why-georgia/goderdzi-petrified-forest-natural-monument.webp",
    alt: { ka: "მდინარე", en: "River" },
  },
  {
    title: { ka: "მთები", en: "Mountains" },
    description: {
      ka: "ექსტრემალური თავგადასავალი გხიბლავს და მთების დაპყრობის სურვილით ხარ შეპყრობილი? ამ შემთხვევაში წელიწადის დროს არ აქვს მნიშვნელობა - კავკასიონის მთები თავგადასავლების ნამდვილი ასპარეზია. აქ გალოდება დიდი კავკასიონის და ევროპის უმაღლესი მწვერვალები, შხარა, ყაზბეგი, თეთნულდი, უშბა - მათი ჩამოთვლა შორს წაგვიყვანს. \n\n ზამთარი საქართველოში ევროპული სტანდარტების სათხილამურო კურორტების ფართო არჩევანსაც გთავაზობს და გაუკვალავ თოვლში სრიალის შესაძლებლობასაც გაძლევს, ჰელისკით იქნება ეს თუ სკიტურით. სნოუბორდი, თოვლმავლები, თხილმარი - კიდევ ბევრი ზამთრის აქტივობა გელის ქართულ კურორტებზე: გუდაურში, მესტიაში, გოდერძიზე თუ ბაკურიანში.",
      en: "Are you captivated by extreme adventures and obsessed with conquering mountains? In that case, the season doesn’t matter—the Caucasus Mountains are a true arena for adventure. Here await the highest peaks of the Greater Caucasus and Europe, like Shkhara, Kazbegi, Tetnuldi, and Ushba—the list goes on. \n\n Winter in Georgia offers a wide range of European-standard ski resorts and the chance to glide through untouched snow, whether by heli-skiing or ski touring. Snowboarding, snowmobiling, and skiing—many more winter activities await at Georgian resorts like Gudauri, Mestia, Goderdzi, or Bakuriani.",
    },
    imageSrc: "/why-georgia/gomi-mountain.webp",
    alt: { ka: "ტბა", en: "Lake" },
  },
  {
    title: {
      ka: "მდინარეები, ჩანჩქერები, ტბები",
      en: "Rivers, Waterfalls, Lakes",
    },
    description: {
      ka: "საქართველოს მდინარეების უმრავლესობა მთებში იღებს სათავეს და გაუვალ ჭიუხებში მიედინება, ამიტომ, თუკი ამაღელვებელი შეგრძნებების მოყვარული ხარ, თავი ჯომარდობაშიც უნდა გამოცადო. ქართველი მოჯომარდეები საჭირო აღჭურვილობას თავად დაგახვედრებენ და 1-3 კატეგორიის სირთულის მდინარეებზე დაშვებაში დაგეხმარებიან. \n\n საქართველოს ათობით ტბისა და ჩანჩქერის მრავალფეროვნებაზე აღარ შევჩერდები - მათი ნახვა საუვიწყარ მოგონებად გექცევა. დავამატებ მხოლოდ, რომ საქართველოში არის მდინარეები, მაგალითად, მტკვარი, სადაც გასეირნებას დამწყები მოჯომარდეც შეძლებს. \n\n საქართველოს მდინარეებზე კაიაკინგით დაშვებაცაა შესაძლებელი. 28 მარშრუტი მაინც გვაქვს, რომლებზედაც აპრილიდან ნოემბრის ბოლომდეა შესაძლებელი დაშვება. აბაშისწყალს კი ამ სიამოვნებისთვის მთელი წლის განმავლობაში შეგიძლია მიაკითხო.",
      en: "Most of Georgia’s rivers originate in the mountains and flow through rugged gorges, so if you’re a thrill-seeker, you should try rafting. Georgian rafters will provide the necessary equipment and assist with descents on rivers of 1–3 difficulty categories. \n\n I won’t dwell on the diversity of Georgia’s dozens of lakes and waterfalls—seeing them becomes an unforgettable memory. I’ll just add that there are rivers, like the Mtkvari, where even beginner rafters can enjoy a ride. \n\n Kayaking is also possible on Georgia’s rivers. There are at least 28 routes available for descents from April to late November. Abasha River, however, is open for this pleasure year-round.",
    },
    imageSrc:
      "/why-georgia/tabatskuri-tavkvetili-levani-lake-abuli-lake-abuli-fortress-gandzani-gnta.webp",
    alt: { ka: "ტბა", en: "Lake" },
  },
  {
    title: { ka: "კანიონები", en: "Canyons" },
    description: {
      ka: "საქართველოში ვულკანოგენურ ქანებში ჩაჭრილი ოკაცეს, მარტვილის, დაშბაშისა და კიდევ მრავალი კანიონი იშვიათი ბიომრავალფეროვნებით დაგახვევს თავბრუს. მით უფრო, რომ აქაური კანიონინგი სხვადასხვა თავგადასავალს მოიცავს - ლაშქრობას, ჩანჩქერებზე თოკით დაშვებას, ცოცვას, ცურვას, კლდიდან გადმოხტომას და სხვა. \n\n იმერეთში, სამეგრელოში, რაჭა-ლეჩხუმსა და აჭარაში არის ისეთი, ჩანჩქერებიც, რომლებზე უსაფრთხოდ დაშვებასაც, გამოცდილ ინსტრუქტორებთან ერთად, მოზარდებიც შეძლებენ.",
      en: "Georgia’s canyons, carved into volcanic rock—Okatse, Martvili, Dashbashi, and many others—will captivate you with their rare biodiversity. Canyoning here includes various adventures: hiking, rappelling down waterfalls, climbing, swimming, cliff jumping, and more. \n\n In Imereti, Samegrelo, Racha-Lechkhumi, and Adjara, there are waterfalls where even teenagers can safely rappel with experienced instructors.",
    },
    imageSrc: "/why-georgia/martvili-canyon-gnta.webp",
    alt: { ka: "ტბა", en: "Lake" },
  },
  {
    title: {
      ka: "მღვიმეები და გამოქვაბულები",
      en: "Caves and Caverns",
    },
    description: {
      ka: "იცოდი, რომ მსოფლიოში ყველაზე ღრმა გამოქვაბულები საქართველოშია? საერთოდ, საქართველოში 30-ზე მეტი მღვიმე და გამოქვაბულია. პრომეთეს, სათაფლიის, ნავენახევის, თეთრას კარსტული მღვიმეები - ეს არასრული ჩამონათვალია ბუნების იმ საოცრების, სადაც განსაკუთრებულ და ულამაზესი ფორმის სტალაგმიტების, სტალაგნატებისა და სტალაქტიტების სამყაროში მოხვდები. სათაფლიის მღვიმეში კი საკუთარი თვალით ნახავ დინოზავრების ნაკვალევს. \n\n თავგადასავალი ამით არ სრულდება - ვარძია, უფლისციხე, გარეჯის უდაბნო, ქვახვრელის გამოქვაბულების კომპლექსი და ქვაში გამოკვეთილი კიდევ მრავალი ქალაქი თუ მონასტერი გელოდება საქართველოში, ისტორიაში რომ გამოგზაუროს.",
      en: "Did you know that some of the world’s deepest caverns are in Georgia? In total, there are over 30 caves and caverns here. Prometheus, Sataplia, Navenakhevi, and Tetra’s karst caves are just a partial list of nature’s wonders where you’ll enter a world of stunning stalagmites, stalagnates, and stalactites. At Sataplia Cave, you can even see dinosaur footprints with your own eyes. \n\n The adventure doesn’t end there—Vardzia, Uplistsikhe, David Gareji’s desert, the Kvakhvreli cave complex, and many other rock-hewn cities and monasteries await to take you on a journey through history.",
    },
    imageSrc: "/why-georgia/prometheus-cave-gnta.webp",
    alt: { ka: "ტბა", en: "Lake" },
  },
  {
    title: { ka: "შავი ზღვა", en: "Black Sea" },
    description: {
      ka: "ზღვა ხომ თავისთავად თავგადასავალია, მაგრამ საქართველოს ულამაზესი სანაპიროები მხოლოდ ცურვა, რუჯი და მზის მშვენიერი ჩასვლა არაა - აქ კატერებით ტალღებს გაეჯიბრები და პარაპლანით შავი ზღვის მთელ სივრცეს დაიპყრობ.",
      en: "The sea is an adventure in itself, but Georgia’s stunning coastlines offer more than just swimming, sunbathing, and beautiful sunsets—you can race the waves on speedboats or conquer the Black Sea’s expanse by paragliding.",
    },
    imageSrc: "/why-georgia/seaside-adjara-black-sea.webp",
    alt: { ka: "ტბა", en: "Lake" },
  },
  {
    title: {
      ka: "და მაინც, რატომ საქართველო?",
      en: "And Still, Why Georgia?",
    },
    description: {
      ka: "პარაპლანი, ზიპლაინი, კაიაკინგი, ჯომარდობა, კანიონინგი, ჰელისკი, სკიტურები, მთამსვლელობა, ლაშქრობა, ცხენებით ჯირითი, კიდევ ბევრი სხვა რამ და ყველაფერ ამასთან ერთად - განთქმული სტუმარმასპინძლობა, უგემრიელესი და მრავალფეროვანი ქართული სუფრა, თამადის საოცარი ტრადიცია, განუმეორებელი ქართული ცეკვა და სიმღერა. \n\n კიდევ არის საჭირო რამე, რომ საქართველოში დაუვიწყარი თავგადასავლებისთვის ჩამოხვიდე?",
      en: "Paragliding, ziplining, kayaking, rafting, canyoning, heli-skiing, ski touring, mountaineering, hiking, horseback riding, and much more—alongside renowned hospitality, delicious and diverse Georgian cuisine, the unique tradition of the tamada, and inimitable Georgian dance and song. \n\n Is there anything else you need to come to Georgia for unforgettable adventures?",
    },
    imageSrc: "/why-georgia/kayaking-techura-gnta.webp",
    alt: { ka: "ტბა", en: "Lake" },
  },
];

export const sections15: Section[] = [
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
      en: "Georgia is located at the crossroads of Europe and Asia, in the Caucasus, on the Black Sea coast. For centuries, it has served as a bridge between civilizations, and it was here that the ‘Silk Road’ passed—the world’s largest trade artery.",
    },
    buttonText: { ka: "გაიგე მეტი", en: "Learn More" },
    geographyOfGeorgia: [
      {
        image: "/why-georgia/why-georgia-adventures.webp",
        title: {
          ka: "თავგადასავლები საქართველოში",
          en: "Adventures in Georgia",
        },
        description: {
          ka: "გინდა, დამღლელი, რუტინული სამუშაოს შემდეგ თავს ნამდვილი თავგადასავალი მოუწყო? თან - არაერთი! უღრან ტყეშიც იარო, მდინარეებზეც იჯომარდო, მთებისა და კლდეების მწვერვალებიც დალაშქრო და იქიდან თხილამურებითაც დაეშვა?",
          en: "Want to treat yourself to real adventures after tiring, routine work? Not just one, but many! Roam through dense forests, raft on rivers, conquer mountain and cliff peaks, and ski down from them?",
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
        image: "/flags/bla2.webp",
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
    image: "/flags/doqi.png",
    geographyOfGeorgia: [
      {
        image: "/flags/image03.webp",
        title: {
          ka: "თავგადასავლების მრავალფეროვნება საქართველოში",
          en: "The Diversity of Adventures in Georgia",
        },
        description: {
          ka: "საქართველო თავგადასავლების მაძიებელთა სამოთხეა, სადაც ერთ ქვეყანაში შეგიძლია გამოსცადო მთამსვლელობა, კანიონინგი, ჯომარდობა, პარაპლანით ფრენა და მრავალი სხვა. თუ გსურს, ადრენალინით აივსო, ეს ქვეყანა შენთვისაა. მზად ხარ თავგადასავლებისთვის?",
          en: "Georgia is a paradise for adventure seekers, where you can experience mountaineering, canyoning, rafting, paragliding, and much more in one country. If you want to be filled with adrenaline, this country is for you. Are you ready for adventure?",
        },
      },
    ],
  },
];

// -------------------- start 16

export const sidebarItems16: { ka: string; en: string }[] = [
  {
    ka: "უშგული და ბოჭორნა",
    en: "Ushguli and Bochorna",
  },
];

export const contentItems16: ContentItem[] = [
  {
    title: {
      ka: "უშგული და ბოჭორნა",
      en: "Ushguli and Bochorna",
    },
    description: {
      ka: "თუ ევროპაში ყველაზე მაღალ დასახლებულ პუნქტად წლების განმავლობაში სვანეთის თვალწარმტაცი თემი, უშგული მიიჩნეოდა თავისი გამორჩეული მდებარეობითა და არქიტექტურული ძეგლებით – სვანური კოშკებით, ბოლო რამდენიმე წელია ევროპის ყველაზე მაღალ დასახლებად ისტორიული სოფელი ბოჭორნა აღიარეს, რომელიც კახეთის მხარეში, თუშეთში, გომეწრის ულამაზეს ხეობაში მდებარეობს. \n\n სოფელი ბოჭორნა ზღვის დონიდან 2345 მეტრზეა გაშენებული. 1954 წლის აღწერის თანახმად, ამ სოფელში 25 კომლი მუდმივად ცხოვრობდა და სამეურნეო საქმიანობას ეწეოდა. 1980 წლიდან სოფელი დაიცალა და 2014 წლამდე ნასოფლარის სტატუსს ატარებდა, სანამ 76 წლის ირაკლი ხვედაგურიძემ იქაურობა არ გააცოცხლა. დღეს ბოჭორნას ჯერჯერობით ერთი მოსახლე ჰყავს.",
      en: "For many years, the picturesque Svaneti community of Ushguli was considered Europe’s highest inhabited settlement, known for its unique location and architectural landmarks—Svan towers. However, in recent years, the historic village of Bochorna, located in the stunning Gometsari Valley in Tusheti, Kakheti region, has been recognized as Europe’s highest settlement. \n\n The village of Bochorna is situated at 2,345 meters above sea level. According to a 1954 census, 25 households lived there permanently, engaging in agricultural activities. From 1980, the village was deserted and held the status of an abandoned settlement until 2014, when 76-year-old Irakli Khvedaguridze revitalized it. Today, Bochorna has just one resident.",
    },
    anotherDescription: {
      ka: "ამ პატარა ქვეყნის ყველაზე დაბალი ადგილი ზღვის დონიდან ქვემოთ 2 მეტრს აჭარბებს, ხოლო ყველაზე მაღალი მწვერვალი შხარა ზღვის დონიდან 5 203 მეტრია! ამდენად, საქართველოში ადამიანები ისტორიულად როგორც დაბლობში, ისე მაღალ მთაში ცხოვრობდნენ - ალპურ ზონაში არაერთი სოფელია გაშენებული, რომლებიც საუკუნეების განმავლობაში ყალიბდებოდნენ და დღემდე ინარჩუნებენ პირვანდელ სახეს თავისი არქიტექტურით, ცხოვრების წესით, ტრადიციებით, სამზარეულოთი და კულტურით.",
      en: "The lowest point in this small country is just over 2 meters below sea level, while the highest peak, Shkhara, stands at 5,203 meters above sea level! Thus, people in Georgia have historically lived both in lowlands and high mountains—numerous villages in the alpine zone have been established over centuries, preserving their original appearance with unique architecture, lifestyles, traditions, cuisine, and culture.",
    },
    imageSrc: "/why-georgia/svanuri-koshki.webp",
    alt: { ka: "მთები", en: "Mountains" },
  },
  {
    title: {
      ka: "ბოჭორნის ცხოვრება",
      en: "Life in Bochorna",
    },
    description: {
      ka: "სწორედ ამის შემდეგ აღიმართა სოფელში შესაბამისი ბანერიც, რომელზედაც აღნიშნულია, რომ ეს არის ევროპაში ყველაზე მაღალი დასახლებული პუნქტი. \n\n ბატონი ირაკლი თუშეთში ერთადერთი ექიმია, რომელიც პაციენტებთან ცხენით ან ფეხით დადის – ეს გაზაფხულიდან შემოდგომამდე, ხოლო ზამთარში, როდესაც ამ მხარეში თოვლის საფარი 2 მეტრს აღწევს, ხანდაზმული ექიმი ავადმყოფებთან მისასვლელად საკუთარი ხელით დამზადებულ თხილამურებს იყენებს. \n\n ბოჭორნის გარდა, მთათუშეთში დღეისათვის 52 სოფელია, რომელთაგან უმრავლესობა ზამთარში ხალხისგან იცლება. \n\n ევროპის ყველაზე მაღალ სოფელში კარგად არის შემორჩენილი რამდენიმე ციხე-კოშკი, თუშეთისთვის დამახასიათებელი არქიტექტურული ნიმუშები, რომლებიც საოცრად ერწყმის აქაურ მთიან რელიეფს. სოფელს შორიდან რომ შეხედავ, დარწმუნდები, რომ ის მარგალიტია ამ თვალწარმტაც ხეობაში, რომელიც ზამთარში - ქათქათა თოვლით, ხოლო ზაფხულში ხასხასა სიმწვანით იფარება. \n\n ბოჭორნიდან თუშეთის ცენტრალურ სოფლამდე, ომალომდე, მანძილი 12 კმ-ია, მუნიციპალურ ცენტრამდე, ქალაქ ახმეტამდე კი - 112 კილომეტრი. თუმცა ეს გზა, თავისი სირთულიდან გამომდინარე, სულ მცირე 4-საათიან მგზავრობას მოითხოვს. მიუხედავად გზის სირთულისა, თუშეთი ის ადგილია, რომელსაც აუცილებლად უნდა ეწვიო. და კიდევ ერთი, თუშეთი და სვანეთი ერთ ქედზე, დიდ კავკასიონზე მდებარეობს, მაგრამ ერთმანეთისგან ისე განსხვავდებიან, მათი ნახვის შემდეგ გრჩება შთაბეჭდილება, თითქოს ოდესღაც ღმერთებმა ამ ორი მხარის უზარმაზარი მთების „მშენებლობა“ სხვადასხვა არქიტექტორს დაავალეს.",
      en: "Following this, a banner was erected in the village, proclaiming it as Europe’s highest inhabited settlement. \n\n Mr. Irakli, the only doctor in Tusheti, visits patients on horseback or on foot from spring to autumn. In winter, when snow cover in the region reaches 2 meters, the elderly doctor uses handmade skis to reach his patients. \n\n Besides Bochorna, there are currently 52 villages in Greater Tusheti, most of which are deserted in winter. \n\n Europe’s highest village preserves several fortress towers, characteristic of Tusheti’s architectural style, which blend seamlessly with the mountainous terrain. From a distance, you’ll see that the village is a gem in this breathtaking valley, blanketed in pristine snow in winter and vibrant greenery in summer. \n\n The distance from Bochorna to Tusheti’s central village, Omalo, is 12 km, while the municipal center, Akhmeta, is 112 km away. However, due to the challenging terrain, this journey requires at least 4 hours. Despite the difficult roads, Tusheti is a must-visit destination. One more thing: Tusheti and Svaneti lie on the same Greater Caucasus range, yet they are so distinct that after visiting, you might feel as though the gods entrusted the construction of these regions’ massive mountains to different architects.",
    },
    imageSrc: "/why-georgia/pv-5267.webp",
    alt: { ka: "მდინარე", en: "River" },
  },
];

export const sections16: Section[] = [
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
      en: "Georgia is located at the crossroads of Europe and Asia, in the Caucasus, on the Black Sea coast. For centuries, it has served as a bridge between civilizations, and it was here that the ‘Silk Road’ passed—the world’s largest trade artery.",
    },
    buttonText: { ka: "გაიგე მეტი", en: "Learn More" },
    geographyOfGeorgia: [
      {
        image: "/why-georgia/towers-in-ushguli.webp",
        title: {
          ka: "ევროპის ყველაზე მაღალი დასახლებული პუნქტი საქართველოში",
          en: "Europe’s Highest Inhabited Settlement in Georgia",
        },
        description: {
          ka: "საქართველო ყოველმხრივ მრავალფეროვანია - ქვეყნის თითოეულ კუთხეში ერთმანეთისგან კარდინალურად განსხვავებულ რელიეფს, სამზარეულოს, კულტურასა და კლიმატს შეხვდები. გეოგრაფიულ მრავალფეროვნებაზე ყველაზე კარგად შემდეგი ფაქტი მეტყველებს:",
          en: "Georgia is diverse in every way—in each corner of the country, you’ll encounter radically different landscapes, cuisines, cultures, and climates. The following fact best illustrates this geographical diversity:",
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
        image: "/flags/bla2.webp",
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
    image: "/flags/doqi.png",
    geographyOfGeorgia: [
      {
        image: "/flags/image03.webp",
        title: {
          ka: "საქართველოს მაღალმთიანი სოფლები",
          en: "Georgia’s High-Altitude Villages",
        },
        description: {
          ka: "საქართველოს მაღალმთიანი სოფლები, როგორიცაა უშგული და ბოჭორნა, უნიკალური არქიტექტურითა და ცხოვრების წესით გამოირჩევა. ეს სოფლები, ზღვის დონიდან 2000 მეტრზე მაღლა, საუკუნეების განმავლობაში ინარჩუნებენ თავიანთ ტრადიციებსა და კულტურას. მზად ხარ, ეწვიო ამ მარგალიტებს?",
          en: "Georgia’s high-altitude villages, such as Ushguli and Bochorna, are distinguished by their unique architecture and way of life. Located over 2,000 meters above sea level, these villages have preserved their traditions and culture for centuries. Are you ready to visit these gems?",
        },
      },
    ],
  },
];

// ----------------------- start 17

export const sidebarItems17: { ka: string; en: string }[] = [
  { ka: "გაზაფხული", en: "Spring" },
  { ka: "ზაფხული", en: "Summer" },
  { ka: "შემოდგომა", en: "Autumn" },
  { ka: "ზამთარი", en: "Winter" },
];

export const contentItems17: ContentItem[] = [
  {
    title: { ka: "გაზაფხული", en: "Spring" },
    description: {
      ka: "გაზაფხულზე აქ მწვანედ აფეთქებული ბუნება სიცოცხლის ხელახალ დაბადებას ჰგავს. სხვადასხვაფრად აყვავებულ მთებსა და მინდვრებში უძველესი ისტორიულ-კულტურული ძეგლებიც სხვა ელფერს იძენს. \n\n ჯვრის მონასტრიდან მტკვრისა და არაგვის შესართავის ნახვა, სადაც უნიკალური სვეტიცხოველია აღმართული, ერთი სიამოვნებაა. შეგიძლია ესტუმრო კლდეში ნაკვეთ ქალაქებს: უფლისციხეს, ვარძიას, იმოგზაურო გარეჯის უდაბნოში და აღფრთოვანდე სამონასტრო კომპლექსების უნიკალური არქიტექტურით. გაგაოცებს გელათისა და ბაგრატის ტაძრების ფრესკები და ეს მხოლოდ მცირე ჩამონათვალია. საქართველოში 1000-ზე მეტი მნიშვნელოვანი ისტორიული ძეგლია, თუმცა გაზაფხულზე სულ სხვა სიამოვნებაა საქართველოს ბუნებაში მოგზაურობა, ფოთლოვან, წიწვოვან, ალპურ თუ ტროპიკულ ტყეებში. გვიან გაზაფხულზე ქართლისა და სამცხის ველებზე სოსანები ყვავიან. 90-ზე მეტი ტბისა და 60-ამდე ჩანჩქერის ნახვა კი ლაშქრობების მოყვარულებისთვის ნამდვილი თავგადასავალია.",
      en: "In spring, the lush green explosion of nature feels like a rebirth of life. The ancient historical and cultural monuments among the blooming mountains and fields take on a new charm. \n\n Viewing the confluence of the Mtkvari and Aragvi rivers from Jvari Monastery, where the unique Svetitskhoveli Cathedral stands, is a true delight. You can visit rock-hewn cities like Uplistsikhe and Vardzia, travel to the David Gareji desert, and marvel at the unique architecture of its monastic complexes. The frescoes of Gelati and Bagrati Cathedrals will astonish you, and this is just a small list. Georgia boasts over 1,000 significant historical monuments, but spring offers a special joy in exploring its nature—deciduous, coniferous, alpine, or tropical forests. In late spring, poppies bloom across the fields of Kartli and Samtskhe. Visiting over 90 lakes and nearly 60 waterfalls is a true adventure for hiking enthusiasts.",
    },
    anotherDescription: {
      ka: "უკვე გადაწყვეტილი გაქვს საქართველოში ჩამოსვლა, მაგრამ ამ სურვილს წელიწადის დრო ვერ მოარგე? არ ინერვიულო - ეს პრობლემა სულაც არაა. საქართველო ის ქვეყანაა, სადაც გაზაფხულზეც, ზაფხულშიც, შემოდგომაზეც და ზამთარშიც ერთნაირად საინტერესო და დასამახსოვრებელ დროს გაატარებ.",
      en: "Have you decided to visit Georgia but can’t align your plans with the season? Don’t worry—this isn’t a problem at all. Georgia is a country where spring, summer, autumn, and winter offer equally exciting and memorable experiences.",
    },
    imageSrc: "/why-georgia/bakuriani-in spring.webp",
    alt: { ka: "გაზაფხულის პეიზაჟი", en: "Spring landscape" },
  },
  {
    title: { ka: "ზაფხული", en: "Summer" },
    description: {
      ka: "საქართველოს ისტორიული ძეგლებითა და ბუნებით ტკბობა ზაფხულის ცხელ დღეებშიც დაუვიწყარია, თუმცა არის ადგილები, სადაც მოგზაურობა სეზონის ამ დროს კიდევ უფრო სასიამოვნოა. ამ პერიოდში უნდა ესტუმრო საქართველოს მაღალმთიან რეგიონებს - სვანეთს, თუშეთს, ხევსურეთს, ზემო აჭარას და ა.შ. \n\n დალაშქრე ყაზბეგი (მყინვარწვერი), უშბა და თეთნულდი, Ჩადი სათაფლიაში, პრომეთეს, თეთრას და სხვა მღვიმეებში. საქართველოში 30-ამდე  მღვიმე და გამოქვაბულია, 26 ათასზე მეტი მდინარეა და ბევრი მათგანი ჯომარდობისთვის არის შესაფერისი. წელიწადის ამ დროს კაიაკინგითაც შეგიძლია დაკავდე. ასე რომ, გასართობი ბევრია. \n\n ზაფხულში აუცილებლად უნდა ესტუმრო შავიზღვისპირეთს, სადაც ყველა გემოვნების დამსვენებლისთვის არის კურორტები. აქ ბავშვებთან ერთადაც დაისვენებ და მჩქეფარე არდადეგებსაც მოიწყობ. ზაფხული საქართველოში ფესტივალების სეზონია და ზღვისპირა ქალაქები ამითაც გამორჩეულია.",
      en: "Enjoying Georgia’s historical monuments and nature in the hot summer days is unforgettable, but some places are even more enjoyable during this season. You should visit Georgia’s highland regions—Svaneti, Tusheti, Khevsureti, Upper Adjara, and more. \n\n Conquer Kazbegi (Gergeti), Ushba, and Tetnuldi, or explore Sataplia, Prometheus, Tetra, and other caves. Georgia has nearly 30 caves and caverns and over 26,000 rivers, many suitable for rafting. Summer is also perfect for kayaking, offering plenty of entertainment. \n\n A must-visit in summer is the Black Sea coast, with resorts for every taste. Relax with kids or enjoy vibrant holidays. Summer in Georgia is festival season, and coastal cities stand out for this.",
    },
    imageSrc: "/why-georgia/summer-in-georgia-country.webp",
    alt: { ka: "ზაფხულის პეიზაჟი", en: "Summer landscape" },
  },
  {
    title: { ka: "შემოდგომა", en: "Autumn" },
    description: {
      ka: "შემოდგომა საქართველოში განსაკუთრებულია. წითელ-ყვითელ ფერებად აჭრელებული ქართული მთები თუ ბარი შეუდარებელია. აქ შემოდგომაზეც სასიამოვნო ტემპერატურაა, ამიტომ წელიწადის ამ დროსაც შეგიძლია იმოგზაურო სხვადასხვა კუთხესა და ქალაქში, ტყეებში, ტბებზე, ჩანჩქერებზე, მღვიმეებსა თუ გამოქვაბულებში. \n\n თუმცა შემოდგომაზე საქართველო უნიკალურია ბარაქის შეგრძნებით. ამ დროს ქვეყნის რომელ კუთხეშიც არ უნდა იყო, აუცილებლად უნდა წახვიდე რთველში, საკუთარი ხელით მოწყვიტო მწიფე მტევანი, საწნახელში მოათავსო, დაწურო, მაჭარი დააგემოვნო და მერე, თუ თათარაობასა და ჩურჩხელის ამოვლების რიტუალსაც დაესწრები, ჩათვალე, რომ ეს შემოდგომა აღარასდროს დაგავიწყდება.",
      en: "Autumn in Georgia is exceptional. The red and yellow hues of Georgian mountains and plains are unmatched. With pleasant temperatures, you can travel to various regions and cities, forests, lakes, waterfalls, caves, or caverns during this season. \n\n However, autumn in Georgia is unique for its sense of abundance. Wherever you are, you must join the rtveli (grape harvest), pick ripe grapes by hand, press them in a winepress, taste the fresh must, and if you witness the rituals of making tatar and churchkhela, this autumn will be unforgettable.",
    },
    imageSrc: "/why-georgia/autumn-in-georgia.webp",
    alt: { ka: "შემოდგომის პეიზაჟი", en: "Autumn landscape" },
  },
  {
    title: { ka: "ზამთარი", en: "Winter" },
    description: {
      ka: "ზამთარი საქართველოში უხვთოვლიანობითა და სუსხიანი ქარით არ გამოირჩევა, ამიტომ მოგზაურობისთვის ესეც შესანიშნავი პერიოდია. \n\n სამაგიეროდ, თოვლი არ აკლია ზამთრის კურორტებს - ეწვიე გუდაურის, მესტიის, ბაკურიანის, გოდერძის ევროპული სტანდარტების კურორტებს, სადაც სრიალს ტრასებზეც შეძლებ და გაუკვალავ თოვლშიც, მოიწყობ გასეირნებას სნოუბორდით, სკიტურს, ჰელისკის და პარაპლანით ფრენასაც შეძლებ. ეს თავგადასავლების მთელი სამყაროა. \n\n ყველა კურორტზე იმართება შეჯიბრებები და ტურნირები, რომელთა მონაწილე შენც შეგიძლია გახდე. და ყველაფერ ზემოთქმულს უგემრიელესი ქართული სამზარეულოც დაუმატე, რომელიც ყველა სეზონზე უკვე ცალკე, გასტრონომიული თავგადასავალი იქნება.",
      en: "Winter in Georgia isn’t marked by heavy snowfalls or biting winds, making it an excellent time for travel. \n\n However, snow abounds at winter resorts—visit Gudauri, Mestia, Bakuriani, and Goderdzi, which meet European standards. Ski on groomed trails or untouched snow, enjoy snowboarding, ski touring, heli-skiing, or paragliding. It’s a world of adventure. \n\n Competitions and tournaments are held at all resorts, and you can join in. Add to this the delicious Georgian cuisine, which is a gastronomic adventure in every season.",
    },
    imageSrc: "/why-georgia/winter-adventures-in-georgia.webp",
    alt: { ka: "ზამთრის პეიზაჟი", en: "Winter landscape" },
  },
];

export const sections17: Section[] = [
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
      en: "Georgia is located at the crossroads of Europe and Asia, in the Caucasus, on the Black Sea coast. For centuries, it has served as a bridge between civilizations, and it was here that the ‘Silk Road’ passed—the world’s largest trade artery.",
    },
    buttonText: { ka: "გაიგე მეტი", en: "Learn More" },
    geographyOfGeorgia: [
      {
        image: "/why-georgia/weather-and-seasonality.webp",
        title: { ka: "სეზონურობა საქართველოში", en: "Seasonality in Georgia" },
        description: {
          ka: "უკვე იცი, რომ ევროპისა და აზიის გზაგასაყარზე, კავკასიონის ქედის ქვეშ, შავი ზღვის სანაპიროზე მდებარეობს პატარა ქვეყანა - საქართველო, რომელიც მდიდარი ისტორიის, არაჩვეულებრივი ბუნების, თავგადასავლების დიდი შესაძლებლობებისა და უგემრიელესი სამზარეულოს ქვეყანაა!",
          en: "You already know that at the crossroads of Europe and Asia, beneath the Caucasus Mountains, on the Black Sea coast, lies a small country—Georgia, a land of rich history, extraordinary nature, great opportunities for adventure, and delicious cuisine!",
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
        image: "/flags/bla2.webp",
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
    image: "/flags/doqi.png",
    geographyOfGeorgia: [
      {
        image: "/flags/image03.webp",
        title: {
          ka: "საქართველოს სეზონური მრავალფეროვნება",
          en: "Georgia’s Seasonal Diversity",
        },
        description: {
          ka: "საქართველოს თითოეული სეზონი განსაკუთრებულ გამოცდილებას გვთავაზობს: გაზაფხულის მწვანე აფეთქება, ზაფხულის თავგადასავლები მაღალ მთებში და ზღვისპირა ფესტივალები, შემოდგომის ფერადი ხედები და რთველი, ზამთრის სათხილამურო კურორტები. მზად ხარ, გამოსცადო ეს მრავალფეროვნება?",
          en: "Each season in Georgia offers a unique experience: the green explosion of spring, summer adventures in high mountains and coastal festivals, autumn’s colorful views and grape harvest, and winter’s ski resorts. Are you ready to explore this diversity?",
        },
      },
    ],
  },
];

// ------------------------------- start 18

export const sidebarItems18: { ka: string; en: string }[] = [
  { ka: "გაზაფხული", en: "Spring" },
  { ka: "ზაფხული", en: "Summer" },
  { ka: "შემოდგომა", en: "Autumn" },
  { ka: "ზამთარი", en: "Winter" },
];

export const contentItems18: ContentItem[] = [
  {
    title: { ka: "გაზაფხული", en: "Spring" },
    description: {
      ka: "გაზაფხულზე აქ მწვანედ აფეთქებული ბუნება სიცოცხლის ხელახალ დაბადებას ჰგავს. სხვადასხვაფრად აყვავებულ მთებსა და მინდვრებში უძველესი ისტორიულ-კულტურული ძეგლებიც სხვა ელფერს იძენს. \n\n ჯვრის მონასტრიდან მტკვრისა და არაგვის შესართავის ნახვა, სადაც უნიკალური სვეტიცხოველია აღმართული, ერთი სიამოვნებაა. შეგიძლია ესტუმრო კლდეში ნაკვეთ ქალაქებს: უფლისციხეს, ვარძიას, იმოგზაურო გარეჯის უდაბნოში და აღფრთოვანდე სამონასტრო კომპლექსების უნიკალური არქიტექტურით. გაგაოცებს გელათისა და ბაგრატის ტაძრების ფრესკები და ეს მხოლოდ მცირე ჩამონათვალია. საქართველოში 1000-ზე მეტი მნიშვნელოვანი ისტორიული ძეგლია, თუმცა გაზაფხულზე სულ სხვა სიამოვნებაა საქართველოს ბუნებაში მოგზაურობა, ფოთლოვან, წიწვოვან, ალპურ თუ ტროპიკულ ტყეებში. გვიან გაზაფხულზე ქართლისა და სამცხის ველებზე სოსანები ყვავიან. 90-ზე მეტი ტბისა და 60-ამდე ჩანჩქერის ნახვა კი ლაშქრობების მოყვარულებისთვის ნამდვილი თავგადასავალია.",
      en: "In spring, the lush green explosion of nature feels like a rebirth of life. The ancient historical and cultural monuments among the blooming mountains and fields take on a new charm. \n\n Viewing the confluence of the Mtkvari and Aragvi rivers from Jvari Monastery, where the unique Svetitskhoveli Cathedral stands, is a true delight. You can visit rock-hewn cities like Uplistsikhe and Vardzia, travel to the David Gareji desert, and marvel at the unique architecture of its monastic complexes. The frescoes of Gelati and Bagrati Cathedrals will astonish you, and this is just a small list. Georgia boasts over 1,000 significant historical monuments, but spring offers a special joy in exploring its nature—deciduous, coniferous, alpine, or tropical forests. In late spring, poppies bloom across the fields of Kartli and Samtskhe. Visiting over 90 lakes and nearly 60 waterfalls is a true adventure for hiking enthusiasts.",
    },
    anotherDescription: {
      ka: "უკვე გადაწყვეტილი გაქვს საქართველოში ჩამოსვლა, მაგრამ ამ სურვილს წელიწადის დრო ვერ მოარგე? არ ინერვიულო - ეს პრობლემა სულაც არაა. საქართველო ის ქვეყანაა, სადაც გაზაფხულზეც, ზაფხულშიც, შემოდგომაზეც და ზამთარშიც ერთნაირად საინტერესო და დასამახსოვრებელ დროს გაატარებ.",
      en: "Have you decided to visit Georgia but can’t align your plans with the season? Don’t worry—this isn’t a problem at all. Georgia is a country where spring, summer, autumn, and winter offer equally exciting and memorable experiences.",
    },
    imageSrc: "/why-georgia/bakuriani-in spring.webp",
    alt: { ka: "გაზაფხულის პეიზაჟი", en: "Spring landscape" },
  },
  {
    title: { ka: "ზაფხული", en: "Summer" },
    description: {
      ka: "საქართველოს ისტორიული ძეგლებითა და ბუნებით ტკბობა ზაფხულის ცხელ დღეებშიც დაუვიწყარია, თუმცა არის ადგილები, სადაც მოგზაურობა სეზონის ამ დროს კიდევ უფრო სასიამოვნოა. ამ პერიოდში უნდა ესტუმრო საქართველოს მაღალმთიან რეგიონებს - სვანეთს, თუშეთს, ხევსურეთს, ზემო აჭარას და ა.შ. \n\n დალაშქრე ყაზბეგი (მყინვარწვერი), უშბა და თეთნულდი, Ჩადი სათაფლიაში, პრომეთეს, თეთრას და სხვა მღვიმეებში. საქართველოში 30-ამდე  მღვიმე და გამოქვაბულია, 26 ათასზე მეტი მდინარეა და ბევრი მათგანი ჯომარდობისთვის არის შესაფერისი. წელიწადის ამ დროს კაიაკინგითაც შეგიძლია დაკავდე. ასე რომ, გასართობი ბევრია. \n\n ზაფხულში აუცილებლად უნდა ესტუმრო შავიზღვისპირეთს, სადაც ყველა გემოვნების დამსვენებლისთვის არის კურორტები. აქ ბავშვებთან ერთადაც დაისვენებ და მჩქეფარე არდადეგებსაც მოიწყობ. ზაფხული საქართველოში ფესტივალების სეზონია და ზღვისპირა ქალაქები ამითაც გამორჩეულია.",
      en: "Enjoying Georgia’s historical monuments and nature in the hot summer days is unforgettable, but some places are even more enjoyable during this season. You should visit Georgia’s highland regions—Svaneti, Tusheti, Khevsureti, Upper Adjara, and more. \n\n Conquer Kazbegi (Gergeti), Ushba, and Tetnuldi, or explore Sataplia, Prometheus, Tetra, and other caves. Georgia has nearly 30 caves and caverns and over 26,000 rivers, many suitable for rafting. Summer is also perfect for kayaking, offering plenty of entertainment. \n\n A must-visit in summer is the Black Sea coast, with resorts for every taste. Relax with kids or enjoy vibrant holidays. Summer in Georgia is festival season, and coastal cities stand out for this.",
    },
    imageSrc: "/why-georgia/summer-in-georgia-country.webp",
    alt: { ka: "ზაფხულის პეიზაჟი", en: "Summer landscape" },
  },
  {
    title: { ka: "შემოდგომა", en: "Autumn" },
    description: {
      ka: "შემოდგომა საქართველოში განსაკუთრებულია. წითელ-ყვითელ ფერებად აჭრელებული ქართული მთები თუ ბარი შეუდარებელია. აქ შემოდგომაზეც სასიამოვნო ტემპერატურაა, ამიტომ წელიწადის ამ დროსაც შეგიძლია იმოგზაურო სხვადასხვა კუთხესა და ქალაქში, ტყეებში, ტბებზე, ჩანჩქერებზე, მღვიმეებსა თუ გამოქვაბულებში. \n\n თუმცა შემოდგომაზე საქართველო უნიკალურია ბარაქის შეგრძნებით. ამ დროს ქვეყნის რომელ კუთხეშიც არ უნდა იყო, აუცილებლად უნდა წახვიდე რთველში, საკუთარი ხელით მოწყვიტო მწიფე მტევანი, საწნახელში მოათავსო, დაწურო, მაჭარი დააგემოვნო და მერე, თუ თათარაობასა და ჩურჩხელის ამოვლების რიტუალსაც დაესწრები, ჩათვალე, რომ ეს შემოდგომა აღარასდროს დაგავიწყდება.",
      en: "Autumn in Georgia is exceptional. The red and yellow hues of Georgian mountains and plains are unmatched. With pleasant temperatures, you can travel to various regions and cities, forests, lakes, waterfalls, caves, or caverns during this season. \n\n However, autumn in Georgia is unique for its sense of abundance. Wherever you are, you must join the rtveli (grape harvest), pick ripe grapes by hand, press them in a winepress, taste the fresh must, and if you witness the rituals of making tatar and churchkhela, this autumn will be unforgettable.",
    },
    imageSrc: "/why-georgia/autumn-in-georgia.webp",
    alt: { ka: "შემოდგომის პეიზაჟი", en: "Autumn landscape" },
  },
  {
    title: { ka: "ზამთარი", en: "Winter" },
    description: {
      ka: "ზამთარი საქართველოში უხვთოვლიანობითა და სუსხიანი ქარით არ გამოირჩევა, ამიტომ მოგზაურობისთვის ესეც შესანიშნავი პერიოდია. \n\n სამაგიეროდ, თოვლი არ აკლია ზამთრის კურორტებს - ეწვიე გუდაურის, მესტიის, ბაკურიანის, გოდერძის ევროპული სტანდარტების კურორტებს, სადაც სრიალს ტრასებზეც შეძლებ და გაუკვალავ თოვლშიც, მოიწყობ გასეირნებას სნოუბორდით, სკიტურს, ჰელისკის და პარაპლანით ფრენასაც შეძლებ. ეს თავგადასავლების მთელი სამყაროა. \n\n ყველა კურორტზე იმართება შეჯიბრებები და ტურნირები, რომელთა მონაწილე შენც შეგიძლია გახდე. და ყველაფერ ზემოთქმულს უგემრიელესი ქართული სამზარეულოც დაუმატე, რომელიც ყველა სეზონზე უკვე ცალკე, გასტრონომიული თავგადასავალი იქნება.",
      en: "Winter in Georgia isn’t marked by heavy snowfalls or biting winds, making it an excellent time for travel. \n\n However, snow abounds at winter resorts—visit Gudauri, Mestia, Bakuriani, and Goderdzi, which meet European standards. Ski on groomed trails or untouched snow, enjoy snowboarding, ski touring, heli-skiing, or paragliding. It’s a world of adventure. \n\n Competitions and tournaments are held at all resorts, and you can join in. Add to this the delicious Georgian cuisine, which is a gastronomic adventure in every season.",
    },
    imageSrc: "/why-georgia/winter-adventures-in-georgia.webp",
    alt: { ka: "ზამთრის პეიზაჟი", en: "Winter landscape" },
  },
];

export const sections18: Section[] = [
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
      en: "Georgia is located at the crossroads of Europe and Asia, in the Caucasus, on the Black Sea coast. For centuries, it has served as a bridge between civilizations, and it was here that the ‘Silk Road’ passed—the world’s largest trade artery.",
    },
    buttonText: { ka: "გაიგე მეტი", en: "Learn More" },
    geographyOfGeorgia: [
      {
        image: "/why-georgia/georgia-europe-georgraphy.webp",
        title: { ka: "საქართველოს გეოგრაფია", en: "Geography of Georgia" },
        description: {
          ka: "საქართველო პატარა, ლამაზი ქვეყანაა, მრავალფეროვანი ბუნებითა და რბილი კლიმატით, რასაც საინტერესო გეოგრაფიული მდებარეობა განაპირობებს. ჩრდილოეთიდან და სამხრეთიდან ოროგრაფიული საზღვრები იცავს – ჩრდილოეთით დიდი კავკასიონის ქედი თავისი მყინვარებით.",
          en: "Georgia is a small, beautiful country with diverse nature and a mild climate, shaped by its fascinating geographical location. It is protected by orographic borders— the Greater Caucasus range with its glaciers in the north.",
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
        image: "/flags/bla2.webp",
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
    image: "/flags/doqi.png",
    geographyOfGeorgia: [
      {
        image: "/flags/image03.webp",
        title: {
          ka: "საქართველოს სეზონური მრავალფეროვნება",
          en: "Georgia’s Seasonal Diversity",
        },
        description: {
          ka: "საქართველოს თითოეული სეზონი განსაკუთრებულ გამოცდილებას გვთავაზობს: გაზაფხულის მწვანე აფეთქება, ზაფხულის თავგადასავლები მაღალ მთებში და ზღვისპირა ფესტივალები, შემოდგომის ფერადი ხედები და რთველი, ზამთრის სათხილამურო კურორტები. მზად ხარ, გამოსცადო ეს მრავალფეროვნება?",
          en: "Each season in Georgia offers a unique experience: the green explosion of spring, summer adventures in high mountains and coastal festivals, autumn’s colorful views and grape harvest, and winter’s ski resorts. Are you ready to explore this diversity?",
        },
      },
    ],
  },
];
