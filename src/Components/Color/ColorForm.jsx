import { useState } from 'react';
import { uid } from 'uid';
import ColorInput from './ColorInput';
import "./ColorForm.css";
// form function
export default function ColorForm({ onAddColor }) {

// setting states
 const [role, setRole] = useState('');
 const [hex, setHex] = useState('#000000');
 const [contrastText, setContrastText] = useState('#FFFFFF');

// on click /update state
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
     <br/>
     <ColorInput label="Hex:" value={hex} onChange={setHex} />
     <br/>
     <ColorInput label="Contrast Text:" value={contrastText} onChange={setContrastText} />
     <br/>
     <button type="submit">Add Color</button>
   </form>
 );
}




