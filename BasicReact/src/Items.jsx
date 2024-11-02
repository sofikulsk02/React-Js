import React from "react";

const Items = ({ name, age, number }) => {
  return (
    <div className="h-[250px] w-[190px] border border-black rounded-md mt-20 ml-20 shadow-2xl">
      <div className="card-head h-[50%] overflow-hidden w-[100%] rounded-md">
        <img src="./bgimg.jpeg" alt="" className="h-[100%] w-[100%]" />
      </div>
      <div className="card-foot h-[50%] overflow-hidden w-[100%] rounded-md">
        <p className="font-bold">{name}</p>
        <p>{age}</p>
        <p>{number}</p>
      </div>
    </div>
  );
};

export default Items;
