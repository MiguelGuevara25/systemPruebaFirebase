import { useState } from "react";
import Modal from "react-modal";
import TableTrabajadores from "../components/TableTrabajadores";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Trabajadores = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <TableTrabajadores />

      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <form>
          <input
            type="file"
            name="trabajadorPhoto"
            accept=".png, .jpg, .jpeg"
            onChange={(e) => {
              console.log(e.target.files[0]);
            }}
          />
        </form>
        <button onClick={closeModal}>close</button>
      </Modal>
    </>
  );
};

export default Trabajadores;
