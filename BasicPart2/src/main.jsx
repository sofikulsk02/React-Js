import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Conetxt from "./Conetxt.jsx";

createRoot(document.getElementById("root")).render(
  <App />
  // {/* <Conetxt></Conetxt> */}
);
