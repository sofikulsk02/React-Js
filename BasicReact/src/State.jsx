import React, { useState } from "react";

const State = () => {
  const [count, setCount] = useState(0);
  let handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    if (count == 0) {
      return;
    } else setCount(count - 1);
  };
  return (
    <div>
      <p>{count}</p>
      <button
        onClick={handleIncrement}
        style={{
          backgroundColor: "green",
          margin: "10px",
          width: "20px",
          borderRadius: "2px",
        }}
      >
        +
      </button>
      <button
        onClick={handleDecrement}
        style={{
          backgroundColor: "green",
          margin: "10px",
          width: "20px",
          borderRadius: "2px",
        }}
      >
        -
      </button>
    </div>
  );
};

export default State;
