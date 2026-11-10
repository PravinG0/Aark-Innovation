import React from "react";

/**
 * HeroArchitectureSvg - Section 1 Vector Illustration
 * "Enterprise Modernization Orchestration Engine"
 * 
 * Visualizes the full modernization transformation:
 * - Left: Legacy Bottleneck Silos (Manual Backlog, Legacy ERP Silo, 3-Day Quoting Lag) with alert amber/red wireframes.
 * - Center: AARK Octagonal Quantum Core with dual counter-rotating energy rings, glowing flux pins, and status telemetry.
 * - Right: Modernized Enterprise Stack Tiers (Oracle Fusion Cloud & EBS, Grounded Data Lakehouse & AI Fabric, Autonomous Workflow Event Bus).
 * - Full Dark & Light theme support with WCAG AA compliant colors.
 */
export default function HeroArchitectureSvg({
  theme = "dark",
  className = "",
  hide2dDiamond = false,
  activePillar = 0,
  activePractice = 0,
  activeImpactIndex = 0,
}) {
  const isLight = theme === "light";

  // Palette tokens based on theme
  const colors = {
    bgFrom: isLight ? "#ffffff" : "#0f172a",
    bgTo: isLight ? "#f8fafc" : "#020617",
    cardBorder: isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.12)",
    gridStroke: isLight ? "rgba(2, 132, 199, 0.07)" : "rgba(56, 189, 248, 0.08)",
    textPrimary: isLight ? "#0f172a" : "#f8fafc",
    textSecondary: isLight ? "#475569" : "#94a3b8",
    nodeBg: isLight ? "#f1f5f9" : "rgba(255, 255, 255, 0.04)",
    nodeBorder: isLight ? "#cbd5e1" : "rgba(255, 255, 255, 0.12)",
    sky: isLight ? "#0284c7" : "#38bdf8",
    skyGlow: isLight ? "rgba(2, 132, 199, 0.15)" : "rgba(56, 189, 248, 0.35)",
    emerald: isLight ? "#059669" : "#10b981",
    emeraldGlow: isLight ? "rgba(5, 150, 105, 0.15)" : "rgba(16, 185, 129, 0.35)",
    amber: isLight ? "#d97706" : "#f59e0b",
    amberGlow: isLight ? "rgba(217, 119, 6, 0.15)" : "rgba(245, 158, 11, 0.35)",
    rose: isLight ? "#e11d48" : "#f43f5e",
    indigo: isLight ? "#4f46e5" : "#818cf8",
    indigoGlow: isLight ? "rgba(79, 70, 229, 0.15)" : "rgba(129, 140, 248, 0.35)",
  };

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
            @keyframes heroDashFast {
              to { stroke-dashoffset: -40; }
            }
            @keyframes heroDashSlow {
              to { stroke-dashoffset: -32; }
            }
            @keyframes heroRotateClockwise {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            @keyframes heroRotateCounter {
              from { transform: rotate(360deg); }
              to { transform: rotate(0deg); }
            }
            @keyframes heroPulseCore {
              0%, 100% { transform: scale(1); opacity: 0.95; }
              50% { transform: scale(1.06); opacity: 1; }
            }
            @keyframes heroBeaconFade {
              0%, 100% { opacity: 0.3; }
              50% { opacity: 1; }
            }
            .hero-dash-fwd {
              animation: heroDashFast 2.2s linear infinite;
            }
            .hero-dash-rev {
              animation: heroDashSlow 3s linear infinite;
            }
            .hero-rot-cw {
              transform-origin: 300px 195px;
              animation: heroRotateClockwise 18s linear infinite;
            }
            .hero-rot-ccw {
              transform-origin: 300px 195px;
              animation: heroRotateCounter 24s linear infinite;
            }
            .hero-core-beat {
              transform-origin: 300px 195px;
              animation: heroPulseCore 3s ease-in-out infinite;
            }
            .hero-beacon {
              animation: heroBeaconFade 2s ease-in-out infinite;
            }
            @media (prefers-reduced-motion: reduce) {
              .hero-dash-fwd, .hero-dash-rev, .hero-rot-cw, .hero-rot-ccw, .hero-core-beat, .hero-beacon {
                animation: none !important;
              }
            }
          `}</style>

          {/* Gradients */}
          <linearGradient id="heroCardBg" x1="0" y1="0" x2="600" y2="380" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={colors.bgFrom} />
            <stop offset="100%" stopColor={colors.bgTo} />
          </linearGradient>

          <radialGradient id="heroQuantumGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={colors.sky} stopOpacity={isLight ? 0.35 : 0.6} />
            <stop offset="45%" stopColor={colors.sky} stopOpacity={isLight ? 0.12 : 0.22} />
            <stop offset="100%" stopColor={colors.sky} stopOpacity="0" />
          </radialGradient>

          <linearGradient id="heroSiloAlertGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={colors.rose} stopOpacity={0.25} />
            <stop offset="100%" stopColor={colors.amber} stopOpacity={0.05} />
          </linearGradient>

          <linearGradient id="heroConduitIn" x1="165" y1="0" x2="255" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={colors.amber} stopOpacity="0.8" />
            <stop offset="100%" stopColor={colors.sky} stopOpacity="1" />
          </linearGradient>

          <linearGradient id="heroConduitOut" x1="345" y1="0" x2="435" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={colors.sky} stopOpacity="1" />
            <stop offset="100%" stopColor={colors.emerald} stopOpacity="0.9" />
          </linearGradient>

          <filter id="heroSoftGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation={isLight ? 3 : 5} result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── 1. MAIN CARD CANVAS ── */}
        <rect
          x="10"
          y="10"
          width="580"
          height="360"
          rx="24"
          fill="url(#heroCardBg)"
          stroke={colors.cardBorder}
          strokeWidth="1.5"
        />

        {/* Blueprint Grid Lines */}
        <g stroke={colors.gridStroke} strokeWidth="1">
          <line x1="10" y1="58" x2="590" y2="58" />
          <line x1="10" y1="330" x2="590" y2="330" />
          <line x1="195" y1="58" x2="195" y2="330" strokeDasharray="3 3" />
          <line x1="405" y1="58" x2="405" y2="330" strokeDasharray="3 3" />
          <line x1="300" y1="58" x2="300" y2="330" strokeDasharray="2 4" />
        </g>

        {/* ── 2. TOP HUD TELEMETRY BAR ── */}
        <g id="top-hud">
          {/* Status Capsule */}
          <rect
            x="24"
            y="22"
            width="170"
            height="24"
            rx="12"
            fill={colors.nodeBg}
            stroke={colors.nodeBorder}
            strokeWidth="1"
          />
          <circle cx="36" cy="34" r="4" fill={colors.emerald} className="hero-beacon" />
          <text
            x="48"
            y="38"
            fill={colors.textPrimary}
            fontSize="10"
            fontWeight="700"
            fontFamily="ui-monospace, monospace"
            letterSpacing="0.06em"
          >
            ORCHESTRATOR LIVE
          </text>

          {/* Center Protocol Label */}
          <text
            x="300"
            y="37"
            textAnchor="middle"
            fill={colors.sky}
            fontSize="11"
            fontWeight="800"
            fontFamily="system-ui, -apple-system, sans-serif"
            letterSpacing="0.08em"
          >
            ENTERPRISE MODERNIZATION ENGINE
          </text>

          {/* Right Metrics Pill */}
          <rect
            x="466"
            y="22"
            width="110"
            height="24"
            rx="12"
            fill={colors.nodeBg}
            stroke={colors.nodeBorder}
            strokeWidth="1"
          />
          <text
            x="521"
            y="38"
            textAnchor="middle"
            fill={colors.textSecondary}
            fontSize="9"
            fontWeight="700"
            fontFamily="ui-monospace, monospace"
          >
            0-DRIFT ARCHITECTURE
          </text>
        </g>

        {/* ── 3. LEFT WING: LEGACY BOTTLENECK SILOS ── */}
        <g id="legacy-silos">
          {/* Zone Header Label */}
          <text
            x="101"
            y="80"
            textAnchor="middle"
            fill={colors.amber}
            fontSize="10"
            fontWeight="800"
            letterSpacing="0.08em"
            fontFamily="ui-monospace, monospace"
          >
            LEGACY BOTTLENECK SILOS
          </text>

          {/* Silo 1: Manual Backlog */}
          <g id="silo-manual-backlog" transform="translate(18, 96)">
            <rect
              x="0"
              y="0"
              width="166"
              height="62"
              rx="12"
              fill={colors.nodeBg}
              stroke={colors.amber}
              strokeWidth="1.2"
              strokeDasharray="4 2"
            />
            {/* Warning Icon Tag */}
            <rect x="8" y="10" width="22" height="22" rx="6" fill={colors.amberGlow} />
            <path
              d="M19 16v6M19 24h.01"
              stroke={colors.amber}
              strokeWidth="2"
              strokeLinecap="round"
            />
            <text x="36" y="22" fill={colors.textPrimary} fontSize="11" fontWeight="700">
              Manual Backlog
            </text>
            <text x="36" y="34" fill={colors.textSecondary} fontSize="8.5">
              Spreadsheet delays & backlog
            </text>
            <rect x="36" y="42" width="70" height="12" rx="4" fill={colors.amberGlow} />
            <text x="71" y="51" textAnchor="middle" fill={colors.amber} fontSize="8" fontWeight="800">
              UNSCALABLE
            </text>
          </g>

          {/* Silo 2: Legacy ERP Silo */}
          <g id="silo-legacy-erp" transform="translate(18, 168)">
            <rect
              x="0"
              y="0"
              width="166"
              height="62"
              rx="12"
              fill={colors.nodeBg}
              stroke={colors.rose}
              strokeWidth="1.2"
            />
            {/* Severed Link Icon */}
            <rect x="8" y="10" width="22" height="22" rx="6" fill={isLight ? "rgba(225, 29, 72, 0.12)" : "rgba(244, 63, 94, 0.2)"} />
            <circle cx="15" cy="21" r="3" stroke={colors.rose} strokeWidth="1.5" />
            <circle cx="23" cy="21" r="3" stroke={colors.rose} strokeWidth="1.5" />
            <line x1="17.5" y1="18.5" x2="20.5" y2="23.5" stroke={colors.rose} strokeWidth="1.5" />
            <text x="36" y="22" fill={colors.textPrimary} fontSize="11" fontWeight="700">
              Legacy ERP Silo
            </text>
            <text x="36" y="34" fill={colors.textSecondary} fontSize="8.5">
              Brittle scripts & data drift
            </text>
            <rect x="36" y="42" width="74" height="12" rx="4" fill={isLight ? "rgba(225, 29, 72, 0.1)" : "rgba(244, 63, 94, 0.15)"} />
            <text x="73" y="51" textAnchor="middle" fill={colors.rose} fontSize="8" fontWeight="800">
              FRAGMENTED
            </text>
          </g>

          {/* Silo 3: 3-Day Quoting Lag */}
          <g id="silo-quoting-lag" transform="translate(18, 240)">
            <rect
              x="0"
              y="0"
              width="166"
              height="62"
              rx="12"
              fill={colors.nodeBg}
              stroke={colors.amber}
              strokeWidth="1.2"
              strokeDasharray="4 2"
            />
            {/* Clock/Lag Icon */}
            <rect x="8" y="10" width="22" height="22" rx="6" fill={colors.amberGlow} />
            <circle cx="19" cy="21" r="6" stroke={colors.amber} strokeWidth="1.5" />
            <path d="M19 18v3l2 2" stroke={colors.amber} strokeWidth="1.5" strokeLinecap="round" />
            <text x="36" y="22" fill={colors.textPrimary} fontSize="11" fontWeight="700">
              3-Day Quoting Lag
            </text>
            <text x="36" y="34" fill={colors.textSecondary} fontSize="8.5">
              Slow CPQ & margin leakage
            </text>
            <rect x="36" y="42" width="66" height="12" rx="4" fill={colors.amberGlow} />
            <text x="69" y="51" textAnchor="middle" fill={colors.amber} fontSize="8" fontWeight="800">
              72HR BACKLOG
            </text>
          </g>
        </g>

        {/* ── 4. CONDUIT FLOW STREAM: LEFT TO CENTER ── */}
        <g id="inflow-conduits">
          {/* Path 1: Top silo into Core */}
          <path
            d="M 184 127 C 220 127, 230 180, 260 185"
            stroke="url(#heroConduitIn)"
            strokeWidth="2.5"
            strokeDasharray="6 4"
            className="hero-dash-fwd"
          />
          {/* Path 2: Mid silo into Core */}
          <path
            d="M 184 199 C 215 199, 235 195, 255 195"
            stroke="url(#heroConduitIn)"
            strokeWidth="3"
            strokeDasharray="8 5"
            className="hero-dash-fwd"
          />
          {/* Path 3: Bottom silo into Core */}
          <path
            d="M 184 271 C 220 271, 230 210, 260 205"
            stroke="url(#heroConduitIn)"
            strokeWidth="2.5"
            strokeDasharray="6 4"
            className="hero-dash-fwd"
          />
        </g>

        {/* ── 5. CENTER: AARK OCTAGONAL QUANTUM CORE ── */}
        <g id="quantum-core">
          {/* Ambient Glow Aura */}
          <circle cx="300" cy="195" r="75" fill="url(#heroQuantumGlow)" />

          {/* Outer Rotating Counter Ring */}
          <circle
            cx="300"
            cy="195"
            r="64"
            stroke={colors.sky}
            strokeWidth="1.5"
            strokeDasharray="14 8 4 8"
            className="hero-rot-ccw"
            opacity={isLight ? 0.6 : 0.8}
          />

          {/* Inner Rotating Clockwise Ring */}
          <circle
            cx="300"
            cy="195"
            r="52"
            stroke={colors.indigo}
            strokeWidth="2"
            strokeDasharray="18 10"
            className="hero-rot-cw"
            opacity={isLight ? 0.7 : 0.85}
          />

          {/* Octagonal Reactor Housing */}
          <polygon
            points="272,155 328,155 348,175 348,215 328,235 272,235 252,215 252,175"
            fill={isLight ? "#ffffff" : "#0f172a"}
            stroke={colors.sky}
            strokeWidth="2.5"
            filter="url(#heroSoftGlow)"
          />

          {/* Silicon Chip Die Grid */}
          <rect
            x="270"
            y="165"
            width="60"
            height="60"
            rx="8"
            fill={isLight ? "#e0f2fe" : "#0284c7"}
            fillOpacity={isLight ? 0.6 : 0.25}
            stroke={colors.sky}
            strokeWidth="1.5"
          />

          {/* Central Pulsing Heart Node / Holographic Core Bed */}
          {hide2dDiamond ? (
            <g className="hero-core-beat" opacity={isLight ? 0.35 : 0.5}>
              <circle cx="300" cy="195" r="14" fill="none" stroke={colors.sky} strokeWidth="1" strokeDasharray="3 3" />
              <circle cx="300" cy="195" r="3" fill={colors.sky} />
            </g>
          ) : (
            <g className="hero-core-beat">
              <polygon
                points="285,195 300,180 315,195 300,210"
                fill={colors.sky}
              />
              <circle cx="300" cy="195" r="4" fill="#ffffff" />
            </g>
          )}

          {/* 4 Cardinal Flux Pins */}
          <line x1="300" y1="145" x2="300" y2="155" stroke={colors.sky} strokeWidth="3" strokeLinecap="round" />
          <line x1="300" y1="235" x2="300" y2="245" stroke={colors.sky} strokeWidth="3" strokeLinecap="round" />
          <line x1="242" y1="195" x2="252" y2="195" stroke={colors.sky} strokeWidth="3" strokeLinecap="round" />
          <line x1="348" y1="195" x2="358" y2="195" stroke={colors.sky} strokeWidth="3" strokeLinecap="round" />

          {/* Telemetry Status Banner Under Core */}
          <rect
            x="220"
            y="266"
            width="160"
            height="22"
            rx="6"
            fill={colors.nodeBg}
            stroke={colors.sky}
            strokeWidth="1"
          />
          <text
            x="300"
            y="280"
            textAnchor="middle"
            fill={colors.sky}
            fontSize="9"
            fontWeight="800"
            fontFamily="ui-monospace, monospace"
            letterSpacing="0.08em"
          >
            AARK QUANTUM CORE
          </text>
        </g>

        {/* ── 6. CONDUIT FLOW STREAM: CENTER TO RIGHT ── */}
        <g id="outflow-conduits">
          {/* Path 1: Core into Oracle Fusion */}
          <path
            d="M 345 185 C 375 180, 385 127, 416 127"
            stroke="url(#heroConduitOut)"
            strokeWidth="2.5"
            strokeDasharray="6 4"
            className="hero-dash-fwd"
          />
          {/* Path 2: Core into Grounded AI */}
          <path
            d="M 345 195 C 375 195, 385 199, 416 199"
            stroke="url(#heroConduitOut)"
            strokeWidth="3"
            strokeDasharray="8 5"
            className="hero-dash-fwd"
          />
          {/* Path 3: Core into Workflow Bus */}
          <path
            d="M 345 205 C 375 210, 385 271, 416 271"
            stroke="url(#heroConduitOut)"
            strokeWidth="2.5"
            strokeDasharray="6 4"
            className="hero-dash-fwd"
          />
        </g>

        {/* ── 7. RIGHT WING: MODERNIZED ENTERPRISE STACK TIERS ── */}
        <g id="modern-tiers">
          {/* Zone Header Label */}
          <text
            x="499"
            y="80"
            textAnchor="middle"
            fill={colors.emerald}
            fontSize="10"
            fontWeight="800"
            letterSpacing="0.08em"
            fontFamily="ui-monospace, monospace"
          >
            MODERNIZED ENTERPRISE STACK
          </text>

          {/* Tier 1: Oracle Fusion Cloud & EBS */}
          <g id="tier-oracle" transform="translate(416, 96)">
            <rect
              x="0"
              y="0"
              width="166"
              height="62"
              rx="12"
              fill={colors.nodeBg}
              stroke={colors.emerald}
              strokeWidth="1.4"
            />
            {/* Database Cylinder Icon */}
            <rect x="8" y="10" width="22" height="22" rx="6" fill={colors.emeraldGlow} />
            <ellipse cx="19" cy="16" rx="5" ry="2" stroke={colors.emerald} strokeWidth="1.2" />
            <path d="M14 16v8c0 1.1 2.2 2 5 2s5-.9 5-2v-8" stroke={colors.emerald} strokeWidth="1.2" />
            <path d="M14 20c0 1.1 2.2 2 5 2s5-.9 5-2" stroke={colors.emerald} strokeWidth="1.2" />
            <text x="36" y="22" fill={colors.textPrimary} fontSize="11" fontWeight="700">
              Oracle Fusion Cloud
            </text>
            <text x="36" y="34" fill={colors.textSecondary} fontSize="8.5">
              OIC & FBDI automation
            </text>
            <rect x="36" y="42" width="70" height="12" rx="4" fill={colors.emeraldGlow} />
            <text x="71" y="51" textAnchor="middle" fill={colors.emerald} fontSize="8" fontWeight="800">
              CLOUD NATIVE
            </text>
          </g>

          {/* Tier 2: Grounded Data Lakehouse & AI Fabric */}
          <g id="tier-ai-fabric" transform="translate(416, 168)">
            <rect
              x="0"
              y="0"
              width="166"
              height="62"
              rx="12"
              fill={colors.nodeBg}
              stroke={colors.sky}
              strokeWidth="1.4"
            />
            {/* AI Vector Neural Icon */}
            <rect x="8" y="10" width="22" height="22" rx="6" fill={colors.skyGlow} />
            <circle cx="15" cy="18" r="2.5" fill={colors.sky} />
            <circle cx="23" cy="18" r="2.5" fill={colors.sky} />
            <circle cx="19" cy="26" r="2.5" fill={colors.sky} />
            <line x1="15" y1="18" x2="23" y2="18" stroke={colors.sky} strokeWidth="1.2" />
            <line x1="15" y1="18" x2="19" y2="26" stroke={colors.sky} strokeWidth="1.2" />
            <line x1="23" y1="18" x2="19" y2="26" stroke={colors.sky} strokeWidth="1.2" />
            <text x="36" y="22" fill={colors.textPrimary} fontSize="11" fontWeight="700">
              Grounded Data & AI
            </text>
            <text x="36" y="34" fill={colors.textSecondary} fontSize="8.5">
              Snowflake, dbt & Bedrock
            </text>
            <rect x="36" y="42" width="68" height="12" rx="4" fill={colors.skyGlow} />
            <text x="70" y="51" textAnchor="middle" fill={colors.sky} fontSize="8" fontWeight="800">
              ZERO-DRIFT RAG
            </text>
          </g>

          {/* Tier 3: Autonomous Workflow Event Bus */}
          <g id="tier-workflow-bus" transform="translate(416, 240)">
            <rect
              x="0"
              y="0"
              width="166"
              height="62"
              rx="12"
              fill={colors.nodeBg}
              stroke={colors.indigo}
              strokeWidth="1.4"
            />
            {/* Lightning/Velocity Icon */}
            <rect x="8" y="10" width="22" height="22" rx="6" fill={colors.indigoGlow} />
            <path
              d="M20 14l-4 8h3l-1 6 5-8h-3l2-6z"
              fill={colors.indigo}
            />
            <text x="36" y="22" fill={colors.textPrimary} fontSize="11" fontWeight="700">
              Autonomous Workflows
            </text>
            <text x="36" y="34" fill={colors.textSecondary} fontSize="8.5">
              RFP parsing & auto-CPQ
            </text>
            <rect x="36" y="42" width="62" height="12" rx="4" fill={colors.indigoGlow} />
            <text x="67" y="51" textAnchor="middle" fill={colors.indigo} fontSize="8" fontWeight="800">
              EVENT-DRIVEN
            </text>
          </g>
        </g>

        {/* ── 8. BOTTOM ENTERPRISE GUARANTEE FOOTNOTE ── */}
        <g id="bottom-ribbon">
          <text
            x="300"
            y="350"
            textAnchor="middle"
            fill={colors.textSecondary}
            fontSize="9"
            fontWeight="600"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            AARK Innovations • End-to-End Orchestrated Delivery • 100% Senior Architect Executed
          </text>
        </g>
      </svg>
    </div>
  );
}
