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
     <label> Role:
     <br></br>
       <input id="role" type="text" value={role} onChange={(e) => setRole(e.target.value)}/>
       </label>
       <br></br>
       <label> Hex:
       <br></br>
     <ColorInput id="hex"value={hex} onChange={setHex} />
     </label>
     <br></br>
     <label> Contrast Text:
     <br></br>
     <ColorInput id="contrast-text"  value={contrastText} onChange={setContrastText} />
     </label>
     <br></br>
     <button type="submit">Add Color</button>
   </form>
 );
}




