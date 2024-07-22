import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Hallo1</Button>
      <Button>Hallo2</Button>
      <Button>Hallo3</Button>
      <Button>Hallo4</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
