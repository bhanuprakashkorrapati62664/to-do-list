import React, { useState } from "react";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  options: string[];
  onModalChange: (value: string) => void;
}
const Modal = ({ show, onClose, options, onModalChange }: ModalProps) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [inputValue, setInputValue] = useState("");
  const handleChangeDropDown = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value;
    setSelectedOption(value);
  };
  const handleChangeInputField = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setInputValue(value);
  };
  const handlTaskAdding = () => {
    if (inputValue !== "") {
      onModalChange(inputValue);
      setInputValue("");
    }
  };
  if (!show) {
    return null;
  }
  return (
    <div>
      <div>
        <button onClick={onClose}>X</button>
        <h1>ADD TODO</h1>
        <p>Title</p>
        <input value={inputValue} onChange={handleChangeInputField} />
        <select value={selectedOption} onChange={handleChangeDropDown}>
          {options.map((option, index) =>
            option !== "All" ? (
              <option key={index} value={option}>
                {option}
              </option>
            ) : (
              ""
            )
          )}
        </select>
        <div>
          <button onClick={handlTaskAdding}>Add Task</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
