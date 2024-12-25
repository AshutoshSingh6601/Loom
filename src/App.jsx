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
import Carts from "./components/Carts";
import ProductState from "./context/ProductState";
import SewerDetail from "./components/SewerDetail";

function App() {
  const [showNav, setShowNav] = useState(false);
  const [register, setRegister] = useState(false)
  const [sewer, setSewer] = useState(false);

  return (
    <>
      <ProductState>
      <BrowserRouter>
        {showNav && <SSNav setShowNav={setShowNav} />}
        <Register register={register} setRegister={setRegister} />
        <SewerDetail sewer={sewer} setSewer={setSewer} />
        <ImpAterts />
        <Navbar setShowNav={setShowNav} setRegister={setRegister} setSewer={setSewer} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/design" element={<Design />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sewers" element={<Experince />} />
          <Route path="/cart" element={<Carts setRegister={setRegister} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </BrowserRouter>
      </ProductState>
    </>
  );
}

export default App;

// https://dt-glamora.myshopify.com/
// Password :- buddha
