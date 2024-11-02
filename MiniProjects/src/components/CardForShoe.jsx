import React from "react";

const CardForShoe = ({ imgUrl, title, price }) => {
  return (
    <div className="h-[230px] w-[180px] rounded-2xl border border-black m-5 justify-between overflow-hidden ">
      <div className="img overflow-hidden h-[60%] w-[100%]">
        <img src={imgUrl} alt="" className="" />
      </div>
      <div>
        <div className="shoe-name">{title}</div>
        <div className="price">{price}</div>
      </div>
    </div>
  );
};

export default CardForShoe;
