import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import AppDev from "./pages/AppDev";
import WebDevelopment from "./pages/WebDevelopment"
import ScrollProgress from "./components/ScrollProgress";
import { Route, Routes } from "react-router-dom";
import GraphicDesign from "./pages/GraphicDesign";
import VideoAnimation from "./pages/VideoAnimation";
import Marketing from "./pages/Marketing";

function App() {
  return (
    <div className="">
      <ScrollProgress />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/web" element={<AppDev />} />
        <Route path="/app" element={<WebDevelopment />} />
        <Route path="/design" element={<GraphicDesign />} />
        <Route path="/videoanime" element={<VideoAnimation />} />
        <Route path="/marketing" element={<Marketing />} />
      </Routes>
    </div>
  );
}

export default App;
