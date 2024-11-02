import "./App.css";
import ComponentOne from "./components/ComponentOne";
import React from "react";
import ComponentTwo from "./components/ComponentTwo";
import PassingFunc from "./components/PassingFunc";
import NameColor from "./components/NameColor";
import SetNameToLocal from "./components/SetNameToLocal";
import Todolist from "./components/Todolist";
import UseReducers from "./components/UseReducers";
function App() {
  const [count, setCount] = React.useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const name = "Rajib sk";
  return (
    <>
      <ComponentOne count={count} handleClick={increment}></ComponentOne>
      <ComponentTwo count={count} handleClick={increment}></ComponentTwo>
      <PassingFunc></PassingFunc>
      <NameColor></NameColor>
      <SetNameToLocal></SetNameToLocal>
      <Todolist></Todolist>
      <UseReducers></UseReducers>
    </>
  );
}

export default App;
