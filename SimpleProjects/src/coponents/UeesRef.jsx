import React, { useEffect, useRef, useState } from "react";

const UeesRef = () => {
  const useInterval = useRef(null);
  const [count, setCount] = useState(0);
  useEffect(() => {
    useInterval.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => {
      clearInterval(useInterval.current);
    };
  }, []);
  return (
    <div>
      <h1>Timer:{count}</h1>
      <button onClick={() => clearInterval(useInterval.current)}>
        Stop timer
      </button>
    </div>
  );
};

export default UeesRef;
