import React from "react";
import Cards from "./Cards";

const ValidPassword = () => {
  return <Cards></Cards>;
};
const InvalidPassword = () => <h1>Invalid Password</h1>;
const Conditional = ({ isValid }) => {
  if (isValid) {
    return <ValidPassword></ValidPassword>;
  }
  return <InvalidPassword></InvalidPassword>;
};

export default Conditional;
