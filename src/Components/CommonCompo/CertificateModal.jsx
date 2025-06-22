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
    overflow: "visible",
    zIndex: 10000,
    maxWidth: "90%",
    maxHeight: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
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
      <div className="w-full h-full">
        {/* Close button */}
        <div className="flex justify-between items-center">
          <button
            onClick={closeModal}
            className=" text-white text-xl z-50 hover:text-gray-300 transition-colors"
          >
            Close
          </button>
          <button
            onClick={closeModal}
            className="text-xl text-white bg-red-400 rounded-full h-8 w-8"
          >
            X
          </button>
        </div>

        {/* Certificate Image */}
        {certificate && (
          <img
            src={certificate.image}
            alt={certificate.title}
            className="max-w-[800px] max-h-[500px] object-contain"
          />
        )}
      </div>
    </Modal>
  );
};

export default CerTificateModal;
