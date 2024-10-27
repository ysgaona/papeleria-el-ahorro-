"use client";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  custom?: string;
  icon?: IconType;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  disabled,
  outline,
  small,
  custom,
  icon: Icon,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        disabled:opacity-70
        disabled:cursor-not-allowed
        rounded-md
        hover:opacity-80
        transition
        w-64
        border-gray-700
        flex
        items-center
        justify-center
        gap-2
        ${
          outline ? "bg-transparent" : "bg-gray-800"
        } 
        ${
          outline ? "text-gray-800" : "text-white"
        }  
        ${small ? "text-sm font-light" : "text-md font-semibold"}
        ${small ? "py-1 px-2 border-[1px]" : "py-2 px-2 border-2"}
        ${custom ? custom : ""}
      `}
      style={
        outline
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "#282828" }
      } 
    >
      {Icon && <Icon size={24} />}
      {label}
    </button>
  );
};

export default Button;
