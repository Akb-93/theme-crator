import { useState, useEffect } from 'react';
import { uid } from 'uid';
import ColorInput from './ColorInput';
import "./ColorForm.css";

export default function ColorForm({ onAddColor, initialValues }) { 

  // setting states
  const [role, setRole] = useState('');
  const [hex, setHex] = useState('#000000');
  const [contrastText, setContrastText] = useState('#FFFFFF');


  // show values
  useEffect(() => { 
    if (initialValues) {
      setRole(initialValues.role);
      setHex(initialValues.hex);
      setContrastText(initialValues.contrastText);
    }
  }, [initialValues]);

  // on click
  const handleSubmit = (event) => {
    event.preventDefault();
    onAddColor({
      id: initialValues ? initialValues.id : uid(), 
      role,
      hex,
      contrastText,
    });
    setRole('');
    setHex('#3f0097');
    setContrastText('#ffd15d');
  };

  // render input
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Role:
        <br />
        <input required id="role" type="text" value={role}
          onChange={(e) => setRole(e.target.value)}
        />
      </label>
      <br />
      <label>
        Hex:
        <br />
        <ColorInput  id="hex" value={hex} onChange={setHex} />
      </label>
      <br />
      <label>
        Contrast Text:
        <br />
        <ColorInput  id="contrast-text" value={contrastText} onChange={setContrastText} />
      </label>
      <br />
      <button type="submit">{initialValues ? 'Update Color' : 'Add Color'}</button> {/* Highlighted Change: Conditional button text */}
    </form>
  );
}