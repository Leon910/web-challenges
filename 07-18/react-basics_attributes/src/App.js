import React from "react";
import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article>">
      <h2 className="article_title">Hello this is my h2</h2>
      <label htmlFor="input_id"></label>
      <input id="input_id" />
      <a
        className="article_link"
        href="https://en.wikipedia.org/wiki/Wikipedia"
      >
        Yeaaaaaah!
      </a>
    </article>
  );
}
