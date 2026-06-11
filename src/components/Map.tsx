import { useState } from "react";
import { Project } from "../types";
import { PROJECTS } from "../data";
import { MapPin, Info, ArrowRight, Layers, Sparkles } from "lucide-react";

interface MapProps {
  onSelectProject: (project: Project) => void;
}

export default function Map({ onSelectProject }: MapProps) {
  const [selectedRegion, setSelectedRegion] = useState<string>("All");
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);

  // Extract unique regions for filtering
  const regions = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.region)))];

  const filteredProjects = selectedRegion === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.region === selectedRegion);

  return (
    <section id="map" className="relative py-24 bg-[#111111] overflow-hidden border-t border-white/5">
      {/* Decorative Golden Ambient Gradients */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#FFC40E]/5 blur-[120px]" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#7A2715]/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Headings */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#FFC40E]" />
              <span className="font-mono text-[10px] tracking-widest text-[#B3B3B3] uppercase">Geographical Core</span>
            </div>
            <h2 className="font-sans font-black text-4xl sm:text-5xl text-white tracking-tight leading-none mb-4">
              Southern Africa <br />
              <span className="bg-gradient-to-r from-[#FFC40E] to-[#FFDA55] bg-clip-text text-transparent">Project Network</span>
            </h2>
            <p className="font-sans text-sm text-[#B3B3B3] max-w-xl">
              From our headquarters in Pretoria, we direct structural masterpieces, urban hubs, and environmental systems across the SADC region.
            </p>
          </div>

          {/* Region Filters */}
          <div className="flex flex-wrap gap-2">
            {regions.map((region) => (
              <button
                key={region}
                onClick={() => setSelectedRegion(region)}
                className={`px-4 py-2 font-sans text-[11px] font-semibold tracking-widest uppercase rounded-xl border transition-all duration-300 ${
                  selectedRegion === region
                    ? "bg-[#FFC40E] text-[#0D0D0D] border-[#FFC40E] shadow-[0_4px_12px_rgba(255,196,14,0.3)]"
                    : "bg-white/5 text-[#B3B3B3] border-white/5 hover:border-white/20 hover:text-white"
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Layout container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Map Area */}
          <div className="lg:col-span-8 relative min-h-[500px] rounded-3xl bg-[#0D0D0D] border border-white/10 overflow-hidden flex flex-col justify-between p-6">
            
            {/* Map Header details */}
            <div className="flex items-center justify-between border-b border-white/5 pb-4 relative z-10">
              <div className="flex items-center gap-2.5">
                <Layers className="text-[#FFC40E] w-4 h-4" />
                <span className="font-mono text-xs tracking-wider text-[#E5E5E5] uppercase font-bold">Interactive Spatial Node Hub</span>
              </div>
              <div className="flex items-center gap-1.5 text-[9px] font-mono text-[#B3B3B3]">
                <span className="w-2 h-2 rounded-full bg-[#FFC40E] animate-ping" />
                <span>GPS LIVE LINKED</span>
              </div>
            </div>

            {/* Simulated Luxury Blueprint Map of SADC elements */}
            <div className="flex-1 relative flex items-center justify-center py-6">
              
              {/* Modern Graphic lines representing physical coordinates */}
              <svg className="absolute inset-0 w-full h-full opacity-40 select-none pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                
                {/* Lat/Long indicators */}
                <text x="15" y="30" fill="rgba(255, 255, 255, 0.15)" className="font-mono text-[9px]">S 22° 56' 3\"</text>
                <text x="15" y="475" fill="rgba(255, 255, 255, 0.15)" className="font-mono text-[9px]">S 34° 21' 9\"</text>
                <text x="75%" y="475" fill="rgba(255, 255, 255, 0.15)" className="font-mono text-[9px]">E 28° 11' 4\"</text>
                
                {/* Stylized borders representing Southern Africa boundaries */}
                <path d="M 120 180 L 190 230 L 260 210 L 320 280 L 390 240 L 450 310" stroke="rgba(122, 39, 21, 0.2)" strokeWidth="2" fill="none" strokeDasharray="5,5" />
                <path d="M 280 210 L 350 360 L 410 420 L 460 380" stroke="rgba(255, 196, 14, 0.15)" strokeWidth="1" fill="none" />
              </svg>

              {/* Geographic Markers positioning over map percentages safely */}
              <div className="absolute inset-0 origin-center">
                {filteredProjects.map((p) => {
                  const isHovered = hoveredProject?.id === p.id;
                  return (
                    <div
                      key={p.id}
                      className="absolute transition-all duration-300"
                      style={{ left: `${p.coordinates.x}%`, top: `${p.coordinates.y}%` }}
                    >
                      {/* Anchor interactive marker */}
                      <button
                        onMouseEnter={() => setHoveredProject(p)}
                        onMouseLeave={() => setHoveredProject(null)}
                        onClick={() => onNavigateToProject(p)}
                        className="relative flex items-center justify-center -translate-x-1/2 -translate-y-1/2 group"
                        id={`map-pin-${p.id}`}
                      >
                        <span className={`absolute inline-flex h-10 w-10 rounded-full bg-[#FFC40E]/20 transition-all duration-300 scale-100 ${isHovered ? "scale-150 bg-[#FFC40E]/40" : "group-hover:scale-125"}`} />
                        <span className={`absolute inline-flex h-5 w-5 rounded-full bg-[#7A2715]/40 transition-all duration-300 ${isHovered ? "bg-[#7A2715]/60" : ""}`} />
                        
                        <div className={`relative flex items-center justify-center w-3 h-3 rounded-full border transition-all duration-300 ${isHovered ? "bg-[#FFC40E] scale-110 border-white" : "bg-gradient-to-br from-[#FFC40E] to-[#FFDA55] border-[#FFC40E]/30"}`}>
                          <MapPin className={`w-2.5 h-2.5 ${isHovered ? "text-[#0D0D0D]" : "text-transparent"}`} />
                        </div>
                      </button>

                      {/* Tooltip Hover display */}
                      {isHovered && (
                        <div className="absolute z-30 bottom-6 left-1/2 -translate-x-1/2 w-64 p-4 rounded-xl bg-[#0D0D0D] border border-[#FFC40E]/30 shadow-[0_12px_40px_rgba(0,0,0,0.9)] animate-fade-in pointer-events-none">
                          <img src={p.image} className="w-full h-24 object-cover rounded-lg mb-2 border border-white/5" alt={p.title} />
                          <p className="font-mono text-[9px] text-[#FFC40E] uppercase tracking-widest font-bold mb-0.5">{p.category}</p>
                          <h4 className="font-sans text-xs font-bold text-white mb-1 line-clamp-1">{p.title}</h4>
                          <p className="font-sans text-[10px] text-[#B3B3B3] flex items-center gap-1">
                            <MapPin className="w-3 h-3 text-[#FFC40E]" /> {p.location}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Central compass/legend decorative */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2.5 bg-white/5 border border-white/10 px-3.5 py-2 rounded-xl backdrop-blur-sm pointer-events-none text-right">
                <div className="flex flex-col">
                  <span className="font-mono text-[8px] uppercase tracking-widest text-[#B3B3B3]">Orientation Mode</span>
                  <span className="font-sans text-[10px] text-white font-bold">KWP SADC Matrix</span>
                </div>
                <div className="w-6 h-6 rounded-full border border-dashed border-white/20 flex items-center justify-center relative">
                  <span className="absolute top-0 text-[6px] text-[#FFC40E] font-bold">N</span>
                </div>
              </div>

            </div>

            {/* Map footer directions */}
            <div className="flex items-center justify-between text-[10px] text-[#B3B3B3] border-t border-white/5 pt-4">
              <span>* Hover/Tap spatial coordinates to preview architectural blueprints.</span>
              <span>EST. 1950 TRACE REGISTRY</span>
            </div>

          </div>

          {/* SADC Regional Highlight Detail Sidebar */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            
            {/* Top selected card or default preview list */}
            <div className="flex-1 rounded-3xl bg-[#1A1A1A] border border-white/10 p-6 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[10px] text-[#FFC40E] tracking-widest uppercase font-bold block mb-2">Regional Matrix Summary</span>
                <h3 className="font-sans font-extrabold text-2xl text-white mb-4 tracking-tight leading-tight">
                  SADC Geographical Coverage
                </h3>
                
                <p className="font-sans text-xs text-[#B3B3B3] leading-relaxed mb-6">
                  We maintain full licensure, localized material logistics capability, and regulatory framework engineering in key administrative SADC nodes. This guarantees fast approval timelines and native environmental fit.
                </p>

                <div className="flex flex-col gap-3.5">
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#0D0D0D] border border-white/5">
                    <span className="font-sans text-xs text-white">Gauteng Core Nodes</span>
                    <span className="font-mono text-xs text-[#FFC40E] font-bold">3 Districts Managed</span>
                  </div>
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#0D0D0D] border border-white/5">
                    <span className="font-sans text-xs text-white">Botswana Network Nodes</span>
                    <span className="font-mono text-xs text-[#FFC40E] font-bold">Zoning Compliant</span>
                  </div>
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#0D0D0D] border border-white/5">
                    <span className="font-sans text-xs text-white">Off-Grid Desert Design</span>
                    <span className="font-mono text-xs text-[#FFC40E] font-bold">Namibia Certified</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <button
                  onClick={() => {
                    const el = document.getElementById("contact");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full group/btn flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-[#7A2715] to-[#A63B20] text-white transition-all duration-300 hover:from-[#FFC40E] hover:to-[#FFDA55] hover:text-[#0D0D0D]"
                  id="connect-regional-expert"
                >
                  <div className="text-left">
                    <span className="font-mono text-[8px] uppercase tracking-widest opacity-80 block">Direct Line</span>
                    <span className="font-sans text-xs font-bold uppercase tracking-wider">Connect Regional Expert</span>
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center transition-all group-hover/btn:bg-[#0D0D0D]/10">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              </div>

            </div>

            {/* Static Highlight statistic banner directly in sync */}
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#7A2715]/40 to-[#1A1A1A] p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#FFC40E] flex items-center justify-center text-[#0D0D0D]">
                <Info className="w-6 h-6" />
              </div>
              <div>
                <p className="font-sans font-bold text-white text-sm">Regulatory SADC Framework</p>
                <p className="font-sans text-[11px] text-[#B3B3B3] leading-snug">Full integration with local structures ensures 100% building safety clearance records.</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );

  function onNavigateToProject(project: Project) {
    onSelectProject(project);
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth" });
  }
}
