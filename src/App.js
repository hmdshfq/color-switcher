import "./App.css";
import React, { useState } from "react";
import ColorChangeButton from "./ColorChangeButton";

function App() {
  const [color, setColor] = useState("");
  return (
    <div className={`react-root ${color}`}>
      <div className="centered">
        <h1>Color Picker</h1>
        <ColorChangeButton color="salmon" setColor={setColor} />
        <ColorChangeButton color="tomato" setColor={setColor} />
        <ColorChangeButton color="lime" setColor={setColor} />
      </div>
    </div>
  );
}

export default App;
