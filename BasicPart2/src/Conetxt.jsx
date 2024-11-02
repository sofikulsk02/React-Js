import React from "react";
import { createContext } from "react";
import ComponentA from "./components/PropDrilling/ComponentA";
import ComponentB from "./components/PropDrilling/ComponentB";
export const data = createContext();
export const data2 = createContext();
const Conetxt = () => {
  const name = "rajib sk";
  const age = 22;
  return (
    <div>
      <data.Provider value={name}>
        <ComponentA></ComponentA>
      </data.Provider>
      <data2.Provider value={age}>
        <ComponentB></ComponentB>
      </data2.Provider>
    </div>
  );
};

export default Conetxt;
