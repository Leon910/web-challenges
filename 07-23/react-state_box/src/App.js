import "./styles.css";
import { useState } from "react";

export default function App() {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(!isActive);
    // Check that the value changes correctly.
    console.log(isActive);
  }

  return (
    <main>
      <div className={`box ${isActive ? "box--active" : ""}`} />
      <button onClick={handleClick}>
        {isActive ? "Activate" : "Deactivate"}
      </button>
    </main>
  );
}

// import "./styles.css";

// export default function App() {
//   let isActive = false;

//   function handleClick() {
//     isActive = !isActive;
//     // Check that the value changes correctly.
//     console.log(isActive);
//   }

//   return (
//     <main>
//       <div className={`box ${isActive ? "box--active" : ""}`} />
//       <button onClick={handleClick}>Activate</button>
//     </main>
//   );
// }
