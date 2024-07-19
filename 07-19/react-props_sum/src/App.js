import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={2} valueB={4} />;
}

function Sum({ valueA, valueB }) {
  return valueA + valueB;
}
