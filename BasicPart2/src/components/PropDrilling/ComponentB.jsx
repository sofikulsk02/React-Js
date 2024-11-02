import React from "react";
import { data, data2 } from "../../Conetxt";
const ComponentB = () => {
  return (
    <data2.Consumer>
      {(age) => {
        return <p>and my age is:{age}</p>;
      }}
    </data2.Consumer>
  );
};

export default ComponentB;
