import React from "react";
import { useState } from "react";

const Switcher = () => {
  let [sw, setSw] = useState(true);
  let changeMode = () => {
    setSw(!sw);
    if (sw) {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    } else {
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }
  };
  return (
    <div>
      <div>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quis
        optio libero molestiae harum ducimus delectus sint ut ipsum itaque.
      </div>
      <button onClick={changeMode}>Mode</button>
    </div>
  );
};

export default Switcher;
