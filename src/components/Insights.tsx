import { useState } from "react";
import { INSIGHTS } from "../data";
import { Insight } from "../types";
import { Sparkles, Search, SlidersHorizontal, BookOpen, Clock, Calendar, ArrowUpRight, X } from "lucide-react";

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("All");
  const [activeSearch, setActiveSearch] = useState<string>("");
  const [openedInsight, setOpenedInsight] = useState<Insight | null>(null);

  const categories = ["All", "Architecture", "Urban Planning", "Sustainability", "Interior Design", "Industry Trends"];

  const filteredInsights = INSIGHTS.filter((ins) => {
    const matchesCategory = selectedCategory === "All" || ins.category === selectedCategory;
    const matchesSearch =
      ins.title.toLowerCase().includes(activeSearch.toLowerCase()) ||
      ins.summary.toLowerCase().includes(activeSearch.toLowerCase()) ||
      ins.content.toLowerCase().includes(activeSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="insights" className="relative py-24 bg-[#0D0D0D] border-t border-white/5 overflow-hidden">
      
      {/* Decorative Golden Ambient Gradients */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 rounded-full bg-[#7A2715]/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 animate-fade-in">
        
        {/* Headings */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 font-mono">
              <Sparkles className="w-3.5 h-3.5 text-[#FFC40E]" />
              <span className="text-[10px] tracking-widest text-[#B3B3B3] uppercase font-bold">Thought Leadership</span>
            </div>
            <h2 className="font-sans font-black text-4xl sm:text-5xl text-white tracking-tight leading-none mb-4">
              KWP Spatial <br />
              <span className="bg-gradient-to-r from-[#FFC40E] to-[#FFDA55] bg-clip-text text-transparent">Insights & Knowledge</span>
            </h2>
            <p className="font-sans text-sm text-[#B3B3B3] max-w-xl">
              Double-skin thermal research matrices, Gautransit density answers, and spatial materiality equations developed by our elite resident directors.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full md:w-auto">
            
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
              <input
                type="text"
                placeholder="Search insights..."
                value={activeSearch}
                onChange={(e) => setActiveSearch(e.target.value)}
                className="w-full bg-[#111111] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-white/35 focus:outline-none focus:border-[#FFC40E]"
                id="blog-search-field"
              />
            </div>

            {/* Categories */}
            <div className="flex items-center gap-1.5 bg-[#111111] border border-white/10 rounded-xl p-1 overflow-x-auto whitespace-nowrap">
              <SlidersHorizontal className="w-3.5 h-3.5 text-white/35 ml-2 select-none" />
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 font-sans text-[9px] font-bold tracking-wider uppercase rounded-lg transition-colors cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[#FFC40E] text-[#0D0D0D]"
                      : "text-[#B3B3B3] hover:text-white"
                  }`}
                  id={`insight-category-${cat.replace(/\s+/g, "-").toLowerCase()}`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Spatial Journal grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredInsights.map((item) => (
            <div
              key={item.id}
              onClick={() => setOpenedInsight(item)}
              className="group rounded-3xl bg-[#111111] border border-white/5 hover:border-[#FFC40E]/20 transition-all duration-500 p-6 flex flex-col justify-between cursor-pointer"
              id={`insight-card-${item.id}`}
            >
              <div>
                {/* Image panel */}
                <div className="relative h-48 overflow-hidden rounded-2xl mb-6">
                  <img src={item.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={item.title} />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-lg bg-[#0D0D0D]/90 border border-white/10 font-mono text-[8px] tracking-widest uppercase text-[#FFC40E] font-bold">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Date & Time counters */}
                <div className="flex items-center gap-4 text-[10px] font-mono text-[#B3B3B3] mb-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3 text-[#FFC40E]" /> {item.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-[#7A2715]" /> {item.readTime}</span>
                </div>

                <h3 className="font-sans font-extrabold text-lg text-white mb-3 group-hover:text-[#FFC40E] transition-colors leading-snug">
                  {item.title}
                </h3>

                <p className="font-sans text-xs text-[#B3B3B3] leading-relaxed line-clamp-3 mb-6">
                  {item.summary}
                </p>
              </div>

              {/* Author Panel info */}
              <div className="border-t border-white/5 pt-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img src={item.author.image} className="w-8 h-8 rounded-full border border-white/10" alt={item.author.name} />
                  <div className="text-left">
                    <p className="font-sans font-bold text-white text-[11px] leading-tight">{item.author.name}</p>
                    <p className="font-mono text-[8px] text-[#B3B3B3] uppercase tracking-wider">{item.author.role}</p>
                  </div>
                </div>
                
                <div className="w-8 h-8 rounded-lg bg-white/5 group-hover:bg-[#FFC40E]/10 flex items-center justify-center text-white group-hover:text-[#FFC40E] transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Full expansion reading modal drawer */}
      {openedInsight && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div
            className="w-full max-w-3xl rounded-3xl bg-[#0D0D0D] border border-white/10 p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto"
            id="opened-insight-reading-modal"
          >
            
            {/* Close Button */}
            <button
              onClick={() => setOpenedInsight(null)}
              className="absolute top-4 right-4 text-[#B3B3B3] hover:text-white p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors z-20"
              id="close-insight-reading-modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Meta details */}
            <div className="flex items-center gap-4 text-[10px] font-mono text-[#B3B3B3] mb-3">
              <span className="px-3 py-1 rounded-lg bg-[#FFC40E]/10 border border-[#FFC40E]/30 text-[#FFC40E] font-bold uppercase tracking-wider">{openedInsight.category}</span>
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-[#FFC40E]" /> {openedInsight.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#7A2715]" /> {openedInsight.readTime}</span>
            </div>

            <h3 className="font-sans font-black text-2xl sm:text-3xl text-white mb-6 tracking-tight leading-tight">
              {openedInsight.title}
            </h3>

            {/* Banner element image */}
            <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-6 border border-white/5">
              <img src={openedInsight.image} className="w-full h-full object-cover" alt={openedInsight.title} />
            </div>

            {/* Large content text block */}
            <div className="space-y-6 text-left leading-relaxed">
              <p className="font-sans text-sm sm:text-base text-[#E5E5E5] font-semibold italic border-l-2 border-[#FFC40E] pl-4">
                {openedInsight.summary}
              </p>
              
              <div className="font-sans text-xs sm:text-sm text-[#B3B3B3] space-y-4">
                <p>{openedInsight.content}</p>
                <p>The spatial development structures of our modern cities require rigorous biophilic re-balancing. At KWPCreate, we believe true structural architecture is continuous. Our resident teams are compiling next-generation guidelines for material durability under severe climate fluctuations.</p>
              </div>

              {/* Author footer metadata */}
              <div className="border-t border-white/10 pt-6 mt-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={openedInsight.author.image} className="w-10 h-10 rounded-full border border-white/10" alt={openedInsight.author.name} />
                  <div>
                    <span className="font-mono text-[8px] uppercase tracking-widest text-[#B3B3B3] block mb-0.5">AUTHORED BY</span>
                    <h5 className="font-sans font-bold text-white text-xs leading-none">{openedInsight.author.name}</h5>
                    <p className="font-sans text-[10px] text-[#B3B3B3] mt-1">{openedInsight.author.role}</p>
                  </div>
                </div>
                
                <button
                  onClick={() => {
                    setOpenedInsight(null);
                    const el = document.getElementById("contact");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="rounded-xl bg-white/5 border border-white/10 px-5 py-2.5 font-sans font-bold text-[10px] tracking-widest uppercase text-white hover:bg-white/10 transition-colors"
                >
                  Contact Author Matrix
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
