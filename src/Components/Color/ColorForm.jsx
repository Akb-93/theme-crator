import { useState } from 'react';
import { uid } from 'uid';
import ColorInput from './ColorInput';
import "./ColorForm.css";



export default function ColorForm({ onAddColor }) {

// setting states
 const [role, setRole] = useState('');
 const [hex, setHex] = useState('#000000');
 const [contrastText, setContrastText] = useState('#FFFFFF');

// on click
 const handleSubmit = (event) => {event.preventDefault(); onAddColor({id: uid(),role,hex,contrastText,});
   setRole('');
   setHex('#000000');
   setContrastText('#FFFFFF');
 };

// render input
 return (
   <form onSubmit={handleSubmit}>
     <label>
       Role:
       <input type="text" value={role} onChange={(e) => setRole(e.target.value)}/>
     </label>
     <ColorInput label="Hex:" value={hex} onChange={setHex} />
     <ColorInput label="Contrast Text:" value={contrastText} onChange={setContrastText} />
     <button type="submit">Add Color</button>
   </form>
 );
}




