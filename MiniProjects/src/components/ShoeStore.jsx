import React from "react";
import { data } from "../utils/db";
import CardForShoe from "./CardForShoe";
const ShoeStore = () => {
  return (
    <div className="flex flex-row flex-wrap  justify-between">
      {data.map((items) => {
        return (
          <CardForShoe
            imgUrl={items.img}
            title={items.title}
            price={items.newPrice}
          ></CardForShoe>
        );
      })}
    </div>
  );
};

export default ShoeStore;
