import React, { useState } from "react";

interface DropDownProp {
  options: string[];
  notifyTaskStatus: (value: string) => void;
}
const DropDown = ({ options, notifyTaskStatus }: DropDownProp) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    notifyTaskStatus(value);
  };
  return (
    <>
      <select value={selectedOption} onChange={handleChange}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </>
  );
};

export default DropDown;
