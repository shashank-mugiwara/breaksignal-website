import "./styles/app.css";
import "./styles/sections.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import AgentManageSection from "./components/AgentManageSection";
import ArchitectureProof from "./components/ArchitectureProof";
import FreeModelsShowcase from "./components/FreeModelsShowcase";
import ArchitectureEstimator from "./components/ArchitectureEstimator";
import ContactIntake from "./components/ContactIntake";
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
        <ArchitectureProof />
        <FreeModelsShowcase />
        <ArchitectureEstimator />
        <ContactIntake />
      </main>
      <Footer />
    </div>
  );
}
