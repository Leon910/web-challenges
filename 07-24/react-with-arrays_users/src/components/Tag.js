import "./Tag.css";

export default function Tag({ tag }) {
  if (tag === "admin") {
    return <li className="tag--highlight tag">{tag}</li>;
  } else {
    return <li className="tag">{tag}</li>;
  }
}
