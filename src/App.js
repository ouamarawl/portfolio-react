import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Page_principale from "./pages/page_principale/Page_principale";
import Page_2 from "./pages/2eme_page/Page_2";
import Section_project from "./pages/section_project/Section_project";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page_principale />} />
        <Route path="/page_principale" element={<Page_principale />} />
        <Route path="/section_projet" element={<Section_project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/page_2" element={<Page_2 />} />
      </Routes>
    </Router>
  );
}

export default App;
