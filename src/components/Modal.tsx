import React, { useState } from "react";
import styles from "../styles/Modal.module.css";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  options: string[];
  onModalChange: (value: string) => void;
  onTaskStatusChange: (value: string) => void;
}
const Modal = ({
  show,
  onClose,
  options,
  onModalChange,
  onTaskStatusChange,
}: ModalProps) => {
  const [selectedOption, setSelectedOption] = useState("incomplete");
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
      onTaskStatusChange(selectedOption);
      setInputValue("");
      onClose();
    }
  };
  if (!show) {
    return null;
  }
  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          X
        </button>
        <div className={styles.modalHeader}>
          <h1>ADD TODO</h1>
        </div>
        <div className={styles.modalBody}>
          <p>Title</p>
          <input value={inputValue} onChange={handleChangeInputField} />
          <select value={selectedOption} onChange={handleChangeDropDown}>
            {options.map((option, index) =>
              option !== "All" ? (
                <option key={index} value={option}>
                  {option}
                </option>
              ) : null
            )}
          </select>
        </div>
        <div className={styles.modalFooter}>
          <button onClick={handlTaskAdding}>Add Task</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
