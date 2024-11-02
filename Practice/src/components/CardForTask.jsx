import React from "react";

const CardForTask = ({ task }) => {
  return (
    <div
      style={{
        backgroundColor: "maroon",
        height: "25px",
        width: "200px",
        border: "1px solid black",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5px",
        color: "white",
        margin: "4px",
      }}
    >
      {task}
    </div>
  );
};

export default CardForTask;
