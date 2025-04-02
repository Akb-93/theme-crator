import { useState } from 'react';
import { initialColors } from './lib/colors';
import Color from './Components/Color/Color';
import ColorForm from './Components/Color/ColorForm'; // import ColorForm
import './App.css';


export default function App() {
  const [colors, setColors] = useState(initialColors);

  const handleAddColor = (newColor) => {
    setColors([newColor, ...colors]);
  };
  //handle delete
  const handleDeleteColor = (id) => {
    setColors(colors.filter((color) => color.id !== id));
  };

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={handleAddColor} /> {/* render ColorForm */}

      {/* show cards if not show add message */}
      {colors.length === 0 ? (
        <p className='add--colors__box'>Add some colors!</p>
      ) : (
        colors.map((color) => (
          <Color key={color.id} color={color} onDelete={() => handleDeleteColor(color.id)} />
        ))
      )}
      <h2>Here I am</h2>
     
    </>
  );
}


console.log("Find Issue 1");





