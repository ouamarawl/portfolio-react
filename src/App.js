import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; // Importation de Bootstrap
import Page_principale from "./pages/page_principale/Page_principale";
import Page_2 from "./pages/2eme_page/Page_2";
import Section_project from "./pages/section_project/Section_project";
import Contact from "./pages/contact/Contact";
import Vitrine1 from "./pages/Vitrines/Vitrine1";
import Vitrine2 from "./pages/Vitrines/Vitrine2";
import VItrine4 from "./pages/Vitrines/VItrine4";
import Calculatrice from "./pages/Vitrines/Calculatrice";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page_principale />} />
        <Route path="/page_principale" element={<Page_principale />} />
        <Route path="/section_projet" element={<Section_project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/page_2" element={<Page_2 />} />
        <Route path="/vitrine1" element={<Vitrine1 />} />
        <Route path="/vitrine2" element={<Vitrine2 />} />
        <Route path="/vitrine3" element={<Calculatrice />} />
        <Route path="/vitrine4" element={<VItrine4 />} />
      </Routes>
    </Router>
  );
}

export default App;
