import React from "react";

/**
 * PracticesArchitectureSvg - Section 3 Vector Illustration
 * "Enterprise Modernization Practices Architecture Fabric"
 * 
 * Clean, spacious, high-fidelity vector architecture for AARK's 3 core consulting practices:
 * - Practice 0: Oracle ERP Solutions (Oracle Fusion Core -> OIC Integration Mesh -> Target Ecosystem)
 * - Practice 1: Grounded Data & AI (Multi-Modal Ingest -> Lakehouse & Vector Store -> Private RAG Agents)
 * - Practice 2: Workflow Automation (Spreadsheet/RFP Ingest -> CPQ Pricing Turbine -> Autonomous ERP Dispatch)
 * 
 * Completely eliminates tiny 6px font clutter, overlapping lines, and cramped micro-boxes.
 * Spacious 3-station layout with readable 10-12px typography, smooth animated conduits,
 * and seamless dual-theme (Dark & Light) contrast.
 */
export default function PracticesArchitectureSvg({
  activePractice = 0, // 0: Oracle ERP, 1: Grounded Data & AI, 2: Workflow Automation
  theme = "dark",
  className = ""
}) {
  const isLight = theme === "light";

  const colors = {
    // Canvas background
    bgFrom: isLight ? "#ffffff" : "#0d111a",
    bgTo: isLight ? "#f8fafc" : "#06090e",
    cardBorder: isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.12)",
    gridStroke: isLight ? "rgba(2, 132, 199, 0.05)" : "rgba(56, 189, 248, 0.05)",

    // Typography
    textPrimary: isLight ? "#0f172a" : "#f8fafc",
    textSecondary: isLight ? "#475569" : "#94a3b8",
    textMuted: isLight ? "#64748b" : "#64748b",

    // Station geometry
    stationBg: isLight ? "#ffffff" : "rgba(18, 24, 38, 0.85)",
    stationBorder: isLight ? "#cbd5e1" : "rgba(255, 255, 255, 0.12)",
    stationActiveBg: isLight ? "#f8fafc" : "rgba(24, 32, 50, 0.95)",
    nodeBg: isLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.05)",

    // Brand Accents
    sky: isLight ? "#0284c7" : "#38bdf8",
    skyGlow: isLight ? "rgba(2, 132, 199, 0.15)" : "rgba(56, 189, 248, 0.25)",
    emerald: isLight ? "#059669" : "#10b981",
    emeraldGlow: isLight ? "rgba(5, 150, 105, 0.15)" : "rgba(16, 185, 129, 0.25)",
    indigo: isLight ? "#4f46e5" : "#818cf8",
    indigoGlow: isLight ? "rgba(79, 70, 229, 0.15)" : "rgba(129, 140, 248, 0.25)",
    amber: isLight ? "#d97706" : "#f59e0b",
    conduitTrack: isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.10)"
  };

  // Practice-specific configuration
  const practices = [
    {
      id: 0,
      title: "ORACLE CLOUD ERP",
      subtitle: "FUSION & EBS R12 MODERNIZATION",
      accent: colors.sky,
      accentGlow: colors.skyGlow,
      telemetry: "SYNC: 100% · 12ms",
      station1: {
        title: "Oracle Fusion Core",
        sub: "Financials · SCM · Projects",
        pill: "100% ACID GOVERNED",
        tag: "CORE SYSTEM",
        detail: "GL, AP, AR & Inventory"
      },
      conduit1: "REST / OIC",
      station2: {
        title: "OIC Smart Bus",
        sub: "Zero-Latency Event Mesh",
        pill: "2.4k tx/s · TLS 1.3",
        tag: "ORCHESTRATOR",
        detail: "FBDI Batch & Webhooks"
      },
      conduit2: "ISO 20022",
      station3: {
        title: "Target Ecosystem",
        sub: "Banking · Lakehouse · CRM",
        pill: "BI-DIRECTIONAL SYNC",
        tag: "OUTCOMES",
        detail: "Real-Time Enterprise Ledger"
      },
      footer: "Continuous Synchronization • Automated FBDI Batching • Zero Data Drift Guarantee"
    },
    {
      id: 1,
      title: "GROUNDED DATA & AI",
      subtitle: "SNOWFLAKE, DATABRICKS & BEDROCK",
      accent: colors.emerald,
      accentGlow: colors.emeraldGlow,
      telemetry: "RAG ACCURACY: 99.4%",
      station1: {
        title: "Multi-Modal Ingest",
        sub: "Docs, Contracts & CDC Logs",
        pill: "185 MB/s CONTINUOUS",
        tag: "INGESTION",
        detail: "Unstructured & Relational"
      },
      conduit1: "1536-dim HNSW",
      station2: {
        title: "Lakehouse & Vector DB",
        sub: "dbt Medallion & Unity Catalog",
        pill: "SOC 2 TYPE II LINEAGE",
        tag: "INTELLIGENCE",
        detail: "Governed Semantic Fabric"
      },
      conduit2: "Claude RAG",
      station3: {
        title: "AI Agents & Insights",
        sub: "Document Synthesis & BI",
        pill: "ZERO PUBLIC TRAINING",
        tag: "DELIVERABLES",
        detail: "Autonomous Enterprise Copilots"
      },
      footer: "Private Tenant Isolation • Zero Public Model Training • Audited Data Lineage"
    },
    {
      id: 2,
      title: "WORKFLOW AUTOMATION",
      subtitle: "ELIMINATE MANUAL BOTTLENECKS",
      accent: colors.indigo,
      accentGlow: colors.indigoGlow,
      telemetry: "CPQ VELOCITY: 20 MINS",
      station1: {
        title: "Document Ingest",
        sub: "RFP, SOW & Price Catalogs",
        pill: "-60% DRAFT VELOCITY",
        tag: "EXTRACTION",
        detail: "Spreadsheet Parser Engine"
      },
      conduit1: "Pricing Rules",
      station2: {
        title: "Automated CPQ Turbine",
        sub: "Catalog Pricing & Margins",
        pill: "0% MARGIN LEAKAGE",
        tag: "CALCULATION",
        detail: "Instant Quoting Engine"
      },
      conduit2: "Zero-Touch API",
      station3: {
        title: "Autonomous Dispatch",
        sub: "Auto-PO & Audit Ledger",
        pill: "AUDIT-LOGGED REPLAY",
        tag: "EXECUTION",
        detail: "Direct ERP & CRM Posting"
      },
      footer: "Audit-Logged Event Replay • 20-Minute Quote Cycles • Human-in-the-Loop Safeguards"
    }
  ];

  const current = practices[activePractice] || practices[0];

  return (
    <div className={`w-full h-full flex items-center justify-center overflow-visible ${className}`}>
      <svg
        viewBox="0 0 600 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[380px] overflow-visible select-none"
      >
        <defs>
          <style>{`
            @keyframes pracFlowAnim {
              to { stroke-dashoffset: -32; }
            }
            @keyframes pracPulseGlow {
              0%, 100% { opacity: 0.85; }
              50% { opacity: 1; }
            }
            .prac-stream-line {
              animation: pracFlowAnim 1.8s linear infinite;
            }
            .prac-pulse-core {
              animation: pracPulseGlow 2.5s ease-in-out infinite;
            }
            @media (prefers-reduced-motion: reduce) {
              .prac-stream-line, .prac-pulse-core {
                animation: none !important;
              }
            }
          `}</style>
        </defs>

        {/* ── 1. MAIN CARD CANVAS ── */}
        <rect
          x="10"
          y="10"
          width="580"
          height="360"
          rx="20"
          fill={colors.bgFrom}
          stroke={colors.cardBorder}
          strokeWidth="1.5"
        />

        {/* Subtle Background Grid Pattern */}
        <g stroke={colors.gridStroke} strokeWidth="1">
          <line x1="10" y1="52" x2="590" y2="52" />
          <line x1="10" y1="332" x2="590" y2="332" />
          <line x1="200" y1="52" x2="200" y2="332" strokeDasharray="3 3" />
          <line x1="400" y1="52" x2="400" y2="332" strokeDasharray="3 3" />
        </g>

        {/* ── 2. TOP HUD HEADER ── */}
        <g id="practices-top-hud">
          {/* Left Title Badge */}
          <rect
            x="24"
            y="20"
            width="250"
            height="24"
            rx="12"
            fill={colors.nodeBg}
            stroke={current.accent}
            strokeWidth="1"
          />
          <circle cx="36" cy="32" r="3.5" fill={current.accent} />
          <text
            x="48"
            y="36"
            fill={current.accent}
            fontSize="9"
            fontWeight="800"
            fontFamily="ui-monospace, monospace"
            letterSpacing="0.06em"
          >
            PRACTICE 0{activePractice + 1} // {current.title}
          </text>

          {/* Right Live Telemetry Pill */}
          <rect
            x="420"
            y="20"
            width="156"
            height="24"
            rx="12"
            fill={colors.nodeBg}
            stroke={colors.stationBorder}
            strokeWidth="1"
          />
          <circle cx="432" cy="32" r="3" fill={current.accent} className="prac-pulse-core" />
          <text
            x="442"
            y="36"
            fill={colors.textPrimary}
            fontSize="8.5"
            fontWeight="700"
            fontFamily="ui-monospace, monospace"
          >
            {current.telemetry}
          </text>
        </g>

        {/* ── 3. THREE-PRACTICE SEGMENTED TAB BAR (y=58 to 82) ── */}
        <g id="practices-selector-tabs">
          {[
            { id: 0, label: "1. Oracle ERP", x: 24, w: 170, color: colors.sky },
            { id: 1, label: "2. Data & AI", x: 206, w: 188, color: colors.emerald },
            { id: 2, label: "3. Automation", x: 406, w: 170, color: colors.indigo },
          ].map((tab) => {
            const isTabActive = tab.id === activePractice;
            return (
              <g key={tab.id} transform={`translate(${tab.x}, 58)`}>
                <rect
                  x="0"
                  y="0"
                  width={tab.w}
                  height="26"
                  rx="6"
                  fill={isTabActive ? tab.color : colors.nodeBg}
                  stroke={isTabActive ? tab.color : colors.stationBorder}
                  strokeWidth="1"
                />
                <circle
                  cx="14"
                  cy="13"
                  r="3"
                  fill={isTabActive ? "#ffffff" : tab.color}
                />
                <text
                  x="26"
                  y="17"
                  fill={isTabActive ? "#ffffff" : colors.textSecondary}
                  fontSize="9.5"
                  fontWeight={isTabActive ? "800" : "600"}
                  letterSpacing="0.02em"
                >
                  {tab.label}
                </text>
                {isTabActive && (
                  <text
                    x={tab.w - 12}
                    y="17"
                    textAnchor="end"
                    fill="#ffffff"
                    fontSize="8"
                    fontWeight="800"
                    fontFamily="ui-monospace, monospace"
                  >
                    ACTIVE
                  </text>
                )}
              </g>
            );
          })}
        </g>

        {/* ── 4. CONNECTING DATA PIPELINE HIGHWAYS ── */}
        <g id="practices-conduits">
          {/* Highway 1: Station 1 to Station 2 */}
          <line
            x1="184"
            y1="195"
            x2="226"
            y2="195"
            stroke={colors.conduitTrack}
            strokeWidth="4"
            strokeLinecap="round"
          />
          <line
            x1="184"
            y1="195"
            x2="226"
            y2="195"
            stroke={current.accent}
            strokeWidth="2.5"
            strokeDasharray="6 4"
            strokeLinecap="round"
            className="prac-stream-line"
          />
          {/* Active Data Packet */}
          <circle r="3.5" fill={current.accent}>
            <animateMotion
              dur="1.5s"
              repeatCount="indefinite"
              path="M 184 195 L 226 195"
            />
          </circle>

          {/* Conduit 1 Protocol Label Badge */}
          <rect
            x="180"
            y="170"
            width="50"
            height="16"
            rx="4"
            fill={colors.nodeBg}
            stroke={current.accent}
            strokeWidth="1"
          />
          <text
            x="205"
            y="181"
            textAnchor="middle"
            fill={current.accent}
            fontSize="7"
            fontWeight="800"
            fontFamily="ui-monospace, monospace"
          >
            {current.conduit1}
          </text>

          {/* Highway 2: Station 2 to Station 3 */}
          <line
            x1="374"
            y1="195"
            x2="416"
            y2="195"
            stroke={colors.conduitTrack}
            strokeWidth="4"
            strokeLinecap="round"
          />
          <line
            x1="374"
            y1="195"
            x2="416"
            y2="195"
            stroke={current.accent}
            strokeWidth="2.5"
            strokeDasharray="6 4"
            strokeLinecap="round"
            className="prac-stream-line"
          />
          {/* Active Data Packet */}
          <circle r="3.5" fill={current.accent}>
            <animateMotion
              dur="1.5s"
              begin="0.75s"
              repeatCount="indefinite"
              path="M 374 195 L 416 195"
            />
          </circle>

          {/* Conduit 2 Protocol Label Badge */}
          <rect
            x="370"
            y="170"
            width="50"
            height="16"
            rx="4"
            fill={colors.nodeBg}
            stroke={current.accent}
            strokeWidth="1"
          />
          <text
            x="395"
            y="181"
            textAnchor="middle"
            fill={current.accent}
            fontSize="7"
            fontWeight="800"
            fontFamily="ui-monospace, monospace"
          >
            {current.conduit2}
          </text>
        </g>

        {/* ── 5. STATION 1 (LEFT): INGESTION & DATA ORIGIN ── */}
        <g id="station-1" transform="translate(24, 100)">
          <rect
            x="0"
            y="0"
            width="160"
            height="190"
            rx="14"
            fill={colors.stationBg}
            stroke={colors.stationBorder}
            strokeWidth="1.5"
          />
          {/* Header Pill */}
          <rect x="12" y="12" width="70" height="18" rx="4" fill={colors.nodeBg} stroke={colors.stationBorder} />
          <text x="47" y="24" textAnchor="middle" fill={colors.textSecondary} fontSize="7.5" fontWeight="800" fontFamily="ui-monospace, monospace">
            {current.station1.tag}
          </text>

          {/* Icon Stage */}
          <rect x="12" y="38" width="34" height="34" rx="8" fill={current.accentGlow} />
          {activePractice === 0 && (
            <g stroke={current.accent} strokeWidth="1.6" fill="none">
              <ellipse cx="29" cy="48" rx="8" ry="3" />
              <path d="M21 48v10c0 1.6 3.6 3 8 3s8-1.4 8-3v-10" />
              <path d="M21 53c0 1.6 3.6 3 8 3s8-1.4 8-3" />
            </g>
          )}
          {activePractice === 1 && (
            <g stroke={current.accent} strokeWidth="1.6" fill="none">
              <rect x="23" y="46" width="12" height="16" rx="2" />
              <line x1="26" y1="50" x2="32" y2="50" />
              <line x1="26" y1="54" x2="32" y2="54" />
              <line x1="26" y1="58" x2="30" y2="58" />
            </g>
          )}
          {activePractice === 2 && (
            <g stroke={current.accent} strokeWidth="1.6" fill="none">
              <rect x="22" y="46" width="14" height="18" rx="2" />
              <path d="M25 52l3 3 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          )}

          {/* Station Title & Subtitle */}
          <text x="12" y="92" fill={colors.textPrimary} fontSize="12" fontWeight="800">
            {current.station1.title}
          </text>
          <text x="12" y="108" fill={colors.textSecondary} fontSize="9" fontWeight="600">
            {current.station1.sub}
          </text>

          {/* Detail specs */}
          <rect x="12" y="122" width="136" height="28" rx="6" fill={colors.nodeBg} stroke={colors.cardBorder} />
          <text x="20" y="139" fill={colors.textSecondary} fontSize="8.5" fontWeight="600">
            {current.station1.detail}
          </text>

          {/* Status Badge */}
          <rect x="12" y="158" width="136" height="20" rx="5" fill={current.accentGlow} />
          <text x="80" y="171" textAnchor="middle" fill={current.accent} fontSize="8" fontWeight="800" fontFamily="ui-monospace, monospace">
            {current.station1.pill}
          </text>
        </g>

        {/* ── 6. STATION 2 (CENTER): CORE ORCHESTRATION NEXUS ── */}
        <g id="station-2" transform="translate(226, 92)">
          <rect
            x="0"
            y="0"
            width="148"
            height="206"
            rx="16"
            fill={colors.stationActiveBg}
            stroke={current.accent}
            strokeWidth="2"
          />
          {/* Header Pill */}
          <rect x="12" y="12" width="80" height="18" rx="4" fill={current.accent} />
          <text x="52" y="24" textAnchor="middle" fill="#ffffff" fontSize="7.5" fontWeight="800" fontFamily="ui-monospace, monospace">
            {current.station2.tag}
          </text>

          {/* Center Nexus Vector Art */}
          <g transform="translate(74, 62)">
            <circle cx="0" cy="0" r="24" fill={colors.nodeBg} stroke={current.accent} strokeWidth="1.5" />
            <circle cx="0" cy="0" r="28" fill="none" stroke={current.accent} strokeWidth="1" strokeDasharray="3 3" className="prac-stream-line" />
            <circle cx="0" cy="0" r="14" fill={current.accent} />
            <circle cx="0" cy="0" r="5" fill="#ffffff" />
          </g>

          {/* Center Title & Subtitle */}
          <text x="74" y="112" textAnchor="middle" fill={colors.textPrimary} fontSize="12" fontWeight="800">
            {current.station2.title}
          </text>
          <text x="74" y="128" textAnchor="middle" fill={colors.textSecondary} fontSize="9" fontWeight="600">
            {current.station2.sub}
          </text>

          {/* Detail specs */}
          <rect x="10" y="140" width="128" height="26" rx="6" fill={colors.nodeBg} stroke={colors.cardBorder} />
          <text x="74" y="156" textAnchor="middle" fill={colors.textSecondary} fontSize="8.5" fontWeight="600">
            {current.station2.detail}
          </text>

          {/* Status Badge */}
          <rect x="10" y="174" width="128" height="20" rx="5" fill={current.accentGlow} />
          <text x="74" y="187" textAnchor="middle" fill={current.accent} fontSize="8" fontWeight="800" fontFamily="ui-monospace, monospace">
            {current.station2.pill}
          </text>
        </g>

        {/* ── 7. STATION 3 (RIGHT): ENTERPRISE DELIVERABLES ── */}
        <g id="station-3" transform="translate(416, 100)">
          <rect
            x="0"
            y="0"
            width="160"
            height="190"
            rx="14"
            fill={colors.stationBg}
            stroke={colors.stationBorder}
            strokeWidth="1.5"
          />
          {/* Header Pill */}
          <rect x="12" y="12" width="70" height="18" rx="4" fill={colors.nodeBg} stroke={colors.stationBorder} />
          <text x="47" y="24" textAnchor="middle" fill={colors.textSecondary} fontSize="7.5" fontWeight="800" fontFamily="ui-monospace, monospace">
            {current.station3.tag}
          </text>

          {/* Icon Stage */}
          <rect x="12" y="38" width="34" height="34" rx="8" fill={current.accentGlow} />
          {activePractice === 0 && (
            <g stroke={current.accent} strokeWidth="1.6" fill="none">
              <path d="M21 54l4-8 8 16 4-8" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          )}
          {activePractice === 1 && (
            <g stroke={current.accent} strokeWidth="1.6" fill="none">
              <circle cx="29" cy="55" r="7" />
              <path d="M29 45v3M29 62v3M19 55h3M36 55h3" strokeLinecap="round" />
            </g>
          )}
          {activePractice === 2 && (
            <g stroke={current.accent} strokeWidth="1.6" fill="none">
              <path d="M31 46l-6 10h6l-3 8 9-11h-6z" fill={current.accent} />
            </g>
          )}

          {/* Station Title & Subtitle */}
          <text x="12" y="92" fill={colors.textPrimary} fontSize="12" fontWeight="800">
            {current.station3.title}
          </text>
          <text x="12" y="108" fill={colors.textSecondary} fontSize="9" fontWeight="600">
            {current.station3.sub}
          </text>

          {/* Detail specs */}
          <rect x="12" y="122" width="136" height="28" rx="6" fill={colors.nodeBg} stroke={colors.cardBorder} />
          <text x="20" y="139" fill={colors.textSecondary} fontSize="8.5" fontWeight="600">
            {current.station3.detail}
          </text>

          {/* Status Badge */}
          <rect x="12" y="158" width="136" height="20" rx="5" fill={current.accentGlow} />
          <text x="80" y="171" textAnchor="middle" fill={current.accent} fontSize="8" fontWeight="800" fontFamily="ui-monospace, monospace">
            {current.station3.pill}
          </text>
        </g>

        {/* ── 8. BOTTOM TELEMETRY FOOTER ── */}
        <g id="practices-footer">
          <text
            x="300"
            y="348"
            textAnchor="middle"
            fill={colors.textSecondary}
            fontSize="9"
            fontWeight="600"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            {current.footer}
          </text>
        </g>
      </svg>
    </div>
  );
}
