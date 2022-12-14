import React, { useRef } from "react";
import ReactDOM from "react-dom";
import "../style.css";

function Modal({ showModal, setShowModal, children }) {
  const modalRef = useRef(null);

  const handleCloseOnClick = (e) => {
    const clickPosition = e.target.getBoundingClientRect();

    clickPosition.top === 0 && setShowModal(false);
  };

  if (showModal) {
    return ReactDOM.createPortal(
      <div className="modal" onClick={(e) => handleCloseOnClick(e)}>
        <div className="testWrapper" ref={modalRef}>
          {children}
        </div>
      </div>,

      document.querySelector("#modal")
    );
  }
}

export default Modal;
