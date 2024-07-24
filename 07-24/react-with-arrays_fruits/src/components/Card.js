import "./Card.css";

export default function Card({ name, farbe }) {
  return (
    <p className="card" style={{ color: farbe }}>
      {name}
    </p>
  );
}
