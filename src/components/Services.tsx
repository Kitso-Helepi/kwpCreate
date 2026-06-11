import { useState } from "react";
import { SERVICES } from "../data";
import { Service } from "../types";
import { Sparkles, Building, Boxes, Layers, TreePine, Briefcase, Map, ArrowRight, X, ShieldCheck } from "lucide-react";

const ICON_MAP: Record<string, any> = {
  Building: Building,
  Boxes: Boxes,
  Layers: Layers,
  TreePine: TreePine,
  Briefcase: Briefcase,
  Map: Map
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="relative py-24 bg-[#0D0D0D] border-t border-white/5 overflow-hidden">
      
      {/* Decorative Golden Ambient Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#7A2715]/10 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Headings */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FFC40E]" />
            <span className="font-mono text-[10px] tracking-widest text-[#B3B3B3] uppercase">Disciplines Matrix</span>
          </div>
          <h2 className="font-sans font-black text-4xl sm:text-5xl text-white tracking-tight leading-none mb-4">
            Our Multi-Disciplinary <br />
            <span className="bg-gradient-to-r from-[#FFC40E] to-[#FFDA55] bg-clip-text text-transparent">Core Frameworks</span>
          </h2>
          <p className="font-sans text-sm text-[#B3B3B3] leading-relaxed">
            By unifying design, landscape, regional master planning, and strict commercial project management, we eliminate coordinate conflicts and fast-track SADC authority approvals.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {SERVICES.map((srv) => {
            const Icon = ICON_MAP[srv.icon] || Building;
            return (
              <div
                key={srv.id}
                className="group relative flex flex-col justify-between rounded-3xl bg-[#111111]/90 border border-white/5 hover:border-[#FFC40E]/20 hover:bg-[#1A1A1A]/80 transition-all duration-500 p-6 shadow-lg z-10 overflow-hidden"
              >
                {/* Visual Glass Shimmer Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFC40E]/5 to-[#7A2715]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div>
                  {/* Icon Grid Placement */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7A2715]/20 to-[#1A1A1A] border border-white/10 flex items-center justify-center text-[#FFC40E] mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-sans font-extrabold text-xl text-white mb-3 group-hover:text-[#FFC40E] transition-colors">
                    {srv.title}
                  </h3>

                  <p className="font-sans text-xs text-[#B3B3B3] leading-relaxed mb-6">
                    {srv.description}
                  </p>

                  {/* Micro features list */}
                  <div className="space-y-2 mb-6">
                    {srv.features.slice(0, 2).map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-[10px] font-mono text-[#E5E5E5]/90">
                        <span className="w-1 h-1 rounded-full bg-[#FFC40E]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/5 pt-4 mt-auto">
                  <button
                    onClick={() => setSelectedService(srv)}
                    className="flex items-center gap-1.5 font-sans font-bold text-[10px] tracking-widest text-[#FFC40E] hover:text-white uppercase transition-colors"
                    id={`btn-learn-service-${srv.id}`}
                  >
                    Explore Deliverables
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Modern Detailed Modals overlay with specified technical deliverables */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div
            className="w-full max-w-2xl rounded-3xl bg-[#0D0D0D] border border-white/10 p-6 sm:p-8 shadow-[0_24px_50px_rgba(0,0,0,0.9)] animate-fade-in relative max-h-[90vh] overflow-y-auto"
            id="service-detail-modal"
          >
            
            {/* Header info */}
            <div className="flex items-center justify-between border-b border-white/10 pb-6 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#FF4500]/10 border border-[#FFC40E]/50 flex items-center justify-center text-[#FFC40E]">
                  {(() => {
                    const ModalIcon = ICON_MAP[selectedService.icon] || Building;
                    return <ModalIcon className="w-5 h-5" />;
                  })()}
                </div>
                <div>
                  <h4 className="font-sans font-black text-2xl text-white tracking-tight">{selectedService.title}</h4>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#B3B3B3]">Standard Working Framework</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="text-[#B3B3B3] hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Close"
                id="btn-close-service-modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content Specifications layout */}
            <div className="space-y-6">
              <div>
                <p className="font-sans text-sm text-[#E5E5E5] leading-relaxed">
                  {selectedService.description}
                </p>
              </div>

              {/* Scope and legal guidelines */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h5 className="font-sans text-xs font-bold text-white uppercase tracking-wider mb-3">Milestone Deliverables</h5>
                  <ul className="space-y-2.5">
                    {selectedService.details.map((detail, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2 text-xs text-[#B3B3B3] leading-snug">
                        <span className="text-[#FFC40E] mt-0.5">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-sans text-xs font-bold text-white uppercase tracking-wider mb-3">Technical Capabilities</h5>
                  <ul className="space-y-2.5">
                    {selectedService.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-xs text-[#B3B3B3]">
                        <ShieldCheck className="w-4 h-4 text-[#FF4500] shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Call to action inside modal */}
              <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex flex-col text-left">
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#B3B3B3]">Consulting Team Ready</span>
                  <span className="font-sans text-xs text-white">Full-Consortium JBCC Advisory Available</span>
                </div>
                <button
                  onClick={() => {
                    setSelectedService(null);
                    const el = document.getElementById("contact");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full sm:w-auto rounded-xl bg-[#FFC40E] hover:bg-[#FFDA55] text-[#0D0D0D] font-bold text-xs tracking-wider uppercase px-5 py-3 transition-transform hover:scale-105"
                  id="modal-cta-book"
                >
                  Confirm Discovery Session
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
