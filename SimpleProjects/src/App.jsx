import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Cards from "./coponents/Cards";
import Profile from "./coponents/Profile";
import TodoList from "./coponents/TodoList";
import Shopping from "./coponents/Shopping";
import CartForShopping from "./coponents/CartForShopping";
import Portals from "./coponents/Portals";
import Switcher from "./coponents/Switcher";
import UseEffectHook from "./coponents/UseEffectHook";
import UseEffcetCounter from "./coponents/UseEffcetCounter";
import Reducers from "./coponents/Reducers";
import PracticeReducer from "./coponents/PracticeReducer";
import UeesRef from "./coponents/UeesRef";
import UseFetch from "./coponents/UseFetch";
import SimpleCounter from "./coponents/SimpleCounter";
import SimapleTodoList from "./coponents/SimapleTodoList";
function App() {
  let userInfo = [
    {
      name: "Rajib sk",
      mobile: 67557575,
      location: "India",
      linkedin: "rajib@123",
    },
    {
      name: "Ajim sk",
      mobile: 1111175,
      location: "Guatemala",
      linkedin: "rajib@123",
    },
    {
      name: "Jony sk",
      mobile: 2222227575,
      location: "Uganaa",
      linkedin: "rajib@123",
    },
    {
      name: "Rk Dsai",
      mobile: 888888575,
      location: "India",
      linkedin: "rajib@123",
    },
    {
      name: "Babu sk",
      mobile: 60000995,
      location: "Urugua",
      linkedin: "rajib@123",
    },
    {
      name: "Habi sk",
      mobile: 999999,
      location: "Argentina",
      linkedin: "rajib@123",
    },
    {
      name: "Nonu sk",
      mobile: 77777777,
      location: "Ghana",
      linkedin: "rajib@123",
    },
    {
      name: "Tonai sk",
      mobile: 67555,
      location: "Pakistan",
      linkedin: "rajib@123",
    },
    {
      name: "Hasib sk",
      mobile: 111111111,
      location: "chaina",
      linkedin: "rajib@123",
    },
    {
      name: "Yaqub sk",
      mobile: 222233333,
      location: "Usa",
      linkedin: "rajib@123",
    },
  ];
  const changeTheme = () => {
    const bodyColor = document.querySelector(".card-body");
    bodyColor.style.backgroundColor = "blue";
    console.log("theme changed");
  };
  return (
    <>
      {/* <SimpleCounter></SimpleCounter> */}
      <SimapleTodoList></SimapleTodoList>
    </>
  );
}

export default App;
