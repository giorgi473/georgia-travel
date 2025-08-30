import { ArrowRight } from "lucide-react";

interface TextSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
}

function TextSection({ title, description, buttonText }: TextSectionProps) {
  return (
    <div className="pt-40 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-5">
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-4 tracking-tight">
            {title}
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-red-300 to-red-600 mx-auto rounded-full"></div>
        </div>
        <p className="text-md text-gray-600 leading-relaxed mb-5 font-light max-w-3xl mx-auto">
          {description}
        </p>
        <button className="group relative px-5 py-2 md:px-10 cursor-pointer md:py-3 lg:py-3 md:text-md bg-white border-2 border-gray-200 rounded-full text-gray-800 font-medium text-xs hover:border-red-500 hover:text-red-600 transition-all duration-300 shadow-lg hover:shadow-xl">
          <span className="relative z-10 flex items-center gap-2">
            {buttonText} <ArrowRight className="mt-1" size={15} />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
      </div>
    </div>
  );
}

export default TextSection;
