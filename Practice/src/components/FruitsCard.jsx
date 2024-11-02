import React from "react";

const FruitsCard = ({ imgUrl, description }) => {
  return (
    <div
      style={{
        backgroundColor: "teal",
        height: "250px",
        width: "200px",
        borderRadius: "10px",
        overflow: "hidden",
        margin: "10px",
      }}
    >
      <div
        className="card-img"
        style={{ height: "50%", width: "100%", overflow: "hidden" }}
      >
        <img src={imgUrl} alt="" style={{ background: "cover" }} />
      </div>
      <div
        className="card-des"
        style={{
          height: "50%",
          width: "100%",
          overflow: "hidden",
          backgroundColor: "maroon",
          color: "white",
        }}
      >
        <p>{description}</p>
        <button>change</button>
      </div>
    </div>
  );
};

export default FruitsCard;
