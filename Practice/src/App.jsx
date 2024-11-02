import "./App.css";
import ColorChanger from "./components/ColorChanger";
import Counter from "./components/Counter";
import FruitShop from "./components/FruitShop";
import Switcher from "./components/Switcher";
import TodoList from "./components/TodoList";
import UseEffectDataFetch from "./components/UseEffectDataFetch";
import UseEffectHook from "./components/UseEffectHook";

function App() {
  return (
    <>
      {/* <Counter></Counter>
      <ColorChanger></ColorChanger>
      <TodoList></TodoList>
      <FruitShop></FruitShop> */}
      <Switcher></Switcher>
      <UseEffectDataFetch></UseEffectDataFetch>
    </>
  );
}

export default App;
