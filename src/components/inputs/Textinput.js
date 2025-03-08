import { Eye, EyeClosed } from "lucide-react";
import React, { useState } from "react";
import Dropdown from "./DynamicDropdown";
import PhoneInputComponent from "../phoneInput/PhoneInput";

export const Textinput = ({
  label,
  type = "text",
  value,
  changed,
  className = "",
  placeholder,
  labelStyle = "card",
  tag,
  id = "floating_label",
  options, // Add options prop
}) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const toggleShowPassword = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Handle date input change
  const handleDateChange = (e) => {
    const selectedDate = e.target.value; // This will be in YYYY-MM-DD format
    changed(selectedDate); // Pass the selected date to the parent component
  };

  if (type === "dropdown") {
    return (
      <Dropdown
        options={options || []} // Use options prop
        onSelect={(selectedValue) => changed(selectedValue)}
        placeholder={placeholder}
        tag={tag}
        valueKey="id"
        displayKey="code"
        className={labelStyle}
        divClassName={className}
        emptyMessage={`No ${tag} available`}
      />
    );
  }

  if (type === 'phone') {
    return (
      <PhoneInputComponent
      label={label}
      phone={value}
      setPhone={changed}
      />
    )
  }

  return (
    <div className="relative">
      <input
        value={value}
        type={
          type === "password"
            ? passwordVisible
              ? "text"
              : "password"
            : type === "date"
            ? "date" // Set type to "date" for date inputs
            : type === "phone"
            ? "phone"
            : type
        }
        onChange={
          type === "date" ? handleDateChange : (e) => changed(e.target.value)
        }
        id={id}
        className={`${className} block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent border-1 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer`}
        placeholder=" "
      />
      <label
        htmlFor={id}
        className={`absolute text-sm dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 origin-[0] px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 ${labelStyle}`}
      >
        {label}
      </label>
      {type === "password" && (
        <button
          type="button"
          className="absolute top-2 right-5 cursor-pointer"
          onClick={toggleShowPassword}
          aria-label={passwordVisible ? "Hide password" : "Show password"}
        >
          {passwordVisible ? <Eye /> : <EyeClosed />}
        </button>
      )}
    </div>
  );
};

export const TextArea = ({
  label,
  value,
  changed,
  className,
  id,
  labelStyle,
}) => {
  return (
    <div className="relative h-full">
      <textarea
        value={value}
        onChange={changed}
        id={id}
        className={`${className} block px-2.5 pb-2.5 pt-4 w-full text-sm bg-transparent  border-1 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none  focus:ring-0 focus:border-blue-600 peer`}
        placeholder=" "
        required
      ></textarea>
      <label
        htmlFor={id}
        className={`absolute text-sm   dark:text-gray-400 duration-300 transhtmlForm -translate-y-4 scale-75 top-2 z-10 origin-[0]   px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 ${
          labelStyle ? labelStyle : `card`
        }`}
      >
        {label}
      </label>
    </div>
  );
};
