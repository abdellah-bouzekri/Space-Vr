import React from "react";
import Pages from "./components/Pages";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SpaceContent from "./components/SpaceContent";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import SliderCards from "./components/SliderCards";
import Accor from "./components/Accor";
import FooterBanner from "./components/FooterBanner";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <SpaceContent />
                <SliderCards />
                <FooterBanner />
              </>
            }
          />
          <Route path="/Stories" element={<Accor />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/Pages" element={<Pages />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
