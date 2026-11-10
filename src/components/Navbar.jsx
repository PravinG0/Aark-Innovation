import React, { useState } from "react";
import { ArrowRight, Menu, X, Sun, Moon, Volume2, VolumeX, Sparkles } from "lucide-react";

export default function Navbar({ 
  theme = "dark", 
  onToggleTheme, 
  soundEnabled = false, 
  onToggleSound,
  isSvgPage = false,
  onBackToMain
}) {
  const isLight = theme === "light";
  const [mobileOpen, setMobileOpen] = useState(false);

  // Dynamic section anchor targets based on whether user is on the SVG page or main video scrub page
  const navLinks = [
    { label: "Overview", href: isSvgPage ? "#svg-hero" : "#hero-section" },
    { label: "Practices", href: isSvgPage ? "#svg-practices" : "#practice-section" },
    { label: "Why AARK", href: isSvgPage ? "#svg-why-aark" : "#difference-section" },
    { label: "Case Studies", href: isSvgPage ? "#svg-case-studies" : "#case-studies-section" },
    { label: "Engagement", href: isSvgPage ? "#svg-cta" : "#models-section" },
    { label: "Ecosystem", href: isSvgPage ? "#svg-cta" : "#tech-section" },
  ];

  const consultationHref = isSvgPage ? "#svg-cta" : "#contact-section";

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 shadow-2xl transition-all duration-300 ${
      isLight ? "glass-header-light bg-white/85" : "glass-header-dark bg-[#080808]/85"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <a 
            href={isLight ? "/light" : "/"} 
            onClick={(e) => {
              if (isSvgPage && onBackToMain) {
                e.preventDefault();
                onBackToMain();
              }
            }}
            className="flex items-center gap-3 group"
          >
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-br from-[#0284c7] to-[#0369a1] border border-sky-400/50 flex items-center justify-center font-heading font-black text-xl text-white group-hover:scale-105 transition-all shadow-md shadow-sky-600/30`}>
              <span>A</span>
            </div>
            <div className="leading-none">
              <div className="flex items-baseline gap-1">
                <span className={`font-heading font-extrabold text-xl tracking-tight ${isLight ? "text-slate-900" : "text-white"}`}>AARK</span>
                <span className={`font-heading font-semibold text-sm tracking-widest uppercase ${isLight ? "text-[#0284c7]" : "text-sky-400"}`}>Innovations</span>
              </div>
              <p className={`text-[9px] font-bold uppercase tracking-widest mt-0.5 ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                Enterprise Modernization
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className={`hidden lg:flex items-center gap-7 text-xs font-bold uppercase tracking-wider ${
            isLight ? "text-slate-700" : "text-slate-300"
          }`}>
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                className={`transition-colors ${isLight ? "hover:text-[#0284c7]" : "hover:text-sky-400"}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Subpage Switcher Pill & Actions */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Sub-page Switcher (Dark vs Light vs SVG Edition) */}
            <div className={`flex items-center p-1 rounded-full border text-xs font-bold transition-all ${
              isLight ? "bg-slate-100 border-slate-300/80" : "bg-black/60 border-white/15"
            }`}>
              <button
                onClick={() => onToggleTheme && onToggleTheme("dark")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all text-[11px] ${
                  theme === "dark" && !isSvgPage
                    ? "bg-[#0284c7] text-white shadow-md font-extrabold"
                    : isSvgPage && theme === "dark"
                      ? "bg-[#0284c7]/20 text-[#0284c7] dark:text-[#38bdf8] font-bold"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
                title={isSvgPage ? "Switch SVG page to Dark Theme" : "View Dark Obsidian Homepage"}
              >
                <Moon className="w-3 h-3" />
                <span>Dark</span>
              </button>
              <button
                onClick={() => onToggleTheme && onToggleTheme("light")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all text-[11px] ${
                  theme === "light" && !isSvgPage
                    ? "bg-[#0284c7] text-white shadow-md font-extrabold"
                    : isSvgPage && theme === "light"
                      ? "bg-[#0284c7]/20 text-[#0284c7] font-bold"
                      : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
                title={isSvgPage ? "Switch SVG page to Light Theme" : "View Light Studio Subpage"}
              >
                <Sun className="w-3 h-3" />
                <span>Light</span>
              </button>
              <button
                onClick={() => onToggleTheme && onToggleTheme("svg")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full transition-all text-[11px] ${
                  isSvgPage
                    ? "bg-[#0284c7] text-white shadow-md font-extrabold"
                    : "text-sky-400 hover:text-white"
                }`}
                title="View Vector SVG Modernization Journey Subpage"
              >
                <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
                <span>SVG Journey</span>
              </button>
            </div>

            {/* If on SVG page, provide a quick return button to Video Scrub Mode */}
            {isSvgPage && onBackToMain && (
              <button
                type="button"
                onClick={onBackToMain}
                className={`hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[11px] font-bold transition-all cursor-pointer ${
                  isLight
                    ? "bg-slate-100 hover:bg-slate-200 border-slate-300 text-slate-800"
                    : "bg-white/10 hover:bg-white/15 border-white/20 text-white"
                }`}
                title="Return to cinematic video scroll engine"
              >
                <Sparkles className="w-3 h-3 text-[#0284c7]" />
                <span>Video Mode</span>
              </button>
            )}

            {/* Sound Toggle Button (Shown on Video scrub pages) */}
            {!isSvgPage && onToggleSound && (
              <button
                type="button"
                onClick={onToggleSound}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-bold transition-all cursor-pointer ${
                  soundEnabled
                    ? "bg-[#0284c7] border-[#0284c7] text-white shadow-md shadow-sky-600/30"
                    : isLight
                      ? "bg-slate-100 hover:bg-slate-200/80 border-slate-300/80 text-slate-700"
                      : "bg-black/60 hover:bg-black/90 border-white/15 text-slate-300"
                }`}
                title={soundEnabled ? "Mute engine audio" : "Enable engine audio"}
              >
                {soundEnabled ? (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-white" />
                    <span className="text-[11px] font-extrabold">Audio ON</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-[11px]">Audio</span>
                  </>
                )}
              </button>
            )}

            <a
              href={consultationHref}
              className={`inline-flex items-center gap-2 font-extrabold text-xs uppercase tracking-wider px-5 py-2.5 rounded-xl shadow-lg transition-all ${
                isLight
                  ? "bg-[#0284c7] hover:bg-[#0369a1] text-white shadow-sky-600/25"
                  : "bg-[#0284c7] hover:bg-white hover:text-black text-white shadow-sky-500/25"
              }`}
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {!isSvgPage && onToggleSound && (
              <button
                type="button"
                onClick={onToggleSound}
                className={`p-2 rounded-xl text-xs font-bold flex items-center gap-1 border ${
                  soundEnabled
                    ? "bg-[#0284c7] border-[#0284c7] text-white"
                    : isLight
                      ? "bg-slate-100 border-slate-200 text-slate-800"
                      : "bg-white/10 border-white/10 text-white"
                }`}
                title={soundEnabled ? "Mute audio" : "Enable audio"}
              >
                {soundEnabled ? <Volume2 className="w-4 h-4 text-white" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
              </button>
            )}
            <button
              onClick={() => onToggleTheme && onToggleTheme(isLight ? "dark" : "light")}
              className={`p-2 rounded-xl text-xs font-bold flex items-center gap-1 border ${
                isLight ? "bg-slate-100 border-slate-200 text-slate-800" : "bg-white/10 border-white/10 text-white"
              }`}
              title="Toggle Theme"
            >
              {isLight ? <Moon className="w-4 h-4 text-[#0284c7]" /> : <Sun className="w-4 h-4 text-sky-400" />}
              <span>{isLight ? "Dark" : "Light"}</span>
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`p-2 rounded-xl ${isLight ? "text-slate-800 hover:bg-slate-100" : "text-slate-300 hover:text-white hover:bg-white/10"}`}
              aria-label="Toggle Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div className={`lg:hidden py-4 border-t space-y-3 px-3 rounded-b-2xl ${
            isLight ? "bg-white/95 border-slate-200 text-slate-800" : "bg-[#0a0a0a]/95 border-white/10 text-slate-300"
          }`}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-3 py-2 text-xs font-bold uppercase tracking-wider ${isLight ? "hover:text-[#0284c7]" : "hover:text-sky-400"}`}
              >
                {link.label}
              </a>
            ))}

            {isSvgPage && onBackToMain && (
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onBackToMain();
                }}
                className={`w-full text-left px-3 py-2 text-xs font-bold uppercase tracking-wider ${isLight ? "text-[#0284c7]" : "text-sky-400"}`}
              >
                ← Return to Video Mode
              </button>
            )}

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={() => {
                  if (isSvgPage) {
                    onToggleTheme && onToggleTheme(isLight ? "dark" : "light");
                  } else {
                    onToggleTheme && onToggleTheme("svg");
                  }
                  setMobileOpen(false);
                }}
                className="w-full py-2.5 px-4 rounded-xl border border-[#0284c7]/40 bg-[#0284c7]/10 text-[#0284c7] flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider"
              >
                <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
                <span>{isSvgPage ? (isLight ? "Switch to Dark Edition" : "Switch to Light Subpage") : "Launch SVG Journey Subpage"}</span>
              </button>

              <a
                href={consultationHref}
                onClick={() => setMobileOpen(false)}
                className={`w-full inline-flex justify-center items-center gap-2 font-extrabold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow-md bg-[#0284c7] text-white`}
              >
                <span>Book Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
