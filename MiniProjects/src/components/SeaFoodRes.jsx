import React, { useEffect, useState } from "react";
import axios from "axios";
import SeafoodCard from "./SeafoodCard";
const SeaFoodRes = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setItems(res.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div className="flex flex-row w-[100vw] m-10 flex-wrap">
      {items.map((meal) => {
        return (
          <SeafoodCard
            strMeal={meal.strMeal}
            strMealThumb={meal.strMealThumb}
            idMeal={meal.idMeal}
          ></SeafoodCard>
        );
      })}
    </div>
  );
};

export default SeaFoodRes;
