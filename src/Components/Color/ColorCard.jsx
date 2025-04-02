import React from 'react';

export default function ColorCard({ hexValue, role, color, contrastText }) {
  return (
    <div className="color-card">
      <p>Hex: {hexValue}</p>
      <p>Role: {role}</p>
      <p>Color: {color}</p>
      <p>Contrast text: {contrastText}</p>
    </div>
  );
}

