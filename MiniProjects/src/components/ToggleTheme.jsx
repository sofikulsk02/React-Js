import React from "react";
import { useState } from "react";
const ToggleTheme = () => {
  const [themeColor, setThemeColor] = useState("white");
  const [textColor, setTextColor] = useState("#1b1b1b");
  const [buttons, setButtons] = useState("#1b1b1b");
  const handleClick = () => {
    setThemeColor(themeColor == "white" ? "#1b1b1b" : "white");
    setTextColor(textColor == "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    setButtons(themeColor == "white" ? "#1b1b1b" : "white");
  };
  return (
    <div
      style={{
        backgroundColor: themeColor,
        color: { textColor },
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        onClick={handleClick}
        style={{ buttons, color: textColor, border: `2px solid${textColor}` }}
      >
        {themeColor == "#1b1b1b" ? "white" : "Dark"}
      </button>
      <section style={{ color: textColor }}>
        Welcome to
        <br /> real world...
      </section>
    </div>
  );
};

export default ToggleTheme;
