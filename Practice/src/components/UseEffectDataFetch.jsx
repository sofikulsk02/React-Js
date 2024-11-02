import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const UseEffectDataFetch = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setData(data);
    };
    getdata();
  }, []);
  return (
    <div>
      <p>first post title:</p>
      {data.length > 0 ? <h2>{data[0].title}</h2> : <h2>Loading...</h2>}
    </div>
  );
};

export default UseEffectDataFetch;
