import React from "react";

const Popup = ({ copied }) => {
  return <div>{copied && <div>Copied to clipboard</div>}</div>;
};

export default Popup;
