import React from "react";

const Card = () => {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://api.quotable.io/random");
      const data = await res.json();
      setData(data);
    };
    getData();
  }, []);
  return <div>{console.log(data)}</div>;
};

export default Card;
