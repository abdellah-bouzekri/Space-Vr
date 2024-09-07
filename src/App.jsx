import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css";

// Lazy load components
const Hero = React.lazy(() => import("./components/Hero"));
const SpaceContent = React.lazy(() => import("./components/SpaceContent"));
const SliderCards = React.lazy(() => import("./components/SliderCards"));
const FooterBanner = React.lazy(() => import("./components/FooterBanner"));
const Accor = React.lazy(() => import("./components/Accor"));
const NotFound = React.lazy(() => import("./components/NotFound"));
const Pages = React.lazy(() => import("./components/Pages"));
const Contact = React.lazy(() => import("./components/Contact"));

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
        <Suspense
          fallback={
            <div className="flex items-center justify-center h-screen">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
            </div>
          }>
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
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
