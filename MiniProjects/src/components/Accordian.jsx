import React, { useState } from "react";

const Accordian = ({ title, content }) => {
  const [isToggled, setIstoggled] = useState(false);
  return (
    <section>
      <div>{title}</div>
      <p>{isToggled ? "-" : "+"}</p>
    </section>
  );
};

export default Accordian;
