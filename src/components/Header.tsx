import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ onNavigate, activeSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Projects", id: "projects" },
    { label: "Map Node", id: "map" },
    { label: "Insights", id: "insights" },
    { label: "Contact", id: "contact" }
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500">
      <div
        className={`mx-auto max-w-7xl mt-4 px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
          isScrolled
            ? "max-w-5xl"
            : "max-w-7xl"
        }`}
      >
        <div
          className={`relative flex items-center justify-between rounded-2xl border transition-all duration-500 px-6 py-4 ${
            isScrolled
              ? "bg-[#0d0d0d]/80 border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)] backdrop-blur-md"
              : "bg-transparent border-transparent"
          }`}
        >
          {/* Brand Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate("home")}>
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-[#FFC40E] to-[#FFDA55]">
              <span className="font-mono text-[#0D0D0D] font-black text-xl tracking-tighter">K</span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-extrabold text-white text-lg tracking-wider leading-none">
                KWP<span className="text-[#FFC40E]">Create</span>
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#B3B3B3] mt-0.5">
                Est. 1950
              </span>
            </div>
          </div>

          {/* Centered Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`relative px-4 py-2 font-sans text-xs tracking-widest capitalize transition-colors duration-300 rounded-md font-medium ${
                    isActive ? "text-white" : "text-[#B3B3B3] hover:text-white"
                  }`}
                  id={`nav-link-${item.id}`}
                >
                  <span className="relative z-10">{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="navActiveBg"
                      className="absolute inset-0 rounded-lg bg-white/5 border border-white/5"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {isActive && (
                    <motion.span
                      layoutId="navActiveUnderline"
                      className="absolute bottom-0 left-4 right-4 h-[2px] bg-[#FFC40E] rounded"
                      transition={{ type: "spring", stiffness: 350, damping: 25 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Side: CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={() => onNavigate("contact")}
              className="group relative flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#7A2715] to-[#A63B20] hover:from-[#FFC40E] hover:to-[#FFDA55] px-5 py-2.5 font-sans font-semibold text-[11px] tracking-widest text-white hover:text-[#0D0D0D] uppercase transition-all duration-500 shadow-[0_4px_20px_0_rgba(122,39,21,0.2)] hover:shadow-[0_4px_20px_0_rgba(255,196,14,0.3)] border border-transparent hover:border-[#FFC40E]/50 cursor-pointer"
              id="cta-book-consultation"
            >
              <span className="relative z-10 flex items-center gap-1">
                Book Consultation
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[#FFC40E] p-1.5 transition-colors"
              aria-label="Toggle Menu"
              id="mob-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-[84px] left-4 right-4 z-40 rounded-2xl bg-[#0D0D0D]/95 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl p-6"
          >
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onNavigate(item.id);
                  }}
                  className={`w-full text-left py-2 font-sans text-sm tracking-widest uppercase transition-colors ${
                    activeSection === item.id ? "text-[#FFC40E] font-semibold" : "text-[#B3B3B3] hover:text-white"
                  }`}
                  id={`mob-nav-link-${item.id}`}
                >
                  {item.label}
                </button>
              ))}
              <hr className="border-white/10 my-2" />
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onNavigate("contact");
                }}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FFC40E] to-[#FFDA55] py-3.5 font-sans font-semibold text-xs tracking-widest text-[#0D0D0D] uppercase shadow-[0_4px_16px_rgba(255,196,14,0.2)]"
                id="mob-cta-book-consultation"
              >
                Book Consultation
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
