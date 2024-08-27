/* eslint-disable no-undef */
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import RootContext from "./context/rootContext";
import "./index.css";
import "antd/dist/reset.css";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RootContext>
      <Auth0Provider
        domain={"dev-mgxcmtt116cg0kad.us.auth0.com"}
        clientId={"QFhfeo0HDohO33lK4sp8qgyPoqraBeuM"}
        redirectUri={`${window.location.origin}/dashboard`}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Auth0Provider>
    </RootContext>
  </React.StrictMode>
);
