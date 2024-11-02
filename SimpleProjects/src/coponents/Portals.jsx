import React, { useState } from "react";
import { createPortal } from "react-dom";
import Popup from "./Popup";
import Cards from "./Cards";
const Portals = () => {
  const [message, setMessage] = useState("");
  const [copied, setCopied] = useState(true);
  const handleClick = () => {
    navigator.clipboard.writeText(message).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };
  return createPortal(
    <div>
      <div className="flex gap-8">
        <input
          type="text"
          placeholder="Enter task"
          className="h-[20px] w-[200px] border border-black rounded-md"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={handleClick}>copy</button>
      </div>
      <Popup copied={copied}></Popup>
    </div>,
    document.querySelector("#portal-react")
  );
};

export default Portals;
