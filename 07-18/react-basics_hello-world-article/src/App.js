import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>This is Me</h1>
      <p>Some Text</p>
    </article>
  );
}
