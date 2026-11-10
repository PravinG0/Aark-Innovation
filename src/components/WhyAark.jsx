import React from "react";
import { ShieldCheck, FileCheck, Target } from "lucide-react";

export default function WhyAark({ theme = "dark" }) {
  const isLight = theme === "light";

  return (
    <section id="difference-section" className="py-28 px-6 sm:px-12 lg:px-20 relative">
      <div className="max-w-6xl mx-auto">
        
        <div className="mb-14">
          <span className={`text-xs font-bold uppercase tracking-widest ${isLight ? "text-[#0284c7]" : "text-sky-400"}`}>Why Enterprise Teams Choose AARK</span>
          <h2 className={`font-heading font-black text-3xl sm:text-5xl mt-2 mb-4 ${isLight ? "text-slate-900" : "text-white"}`}>
            Enterprise Modernization <span className={`mr-1 ${isLight ? "ghost-serif text-[#0284c7]" : "ghost text-sky-400"}`}>Without</span> the Big-4 Bloat.
          </h2>
          <p className={`max-w-2xl text-base leading-relaxed ${isLight ? "text-slate-700" : "text-slate-300"}`}>
            Legacy consultancies bill open-ended hours with junior teams learning on your dime. AARK Innovations provides senior, accountable practitioners who build real working software and leave your team self-sufficient.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          
          <div className={`p-8 rounded-2xl relative overflow-hidden group border transition-all ${
            isLight ? "bg-white/90 border-slate-200/90 shadow-md hover:border-[#0284c7]" : "glass-card-dark border-white/10 hover:border-sky-500/50"
          }`}>
            <div className={`w-12 h-12 rounded-xl border flex items-center justify-center text-xl mb-6 transition-all ${
              isLight
                ? "bg-sky-50 text-[#0284c7] border-sky-200 group-hover:bg-[#0284c7] group-hover:text-white"
                : "bg-sky-500/10 text-sky-400 border-sky-500/20 group-hover:bg-[#0284c7] group-hover:text-white"
            }`}>
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className={`font-heading font-bold text-xl mb-2 ${isLight ? "text-slate-900" : "text-white"}`}>1. Direct Senior Leadership</h3>
            <p className={`text-xs leading-relaxed mb-4 ${isLight ? "text-slate-600" : "text-slate-300"}`}>
              The experts who scope your engagement are the exact senior technical and functional architects who execute the implementation. No bait-and-switch.
            </p>
            <div className={`text-[11px] font-bold ${isLight ? "text-[#0284c7]" : "text-sky-400"}`}>
              Direct access to principal consultants →
            </div>
          </div>

          <div className={`p-8 rounded-2xl relative overflow-hidden group border transition-all ${
            isLight ? "bg-white/90 border-slate-200/90 shadow-md hover:border-emerald-500" : "glass-card-dark border-white/10"
          }`}>
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center text-xl mb-6 group-hover:bg-emerald-500 group-hover:text-black transition-all">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className={`font-heading font-bold text-xl mb-2 ${isLight ? "text-slate-900" : "text-white"}`}>2. Fixed Scope & Predictability</h3>
            <p className={`text-xs leading-relaxed mb-4 ${isLight ? "text-slate-600" : "text-slate-300"}`}>
              Clear deliverables, fixed pricing, and milestone-driven software handovers. You know the exact cost and timeline before any code or configuration begins.
            </p>
            <div className="text-[11px] font-bold text-emerald-500">
              Guaranteed working software handovers →
            </div>
          </div>

          <div className={`p-8 rounded-2xl relative overflow-hidden group border transition-all ${
            isLight ? "bg-white/90 border-slate-200/90 shadow-md hover:border-amber-500" : "glass-card-dark border-white/10"
          }`}>
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-500 border border-amber-500/20 flex items-center justify-center text-xl mb-6 group-hover:bg-amber-400 group-hover:text-black transition-all">
              <Target className="w-6 h-6" />
            </div>
            <h3 className={`font-heading font-bold text-xl mb-2 ${isLight ? "text-slate-900" : "text-white"}`}>3. Measurable ROI Focus</h3>
            <p className={`text-xs leading-relaxed mb-4 ${isLight ? "text-slate-600" : "text-slate-300"}`}>
              We focus strictly on high-impact bottlenecks: automating repetitive manual entry, collapsing multi-day quoting queues, and unifying conflicting data silos.
            </p>
            <div className="text-[11px] font-bold text-amber-500">
              Measurable operational hours saved →
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
