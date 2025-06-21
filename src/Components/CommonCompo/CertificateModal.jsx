import React from "react";
import Modal from "react-modal";

// Custom styles with proper z-index handling
const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.85)", // Dark background overlay
    zIndex: 9999, // Ensure overlay is on top of everything
    display: "flex",
    justifyContent: "center",
    alignItems: "center", // Center the modal vertically and horizontally
  },
  content: {
    padding: 0,
    border: "none",
    background: "none",
    overflow: "visible",
    zIndex: 10000, // Ensure content is above the overlay
    maxWidth: "90%", // Limit the max width
    maxHeight: "90%", // Limit the max height
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
