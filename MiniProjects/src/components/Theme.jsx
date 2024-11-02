import React, { useState } from "react";

const Theme = () => {
  const [themeColor, setThemeColor] = useState("white");
  const [textColor, setTextcolor] = useState("#1b1b1b");
  const [buttons, setButtons] = useState("#1b1b1b");
  const handleClick = () => {
    setThemeColor(themeColor == "white" ? "#1b1b1b" : "white");
    setTextcolor(textColor == "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    setButtons(themeColor == "white" ? "#1b1b1b" : "white");
  };
  return (
    <div
      style={{
        backgroundColor: themeColor,
        color: textColor,
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        style={{
          buttons,
          color: textColor,
          border: `1px solid ${textColor}`,
          borderRadius: "4px",
          marginRight: "10px",
        }}
        onClick={handleClick}
      >
        {themeColor == "#1b1b1b" ? "Change to bright" : "Change to dark"}
      </button>
      <section style={{ color: textColor }}>Welcome to the real world</section>
    </div>
  );
};

export default Theme;
