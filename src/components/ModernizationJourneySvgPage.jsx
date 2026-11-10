import React, { useState, useEffect, useRef } from "react";
import { 
  ArrowRight, 
  ArrowLeft,
  ShieldCheck, 
  FileCheck, 
  Target, 
  Database, 
  Brain, 
  Zap, 
  Check, 
  Cpu, 
  Sparkles, 
  BarChart3, 
  CalendarCheck,
  MapPin,
  Mail,
  Send,
  Sun,
  Moon,
  MousePointerClick,
  TrendingUp,
  Activity,
  Layers,
  Lock
} from "lucide-react";

import HeroArchitectureWith3D from "./svg-sections/HeroArchitectureWith3D";
import WhyAarkComparisonSvg from "./svg-sections/WhyAarkComparisonSvg";
import PracticesArchitectureSvg from "./svg-sections/PracticesArchitectureSvg";
import CaseStudiesRoiSvg from "./svg-sections/CaseStudiesRoiSvg";
import CtaRoadmapSvg from "./svg-sections/CtaRoadmapSvg";
import { useScrollJourney } from "../hooks/useScrollJourney";

export default function ModernizationJourneySvgPage({ 
  onBackToMain, 
  theme: initialTheme = "dark",
  onToggleTheme: parentToggleTheme 
}) {
  const [currentTheme, setCurrentTheme] = useState(initialTheme);
  const isLight = currentTheme === "light";

  // Section 2 pillar manual selection
  const [userSelectedPillar, setUserSelectedPillar] = useState(null);

  // Anchor slot and section container refs for continuous scroll journey mapping
  const heroSlotRef = useRef(null);
  const sec2SectionRef = useRef(null);
  const sec2SlotRef = useRef(null);
  const sec3TrackRef = useRef(null);
  const sec3SlotRef = useRef(null);
  const sec4SectionRef = useRef(null);
  const sec4SlotRef = useRef(null);
  const ctaSectionRef = useRef(null);
  const ctaSlotRef = useRef(null);
  const stageRef = useRef(null);

  // Initialize scroll journey hook (Onecare RPM 3D architecture)
  const {
    activeSection,
    activePillar: scrollActivePillar,
    setActivePillar: setScrollActivePillar,
    activePractice: scrollActivePractice,
    setActivePractice: setScrollActivePractice,
    isCompact,
  } = useScrollJourney({
    heroSlotRef,
    sec2SectionRef,
    sec2SlotRef,
    sec3TrackRef,
    sec3SlotRef,
    sec4SectionRef,
    sec4SlotRef,
    ctaSectionRef,
    ctaSlotRef,
    stageRef,
  });

  const activePillar = userSelectedPillar !== null ? userSelectedPillar : scrollActivePillar;
  const setActivePillar = (idx) => {
    setUserSelectedPillar(idx);
    if (setScrollActivePillar) setScrollActivePillar(idx);
  };

  // Local active practice state allowing interactive mouse hover override
  const [userHoveredPractice, setUserHoveredPractice] = useState(null);
  const activePractice = userHoveredPractice !== null ? userHoveredPractice : scrollActivePractice;

  // Section 4 interactive case study outcome spotlight state
  const [userImpactIndex, setUserImpactIndex] = useState(0);
  const activeImpactIndex = userImpactIndex;

  // Section 5 project scope quick-select state
  const [selectedScope, setSelectedScope] = useState("Oracle Cloud ERP");

  // Contact Form State
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  // Keep internal theme in sync with parent prop
  useEffect(() => {
    setCurrentTheme(initialTheme);
  }, [initialTheme]);

  // Synchronize document background color on theme change
  useEffect(() => {
    const bg = isLight ? "#fcfdfe" : "#080808";
    document.body.style.backgroundColor = bg;
    document.documentElement.style.backgroundColor = bg;
    document.documentElement.classList.toggle("dark", !isLight);
  }, [isLight]);

  // Ensure overflow-x: clip is applied to document to prevent CSS sticky detachment
  useEffect(() => {
    const origHtmlOverflow = document.documentElement.style.overflowX;
    const origBodyOverflow = document.body.style.overflowX;
    document.documentElement.style.overflowX = "clip";
    document.body.style.overflowX = "clip";

    return () => {
      document.documentElement.style.overflowX = origHtmlOverflow;
      document.body.style.overflowX = origBodyOverflow;
    };
  }, []);

  // Smooth scroll support for direct anchor links and hash navigation
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && hash !== "svg") {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: "instant" });
        }
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  const handleLocalToggleTheme = () => {
    const nextTheme = isLight ? "dark" : "light";
    setCurrentTheme(nextTheme);
    if (parentToggleTheme) {
      parentToggleTheme(nextTheme);
    }
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const mailtoSubject = encodeURIComponent(`Architecture Inquiry: ${formData.company || "Enterprise"} - ${formData.name}`);
    const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nProject Scope:\n${formData.message}`);
    setTimeout(() => {
      window.location.href = `mailto:hello@aarkinn.com?subject=${mailtoSubject}&body=${mailtoBody}`;
    }, 1000);
  };

  // Section 3 practices dataset
  const PRACTICES_DATA = [
    {
      id: 0,
      title: "Oracle ERP Solutions",
      subtitle: "Fusion Cloud ERP & E-Business Suite",
      badge: "Certified",
      badgeColor: isLight ? "bg-sky-100 text-[#0284c7]" : "bg-sky-500/10 text-sky-400 border border-sky-500/20",
      accentBorder: "border-l-4 border-l-[#0284c7]",
      ringColor: "ring-2 ring-[#0284c7]/25",
      icon: Database,
      iconColor: isLight ? "bg-sky-50 text-[#0284c7] border border-sky-200" : "bg-sky-500/10 text-sky-400 border border-sky-500/30",
      description: "Full lifecycle implementation, seamless migration from on-prem EBS, and managed cloud engineering across Financials, Procurement, Supply Chain (SCM), Projects, and HCM.",
      bullets: [
        "Oracle Integration Cloud (OIC)",
        "FBDI Batch Automation & Web Services",
        "OTBI & BI Publisher Analytics"
      ],
      actionText: "Discuss Oracle Architecture",
      actionHref: "#svg-cta"
    },
    {
      id: 1,
      title: "Grounded Data & AI",
      subtitle: "Snowflake, Databricks & Bedrock",
      badge: "Production",
      badgeColor: isLight ? "bg-emerald-100 text-emerald-700" : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
      accentBorder: "border-l-4 border-l-emerald-500",
      ringColor: "ring-2 ring-emerald-500/25",
      icon: Brain,
      iconColor: isLight ? "bg-emerald-50 text-emerald-600 border border-emerald-200" : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30",
      description: "Architect centralized data warehouses, real-time ETL pipelines, and private RAG (retrieval-augmented generation) workflows that query enterprise records with zero hallucination.",
      bullets: [
        "dbt Cloud & Medallion Data Modeling",
        "Amazon Bedrock, Anthropic Claude & Gemini API",
        "Enterprise Vector Indexing & RAG Guardrails"
      ],
      actionText: "Scope Data & AI Pipeline",
      actionHref: "#svg-cta"
    },
    {
      id: 2,
      title: "Workflow Automation",
      subtitle: "Eliminate Manual Bottlenecks",
      badge: "Velocity",
      badgeColor: isLight ? "bg-sky-100 text-sky-800" : "bg-sky-500/10 text-sky-400 border border-sky-500/20",
      accentBorder: "border-l-4 border-l-sky-500",
      ringColor: "ring-2 ring-sky-500/25",
      icon: Zap,
      iconColor: isLight ? "bg-sky-50 text-sky-600 border border-sky-200" : "bg-sky-500/10 text-sky-400 border border-sky-500/30",
      description: "Convert cumbersome spreadsheet backlogs, document extraction tasks, and multi-department approval gates into autonomous, audit-logged pipelines.",
      bullets: [
        "Automated RFP & SOW Document Parsing",
        "Real-Time CPQ Quote Synthesizers",
        "Zero-Touch API Connectors"
      ],
      actionText: "Explore Automation Playbook",
      actionHref: "#svg-cta"
    }
  ];

  // Section 4 Case Studies dataset (synchronized with CaseStudiesRoiSvg instruments)
  const CASE_STUDIES_DATA = [
    {
      id: 0,
      title: "Equipment CPQ & Quoting Automation",
      client: "90-Person Industrial Equipment Distributor",
      badge: "SALES VELOCITY",
      accent: "emerald",
      badgeColor: isLight ? "bg-emerald-100 text-emerald-800" : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
      accentBorder: "border-l-4 border-l-emerald-500",
      ringColor: "ring-2 ring-emerald-500/25",
      icon: Zap,
      metrics: [
        { val: "20 Mins", label: "Quote Turnaround", sub: "Down from 3-day backlog" },
        { val: "0.00%", label: "Margin Drift", sub: "Automated catalog pricing" },
        { val: "-45%", label: "Sales Cycle", sub: "Immediate client closing" }
      ],
      delta: {
        legacy: "72-hour Excel spreadsheet backlog with manual pricing overrides and margin leakage",
        modernized: "20-minute automated CPQ quote synthesis with strict gross-margin guardrails"
      },
      outcome: "Eliminated order processing bottlenecks while protecting multi-tier distributor gross margins."
    },
    {
      id: 1,
      title: "AI-Powered RFP & Proposal Pipeline",
      client: "High-Growth Healthcare Services Provider",
      badge: "DOCUMENT AI",
      accent: "sky",
      badgeColor: isLight ? "bg-sky-100 text-sky-800" : "bg-sky-500/10 text-sky-400 border border-sky-500/20",
      accentBorder: "border-l-4 border-l-[#0284c7]",
      ringColor: "ring-2 ring-[#0284c7]/25",
      icon: Brain,
      metrics: [
        { val: "-60%", label: "Drafting Time", sub: "82% manual sifting eliminated" },
        { val: "2.4x", label: "RFP Volume", sub: "Quarterly proposal throughput" },
        { val: "4 Weeks", label: "To Production", sub: "Working V1 deployed" }
      ],
      delta: {
        legacy: "Sifting through 100+ legacy proposals manually to extract past performance & rate cards",
        modernized: "Vector search grounded in enterprise records with zero-hallucination citations"
      },
      outcome: "Empowered capture teams to submit twice as many compliant bids without expanding headcount."
    },
    {
      id: 2,
      title: "Multi-Entity Hospital ERP Consolidation",
      client: "14-Hospital Regional Health System",
      badge: "ORACLE & SNOWFLAKE",
      accent: "indigo",
      badgeColor: isLight ? "bg-indigo-100 text-indigo-800" : "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20",
      accentBorder: "border-l-4 border-l-indigo-500",
      ringColor: "ring-2 ring-indigo-500/25",
      icon: Database,
      metrics: [
        { val: "-11 hrs/wk", label: "Saved Per Lead", sub: "Zero manual reconcile" },
        { val: "1 Ledger", label: "Governed Core", sub: "14 hospital entities unified" },
        { val: "-22%", label: "Cloud Warehouse", sub: "Optimized dbt & Snowflake compute" }
      ],
      delta: {
        legacy: "Disparate accounting silos requiring weekly manual reconciliations in spreadsheets",
        modernized: "Real-time unified ledger with automated FBDI ingestion and dbt lineage"
      },
      outcome: "Achieved board-level visibility into real-time procurement spend and financial liquidity."
    }
  ];

  return (
    <div 
      className={`min-h-screen font-sans transition-colors duration-300 overflow-x-clip relative ${
        isLight 
          ? "bg-[#fcfdfe] text-slate-900 selection:bg-sky-100 selection:text-sky-950" 
          : "bg-[#080808] text-white selection:bg-[#0284c7] selection:text-white"
      }`}
    >
      {isLight && <div className="ambient-light-bg pointer-events-none -z-10" />}
      
      {/* ── 0. FIXED TRAVELING SVG VIEWPORT STAGE (DESKTOP) ── */}
      <div
        ref={stageRef}
        aria-hidden="true"
        className="fixed-svg-journey-stage pointer-events-none z-20 aspect-[600/380]"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          width: "600px",
          height: "380px",
          marginLeft: "-300px",
          marginTop: "-190px",
          display: isCompact ? "none" : "flex",
          alignItems: "center",
          justifyContent: "center",
          willChange: "transform, opacity",
          filter: isLight
            ? "drop-shadow(0 16px 36px rgba(2, 132, 199, 0.12))"
            : "drop-shadow(0 20px 48px rgba(2, 132, 199, 0.28))",
        }}
      >
        <div className="w-full h-full relative flex items-center justify-center">
          {/* Layer 0: Hero 3D Architecture */}
          <div
            className={`${
              activeSection === 0
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-98 pointer-events-none"
            } transition-all duration-300 ease-out absolute inset-0 flex items-center justify-center`}
          >
            <HeroArchitectureWith3D theme={currentTheme} />
          </div>

          {/* Layer 1: Why AARK Comparison */}
          <div
            className={`${
              activeSection === 1
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-98 pointer-events-none"
            } transition-all duration-300 ease-out absolute inset-0 flex items-center justify-center`}
          >
            <WhyAarkComparisonSvg activePillar={activePillar} theme={currentTheme} />
          </div>

          {/* Layer 2: Consulting Practices Architecture */}
          <div
            className={`${
              activeSection === 2
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-98 pointer-events-none"
            } transition-all duration-300 ease-out absolute inset-0 flex items-center justify-center`}
          >
            <PracticesArchitectureSvg activePractice={activePractice} theme={currentTheme} />
          </div>

          {/* Layer 3: Verified Enterprise Results & ROI */}
          <div
            className={`${
              activeSection === 3
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-98 pointer-events-none"
            } transition-all duration-300 ease-out absolute inset-0 flex items-center justify-center`}
          >
            <CaseStudiesRoiSvg theme={currentTheme} activeImpactIndex={activeImpactIndex} />
          </div>

          {/* Layer 4: Modernization Runway & CTA Roadmap */}
          <div
            className={`${
              activeSection === 4
                ? "opacity-100 scale-100 pointer-events-auto"
                : "opacity-0 scale-98 pointer-events-none"
            } transition-all duration-300 ease-out absolute inset-0 flex items-center justify-center`}
          >
            <CtaRoadmapSvg theme={currentTheme} />
          </div>
        </div>
      </div>

      {/* ── 2. SECTION 1: HERO (RELEVANT SVG: ENTERPRISE BUSINESS MODERNIZATION ARCHITECTURE) ── */}
      <section id="svg-hero" className="pt-32 pb-20 px-6 sm:px-12 lg:px-20 relative">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Core Positioning & Narrative */}
          <div className="lg:col-span-7">
            {/* Status Pill */}
            <div className={`inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-6 shadow-sm border ${
              isLight
                ? "bg-sky-50 border-sky-200 text-[#0284c7]"
                : "bg-white/[0.06] border-white/15 text-sky-400"
            }`}>
              <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
              <span>Enterprise Modernization • Fort Mill, SC</span>
              <span className="text-xs opacity-40">|</span>
              <span className="text-[10px] font-black uppercase tracking-widest text-[#0284c7]">
                {isLight ? "Studio Light Edition" : "Obsidian Dark Edition"}
              </span>
            </div>

            {/* Headline */}
            <h1 className={`font-heading font-black tracking-tight leading-[1.0] text-4xl sm:text-5xl md:text-6xl lg:text-[68px] mb-6 ${
              isLight ? "text-slate-900" : "text-white"
            }`}>
              <span className="block">Modernize How Your</span>
              <span className="block mt-1">
                <span className={`mr-2.5 font-serif italic tracking-normal ${
                  isLight ? "text-[#0284c7] font-semibold" : "text-sky-400 font-medium"
                }`}>
                  Business
                </span>{" "}
                Operates.
              </span>
            </h1>

            {/* Subtitle */}
            <p className={`text-base sm:text-lg font-normal leading-relaxed max-w-2xl mb-8 ${
              isLight ? "text-slate-700" : "text-slate-300"
            }`}>
              AARK Innovations partners with mid-market and enterprise leadership to eliminate manual bottlenecks, modernize <strong className={isLight ? "text-slate-900 font-bold" : "text-white"}>Oracle ERP</strong> ecosystems, and deploy grounded <strong className={isLight ? "text-slate-900 font-bold" : "text-white"}>Data & AI platforms</strong>. Fixed scope. Transparent delivery. Zero bloated overhead.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <a
                href="#svg-practices"
                className="inline-flex items-center gap-2 font-extrabold text-xs uppercase tracking-wider px-7 py-3.5 rounded-xl shadow-lg bg-[#0284c7] hover:bg-[#0369a1] text-white transition-all transform hover:-translate-y-0.5"
              >
                <span>Explore Core Practices</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href="#svg-why-aark"
                className={`inline-flex items-center gap-2 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-xl border shadow-sm transition-all ${
                  isLight
                    ? "bg-white hover:bg-slate-50 text-slate-800 border-slate-300"
                    : "bg-white/5 hover:bg-white/10 text-white border-white/15"
                }`}
              >
                <span>Why AARK Model</span>
                <ShieldCheck className="w-3.5 h-3.5 text-[#0284c7]" />
              </a>
            </div>

            {/* Key Metrics Ribbon */}
            <div className={`grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t ${
              isLight ? "border-slate-200" : "border-white/10"
            }`}>
              <div className={`p-3 rounded-xl border ${isLight ? "bg-white border-slate-200/90 shadow-sm" : "bg-[#111111] border-white/10"}`}>
                <div className="font-heading font-black text-2xl text-[#0284c7]">-60%</div>
                <div className={`text-xs font-semibold mt-0.5 ${isLight ? "text-slate-900" : "text-white"}`}>RFP Drafting Time</div>
                <div className={`text-[10px] ${isLight ? "text-slate-500" : "text-slate-400"}`}>AI document pipeline</div>
              </div>

              <div className={`p-3 rounded-xl border ${isLight ? "bg-white border-slate-200/90 shadow-sm" : "bg-[#111111] border-white/10"}`}>
                <div className="font-heading font-black text-2xl text-emerald-500">20 Mins</div>
                <div className={`text-xs font-semibold mt-0.5 ${isLight ? "text-slate-900" : "text-white"}`}>Quote Turnaround</div>
                <div className={`text-[10px] ${isLight ? "text-slate-500" : "text-slate-400"}`}>Down from 3-day backlog</div>
              </div>

              <div className={`p-3 rounded-xl border ${isLight ? "bg-white border-slate-200/90 shadow-sm" : "bg-[#111111] border-white/10"}`}>
                <div className="font-heading font-black text-2xl text-amber-500">100%</div>
                <div className={`text-xs font-semibold mt-0.5 ${isLight ? "text-slate-900" : "text-white"}`}>Senior Architect Led</div>
                <div className={`text-[10px] ${isLight ? "text-slate-500" : "text-slate-400"}`}>Zero junior bench staffing</div>
              </div>

              <div className={`p-3 rounded-xl border ${isLight ? "bg-white border-slate-200/90 shadow-sm" : "bg-[#111111] border-white/10"}`}>
                <div className="font-heading font-black text-2xl text-sky-500">$0</div>
                <div className={`text-xs font-semibold mt-0.5 ${isLight ? "text-slate-900" : "text-white"}`}>Surprise Billing Meters</div>
                <div className={`text-[10px] ${isLight ? "text-slate-500" : "text-slate-400"}`}>Fixed-scope guarantee</div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Architecture SVG Slot */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div 
              ref={heroSlotRef} 
              className={`w-full max-w-[600px] rounded-2xl flex items-center justify-center relative ${
                isCompact ? "aspect-[600/380] h-auto" : "h-[380px]"
              }`}
            >
              {isCompact && <HeroArchitectureWith3D theme={currentTheme} />}
            </div>
          </div>

        </div>
      </section>

      {/* ── 3. SECTION 2: WHY AARK (RELEVANT SVG: SENIOR ARCHITECT MODEL VS BIG-4 BLOAT) ── */}
      <div 
        ref={sec2SectionRef}
        id="svg-why-aark" 
        className={`why-aark-sticky-track relative w-full lg:h-[200vh] border-t ${
          isLight ? "bg-slate-50/60 border-slate-200" : "bg-[#0a0a0a] border-white/10"
        }`}
      >
        <div className="lg:sticky lg:top-0 lg:h-screen w-full flex flex-col justify-center overflow-visible py-12 lg:py-6 px-6 sm:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto w-full">
            
            <div className="max-w-3xl mb-8">
              <span className={`text-xs font-bold uppercase tracking-widest ${isLight ? "text-[#0284c7]" : "text-sky-400"}`}>
                Why Enterprise Teams Choose AARK
              </span>
              <h2 className={`font-heading font-black text-2xl sm:text-4xl lg:text-5xl mt-1.5 mb-3 ${isLight ? "text-slate-900" : "text-white"}`}>
                Enterprise Modernization <span className={`mr-1 ${isLight ? "ghost-serif text-[#0284c7]" : "ghost text-sky-400"}`}>Without</span> the Big-4 Bloat.
              </h2>
              <p className={`text-xs sm:text-sm leading-relaxed ${isLight ? "text-slate-700" : "text-slate-300"}`}>
                Legacy consultancies bill open-ended hours with junior teams learning on your dime. AARK Innovations provides senior, accountable practitioners who build real working software and leave your team self-sufficient.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              {/* Left 6 Columns: Interactive 3 Pillars */}
              <div className="lg:col-span-6 space-y-3.5">
                
                <div 
                  onMouseEnter={() => setActivePillar(0)}
                  onClick={() => setActivePillar(0)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                    activePillar === 0
                      ? (isLight ? "bg-white border-[#0284c7] shadow-lg shadow-[#0284c7]/15 ring-2 ring-[#0284c7]/20" : "bg-[#141414] border-[#0284c7] shadow-lg shadow-[#0284c7]/20")
                      : (isLight ? "bg-white/70 border-slate-200 hover:border-slate-300" : "bg-[#111111] border-white/10 hover:border-white/20")
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      activePillar === 0 ? "bg-[#0284c7] text-white" : "bg-sky-500/10 text-[#0284c7]"
                    }`}>
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className={`font-heading font-bold text-base ${isLight ? "text-slate-900" : "text-white"}`}>
                          1. Direct Senior Leadership
                        </h3>
                        {activePillar === 0 && (
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#0284c7]/10 text-[#0284c7]">
                            ACTIVE
                          </span>
                        )}
                      </div>
                      <p className={`text-xs mt-1 leading-relaxed ${isLight ? "text-slate-600" : "text-slate-300"}`}>
                        The experts who scope your engagement are the exact senior technical and functional architects who execute the implementation. Zero bait-and-switch.
                      </p>
                    </div>
                  </div>
                </div>

                <div 
                  onMouseEnter={() => setActivePillar(1)}
                  onClick={() => setActivePillar(1)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                    activePillar === 1
                      ? (isLight ? "bg-white border-emerald-500 shadow-lg shadow-emerald-500/15 ring-2 ring-emerald-500/20" : "bg-[#141414] border-emerald-500 shadow-lg shadow-emerald-500/20")
                      : (isLight ? "bg-white/70 border-slate-200 hover:border-slate-300" : "bg-[#111111] border-white/10 hover:border-white/20")
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      activePillar === 1 ? "bg-emerald-500 text-black" : "bg-emerald-500/10 text-emerald-500"
                    }`}>
                      <FileCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className={`font-heading font-bold text-base ${isLight ? "text-slate-900" : "text-white"}`}>
                          2. Fixed Scope & Predictability
                        </h3>
                        {activePillar === 1 && (
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500">
                            ACTIVE
                          </span>
                        )}
                      </div>
                      <p className={`text-xs mt-1 leading-relaxed ${isLight ? "text-slate-600" : "text-slate-300"}`}>
                        Clear deliverables, fixed pricing, and milestone-driven software handovers. You know the exact cost and timeline before any code begins.
                      </p>
                    </div>
                  </div>
                </div>

                <div 
                  onMouseEnter={() => setActivePillar(2)}
                  onClick={() => setActivePillar(2)}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer ${
                    activePillar === 2
                      ? (isLight ? "bg-white border-amber-500 shadow-lg shadow-amber-500/15 ring-2 ring-amber-500/20" : "bg-[#141414] border-amber-500 shadow-lg shadow-amber-500/20")
                      : (isLight ? "bg-white/70 border-slate-200 hover:border-slate-300" : "bg-[#111111] border-white/10 hover:border-white/20")
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      activePillar === 2 ? "bg-amber-500 text-black" : "bg-amber-500/10 text-amber-500"
                    }`}>
                      <Target className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className={`font-heading font-bold text-base ${isLight ? "text-slate-900" : "text-white"}`}>
                          3. Production-Ready Software Assets
                        </h3>
                        {activePillar === 2 && (
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-500/10 text-amber-500">
                            ACTIVE
                          </span>
                        )}
                      </div>
                      <p className={`text-xs mt-1 leading-relaxed ${isLight ? "text-slate-600" : "text-slate-300"}`}>
                        We leave your internal engineering team with fully documented, automated, and cloud-native codebases that you own 100%. No proprietary lock-in.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right 6 Columns: Section 2 SVG Comparison Slot */}
              <div className="lg:col-span-6 flex items-center justify-center">
                <div 
                  ref={sec2SlotRef} 
                  className={`w-full max-w-[600px] rounded-2xl flex items-center justify-center relative ${
                    isCompact ? "aspect-[600/380] h-auto" : "h-[380px]"
                  }`}
                >
                  {isCompact && <WhyAarkComparisonSvg activePillar={activePillar} theme={currentTheme} />}
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* ── 4. SECTION 3: CONSULTING PRACTICES (250vh STICKY DWELL TRACK — SOLVES R3) ── */}
      <div 
        ref={sec3TrackRef} 
        id="svg-practices" 
        className="practices-sticky-track relative w-full lg:h-[250vh] border-t border-slate-200/80 dark:border-white/10"
      >
        {/* Pinned 100vh container on desktop, static flow on mobile */}
        <div className="lg:sticky lg:top-0 lg:h-screen w-full flex flex-col justify-center overflow-visible py-12 lg:py-6 px-6 sm:px-12 lg:px-20">
          <div className="max-w-7xl mx-auto w-full">
            
            {/* Header */}
            <div className="max-w-3xl mb-6">
              <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-2 ${
                isLight ? "bg-sky-50 border border-sky-200 text-[#0284c7]" : "bg-white/[0.06] border border-white/15 text-sky-400"
              }`}>
                <span>Consulting Practices</span>
              </div>
              <h2 className={`font-heading font-black text-2xl sm:text-3xl lg:text-4xl tracking-tight ${isLight ? "text-slate-900" : "text-white"}`}>
                Technical Mastery Across Three Enterprise Pillars
              </h2>
              <p className={`text-xs sm:text-sm mt-1 leading-relaxed ${isLight ? "text-slate-700" : "text-slate-300"}`}>
                While our vector modernization engine links your workflows, senior architects deploy resilient, scalable solutions directly in your stack.
              </p>
            </div>

            {/* Responsive 2-Column Layout (Left: SVG Slot; Right: 3 Practice Cards) */}
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column (6 cols): Anchor Slot for 3-Tier Enterprise Architecture SVG */}
              <div className="lg:col-span-6 flex items-center justify-center">
                <div 
                  ref={sec3SlotRef} 
                  className={`w-full max-w-[600px] rounded-2xl flex items-center justify-center relative ${
                    isCompact ? "aspect-[600/380] h-auto" : "h-[380px]"
                  }`}
                >
                  {isCompact && (
                    <PracticesArchitectureSvg activePractice={activePractice} theme={currentTheme} />
                  )}
                </div>
              </div>

              {/* Right Column (6 cols): 3 Practice Cards synchronized to scroll dwellProgress with onMouseEnter override */}
              <div className="lg:col-span-6 space-y-3.5">
                {PRACTICES_DATA.map((practice) => {
                  const isActive = activePractice === practice.id;
                  const IconComponent = practice.icon;

                  return (
                    <div 
                      key={practice.id}
                      onMouseEnter={() => setUserHoveredPractice(practice.id)}
                      onMouseLeave={() => setUserHoveredPractice(null)}
                      onClick={() => setUserHoveredPractice(practice.id)}
                      className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                        isActive 
                          ? `${practice.accentBorder} ${
                              isLight 
                                ? "bg-white/95 backdrop-blur-xl border-slate-300/90 shadow-[0_12px_32px_rgba(2,132,199,0.12)] scale-[1.01]" 
                                : "bg-[#0f1118]/90 backdrop-blur-xl border-white/20 shadow-[0_12px_36px_rgba(56,189,248,0.18)] scale-[1.01]"
                            }`
                          : `${
                              isLight 
                                ? "bg-white/70 backdrop-blur-md border-slate-200/80 opacity-70 hover:opacity-100 hover:border-slate-300" 
                                : "bg-[#0f1118]/50 backdrop-blur-md border-white/10 opacity-60 hover:opacity-100 hover:border-white/20"
                            }`
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${practice.iconColor}`}>
                            <IconComponent className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className={`font-heading font-extrabold text-base sm:text-lg ${isLight ? "text-slate-900" : "text-white"}`}>
                              {practice.title}
                            </h3>
                            <p className={`text-[11px] font-semibold ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                              {practice.subtitle}
                            </p>
                          </div>
                        </div>

                        {/* Pulsing Pill Badge */}
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider shrink-0 ${practice.badgeColor}`}>
                          <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping" />
                          <span>{practice.badge}</span>
                        </span>
                      </div>

                      {/* Detail section visible with smooth transition */}
                      {isActive && (
                        <div className="mt-3 pt-3 border-t border-slate-200/70 dark:border-white/10">
                          <p className={`text-xs leading-relaxed mb-3 ${isLight ? "text-slate-700 font-medium" : "text-slate-300"}`}>
                            {practice.description}
                          </p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] mb-3.5">
                            {practice.bullets.map((bullet, bIdx) => (
                              <div key={bIdx} className="flex items-center gap-2">
                                <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 ${
                                  isLight 
                                    ? "bg-[#0284c7]/10 text-[#0284c7] border border-[#0284c7]/25" 
                                    : "bg-sky-500/15 text-sky-400 border border-sky-500/30"
                                }`}>
                                  <Check className="w-3 h-3 stroke-[3]" />
                                </div>
                                <span className={`truncate font-medium ${isLight ? "text-slate-800" : "text-slate-200"}`}>{bullet}</span>
                              </div>
                            ))}
                          </div>

                          <a 
                            href={practice.actionHref}
                            className={`group inline-flex items-center gap-2 text-xs font-bold transition-all ${
                              isLight 
                                ? "text-[#0284c7] hover:text-[#0369a1]" 
                                : "text-sky-400 hover:text-sky-300"
                            }`}
                          >
                            <span>{practice.actionText}</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                          </a>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* ── 5. SECTION 4: CASE STUDIES (VERIFIED ENTERPRISE RESULTS & IMPACT) ── */}
      <section 
        ref={sec4SectionRef}
        id="svg-case-studies" 
        className={`py-24 px-6 sm:px-12 lg:px-20 border-t ${
          isLight ? "bg-slate-50/60 border-slate-200" : "bg-[#0a0a0a] border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          
          <div className="max-w-3xl mb-12">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase mb-2 ${
              isLight ? "bg-emerald-50 border border-emerald-200 text-emerald-700" : "bg-emerald-500/10 border border-emerald-500/20 text-emerald-400"
            }`}>
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping" />
              <span>Verified Enterprise Results</span>
            </div>
            <h2 className={`font-heading font-black text-3xl sm:text-5xl mt-2 mb-4 ${isLight ? "text-slate-900" : "text-white"}`}>
              Audited Impacts Across Mission-Critical Workloads
            </h2>
            <p className={`text-base leading-relaxed ${isLight ? "text-slate-700" : "text-slate-300"}`}>
              Our solutions eliminate operational friction with measurable business acceleration. Select an audited case study to inspect live telemetry in the companion cockpit.
            </p>
          </div>

          {/* 2-Column Section Layout: Left = 3 Interactive Case Study Outcome Pods, Right = Traveling Telemetry Cockpit Slot */}
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Left 6 Columns: 3 Interactive Case Study Outcome Pods */}
            <div className="lg:col-span-6 space-y-4">
              {CASE_STUDIES_DATA.map((cs) => {
                const isSelected = activeImpactIndex === cs.id;
                const IconComp = cs.icon;

                return (
                  <div
                    key={cs.id}
                    onMouseEnter={() => setUserImpactIndex(cs.id)}
                    onClick={() => setUserImpactIndex(cs.id)}
                    className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? `${cs.accentBorder} ${
                            isLight
                              ? "bg-white/95 backdrop-blur-xl border-slate-300/90 shadow-[0_12px_32px_rgba(16,185,129,0.12)] scale-[1.01]"
                              : "bg-[#0f1118]/90 backdrop-blur-xl border-white/20 shadow-[0_12px_36px_rgba(16,185,129,0.18)] scale-[1.01]"
                          }`
                        : `${
                            isLight
                              ? "bg-white/70 backdrop-blur-md border-slate-200/80 opacity-70 hover:opacity-100 hover:border-slate-300"
                              : "bg-[#0f1118]/50 backdrop-blur-md border-white/10 opacity-60 hover:opacity-100 hover:border-white/20"
                          }`
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2.5">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-sm ${
                          cs.id === 0
                            ? (isLight ? "bg-emerald-50 text-emerald-600 border border-emerald-200" : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30")
                            : cs.id === 1
                            ? (isLight ? "bg-sky-50 text-[#0284c7] border border-sky-200" : "bg-sky-500/10 text-sky-400 border border-sky-500/30")
                            : (isLight ? "bg-indigo-50 text-indigo-600 border border-indigo-200" : "bg-indigo-500/10 text-indigo-400 border border-indigo-500/30")
                        }`}>
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className={`font-heading font-extrabold text-base ${isLight ? "text-slate-900" : "text-white"}`}>
                            {cs.title}
                          </h3>
                          <p className={`text-[11px] font-semibold ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                            {cs.client}
                          </p>
                        </div>
                      </div>

                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider shrink-0 ${cs.badgeColor}`}>
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping" />}
                        <span>{cs.badge}</span>
                      </span>
                    </div>

                    {/* 3 Metric Pills */}
                    <div className="grid grid-cols-3 gap-2 my-3">
                      {cs.metrics.map((m, mIdx) => (
                        <div
                          key={mIdx}
                          className={`p-2 rounded-xl border text-center ${
                            isLight
                              ? "bg-slate-50/80 border-slate-200"
                              : "bg-white/[0.03] border-white/10"
                          }`}
                        >
                          <div className={`text-sm sm:text-base font-black font-mono ${
                            cs.id === 0 ? "text-emerald-500" : cs.id === 1 ? "text-[#0284c7] dark:text-sky-400" : "text-indigo-500 dark:text-indigo-400"
                          }`}>
                            {m.val}
                          </div>
                          <div className={`text-[10px] font-bold ${isLight ? "text-slate-800" : "text-slate-200"}`}>
                            {m.label}
                          </div>
                          <div className={`text-[8.5px] truncate ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                            {m.sub}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Before / After Telemetry Delta */}
                    {isSelected && (
                      <div className="mt-2.5 pt-2.5 border-t border-slate-200/70 dark:border-white/10 space-y-1.5 text-xs">
                        <div className="flex items-start gap-2">
                          <span className="font-mono text-[10px] font-bold text-rose-500 uppercase px-1.5 py-0.5 rounded bg-rose-500/10 shrink-0">
                            Legacy
                          </span>
                          <span className={`text-[11px] ${isLight ? "text-slate-600" : "text-slate-300"}`}>
                            {cs.delta.legacy}
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="font-mono text-[10px] font-bold text-emerald-500 uppercase px-1.5 py-0.5 rounded bg-emerald-500/10 shrink-0">
                            AARK
                          </span>
                          <span className={`text-[11px] font-medium ${isLight ? "text-slate-800" : "text-slate-100"}`}>
                            {cs.delta.modernized}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right 6 Columns: Anchor Slot for Audited Telemetry Cockpit SVG */}
            <div className="lg:col-span-6 flex items-center justify-center">
              <div 
                ref={sec4SlotRef} 
                className={`w-full max-w-[600px] rounded-2xl flex items-center justify-center relative ${
                  isCompact ? "aspect-[600/380] h-auto" : "h-[380px]"
                }`}
              >
                {isCompact && (
                  <CaseStudiesRoiSvg
                    activeImpactIndex={activeImpactIndex}
                    theme={currentTheme}
                  />
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 6. SECTION 5: CTA ROADMAP & CONTACT (RELEVANT SVG: 3-STAGE BLUEPRINT) ── */}
      <section 
        ref={ctaSectionRef}
        id="svg-cta" 
        className="py-24 px-6 sm:px-12 lg:px-20 border-t border-slate-200/80 dark:border-white/10 relative"
      >
        <div className="max-w-5xl mx-auto">
          
          <div 
            className={`p-8 sm:p-12 rounded-3xl border text-center flex flex-col items-center relative shadow-2xl transition-all ${
              isLight
                ? "bg-white border-slate-200/90 shadow-slate-200/60"
                : "bg-[#0d0e14]/90 backdrop-blur-2xl border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
            }`}
            style={{
              backgroundImage: isLight
                ? "radial-gradient(circle at 50% 0%, rgba(2, 132, 199, 0.10) 0%, transparent 65%)"
                : "radial-gradient(circle at 50% 0%, rgba(2, 132, 199, 0.22) 0%, transparent 65%)"
            }}
          >
            
            {/* Section 5 SVG: 3-Stage Blueprint Runway Slot */}
            <div className="w-full mb-8 flex items-center justify-center">
              <div 
                ref={ctaSlotRef} 
                className={`w-full max-w-[580px] rounded-2xl flex items-center justify-center relative ${
                  isCompact ? "aspect-[580/340] h-auto" : "h-[340px]"
                }`}
              >
                {isCompact && <CtaRoadmapSvg theme={currentTheme} />}
              </div>
            </div>

            <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 ${
              isLight ? "bg-sky-50 border border-sky-200 text-[#0284c7]" : "bg-sky-500/10 border border-sky-500/20 text-sky-400"
            }`}>
              <span className="w-1.5 h-1.5 rounded-full bg-current animate-ping" />
              <span>Deploy Your Modernization Engine</span>
            </div>

            <h2 className={`font-heading font-black text-3xl sm:text-5xl mt-1 mb-4 max-w-2xl ${
              isLight ? "text-slate-900" : "text-white"
            }`}>
              Ready to <span className={`mr-1 ${isLight ? "ghost-serif text-[#0284c7]" : "ghost text-sky-400"}`}>Modernize</span> Your Operations?
            </h2>

            <p className={`text-base leading-relaxed max-w-2xl mb-8 ${
              isLight ? "text-slate-700" : "text-slate-300"
            }`}>
              Whether you need to upgrade an Oracle ERP environment, unify fragmented data silos, or build a custom AI drafting pipeline, we'll give you clear answers, accurate scope, and realistic timelines.
            </p>

            {/* Modernization Area Quick-Select Scope Chips */}
            <div className="max-w-xl w-full mb-6 text-left">
              <label className={`block text-xs font-bold uppercase tracking-wider mb-2.5 ${isLight ? "text-slate-700" : "text-slate-300"}`}>
                Select Modernization Focus Area:
              </label>
              <div className="flex flex-wrap gap-2">
                {[
                  "Oracle Cloud ERP",
                  "Data Lakehouse & dbt",
                  "GenAI Proposal Assistant",
                  "CPQ & Sales Quoting"
                ].map((chip) => {
                  const isSelected = selectedScope === chip;
                  return (
                    <button
                      key={chip}
                      type="button"
                      onClick={() => {
                        setSelectedScope(chip);
                        setFormData((prev) => ({
                          ...prev,
                          message: `Selected Focus: ${chip}\n${prev.message || ""}`
                        }));
                      }}
                      className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                        isSelected
                          ? "bg-[#0284c7] text-white border-[#0284c7] shadow-md shadow-sky-600/20"
                          : (isLight
                              ? "bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200"
                              : "bg-white/5 hover:bg-white/10 text-slate-300 border-white/10")
                      }`}
                    >
                      {chip}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2-Column Enhanced Conversion Inputs Form */}
            <form onSubmit={handleContactSubmit} className="max-w-xl w-full space-y-4 mb-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                <div>
                  <label className={`block text-xs font-semibold mb-1 ${isLight ? "text-slate-700" : "text-slate-300"}`}>
                    Your Name & Title
                  </label>
                  <input
                    type="text"
                    placeholder="Jane Doe, VP Engineering"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#0284c7]/20 focus:border-[#0284c7] transition-all ${
                      isLight ? "bg-slate-50 border-slate-300 text-slate-900" : "bg-black/50 border-white/15 text-white"
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-semibold mb-1 ${isLight ? "text-slate-700" : "text-slate-300"}`}>
                    Work Email
                  </label>
                  <input
                    type="email"
                    placeholder="jane.doe@enterprise.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#0284c7]/20 focus:border-[#0284c7] transition-all ${
                      isLight ? "bg-slate-50 border-slate-300 text-slate-900" : "bg-black/50 border-white/15 text-white"
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left">
                <div>
                  <label className={`block text-xs font-semibold mb-1 ${isLight ? "text-slate-700" : "text-slate-300"}`}>
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="Acme Health Systems"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#0284c7]/20 focus:border-[#0284c7] transition-all ${
                      isLight ? "bg-slate-50 border-slate-300 text-slate-900" : "bg-black/50 border-white/15 text-white"
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-semibold mb-1 ${isLight ? "text-slate-700" : "text-slate-300"}`}>
                    Architecture Scope Notes
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Oracle ERP migration, dbt pipeline"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-[#0284c7]/20 focus:border-[#0284c7] transition-all ${
                      isLight ? "bg-slate-50 border-slate-300 text-slate-900" : "bg-black/50 border-white/15 text-white"
                    }`}
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-[#0284c7] via-[#0369a1] to-[#0284c7] hover:from-[#0ea5e9] hover:to-[#0284c7] text-white font-extrabold text-sm uppercase tracking-wider transition-all shadow-xl shadow-sky-600/30 cursor-pointer transform hover:-translate-y-0.5"
              >
                {submitted ? "Redirecting to hello@aarkinn.com..." : "Schedule 30-Minute Architecture Discovery →"}
              </button>
            </form>

            {/* Senior Architect Trust Guarantees */}
            <div className="pt-6 border-t border-slate-200/80 dark:border-white/10 w-full max-w-2xl space-y-3">
              {/* Trust badges row */}
              <div className={`grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-medium ${
                isLight ? "text-slate-700" : "text-slate-300"
              }`}>
                <div className={`p-2.5 rounded-xl border flex items-center justify-center gap-2 ${
                  isLight ? "bg-slate-50 border-slate-200" : "bg-white/[0.04] border-white/10"
                }`}>
                  <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Zero Junior Benches</span>
                </div>
                <div className={`p-2.5 rounded-xl border flex items-center justify-center gap-2 ${
                  isLight ? "bg-slate-50 border-slate-200" : "bg-white/[0.04] border-white/10"
                }`}>
                  <FileCheck className="w-4 h-4 text-[#0284c7] shrink-0" />
                  <span>SOC2 / HIPAA / ISO27001</span>
                </div>
                <div className={`p-2.5 rounded-xl border flex items-center justify-center gap-2 ${
                  isLight ? "bg-slate-50 border-slate-200" : "bg-white/[0.04] border-white/10"
                }`}>
                  <CalendarCheck className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Production Code in 90 Days</span>
                </div>
              </div>

              {/* Geographic and contact details */}
              <div className={`flex flex-wrap items-center justify-center gap-6 text-xs pt-2 ${
                isLight ? "text-slate-500" : "text-slate-400"
              }`}>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#0284c7]" />
                  <span>Fort Mill, SC (Charlotte Metro) • Onsite & Remote</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#0284c7]" />
                  <span>hello@aarkinn.com</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Mutual NDA Honored Prior to Deep-Dive</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={`py-10 px-6 border-t ${
        isLight ? "border-slate-200 text-slate-600 bg-white" : "border-white/10 text-slate-400 bg-black"
      }`}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span className={`font-bold ${isLight ? "text-slate-900" : "text-white"}`}>AARK Innovations</span>
            <span>• Enterprise Modernization • All Rights Reserved</span>
          </div>
          <div>
            <span>Continuous Vector SVG Scrollytelling Architecture</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
