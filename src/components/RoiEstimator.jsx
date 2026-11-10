import React, { useState } from "react";
import { Check, Clock, DollarSign, Gauge } from "lucide-react";

export default function RoiEstimator({ theme = "dark" }) {
  const isLight = theme === "light";
  const [teamSize, setTeamSize] = useState(45);

  const weeklyHours = Math.round(teamSize * 3.5);
  const annualSavings = Math.round(weeklyHours * 65 * 50);
  const speedup = teamSize > 80 ? "4.5x" : teamSize > 30 ? "3.2x" : "2.5x";

  return (
    <section id="models-section" className="py-28 px-6 sm:px-12 lg:px-20 relative">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className={`text-xs font-bold uppercase tracking-widest ${isLight ? "text-[#0284c7]" : "text-sky-400"}`}>How We Work</span>
          <h2 className={`font-heading font-black text-3xl sm:text-5xl mt-2 mb-4 ${isLight ? "text-slate-900" : "text-white"}`}>
            Three Transparent Engagement Models
          </h2>
          <p className={`text-sm ${isLight ? "text-slate-600" : "text-slate-300"}`}>
            Choose the delivery structure that fits your project maturity, timeline, and internal team capacity.
          </p>
        </div>

        {/* 3 Model Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          
          <div className={`p-8 rounded-2xl flex flex-col justify-between border shadow-lg ${
            isLight ? "bg-white/90 border-slate-200/90 shadow-slate-200/50" : "glass-card-dark border-white/10"
          }`}>
            <div>
              <div className={`text-[10px] font-bold uppercase tracking-wider mb-2 ${isLight ? "text-[#0284c7]" : "text-sky-400"}`}>Model 01</div>
              <h3 className={`font-heading font-bold text-xl mb-2 ${isLight ? "text-slate-900" : "text-white"}`}>Fixed-Scope Modernization</h3>
              <p className={`text-xs mb-6 leading-relaxed ${isLight ? "text-slate-600" : "text-slate-300"}`}>
                Ideal for defined Oracle EBS to Cloud migrations, discrete dbt warehouse builds, or sales quoting automation.
              </p>
              <div className={`space-y-2 text-xs mb-6 ${isLight ? "text-slate-700" : "text-slate-300"}`}>
                <div className="flex items-center gap-2">
                  <Check className={`w-3.5 h-3.5 ${isLight ? "text-[#0284c7]" : "text-sky-400"}`} />
                  <span>Guaranteed total cost & delivery date</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className={`w-3.5 h-3.5 ${isLight ? "text-[#0284c7]" : "text-sky-400"}`} />
                  <span>Milestone-based progress sign-offs</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className={`w-3.5 h-3.5 ${isLight ? "text-[#0284c7]" : "text-sky-400"}`} />
                  <span>Full code repository & IP handover</span>
                </div>
              </div>
            </div>
            <a href="#contact-section" className={`w-full text-center py-3 rounded-xl text-xs font-bold transition-all border ${
              isLight
                ? "bg-slate-50 hover:bg-[#0284c7] hover:text-white text-[#0284c7] border-slate-200"
                : "bg-white/[0.04] hover:bg-[#0284c7] hover:text-white text-sky-400 border-white/10"
            }`}>
              Request Scoping Assessment
            </a>
          </div>

          <div className={`p-8 rounded-2xl border-2 border-[#0284c7]/40 shadow-2xl relative flex flex-col justify-between ${
            isLight ? "bg-white shadow-sky-500/10 ring-2 ring-[#0284c7]/20" : "glass-card-dark bg-black/60"
          }`}>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#0284c7] text-white text-[10px] font-black uppercase tracking-wider rounded-full shadow-md">
              Most Popular
            </div>
            <div>
              <div className={`text-[10px] font-bold uppercase tracking-wider mb-2 ${isLight ? "text-[#0284c7]" : "text-sky-400"}`}>Model 02</div>
              <h3 className={`font-heading font-bold text-xl mb-2 ${isLight ? "text-slate-900" : "text-white"}`}>Dedicated Principal Pod</h3>
              <p className={`text-xs mb-6 leading-relaxed ${isLight ? "text-slate-600" : "text-slate-300"}`}>
                Senior architects embedded alongside your team to accelerate multi-quarter roadmap execution without overhead.
              </p>
              <div className={`space-y-2 text-xs mb-6 ${isLight ? "text-slate-700" : "text-slate-300"}`}>
                <div className="flex items-center gap-2">
                  <Check className={`w-3.5 h-3.5 ${isLight ? "text-[#0284c7]" : "text-sky-400"}`} />
                  <span>100% Senior Principal Engineers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className={`w-3.5 h-3.5 ${isLight ? "text-[#0284c7]" : "text-sky-400"}`} />
                  <span>Flexible monthly sprint reallocation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className={`w-3.5 h-3.5 ${isLight ? "text-[#0284c7]" : "text-sky-400"}`} />
                  <span>Continuous knowledge transfer to staff</span>
                </div>
              </div>
            </div>
            <a href="#contact-section" className="w-full text-center py-3 rounded-xl bg-[#0284c7] hover:bg-[#0369a1] text-white text-xs font-black uppercase tracking-wider transition-all shadow-md">
              Check Pod Availability
            </a>
          </div>

          <div className={`p-8 rounded-2xl flex flex-col justify-between border shadow-lg ${
            isLight ? "bg-white/90 border-slate-200/90 shadow-slate-200/50" : "glass-card-dark border-white/10"
          }`}>
            <div>
              <div className={`text-[10px] font-bold uppercase tracking-wider mb-2 ${isLight ? "text-[#0284c7]" : "text-sky-400"}`}>Model 03</div>
              <h3 className={`font-heading font-bold text-xl mb-2 ${isLight ? "text-slate-900" : "text-white"}`}>Architecture Advisory</h3>
              <p className={`text-xs mb-6 leading-relaxed ${isLight ? "text-slate-600" : "text-slate-300"}`}>
                Targeted architectural reviews, Oracle quarterly release stabilization, and GenAI security readiness audits.
              </p>
              <div className={`space-y-2 text-xs mb-6 ${isLight ? "text-slate-700" : "text-slate-300"}`}>
                <div className="flex items-center gap-2">
                  <Check className={`w-3.5 h-3.5 ${isLight ? "text-[#0284c7]" : "text-sky-400"}`} />
                  <span>Vendor-neutral stack evaluations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className={`w-3.5 h-3.5 ${isLight ? "text-[#0284c7]" : "text-sky-400"}`} />
                  <span>Security & data governance audits</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className={`w-3.5 h-3.5 ${isLight ? "text-[#0284c7]" : "text-sky-400"}`} />
                  <span>Executive steering committee guidance</span>
                </div>
              </div>
            </div>
            <a href="#contact-section" className={`w-full text-center py-3 rounded-xl text-xs font-bold transition-all border ${
              isLight
                ? "bg-slate-50 hover:bg-[#0284c7] hover:text-white text-[#0284c7] border-slate-200"
                : "bg-white/[0.04] hover:bg-[#0284c7] hover:text-white text-sky-400 border-white/10"
            }`}>
              Book Advisory Session
            </a>
          </div>

        </div>

        {/* Interactive Savings Estimator */}
        <div className={`p-8 sm:p-12 rounded-3xl border shadow-2xl ${
          isLight ? "bg-white/95 border-slate-200/90 shadow-slate-200/50" : "glass-card-dark bg-black/60 border-white/15"
        }`}>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className={`text-xs font-bold uppercase tracking-wider ${isLight ? "text-[#0284c7]" : "text-sky-400"}`}>Interactive Calculator</span>
              <h3 className={`font-heading font-bold text-2xl sm:text-3xl mt-1 ${isLight ? "text-slate-900" : "text-white"}`}>
                Estimate Your Team's Automation Value
              </h3>
              <p className={`text-xs mt-2 ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                Drag the slider to match your operational headcount involved in quoting, reporting, and ERP processes.
              </p>
            </div>

            <div className="mb-10">
              <div className={`flex justify-between items-center text-sm font-bold mb-3 ${isLight ? "text-slate-900" : "text-white"}`}>
                <span>Knowledge Workers / Operations Staff:</span>
                <span className={`font-heading font-black text-2xl ${isLight ? "text-[#0284c7]" : "text-sky-400"}`}>{teamSize} People</span>
              </div>
              <input
                type="range"
                min="5"
                max="150"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className={`w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#0284c7] ${isLight ? "bg-slate-200" : "bg-white/20"}`}
              />
              <div className={`flex justify-between text-[11px] mt-2 ${isLight ? "text-slate-400" : "text-slate-500"}`}>
                <span>5 people</span>
                <span>75 people</span>
                <span>150+ people</span>
              </div>
            </div>

            <div className={`grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 rounded-2xl border ${
              isLight ? "bg-slate-50 border-slate-200" : "bg-black/60 border-white/10"
            }`}>
              <div className="text-center">
                <Clock className={`w-5 h-5 mx-auto mb-1.5 ${isLight ? "text-[#0284c7]" : "text-sky-400"}`} />
                <div className={`font-heading font-black text-3xl ${isLight ? "text-slate-900" : "text-white"}`}>~{weeklyHours} hrs</div>
                <div className={`text-xs mt-1 ${isLight ? "text-slate-600" : "text-slate-400"}`}>Manual Hours Saved / Week</div>
              </div>

              <div className={`text-center border-y sm:border-y-0 sm:border-x py-4 sm:py-0 ${isLight ? "border-slate-200" : "border-white/10"}`}>
                <DollarSign className="w-5 h-5 text-emerald-500 mx-auto mb-1.5" />
                <div className="font-heading font-black text-3xl text-emerald-500">${(annualSavings / 1000).toFixed(0)}k/yr</div>
                <div className={`text-xs mt-1 ${isLight ? "text-slate-600" : "text-slate-400"}`}>Estimated Annual Capacity Unlocked</div>
              </div>

              <div className="text-center">
                <Gauge className="w-5 h-5 text-amber-500 mx-auto mb-1.5" />
                <div className="font-heading font-black text-3xl text-amber-500">{speedup}</div>
                <div className={`text-xs mt-1 ${isLight ? "text-slate-600" : "text-slate-400"}`}>Faster Operational Cycle Time</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
