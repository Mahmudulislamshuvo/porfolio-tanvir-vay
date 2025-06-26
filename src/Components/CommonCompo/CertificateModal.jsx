import Modal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    zIndex: 9999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    padding: 0,
    border: "none",
    background: "none",
    overflow: "hidden", // Prevent internal scrolling
    position: "relative",
    inset: "auto",
  },
};

Modal.setAppElement("#root");

const CerTificateModal = ({ modalIsOpen, closeModal, certificate }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Certificate Modal"
    >
      <div className="relative flex items-center justify-center h-screen w-screen">
        {certificate && (
          <img
            src={certificate.image}
            alt={certificate.title}
            className="object-contain max-h-full max-w-full"
          />
        )}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-white transition-colors hover:bg-red-500 p-1 lg:p-2 xl:p-3 "
        >
          &times;
        </button>
      </div>
    </Modal>
  );
};

export default CerTificateModal;
