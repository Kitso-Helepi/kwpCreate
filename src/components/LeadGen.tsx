import { useState, FormEvent } from "react";
import { Sparkles, Calendar, Clock, CheckCircle, ShieldCheck, ArrowRight, ServerCrash, DollarSign, MapPin } from "lucide-react";

export default function LeadGen() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectType: "Architecture",
    budgetRange: "R5M - R20M",
    description: "",
    date: "",
    time: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{ success?: boolean; message?: string } | null>(null);

  // Selected date visual parameters state
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  const budgetOptions = ["R1M - R5M", "R5M - R20M", "R20M - R50M", "R50M+"];
  const serviceTypes = ["Architecture", "Urban Design", "Interior Design", "Landscape Architecture", "Project Management", "Master Planning"];
  
  // Available timeslots
  const timeSlots = ["09:00", "11:00", "14:00", "16:00"];

  // Custom calendar array for next 7 days from now (excluding Sundays)
  const getDaysArray = () => {
    const days = [];
    const baseDate = new Date();
    for (let i = 1; i <= 8; i++) {
      const d = new Date(baseDate);
      d.setDate(baseDate.getDate() + i);
      if (d.getDay() !== 0) { // Skip Sundays
        days.push({
          dayNum: d.getDate(),
          dayName: d.toLocaleDateString("en-US", { weekday: "short" }),
          fullDate: d.toISOString().split("T")[0]
        });
      }
    }
    return days.slice(0, 6);
  };

  const daysList = getDaysArray();

  const handleSelectDay = (dayIndex: number, fullDate: string) => {
    setSelectedDay(dayIndex);
    setFormData((prev) => ({ ...prev, date: fullDate }));
  };

  const handleSelectTime = (time: string) => {
    setSelectedTime(time);
    setFormData((prev) => ({ ...prev, time: time }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setStatus({ success: false, message: "Please compile at least your name and email address to schedule. " });
      return;
    }

    setIsLoading(true);
    setStatus(null);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (response.ok) {
        setStatus({ success: true, message: data.message });
        // Clear selected states on success
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          projectType: "Architecture",
          budgetRange: "R5M - R20M",
          description: "",
          date: "",
          time: ""
        });
        setSelectedDay(null);
        setSelectedTime(null);
      } else {
        setStatus({ success: false, message: data.error || "Failed to catalog consultation parameters." });
      }
    } catch (err: any) {
      console.error(err);
      setStatus({ success: false, message: "The reservation server is momentarily busy. Please try compiling again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0D0D0D] border-t border-white/5 overflow-hidden">
      
      {/* Decorative Golden Ambient Gradients */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#7A2715]/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[450px] h-[450px] rounded-full bg-[#FFC40E]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Headings */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FFC40E]" />
            <span className="font-mono text-[10px] tracking-widest text-[#B3B3B3] uppercase">Consortium Gateway</span>
          </div>
          <h2 className="font-sans font-black text-4xl sm:text-5xl text-white tracking-tight leading-none mb-4">
            Book Structured <br />
            <span className="bg-gradient-to-r from-[#FFC40E] to-[#FFDA55] bg-clip-text text-transparent">Architectural Consultation</span>
          </h2>
          <p className="font-sans text-sm text-[#B3B3B3] leading-relaxed">
            Fill in your layout specifications, select preferred coordinates on our calendar, and receive direct structural feedback from our senior planning directors.
          </p>
        </div>

        {/* Outer Split Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-6xl mx-auto">
          
          {/* Left Block: Lead Inputs Form */}
          <div className="lg:col-span-7 bg-[#111111]/80 rounded-3xl border border-white/10 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[9px] text-[#FFC40E] uppercase tracking-widest font-bold block mb-4">Project Brief Specifications</span>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Visual Status Alerts */}
                {status && (
                  <div className={`p-4 rounded-xl flex items-start gap-3 border ${
                    status.success 
                      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                      : "bg-[#7A2715]/15 border-[#7A2715]/30 text-red-300"
                  }`} id="booking-status-feedback">
                    {status.success ? <CheckCircle className="w-5 h-5 shrink-0" /> : <ServerCrash className="w-5 h-5 shrink-0" />}
                    <div className="text-xs">
                      <p className="font-sans font-bold uppercase tracking-wider">{status.success ? "Commission Reserved" : "Validation Warning"}</p>
                      <p className="font-sans opacity-90 mt-1">{status.message}</p>
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[9px] uppercase tracking-wider text-[#B3B3B3] block mb-1.5 font-bold">Contact Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lehlohonolo Mokgatle"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#0D0D0D] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-white/20 focus:outline-[#FFC40E] focus:outline-none focus:border-[#FFC40E]"
                      id="input-name"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[9px] uppercase tracking-wider text-[#B3B3B3] block mb-1.5 font-bold">Company / Entity</label>
                    <input
                      type="text"
                      placeholder="e.g. Private Client or Corp"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-[#0D0D0D] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-white/20 focus:border-[#FFC40E] focus:outline-none"
                      id="input-company"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[9px] uppercase tracking-wider text-[#B3B3B3] block mb-1.5 font-bold">Inquiry Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. client@domain.co.za"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#0D0D0D] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-white/20 focus:border-[#FFC40E] focus:outline-none"
                      id="input-email"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[9px] uppercase tracking-wider text-[#B3B3B3] block mb-1.5 font-bold">Active Mobile Contact</label>
                    <input
                      type="tel"
                      placeholder="e.g. +27 82 520 4000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#0D0D0D] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-white/20 focus:border-[#FFC40E] focus:outline-none"
                      id="input-phone"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-[9px] uppercase tracking-wider text-[#B3B3B3] block mb-1.5 font-bold">Inquired Core Service</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#0D0D0D] border border-[#FFC40E]/20 rounded-xl px-4 py-3 text-xs text-white focus:border-[#FFC40E] focus:outline-none appearance-none"
                      id="select-service-type"
                    >
                      {serviceTypes.map((serv) => (
                        <option key={serv} value={serv} className="bg-[#0D0D0D] text-white py-2">{serv}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-[#B3B3B3] block mb-1.5 font-bold">Inferred Budget Category</span>
                    <div className="grid grid-cols-2 gap-2">
                      {budgetOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setFormData((prev) => ({ ...prev, budgetRange: opt }))}
                          className={`px-3 py-2 text-[10px] font-mono tracking-wider font-semibold border rounded-lg transition-colors cursor-pointer ${
                            formData.budgetRange === opt
                              ? "bg-[#FFC40E]/15 border-[#FFC40E] text-white"
                              : "bg-[#0D0D0D] border-white/10 text-[#B3B3B3] hover:text-white"
                          }`}
                          id={`budget-opt-${opt.replace(/\s+/g, "-").toLowerCase()}`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="font-mono text-[9px] uppercase tracking-wider text-[#B3B3B3] block mb-1.5 font-bold">Physical Site & Spatial Requirements Brief</label>
                  <textarea
                    rows={4}
                    placeholder="Describe building heights, soil dynamics, sustainable features or SADC zoning coordinates if readily available..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full bg-[#0D0D0D] border border-white/10 rounded-xl px-4 py-3 text-xs text-white placeholder-white/20 focus:border-[#FFC40E] focus:outline-none resize-none"
                    id="input-brief"
                  />
                </div>

                <div className="border-t border-white/10 pt-4 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-[9px] font-mono text-[#B3B3B3] select-none">
                    <ShieldCheck className="text-emerald-400 w-4 h-4 shrink-0" />
                    <span>75-Year Trust Clearance Verified</span>
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex items-center gap-2 rounded-xl bg-[#FFC40E] text-[#0D0D0D] font-bold text-xs tracking-widest uppercase px-6 py-3.5 hover:bg-[#FFDA55] hover:scale-[1.03] transition-all disabled:opacity-50 cursor-pointer"
                    id="btn-submit-lead"
                  >
                    {isLoading ? "Processing..." : "Secure Project Allocation"}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </form>
            </div>
          </div>

          {/* Right Block: Digital Calendar Interface */}
          <div className="lg:col-span-5 bg-[#111111]/80 rounded-3xl border border-white/10 p-6 flex flex-col justify-between">
            <div>
              <span className="font-mono text-[9px] text-[#FFC40E] uppercase tracking-widest font-bold block mb-2">Director's Spatial Calendaring</span>
              <h4 className="font-sans font-extrabold text-xl text-white mb-4 tracking-tight">Active SADC Time Coordinates</h4>
              
              <p className="font-sans text-xs text-[#B3B3B3] leading-relaxed mb-6">
                Reserve an immediate 30-minute virtual or Pretoria face-to-face spatial master review. Select a green scheduling bracket:
              </p>

              {/* Day horizontal scroll select */}
              <div className="mb-6">
                <span className="font-mono text-[8.5px] uppercase tracking-widest text-[#B3B3B3] block mb-3 font-bold">Select Appointment Date</span>
                <div className="grid grid-cols-3 gap-2">
                  {daysList.map((day, idx) => {
                    const isSelected = selectedDay === idx;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSelectDay(idx, day.fullDate)}
                        className={`p-3.5 rounded-xl border flex flex-col items-center justify-between transition-colors cursor-pointer ${
                          isSelected
                            ? "bg-[#FFC40E] border-[#FFC40E] text-[#0D0D0D]"
                            : "bg-[#0D0D0D] border-white/10 hover:border-white/30 text-white"
                        }`}
                        id={`calendar-day-${idx}`}
                      >
                        <span className={`font-mono text-[8px] uppercase tracking-widest ${isSelected ? "text-[#0D0D0D]/80" : "text-[#B3B3B3]"}`}>{day.dayName}</span>
                        <span className="font-sans font-black text-sm mt-1">{day.dayNum}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Time slots selectable */}
              <div className="mb-6">
                <span className="font-mono text-[8.5px] uppercase tracking-widest text-[#B3B3B3] block mb-3 font-bold">Select SADC Hour Brackets</span>
                <div className="grid grid-cols-4 gap-2">
                  {timeSlots.map((ts, idx) => {
                    const isSelected = selectedTime === ts;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => handleSelectTime(ts)}
                        className={`py-2 px-1 text-center font-mono text-[10px] tracking-widest font-semibold border rounded-lg transition-colors cursor-pointer ${
                          isSelected
                            ? "bg-[#7A2715] border-[#FFC40E]/50 text-white"
                            : "bg-[#0D0D0D] border-white/10 text-[#B3B3B3] hover:text-white"
                        }`}
                        id={`calendar-time-${idx}`}
                      >
                        {ts}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Selection indicators summary */}
              <div className="p-4 rounded-xl bg-[#0D0D0D] border border-white/5 space-y-2">
                <div className="flex justify-between text-[11px]">
                  <span className="text-[#B3B3B3] font-mono uppercase tracking-wider">Date Highlighted</span>
                  <span className="text-white font-bold">{formData.date || "None Selected"}</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-[#B3B3B3] font-mono uppercase tracking-wider">Hour Bracket Reserved</span>
                  <span className="text-[#FFC40E] font-bold">{formData.time || "None Selected"}</span>
                </div>
              </div>
            </div>

            {/* Direct contact guidelines banner */}
            <div className="mt-8 border-t border-white/5 pt-6 flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#FFC40E] flex items-center justify-center text-[#0D0D0D] font-black tracking-widest shrink-0">
                HQ
              </div>
              <div className="text-left font-sans">
                <p className="text-white text-xs font-bold leading-none">Pretoria Headquarters Suite</p>
                <p className="text-[10px] text-[#B3B3B3] mt-1 flex items-center gap-1"><MapPin className="w-3 h-3 text-[#FFC40E]" /> 52 Lynnwood Road, Brooklyn, Pretoria</p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
