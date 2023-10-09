import { useState } from "react";
import Modal from "react-modal";
import TableTrabajadores from "../components/TableTrabajadores";
import { uploadFile } from "../firebase/config";

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
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const result = await uploadFile(file);
      setResult(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <TableTrabajadores />

      <div>
        <img src={result} alt="" />
      </div>

      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <form onSubmit={handleUpload}>
          <input
            type="file"
            name="trabajadorPhoto"
            accept=".png, .jpg, .jpeg"
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          />
          <input type="submit" value="Upload" />
        </form>
        <input type="button" value="Close" onClick={closeModal} />
      </Modal>
    </>
  );
};

export default Trabajadores;
