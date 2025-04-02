import React from 'react';
import ColorCard from './ColorCard';
import { initialColors } from 'src/lib/colors.js';

export default function ThemeDisplay() {
  return (
    <div className="theme-display">
      {initialColors.map((color) => (
        <ColorCard
          key={color.id}
          hexValue={color.hex}
          role={color.role}
          color={color.hex}
          contrastText={color.contrastText}
        />
      ))}
    </div>
  );
}

