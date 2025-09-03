import Image from "next/image";

interface HeroSectionProps {
  image: string;
  title: string;
  description: string;
  overlay?: string;
}

export function HeroSection({
  image,
  title,
  description,
  overlay = "bg-black/30",
}: HeroSectionProps) {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        fill
        className="object-cover"
        priority
      />
      <div className={`absolute inset-0 z-10 ${overlay}`} />
      <div className="relative z-20 flex flex-col justify-center h-full container mx-auto px-5 sm:px-8 md:px-8 lg:px-10">
        <div className="max-w-4xl">
          <h1 className="text-xl lg:text-3xl font-bold text-white mb-6 text-balance">
            {title}
          </h1>
          <p className="text-sm text-white/90 leading-relaxed max-w-3xl text-pretty">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
