import React from "react";

const ComponentTwo = ({ count, handleClick }) => {
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default ComponentTwo;
