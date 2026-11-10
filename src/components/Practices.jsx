import React from "react";
import { Database, Brain, Zap, Check, ArrowRight } from "lucide-react";

export default function Practices({ theme = "dark" }) {
  const isLight = theme === "light";

  return (
    <section 
      id="practice-section" 
      className="py-28 px-6 sm:px-12 lg:px-20 relative"
    >
      <div className="max-w-7xl mx-auto">
        
        <div className="max-w-3xl mb-16">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3 ${
            isLight ? "bg-sky-50 border border-sky-200 text-[#0284c7]" : "bg-white/[0.06] border border-white/15 text-sky-400"
          }`}>
            <span>Consulting Practices</span>
          </div>
          <h2 className={`font-heading font-black text-3xl sm:text-5xl mt-2 ${isLight ? "text-slate-900" : "text-white"}`}>
            Technical Mastery Across Three Enterprise Pillars
          </h2>
          <p className={`text-base mt-3 leading-relaxed ${isLight ? "text-slate-700" : "text-slate-300"}`}>
            While our synchronous modernization engine connects your workflows, our senior architects deploy resilient, scalable solutions directly in your stack.
          </p>
        </div>

        {/* 3-Column Practice Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Practice 1: Oracle ERP */}
          <div className={`p-8 rounded-3xl border-t-4 border-t-[#0284c7] flex flex-col justify-between border shadow-lg ${
            isLight ? "bg-white/90 border-slate-200/90 shadow-slate-200/50" : "glass-card-dark border-white/10"
          }`}>
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl font-black ${
                  isLight ? "bg-sky-50 text-[#0284c7] border border-sky-200" : "bg-sky-500/10 text-sky-400 border border-sky-500/30"
                }`}>
                  <Database className="w-6 h-6" />
                </div>
                <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                  isLight ? "bg-sky-100/70 text-[#0284c7]" : "bg-sky-500/10 text-sky-400 border border-sky-500/20"
                }`}>Certified</span>
              </div>

              <h3 className={`font-heading font-extrabold text-2xl mb-1 ${isLight ? "text-slate-900" : "text-white"}`}>Oracle ERP Solutions</h3>
              <p className={`text-xs font-semibold mb-4 ${isLight ? "text-slate-500" : "text-slate-400"}`}>Fusion Cloud ERP & E-Business Suite</p>

              <p className={`text-xs leading-relaxed mb-6 ${isLight ? "text-slate-600" : "text-slate-300"}`}>
                Full lifecycle implementation, seamless migration from on-prem EBS, and managed cloud engineering across Financials, Procurement, Supply Chain (SCM), Projects, and HCM.
              </p>

              <div className={`space-y-2.5 text-xs mb-8 ${isLight ? "text-slate-700" : "text-slate-300"}`}>
                <div className="flex items-center gap-2">
                  <Check className={`w-4 h-4 shrink-0 ${isLight ? "text-[#0284c7]" : "text-sky-400"}`} />
                  <span>Oracle Integration Cloud (OIC)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className={`w-4 h-4 shrink-0 ${isLight ? "text-[#0284c7]" : "text-sky-400"}`} />
                  <span>FBDI Batch Automation & Web Services</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className={`w-4 h-4 shrink-0 ${isLight ? "text-[#0284c7]" : "text-sky-400"}`} />
                  <span>OTBI & BI Publisher Analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className={`w-4 h-4 shrink-0 ${isLight ? "text-[#0284c7]" : "text-sky-400"}`} />
                  <span>Quarterly Update Stabilization & Testing</span>
                </div>
              </div>
            </div>

            <a href="#contact-section" className={`inline-flex items-center justify-between p-3.5 rounded-xl text-xs font-bold transition-all border ${
              isLight
                ? "bg-sky-50/80 hover:bg-[#0284c7] hover:text-white text-[#0284c7] border-sky-200/80"
                : "bg-white/[0.04] hover:bg-[#0284c7] hover:text-white text-sky-400 border-white/10"
            }`}>
              <span>Discuss Oracle Architecture</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Practice 2: Data & AI */}
          <div className={`p-8 rounded-3xl border-t-4 border-t-emerald-500 flex flex-col justify-between border shadow-lg ${
            isLight ? "bg-white/90 border-slate-200/90 shadow-slate-200/50" : "glass-card-dark border-white/10"
          }`}>
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/30 flex items-center justify-center text-xl font-black">
                  <Brain className="w-6 h-6" />
                </div>
                <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                  isLight ? "bg-emerald-100/70 text-emerald-700" : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                }`}>Lakehouse</span>
              </div>

              <h3 className={`font-heading font-extrabold text-2xl mb-1 ${isLight ? "text-slate-900" : "text-white"}`}>Data & AI Platforms</h3>
              <p className={`text-xs font-semibold mb-4 ${isLight ? "text-slate-500" : "text-slate-400"}`}>Snowflake, Databricks, Bedrock & dbt</p>

              <p className={`text-xs leading-relaxed mb-6 ${isLight ? "text-slate-600" : "text-slate-300"}`}>
                Unifying siloed systems into governed modern cloud data warehouses with grounded, citation-backed enterprise AI assistants for proposal drafting and contract analytics.
              </p>

              <div className={`space-y-2.5 text-xs mb-8 ${isLight ? "text-slate-700" : "text-slate-300"}`}>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Automated dbt Transformations</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Grounded RFP GenAI Assistant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Unified Financial KPI Dashboards</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Single Source of Truth & Governance</span>
                </div>
              </div>
            </div>

            <a href="#contact-section" className={`inline-flex items-center justify-between p-3.5 rounded-xl text-xs font-bold transition-all border ${
              isLight
                ? "bg-emerald-50/80 hover:bg-emerald-600 hover:text-white text-emerald-700 border-emerald-200/80"
                : "bg-white/[0.04] hover:bg-emerald-400 hover:text-black text-emerald-400 border-white/10"
            }`}>
              <span>Discuss Data Platforms</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Practice 3: Cloud & Automation */}
          <div className={`p-8 rounded-3xl border-t-4 border-t-amber-500 flex flex-col justify-between border shadow-lg ${
            isLight ? "bg-white/90 border-slate-200/90 shadow-slate-200/50" : "glass-card-dark border-white/10"
          }`}>
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 border border-amber-500/30 flex items-center justify-center text-xl font-black">
                  <Zap className="w-6 h-6" />
                </div>
                <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                  isLight ? "bg-amber-100/70 text-amber-700" : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                }`}>Speedup</span>
              </div>

              <h3 className={`font-heading font-extrabold text-2xl mb-1 ${isLight ? "text-slate-900" : "text-white"}`}>Cloud Automation</h3>
              <p className={`text-xs font-semibold mb-4 ${isLight ? "text-slate-500" : "text-slate-400"}`}>CPQ, Event Pipelines & FinOps</p>

              <p className={`text-xs leading-relaxed mb-6 ${isLight ? "text-slate-600" : "text-slate-300"}`}>
                Eliminating manual friction between CRM, complex sales quoting, invoicing, and cross-platform inventory syncing with event-driven automation.
              </p>

              <div className={`space-y-2.5 text-xs mb-8 ${isLight ? "text-slate-700" : "text-slate-300"}`}>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Automated 20-Min Quoting Systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Zero-Spreadsheet Margin Logic</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>AWS & Azure FinOps Optimization</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Event-Driven Microservices</span>
                </div>
              </div>
            </div>

            <a href="#contact-section" className={`inline-flex items-center justify-between p-3.5 rounded-xl text-xs font-bold transition-all border ${
              isLight
                ? "bg-amber-50/80 hover:bg-amber-600 hover:text-white text-amber-700 border-amber-200/80"
                : "bg-white/[0.04] hover:bg-amber-400 hover:text-black text-amber-400 border-white/10"
            }`}>
              <span>Discuss Workflow Automation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
