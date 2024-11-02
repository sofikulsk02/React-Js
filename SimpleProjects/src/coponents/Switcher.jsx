import React, { useState } from "react";

const Switcher = () => {
  const [sw, setSw] = useState(true);
  const page = document.body.style.backgroundColor;
  const changeTheme = () => {
    setSw(() => {
      !sw;
    });
  };
  return (
    <div>
      <button onClick={changeTheme}>ChangeMode</button>
    </div>
  );
};

export default Switcher;
