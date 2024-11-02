import React, { useEffect, useState } from "react";
import axios from "axios";
const Meals = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((res) => {
        setItems(res.data.meals);
      })
      .catch((err) => console.log(err));
  }, []);
  const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => {
    return (
      <section>
        <img src={strMealThumb} alt={strMeal} />
        <section>
          <p>{strMeal}</p>
          <p>#{idMeal}</p>
        </section>
      </section>
    );
  });
  return <div>{itemsList}</div>;
};

export default Meals;
