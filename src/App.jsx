import { useState } from 'react';
import { initialColors } from './lib/colors';
import Color from './Components/Color/Color';
import ColorForm from './Components/Color/ColorForm'; // Import ColorForm
import './App.css';

function App() {
  const [colors, setColors] = useState(initialColors);

  const handleAddColor = (newColor) => {
    setColors([newColor, ...colors]);
  };

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onAddColor={handleAddColor} /> {/* Render ColorForm */}
      {colors.map((color) => (
        <Color key={color.id} color={color} />
      ))}
      <h2>Here I am</h2>
      yxx
    </>
  );
}

export default App;
console.log("Find Issue 1");





