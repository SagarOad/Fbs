import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./pages/Home";
import ScrollProgress from "./components/ScrollProgress";


function App() {
  return (
    <div className="">
      <ScrollProgress />
      <Home />
    </div>
  );
}

export default App;
