import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  bgColor?: string;
  width?: string;
  isLoading?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  bgColor = "bg-primary",
  width = "w-full",
  isLoading = false,
  ...props
}) => {
  return (
    <button
      className={`px-4 py-2 text-white font-bold rounded-md hover:bg-opacity-80 focus:outline-none ${bgColor} ${width}`}
      {...props}
    >
      {!isLoading ? (
        children
      ) : (
        <ClipLoader
          color={"gray"}
          loading={isLoading}
          size={18}
          aria-label="Loading Spinner"
        />
      )}
    </button>
  );
};

export default CustomButton;
