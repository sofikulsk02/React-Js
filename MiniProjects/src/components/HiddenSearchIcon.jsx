import React, { useState } from "react";
const HiddenSearchIcon = () => {
  const [showInput, setShowInput] = useState(false);
  const [bgcolor, setBgcolor] = useState("white");
  const handleClick = (e) => {
    setBgcolor("#1b1b1b");
    if (e.target.className === "container") {
      setBgcolor("white");
      setShowInput(false);
    }
  };
  return (
    <div
      style={{
        backgroundColor: bgcolor,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100wv",
      }}
      onClick={handleClick}
    >
      {showInput ? (
        <input type="text" className="container" placeholder="search..." />
      ) : (
        <button onClick={() => setShowInput(true)}>Search</button>
      )}
    </div>
  );
};

export default HiddenSearchIcon;
