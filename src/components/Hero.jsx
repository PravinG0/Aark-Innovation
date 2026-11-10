import React from "react";
import { ArrowRight, BarChart3, ShieldCheck, Sparkles, Cpu, MousePointerClick } from "lucide-react";

export default function Hero({ theme = "dark" }) {
  const isLight = theme === "light";

  return (
    <section id="hero-section" className="relative min-h-[115vh] flex flex-col justify-center px-6 sm:px-12 lg:px-20 pt-32 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Positioning & Actions */}
          <div className="lg:col-span-7 z-10">
            {/* Status Pill */}
            <div className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full backdrop-blur-md text-xs font-bold tracking-wider uppercase mb-8 shadow-lg ${
              isLight
                ? "bg-sky-50/90 border border-sky-200/90 text-[#0284c7]"
                : "bg-white/[0.06] border border-white/15 text-sky-400"
            }`}>
              <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
              <span>Enterprise Modernization • Fort Mill, SC</span>
              <span className="text-xs opacity-50">|</span>
              <span className={`text-[10px] font-black uppercase tracking-widest ${isLight ? "text-slate-600" : "text-white/60"}`}>
                {isLight ? "Studio White Subpage" : "Obsidian Subpage"}
              </span>
            </div>

            {/* Main Headline with fully visible serif accent */}
            <h1 className={`font-heading font-black tracking-tight leading-[0.96] text-5xl sm:text-6xl md:text-7xl lg:text-[76px] mb-8 ${
              isLight ? "text-slate-900" : "text-white"
            }`}>
              <span className="block">Modernize How Your</span>
              <span className="block -mt-1 sm:-mt-2">
                <span className={`mr-2.5 font-serif italic tracking-normal ${
                  isLight ? "text-[#0284c7] font-semibold" : "text-sky-400 font-medium"
                }`}>
                  Business
                </span>{" "}
                Operates.
              </span>
            </h1>

            {/* Subtitle */}
            <p className={`text-lg sm:text-xl font-normal leading-relaxed max-w-2xl mb-10 ${
              isLight ? "text-slate-700" : "text-slate-300"
            }`}>
              AARK Innovations partners with mid-market and enterprise leadership to eliminate manual bottlenecks, modernize <strong className={isLight ? "text-slate-900 font-bold" : "text-white"}>Oracle ERP</strong> ecosystems, and deploy grounded <strong className={isLight ? "text-slate-900 font-bold" : "text-white"}>Data & AI platforms</strong>. Fixed scope. Transparent delivery. Zero bloated overhead.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-14">
              <a
                href="#practice-section"
                className={`inline-flex items-center gap-2.5 font-extrabold text-xs uppercase tracking-wider px-7 py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 ${
                  isLight
                    ? "bg-[#0284c7] hover:bg-[#0369a1] text-white shadow-sky-600/25"
                    : "bg-[#0284c7] hover:bg-white hover:text-black text-white shadow-sky-500/25"
                }`}
              >
                <span>Explore Core Practices</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="#case-studies-section"
                className={`inline-flex items-center gap-2.5 font-bold text-xs uppercase tracking-wider px-7 py-4 rounded-xl border shadow-lg backdrop-blur-md transition-all ${
                  isLight
                    ? "bg-white/90 hover:bg-white text-slate-800 border-slate-200/90 shadow-slate-200/50"
                    : "bg-white/[0.06] hover:bg-white/[0.12] text-white border-white/20 hover:border-sky-400"
                }`}
              >
                <BarChart3 className={`w-3.5 h-3.5 ${isLight ? "text-[#0284c7]" : "text-sky-400"}`} />
                <span>View Verified Case Studies</span>
              </a>
            </div>

            {/* Key Metrics Ribbon */}
            <div className={`grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t ${isLight ? "border-slate-200/90" : "border-white/10"}`}>
              <div className={`p-3.5 rounded-xl border shadow-lg ${isLight ? "bg-white/90 border-slate-200/90" : "glass-card-dark border-white/10"}`}>
                <div className={`font-heading font-black text-2xl sm:text-3xl ${isLight ? "text-[#0284c7]" : "text-sky-400"}`}>-60%</div>
                <div className={`text-xs font-semibold mt-0.5 ${isLight ? "text-slate-900" : "text-white"}`}>RFP Drafting Time</div>
                <div className={`text-[10px] ${isLight ? "text-slate-500" : "text-slate-400"}`}>Document extraction & AI</div>
              </div>
              <div className={`p-3.5 rounded-xl border shadow-lg ${isLight ? "bg-white/90 border-slate-200/90" : "glass-card-dark border-white/10"}`}>
                <div className="font-heading font-black text-2xl sm:text-3xl text-emerald-500">20 Mins</div>
                <div className={`text-xs font-semibold mt-0.5 ${isLight ? "text-slate-900" : "text-white"}`}>Quote Turnaround</div>
                <div className={`text-[10px] ${isLight ? "text-slate-500" : "text-slate-400"}`}>Down from 3-day backlog</div>
              </div>
              <div className={`p-3.5 rounded-xl border shadow-lg ${isLight ? "bg-white/90 border-slate-200/90" : "glass-card-dark border-white/10"}`}>
                <div className="font-heading font-black text-2xl sm:text-3xl text-amber-500">100%</div>
                <div className={`text-xs font-semibold mt-0.5 ${isLight ? "text-slate-900" : "text-white"}`}>Senior Architect Led</div>
                <div className={`text-[10px] ${isLight ? "text-slate-500" : "text-slate-400"}`}>Zero junior bench staffing</div>
              </div>
              <div className={`p-3.5 rounded-xl border shadow-lg ${isLight ? "bg-white/90 border-slate-200/90" : "glass-card-dark border-white/10"}`}>
                <div className="font-heading font-black text-2xl sm:text-3xl text-sky-500">$0</div>
                <div className={`text-xs font-semibold mt-0.5 ${isLight ? "text-slate-900" : "text-white"}`}>Surprise Billing Meters</div>
                <div className={`text-[10px] ${isLight ? "text-slate-500" : "text-slate-400"}`}>Fixed-scope predictability</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Stage */}
          <div className="lg:col-span-5 relative flex flex-col items-end justify-center min-h-[480px]">
            {/* Interactive floating badges */}
            <div className="space-y-4 max-w-sm w-full">
              <div className={`p-4 rounded-2xl flex items-center gap-3.5 border shadow-xl ${
                isLight ? "bg-white/90 border-slate-200/90" : "glass-card-dark border-white/15"
              }`}>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  isLight ? "bg-sky-50 text-[#0284c7] border border-sky-200" : "bg-sky-500/10 border border-sky-500/30 text-sky-400"
                }`}>
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <div className={`text-xs font-bold flex items-center gap-1.5 ${isLight ? "text-slate-900" : "text-white"}`}>
                    <span>Modernization Core</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7] animate-pulse" />
                  </div>
                  <div className={`text-[11px] ${isLight ? "text-slate-600" : "text-slate-400"}`}>
                    {isLight ? "Light Studio 3D engine stream" : "Obsidian 3D video scrub engine"}
                  </div>
                </div>
              </div>

              <div className={`p-4 rounded-2xl flex items-center gap-3.5 border shadow-xl translate-x-2 ${
                isLight ? "bg-white/90 border-slate-200/90" : "glass-card-dark border-white/15"
              }`}>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className={`text-xs font-bold ${isLight ? "text-slate-900" : "text-white"}`}>Oracle Fusion Cloud & EBS</div>
                  <div className={`text-[11px] ${isLight ? "text-slate-600" : "text-slate-400"}`}>Certified architecture & zero-drift rollout</div>
                </div>
              </div>

              <div className={`p-4 rounded-2xl flex items-center gap-3.5 border shadow-xl -translate-x-2 ${
                isLight ? "bg-white/90 border-slate-200/90" : "glass-card-dark border-white/15"
              }`}>
                <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className={`text-xs font-bold ${isLight ? "text-slate-900" : "text-white"}`}>Grounded AI Data Fabric</div>
                  <div className={`text-[11px] ${isLight ? "text-slate-600" : "text-slate-400"}`}>Snowflake, Bedrock, Databricks & dbt</div>
                </div>
              </div>
            </div>

            {/* Scroll Indicator & SVG Subpage Launchers */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <div className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-md border text-[11px] font-semibold ${
                isLight ? "bg-white/80 border-slate-200/90 text-slate-700" : "bg-black/50 border-white/10 text-slate-300"
              }`}>
                <MousePointerClick className={`w-3.5 h-3.5 ${isLight ? "text-[#0284c7]" : "text-sky-400"} animate-bounce`} />
                <span>Scroll to scrub video & explore</span>
              </div>

              <a
                href="#svg"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#6266E6] hover:bg-[#4f46e5] text-white text-[11px] font-bold shadow-md hover:shadow-indigo-500/25 transition-all transform hover:-translate-y-0.5"
                title="Launch new Vector SVG Continuous Scrollytelling Subpage"
              >
                <Sparkles className="w-3.5 h-3.5 animate-spin duration-3000" />
                <span>Launch SVG Subpage →</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
