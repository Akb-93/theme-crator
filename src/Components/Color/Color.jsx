import "./Color.css";
import ConfirmationButtons from './ConfirmationButtons';
import  { useState } from 'react';

//color function

  export default function Color({ color, onDelete }) {
    const [showConfirmation, setShowConfirmation] = useState(false);
  
    const handleDeleteClick = () => {
      setShowConfirmation(true);
    };
  
    const handleConfirmDelete = () => {
      onDelete();
      setShowConfirmation(false);
    };
  
    const handleCancelDelete = () => {
      setShowConfirmation(false);
    };

  //render card
  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      {/* delete button*/}
      
      {!showConfirmation && onDelete && <button onClick={handleDeleteClick}>Delete</button>}
      {showConfirmation && (
        <ConfirmationButtons
          message="Are you sure ?"
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />)}
      

      </div>
    
  );
  
}
