import React from "react";

const ComponentOne = ({ count, handleClick }) => {
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default ComponentOne;
