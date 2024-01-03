import React, { useEffect, useState } from "react";
import styles from "../styles/Modal.module.css";
import { TodoItem } from "./Todos";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  options: string[];
  onModalChange: (value: string) => void;
  onTaskStatusChange: (value: string) => void;
  isEditClicked: boolean;
  editData: TodoItem;
}
const Modal = ({
  show,
  onClose,
  options,
  onModalChange,
  onTaskStatusChange,
  isEditClicked,
  editData,
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
  const handleEditModal = () => {
    if (show && isEditClicked) {
      setInputValue(editData.text);
      setSelectedOption(editData.status);
    } else {
      setInputValue("");
      setSelectedOption("incomplete");
    }
  };
  useEffect(() => {
    handleEditModal();
  }, [isEditClicked]);
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
          <button onClick={handlTaskAdding}>
            {isEditClicked ? "Update Task" : "Add Task"}
          </button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
