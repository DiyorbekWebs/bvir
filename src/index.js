import React from "react";
import ReactDOM from "react-dom";
import "node_modules/video-react/dist/video-react.css";
import "../src/assets/Fonts/stylesheet.css";
import "./index.css";

import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
