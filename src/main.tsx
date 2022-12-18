import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import LogIn from "./logIn";
import SignUp from "./siginUp";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LogIn />
  </React.StrictMode>
);
