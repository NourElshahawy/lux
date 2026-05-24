import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home.jsx";
import About from "../src/pages/AboutUs/AboutUs.jsx";
import Addvertisment from "../src/pages/Addvertisment/Addvertisement.jsx";
import Contact from "../src/pages/ContactUs/ContactUs.jsx";
import Navbar from "../src/Components/Navbar.jsx";
import "../src/App.css";
import "../src/responsive.css";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/advertisement" element={<Addvertisment />} />
        <Route path="/contact-us" element={<Contact />} />
      </Routes>
    </>
  );
}
