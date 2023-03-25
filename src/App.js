import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.scss";
import Navbar from "./Components/Navbar";
import Createnote from "./Components/Createnote";
import Footer from "./Components/Footer";
import RegisterLogin from "./Components/RegisterLogin";
import Nopage from "./Components/Nopage";
import { HashRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

const App = () => {
  const [mode, setMode] = useState("light");
  const [theme, setTheme] = useState("body-light");

  const darkMode = () => {
    if (mode === "light") {
      setMode("dark");
      setTheme("body-dark");
    } else {
      setMode("light");
      setTheme("body-light");
    }
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <HashRouter>
        <Navbar darkmode={darkMode} Dmode={mode} />
        <Routes>
          <Route path="/" element={<Createnote Dmode={mode} />} />
          <Route path="/login" element={<RegisterLogin Dmode={mode} />} />
          <Route path="/register" element={<RegisterLogin Dmode={mode} />} />
          <Route path="*" element={<Nopage Dmode={mode} />} />
        </Routes>
        <Footer Dmode={mode} />
      </HashRouter>
    </>
  );
};

export default App;
