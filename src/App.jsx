import { useState } from 'react';
import { initialColors } from './lib/colors';
import Color from './Components/Color/Color';
import ColorForm from './Components/Color/ColorForm';
import './App.css';

export default function App() {
  const [colors, setColors] = useState(initialColors);

  const handleAddColor = (newColor) => {
    setColors([newColor, ...colors]);
  };

  const handleDeleteColor = (id) => {
    setColors(colors.filter((color) => color.id !== id));
  };

  // Highlighted Change: Added handleUpdateColor function
  const handleUpdateColor = (updatedColor) => {
    console.log("got updated color:", updatedColor);
    setColors(colors.map((color) =>
      color.id === updatedColor.id ? updatedColor : color
    ));
    console.log("new colors:", colors);
  };

  return (
    <>
      <header>
        <h1>Theme Creator</h1>
        <ColorForm onAddColor={handleAddColor} />
      </header>
      <main>
        {colors.length === 0 ? (
          <p className="add--colors__box">Add some colors!</p>
        ) : (
          colors.map((color) => (
            <Color
              key={color.id}
              color={color}
              // handle delete color
              onDelete={() => handleDeleteColor(color.id)}
              // handle update color
              onUpdateColor={handleUpdateColor}
            />
          ))
        )}
      </main>
      <footer>
        <h2>Here I am</h2>
      </footer>
    </>
  );
}

console.log("Find Issue 1");