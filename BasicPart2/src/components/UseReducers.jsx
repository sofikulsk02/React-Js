import React from "react";
import { useReducer } from "react";
const UseReducers = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return <div>UseReducers</div>;
};

export default UseReducers;
