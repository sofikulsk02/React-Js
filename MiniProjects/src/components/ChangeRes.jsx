import React, { useEffect, useState } from "react";
import axios from "axios";
const ChangeRes = () => {
  const [res, setRes] = useState([]);
  useEffect(() => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
      .then((response) => {
        setRes(response.data.meals);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {res.map((item) => {
        return <div>{item[0]}</div>;
      })}
    </div>
  );
};

export default ChangeRes;
