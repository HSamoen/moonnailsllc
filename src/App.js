import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";


import Home from "./pages/home/home";
import Services from "./pages/services/services";
import Gallery from "./pages/gallery/gallery";
import Contacts from "./pages/contacts/contacts";
import NoPage from "./pages/nopage/nopage";

export default function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<Home />} exact/>
          <Route path="/services" element={<Services />} exact/>
          <Route path="/gallery" element={<Gallery />} exact/>
          <Route path="/contacts" element={<Contacts />} exact/>
          <Route path="/*" element={<NoPage />} exact/>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
