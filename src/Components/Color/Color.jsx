import "./Color.css";

export default function Color({ color, onDelete }) {
  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>
      {onDelete && <button onClick={onDelete}>Delete</button>}
    </div>
  );
}
