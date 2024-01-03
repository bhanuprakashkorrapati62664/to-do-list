import { useState } from "react";
import DropDown from "./components/DropDown";
import Heading from "./components/Heading";
import Modal from "./components/Modal";
import Todos from "./components/Todos";
import { TodoItem } from "./components/Todos";
import "./App.css";

function App() {
  const options = ["All", "incomplete", "Completed"];
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState("");
  const [taskStatus, setTaskStatus] = useState("");
  const [taskNotify, setTaskNotify] = useState("");
  const [editClicked, setEditClicked] = useState(false);
  const defaultTodoItem: TodoItem = {
    text: "",
    timestamp: "",
    status: "",
  };
  const [editData, setEditData] = useState<TodoItem>(defaultTodoItem);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => {
    setShowModal(false);
    setEditClicked(false);
  };
  return (
    <>
      <Heading className="heading" />
      <button onClick={handleOpenModal}>Add task</button>
      <Modal
        show={showModal}
        onClose={handleCloseModal}
        options={options}
        onModalChange={setModalData}
        onTaskStatusChange={setTaskStatus}
        isEditClicked={editClicked}
        editData={editData}
      />
      <DropDown options={options} notifyTaskStatus={setTaskNotify} />
      <Todos
        modalData={modalData}
        taskStatus={taskStatus}
        notifyTaskStatus={taskNotify}
        openModel={handleOpenModal}
        editingCicked={setEditClicked}
        editData={setEditData}
        isEditClicked={editClicked}
      />
    </>
  );
}

export default App;
