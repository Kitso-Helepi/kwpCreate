import { useState } from "react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import { Search, Sparkles, SlidersHorizontal, MapPin, Calendar, Info, X, Shield, ExternalLink } from "lucide-react";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "Commercial", "Residential", "Healthcare", "Urban Development", "Hospitality"];

  // Filter based on search input and selected category
  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesCategory = selectedCategory === "All" || proj.category === selectedCategory;
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="relative py-24 bg-[#111111] border-t border-white/5 overflow-hidden">
      
      {/* Decorative Golden Ambient Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#FFC40E]/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#7A2715]/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        
        {/* Headings */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#FFC40E]" />
              <span className="font-mono text-[10px] tracking-widest text-[#B3B3B3] uppercase">SADC Portfolio</span>
            </div>
            <h2 className="font-sans font-black text-4xl sm:text-5xl text-white tracking-tight leading-none mb-4">
              Our Selected <br />
              <span className="bg-gradient-to-r from-[#FFC40E] to-[#FFDA55] bg-clip-text text-transparent">Architectural Heritage</span>
            </h2>
            <p className="font-sans text-sm text-[#B3B3B3] max-w-xl">
              An inventory of luxury Commissions, sustainable urban frameworks, and environmental landscapes executed across Southern African hubs.
            </p>
          </div>

          {/* Filtering & Search Panel */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full md:w-auto">
            
            {/* Elegant Search Bar */}
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by city, title, or type..."
                className="w-full bg-[#0D0D0D] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-white/30 focus:outline-none focus:border-[#FFC40E]"
                id="portfolio-search-input"
              />
            </div>

            {/* Categorization Dropdown or Filter Grid */}
            <div className="flex items-center gap-2 bg-[#0D0D0D] border border-white/10 rounded-xl p-1 overflow-x-auto whitespace-nowrap">
              <SlidersHorizontal className="w-3.5 h-3.5 text-white/30 ml-2 select-none" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 font-sans text-[10px] font-bold tracking-wider uppercase rounded-lg transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#FFC40E] text-[#0D0D0D]"
                      : "text-[#B3B3B3] hover:text-white"
                  }`}
                  id={`filter-tab-${cat.replace(/\s+/g, "-").toLowerCase()}`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Dynamic Project Cards Grid matching Masonry feel */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 rounded-3xl bg-[#0D0D0D] border border-white/5 p-8">
            <Info className="w-12 h-12 text-[#FFC40E] mx-auto mb-4 animate-bounce" />
            <p className="font-sans text-[#E5E5E5] font-semibold text-lg">No Projects Found matching your requirements</p>
            <p className="font-sans text-xs text-[#B3B3B3] mt-2">Try clearing your filters or testing other query words.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-6 px-4 py-2 bg-white/5 border border-white/10 text-xs font-bold text-white uppercase rounded-xl hover:bg-white/10"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                onClick={() => setSelectedProject(proj)}
                className="group relative rounded-3xl overflow-hidden border border-white/5 bg-[#0D0D0D] hover:border-[#FFC40E]/20 transition-all duration-500 cursor-pointer shadow-lg flex flex-col justify-between"
                id={`project-card-${proj.id}`}
              >
                
                {/* Image Showcase layout */}
                <div className="relative h-64 overflow-hidden bg-black">
                  <img
                    src={proj.image}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                    alt={proj.title}
                  />

                  {/* Top tags overlay */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-lg bg-[#0D0D0D]/90 border border-white/10 font-mono text-[9px] tracking-widest uppercase text-[#FFC40E] font-bold">
                      {proj.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-[10px] text-white flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-[#FFC40E]" /> {proj.completionYear}
                    </span>
                  </div>

                  {/* Gradient film display for hover interaction */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-left w-full">
                      <span className="font-mono text-[8px] uppercase tracking-widest text-[#FFC40E] block mb-1">Interactive Specification</span>
                      <p className="font-sans text-xs text-[#E5E5E5] line-clamp-2 leading-relaxed">
                        {proj.description}
                      </p>
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#FF9E0D] mt-3 uppercase tracking-wider">
                        Explore Blueprint Details →
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card footer details */}
                <div className="p-6">
                  <h3 className="font-sans font-black text-lg text-white mb-2 group-hover:text-[#FFC40E] transition-colors line-clamp-1">
                    {proj.title}
                  </h3>
                  <div className="flex items-center justify-between text-[11px] text-[#B3B3B3]">
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-[#7A2715]" /> {proj.location}</span>
                    <span className="font-mono uppercase text-[#E5E5E5] text-[10px] shrink-0 font-semibold">{proj.region}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* Advanced Project Specification Drawer Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div
            className="w-full max-w-3xl rounded-3xl bg-[#0D0D0D] border border-white/10 p-6 sm:p-8 shadow-[0_24px_50px_rgba(0,0,0,0.95)] animate-fade-in relative max-h-[90vh] overflow-y-auto"
            id="project-detail-modal"
          >
            
            {/* Floating Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-[#B3B3B3] hover:text-white p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors z-20"
              id="close-project-modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Media Banner Section inside spec sheet */}
            <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-6 border border-white/5">
              <img src={selectedProject.image} className="w-full h-full object-cover" alt={selectedProject.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              
              {/* Overlay Location and tag */}
              <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="font-mono text-[9px] text-[#FFC40E] uppercase tracking-widest font-bold block mb-1">
                    {selectedProject.category}
                  </span>
                  <h4 className="font-sans font-black text-xl sm:text-2xl text-white">{selectedProject.title}</h4>
                </div>
                <div className="bg-black/80 border border-white/10 px-3 py-1.5 rounded-xl font-mono text-xs text-white">
                  Completed {selectedProject.completionYear}
                </div>
              </div>
            </div>

            {/* Blueprint description layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              
              <div className="lg:col-span-7">
                <span className="font-mono text-[9px] text-[#FF9E0D] tracking-widest uppercase font-bold block mb-2">Project Brief & Concept</span>
                <p className="font-sans text-sm text-[#E5E5E5] leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                <h5 className="font-sans text-xs font-bold text-white uppercase tracking-wider mb-3">Key Technical parameters</h5>
                <ul className="space-y-3">
                  {selectedProject.details.map((det, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-[#B3B3B3] leading-relaxed">
                      <Shield className="w-4 h-4 text-[#FF4500] shrink-0 mt-0.5" />
                      <span>{det}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats & Regional Sourcing Sidebar */}
              <div className="lg:col-span-5 rounded-2xl bg-[#111111] p-5 border border-white/5 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-[8px] text-[#B3B3B3] tracking-widest uppercase block mb-4">Contractor Output Metrics</span>
                  <div className="space-y-4">
                    {selectedProject.stats.map((st, idx) => (
                      <div key={idx} className="border-b border-white/5 pb-2">
                        <p className="font-mono text-[8px] text-[#B3B3B3] uppercase tracking-wider">{st.label}</p>
                        <p className="font-sans font-bold text-[#FFC40E] text-lg">{st.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4 mt-8 flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-xs text-[#B3B3B3]">
                    <MapPin className="w-4 h-4 text-[#FF4500]" />
                    <span>Regional Node: {selectedProject.location}</span>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedProject(null);
                      const el = document.getElementById("contact");
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#7A2715] to-[#A63B20] text-white hover:bg-[#FFC40E] font-bold text-[10px] tracking-widest uppercase py-3 transition-colors"
                  >
                    Request Similar Site Analysis
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
