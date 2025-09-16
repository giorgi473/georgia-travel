export interface RegionTime {
  city: string;
  time: string;
}
export interface AnotherSection {
  name1: string;
  description: string;
  image: string | string[];
  name2: string;
  name3: string;
  image2: string | string[];
  description2: string;
  description3: string;
  name4: string;
  name5: string;
  description4: string;
  description5: string;
}
export interface WorkingHours {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

export interface RangeItem {
  min?: string;
  max?: string;
}

export interface Destination {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  activities: string;
  currency: string;
}

export interface ArrayItem {
  image: string;
  header: string;
  text?: string;
  title?: string;
  description?: string;
}

export interface SlideCard {
  title: string;
  src?: string;
  modalSrc: string;
  additionalDescription: string;
  text?: string;
  region: string;
  city: string;
  name: string;
  address: string;
  phone: string;
  website: string;
  workingHours: WorkingHours;
}

export interface UkrGeoCharm {
  name: string;
  title?: string;
  image: string;
}

export interface Card {
  title: string;
  src: string;
  additionalDescription: string;
  region: string;
  city: string;
  link: string;
  description: string;
  name: string;
  address: string;
  phone: string;
  website: string;
  workingHours: WorkingHours;
  regionTime: RegionTime[];
  anotherSection: AnotherSection;
  range: RangeItem[];
  destinations: Destination[];
  array: ArrayItem[];
  slideCard: SlideCard[];
  ukrGeoCharm: UkrGeoCharm[];
}
export const cardSliderImages: Card[] = [
  // 0 index
  {
    title: "ქუთაისი",
    src: "/places/kutaisi-gnta.webp",
    additionalDescription:
      "ქუთაისი ქრისტეს შობამდე 1400 წლით ადრე დაარსდა და ის მსოფლიოს ერთ-ერთი უძველესი ქალაქია. იგი საოცარი იუმორის, სითბოსა და სიყვარულის ადგილია. ამას ამბობს ყველა, ვისაც აქ ერთხელ მაინც უმოგზაურია.",
    region: "თბილისი",
    city: "3434",
    link: "https://www.google.com/maps/place/%E1%83%A5%E1%83%A3%E1%83%97%E1%83%90%E1%83%98%E1%83%A1%E1%83%98/@42.2547004,42.700487,14z/data=!3m1!4b1!4m5!3m4!1s0x405c8ce30e54af2d:0xfbec41b2d626656f!8m2!3d42.2662428!4d42.7180019?shorturl=1",
    description: "ბუნების ძეგლები",
    name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
    address: "FG4G+7XV, Окаце, საქართველო",
    phone: "595 03 60 47",
    website:
      "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
    workingHours: {
      monday: "10:00 AM – 5:30 PM",
      tuesday: "10:00 AM – 5:30 PM",
      wednesday: "10:00 AM – 5:30 PM",
      thursday: "10:00 AM – 5:30 PM",
      friday: "10:00 AM – 5:30 PM",
      saturday: "10:00 AM – 5:30 PM",
      sunday: "10:00 AM – 5:30 PM",
    },
    regionTime: [
      {
        city: "მესტია",
        time: "02:24სთ",
      },
      {
        city: "ბათუმი",
        time: "02:24სთ",
      },
      {
        city: "თბილისი",
        time: "02:24სთ",
      },
    ],
    anotherSection: {
      name1: "ქუთაისის ისტორია",
      description:
        "ქუთაისსა და მის შემოგარენში ადამიანი ქვედა პალეოლითის ხანიდან ცხოვრობდა. აქ აღმოჩენილია დინოზავრის ნაკვალევი და „ოქროს საწმისის“ მაძიებელი „არგონავტების“ კვალიც კი ამ ქალაქში მოდის. \n\n საუკუნეების განმავლობაში ქუთაისი ქვეყნის კულტურული და პოლიტიკური ცენტრი იყო, VIII საუკუნიდან XI საუკუნემდე კი - საქართველოს დედაქალაქი. \n\n სახელი „ქუთაისი“ სამი სიტყვისგან შედგება: ქვა, მთა და ისი - ქალაქი ქვასა და მთას შორის. განსხვავებულ ეპოქებში მას სხვადასხვა სახელით მოიხსენიებდნენ - აია, ქუთაია და ქუთათისიუმი.",
      image: "/places/2(3).webp",
      name2: "ქუთაისის ღირსშესანიშნაობები",
      name3: "",
      image2: "/places/9.webp",
      description2:
        "ქუთაისში საუკუნე-ნახევარზე მეტი ხნის ბაღს - ბულვარს შეხვდები, რომელიც ქალაქის ცენტრალურ მოედანს უერთდება. დიდ ქართველ პოეტს, აკაკი წერეთელს ბულვარისთვის „ქუთაისის პარლამენტი“ უწოდებია, რადგან ინტელიგენცია აქ მნიშვნელოვან საკითხებზე სამსჯელოდ იკრიბებოდა. ტრადიცია დღესაც გრძელდება. \n\n აქვე, მოედანზე კოლხური შადრევანი დაგხვდება, რომელიც გაფორმებულია საქართველოში ვანის გათხრებისას აღმოჩენილი არტეფაქტების შესატყვისი 30 მოოქროვილი ფიგურით.",
      description3:
        "ასევე უნდა ნახო ქუთაისის დრამატული თეატ Hawkinsეატრის უნიკალური შენობა, რომელსაც ეროვნული კულტურის ძეგლის სტატუსი აქვს მინიჭებული. \n\n აღსანიშნავია, რომ ბულვარის ბოლოში ქუთაისის ოპერისა და ბალეტის თეატრი დგას, რომლის სახურავზეც ქუთაისელი მოქანდაკის მიერ გაკეთებულ 13 რომაულ ფიგურას შენიშნავ. შედარებით ქვევით, მდინარე რიონის პირზე, იმერეთის მეფეთა რეზიდენცია „ოქროს ჩარდახია“; მაღლა, გორაზე, 1003 წელს ერთიანი საქართველოს სიმბოლოდ აგებული ბაგრატის ტაძარი მოჩანს. ისინი აუცილებლად უნდა იხილო, ისევე, როგორც UNESCO-ს მსოფლიო მემკვიდრეობის ძეგლი - გელათის სამონასტრო კომპლექსი და მოწამეთას არაჩვეულებრივი მონასტერი, რომლებთანაც ზამთარ-ზაფხულ წითელი მდინარე ჩამოედინება.",
      name4: "",
      name5: "",
      description4:
        "როდესაც ამ ქალაქში მოხვდები აუცილებლად ეწვიე ქალაქის უბნებს, შეიარე ბოტანიკურ ბაღში და რიონის სიოსაც მიეგებე - ქუთაისის უძველეს „ჯაჭვის ხიდზე“, 1872 წელს საფრანგეთში დაპროექტებულ „თეთრ ხიდზე“ და „წითელ ხიდზე“, რომელიც პირველი რკინისგან აგებული ხიდია მთელ ამიერკავკასიაში. ამ ხიდებიდან რიონის კალაპოტში წამოწოლილ თეთრ ქვებს გადახედე. სწორედ ამ დროს მიხვდები თუ როგორი ქალაქია ქუთაისი, რომელიც თავის მკვიდრ ღვაწლმოსილ ფოტოგრაფს ძეგლს უდგამს.",
      description5: "",
    },
    range: [{ min: "30" }, { max: "3" }],
    destinations: [
      {
        id: "1",
        title: "ერთდღიანი ტური ქუთაისში",
        description:
          "ამ ერთდღიანი ტურის ფარგლებში, უდიდესი ისტორიული და კულტურული მნიშვნელობის ხუროთმოძღვრების ძეგლს - გეთალის მონასტერს იხილავ, იმერეთის სიმწვანეში ჩაფლულ ბუნებას დაათვალიერებ და უნიკალური გამოცდილების მისაღებად, მოწამეთას სამონასტრო კომპექსსაც ესტუმრები.",
        image: "/places/kutaisi-view-with-birds.webp",
        duration: "30კმ",
        activities: "12 სანახაობა",
        currency: "30კმ",
      },
      {
        id: "2",
        title: "კანიონების ერთდღიანი ტური",
        description:
          "აღმოაჩინე დასავლეთ საქართველოს გეოგრაფიური და ბიოლოგიური მრავალფეროვნება, მოიარე ულამაზესი ოკაცესა და მარტვილის კანიონი და იხილე ძირძველი კულტურის მშვენიერი დანატოვარი - მარტვილის მონასტერი. ტურის ფარგლებში ასევე შეხვდები სახლინოს რეზიდენციას და საუკეთესო შთაბეჭდილებებით აივსები.",
        image: "/places/martvili-canyon.webp",
        duration: "8-12სთ",
        activities: "18 სანახაობა 3 აქტივობა",
        currency: "100კმ",
      },
    ],
    array: [
      {
        image: "/places/khachapuri-gnta.webp",
        header: "იმერული ხაჭაპური",
        title: "დააგემოვნე",
        text: "მრავალფეროვანი ქართული კერძები",
        description:
          "იმერული სამზარეულო განსაკუთრებულია არა მხოლოდ საქართველოში, არამედ მთელ კავკასიაში. აქ მთავარი კერძი იმერული ხაჭაპურია, რომლის საიდუმლოც იმერულ ყველშია. ეს მხარე ვეგეტარიანული კერძების მრავალფეროვნებითაც გამოირჩევა: ნიგვზიანი ფხალი, იმერული ლობიო… თუმცა იმერელი დიასახლისები ხორცით მომზადებული კერძების ოსტატებიც არიან: საცივის იმერული ვერსია, რომელიც ქათმის ხორცისგან მზადდება, ახალი წლის მთავარი კერძია",
      },
      {
        image: "/places/imeruli-cheese-gnta.webp",
        header: "იმერული ყველი",
      },
    ],
    slideCard: [
      {
        title: "პრომეთეს მღვიმე",
        src: "/slidecard/prometheus-cave-gnta.webp",
        modalSrc: "/slidecard/prometheus-cave-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        text: "აღმოაჩინე პოპულალური სანახაობები",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "დათვის ტბა - ბუნების ძეგლი ოააცეს კანიონში",
        src: "/slidecard/datvi-lake-gnta.webp",
        modalSrc: "/slidecard/datvi-lake-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "კინჩხის (ოკაცეს) ჩანჩქერი - ხონის ბუნებრივი ძეგლი",
        src: "/slidecard/kinchkha-waterfall-gnta.webp",
        modalSrc: "/slidecard/kinchkha-waterfall-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "ხონის მხარეთმცოდნეობის მუზეუმი",
        src: "/slidecard/khoni-museum-of-local-lore.webp",
        modalSrc: "/slidecard/khoni-museum-of-local-lore.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "სასტუმრო პრომეთე",
        src: "/slidecard/hotel-prometheus-gnta.webp",
        modalSrc: "/slidecard/hotel-prometheus-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "ლომინას ტბა",
        src: "/slidecard/lomina-gnta.webp",
        modalSrc: "/slidecard/lomina-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "ბღერის მღვიმე",
        src: "/slidecard/bgheri-cave-natural-monument.webp",
        modalSrc: "/slidecard/bgheri-cave-natural-monument.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
    ],
    ukrGeoCharm: [
      {
        title: "აღმოაჩინე",
        name: "კულტუული ძეგლები",
        image: "/places/tower-of-ushguli.webp",
      },
      {
        name: "ხელოვნება და კულტურა",
        image: "/places/arts-and-culture-in-georgia.webp",
      },
      {
        name: "სამზარეულო და ღვინო",
        image: "/places/food-and-wine-georgia.webp",
      },
    ],
  },

  // 1 index

  {
    title: "ბათუმი",
    src: "/places/batumi-gnta.webp",
    additionalDescription:
      "ბათუმი ასეთად ამერიკის სტუმარმასპინძლობის მეცნიერების აკადემიამ ჯერ კიდევ 2012 წელს აღიარა, ჟურნალმა Forbes-მა კი „ხავერდოვან სეზონზე“ დასასვენებელი საუკეთესო კურორტების ხუთეულში შეიყვანა.  „ხავერდოვანი სეზონი“ ზღვაზე დასასვენებლად საუკეთესოდ მიიჩნევა, მაგრამ ბათუმი წელიწადის ნებისმიერ დროს გამორჩეულად გიმასპინძლებს - საქმიანი ვიზიტით ესტუმრები თუ დასასვენებლად, მარტო, მეგობრებთან თუ ოჯახთან ერთად, დიდი ხნით თუ მხოლოდ „უიკენდზე“.",
    region: "თბილისი",
    city: "3434",
    link: "https://www.google.com/maps/place/%E1%83%91%E1%83%90%E1%83%97%E1%83%A3%E1%83%9B%E1%83%98/@41.6240067,41.6525937,12z/data=!3m1!4b1!4m6!3m5!1s0x406786304ea2d221:0x7a3053a9e12ea967!8m2!3d41.6460978!4d41.6404899!16zL20vMGMyNmc?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D",
    description: "ბუნების ძეგლები",
    name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
    address: "FG4G+7XV, Окаце, საქართველო",
    phone: "595 03 60 47",
    website:
      "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
    workingHours: {
      monday: "10:00 AM – 5:30 PM",
      tuesday: "10:00 AM – 5:30 PM",
      wednesday: "10:00 AM – 5:30 PM",
      thursday: "10:00 AM – 5:30 PM",
      friday: "10:00 AM – 5:30 PM",
      saturday: "10:00 AM – 5:30 PM",
      sunday: "10:00 AM – 5:30 PM",
    },
    regionTime: [
      {
        city: "თბილისი",
        time: "5:30 სთ",
      },
      {
        city: "ქუთაისი",
        time: "2:15 სთ",
      },
      {
        city: "მესტია",
        time: "5:45 სთ",
      },
    ],
    anotherSection: {
      name1: "სად მდებარეობს ბათუმი?",
      description:
        "ბათუმი აჭარის ავტონომიური რესპუბლიკის ადმინისტრაციული ცენტრია და შავი ზღვის სამხრეთ-აღმოსავლეთ სანაპიროს მსხვილი საერთაშორისო ნავსადგური. \n\n ბათუმი დედაქალაქიდან 350 კმ-ში, დასავლეთ საქართველოში მდებარეობს და იქ მოხვედრა ევროპიდან თუ აზიიდან საჰაერო, სახმელეთო და საზღვაო ტრანსპორტითაა შესაძლებელი.  ",
      image: "/places/alphabetic-tower-batumi-1.webp",
      name2: "ბათუმის ღირსშესანიშნაობები",
      name3: "ბათუმის პოპულარული აქტივობები",
      image2: "/places/batumi-dolphinarium-gnta.webp",
      description2:
        "ბათუმი ცნობილია თავისი უძველესი პორტით, არქიტექტურით, ევროპული მოედნებითა და ამ მოედნებზე დაბინავებული საოცარი სკულპტურებით. ერთ ასეთს - სალამურიან ბიჭუნას, ქალაქის ერთგვარ სიმბოლოს, ძველ ბათუმში იპოვი, ისტორიული სახლის აგურის ნიშაში.",
      description3:
        "აუცილებლად დაათვალიერე იქვე მდებარე ბათუმის პიაცაც, მოინახულე ქორწინებისა და იუსტიციის სახლები, ანბანის კოშკი, ნეპტუნის შადრევანი, მედეას ქანდაკება, ასტრონომიული საათი, ბათუმის ცნობილი კოლონადები, 1863 წელს აგებული შუქურა, საოცარი ქანდაკებები - „ალი და ნინო“ და „როტაცია“. \n\n ბათუმის ბულვარშიც უნდა გაიარო და ქალაქის ისეთი ძეგლებიც მოინახულო, როგორიც ღვთისმშობლის შობის სახელობის საკათედრო ტაძარი, ბათუმის მეჩეთი - ორთა ჯამე და ბათუმის სულიწმიდის სახელობის კათოლიკური ეკლესიაა. ",
      name4: "ყველა ამინდში სასურველი ქალაქი ",
      name5: "",
      description4:
        "გართობის მოყვარულებისთვის ბათუმში მუშაობს: აკვაპარკი, საცხენოსნო კლუბი, დელფინარიუმი, დაივინგცენტრი, პანორამული ბორბალი, გელოდებათ საზღვაო და ველოგასეირნებები, ფლაიბორდი, პარაპლანი.",
      description5:
        "არსებობს ქალაქები, სადაც შვებულებას წვიმაც ვერ გაგიფუჭებს? დიახ, ბათუმია ასეთი და ამას თავადაც მიხვდები, თუკი მოკირწყლულ ქუჩებზე შენი ნაბიჯების ხმას წვიმის წვეთები აჰყვება და იგრძნობ, ზღვის, აკაციისა და მაგნოლიის სურნელს როგორ ერევა კაფეებიდან გამოსული, ქვიშაზე მოხარშული ყავის ოხშივარი.",
    },
    range: [{ min: "44" }, { max: "1" }],
    destinations: [
      {
        id: "1",
        title: "ზემო აჭარის სამდღიანი ტური",
        description:
          "მოიწყე დაუვიწყარი სამდღიანი თავგადასავალი ბუნების წიაღში და მოინახულე ისეთი ისტორიული ნაგებობები, როგორებიცაა: ხიხანის ციხე, სხალთის მონასტერი და თამარის ხიდი. ტურის განმავლობაში ასევე შესაძლებლობა გექნება იხილო გოდერძი, მწვანე ტბა, ხულო, მახუნცეთის ჩანჩქერი და დატკბე საუკეთესო სანახაობით.",
        image: "/places/batumi-botanical-garden(1).webp",
        duration: "48-60სთ",
        activities: "15 სანახაობა",
        currency: "84კმ",
      },
      {
        id: "2",
        title: "ორდღიანი ტური ბათუმში",
        description:
          "აღმოაჩინე შავიზღვისპირეთის საოცრება, ესტუმრე ბათუმის ბოტანიკურ ბაღს და ორდღიანი ტურის ფარგლებში, იხილე მომნუსხველი ღირშესანიშნაობები, მათ შორის - დელფინარიუმი, ბათუმის ბულვარი, ალი და ნინო, ქორწინების სასახლე და მოცეკვავე შადრევანი. მიიღე უნიკალური გამოცდილება და აღბეჭდე ფირზე აჭარის თანამედროვე პეიზაჟები.",
        image: "/places/batumi-lighthouse-gnta.webp",
        duration: "24-28სთ",
        activities: "24 სანახაობა",
        currency: "10კმ",
      },
    ],
    array: [
      {
        image: "/places/kaymagh-gnta.webp",
        header: "კაიმალი",
        title: "დააგემოვნე",
        text: "მრავალფეროვანი ქართული კერძები",
        description:
          "როდესაც ბათუმში მოხვდები, აუცილებლად გასინჯე ნავის ფორმის აჭარული ხაჭაპური, ყავა ქვიშაზე და ბაქლავა, რომელიც მზის, სანაპიროსა და სიყვარულის გამოხატულებაა. აჭარაში კალორიულობით გამორჩეულ კერძებს ხშირად შეხვდები: ბორანო, სინორი, კაიმაღი, მალახტო, იახნი, აჩმა და სხვა. აქ მსოფლიოში ცნობილი „ცოლიკაურისა“ და „ჩხავერის“ ღვინოები ჩამოისხმება, მთაში კი გახსნილია ღვინის სახლები, რაც ვიზიტორებს მრავალი ქვეყნიდან იზიდავს.",
      },
      {
        image: "/places/adjarian-dishes-chirbuli.webp",
        header: "აჭარული სამზარეულო",
      },
    ],
    slideCard: [
      {
        title: "პრომეთეს მღვიმე",
        src: "/slidecard/prometheus-cave-gnta.webp",
        modalSrc: "/slidecard/prometheus-cave-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        text: "აღმოაჩინე პოპულალური სანახაობები",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "დათვის ტბა - ბუნების ძეგლი ოააცეს კანიონში",
        src: "/slidecard/datvi-lake-gnta.webp",
        modalSrc: "/slidecard/datvi-lake-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "კინჩხის (ოკაცეს) ჩანჩქერი - ხონის ბუნებრივი ძეგლი",
        src: "/slidecard/kinchkha-waterfall-gnta.webp",
        modalSrc: "/slidecard/kinchkha-waterfall-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "ხონის მხარეთმცოდნეობის მუზეუმი",
        src: "/slidecard/khoni-museum-of-local-lore.webp",
        modalSrc: "/slidecard/khoni-museum-of-local-lore.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "სასტუმრო პრომეთე",
        src: "/slidecard/hotel-prometheus-gnta.webp",
        modalSrc: "/slidecard/hotel-prometheus-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "ლომინას ტბა",
        src: "/slidecard/lomina-gnta.webp",
        modalSrc: "/slidecard/lomina-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "ბღერის მღვიმე",
        src: "/slidecard/bgheri-cave-natural-monument.webp",
        modalSrc: "/slidecard/bgheri-cave-natural-monument.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
    ],
    ukrGeoCharm: [
      {
        title: "აღმოაჩინე",
        name: "კულტუული ძეგლები",
        image: "/places/tower-of-ushguli.webp",
      },
      {
        name: "ხელოვნება და კულტურა",
        image: "/places/arts-and-culture-in-georgia.webp",
      },
      {
        name: "სამზარეულო და ღვინო",
        image: "/places/nature-of-georgia.webp",
      },
    ],
  },

  // 2 index

  {
    title: "თბილისი",
    src: "/places/tbilisi-capital-of-georgia-country.webp",
    additionalDescription:
      "ეს ქალაქი პოლიფონიურ მუსიკას ჰგავს, რომელსაც სიტყვები ვერ აღწერს - მას თავად უნდა მოუსმინო, მისი ჰარმონიულობა შეაფასო, ინტელექტუალიზმი იგრძნო და საკუთარი ემოცია აღმოაჩინო. თბილისი ევროპის ერთ-ერთი უძველესი დედაქალაქია და ის 15 საუკუნეა, რაც ქვეყნის კულტურული, პოლიტიკური და ეკონომიკური ცენტრია. ამ საქმიანი და მკაცრი სტატუსის მიღმა აქ ისეთი ატმოსფეროა, ერთხელ თუ გაიცნობ, უკან დაბრუნების სურვილი ბევრჯერ გაგიჩნდება.",
    region: "თბილისი",
    city: "3434",
    link: "https://www.google.com/maps/place/%E1%83%97%E1%83%91%E1%83%98%E1%83%9A%E1%83%98%E1%83%A1%E1%83%98/@41.7277221,44.8067638,11z/data=!3m1!4b1!4m6!3m5!1s0x40440cd7e64f626b:0x61d084ede2576ea3!8m2!3d41.6938026!4d44.8015168!16zL20vMGJtNGo?entry=ttu&g_ep=EgoyMDI1MDkxMC4wIKXMDSoASAFQAw%3D%3D",
    description: "ბუნების ძეგლები",
    name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
    address: "FG4G+7XV, Окаце, საქართველო",
    phone: "595 03 60 47",
    website:
      "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
    workingHours: {
      monday: "10:00 AM – 5:30 PM",
      tuesday: "10:00 AM – 5:30 PM",
      wednesday: "10:00 AM – 5:30 PM",
      thursday: "10:00 AM – 5:30 PM",
      friday: "10:00 AM – 5:30 PM",
      saturday: "10:00 AM – 5:30 PM",
      sunday: "10:00 AM – 5:30 PM",
    },
    regionTime: [
      {
        city: "ბათუმი",
        time: "5:30 სთ",
      },
      {
        city: "ქუთაისი",
        time: "3:25 სთ",
      },
      {
        city: "თელავი",
        time: "1:50 სთ",
      },
    ],
    anotherSection: {
      name1: "ძველი თბილისის ღირსშესანიშნაობები",
      description:
        "მთავარი ტურისტული უბანი ქალაქის ისტორიული ნაწილი - „ძველი თბილისია“, რომელიც ადრეული შუა საუკუნეებიდან შენდებოდა. ეს ტერიტორია, დაახლოებით, 2 კვადრატულ კილომეტრს მოიცავს და აქ თავმოყრილია ის ღირსშესანიშნაობები, რომლებიც აუცილებლად უნდა ნახო. \n\n თბილისის ნებისმიერ სავიზიტო ბარათზე შეგხვდება კლდეზე  აშენებული დიდებული ტაძრის ფოტო. ეს მეტეხის ტაძარია - თბილისის ერთ-ერთი ყველაზე მნიშვნელოვანი ძეგლი. ტაძრის ეზოში ამ ტაძრის თავდაპირველი ამშენებლისა და თბილისის დამაარსებელი მეფის - ვახტანგ გორგასლის მონუმენტი დგას. თუ მეფესთან ერთად მეტეხის ტაძრის ეზოდან გადმოიხედავ, „ძველ თბილისს“ ხელისგულზე დაინახავ.",
      image: "/places/metekhi-church-3.webp",
      name2: "ბათუმის ღირსშესანიშნაობები",
      name3: "თბილისის მთაწმინდა",
      image2: "/places/5.webp",
      description2:
        "აქ ერთ სივრცეშია თავმოყრილი ქართული მართლმადიდებლური, სომხური გრიგორიანული და კათოლიკური ეკლესიები, ასევე უნიკალური მეჩეთი, სადაც შიიტები და სუნიტები ერთად ლოცულობენ , იქვე ახლოსაა  სინაგოგაც. თბილისი მრავალეთნოსური და მრავალრელიგიური ქალაქია, რადგანაც  ყოველთვის მშობლიური სახლი იყო სხვადასხვა კულტურისა და რელიგიის ადამიანებისთვის. \n\n „ძველი თბილისის“ განსაკუთრებული ეგზოტიკაა XVIII საუკუნის ჭრელი, გუმბათოვანი აბანოები, სადაც ბუნებრივად თბილი, გოგირდიანი წყალი მოდის. ლეგენდის თანახმად, სწორედ ამ სამკურნალო წყლების გამო გადაწყვიტა მეფე ვახტანგ გორგასალმა ამ ადგილას ქალაქის დაარსება.  \n\n აქ ყოველ ფეხის ნაბიჯზე შეხვდები რესტორნებს, კაფეებსა და პაბებს - ნაციონალური და ევროპული მენიუებით, სასმელებითა და კარგი მუსიკით. \n\n თბილისი და ზოგადად საქართველო სამოთხეა გურმანებისთვის - აქ კულინარია ხელოვნებაა. ქართული სამზარეულო, გეოგრაფიული მდებარეობის დამსახურებით, საუკუნეების განმავლობაში იზიარებდა ევროპისა და ახლო აღმოსავლეთის სამზარეულოების საუკეთესო ტრადიციებს და ქმნიდა თავის ინდივიდუალურ, დახვეწილ გემოებს.",
      description3:
        "გაითვალისწინე, რომ ყველაზე გემრიელი ყავის სურნელი გაბრიაძის მარიონეტების თეატრის ჯადოსნურ მოედანზე დაგხვდება, სადაც ყავასაც დააგემოვნებ და 12:00-სა და 19:00 საათზე საოცარი მუსიკალური და თოჯინური წარმოდგენის – „ცხოვრების წრებრუნვის“ მაყურებელიც გახდები. \n\n ძველ ქუჩებზე უნიკალურ „თბილისურ მოდერნსაც“ ნახავ - მდიდრულ შენობებს მორთული ფასადებით, მოხატული სადარბაზოებითა და ემოციური ისტორიებით.",
      name4: "რუსთაველის გამზირი",
      name5: "",
      description4:
        "ქალაქის მთავარი არტერია  რუსთაველის  გამზირია, რომლის სიგრძე  1,5 კმ-ია. აქ ერთმანეთის გვერდით უნიკალური ისტორიული შენობები დგას: საქართველოს პარლამენტი, ოპერის თეატრი, ეროვნული გალერეა, რუსთაველის თეატრი, თანამედროვე ხელოვნების მუზეუმი, ეროვნული ბიბლიოთეკა და ქაშვეთის ეკლესია. გამზირზე არის მაღაზიები, კაფეები და გამწვანებული სკვერები.",
      description5:
        "არსებობს ქალაქები, სადაც შვებულებას წვიმაც ვერ გაგიფუჭებს? დიახ, ბათუმია ასეთი და ამას თავადაც მიხვდები, თუკი მოკირწყლულ ქუჩებზე შენი ნაბიჯების ხმას წვიმის წვეთები აჰყვება და იგრძნობ, ზღვის, აკაციისა და მაგნოლიის სურნელს როგორ ერევა კაფეებიდან გამოსული, ქვიშაზე მოხარშული ყავის ოხშივარი.",
    },
    range: [{ min: "212" }, { max: "4" }],
    destinations: [
      {
        id: "1",
        title: "რუსთაველის გამზირის არქიტექტურული ტური",
        description:
          "თუ ხელოვნება გიტაცებს, მაშინ რუსთაველის გამზირის არქიტექტურული ტური აუცილებლად უნდა დაგეგმო, რადგან მის ფარგლებში თბილისის კონსერვატორიას, ქაშუეთის ეკლესიას და ოპერისა და ბალეტის თეატრს მოივლი, ასევე რამდენიმე გასაოცარ მუზეუმს ესტუმრები და მთაწმინდის ვიწრო ქუჩებითაც დატკბები.",
        image: "/places/rustaveli-drama-theater.webp",
        duration: "2-4სთ",
        activities: "24 სანახაობა",
        currency: "3კმ",
      },
      {
        id: "2",
        title: "ორდღიანი ტური ბათუმში",
        description:
          "აღმოაჩინე შავიზღვისპირეთის საოცრება, ესტუმრე ბათუმის ბოტანიკურ ბაღს და ორდღიანი ტურის ფარგლებში, იხილე მომნუსხველი ღირშესანიშნაობები, მათ შორის - დელფინარიუმი, ბათუმის ბულვარი, ალი და ნინო, ქორწინების სასახლე და მოცეკვავე შადრევანი. მიიღე უნიკალური გამოცდილება და აღბეჭდე ფირზე აჭარის თანამედროვე პეიზაჟები.",
        image: "/places/old-tbilisi-dzveli-tbilisi-2.webp",
        duration: "2-4სთ",
        activities: "26 სანახაობა",
        currency: "7კმ",
      },
    ],
    array: [
      {
        image: "/places/chakapuli-gnta.webp",
        header: "ჩაქაპული",
        title: "დააგემოვნე",
        text: "მრავალფეროვანი ქართული კერძები",
        description:
          "თბილისში ყოველ ფეხის ნაბიჯზე შეხვდები რესტორნებს, კაფეებსა და პაბებს, სადაც ნაციონალური და ევროპული მენიუები დაგხვდება - სასმელებითა და კარგი მუსიკით. აქაური თავგადასავალი შენს კულინარიულ გამოცდილებას კიდევ უფრო გაამდიდრებს და უნიკალურ გემოებს აღმოგაჩენინებს.",
      },
      {
        image: "/places/chikhirtma-gnta.webp",
        header: "ჩიხირთმა",
      },
    ],
    slideCard: [
      {
        title: "პრომეთეს მღვიმე",
        src: "/slidecard/prometheus-cave-gnta.webp",
        modalSrc: "/slidecard/prometheus-cave-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        text: "აღმოაჩინე პოპულალური სანახაობები",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "დათვის ტბა - ბუნების ძეგლი ოააცეს კანიონში",
        src: "/slidecard/datvi-lake-gnta.webp",
        modalSrc: "/slidecard/datvi-lake-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "კინჩხის (ოკაცეს) ჩანჩქერი - ხონის ბუნებრივი ძეგლი",
        src: "/slidecard/kinchkha-waterfall-gnta.webp",
        modalSrc: "/slidecard/kinchkha-waterfall-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "ხონის მხარეთმცოდნეობის მუზეუმი",
        src: "/slidecard/khoni-museum-of-local-lore.webp",
        modalSrc: "/slidecard/khoni-museum-of-local-lore.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "სასტუმრო პრომეთე",
        src: "/slidecard/hotel-prometheus-gnta.webp",
        modalSrc: "/slidecard/hotel-prometheus-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "ლომინას ტბა",
        src: "/slidecard/lomina-gnta.webp",
        modalSrc: "/slidecard/lomina-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "ბღერის მღვიმე",
        src: "/slidecard/bgheri-cave-natural-monument.webp",
        modalSrc: "/slidecard/bgheri-cave-natural-monument.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
    ],
    ukrGeoCharm: [
      {
        title: "აღმოაჩინე",
        name: "კულტუული ძეგლები",
        image: "/places/arts-and-culture-in-georgia.webp",
      },
      {
        name: "ხელოვნება და კულტურა",
        image: "/places/food-and-wine-georgia.webp",
      },
      {
        name: "სამზარეულო და ღვინო",
        image: "/places/city-breaks-georgia.webp",
      },
    ],
  },

  // 3 index

  {
    title: "სტეფანწმინდა",
    src: "/places/stepantsminda-gnta.webp",
    additionalDescription:
      "საქართველოს რუკაზე სტეფანწმინდა გამორჩეული ადგილია. აქედან 11 კმ-ში ქვეყნის ჩრდილოეთი საზღვარია და სწორედ აქ გადის ევროპისა და აზიის კვეთაზე ერთ-ერთი ყველაზე ძველი გზა.",
    region: "თბილისი",
    city: "3434",
    link: "https://www.google.com/maps/place/%E1%83%A1%E1%83%A2%E1%83%94%E1%83%A4%E1%83%90%E1%83%9C%E1%83%AC%E1%83%9B%E1%83%98%E1%83%9C%E1%83%93%E1%83%90/@42.657029,44.6308047,15z/data=!3m1!4b1!4m5!3m4!1s0x4045351b5859a157:0xf8d6751dcb058582!8m2!3d42.660268!4d44.641143?shorturl=1",
    description: "ბუნების ძეგლები",
    name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
    address: "FG4G+7XV, Окаце, საქართველო",
    phone: "595 03 60 47",
    website:
      "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
    workingHours: {
      monday: "10:00 AM – 5:30 PM",
      tuesday: "10:00 AM – 5:30 PM",
      wednesday: "10:00 AM – 5:30 PM",
      thursday: "10:00 AM – 5:30 PM",
      friday: "10:00 AM – 5:30 PM",
      saturday: "10:00 AM – 5:30 PM",
      sunday: "10:00 AM – 5:30 PM",
    },
    regionTime: [
      {
        city: "თბილისი",
        time: "2:55 სთ",
      },
      {
        city: "ქუთაისი",
        time: "5:30 სთ",
      },
      {
        city: "ბათუმი",
        time: "7:40 სთ",
      },
    ],
    anotherSection: {
      name1: "რას ნახავ სტეფანწმინდაში?",
      description:
        "სტეფანწმინდის მთავარი მშვენება  მყინვარწვერია, იგივე მწვერვალი „ყაზბეგი“, რომელიც ალპინისტებში და, ზოგადად, მთის სპორტის მოყვარულებში დღემდე დიდ ინტერესს იწვევს. მყინვარწვერის უმაღლესი წერტილიდან - 5054 მეტრიდან დანახული სამყარო კი გამაოგნებლად ლამაზია.",
      image: "/places/paragliding-in-gudauri-mount-kudebi-3.webp",
      name2: "საინტერესო მარშრუტები სტეფანწმინდიდან",
      name3: "თბილისის მთაწმინდა",
      image2: "/places/gergeti-church-in-georgia.webp",
      description2:
        "სტეფანწმინდა მყინვარწვერის ძირში მდებარეობს, ამიტომ აქ ყოველთვის გრილა და აუცილებლად გაიყოლე თბილი ტანისამოსი. ისიც გაითვალისწინე, რომ გუდაური-კობის საბაგირო გონდოლით დაახლოებით 40 წუთში ჩახვალ კურორტ გუდაურის სასრიალო სივრცეში. \n\n სტეფანწმინდა (ყოფილი ყაზბეგი) აღმოსავლეთ საქართველოში მდინარე თერგის ხეობაში  მდებარეობს, რომელიც საქართველოში სიდიდით მესამე მდინარეა. სტეფანწმინდის დაარსების თარიღი უცნობია, თუმცა აქ ძვ.წ. VI-V საუკუნეების განძია აღმოჩენილი.  \n\n ადგილობრივ მოსახლეობას ბევრი დღესასწაული აქვს, მათ შორის ათენგენობა, ყაზბეგობა და გერგეტობა. ამ დღეებში აქ უამრავი ტურისტი იყრის თავს და საზეიმო განწყობაა კაფეებსა და რესტორნებში. სტეფანწმინდაში აუცილებლად უნდა გასინჯო აქაური, განთქმული ხინკალი, ვეგეტარიანელებისთვის კი საინტერესო კერძია ტრადიციული „ფხლოვანა“ - ხაჭაპური მცენარეული გულსართით. \n\n თუ სტეფანწმინდის ცხოვრებაზე, ადგილობრივ კულტურასა და ტრადიციებზე მეტის გაგება გსურს, სტეფანწმინდის ისტორიულ მუზეუმს უნდა ესტუმრო, რომელიც ქართველი მწერლის ალექსანდრე ყაზბეგის მემორიალურ სახლშია განთავსებული. აქ შეგიძლია არა მარტო ხევის, არამედ კავკასიური კულტურისთვის, რეგიონის ყოფისთვის დამახასიათებელი ეთნოგრაფიული მასალა, გამოყენებითი ხელოვნების ნიმუშები და ადგილობრივი მხატვრების ნამუშევრებიც დაათვალიერო.",
      description3:
        "სტეფანწმინდიდან სხვადასხვა ტურისტული მარშრუტი გადის და შეგიძლია, ფეხით მოაწყო ლაშქრობა, საკუთარი მანქანით იმგზავრო ან ჯიპტურებით ისარგებლო - გააჩნია, რა მიმართულებას აირჩევ. თუმცა არის რამდენიმე ადგილი, რომლებიც არ უნდა გამოტოვო. ესენია:",
      name4: "რუსთაველის გამზირი",
      name5: "",
      description4:
        "გერგეტის სამება - სტეფანწმინდის გვირგვინი და ქართული ხუროთმოძღვრების გამორჩეული ძეგლი. ტაძარი დაახლოებით XIV საუკუნეშია აგებული. ძველად, როცა საქართველოს მტერი შემოესეოდა, აქ ინახავდნენ ეკლესიის საგანძურს გადასარჩენად, რადგან იქამდე მისასვლელად რთული გზა იყო. დღეს სტეფანწმინდიდან გერგეტზე ასასვლელად სამანქანო გზაა, თუმცა შეგიძლია ჯიპტურითა და გიდის მომსახურებითაც ისარგებლო. \n\n ჯუთა - ევროპის ერთ-ერთი უმაღლესი სოფელი. ის ზღვის დონიდან 2 222 მეტრზეა და თანაც აქ მუდმივად ცხოვრობენ ადამიანები. ჯუთამდეც სამანქანო გზა მიდის. \n\n დარიალის ხეობა - ეს ხეობა მდინარე თერგის ერთ-ერთი მონაკვეთი და მოგზაურთა  საყვარელი ადგილია. ხეობა მდიდარია ჩანჩქერებითა და ტბებით, რომელთა შორის აღსანიშნავია გველეთის ჩანჩქერი და გულის ფორმის ტბა. აქ უკვე შეგიძლია კარვებით ახვიდე, სპეციალურ საკემპინგო ადგილზე დაბანაკდე, დატკბე შთაბეჭდილებებით, გადაიღო ბევრი ლამაზი ფოტო და აქაური სილამაზე მეგობრებს გაუზიარო.",
      description5: "",
    },
    range: [{ min: "21" }, { max: "19" }],
    destinations: [
      {
        id: "1",
        title: "შიდა ქართლისა და მცხეთის ერთდღიანი ტური",
        description:
          "თუ გინდა კავკასიის ერთ-ერთ უძველეს დასახლებას - უფლისციხეს ესტუმრო, კლდოვანი მთის წვერზე არსებული ჯვრის მონასტერი მოინახულო, ისტორიული ციხესიმაგრე დაათვალიერო და გამორჩეული ქართული ტაძარი - სვეტიცხოველი იხილო, მაშინ შიდა ქართლისა და მცხეთის ერთდღიანი ტური აუცილებლად უნდა დაგეგმო.",
        image: "/places/jvari-monastery(1).webp",
        duration: "6-8სთ",
        activities: "9 სანახაობა",
        currency: "95კმ",
      },
      {
        id: "2",
        title: "ორდღიანი ტური ყაზბეგში",
        description:
          "ამ მხარეში უძველეს ციხე-კოშკებს, მთის წვერზე აგებულ შუასაუკუნეების ტაძრებს, შესანიშნავ ხედებსა და დაუჯერებელი სილამაზის მქონე ადგილებს შეხვდები, ბუნების სილამაზისა და კულტურის ჰარმონიული შერწყმა კი შენს ორდღიან მოგზაურობას კიდევ უფრო საინტერესოსა და მიმზიდველს გახდის.",
        image: "/places/stepantsminda-gergeti-stepantsminda-gnta.webp",
        duration: "24-28სთ",
        activities: "21 სანახაობა",
        currency: "125კმ",
      },
    ],
    array: [
      {
        image: "/places/dambalkhacho-gnta.webp",
        header: "დამბალხაჭო",
        title: "დააგემოვნე",
        text: "მრავალფეროვანი ქართული კერძები",
        description:
          "მცხეთა-მთიანეთის ტრადიციული კერძებიდან ხინკალი ყველაზე გამორჩეული და ყველასთვის განსაკუთრებით საყვარელი კერძია, თუმცა, მთიულეთში, ფშავსა და ხევსურეთში, კიდევ ბევრი გემრიელი და დასამახსოვრებელი კერძი იციან, როგორებიცაა: დამბალხაჭო, ჩადუნა, მთიულური მხლოვანა, ხავიწი, ღურღუჭელი, კუს ერბო და სხვა.",
      },
      {
        image: "/places/khinkali-gnta.webp",
        header: "ხინკალი",
      },
    ],
    slideCard: [
      {
        title: "პრომეთეს მღვიმე",
        src: "/slidecard/prometheus-cave-gnta.webp",
        modalSrc: "/slidecard/prometheus-cave-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        text: "აღმოაჩინე პოპულალური სანახაობები",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "დათვის ტბა - ბუნების ძეგლი ოააცეს კანიონში",
        src: "/slidecard/datvi-lake-gnta.webp",
        modalSrc: "/slidecard/datvi-lake-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "კინჩხის (ოკაცეს) ჩანჩქერი - ხონის ბუნებრივი ძეგლი",
        src: "/slidecard/kinchkha-waterfall-gnta.webp",
        modalSrc: "/slidecard/kinchkha-waterfall-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "ხონის მხარეთმცოდნეობის მუზეუმი",
        src: "/slidecard/khoni-museum-of-local-lore.webp",
        modalSrc: "/slidecard/khoni-museum-of-local-lore.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "სასტუმრო პრომეთე",
        src: "/slidecard/hotel-prometheus-gnta.webp",
        modalSrc: "/slidecard/hotel-prometheus-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "ლომინას ტბა",
        src: "/slidecard/lomina-gnta.webp",
        modalSrc: "/slidecard/lomina-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "ბღერის მღვიმე",
        src: "/slidecard/bgheri-cave-natural-monument.webp",
        modalSrc: "/slidecard/bgheri-cave-natural-monument.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
    ],
    ukrGeoCharm: [
      {
        title: "აღმოაჩინე",
        name: "კულტურული ძეგლები",
        image: "/places/tower-of-ushguli.webp",
      },
      {
        name: "ხელოვნება და კულტურა",
        image: "/places/arts-and-culture-in-georgia.webp",
      },
      {
        name: "სამზარეულო და ღვინო",
        image: "/places/food-and-wine-georgia.webp",
      },
    ],
  },

  // 4 index

  {
    title: "მესტია",
    src: "/places/mestia-gnta.webp",
    additionalDescription:
      "თუ მესტიაში ერთხელ მაინც იმოგზაურებ, აქაური ბუნება და გასაოცარი ლანდშაფტები საოცარი შთაბეჭდილებებით აგავსებს.",
    region: "თბილისი",
    city: "3434",
    link: "https://www.google.com/maps/place/%E1%83%9B%E1%83%94%E1%83%A1%E1%83%A2%E1%83%98%E1%83%90/@43.0353789,42.679975,15z/data=!3m1!4b1!4m5!3m4!1s0x405bd976dbdf6305:0xd4e140f4c76dc486!8m2!3d43.0334614!4d42.6894803?shorturl=1",
    description: "ბუნების ძეგლები",
    name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
    address: "FG4G+7XV, Окаце, საქართველო",
    phone: "595 03 60 47",
    website:
      "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
    workingHours: {
      monday: "10:00 AM – 5:30 PM",
      tuesday: "10:00 AM – 5:30 PM",
      wednesday: "10:00 AM – 5:30 PM",
      thursday: "10:00 AM – 5:30 PM",
      friday: "10:00 AM – 5:30 PM",
      saturday: "10:00 AM – 5:30 PM",
      sunday: "10:00 AM – 5:30 PM",
    },
    regionTime: [
      {
        city: "თბილისი",
        time: "7:10 სთ",
      },
      {
        city: "ქუთაისი",
        time: "4:20 სთ",
      },
      {
        city: "ბათუმი",
        time: "5:45 სთ",
      },
    ],
    anotherSection: {
      name1: "",
      description:
        "ზუგდიდიდან მესტიისკენ მიმავალ 137 კმ-იან გზაზე სუბტროპიკულ გარემოს ალპური და სუბალპური ტყეები და მინდვრები ცვლის, თავისი მოჩუხჩუხე მდინარეებით. ეს გზა საქართველოს ყველაზე მაღალი მწვერვალების ძირამდე მიგიყვანს - პირქუშ შხარასთან და  ქათქათა თეთნულდთან, რომელიც, ლეგენდის მიხედვით, თოვლში გაქვავებული პატარძალია.",
      image: "/places/ushba-mountain-gnta.webp",
      name2: "ლეგენდა უშბასა და თეთნულდზე",
      name3: "მესტიის მდებარეობა",
      image2: "/places/gergeti-church-in-georgia.webp",
      description2:
        "სვანური ლეგენდა გვიამბობს, რომ ღარიბ უშბასა და მდიდარი ოჯახის ქალიშვილ თეთნულდს ერთმანეთი შეჰყვარებიათ. თეთნულდის ოჯახს ქალიშვილისთვის ღარიბ ვაჟთან ურთიერთობა აუკრძალავს. სასოწარკვეთილი თეთნულდი პატარძლის თეთრ კაბაში გამოწყობილა და ღმერთისთვის უთხოვია - რადგან მე და უშბას ერთად ყოფნას არ გვანებებენ, ისე გაგვაქვავე, ერთმანეთის ყურებაში მაინც ხელი ვერავინ შეგვიშალოსო. ასე გაჩნდა კავკასიონის ქედზე ორი ულამაზესი მწვერვალი - უშბა და თეთნულდი, რომლებიც ერთმანეთის პირისპირ დგანან და მარად ერთმანეთისკენ იყურებიან.",
      description3:
        "დაბა მესტია ზღვის დონიდან 1500 მეტრზე, კავკასიონისა და სვანეთის ქედს შორის, მესტიის მთების ქვაბულში, მდინარე ენგურის შენაკადების - მესტიაჭალისა და მულხრის ნაპირებზე მდებარეობს. ის „კლდის ვეფხვად“ წოდებული მთამსვლელის, მიხეილ ხერგიანის სამშობლოა, რომლის სახლ-მუზეუმიც ერთ-ერთია იმ ადგილებიდან, რომლებიც მესტიაში უნდა მოინახულო. აქ სვანურ საგვარეულო კოშკებსაც უნდა ესტუმრო, ისინი მესტიაში 45-ია - 25-მეტრიანი, 4-5-სართულიანი ციხე-ნაგებობები. კოშკები სვანური არქიტექტურისთვის დამახასიათებელი ქონგურებით სრულდება.",
      name4: "საგანძურის მცველები",
      name5: "",
      description4:
        "მესტია ხშირად სახელმწიფო საგანძურის მცველის ფუნქციასაც ასრულებდა, რადგან ის მტრისთვის ძნელად მისადგომი იყო. ქართული საგანძურის ერთ ნაწილს სვანეთის ისტორიულ-ეთნოგრაფიულ მუზეუმში იხილავ.",
      description5: "",
    },
    range: [{ min: "46" }, { max: "46" }],
    destinations: [
      {
        id: "1",
        title: "ორდღიანი ტური სვანეთში",
        description:
          "თუ დაუვიწყარ თავგადასავალს ეძებ და ლეგენდებით სავსე მხარეებში მოგზაურობაც გიზიდავს, მაშინ სვანეთს უნდა ეწვიო და საქართველოს უმაღლესი მწვერვალი, ულამაზესი ბუნება, ხელუხლებელი ტყეები, კლდეებთან ჰარმონიულად შერწყმული კოშკოვანი სოფლები და მედიდურად აღმართული მთები უნდა მოინახულო.",
        image: "/places/upper-svaneti-gnta.webp",
        duration: "24-30სთ",
        activities: "21 სანახაობა",
        currency: "55კმ",
      },
      {
        id: "2",
        title: "რაჭის ორდღიანი ტური",
        description:
          "ამ ორდღიან ტურზე, რაჭაში, სხვადასხვა პერიოდის ქართული ხუროთმოძღვრების ნიმუშებს აღმოაჩენ, გამორჩეულ ადგილებს ესტუმრები და ისეთ კლიმატურ-ბალნეოლოგიური კურორტებს მოივლი, როგორიცაა შოვი და უწერა. Რაჭული თავგადასავლის განმავლობაში, ასევე ნახავ შაორის წყალსაცავს, ბარაკონს, ნიკორწმინდას და სხვა.",
        image: "/places/lashkroba-shovi-udziro-tba-glola.webp",
        duration: "24-30სთ",
        activities: "9 სანახაობა 6 აქტივობა",
        currency: "75კმ",
      },
    ],
    array: [
      {
        image: "/places/svan-khachapuri-gnta.webp",
        header: "სვანური ხაჭაპური - ფეტვრაალი",
        title: "დააგემოვნე",
        text: "მრავალფეროვანი ქართული კერძები",
        description:
          "ელარჯი, გებჟალია, მეგრული კუჭმაჭი, ფუჩხოლია, აჯიკა, მეგრული საცივი, კუბდარი, ჭვიშტარი, თაშმიჯაბი, სხვანური ხაჭაპური, ხარჩო - ეს იმ კერძების მცირე ჩამონათვალია, რომლებსაც გულგრილად ვერ ჩაუვლი როდესაც სამეგრელო-ზემო სვანეთში მოხვდები. სვანეთში ასევე საკმაოდ ნაყოფიერად მოიხმარენ მოცვს როგორც ჩაის, რაც შენს თავგადასავალს უფრო სურნელოვანს და ეგზოტიკურს გახდის.",
      },
      {
        image: "/places/kubdari-gnta.webp",
        header: "კუბდარი",
      },
    ],
    slideCard: [
      {
        title: "პრომეთეს მღვიმე",
        src: "/slidecard/prometheus-cave-gnta.webp",
        modalSrc: "/slidecard/prometheus-cave-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        text: "აღმოაჩინე პოპულალური სანახაობები",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "დათვის ტბა - ბუნების ძეგლი ოააცეს კანიონში",
        src: "/slidecard/datvi-lake-gnta.webp",
        modalSrc: "/slidecard/datvi-lake-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "კინჩხის (ოკაცეს) ჩანჩქერი - ხონის ბუნებრივი ძეგლი",
        src: "/slidecard/kinchkha-waterfall-gnta.webp",
        modalSrc: "/slidecard/kinchkha-waterfall-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "ხონის მხარეთმცოდნეობის მუზეუმი",
        src: "/slidecard/khoni-museum-of-local-lore.webp",
        modalSrc: "/slidecard/khoni-museum-of-local-lore.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "სასტუმრო პრომეთე",
        src: "/slidecard/hotel-prometheus-gnta.webp",
        modalSrc: "/slidecard/hotel-prometheus-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "ლომინას ტბა",
        src: "/slidecard/lomina-gnta.webp",
        modalSrc: "/slidecard/lomina-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "ბღერის მღვიმე",
        src: "/slidecard/bgheri-cave-natural-monument.webp",
        modalSrc: "/slidecard/bgheri-cave-natural-monument.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
    ],
    ukrGeoCharm: [
      {
        title: "აღმოაჩინე",
        name: "კულტურული ძეგლები",
        image: "/places/tower-of-ushguli.webp",
      },
      {
        name: "ხელოვნება და კულტურა",
        image: "/places/arts-and-culture-in-georgia.webp",
      },
      {
        name: "სამზარეულო და ღვინო",
        image: "/places/food-and-wine-georgia.webp",
      },
    ],
  },

  // 5 index

  {
    title: "მცხეთა",
    src: "/places/mtskheta-gnta.webp",
    additionalDescription:
      "საქართველოს ბუნება მრავალფეროვან სანახაობას გთავაზობს, თუმცა ეს ერთ-ერთი ნამდვილად გამორჩეული ხედია - ადგილი, სადაც ორი დიდი მდინარე ერთმანეთს უერთდება. სწორედ ამ შესართავთან მდებარეობს ქალაქი მცხეთა - საუკუნოვანი ისტორიითა და გასაოცარი ძეგლებით, რომელიც მსოფლიოში ერთ-ერთი უძველესი, უწყვეტად დასახლებული ქალაქია.",
    region: "თბილისი",
    city: "3434",
    link: "https://www.google.com/maps/place/%E1%83%9B%E1%83%AA%E1%83%AE%E1%83%94%E1%83%97%E1%83%90/@41.8455235,44.7009015,14z/data=!3m1!4b1!4m6!3m5!1s0x40446f787455a33b:0x77ae54d3155fc6c2!8m2!3d41.8454251!4d44.7202739!16zL20vMDI4NHdm?entry=ttu&g_ep=EgoyMDI1MDkxNC4wIKXMDSoASAFQAw%3D%3D",
    description: "ბუნების ძეგლები",
    name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
    address: "FG4G+7XV, Окаце, საქართველო",
    phone: "595 03 60 47",
    website:
      "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
    workingHours: {
      monday: "10:00 AM – 5:30 PM",
      tuesday: "10:00 AM – 5:30 PM",
      wednesday: "10:00 AM – 5:30 PM",
      thursday: "10:00 AM – 5:30 PM",
      friday: "10:00 AM – 5:30 PM",
      saturday: "10:00 AM – 5:30 PM",
      sunday: "10:00 AM – 5:30 PM",
    },
    regionTime: [
      {
        city: "თბილისი",
        time: "0:20 სთ",
      },
      {
        city: "ქუთაისი",
        time: "2:50 სთ",
      },
      {
        city: "ბათუმი",
        time: "5:20 სთ",
      },
    ],
    anotherSection: {
      name1: "მცხეთის ისტორია",
      description:
        "მცხეთა საქართველოს უძველესი დედაქალაქია და მისი დათვალიერება ქალაქ-მუზეუმად აღიარებული, უძველესი ცენტრალური უბნიდან უნდა დაიწყო; \n\n ეს ქალაქი მხოლოდ ქრისტიანულ ეპოქას არ ეკუთვნის. XX საუკუნის 30-იან წლებში წარმოებული არქეოლოგიური გათხრებით დადგინდა, რომ აქაურობა ჯერ კიდევ ბრინჯაოსა და გვიანდელი ბრინჯაოს ხანაში (ძვ.წ. III-II ათასწლეული) იყო დასახლებული. \n\n ლეგენდის თანახმად, ქალაქი მცხეთა ძვ.წ. I ათასწლეულში ეთნარქმა მცხეთოსმა - ბიბლიური ნოეს შთამომავალმა, ქართველთა ერთ-ერთმა ლეგენდარულმა წინაპარმა დააარსა, ხოლო მეფე ფარნავაზმა - უდიდესმა რეფორმატორმა მეფემ - ძვ.წ. IV საუკუნეში ქართლის (იბერიის) დედაქალაქად გამოაცხადა. \n\n მცხეთა დღემდე ინარჩუნებს კულტურულ-რელიგიური ცენტრის ფუნქციას და ამასთანავე, ქალაქი ტოლერანტული განწყობითაც გამოირჩევა - ისტორიულად აქ, ქართველებთან ერთად, ებრაელები და სხვა ეთნიკური ჯგუფებიც ცხოვრობდნენ.",
      image: "/places/jvari-monastery.webp",
      name2: "ქრისტიანობა და მცხეთის არქიტექტურა",
      name3: "მცხეთის ღირსშესანიშნაობები",
      image2: "/places/dzalisi-archaeological-site-5.webp",
      description2:
        "საქართველოში ქრისტიანობა IV საუკუნის დასაწყისში სწორედ მცხეთიდან გავრცელდა. \n\n უძველეს ტაძრებს შეხვდები: სამთავროს წმ. ნინოს ეკლესია, რომელიც IV საუკუნით თარიღდება; ანტიოქია - წმინდა სტეფანე პირველმოწამის ეკლესია, რომელიც IV-V საუკუნეებში აიგო და მცხეთის ჯვრის - VI-VII საუკუნეების ტაძარი. \n\n განვითარებული ფეოდალიზმის ეპოქაში მცხეთაში შემდეგი ტაძრები აშენდა: სვეტიცხოველი დღევანდელი სახით - 1010-1129 წლებში, ხოლო სამთავროს საეკლესიო კომპლექსი - XI საუკუნის 30-იან წლებში. \n\n 1994 წელს ჯვრის ტაძარი, სვეტიცხოვლის საკათედრო ტაძარი და სამთავროს ტაძარი იუნესკომ მსოფლიო კულტურული მემკვიდრეობის ნუსხაში შეიტანა. ",
      description3:
        "არა მარტო ქალაქ მცხეთაში, არამედ მცხეთის სოფლებშიც ბევრი ისტორიული, კულტურული და რელიგიური ძეგლი დაგხვდება, რომლებიც შენს ყურადღებას თავისი სიძველითა და მნიშვნელობით მიიქცევს.",
      name4: "საგანძურის მცველები",
      name5: "",
      description4:
        "მათ შორისაა ძალისის კომპლექსი - მცხეთიდან 20 კმ-ში, სოფელ ძალისის აღმოსავლეთით, მდ. ნარეკვავის ორივე ნაპირზე აღმოჩენილი ანტიკური ხანის სამეფო ნაქალაქარი, სადაც ძვ.წ. II და ახ.წ. VIII საუკუნეებში აქტიური ცხოვრება მიმდინარეობდა. \n\n ძალისის მეზობლადაა სოფელი მუხრანი, რომელიც ძვ.წ. III-II საუკუნეებში დიდი მცხეთის გარეუბანი იყო. აქ გადიოდა მნიშვნელოვანი სავაჭრო-სამიმოსვლო გზები ანტიკურ და განვითარებულ ფეოდალურ ხანებში და მან დიდი როლი შეასრულა ქართლის (იბერიის) სამეფოს წარმოშობაში. მუხრანის ბაგრატიონთა შტო ქართლს 1658-1724 წლებში განაგებდა.",
      description5: "",
    },
    range: [{ min: "26" }, { max: "2" }],
    destinations: [
      {
        id: "1",
        title: "ერთდღიანი ტური მცხეთაში",
        description:
          "მცხეთა, ერთდღიანი გასეირნებისთვის შესანიშნავი ვარიანტია, სადაც საქართველოში ქრისტიანობის შემოსვლისა და გავრცელების სიმბოლოს - ჯვრის მონასტერს იხილავ, განსაკუთრებული სილამაზით მოელვარე სვეტიცხოვლის ტაძარს მოინახულებ, სამთავროს სამონასტრო კომპლექსს ესტუმრები და VI საუკუნეში აგებულ შიომღვიმის მონასტერსაც ეწვევი.",
        image: "/places/mtskheta.webp",
        duration: "4-6სთ",
        activities: "12 სანახაობა",
        currency: "25კმ",
      },
      {
        id: "2",
        title: "შიდა ქართლისა და მცხეთის ერთდღიანი ტური",
        description:
          "თუ გინდა კავკასიის ერთ-ერთ უძველეს დასახლებას - უფლისციხეს ესტუმრო, კლდოვანი მთის წვერზე არსებული ჯვრის მონასტერი მოინახულო, ისტორიული ციხესიმაგრე დაათვალიერო და გამორჩეული ქართული ტაძარი - სვეტიცხოველი იხილო, მაშინ შიდა ქართლისა და მცხეთის ერთდღიანი ტური აუცილებლად უნდა დაგეგმო.",
        image: "/places/jvari-monastery(1).webp",
        duration: "6-8სთ",
        activities: "9 სანახაობა",
        currency: "95კმ",
      },
    ],
    array: [
      {
        image: "/places/dambalkhacho-gnta.webp",
        header: "დამბალხაჭო",
        title: "დააგემოვნე",
        text: "მრავალფეროვანი ქართული კერძები",
        description:
          "მცხეთა-მთიანეთის ტრადიციული კერძებიდან ხინკალი ყველაზე გამორჩეული და ყველასთვის განსაკუთრებით საყვარელი კერძია, თუმცა, მთიულეთში, ფშავსა და ხევსურეთში, კიდევ ბევრი გემრიელი და დასამახსოვრებელი კერძი იციან, როგორებიცაა: დამბალხაჭო, ჩადუნა, მთიულური მხლოვანა, ხავიწი, ღურღუჭელი, კუს ერბო და სხვა.",
      },
      {
        image: "/places/khinkali-gnta.webp",
        header: "ხინკალი",
      },
    ],
    slideCard: [
      {
        title: "პრომეთეს მღვიმე",
        src: "/slidecard/prometheus-cave-gnta.webp",
        modalSrc: "/slidecard/prometheus-cave-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        text: "აღმოაჩინე პოპულალური სანახაობები",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "დათვის ტბა - ბუნების ძეგლი ოააცეს კანიონში",
        src: "/slidecard/datvi-lake-gnta.webp",
        modalSrc: "/slidecard/datvi-lake-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "კინჩხის (ოკაცეს) ჩანჩქერი - ხონის ბუნებრივი ძეგლი",
        src: "/slidecard/kinchkha-waterfall-gnta.webp",
        modalSrc: "/slidecard/kinchkha-waterfall-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "ხონის მხარეთმცოდნეობის მუზეუმი",
        src: "/slidecard/khoni-museum-of-local-lore.webp",
        modalSrc: "/slidecard/khoni-museum-of-local-lore.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "სასტუმრო პრომეთე",
        src: "/slidecard/hotel-prometheus-gnta.webp",
        modalSrc: "/slidecard/hotel-prometheus-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "ლომინას ტბა",
        src: "/slidecard/lomina-gnta.webp",
        modalSrc: "/slidecard/lomina-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "ბღერის მღვიმე",
        src: "/slidecard/bgheri-cave-natural-monument.webp",
        modalSrc: "/slidecard/bgheri-cave-natural-monument.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
    ],
    ukrGeoCharm: [
      {
        title: "აღმოაჩინე",
        name: "კულტურული ძეგლები",
        image: "/places/tower-of-ushguli.webp",
      },
      {
        name: "ხელოვნება და კულტურა",
        image: "/places/arts-and-culture-in-georgia.webp",
      },
      {
        name: "სამზარეულო და ღვინო",
        image: "/places/food-and-wine-georgia.webp",
      },
    ],
  },

  // 6 index

  {
    title: "ბირჯომი",
    src: "/places/mineral-water-park-borjomi-central-park-resort-1.webp",
    additionalDescription:
      "მინერალურ წყალ „ბორჯომს“ (Borjomi) მსოფლიოს 32 ქვეყანაში შეხვდები და ის საქართველოს ერთგვარი სავიზიტო ბარათია. ქალაქი ბორჯომი კი საქართველოს ერთ-ერთი მნიშვნელოვანი კურორტია, სადაც სამკურნალო წყაროები, წიწვოვანი ტყეები და ჰაერი განსაკუთრებულად მარგებელი თვისებებით ხასიათდება.",
    region: "თბილისი",
    city: "3434",
    link: "https://www.google.com/maps/place/%E1%83%91%E1%83%9D%E1%83%A0%E1%83%AF%E1%83%9D%E1%83%9B%E1%83%98/@41.8414874,43.3642226,14z/data=!3m1!4b1!4m5!3m4!1s0x404339f360b54c3f:0xf4d16cb6bafe1706!8m2!3d41.8399528!4d43.3907569?shorturl=1",
    description: "ბუნების ძეგლები",
    name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
    address: "FG4G+7XV, Окаце, საქართველო",
    phone: "595 03 60 47",
    website:
      "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
    workingHours: {
      monday: "10:00 AM – 5:30 PM",
      tuesday: "10:00 AM – 5:30 PM",
      wednesday: "10:00 AM – 5:30 PM",
      thursday: "10:00 AM – 5:30 PM",
      friday: "10:00 AM – 5:30 PM",
      saturday: "10:00 AM – 5:30 PM",
      sunday: "10:00 AM – 5:30 PM",
    },
    regionTime: [
      {
        city: "თბილისი",
        time: "2:00 სთ",
      },
      {
        city: "ბათუმი",
        time: "4:15 სთ",
      },
      {
        city: "ქუთაისი",
        time: "2:00 სთ",
      },
    ],
    anotherSection: {
      name1: "მცხეთის ისტორია",
      description:
        "მცხეთა საქართველოს უძველესი დედაქალაქია და მისი დათვალიერება ქალაქ-მუზეუმად აღიარებული, უძველესი ცენტრალური უბნიდან უნდა დაიწყო; \n\n ეს ქალაქი მხოლოდ ქრისტიანულ ეპოქას არ ეკუთვნის. XX საუკუნის 30-იან წლებში წარმოებული არქეოლოგიური გათხრებით დადგინდა, რომ აქაურობა ჯერ კიდევ ბრინჯაოსა და გვიანდელი ბრინჯაოს ხანაში (ძვ.წ. III-II ათასწლეული) იყო დასახლებული. \n\n ლეგენდის თანახმად, ქალაქი მცხეთა ძვ.წ. I ათასწლეულში ეთნარქმა მცხეთოსმა - ბიბლიური ნოეს შთამომავალმა, ქართველთა ერთ-ერთმა ლეგენდარულმა წინაპარმა დააარსა, ხოლო მეფე ფარნავაზმა - უდიდესმა რეფორმატორმა მეფემ - ძვ.წ. IV საუკუნეში ქართლის (იბერიის) დედაქალაქად გამოაცხადა. \n\n მცხეთა დღემდე ინარჩუნებს კულტურულ-რელიგიური ცენტრის ფუნქციას და ამასთანავე, ქალაქი ტოლერანტული განწყობითაც გამოირჩევა - ისტორიულად აქ, ქართველებთან ერთად, ებრაელები და სხვა ეთნიკური ჯგუფებიც ცხოვრობდნენ.",
      image: "/places/jvari-monastery.webp",
      name2: "ქრისტიანობა და მცხეთის არქიტექტურა",
      name3: "მცხეთის ღირსშესანიშნაობები",
      image2: "/places/dzalisi-archaeological-site-5.webp",
      description2:
        "საქართველოში ქრისტიანობა IV საუკუნის დასაწყისში სწორედ მცხეთიდან გავრცელდა. \n\n უძველეს ტაძრებს შეხვდები: სამთავროს წმ. ნინოს ეკლესია, რომელიც IV საუკუნით თარიღდება; ანტიოქია - წმინდა სტეფანე პირველმოწამის ეკლესია, რომელიც IV-V საუკუნეებში აიგო და მცხეთის ჯვრის - VI-VII საუკუნეების ტაძარი. \n\n განვითარებული ფეოდალიზმის ეპოქაში მცხეთაში შემდეგი ტაძრები აშენდა: სვეტიცხოველი დღევანდელი სახით - 1010-1129 წლებში, ხოლო სამთავროს საეკლესიო კომპლექსი - XI საუკუნის 30-იან წლებში. \n\n 1994 წელს ჯვრის ტაძარი, სვეტიცხოვლის საკათედრო ტაძარი და სამთავროს ტაძარი იუნესკომ მსოფლიო კულტურული მემკვიდრეობის ნუსხაში შეიტანა. ",
      description3:
        "არა მარტო ქალაქ მცხეთაში, არამედ მცხეთის სოფლებშიც ბევრი ისტორიული, კულტურული და რელიგიური ძეგლი დაგხვდება, რომლებიც შენს ყურადღებას თავისი სიძველითა და მნიშვნელობით მიიქცევს.",
      name4: "საგანძურის მცველები",
      name5: "",
      description4:
        "მათ შორისაა ძალისის კომპლექსი - მცხეთიდან 20 კმ-ში, სოფელ ძალისის აღმოსავლეთით, მდ. ნარეკვავის ორივე ნაპირზე აღმოჩენილი ანტიკური ხანის სამეფო ნაქალაქარი, სადაც ძვ.წ. II და ახ.წ. VIII საუკუნეებში აქტიური ცხოვრება მიმდინარეობდა. \n\n ძალისის მეზობლადაა სოფელი მუხრანი, რომელიც ძვ.წ. III-II საუკუნეებში დიდი მცხეთის გარეუბანი იყო. აქ გადიოდა მნიშვნელოვანი სავაჭრო-სამიმოსვლო გზები ანტიკურ და განვითარებულ ფეოდალურ ხანებში და მან დიდი როლი შეასრულა ქართლის (იბერიის) სამეფოს წარმოშობაში. მუხრანის ბაგრატიონთა შტო ქართლს 1658-1724 წლებში განაგებდა.",
      description5: "",
    },
    range: [{ min: "26" }, { max: "2" }],
    destinations: [
      {
        id: "1",
        title: "ერთდღიანი ტური მცხეთაში",
        description:
          "მცხეთა, ერთდღიანი გასეირნებისთვის შესანიშნავი ვარიანტია, სადაც საქართველოში ქრისტიანობის შემოსვლისა და გავრცელების სიმბოლოს - ჯვრის მონასტერს იხილავ, განსაკუთრებული სილამაზით მოელვარე სვეტიცხოვლის ტაძარს მოინახულებ, სამთავროს სამონასტრო კომპლექსს ესტუმრები და VI საუკუნეში აგებულ შიომღვიმის მონასტერსაც ეწვევი.",
        image: "/places/mtskheta.webp",
        duration: "4-6სთ",
        activities: "12 სანახაობა",
        currency: "25კმ",
      },
      {
        id: "2",
        title: "შიდა ქართლისა და მცხეთის ერთდღიანი ტური",
        description:
          "თუ გინდა კავკასიის ერთ-ერთ უძველეს დასახლებას - უფლისციხეს ესტუმრო, კლდოვანი მთის წვერზე არსებული ჯვრის მონასტერი მოინახულო, ისტორიული ციხესიმაგრე დაათვალიერო და გამორჩეული ქართული ტაძარი - სვეტიცხოველი იხილო, მაშინ შიდა ქართლისა და მცხეთის ერთდღიანი ტური აუცილებლად უნდა დაგეგმო.",
        image: "/places/jvari-monastery(1).webp",
        duration: "6-8სთ",
        activities: "9 სანახაობა",
        currency: "95კმ",
      },
    ],
    array: [
      {
        image: "/places/dambalkhacho-gnta.webp",
        header: "დამბალხაჭო",
        title: "დააგემოვნე",
        text: "მრავალფეროვანი ქართული კერძები",
        description:
          "მცხეთა-მთიანეთის ტრადიციული კერძებიდან ხინკალი ყველაზე გამორჩეული და ყველასთვის განსაკუთრებით საყვარელი კერძია, თუმცა, მთიულეთში, ფშავსა და ხევსურეთში, კიდევ ბევრი გემრიელი და დასამახსოვრებელი კერძი იციან, როგორებიცაა: დამბალხაჭო, ჩადუნა, მთიულური მხლოვანა, ხავიწი, ღურღუჭელი, კუს ერბო და სხვა.",
      },
      {
        image: "/places/khinkali-gnta.webp",
        header: "ხინკალი",
      },
    ],
    slideCard: [
      {
        title: "პრომეთეს მღვიმე",
        src: "/slidecard/prometheus-cave-gnta.webp",
        modalSrc: "/slidecard/prometheus-cave-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        text: "აღმოაჩინე პოპულალური სანახაობები",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "დათვის ტბა - ბუნების ძეგლი ოააცეს კანიონში",
        src: "/slidecard/datvi-lake-gnta.webp",
        modalSrc: "/slidecard/datvi-lake-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "კინჩხის (ოკაცეს) ჩანჩქერი - ხონის ბუნებრივი ძეგლი",
        src: "/slidecard/kinchkha-waterfall-gnta.webp",
        modalSrc: "/slidecard/kinchkha-waterfall-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "ხონის მხარეთმცოდნეობის მუზეუმი",
        src: "/slidecard/khoni-museum-of-local-lore.webp",
        modalSrc: "/slidecard/khoni-museum-of-local-lore.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "სასტუმრო პრომეთე",
        src: "/slidecard/hotel-prometheus-gnta.webp",
        modalSrc: "/slidecard/hotel-prometheus-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "ლომინას ტბა",
        src: "/slidecard/lomina-gnta.webp",
        modalSrc: "/slidecard/lomina-gnta.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
      {
        title: "ბღერის მღვიმე",
        src: "/slidecard/bgheri-cave-natural-monument.webp",
        modalSrc: "/slidecard/bgheri-cave-natural-monument.webp",
        additionalDescription:
          "მარტვილის კანიონი არის ბუნებრივი საოცრება სამეგრელოში, ცნობილი თავისი ფირუზისფერი წყლებით.",
        region: "სამეგრელო",
        city: "მარტვილი",
        name: "ოკაცეს კანიონის ვიზიტორთა ცენტრი",
        address: "FG4G+7XV, Окаце, საქართველო",
        phone: "595 03 60 47",
        website:
          "https://apa.gov.ge/en/eco-tourism/Trails/okaces-kanionis-turistuli-bilkebi/okaces-kanionis-biliki",
        workingHours: {
          monday: "10:00 AM – 5:30 PM",
          tuesday: "10:00 AM – 5:30 PM",
          wednesday: "10:00 AM – 5:30 PM",
          thursday: "10:00 AM – 5:30 PM",
          friday: "10:00 AM – 5:30 PM",
          saturday: "10:00 AM – 5:30 PM",
          sunday: "10:00 AM – 5:30 PM",
        },
      },
    ],
    ukrGeoCharm: [
      {
        title: "აღმოაჩინე",
        name: "კულტურული ძეგლები",
        image: "/places/tower-of-ushguli.webp",
      },
      {
        name: "ხელოვნება და კულტურა",
        image: "/places/arts-and-culture-in-georgia.webp",
      },
      {
        name: "სამზარეულო და ღვინო",
        image: "/places/food-and-wine-georgia.webp",
      },
    ],
  },
];
