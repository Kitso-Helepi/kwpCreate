import { Sparkles, Calendar, Award, ShieldAlert, CheckCircle, Handshake } from "lucide-react";

export default function WhyKWP() {
  const milestones = [
    {
      year: "1950",
      title: "Founding Pretoria Atelier",
      description: "Established as a classical blueprint draft works focused on civic infrastructure and structural engineering standardizations."
    },
    {
      year: "1972",
      title: "Consortium Integration",
      description: "Joined forces with leading regional surveyors and landscape botanists to deliver unified, ecological master planning schemes."
    },
    {
      year: "1998",
      title: "SADC Network Expansion",
      description: "Launched active structural nodes in Gaborone, Windhoek, and Maseru, navigating complex regional zoning codes."
    },
    {
      year: "2015",
      title: "BIM-First Digital Twin Era",
      description: "Fully digitized our design workflows with Revit parametric simulations, preventing structural errors on rugged terrains."
    },
    {
      year: "2026",
      title: "Carbon Offset Redirection",
      description: "Pioneered off-grid brutalist concrete ventilation standards and regional, sustainable sourcing certifications."
    }
  ];

  const valueProps = [
    {
      title: "70+ Years SADC Heritage",
      desc: "An unbroken legacy of trust, reliability, and structural permanence across SADC public and private sectors.",
      icon: Calendar
    },
    {
      title: "Multi-Disciplinary Consortium",
      desc: "Bridges the costly void between separate architects, landscape botanists, and project executors under single-point responsibility.",
      icon: Award
    },
    {
      title: "Rigorous SADC Regulatory Fluidity",
      desc: "Guarantees swift site approvals, zoning modifications, and compliance clearance with localized municipalities.",
      icon: CheckCircle
    },
    {
      title: "Severe Quality Control Protocols",
      desc: "Administered via strict JBCC, FIDIC, and NEC3 master protocols to guarantee schedule precision and zero cost overruns.",
      icon: ShieldAlert
    }
  ];

  return (
    <section id="about" className="relative py-24 bg-[#0D0D0D] border-t border-white/5 overflow-hidden">
      
      {/* Decorative Golden Ambient Gradients */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 rounded-full bg-[#7A2715]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-40 w-96 h-96 rounded-full bg-[#FFC40E]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Headings */}
        <div className="text-center max-w-2xl mx-auto mb-20 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FFC40E]" />
            <span className="font-mono text-[10px] tracking-widest text-[#B3B3B3] uppercase">Heritage Core</span>
          </div>
          <h2 className="font-sans font-black text-4xl sm:text-5xl text-white tracking-tight leading-none mb-4">
            Securing Structural Legacies <br />
            <span className="bg-gradient-to-r from-[#FFC40E] to-[#FFDA55] bg-clip-text text-transparent">Established Since 1950</span>
          </h2>
          <p className="font-sans text-sm text-[#B3B3B3] leading-relaxed">
            For more than seven decades, we have bridged technical precision with sustainable luxury, establishing an elite record of built works that withstand environmental extremes.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Timeline details representing our 75-years milestones */}
          <div className="lg:col-span-6">
            <h3 className="font-sans font-extrabold text-2xl text-white mb-8 tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFC40E]" />
              Historical Evolution Timeline
            </h3>

            <div className="relative border-l border-white/15 ml-4 pl-8 space-y-12">
              {milestones.map((mile, mIdx) => (
                <div key={mIdx} className="relative group">
                  
                  {/* Timeline bullet */}
                  <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-[#0D0D0D] border-2 border-white/20 group-hover:border-[#FFC40E] transition-all flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FFB400]" />
                  </div>

                  <span className="font-mono text-xs font-black text-[#FFC40E] bg-white/5 border border-white/10 px-3 py-1 rounded-lg">
                    {mile.year}
                  </span>

                  <h4 className="font-sans font-bold text-lg text-white mt-4 group-hover:text-[#FFC40E] transition-colors">
                    {mile.title}
                  </h4>

                  <p className="font-sans text-xs text-[#B3B3B3] mt-2 leading-relaxed">
                    {mile.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Key Value Proposition points */}
          <div className="lg:col-span-6 lg:pl-6 space-y-8">
            <h3 className="font-sans font-extrabold text-2xl text-white mb-8 tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#7A2715]" />
              Why Clients Commission KWP
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {valueProps.map((prop, idx) => {
                const PropIcon = prop.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-[#111111] border border-white/5 hover:border-white/15 hover:bg-[#1A1A1A]/80 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-[#7A2715]/10 border border-white/10 flex items-center justify-center text-[#FFC40E] mb-4">
                        <PropIcon className="w-5 h-5" />
                      </div>
                      <h4 className="font-sans font-bold text-sm text-white mb-2">
                        {prop.title}
                      </h4>
                      <p className="font-sans text-[11px] text-[#B3B3B3] leading-relaxed">
                        {prop.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quote of spatial leadership credentials */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-[#7A2715]/30 to-[#111111] border border-white/15 mt-8 flex gap-4 items-start relative overflow-hidden">
              <div className="absolute top-0 right-0 h-12 w-12 border-t-2 border-r-2 border-[#FFC40E]/20" />
              <Handshake className="w-8 h-8 text-[#FFC40E] shrink-0" />
              <div>
                <p className="font-sans text-xs text-[#E5E5E5] italic leading-relaxed">
                  "Our goal is not simply to assemble bricks and steel, but to synthesize environments that enrich community flows, conserve microclimates, and endure for future generations. That is the KWPCreate hallmark."
                </p>
                <div className="mt-3.5">
                  <p className="font-sans font-bold text-white text-xs">Johannes van Wyk</p>
                  <p className="font-mono text-[9px] uppercase tracking-widest text-[#B3B3B3]">Senior Partner & Lead Architect</p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
