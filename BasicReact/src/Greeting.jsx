import React from "react";
const Greeting = () => {
  const greetingMess = "Hello this is from react";
  let toDayIs = new Date();
  const name = "John";
  return (
    <div>
      <h1>The Greetmessage is {greetingMess}</h1>
      <p>the date is ={toDayIs.getDate()}</p>
    </div>
  );
};

export default Greeting;
