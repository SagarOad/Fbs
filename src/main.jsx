import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "tailwindcss/tailwind.css";
import { BrowserRouter } from "react-router-dom";
import { DropdownProvider } from "./DropdownContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <DropdownProvider>
        <App />
      </DropdownProvider>
    </BrowserRouter>
  </React.StrictMode>
);
