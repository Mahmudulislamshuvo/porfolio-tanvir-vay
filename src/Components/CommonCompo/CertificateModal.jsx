import Modal from "react-modal";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    zIndex: 9999,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "1rem", // Fallback padding
  },
  content: {
    padding: "0",
    border: "none",
    background: "none",
    overflow: "visible",
    position: "relative",
    inset: "auto",
  },
};

// Set the app element for accessibility
Modal.setAppElement("#root");

const CerTificateModal = ({ modalIsOpen, closeModal, certificate }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Certificate Modal"
    >
      {/* THE RESPONSIVE SIZING FIX:
        This div is now the visible modal window. It has a responsive width and max-width.
      */}
      <div className="relative w-[90vw] max-w-lg rounded-lg bg-white p-2 shadow-xl md:max-w-2xl lg:max-w-4xl">
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute -top-3 -right-3 z-50 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-red-500"
        >
          &times;
        </button>

        {/* Certificate Image */}
        {certificate && (
          <img
            src={certificate.image}
            alt={certificate.title}
            // Now constrained by the modal window, with a max-height
            className="h-auto w-full rounded-md object-contain max-h-[85vh]"
          />
        )}
      </div>
    </Modal>
  );
};

export default CerTificateModal;
