import React, { useEffect, useState } from "react";

const UseFetch = () => {
  const [data, setData] = useState(null);
  useEffect((url) => {
    fetch(url).then((res) =>
      res.json().then((resResult) => setData(resResult))
    );
  }, []);
  return (
    <div>
      <h1>{data.id}</h1>
    </div>
  );
};

export default UseFetch;
