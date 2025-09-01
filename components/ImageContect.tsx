import Link from "next/link";

interface ImageContentProps {
  image: string;
  title: string;
  description: string;
  buttonText?: string;
  buttonHref?: string;
}

function ImageContent({
  image,
  title,
  description,
  buttonText = "მთავარი",
  buttonHref = "/",
}: ImageContentProps) {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${image}')`,
        }}
      />
      <div className="absolute inset-0 bg-foreground/40" />
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <h1 className="text-balance font-sans text-xl font-bold leading-tight text-white sm:text-2xl md:text-3xl lg:text-4xl">
              {title}
            </h1>
            <p className="mt-6 text-pretty font-sans text-sm text-white leading-relaxed md:text-md lg:text-lg">
              {description}
            </p>
          </div>
          <div className="absolute bottom-8 flex items-center gap-3 z-10">
            <Link href={buttonHref}>
              <button className="text-gray-300 hover:text-red-500 transition-all duration-300 ease-in-out cursor-pointer font-medium">
                {buttonText}
              </button>
            </Link>
            <span className="text-white font-sans">
              ბუნება და თავგადასავლები
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageContent;
