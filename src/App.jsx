import React from "react";
import Pages from "./components/Pages";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SpaceContent from "./components/SpaceContent";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Hero from "./components/Hero";
import SliderCards from "./components/SliderCards";
import Accor from "./components/Accor";
import FooterBanner from "./components/FooterBanner";

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
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
