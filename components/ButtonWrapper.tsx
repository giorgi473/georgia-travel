import React from "react";

interface ButtonWrapperProps {
  handleClick?: () => void;
  disabled?: boolean;
  className?: string;
  label?: string;
  icon?: React.ReactNode;
}

const ButtonWrapper: React.FC<ButtonWrapperProps> = ({
  handleClick,
  disabled = false,
  className = "",
  label = "",
  icon,
}) => {
  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`px-4 py-1.5 sm:py-2 md:py-2 lg:py-3 rounded-lg text-red-500 hover:bg-red-500 hover:text-white cursor-pointer transition-all duration-200 ease-in-out font-semibold border border-red-500 flex items-center justify-center gap-2 ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
    >
      {label}
      {icon && <span className="ml-2 lg:mt-0.5">{icon}</span>}
    </button>
  );
};

export default ButtonWrapper;
