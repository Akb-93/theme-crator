//import React from 'react';

export default function ColorInput({ label, value, onChange }) {
  return (
    <label>
      {label}
      <input type="text" value={value} onChange={(element) => onChange(element.target.value)}/>
      <input type="color" value={value} onChange={(element) => onChange(element.target.value)}/>
    </label>
  );
}

 