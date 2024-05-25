import React from 'react';
import './Modal.css'; // Import your CSS file for modal styles

const Modal = ({ handleClose, show, children }) => {
  // Render nothing if the "show" prop is false
  if (!show) {
    return null;
  }

  return (
    <div className="modal" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={handleClose}>&times;</span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
