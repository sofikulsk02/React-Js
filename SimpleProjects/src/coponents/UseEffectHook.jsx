import React, { useEffect, useState } from "react";

const UseEffectHook = (props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const data = props;
      if (data && data.length) setData(data);
    }
    getData();
  }, []);

  return (
    <div>
      <ul key={data.id}>
        {data.map((item) => {
          <li>{item.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default UseEffectHook;
