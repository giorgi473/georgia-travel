import Image from "next/image";

interface Activity {
  id: number;
  title: string;
  image: string;
  imageAlt: string;
}

interface AdventureActivitiesProps {
  badgeText: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  activities: Activity[];
}

export function AdventureActivities({
  badgeText,
  title,
  subtitle,
  description,
  buttonText,
  activities,
}: AdventureActivitiesProps) {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
        <div className="order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
            {activities.map((activity, index) => (
              <div
                key={activity.id}
                className={`
                  relative group overflow-hidden rounded-xl shadow-md hover:shadow-2xl 
                  transition-all duration-500 ease-out cursor-pointer
                  ${index < 2 ? "aspect-[4/5]" : "aspect-[4/5]"}
                `}
              >
                <Image
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.imageAlt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 20vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent 
                              flex items-end justify-start p-3 sm:p-4 lg:p-6"
                >
                  <h3
                    className="text-white text-sm sm:text-base lg:text-lg xl:text-xl 
                               font-semibold leading-tight drop-shadow-lg"
                  >
                    {activity.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="order-1 lg:order-2 space-y-6 lg:space-y-8">
          <div className="flex items-center justify-center lg:justify-start">
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/10 
                          rounded-full border border-primary/20"
            >
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary">
                {badgeText}
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl 
                         font-bold text-foreground leading-[0.9] tracking-tight
                         text-center lg:text-left"
            >
              <span className="block">{title}</span>
              <span className="block text-primary">{subtitle}</span>
            </h2>
          </div>
          <div className="max-w-2xl mx-auto lg:mx-0">
            <p
              className="text-muted-foreground text-base sm:text-lg lg:text-md 
                         leading-relaxed text-center lg:text-left"
            >
              {description}
            </p>
          </div>
          <div className="flex justify-center lg:justify-start pt-2">
            <button className="border border-red-500 text-red-500 font-semibold rounded-md py-2 px-10 sm:py-2 sm:px-10 md:py-3 md:px-20 lg:py-3 lg:px-10 hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
              <span className="relative z-10 flex items-center gap-3">
                {buttonText}
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
      </div>
    </>
  );
}
