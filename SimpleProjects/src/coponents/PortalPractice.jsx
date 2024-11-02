import React, { useState } from "react";
import { createPortal } from "react-dom";
import Popup from "./Popup";
const PortalPractice = () => {
  const [copied, setCopied] = useState(true);
  const [message, setMessage] = useState("");
  const handleCopy = () => {
    navigator.clipboard.writeText(message).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };
  return (
    createPortal(
      <section>
        <input
          type="text"
          placeholder="Enter the text to be copied"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <button onClick={handleCopy}>copy</button>
        <Popup copied={copied}></Popup>
      </section>
    ),
    document.querySelector("#portal-react")
  );
};

export default PortalPractice;
