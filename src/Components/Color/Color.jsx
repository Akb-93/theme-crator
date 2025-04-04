import { useState } from 'react';
import "./Color.css";
import ConfirmationButtons from './ConfirmationButtons';
import ColorForm from './ColorForm';
import CopyToClipboard from './CopyToClipboard';

export default function Color({ color, onDelete, onUpdateColor }) { 
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

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

  const handleEditClick = () => {
    
    setIsEditing(true);
  };

  const handleUpdate = (updatedColor) => {
    console.log("Updated color:", updatedColor);
    onUpdateColor(updatedColor);
    setIsEditing(false);
  };

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      
      <CopyToClipboard hex={color.hex} />
      
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>


      <button onClick={handleEditClick}>Edit</button>
      {!showConfirmation && onDelete && <button onClick={handleDeleteClick}>Delete</button>}
      {showConfirmation && (
        <ConfirmationButtons
          message="Are you sure ?"
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}

      
      {isEditing && (
        <ColorForm onAddColor={handleUpdate} initialValues={color} /> 
      )}
    </div>
  );
}