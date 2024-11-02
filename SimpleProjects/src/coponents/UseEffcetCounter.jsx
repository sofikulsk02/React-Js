import React, { useEffect, useState } from "react";

const UseEffcetCounter = () => {
  const increaseCount = () => {};
  const [count, setCount] = useState(0);
  useEffect(increaseCount, [count]);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Count</button>
    </div>
  );
};

export default UseEffcetCounter;
