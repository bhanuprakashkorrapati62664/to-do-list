import { useState } from "react";
import DropDown from "./components/DropDown";
import Heading from "./components/Heading";
import Modal from "./components/Modal";
import Todos from "./components/Todos";

function App() {
  const options = ["All", "incomplete", "Completed"];
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState("");
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  return (
    <>
      <Heading />
      <button onClick={handleOpenModal}>Add task</button>
      <Modal
        show={showModal}
        onClose={handleCloseModal}
        options={options}
        onModalChange={setModalData}
      />
      <DropDown options={options} />
      <Todos modalData={modalData} />
    </>
  );
}

export default App;
