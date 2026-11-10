import React, { useState } from "react";
import { AlertTriangle, CheckCircle2, ArrowRight, Sparkles, TrendingUp } from "lucide-react";

const caseStudiesData = [
  {
    id: "healthcare-rfp",
    tag: "Healthcare Services Organization",
    title: "AI-Powered Proposal & RFP Drafting Automation",
    subtitle: "Turned multi-day RFP searches into a citation-grounded enterprise assistant",
    challenge: "A rapidly growing healthcare services organization was losing high-value contract bids due to slow proposal turnaround. Prior winning answers, case studies, and compliance methodologies were buried across disconnected shared drives and legacy documents.",
    solution: "AARK Innovations indexed the organization's entire proposal archive, clinical methodology decks, and credential databases into a secure enterprise vector lakehouse. We delivered an internal assistant that automatically generates first-draft answers, flags sections requiring human SME review, and provides source citations with one click.",
    metrics: [
      { label: "Drafting Time", value: "-60%", sub: "time spent on first drafts" },
      { label: "Quarterly Throughput", value: "2x", sub: "more RFPs answered" },
      { label: "Time to Launch", value: "4 Weeks", sub: "to production version 1" },
    ],
    tech: ["GenAI Document Extraction", "Vector Lakehouse", "AWS Bedrock", "FastAPI", "React"],
  },
  {
    id: "distributor-quoting",
    tag: "90-Person Equipment Distributor",
    title: "Streamlined Sales Quoting & CRM Automation",
    subtitle: "From 3-day spreadsheet bottlenecks down to 20-minute closed quotes",
    challenge: "Complex custom quoting was executed through fragile, unversioned Excel spreadsheets with tiered margin formulas trapped in key employees' heads, causing multi-day sales delays and pricing inconsistencies.",
    solution: "We eliminated the spreadsheets entirely by encoding complex product catalog rules directly into their CRM. We automated proposal PDF compilation, margin verification, and established automated management approval routing for out-of-band discounts.",
    metrics: [
      { label: "Quoting Speed", value: "20 Mins", sub: "down from 3 days" },
      { label: "Margin Errors", value: "0%", sub: "rogue discount prevention" },
      { label: "Sales Cycle", value: "-45%", sub: "faster deal closing" },
    ],
    tech: ["CRM Workflow Engine", "Pricing Rule APIs", "ERP Integration", "Automated PDF Generation"],
  },
  {
    id: "unified-data-warehouse",
    tag: "Multi-Entity Enterprise",
    title: "Unified Snowflake Data Warehouse & Executive Analytics",
    subtitle: "Eliminated disparate reporting silos and 11 hours of weekly spreadsheet crunching",
    challenge: "Executive leadership across finance, sales, and supply chain were presenting conflicting revenue numbers. Each division extracted raw data from different legacy systems at inconsistent intervals, burning 11 hours of senior analyst time every week.",
    solution: "AARK Innovations designed and deployed a unified modern data platform on Snowflake. We built automated dbt transformation pipelines that ingest operational data overnight, compute consistent enterprise KPIs, and deliver clean executive dashboards.",
    metrics: [
      { label: "Manual Reporting", value: "-11 hrs", sub: "saved weekly per team" },
      { label: "Source of Truth", value: "1 Single", sub: "unified governed platform" },
      { label: "Cloud Cost", value: "-22%", sub: "optimized warehouse spend" },
    ],
    tech: ["Snowflake", "dbt Core", "Fivetran", "Power BI / Tableau", "Azure Cloud"],
  },
];

