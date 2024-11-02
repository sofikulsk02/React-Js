import React from "react";
import "./index.css";
const ListObj = () => {
  let userInfo = [
    {
      name: "Rajib sk",
      mobile: 67557575,
      location: "India",
    },
    {
      name: "Ajim sk",
      mobile: 1111175,
      location: "Guatemala",
    },
    {
      name: "Jony sk",
      mobile: 2222227575,
      location: "Uganaa",
    },
    {
      name: "Rk Dsai",
      mobile: 888888575,
      location: "India",
    },
    {
      name: "Babu sk",
      mobile: 60000995,
      location: "Urugua",
    },
    {
      name: "Habi sk",
      mobile: 999999,
      location: "Argentina",
    },
    {
      name: "Nonu sk",
      mobile: 77777777,
      location: "Ghana",
    },
    {
      name: "Tonai sk",
      mobile: 67555,
      location: "Pakistan",
    },
    {
      name: "Hasib sk",
      mobile: 111111111,
      location: "chaina",
    },
    {
      name: "Yaqub sk",
      mobile: 222233333,
      location: "Usa",
    },
  ];
  return (
    <div>
      {userInfo.map((user) => (
        <ul key={Math.random() * 10}>
          <li>{user.name}</li>
        </ul>
      ))}
    </div>
  );
};

export default ListObj;
