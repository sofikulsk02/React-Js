import React from "react";
import Cards from "./Cards";

const Event = () => {
  let [count, setCount] = React.useState(0);
  const handleClick = () => {
    console.log("You clicked me");
  };
  const changeColor = () => {
    return <Cards></Cards>;
  };
  let handleCopy = () => {
    setCount = count + 1;
    if (setCount > 1) console.log("fired");
  };
  return (
    <div>
      <button
        onClick={changeColor}
        style={{
          color: "white",
          backgroundColor: "olive",
          borderRadius: "2px",
          padding: "5px",
        }}
      >
        click here
      </button>
      <p onCopy={handleCopy}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
        cupiditate praesentium tenetur officiis, sint necessitatibus adipisci
        dolor exercitationem est nisi?
      </p>
    </div>
  );
};

export default Event;
