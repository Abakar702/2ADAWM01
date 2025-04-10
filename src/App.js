import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Galeries from "./pages/Galeries"; // Import the CSS file for styling
import Contact from "./pages/Contact";
import PostulerEnseignant from "./pages/PostulerEnseignant";
import Avis from "./pages/Avis";
import EnSavoirPlus from "./pages/EnSavoirPlus";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/galleries" element={<Galeries />} />
        <Route path="/avis" element={<Avis />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/postuler-enseignant" element={<PostulerEnseignant />} />
        <Route path="/en-savoir-plus" element={<EnSavoirPlus />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