export default function CaseStudies({ theme = "dark" }) {
  const isLight = theme === "light";
  const [activeIdx, setActiveIdx] = useState(0);
  const activeCs = caseStudiesData[activeIdx];

  return (
    <section id="case-studies-section" className="py-28 px-6 sm:px-12 lg:px-20 relative">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-3 ${
              isLight ? "bg-sky-50 border border-sky-200 text-[#0284c7]" : "bg-white/[0.06] border border-white/15 text-sky-400"
            }`}>
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Measurable Client Impact</span>
            </div>
            <h2 className={`font-heading font-black text-3xl sm:text-5xl mt-2 ${isLight ? "text-slate-900" : "text-white"}`}>
              Real Case Studies. <span className={`mr-1 ${isLight ? "ghost-serif text-[#0284c7]" : "ghost text-sky-400"}`}>Verified</span> Outcomes.
            </h2>
          </div>

          <div className={`px-4 py-2 rounded-xl backdrop-blur-md shadow-xl flex items-center gap-2 text-xs font-bold ${
            isLight ? "bg-white/90 border border-slate-200/90 text-slate-700" : "bg-white/[0.06] border border-white/15 text-slate-300"
          }`}>
            <Sparkles className={`w-4 h-4 ${isLight ? "text-[#0284c7]" : "text-sky-400"}`} />
            <span>Senior Architect Led Deployments</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Tabs */}
          <div className="lg:col-span-4 space-y-3">
            {caseStudiesData.map((cs, i) => (
              <button
                key={cs.id}
                onClick={() => setActiveIdx(i)}
                className={`text-left px-5 py-4 rounded-2xl transition-all duration-300 border flex flex-col gap-1 w-full ${
                  i === activeIdx
                    ? isLight
                      ? "bg-white border-[#0284c7] shadow-xl text-slate-900 ring-2 ring-[#0284c7]/30"
                      : "bg-[#181818] border-[#0284c7] shadow-2xl text-white ring-2 ring-[#0284c7]/30"
                    : isLight
                    ? "bg-white/80 border-slate-200/90 text-slate-600 hover:bg-white hover:text-slate-900 shadow-sm"
                    : "glass-card-dark border-white/10 text-slate-400 hover:text-white hover:border-white/20"
                }`}
              >
                <span className={`text-[10px] font-bold uppercase tracking-wider ${i === activeIdx ? (isLight ? "text-[#0284c7]" : "text-sky-400") : isLight ? "text-slate-400" : "text-slate-500"}`}>
                  {cs.tag}
                </span>
                <span className="font-bold text-sm">{cs.title}</span>
              </button>
            ))}
          </div>

          {/* Right Active Details Card */}
          <div className="lg:col-span-8">
            <div className={`p-8 sm:p-10 rounded-3xl relative overflow-hidden border shadow-2xl ${
              isLight ? "bg-white/95 border-slate-200/90 shadow-slate-200/50" : "glass-card-dark border-white/15"
            }`}>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <span className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border ${
                  isLight ? "text-[#0284c7] bg-sky-50 border-sky-200" : "text-sky-400 bg-sky-500/10 border-sky-500/20"
                }`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0284c7] animate-pulse" />
                  {activeCs.tag}
                </span>
                <span className={`text-xs font-medium ${isLight ? "text-slate-500" : "text-slate-400"}`}>Verified Client Outcome</span>
              </div>

              <h3 className={`font-heading font-extrabold text-2xl sm:text-3xl mb-2 ${isLight ? "text-slate-900" : "text-white"}`}>{activeCs.title}</h3>
              <p className={`text-sm font-medium mb-8 leading-relaxed ${isLight ? "text-slate-600" : "text-slate-300"}`}>{activeCs.subtitle}</p>

              {/* Metrics Grid */}
              <div className={`grid grid-cols-3 gap-4 mb-8 p-5 rounded-2xl border ${
                isLight ? "bg-slate-50 border-slate-200" : "bg-black/40 border-white/10"
              }`}>
                {activeCs.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <div className={`font-heading font-black text-2xl sm:text-4xl ${isLight ? "text-[#0284c7]" : "text-sky-400"}`}>{m.value}</div>
                    <div className={`text-xs font-bold mt-1 ${isLight ? "text-slate-800" : "text-white"}`}>{m.label}</div>
                    <div className={`text-[11px] hidden sm:block ${isLight ? "text-slate-500" : "text-slate-400"}`}>{m.sub}</div>
                  </div>
                ))}
              </div>

              {/* Problem & Solution */}
              <div className="grid md:grid-cols-2 gap-6 text-xs sm:text-sm mb-8 leading-relaxed">
                <div className={`p-5 rounded-2xl border ${isLight ? "bg-rose-50/70 border-rose-200/70" : "bg-rose-500/10 border-rose-500/20"}`}>
                  <h4 className={`font-bold uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5 ${isLight ? "text-rose-700" : "text-rose-300"}`}>
                    <AlertTriangle className={`w-3.5 h-3.5 ${isLight ? "text-rose-600" : "text-rose-400"}`} /> The Challenge
                  </h4>
                  <p className={isLight ? "text-slate-700" : "text-slate-300"}>{activeCs.challenge}</p>
                </div>
                <div className={`p-5 rounded-2xl border ${isLight ? "bg-emerald-50/70 border-emerald-200/70" : "bg-emerald-500/10 border-emerald-500/20"}`}>
                  <h4 className={`font-bold uppercase tracking-wider text-[11px] mb-2 flex items-center gap-1.5 ${isLight ? "text-emerald-700" : "text-emerald-300"}`}>
                    <CheckCircle2 className={`w-3.5 h-3.5 ${isLight ? "text-emerald-600" : "text-emerald-400"}`} /> The AARK Solution
                  </h4>
                  <p className={isLight ? "text-slate-700" : "text-slate-300"}>{activeCs.solution}</p>
                </div>
              </div>

              {/* Tech Badges */}
              <div className={`pt-5 border-t flex flex-wrap items-center justify-between gap-3 ${isLight ? "border-slate-200" : "border-white/10"}`}>
                <div className="flex flex-wrap gap-2">
                  {activeCs.tech.map((t) => (
                    <span key={t} className={`text-[11px] font-semibold px-3 py-1 rounded-lg border ${
                      isLight ? "bg-slate-100 text-slate-700 border-slate-200" : "bg-white/[0.06] text-slate-300 border-white/10"
                    }`}>
                      {t}
                    </span>
                  ))}
                </div>
                <a href="#contact-section" className={`inline-flex items-center gap-1.5 text-xs font-bold hover:underline ${isLight ? "text-[#0284c7]" : "text-sky-400"}`}>
                  <span>Discuss Similar Project</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
