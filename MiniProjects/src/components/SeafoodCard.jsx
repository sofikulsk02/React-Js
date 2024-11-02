import React from "react";
const SeafoodCard = ({ strMeal, strMealThumb, idMeal }) => {
  return (
    <div className="h-[400px] w-[300px] rounded-3xl border border-black shadow-2xl m-10 shadow-blue-500 ">
      <div className="card-img h-[80%] w-[100%]">
        <img
          src={strMealThumb}
          alt=""
          className="h-[100%] w-[300px] rounded-t-3xl"
        />
      </div>
      <div className="card-content flex justify-between rounded-b-3xl">
        <p>{strMeal}</p>
        <p>{idMeal}</p>
      </div>
    </div>
  );
};

export default SeafoodCard;
