import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import SupportStats from "./components/WhyKWP";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Map from "./components/Map";
import Insights from "./components/Insights";
import Testimonials from "./components/Testimonials";
import LeadGen from "./components/LeadGen";
import Footer from "./components/Footer";
import Chatbot from "./components/Chatbot";
import { Project } from "./types";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedMapProject, setSelectedMapProject] = useState<Project | null>(null);

  // Active Section Scroll Tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services", "projects", "map", "insights", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
    }
  };

  const handleTriggerBooking = () => {
    handleNavigate("contact");
  };

  const handleSelectMapProject = (proj: Project) => {
    setSelectedMapProject(proj);
  };

  return (
    <div className="bg-[#0D0D0D] text-white min-h-screen relative font-sans antialiased selection:bg-[#FFC40E] selection:text-[#0D0D0D]">
      
      {/* Decorative Golden Ambient Gradients in Background */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-[#7A2715]/5 blur-[200px]" />
        <div className="absolute top-2/3 -right-1/4 w-[600px] h-[600px] rounded-full bg-[#FFC40E]/5 blur-[200px]" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        
        {/* Navigation bar */}
        <Header onNavigate={handleNavigate} activeSection={activeSection} />

        {/* Core content sections */}
        <main className="flex-grow">
          {/* Hero segment */}
          <Hero onNavigate={handleNavigate} />
          
          {/* Heritage details & timeline */}
          <SupportStats />

          {/* SADC framework structural disciplines */}
          <Services />

          {/* Advanced layout portfolio registry */}
          <Projects />

          {/* Interactive Geograpahics African Node Map */}
          <Map onSelectProject={handleSelectMapProject} />

          {/* SADC project testimonial success stories */}
          <Testimonials />

          {/* Architectural insights and thought leading papers */}
          <Insights />

          {/* Consultation Lead Gathering Matrix */}
          <LeadGen />
        </main>

        {/* Luxurious Multi-column physical and SADC office contact directory */}
        <Footer />

        {/* Modern AI Partner Assistant Float */}
        <Chatbot onTriggerBooking={handleTriggerBooking} />

      </div>
    </div>
  );
}
