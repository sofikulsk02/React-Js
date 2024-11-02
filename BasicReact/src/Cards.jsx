import React from "react";

const Cards = (props) => {
  return (
    <div>
      <div className="card h-[260px] w-[200px] border border-black rounded-md shadow-2xl m-40 ml-52">
        <div className="card_head h-[50%] overflow-hidden">
          <img src="./bgimg.jpeg" alt="" className="h-[100%] w-[100%]" />
        </div>
        <div className="card_foot h-[50%] bg-green-300 rounded-b-md">
          <div className="bold font-mono">
            <p>Name:{props.name}</p>
            <p>Mobile:{props.mobile}</p>
            <p>Location:{props.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
