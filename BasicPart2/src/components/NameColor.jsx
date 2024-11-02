import React from "react";

const NameColor = () => {
  const [color, setColor] = React.useState("red");
  const changeColor = () => {
    let field = document.querySelector("#textName");
    setColor((document.body.style.backgroundColor = field.value));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="enter color name"
        id="textName"
        onKeyDown={changeColor}
      />
      <button onClick={changeColor}>changeColor</button>
    </div>
  );
};

export default NameColor;
