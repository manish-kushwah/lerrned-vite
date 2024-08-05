import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import RootContext from "./context/rootContext";
import "./index.css";
import "antd/dist/reset.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RootContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RootContext>
  </React.StrictMode>
);
