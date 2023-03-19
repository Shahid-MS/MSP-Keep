import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.scss";
import Navbar from "./Components/Navbar";
import Createnote from "./Components/Createnote";
import Footer from "./Components/Footer";
import RegisterLogin from "./Components/RegisterLogin";
import Nopage from "./Components/Nopage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Createnote />} />
          <Route path="/login" element={<RegisterLogin />} />
          <Route path="/register" element={<RegisterLogin />} />
          <Route path="*" element={<Nopage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
