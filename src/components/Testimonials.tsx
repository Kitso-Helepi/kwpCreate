import { useState } from "react";
import { TESTIMONIALS } from "../data";
import { Sparkles, ArrowLeft, ArrowRight, Quote, ShieldCheck, Trophy } from "lucide-react";

export default function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const activeTest = TESTIMONIALS[activeSlide];

  return (
    <section id="testimonials" className="relative py-24 bg-[#111111] border-t border-white/5 overflow-hidden">
      
      {/* Decorative Golden Ambient Gradients */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full bg-[#FF4500]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Headings */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FFC40E]" />
            <span className="font-mono text-[10px] tracking-widest text-[#B3B3B3] uppercase">Consortium Trust</span>
          </div>
          <h2 className="font-sans font-black text-4xl sm:text-5xl text-white tracking-tight leading-none mb-4">
            Client Success & <br />
            <span className="bg-gradient-to-r from-[#FFC40E] to-[#FFDA55] bg-clip-text text-transparent">Project Outcomes</span>
          </h2>
          <p className="font-sans text-sm text-[#B3B3B3] leading-relaxed">
            We partner with major corporate developers, state administrations, and elite private estate owners to turn complex project visions into monumental built-space realities.
          </p>
        </div>

        {/* Global Key SADC Project Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-5xl mx-auto">
          <div className="p-6 rounded-2xl bg-[#0D0D0D] border border-white/5 text-center flex flex-col justify-center">
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#B3B3B3] mb-1">CUMULATIVE PORTFOLIO VALUE</span>
            <span className="font-sans font-black text-white text-2xl sm:text-3xl">R5.2B+</span>
            <span className="font-sans text-[10px] text-[#FF4500] mt-1 font-semibold">Active Commissions</span>
          </div>
          <div className="p-6 rounded-2xl bg-[#0D0D0D] border border-white/5 text-center flex flex-col justify-center">
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#B3B3B3] mb-1">CLIENT RETENTION INDEX</span>
            <span className="font-sans font-black text-white text-2xl sm:text-3xl">98.4%</span>
            <span className="font-sans text-[10px] text-green-400 mt-1 font-semibold">Long-Term Partnerships</span>
          </div>
          <div className="p-6 rounded-2xl bg-[#0D0D0D] border border-white/5 text-center flex flex-col justify-center">
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#B3B3B3] mb-1">JBCC BUDGET ACCURACY</span>
            <span className="font-sans font-black text-white text-2xl sm:text-3xl">99.1%</span>
            <span className="font-sans text-[10px] text-[#FFC40E] mt-1 font-semibold">Zero Claims Registered</span>
          </div>
          <div className="p-6 rounded-2xl bg-[#0D0D0D] border border-white/5 text-center flex flex-col justify-center">
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#B3B3B3] mb-1">GREEN STAR ACCREDITATION</span>
            <span className="font-sans font-black text-white text-2xl sm:text-3xl">6-Star</span>
            <span className="font-sans text-[10px] text-emerald-400 mt-1 font-semibold">Net-Zero Rated Designs</span>
          </div>
        </div>

        {/* Carousel Slider Interface */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#0D0D0D] border border-white/10 p-6 sm:p-10 shadow-xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 h-10 w-10 border-t-2 border-r-2 border-[#FFC40E]/20" />
          <div className="absolute bottom-0 left-0 h-10 w-10 border-b-2 border-l-2 border-[#7A2715]/20" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Avatar & Metric Column */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="relative mb-6">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FFC40E] to-[#7A2715] blur-md opacity-30" />
                <img
                  src={activeTest.avatar}
                  className="w-24 h-24 rounded-full object-cover border-2 border-[#FFC40E] relative z-10 shadow-lg"
                  alt={activeTest.client}
                />
              </div>

              <h4 className="font-sans font-extrabold text-[#E5E5E5] text-lg leading-tight mb-1">{activeTest.client}</h4>
              <p className="font-sans text-xs text-[#B3B3B3] mb-1">{activeTest.role}</p>
              <p className="font-mono text-[9px] uppercase text-[#FFC40E] tracking-widest font-semibold">{activeTest.company}</p>

              {/* Individual Outcome badge */}
              <div className="mt-6 flex items-center gap-2 bg-[#1A1A1A] border border-white/5 px-4 py-2 rounded-xl">
                <Trophy className="w-4 h-4 text-[#FF4500]" />
                <div className="text-left">
                  <span className="font-mono text-[8.5px] uppercase tracking-widest text-[#B3B3B3] block">Outcome Marker</span>
                  <span className="font-sans text-xs text-white font-bold">{activeTest.metric.value} {activeTest.metric.label}</span>
                </div>
              </div>
            </div>

            {/* Testimonial Core Commentary Column */}
            <div className="lg:col-span-8 flex flex-col justify-between text-left lg:border-l lg:border-white/5 lg:pl-10">
              
              <div className="relative mb-8">
                <Quote className="absolute -top-6 -left-6 w-12 h-12 text-[#FFC40E]/10 flex shrink-0 pointer-events-none" />
                <p className="font-sans text-[#E5E5E5] text-sm sm:text-base leading-relaxed italic relative z-10">
                  "{activeTest.comment}"
                </p>
              </div>

              {/* Slider controls */}
              <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-6">
                <div className="flex items-center gap-1.5">
                  {TESTIMONIALS.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveSlide(index)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${activeSlide === index ? "w-6 bg-[#FFC40E]" : "w-1.5 bg-[#B3B3B3]/30"}`}
                      aria-label={`Slide ${index}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrev}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#E5E5E5] transition-colors border border-white/10"
                    aria-label="Previous test"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-[#E5E5E5] transition-colors border border-white/10"
                    aria-label="Next test"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
