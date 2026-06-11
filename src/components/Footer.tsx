import { useState, FormEvent } from "react";
import { Mail, ArrowRight, Github, Send, Linkedin, Instagram, MapPin, Phone, Globe, Shield } from "lucide-react";

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<string | null>(null);

  const handleSub = (e: FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterStatus("Acquiring coordinates...");
    setTimeout(() => {
      setNewsletterStatus("Subscribed! SADC Spatial Reports will be dispatched.");
      setNewsletterEmail("");
    }, 1200);
  };

  const footerLinks = {
    Company: [
      { label: "Our History", target: "about" },
      { label: "BIM Philosophy", target: "about" },
      { label: "Board of Directors", target: "about" },
      { label: "Heritage 1950", target: "about" }
    ],
    Services: [
      { label: "Architecture", target: "services" },
      { label: "Urban Design", target: "services" },
      { label: "Interior Architecture", target: "services" },
      { label: "Landscape Design", target: "services" }
    ],
    Projects: [
      { label: "Tshwane Pavilion", target: "projects" },
      { label: "Gaborone Mixed-Use Hub", target: "projects" },
      { label: "Obsidian Oasis Windhoek", target: "projects" },
      { label: "Clifton Edge Gardens", target: "projects" }
    ],
    Resources: [
      { label: "Materiality Papers", target: "insights" },
      { label: "Thermal Double-Skin Tech", target: "insights" },
      { label: "SADC Approval Guidelines", target: "insights" },
      { label: "Socio-spatial Demography", target: "insights" }
    ]
  };

  return (
    <footer className="relative bg-[#0D0D0D] text-left border-t border-white/10 pt-20 pb-10 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Brand Grid & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-white/5">
          
          {/* Logo & Intro */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FFC40E] to-[#FFDA55] flex items-center justify-center font-mono text-[#0D0D0D] font-black text-xl tracking-tighter">
                K
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-white text-lg tracking-wider leading-none">
                  KWP<span className="text-[#FFC40E]">Create</span>
                </span>
                <span className="font-mono text-[9px] uppercase tracking-widest text-[#B3B3B3] mt-0.5">
                  Est. 1950 • SADC SPEC REGISTRY
                </span>
              </div>
            </div>

            <p className="text-xs text-[#B3B3B3] leading-relaxed max-w-sm">
              KWPCreate is an elite multi-disciplinary architectural, landscape architecture, interior curation, urban design and project management firm established in 1950.
            </p>

            {/* Social channels */}
            <div className="flex items-center gap-3">
              <a href="#" className="p-2.5 rounded-xl bg-white/5 hover:bg-[#FFC40E] hover:text-[#0D0D0D] text-[#B3B3B3] border border-white/5 transition-all" aria-label="LinkedIn Account">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-white/5 hover:bg-[#FFC40E] hover:text-[#0D0D0D] text-[#B3B3B3] border border-white/5 transition-all" aria-label="Instagram Page">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://github.com" target="_blank" className="p-2.5 rounded-xl bg-white/5 hover:bg-[#FFC40E] hover:text-[#0D0D0D] text-[#B3B3B3] border border-white/5 transition-all" aria-label="Github Repo">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* SADC Coordinates Newsletter */}
          <div className="lg:col-span-7 space-y-4">
            <h5 className="font-mono text-[9px] text-[#FFC40E] uppercase tracking-widest font-black">
              SADC Spatial Intelligence Reports
            </h5>
            <p className="text-xs text-white leading-relaxed max-w-lg">
              Acquire technical double-skin basaltic calculations, walkability guidelines, and structural design trends twice a month.
            </p>

            <form onSubmit={handleSub} className="flex items-center gap-2 max-w-md">
              <div className="relative flex-1">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                <input
                  type="email"
                  required
                  placeholder="Insert secure partner email..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full bg-[#111111] border border-white/10 rounded-xl pl-10 pr-4 py-3 text-xs text-white placeholder-white/20 focus:outline-none focus:border-[#FFC40E]"
                  id="newsletter-input"
                />
              </div>
              <button
                type="submit"
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#7A2715] to-[#A63B20] hover:from-[#FFC40E] hover:to-[#FFDA55] hover:text-[#0D0D0D] text-white font-bold text-xs tracking-wider uppercase transition-colors flex items-center gap-1 cursor-pointer"
                id="newsletter-submit-btn"
              >
                Subscribe
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            {newsletterStatus && (
              <p className="font-mono text-[9px] text-emerald-400 uppercase tracking-widest animate-pulse" id="newsletter-status">{newsletterStatus}</p>
            )}
          </div>

        </div>

        {/* Directory links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16 border-b border-white/5">
          {Object.entries(footerLinks).map(([sectionTitle, links]) => (
            <div key={sectionTitle} className="space-y-4">
              <h6 className="font-sans font-extrabold text-xs text-white uppercase tracking-wider">
                {sectionTitle}
              </h6>
              <ul className="space-y-2.5">
                {links.map((link, idx) => (
                  <li key={idx}>
                    <button
                      onClick={() => {
                        const el = document.getElementById(link.target);
                        el?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="text-xs text-[#B3B3B3] hover:text-[#FFC40E] transition-colors font-medium cursor-pointer"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Physical Office Coordinates and Licensing declarations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12 border-b border-white/5 text-xs text-[#B3B3B3]">
          
          <div className="flex gap-3">
            <MapPin className="w-5 h-5 text-[#FFC40E] shrink-0" />
            <div>
              <p className="font-bold text-white mb-1 uppercase tracking-wide text-[10px]">Pretoria Headquarters Suite</p>
              <p className="leading-relaxed">52 Lynnwood Road, Brooklyn, Pretoria, 0181, South Africa</p>
              <p className="mt-1 font-semibold text-white/80"><Phone className="w-3.5 h-3.5 inline mr-1" /> +27 (0)1 2345 6789</p>
            </div>
          </div>

          <div className="flex gap-3">
            <MapPin className="w-5 h-5 text-[#7A2715] shrink-0" />
            <div>
              <p className="font-bold text-white mb-1 uppercase tracking-wide text-[10px]">Gaborone Consulting Node</p>
              <p className="leading-relaxed">Plot 50361, Fairgrounds Financial Sector, Gaborone, Botswana</p>
              <p className="mt-1 font-semibold text-white/80"><Phone className="w-3.5 h-3.5 inline mr-1" /> +267 391 4280</p>
            </div>
          </div>

          <div className="flex gap-3">
            <Shield className="w-5 h-5 text-[#FFC40E] shrink-0" />
            <div>
              <p className="font-bold text-white mb-1 uppercase tracking-wide text-[10px]">Licensing & Professionalism</p>
              <p className="leading-relaxed">SACAP Practice Ref #SA-75109. Botswana Architects Registration Board (ARC) Certified.</p>
              <p className="mt-1 font-semibold text-[#FFC40E] flex items-center gap-1"><Globe className="w-3.5 h-3.5" /> GBCSA Accredited Platinum Partner</p>
            </div>
          </div>

        </div>

        {/* Legal Micro-Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-10 text-[10px] text-[#B3B3B3] font-mono uppercase tracking-widest gap-4">
          <span>
            © {new Date().getFullYear()} KWPCreate (Pty) Ltd. Redesign redacting. All Architectural Rights Reserved.
          </span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Legal Terms</a>
            <a href="#" className="hover:text-white">Zoning Audits</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
