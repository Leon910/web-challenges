import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("Clicking works");
  }

  return <Button color="green" text="Hello" onClick={handleClick} />;
}

function Button({ color, disabled, text, onClick }) {
  return (
    <>
      <button
        style={{ backgroundColor: color }}
        disabled={disabled}
        onClick={onClick}
      >
        {text}
      </button>
    </>
  );
}
