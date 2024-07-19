import "./styles.css";

export default function App() {
  return (
    <>
      <Greeting name="Leon" />
      <Greeting name="Marcus" isCoach />
    </>
  );
}

function Greeting({ name, isCoach }) {
  return <h1>Hello, {isCoach ? "coach" : name}!</h1>;
}
