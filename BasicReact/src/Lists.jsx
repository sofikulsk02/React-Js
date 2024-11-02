import React from "react";

const Lists = () => {
  const numbers = [1, 2, 3, 4, 5, 6, 8, 9];
  return (
    <div>
      {numbers.map((num) => (
        <ul>
          <li>{num}</li>
        </ul>
      ))}
    </div>
  );
};

export default Lists;
