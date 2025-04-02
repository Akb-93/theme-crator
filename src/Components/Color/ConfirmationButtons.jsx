
//import React from 'react';


export default function ConfirmationButtons({ message, onConfirm, onCancel }) {
  return (
    <div className="confirmation-buttons-container">
      <p className="confirmation-message">{message}</p>
      <div className="confirmation-buttons">
        <button className="cancel-button" onClick={onCancel}>Cancel</button>
        <button className="confirm-button" onClick={onConfirm}>Delete</button>
      </div>
    </div>
  );
}

