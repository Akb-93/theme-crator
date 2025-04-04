import { useEffect } from 'react';
import { initialColors } from './lib/colors';
import Color from './Components/Color/Color';
import ColorForm from './Components/Color/ColorForm';
import './App.css';
import useLocalStorageState from 'use-local-storage-state';



export default function App() {
  // use local storage for colors
  const [colors, setColors] = useLocalStorageState('themeColors', {
    defaultValue: initialColors,
  });


  const handleAddColor = (newColor) => {
    setColors([newColor, ...colors]);
  };

  const handleDeleteColor = (id) => {
    setColors(colors.filter((color) => color.id !== id));
  };

  // color update
  const handleUpdateColor = (updatedColor) => {
    console.log("got updated color:", updatedColor);
    setColors(colors.map((color) =>
      color.id === updatedColor.id ? updatedColor : color
    ));
    console.log("new colors:", colors);
  };
// checking storage and store if missing
  useEffect(() => {
    if (!localStorage.getItem('themeColors')) {
      setColors(initialColors);
    }
  }, [setColors]);

  return (
    <>
      <header>
        <h1>Theme Creator</h1>
        <ColorForm onAddColor={handleAddColor} />
      </header>
      <main>
        {colors.length === 0 ? (
          <p className="add--colors__box">Add some colors!</p>) : (
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