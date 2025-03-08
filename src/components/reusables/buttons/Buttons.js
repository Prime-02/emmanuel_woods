import { Loader } from "@/components/Loader/Loader";
import React from "react";



const Button = ({
  icon,
  onClick,
  className = "",
  text,
  loading,
  disabled,
}) => {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={` ${className} cursor-pointer  min-w-fit min-h-fit flex items-center justify-center rounded-full active:translate-y-1  focus:outline-none transition duration-200 shadow-md`}
      onClick={onClick}
    >
      {loading || disabled ? (
        <Loader smaillerSize={true}/>
      ) : (
        <span className="flex items-center space-x-2">
          {icon}
          {text && <span>{text}</span>}
        </span>
      )}
    </button>
  );
};

export default Button;
