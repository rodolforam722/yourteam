import { FaTshirt } from "react-icons/fa";

export function Button() {
  return (
    <button className="Player1">
      <FaTshirt className="Icon" color="red" />
      Jugador1
    </button>
  );
}

import React, { useState } from "react";

function App() {
  const [buttonName, setButtonName] = useState("Presionar");

  function handleChange(event) {
    setButtonName(event.target.value);
  }

  function handleClick() {
    console.log(`¡El botón "${buttonName}" fue presionado!`);
  }

  return (
    <div>
      <input type="text" value={buttonName} onChange={handleChange} />
      <button onClick={handleClick}>{buttonName}</button>
    </div>
  );
}

export default App;
