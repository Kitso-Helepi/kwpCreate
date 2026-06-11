import { useState, useEffect } from "react";
import { ArrowUpRight, Sparkles, Building2, Trees, TreesIcon as HardHat, Milestone } from "lucide-react";
import { STATS } from "../data";

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const [activeShowcase, setActiveShowcase] = useState(0);

  // High-End curated showcase items matching Southern Africa structural categories
  const showcases = [
    {
      title: "Vertical Integration Hubs",
      category: "Metropolitan Architecture",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80",
      stats: { label: "Completed Scope", value: "12,000 m²" },
      icon: Building2
    },
    {
      title: "Biophilic Urban Precincts",
      category: "Landscape Master Planning",
      image: "https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?auto=format&fit=crop&w=1400&q=80",
      stats: { label: "Regenerative Cover", value: "3.5 Hectares" },
      icon: Trees
    },
    {
      title: "Bespoke Mineral Interiors",
      category: "Interior Architecture",
      image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1400&q=80",
      stats: { label: "Material Heritage", value: "Untreated Copper" },
      icon: HardHat
    }
  ];

  // Auto-slide showcase with visual smoothness
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveShowcase((prev) => (prev + 1) % showcases.length);
    }, 8500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen bg-[#0D0D0D] flex items-center pt-28 pb-16 overflow-hidden">
      
      {/* Background Media & Cinematic Film Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none transition-all duration-1000">
        <img
          src={showcases[activeShowcase].image}
          className="w-full h-full object-cover filter brightness-[0.25] contrast-[1.1] scale-105 transition-transform duration-[8.5s] ease-out"
          alt="Cinematic Architectural Render"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
      </div>

      {/* Modern High-Contrast Light Gradient Accents */}
      <div className="absolute top-20 right-20 w-[450px] h-[450px] rounded-full bg-[#FFC40E]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] rounded-full bg-[#7A2715]/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Column */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            
            {/* Architectural Heritage Badge */}
            <div className="inline-flex self-start items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-[#FFC40E] animate-pulse" />
              <span className="font-mono text-[10px] tracking-widest text-[#E5E5E5] uppercase font-bold">
                KWPCreate • Established 1950
              </span>
            </div>

            {/* Headline */}
            <span className="font-mono text-xs uppercase tracking-widest text-[#FFC40E] font-extrabold mb-2 block">
              75-YEAR DIGITAL EVOLUTION
            </span>
            <h1 className="font-sans font-black text-5xl sm:text-6xl xl:text-7xl text-white tracking-tight leading-none mb-6">
              Designing Spaces.<br />
              <span className="bg-gradient-to-r from-[#FFC40E] via-[#FFDA55] to-orange-400 bg-clip-text text-transparent">
                Shaping Communities.
              </span><br />
              Creating Legacies.
            </h1>

            {/* Support Copy */}
            <p className="font-sans text-sm sm:text-base text-[#B3B3B3] leading-relaxed max-w-xl mb-8">
              For over 70 years, we have delivered award-winning, forward-thinking architecture, urban planning, interior architecture, landscape systems, and comprehensive project management solutions across Southern Africa.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button
                onClick={() => {
                  const el = document.getElementById("projects");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group flex items-center justify-center gap-2 rounded-xl bg-[#FFC40E] text-[#0D0D0D] font-bold text-xs tracking-wider uppercase px-6 py-4 hover:bg-[#FFDA55] transition-all duration-300 shadow-[0_8px_24px_rgba(255,196,14,0.25)] hover:scale-105 cursor-pointer"
                id="hero-btn-portfolio"
              >
                Explore Selected Works
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById("contact");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group flex items-center justify-center gap-2 rounded-xl bg-white/5 text-white border border-white/10 font-bold text-xs tracking-wider uppercase px-6 py-4 hover:bg-white/10 transition-all duration-300 hover:border-white/20 hover:scale-105 cursor-pointer"
                id="hero-btn-consultation"
              >
                Secure Consultation
              </button>
            </div>

            {/* Quick Micro-Capabilities Line */}
            <div className="flex items-center gap-6 text-[10px] uppercase font-mono text-[#B3B3B3] border-t border-white/5 pt-6">
              <span className="flex items-center gap-1"><Milestone className="w-3.5 h-3.5 text-[#FFC40E]" /> BIM-Led Delivery</span>
              <span className="flex items-center gap-1"><Milestone className="w-3.5 h-3.5 text-[#7A2715]" /> Net-Zero Design</span>
              <span className="flex items-center gap-1"><Milestone className="w-3.5 h-3.5 text-[#FFC40E]" /> SADC Compliant</span>
            </div>

          </div>

          {/* Right Hero Video/Showcase Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#111111]/80 shadow-[0_32px_64px_rgba(0,0,0,0.8)] backdrop-blur-md p-2">
              
              {/* Glass Interactive Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFC40E]/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#B3B3B3]">PREVIEW PLATFORM v3.1</span>
              </div>

              {/* Dynamic Slideshow with interactive overlay */}
              <div className="relative h-[300px] sm:h-[400px] overflow-hidden rounded-2xl bg-[#0D0D0D]">
                <img
                  src={showcases[activeShowcase].image}
                  className="w-full h-full object-cover select-none pointer-events-none transition-opacity duration-700 ease-in-out"
                  alt={showcases[activeShowcase].title}
                />

                {/* Left/Right floating accents representing geometric alignments */}
                <div className="absolute top-4 left-4 h-8 w-8 border-t-2 border-l-2 border-[#FFC40E]/80 pointer-events-none" />
                <div className="absolute bottom-4 right-4 h-8 w-8 border-b-2 border-r-2 border-[#7A2715]/80 pointer-events-none" />

                {/* Render tag */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#0D0D0D]/90 border border-white/10 backdrop-blur-md flex items-center justify-between">
                  <div>
                    <span className="font-mono text-[8px] uppercase tracking-widest text-[#FFC40E] font-bold block mb-0.5">
                      {showcases[activeShowcase].category}
                    </span>
                    <h4 className="font-sans text-xs font-bold text-white uppercase">{showcases[activeShowcase].title}</h4>
                  </div>
                  <div className="text-right border-l border-white/10 pl-4">
                    <span className="font-mono text-[8px] uppercase tracking-widest text-[#B3B3B3] block mb-0.5">
                      {showcases[activeShowcase].stats.label}
                    </span>
                    <span className="font-sans text-xs font-extrabold text-[#FFC40E]">{showcases[activeShowcase].stats.value}</span>
                  </div>
                </div>
              </div>

              {/* Showcase Tab Selectors under slides */}
              <div className="grid grid-cols-3 gap-2 mt-2">
                {showcases.map((sc, index) => {
                  const Icon = sc.icon;
                  const isActive = activeShowcase === index;
                  return (
                    <button
                      key={index}
                      onClick={() => setActiveShowcase(index)}
                      className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all duration-300 ${
                        isActive
                          ? "bg-[#1A1A1A] border-[#FFC40E]/40"
                          : "bg-transparent border-transparent hover:bg-white/5"
                      }`}
                      id={`hero-showcase-tab-${index}`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? "text-[#FFC40E]" : "text-[#B3B3B3]"}`} />
                      <span className={`font-mono text-[8px] uppercase tracking-widest ${isActive ? "text-white" : "text-[#B3B3B3]"}`}>
                        Tab {index + 1}
                      </span>
                    </button>
                  );
                })}
              </div>

            </div>
          </div>

        </div>

        {/* Heritage Statistics Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20 pt-12 border-t border-white/5">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="group p-5 rounded-3xl bg-[#111111]/90 border border-white/5 hover:border-[#FFC40E]/20 transition-all duration-300"
            >
              <p className="font-mono text-[9px] uppercase tracking-widest text-[#B3B3B3] mb-1">
                {stat.subtitle}
              </p>
              <h3 className="font-sans font-black text-3xl sm:text-4xl text-white group-hover:text-[#FFC40E] transition-colors mb-0.5">
                {stat.value}
              </h3>
              <p className="font-sans text-xs text-[#B3B3B3]/90 leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
