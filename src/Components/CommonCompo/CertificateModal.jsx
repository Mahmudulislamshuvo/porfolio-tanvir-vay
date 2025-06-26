import Modal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    zIndex: 9999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem",
  },
  content: {
    padding: "0",
    border: "none",
    background: "none",
    overflow: "visible",
    position: "relative",
    inset: "auto",
    width: "100%",
    maxWidth: "100%",
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
      <div className="relative w-[90vw] max-w-lg rounded-lg bg-white p-2 shadow-xl md:max-w-2xl lg:max-w-4xl">
        <button
          onClick={closeModal}
          className="absolute -top-3 -right-3 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-red-500"
        >
          &times;
        </button>

        {certificate && (
          <img
            src={certificate.image}
            alt={certificate.title}
            className="h-auto w-full rounded-md object-contain max-h-[85vh]"
          />
        )}
      </div>
    </Modal>
  );
};

export default CerTificateModal;
