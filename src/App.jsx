import React, { useState, useEffect } from "react";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import VideoScrub from "./components/VideoScrub";
import Hero from "./components/Hero";
import WhyAark from "./components/WhyAark";
import Practices from "./components/Practices";
import CaseStudies from "./components/CaseStudies";
import RoiEstimator from "./components/RoiEstimator";
import Ecosystem from "./components/Ecosystem";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ModernizationJourneySvgPage from "./components/ModernizationJourneySvgPage";
import { Sparkles } from "lucide-react";

export default function App() {
  // 1. Color theme: 'light' or 'dark'
  const [colorTheme, setColorTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      const search = new URLSearchParams(window.location.search);
      if (path.includes("light") || hash.includes("light") || search.get("theme") === "light") {
        return "light";
      }
    }
    return "dark";
  });

  // 2. View mode: true if on SVG Modernization Journey Subpage
  const [isSvgSubpage, setIsSvgSubpage] = useState(() => {
    if (typeof window !== "undefined") {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      const search = new URLSearchParams(window.location.search);
      return path.includes("svg") || hash.includes("svg") || search.get("view") === "svg" || search.get("theme") === "svg";
    }
    return false;
  });

  const [soundEnabled, setSoundEnabled] = useState(false);
  const [showAudioBanner, setShowAudioBanner] = useState(true);

  const isLight = colorTheme === "light";

  // Synchronize document background color to prevent rubber-band bounce flashes and toggle dark class
  useEffect(() => {
    const bg = isLight ? "#fcfdfe" : "#080808";
    document.body.style.backgroundColor = bg;
    document.documentElement.style.backgroundColor = bg;
    document.documentElement.classList.toggle("dark", !isLight);
  }, [isLight]);

  // Listen to browser Back/Forward buttons and URL hash changes
  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      const search = new URLSearchParams(window.location.search);

      const hasSvg = path.includes("svg") || hash.includes("svg") || search.get("view") === "svg" || search.get("theme") === "svg";
      const hasLight = path.includes("light") || hash.includes("light") || search.get("theme") === "light";

      setColorTheme(hasLight ? "light" : "dark");
      setIsSvgSubpage(hasSvg);
    };

    window.addEventListener("popstate", handleLocationChange);
    window.addEventListener("hashchange", handleLocationChange);
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
      window.removeEventListener("hashchange", handleLocationChange);
    };
  }, []);

  // Main page theme switcher (Dark / Light / SVG)
  const handleToggleTheme = (requested) => {
    if (requested === "svg") {
      setIsSvgSubpage(true);
      const targetUrl = colorTheme === "light" ? "/light#svg" : "/#svg";
      window.history.pushState({}, "", targetUrl);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (requested === "light") {
      setColorTheme("light");
      setIsSvgSubpage(false);
      window.history.pushState({}, "", "/light");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setColorTheme("dark");
      setIsSvgSubpage(false);
      window.history.pushState({}, "", "/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // SVG subpage theme toggle (Light <-> Dark)
  const handleSvgToggleTheme = (newTheme) => {
    setColorTheme(newTheme);
    const targetUrl = newTheme === "light" ? "/light#svg" : "/#svg";
    window.history.pushState({}, "", targetUrl);
  };

  // SVG subpage back to main homepage
  const handleBackToMain = () => {
    setIsSvgSubpage(false);
    const targetUrl = colorTheme === "light" ? "/light" : "/";
    window.history.pushState({}, "", targetUrl);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleToggleSound = () => {
    setSoundEnabled((prev) => !prev);
    setShowAudioBanner(false);
  };

  // If user navigated to the SVG Modernization Journey subpage:
  if (isSvgSubpage) {
    return (
      <div className={`relative min-h-screen font-sans transition-colors duration-300 ${
        isLight ? "bg-[#fcfdfe] text-slate-900" : "bg-[#080808] text-white"
      }`}>
        <Cursor />
        <ModernizationJourneySvgPage 
          onBackToMain={handleBackToMain} 
          theme={colorTheme}
          onToggleTheme={handleSvgToggleTheme}
        />
      </div>
    );
  }

  return (
    <div className={`relative min-h-screen font-sans transition-colors duration-500 ${
      isLight
        ? "bg-[#fcfdfe] text-slate-900 selection:bg-sky-100 selection:text-sky-950"
        : "bg-[#080808] text-slate-100 selection:bg-[#0284c7] selection:text-white"
    }`}>
      {/* Subtle Analog Grain Texture Overlay (Port Style) */}
      <div className="grain-overlay" />

      {/* Interactive Cursor */}
      <Cursor />

      {/* ── STICKY SCRUBBED VIDEO - LIVES BEHIND EVERYTHING (PORT STYLE) ── */}
      <VideoScrub
        theme={colorTheme}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />

      {/* Fixed Navigation with Subpage Switcher and Sound Controller */}
      <Navbar
        theme={colorTheme}
        onToggleTheme={handleToggleTheme}
        soundEnabled={soundEnabled}
        onToggleSound={handleToggleSound}
      />

      {/* Discreet Audio Prompt Pill (bottom-left) when sound is not yet active */}
      {!soundEnabled && showAudioBanner && (
        <div className={`fixed bottom-5 left-6 z-40 hidden sm:flex items-center gap-2.5 px-4 py-2 rounded-full backdrop-blur-md shadow-xl text-xs font-medium animate-bounce duration-1000 ${
          isLight
            ? "bg-white/95 border border-sky-200/90 text-slate-800 shadow-sky-100"
            : "bg-[#141414]/95 border border-white/10 text-white shadow-black"
        }`}>
          <Sparkles className="w-3.5 h-3.5 text-[#0284c7]" />
          <span>Cinematic audio available</span>
          <button
            type="button"
            onClick={handleToggleSound}
            className="ml-1 px-2.5 py-0.5 rounded-full bg-[#0284c7] text-white font-extrabold text-[10px] uppercase hover:bg-[#0369a1] transition-colors cursor-pointer"
          >
            Turn On 🔊
          </button>
          <button
            type="button"
            onClick={() => setShowAudioBanner(false)}
            className="text-slate-400 hover:text-slate-600 ml-1 text-sm leading-none"
            title="Dismiss"
          >
            ×
          </button>
        </div>
      )}

      {/* Bottom Blur Vignette */}
      <div className="bottom-blur" />

      {/* Scrollable Content Stream sitting directly over the Video */}
      <main className="relative z-10">
        <Hero theme={colorTheme} />
        <WhyAark theme={colorTheme} />
        <Practices theme={colorTheme} />
        <CaseStudies theme={colorTheme} />
        <RoiEstimator theme={colorTheme} />
        <Ecosystem theme={colorTheme} />
        <Contact theme={colorTheme} />
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
