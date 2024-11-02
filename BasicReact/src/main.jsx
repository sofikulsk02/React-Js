import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Greeting from "./Greeting.jsx";
import ProductInfo from "./ProductInfo.jsx";
import Lists from "./Lists.jsx";
import ListObj from "./ListObj.jsx";
import Cards from "./Cards.jsx";
import Items from "./Items.jsx";
import Conditional from "./Conditional.jsx";
import Cart from "./Cart.jsx";
import Weather from "./Weather.jsx";
import UserStatus from "./UserStatus.jsx";
import Event from "./Event.jsx";
import CardsAndProps from "./CardsAndProps.jsx";
import State from "./State.jsx";
import StateArr from "./StateArr.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ListObj></ListObj> */}
    {/* // <Lists></Lists>
    // <ProductInfo></ProductInfo>
    // <Greeting></Greeting>
    // <App /> */}
    {/* <Cards></Cards> */}
    {/* <Items name="Rajib" age={21} number={11111111}></Items> */}
    {/* <Conditional isValid={true}></Conditional> */}
    {/* <Cart></Cart> */}
    {/* <Weather temperature={18}></Weather> */}
    {/* <UserStatus isLoggedIn={true} IsAdmin={true}></UserStatus> */}
    {/* <Event></Event> */}
    {/* <App></App> */}
    {/* <CardsAndProps></CardsAndProps> */}
    <State></State>
    {/* <Array></Array> */}
    <StateArr></StateArr>
  </StrictMode>
);
