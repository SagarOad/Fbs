import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import AppDev from "./pages/AppDev";
import WebDevelopment from "./pages/WebDevelopment";
import ScrollProgress from "./components/ScrollProgress";
import { useRoutes } from "react-router-dom";
import GraphicDesign from "./pages/GraphicDesign";
import VideoAnimation from "./pages/VideoAnimation";
import Marketing from "./pages/Marketing";
import StartupInvestment from "./pages/StartupInvestment";

function App() {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/web", element: <AppDev /> },
    { path: "/app", element: <WebDevelopment /> },
    { path: "/design", element: <GraphicDesign /> },
    { path: "/videoanime", element: <VideoAnimation /> },
    { path: "/marketing", element: <Marketing /> },
    { path: "/startupinvestment", element: <StartupInvestment /> },
  ]);
  return routes;
}

export default App;
