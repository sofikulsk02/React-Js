import Accordian from "./components/Accordian";
import ChangeRes from "./components/ChangeRes";
import HiddenSearchIcon from "./components/HiddenSearchIcon";
import Meals from "./components/Meals";
import SeaFoodRes from "./components/SeaFoodRes";
import Testimoni from "./components/Testimoni";
import Testimonials from "./components/Testimonials";
import Theme from "./components/Theme";
import TodoList from "./components/TodoList";
import ToggleTheme from "./components/ToggleTheme";
import { accordianData } from "./utils/AccordianData";
function App() {
  return (
    <>
      {/* <TodoList></TodoList> */}
      {/* <ToggleTheme></ToggleTheme>
      <Theme></Theme> */}
      {/* <Meals></Meals> */}
      {/* <SeaFoodRes></SeaFoodRes> */}
      {/* <HiddenSearchIcon></HiddenSearchIcon> */}
      {/* <Testimonials></Testimonials> */}
      {/* <ChangeRes></ChangeRes> */}
      {/* <Testimoni></Testimoni> */}
      <Accordian title={accordianData.title} content={accordianData.content}>
        {accordianData.map((data) => {
          <div>{data.title}</div>;
        })}
      </Accordian>
    </>
  );
}

export default App;
