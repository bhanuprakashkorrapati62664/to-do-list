import { useState } from "react";
import DropDown from "./components/DropDown";
import Heading from "./components/Heading";
import Modal from "./components/Modal";
import Todos from "./components/Todos";
import "./App.css";

function App() {
  const options = ["All", "incomplete", "Completed"];
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState("");
  const [taskStatus, setTaskStatus] = useState("");
  const [taskNotify, setTaskNotify] = useState("");
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
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
      />
      <DropDown options={options} notifyTaskStatus={setTaskNotify} />
      <Todos
        modalData={modalData}
        taskStatus={taskStatus}
        notifyTaskStatus={taskNotify}
      />
    </>
  );
}

export default App;
