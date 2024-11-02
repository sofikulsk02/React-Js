import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const UseEffectHook = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const res = await fetch("https://type.fit/api/quotes").then((e) => {
        setData(e.json());
      });
      const data = await res.json();
      if (data && data.length) setData(data);
      console.log(data);
    }
    getData();
  });
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li>{}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseEffectHook;
