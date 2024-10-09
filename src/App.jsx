import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ImpAterts from "./components/ImpAterts";
import Navbar from "./components/Navbar";
import SSNav from "./components/SSNav";
import AboutUs from "./components/AboutUs";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <BrowserRouter>
        {showNav && <SSNav setShowNav={setShowNav} />}
        <ImpAterts />
        <Navbar setShowNav={setShowNav} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

// https://dt-glamora.myshopify.com/
// Password :- buddha
