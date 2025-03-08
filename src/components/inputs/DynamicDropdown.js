import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

const Dropdown = ({
  options = [],
  onSelect,
  tag = "item",
  placeholder = "Select an option",
  valueKey = "id", // Key for the value attribute
  displayKey = "code", // Key for the display text
  className = "",
  divClassName = "",
  emptyMessage = `No ${tag} available`, // Message for empty dropdown
}) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility
  const [selectedOption, setSelectedOption] = useState(null); // State to store the selected option
  const dropdownRef = useRef(null); // Ref to handle clicks outside the dropdown

  // Ensure options is an array
  if (!Array.isArray(options)) {
    console.error("Dropdown options must be an array");
    return null;
  }

  // Handle clicking outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle selecting an option
  const handleSelect = (option) => {
    setSelectedOption(option);
    onSelect(option[valueKey]); // Pass the selected value to the parent component
    setIsOpen(false); // Close the dropdown after selection
  };

  return (
    <div className={`${divClassName} relative w-full`} ref={dropdownRef}>
      {/* Dropdown Trigger */}
      <div
        className={`${className} flex items-center justify-between p-2 cursor-pointer`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedOption ? selectedOption[displayKey] : placeholder}</span>
        <span>{isOpen ? <ChevronUp/> : <ChevronDown/>}</span>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 card rounded shadow-lg">
          {options.length > 0 ? (
            options.map((option) => (
              <div
                key={option[valueKey]}
                className="p-2 hover:border-b cursor-pointer"
                onClick={() => handleSelect(option)}
              >
                {option[displayKey]}
              </div>
            ))
          ) : (
            <div className="p-2 text-gray-500">{emptyMessage}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
