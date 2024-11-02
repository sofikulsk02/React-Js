import React from "react";
import { useState } from "react";
const Counter = () => {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };
  const sound = () => {
    return <audio src="./mouse-click-sound-233951.mp3"></audio>;
  };
  const handleCount2 = () => {
    if (count == 0) return;
    setCount(count - 1);
  };
  return (
    <div>
      <p>{count}</p>

      <button onClick={handleCount} style={{ backgroundColor: "red" }}>
        +
      </button>
      <button onClick={handleCount2} style={{ backgroundColor: "blue" }}>
        -
      </button>
    </div>
  );
};

export default Counter;
