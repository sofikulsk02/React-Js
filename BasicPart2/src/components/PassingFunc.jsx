import React from "react";
const PassingFunc = () => {
  const [random, setRandom] = React.useState(() => {
    const rand = Math.floor(Math.random() * 10);
    return rand;
  });
  const randomNum = () => {
    let num = Math.floor(Math.random() * 100);
    setRandom(num);
  };
  return (
    <div>
      <p>{random}</p>
      <button onClick={randomNum}>generateRandom</button>
    </div>
  );
};

export default PassingFunc;
