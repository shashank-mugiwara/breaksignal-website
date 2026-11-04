import "./styles/app.css";
import "./styles/sections.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import AgentManageSection from "./components/AgentManageSection";
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
        <ServicesSection />
        <AgentManageSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
