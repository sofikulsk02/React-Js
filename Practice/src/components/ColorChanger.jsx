import React from "react";
import { useState } from "react";

const ColorChanger = () => {
  const [color, setColor] = useState("olive");
  const changeColor = () => {
    document.body.style.backgroundColor = color;
    setColor(color);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter color name"
        onChange={(e) => setColor(e.target.value)}
      />
      <button onClick={changeColor}>Change Color</button>
    </div>
  );
};
export default ColorChanger;
