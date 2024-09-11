import css from "./LogoutModal.module.css";
import Modal from "react-modal";

Modal.setAppElement("#root");

const LogoutModal = ({ isOpen, onRequestClose, onConfirm, title, message }) => {
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
    content: {
      position: "absolute",
      top: "20%",
      left: "auto",
      right: "42%",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0",
      border: "none",
      maxWidth: "100%",
      maxHeight: "100%",
      height: "auto",
      overflow: "hidden",
    },
  };
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modal}
      overlayClassName={css.overlay}
      style={customStyles}
    >
      <div className={css.container}>
        <h2>{title}</h2>
        <p>{message}</p>
        <div className={css.btns}>
          <button className={css.confirmBtn} onClick={onConfirm}>
            Yes, confirm
          </button>
          <button className={css.cancelBtn} onClick={onRequestClose}>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default LogoutModal;
