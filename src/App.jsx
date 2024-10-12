import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ImpAterts from "./components/ImpAterts";
import Navbar from "./components/Navbar";
import SSNav from "./components/SSNav";
import AboutUs from "./components/AboutUs";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Design from "./components/Design";
import Contact from "./components/Contact";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import Experince from "./components/Experience";

function App() {
  const [showNav, setShowNav] = useState(false);
  const [register, setRegister] = useState(false)

  return (
    <>
      <BrowserRouter>
        {showNav && <SSNav setShowNav={setShowNav} />}
        <Register register={register} setRegister={setRegister} />
        <ImpAterts />
        <Navbar setShowNav={setShowNav} setRegister={setRegister} />
        <Routes>
          <Route path="/" element={<Home register={register} setRegister={setRegister} />} />
          <Route path="/design" element={<Design />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sewers" element={<Experince />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

// https://dt-glamora.myshopify.com/
// Password :- buddha
