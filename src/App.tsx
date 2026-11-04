import "./styles/app.css";
import "./styles/sections.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhatWeDoSection from "./components/WhatWeDoSection";
import HowWeBuildSection from "./components/HowWeBuildSection";
import ProductsSection from "./components/ProductsSection";
import EngagementsSection from "./components/EngagementsSection";
import FaqSection from "./components/FaqSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div id="top" className="frame">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <WhatWeDoSection />
        <HowWeBuildSection />
        <ProductsSection />
        <EngagementsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
