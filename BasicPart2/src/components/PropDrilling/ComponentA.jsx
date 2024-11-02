import React from "react";
import { data } from "../../Conetxt";
const ComponentA = () => {
  return (
    <data.Consumer>
      {(name) => {
        return <h1>my name is:{name}</h1>;
      }}
    </data.Consumer>
  );
};

export default ComponentA;
