import React from "react";
const Cards = (props) => {
  return (
    <div className="h-[240px] w-[180px] border border-black rounded-md m-10 overflow-hidden">
      <div className="card-body overflow-hidden h-[50%] w-[100%] rounded-t-md bg-green-300"></div>
      <div className="card-foot overflow-hidden h-[50%] w-[100%] rounded-b-md bg-blue-300">
        <p className="font-bold">Name:{props.name}</p>
        <p>Age:{props.age}</p>
        <p>Location:{props.location}</p>
        <p>Linkedin:{props.linkedin}</p>
        <button onClick={props.changeTheme}>Theme</button>
      </div>
    </div>
  );
};

export default Cards;
