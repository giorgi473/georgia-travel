import Image from "next/image";

const adventureData = [
  {
    id: 1,
    title: "ბამორის ექსტრემები",
    description:
      "ზამთარი საქართველოში უნიკალური და სენსაციური ქართია არ გამოიწვევა, ამიტომ, მოგზაურობისთვის ესეც შესანიშნავი პერიოდია. სამაგიეროდ, თოვლი არ აკლია ზამთარის კურორტებს - ენვი ვუდაური, შესტონი, ბაკურიანი და მოგერმის უბრიალო სტანდარტების კურორტებს, სადაც სრიალს ტრასებზე შეძლებ და გაუკვალავ თოვლისძე მონტერო გასეირნებას.",
    buttonText: "გაიგე მეტი",
    images: [
      {
        src: "/skier-in-yellow-gear-jumping-against-mountain-back.png",
        alt: "თხილამოვარდები და სნოუბორდი",
        caption: "თხილამოვარდები და სნოუბორდი",
      },
      {
        src: "/snow-capped-mountain-peaks-winter-landscape.png",
        alt: "ბამორის ექსტრემები",
        caption: "ბამორის ექსტრემები",
      },
    ],
  },
];

export default function AdventureHero() {
  return (
    <>
      {adventureData.map((item) => (
        <div key={item.id}>
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>✦</span>
                <span>ავტომობილი</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                {item.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {item.description}
              </p>
              <div className="flex justify-center lg:justify-start pt-2">
                <button className="border border-red-500 text-red-500 font-semibold rounded-md py-2 px-10 sm:py-2 sm:px-10 md:py-3 md:px-20 lg:py-3 lg:px-10 hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
                  <span className="relative z-10 flex items-center gap-3">
                    {item.buttonText}
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </span>
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500 
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  ></div>
                </button>
              </div>
            </div>
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {item.images.map((image, index) => (
                  <div key={index} className="relative group">
                    <div className="relative overflow-hidden rounded-lg aspect-[4/5]">
                      <Image
                        src={image.src || "/placeholder.svg"}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white font-medium">
                        {image.caption}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
