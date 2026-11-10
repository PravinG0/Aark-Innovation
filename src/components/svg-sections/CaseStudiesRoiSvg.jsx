import React from "react";

/**
 * CaseStudiesRoiSvg - Section 4 Vector Illustration
 * "Audited Impact Cockpit & Telemetry Gauges"
 * 
 * Features 4 specialized measurement instruments:
 * - Instrument 1: Quoting Velocity Dial (20-min quote turnaround, down from 3-day backlog, 2.8x launch velocity, 0% margin drift)
 * - Instrument 2: AI Proposal Efficiency Waterfall (-60% drafting time / 82% RFP reduction, 2x throughput, 4-week production V1)
 * - Instrument 3: 14-Node Constellation Mesh (14-Hospital federated ERP network, zero data drift, single governed ledger)
 * - Instrument 4: Live Telemetry Sparkline Stream (-11 hrs/wk saved, $0 downtime, -22% cloud warehouse infrastructure spend)
 * 
 * INTERACTIVITY:
 * Accepts `activeImpactIndex` (0, 1, 2) synchronized with hover or selection of the outcome cards
 * in the companion HTML column, dynamically illuminating and focusing the corresponding instrument.
 * 
 * Full Dark & Light theme support with crisp contrast and motion-safe animations.
 */
export default function CaseStudiesRoiSvg({
  activeImpactIndex = 0, // 0: Quoting Velocity, 1: AI Waterfall, 2: 14-Node Mesh
  theme = "dark",
  className = ""
}) {
  const isLight = theme === "light";

  const colors = {
    // Canvas background
    bgFrom: isLight ? "#ffffff" : "#0f1118",
    bgTo: isLight ? "#f8fafc" : "#07080c",
    cardBorder: isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.10)",
    gridStroke: isLight ? "rgba(16, 185, 129, 0.06)" : "rgba(16, 185, 129, 0.05)",

    // Typography
    textPrimary: isLight ? "#0f172a" : "#f8fafc",
    textSecondary: isLight ? "#475569" : "#94a3b8",
    textMuted: isLight ? "#64748b" : "#64748b",

    // Instrument card backgrounds
    instBgIdle: isLight ? "rgba(248, 250, 252, 0.85)" : "rgba(15, 19, 28, 0.70)",
    instBorderIdle: isLight ? "#cbd5e1" : "rgba(255, 255, 255, 0.09)",
    nodeBg: isLight ? "#ffffff" : "rgba(255, 255, 255, 0.04)",
    nodeBorder: isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.10)",

    // Primary Telemetry Accents
    emerald: isLight ? "#059669" : "#10b981",
    emeraldGlow: isLight ? "rgba(5, 150, 105, 0.18)" : "rgba(16, 185, 129, 0.35)",
    sky: isLight ? "#0284c7" : "#38bdf8",
    skyGlow: isLight ? "rgba(2, 132, 199, 0.18)" : "rgba(56, 189, 248, 0.35)",
    indigo: isLight ? "#4f46e5" : "#818cf8",
    indigoGlow: isLight ? "rgba(79, 70, 229, 0.18)" : "rgba(129, 140, 248, 0.35)",
    gold: isLight ? "#d97706" : "#fbbf24",
    goldGlow: isLight ? "rgba(217, 119, 6, 0.18)" : "rgba(251, 191, 36, 0.35)",

    amber: isLight ? "#d97706" : "#f59e0b",
    rose: isLight ? "#e11d48" : "#f43f5e",
  };

  return (
    <div className={`w-full h-full flex items-center justify-center overflow-visible ${className}`}>
      <svg
        viewBox="0 0 600 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[380px] overflow-visible select-none"
        style={{
          filter: isLight
            ? "drop-shadow(0 16px 36px rgba(16, 185, 129, 0.10))"
            : "drop-shadow(0 20px 48px rgba(16, 185, 129, 0.25))"
        }}
      >
        <defs>
          <style>{`
            @keyframes tachSweepMotion {
              0%, 100% { transform: rotate(40deg); }
              50% { transform: rotate(50deg); }
            }
            @keyframes waterfallDrop {
              to { stroke-dashoffset: -24; }
            }
            @keyframes meshConstellationSpin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
            @keyframes meshConstellationReverse {
              from { transform: rotate(360deg); }
              to { transform: rotate(0deg); }
            }
            @keyframes sparklineFlow {
              to { stroke-dashoffset: -80; }
            }
            @keyframes beaconPulse {
              0%, 100% { opacity: 0.5; }
              50% { opacity: 1; }
            }
            .roi-needle {
              animation: tachSweepMotion 4s ease-in-out infinite;
            }
            .roi-waterfall-flow {
              animation: waterfallDrop 1.8s linear infinite;
            }
            .roi-mesh-orbit-1 {
              transform-origin: 86px 110px;
              animation: meshConstellationSpin 28s linear infinite;
            }
            .roi-mesh-orbit-2 {
              transform-origin: 86px 110px;
              animation: meshConstellationReverse 36s linear infinite;
            }
            .roi-sparkline-pulse {
              animation: sparklineFlow 3.5s linear infinite;
            }
            .roi-beacon-glow {
              animation: beaconPulse 2s ease-in-out infinite;
            }
            @media (prefers-reduced-motion: reduce) {
              .roi-needle, .roi-waterfall-flow, .roi-mesh-orbit-1,
              .roi-mesh-orbit-2, .roi-sparkline-pulse, .roi-beacon-glow {
                animation: none !important;
              }
            }
          `}</style>

          {/* Canvas Background Gradient */}
          <linearGradient id="roiCanvasBg" x1="0" y1="0" x2="600" y2="380" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={colors.bgFrom} />
            <stop offset="100%" stopColor={colors.bgTo} />
          </linearGradient>

          {/* Tachometer Dual Arc Gradient */}
          <linearGradient id="speedDialArcGrad" x1="34" y1="135" x2="138" y2="135" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={colors.rose} />
            <stop offset="40%" stopColor={colors.amber} />
            <stop offset="75%" stopColor={colors.emerald} />
            <stop offset="100%" stopColor="#10b981" />
          </linearGradient>

          {/* Waterfall Glass Column Gradients */}
          <linearGradient id="wfBar1Grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={isLight ? "#94a3b8" : "#475569"} stopOpacity="0.8" />
            <stop offset="100%" stopColor={isLight ? "#64748b" : "#334155"} stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="wfBar2Grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={isLight ? "#38bdf8" : "#0284c7"} />
            <stop offset="100%" stopColor={isLight ? "#0284c7" : "#0369a1"} />
          </linearGradient>

          <linearGradient id="wfBar3Grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={isLight ? "#34d399" : "#059669"} />
            <stop offset="100%" stopColor={isLight ? "#059669" : "#047857"} />
          </linearGradient>

          {/* Golden Unified Ledger Core Gradient */}
          <radialGradient id="meshCoreGrad" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
            <stop offset="45%" stopColor={colors.gold} stopOpacity="0.85" />
            <stop offset="100%" stopColor="#92400e" stopOpacity="0.95" />
          </radialGradient>

          {/* Sparkline Area Shading */}
          <linearGradient id="sparklineAreaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={colors.emerald} stopOpacity={isLight ? "0.22" : "0.30"} />
            <stop offset="100%" stopColor={colors.emerald} stopOpacity="0" />
          </linearGradient>

          {/* Specular Highlight Rim for Active Instrument */}
          <linearGradient id="instRimGlow" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity={isLight ? "0.9" : "0.7"} />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="roiGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation={isLight ? 2.5 : 4} result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── 1. MAIN CARD CANVAS ── */}
        <rect
          x="8"
          y="8"
          width="584"
          height="364"
          rx="22"
          fill="url(#roiCanvasBg)"
          stroke={colors.cardBorder}
          strokeWidth="1.5"
        />

        {/* Background Coordinate Grid */}
        <g stroke={colors.gridStroke} strokeWidth="1">
          <line x1="8" y1="50" x2="592" y2="50" />
          <line x1="8" y1="266" x2="592" y2="266" />
          <line x1="8" y1="338" x2="592" y2="338" />
          <line x1="200" y1="50" x2="200" y2="266" strokeDasharray="3 3" />
          <line x1="398" y1="50" x2="398" y2="266" strokeDasharray="3 3" />
        </g>

        {/* ── 2. TOP HUD STATUS BAR ── */}
        <g id="roi-top-hud">
          {/* Cockpit Status Badge */}
          <rect
            x="24"
            y="18"
            width="250"
            height="24"
            rx="12"
            fill={colors.nodeBg}
            stroke={colors.emerald}
            strokeWidth="1"
            strokeOpacity="0.5"
          />
          <circle cx="36" cy="30" r="4" fill={colors.emerald} className="roi-beacon-glow" />
          <text
            x="48"
            y="34"
            fill={colors.emerald}
            fontSize="9"
            fontWeight="900"
            fontFamily="ui-monospace, monospace"
            letterSpacing="0.08em"
          >
            AUDITED ENTERPRISE TELEMETRY // LIVE
          </text>

          {/* Active Instrument Indicator */}
          <g transform="translate(380, 18)">
            <rect
              x="0"
              y="0"
              width="196"
              height="24"
              rx="12"
              fill={colors.nodeBg}
              stroke={
                activeImpactIndex === 0
                  ? colors.emerald
                  : activeImpactIndex === 1
                  ? colors.sky
                  : colors.indigo
              }
              strokeWidth="1"
            />
            <circle
              cx="12"
              cy="12"
              r="3.5"
              fill={
                activeImpactIndex === 0
                  ? colors.emerald
                  : activeImpactIndex === 1
                  ? colors.sky
                  : colors.indigo
              }
            />
            <text
              x="22"
              y="16"
              fill={
                activeImpactIndex === 0
                  ? colors.emerald
                  : activeImpactIndex === 1
                  ? colors.sky
                  : colors.indigo
              }
              fontSize="8.5"
              fontWeight="900"
              fontFamily="ui-monospace, monospace"
            >
              {activeImpactIndex === 0
                ? "INSTRUMENT 01: 2.8x VELOCITY"
                : activeImpactIndex === 1
                ? "INSTRUMENT 02: 82% RFP CUT"
                : "INSTRUMENT 03: 14-NODE MESH"}
            </text>
          </g>
        </g>

        {/* ── 3. INSTRUMENT 1: QUOTING VELOCITY PRECISION TACHOMETER ── */}
        {/* Outer group strictly holds static translate(24, 56) */}
        <g id="inst-quoting-velocity" transform="translate(24, 56)">
          {/* Card Container */}
          <rect
            x="0"
            y="0"
            width="172"
            height="204"
            rx="14"
            fill={activeImpactIndex === 0 ? (isLight ? "#ffffff" : "rgba(20, 36, 28, 0.95)") : colors.instBgIdle}
            stroke={activeImpactIndex === 0 ? colors.emerald : colors.instBorderIdle}
            strokeWidth={activeImpactIndex === 0 ? "1.75" : "1"}
            filter={activeImpactIndex === 0 ? "url(#roiGlowFilter)" : undefined}
            style={{ transition: "all 0.3s ease" }}
          />

          {/* Top Specular Rim */}
          {activeImpactIndex === 0 && (
            <line x1="12" y1="1" x2="160" y2="1" stroke="url(#instRimGlow)" strokeWidth="1.5" strokeLinecap="round" />
          )}

          {/* Instrument Header */}
          <g transform="translate(12, 12)">
            <rect
              x="0"
              y="0"
              width="78"
              height="18"
              rx="5"
              fill={colors.emeraldGlow}
              stroke={colors.emerald}
              strokeWidth="0.8"
            />
            <text
              x="39"
              y="12"
              textAnchor="middle"
              fill={colors.emerald}
              fontSize="8.5"
              fontWeight="900"
              fontFamily="ui-monospace, monospace"
            >
              INSTRUMENT 01
            </text>

            <text x="0" y="32" fill={colors.textPrimary} fontSize="11" fontWeight="800">
              Quoting Velocity Dial
            </text>
            <text x="0" y="44" fill={colors.textSecondary} fontSize="8" fontWeight="600">
              Equipment CPQ Platform
            </text>
          </g>

          {/* Semicircular Tachometer Arc & Graduation Ticks */}
          <g transform="translate(0, 0)">
            {/* Background Track Arc */}
            <path
              d="M 34 135 A 52 52 0 0 1 138 135"
              fill="none"
              stroke={isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.12)"}
              strokeWidth="11"
              strokeLinecap="round"
            />
            {/* Active Colored Velocity Arc */}
            <path
              d="M 34 135 A 52 52 0 0 1 138 135"
              fill="none"
              stroke="url(#speedDialArcGrad)"
              strokeWidth="8.5"
              strokeLinecap="round"
            />

            {/* Graduation Ticks (every 30 degrees) */}
            <line x1="34" y1="135" x2="42" y2="135" stroke={colors.rose} strokeWidth="1.5" />
            <line x1="43" y1="102" x2="49" y2="106" stroke={colors.amber} strokeWidth="1.5" />
            <line x1="66" y1="87" x2="70" y2="94" stroke={colors.amber} strokeWidth="1.5" />
            <line x1="86" y1="83" x2="86" y2="90" stroke={colors.emerald} strokeWidth="1.5" />
            <line x1="106" y1="87" x2="102" y2="94" stroke={colors.emerald} strokeWidth="1.5" />
            <line x1="129" y1="102" x2="123" y2="106" stroke={colors.emerald} strokeWidth="1.5" />
            <line x1="138" y1="135" x2="130" y2="135" stroke={colors.emerald} strokeWidth="1.5" />

            {/* Indicator Needle pivoting at (86, 135) */}
            <g
              className="roi-needle"
              style={{
                transformOrigin: "86px 135px"
              }}
            >
              {/* Pointer */}
              <line
                x1="86"
                y1="135"
                x2="86"
                y2="92"
                stroke={isLight ? "#0f172a" : "#ffffff"}
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <line
                x1="86"
                y1="92"
                x2="86"
                y2="88"
                stroke={colors.emerald}
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              {/* Metallic Central Boss */}
              <circle cx="86" cy="135" r="7" fill={colors.emerald} />
              <circle cx="86" cy="135" r="3.5" fill="#ffffff" />
            </g>

            {/* Velocity Extremity Markers */}
            <text x="22" y="147" fill={colors.rose} fontSize="7.5" fontWeight="800" fontFamily="ui-monospace, monospace">
              3-DAY BACKLOG
            </text>
            <text x="150" y="147" textAnchor="end" fill={colors.emerald} fontSize="7.5" fontWeight="800" fontFamily="ui-monospace, monospace">
              20 MINS (2.8x)
            </text>
          </g>

          {/* Digital Telemetry Readout Panel */}
          <g transform="translate(10, 158)">
            <rect
              x="0"
              y="0"
              width="152"
              height="36"
              rx="7"
              fill={colors.emeraldGlow}
              stroke={colors.emerald}
              strokeWidth="1"
            />
            <text
              x="76"
              y="16"
              textAnchor="middle"
              fill={colors.emerald}
              fontSize="11"
              fontWeight="900"
              fontFamily="ui-monospace, monospace"
            >
              20 MINS (2.8x SPEED)
            </text>
            <text
              x="76"
              y="28"
              textAnchor="middle"
              fill={colors.textSecondary}
              fontSize="7.5"
              fontWeight="700"
            >
              0% Margin Drift • Down from 72h
            </text>
          </g>
        </g>

        {/* ── 4. INSTRUMENT 2: GLASSMORPHIC AI PROPOSAL WATERFALL ── */}
        {/* Outer group strictly holds static translate(206, 56) */}
        <g id="inst-proposal-waterfall" transform="translate(206, 56)">
          {/* Card Container */}
          <rect
            x="0"
            y="0"
            width="188"
            height="204"
            rx="14"
            fill={activeImpactIndex === 1 ? (isLight ? "#ffffff" : "rgba(18, 32, 48, 0.95)") : colors.instBgIdle}
            stroke={activeImpactIndex === 1 ? colors.sky : colors.instBorderIdle}
            strokeWidth={activeImpactIndex === 1 ? "1.75" : "1"}
            filter={activeImpactIndex === 1 ? "url(#roiGlowFilter)" : undefined}
            style={{ transition: "all 0.3s ease" }}
          />

          {/* Top Specular Rim */}
          {activeImpactIndex === 1 && (
            <line x1="12" y1="1" x2="176" y2="1" stroke="url(#instRimGlow)" strokeWidth="1.5" strokeLinecap="round" />
          )}

          {/* Instrument Header */}
          <g transform="translate(14, 12)">
            <rect
              x="0"
              y="0"
              width="78"
              height="18"
              rx="5"
              fill={colors.skyGlow}
              stroke={colors.sky}
              strokeWidth="0.8"
            />
            <text
              x="39"
              y="12"
              textAnchor="middle"
              fill={colors.sky}
              fontSize="8.5"
              fontWeight="900"
              fontFamily="ui-monospace, monospace"
            >
              INSTRUMENT 02
            </text>

            <text x="0" y="32" fill={colors.textPrimary} fontSize="11" fontWeight="800">
              AI Proposal Waterfall
            </text>
            <text x="0" y="44" fill={colors.textSecondary} fontSize="8" fontWeight="600">
              Healthcare Services Case
            </text>
          </g>

          {/* 3D Glassmorphic Waterfall Columns */}
          <g transform="translate(18, 62)">
            {/* Column 1: Legacy Baseline (100% Drafting Time) */}
            <rect
              x="0"
              y="14"
              width="42"
              height="68"
              rx="6"
              fill="url(#wfBar1Grad)"
              stroke={isLight ? "#94a3b8" : "rgba(255,255,255,0.2)"}
              strokeWidth="1"
            />
            <text x="21" y="8" textAnchor="middle" fill={colors.textSecondary} fontSize="8" fontWeight="700">
              Legacy
            </text>
            <text x="21" y="48" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="900">
              100%
            </text>

            {/* Particle Cascade 1 to 2 */}
            <path
              d="M 44 48 L 54 48 L 54 58 L 58 58"
              stroke={colors.sky}
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="3 3"
              className="roi-waterfall-flow"
            />

            {/* Column 2: AARK RAG Automation (-60% / 82% Manual Cut) */}
            <rect
              x="58"
              y="42"
              width="44"
              height="40"
              rx="6"
              fill="url(#wfBar2Grad)"
              stroke={colors.sky}
              strokeWidth="1.3"
            />
            <text x="80" y="36" textAnchor="middle" fill={colors.sky} fontSize="9" fontWeight="900">
              -60%
            </text>
            <text x="80" y="66" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="900">
              40%
            </text>

            {/* Particle Cascade 2 to 3 */}
            <path
              d="M 104 62 L 112 62 L 112 36 L 116 36"
              stroke={colors.emerald}
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="3 3"
              className="roi-waterfall-flow"
            />

            {/* Column 3: Proposal Throughput (2x Volume) */}
            <rect
              x="116"
              y="18"
              width="38"
              height="64"
              rx="6"
              fill="url(#wfBar3Grad)"
              stroke={colors.emerald}
              strokeWidth="1.3"
            />
            <text x="135" y="12" textAnchor="middle" fill={colors.emerald} fontSize="9" fontWeight="900">
              2x
            </text>
            <text x="135" y="52" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="900">
              VOL
            </text>
          </g>

          {/* Digital Telemetry Readout Panel */}
          <g transform="translate(10, 158)">
            <rect
              x="0"
              y="0"
              width="168"
              height="36"
              rx="7"
              fill={colors.skyGlow}
              stroke={colors.sky}
              strokeWidth="1"
            />
            <text
              x="84"
              y="16"
              textAnchor="middle"
              fill={colors.sky}
              fontSize="11"
              fontWeight="900"
              fontFamily="ui-monospace, monospace"
            >
              -60% DRAFT // 2x THROUGHPUT
            </text>
            <text
              x="84"
              y="28"
              textAnchor="middle"
              fill={colors.textSecondary}
              fontSize="7.5"
              fontWeight="700"
            >
              82% RFP Cut • Production in 4 Wks
            </text>
          </g>
        </g>

        {/* ── 5. INSTRUMENT 3: 14-NODE ENTERPRISE CONSTELLATION MESH ── */}
        {/* Outer group strictly holds static translate(404, 56) */}
        <g id="inst-constellation-mesh" transform="translate(404, 56)">
          {/* Card Container */}
          <rect
            x="0"
            y="0"
            width="172"
            height="204"
            rx="14"
            fill={activeImpactIndex === 2 ? (isLight ? "#ffffff" : "rgba(26, 22, 44, 0.95)") : colors.instBgIdle}
            stroke={activeImpactIndex === 2 ? colors.indigo : colors.instBorderIdle}
            strokeWidth={activeImpactIndex === 2 ? "1.75" : "1"}
            filter={activeImpactIndex === 2 ? "url(#roiGlowFilter)" : undefined}
            style={{ transition: "all 0.3s ease" }}
          />

          {/* Top Specular Rim */}
          {activeImpactIndex === 2 && (
            <line x1="12" y1="1" x2="160" y2="1" stroke="url(#instRimGlow)" strokeWidth="1.5" strokeLinecap="round" />
          )}

          {/* Instrument Header */}
          <g transform="translate(12, 12)">
            <rect
              x="0"
              y="0"
              width="78"
              height="18"
              rx="5"
              fill={colors.indigoGlow}
              stroke={colors.indigo}
              strokeWidth="0.8"
            />
            <text
              x="39"
              y="12"
              textAnchor="middle"
              fill={colors.indigo}
              fontSize="8.5"
              fontWeight="900"
              fontFamily="ui-monospace, monospace"
            >
              INSTRUMENT 03
            </text>

            <text x="0" y="32" fill={colors.textPrimary} fontSize="11" fontWeight="800">
              14-Node Mesh
            </text>
            <text x="0" y="44" fill={colors.textSecondary} fontSize="8" fontWeight="600">
              Federated Hospital ERP
            </text>
          </g>

          {/* 14-Node Constellation Topology */}
          <g transform="translate(0, 0)">
            {/* Concentric Orbital Rings */}
            <circle cx="86" cy="110" r="48" stroke={colors.indigo} strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />
            <circle cx="86" cy="110" r="30" stroke={colors.indigo} strokeWidth="0.8" strokeDasharray="3 3" opacity="0.5" />

            {/* Inner Orbit (6 nodes) - Rotating */}
            <g className="roi-mesh-orbit-1">
              <circle cx="86" cy="80" r="3" fill={colors.sky} />
              <circle cx="112" cy="95" r="3" fill={colors.emerald} />
              <circle cx="112" cy="125" r="3" fill={colors.sky} />
              <circle cx="86" cy="140" r="3" fill={colors.emerald} />
              <circle cx="60" cy="125" r="3" fill={colors.sky} />
              <circle cx="60" cy="95" r="3" fill={colors.emerald} />

              {/* Internal Spoke Connectors */}
              <line x1="86" y1="80" x2="86" y2="110" stroke={colors.sky} strokeWidth="0.7" opacity="0.5" />
              <line x1="112" y1="95" x2="86" y2="110" stroke={colors.emerald} strokeWidth="0.7" opacity="0.5" />
              <line x1="112" y1="125" x2="86" y2="110" stroke={colors.sky} strokeWidth="0.7" opacity="0.5" />
              <line x1="86" y1="140" x2="86" y2="110" stroke={colors.emerald} strokeWidth="0.7" opacity="0.5" />
              <line x1="60" y1="125" x2="86" y2="110" stroke={colors.sky} strokeWidth="0.7" opacity="0.5" />
              <line x1="60" y1="95" x2="86" y2="110" stroke={colors.emerald} strokeWidth="0.7" opacity="0.5" />
            </g>

            {/* Outer Orbit (8 nodes) - Counter-Rotating */}
            <g className="roi-mesh-orbit-2">
              <circle cx="86" cy="62" r="3.2" fill={colors.indigo} />
              <circle cx="120" cy="76" r="3.2" fill={colors.gold} />
              <circle cx="134" cy="110" r="3.2" fill={colors.indigo} />
              <circle cx="120" cy="144" r="3.2" fill={colors.gold} />
              <circle cx="86" cy="158" r="3.2" fill={colors.indigo} />
              <circle cx="52" cy="144" r="3.2" fill={colors.gold} />
              <circle cx="38" cy="110" r="3.2" fill={colors.indigo} />
              <circle cx="52" cy="76" r="3.2" fill={colors.gold} />

              {/* Chord lines between outer nodes */}
              <line x1="86" y1="62" x2="120" y2="76" stroke={colors.indigo} strokeWidth="0.6" opacity="0.4" />
              <line x1="120" y1="76" x2="134" y2="110" stroke={colors.gold} strokeWidth="0.6" opacity="0.4" />
              <line x1="134" y1="110" x2="120" y2="144" stroke={colors.indigo} strokeWidth="0.6" opacity="0.4" />
              <line x1="120" y1="144" x2="86" y2="158" stroke={colors.gold} strokeWidth="0.6" opacity="0.4" />
              <line x1="86" y1="158" x2="52" y2="144" stroke={colors.indigo} strokeWidth="0.6" opacity="0.4" />
              <line x1="52" y1="144" x2="38" y2="110" stroke={colors.gold} strokeWidth="0.6" opacity="0.4" />
              <line x1="38" y1="110" x2="52" y2="76" stroke={colors.indigo} strokeWidth="0.6" opacity="0.4" />
              <line x1="52" y1="76" x2="86" y2="62" stroke={colors.gold} strokeWidth="0.6" opacity="0.4" />
            </g>

            {/* Central Unified Governed Ledger Core */}
            <circle cx="86" cy="110" r="14" fill="url(#meshCoreGrad)" stroke="#ffffff" strokeWidth="1.2" />
            <text x="86" y="114" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="900" fontFamily="ui-monospace, monospace">
              14
            </text>
          </g>

          {/* Digital Telemetry Readout Panel */}
          <g transform="translate(10, 158)">
            <rect
              x="0"
              y="0"
              width="152"
              height="36"
              rx="7"
              fill={colors.indigoGlow}
              stroke={colors.indigo}
              strokeWidth="1"
            />
            <text
              x="76"
              y="16"
              textAnchor="middle"
              fill={colors.indigo}
              fontSize="11"
              fontWeight="900"
              fontFamily="ui-monospace, monospace"
            >
              14 NODES // ZERO DRIFT
            </text>
            <text
              x="76"
              y="28"
              textAnchor="middle"
              fill={colors.textSecondary}
              fontSize="7.5"
              fontWeight="700"
            >
              Single Governed ERP Ledger
            </text>
          </g>
        </g>

        {/* ── 6. INSTRUMENT 4: LIVE STREAMING SPARKLINE TICKER (Bottom Full-Width) ── */}
        <g id="inst-streaming-sparkline" transform="translate(24, 270)">
          <rect
            x="0"
            y="0"
            width="552"
            height="66"
            rx="12"
            fill={colors.nodeBg}
            stroke={colors.nodeBorder}
            strokeWidth="1"
          />

          {/* Left Metric Callout */}
          <g transform="translate(16, 14)">
            <div className="flex flex-col">
              <text x="0" y="16" fill={colors.emerald} fontSize="16" fontWeight="900" fontFamily="ui-monospace, monospace">
                -11 HRS/WK
              </text>
              <text x="0" y="32" fill={colors.textPrimary} fontSize="9" fontWeight="800">
                Saved Per Finance Lead
              </text>
              <text x="0" y="44" fill={colors.textSecondary} fontSize="7.5" fontWeight="600">
                Zero manual spreadsheet reconcile
              </text>
            </div>
          </g>

          {/* Center Streaming Sparkline Waveform with Gradient Shading */}
          <g transform="translate(180, 8)">
            {/* Area Fill */}
            <path
              d="M 0 38 Q 25 10, 50 26 T 100 24 T 150 14 T 200 28 L 200 48 L 0 48 Z"
              fill="url(#sparklineAreaGrad)"
            />
            {/* Sine Sparkline Core */}
            <path
              d="M 0 38 Q 25 10, 50 26 T 100 24 T 150 14 T 200 28"
              fill="none"
              stroke={colors.emerald}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            {/* Flowing Pulse Track */}
            <path
              d="M 0 38 Q 25 10, 50 26 T 100 24 T 150 14 T 200 28"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.2"
              strokeDasharray="6 12"
              className="roi-sparkline-pulse"
            />

            {/* Peak Nodes */}
            <circle cx="25" cy="18" r="3.5" fill={colors.emerald} />
            <circle cx="25" cy="18" r="1.5" fill="#ffffff" />
            <circle cx="150" cy="14" r="3.5" fill={colors.emerald} />
            <circle cx="150" cy="14" r="1.5" fill="#ffffff" />

            {/* Sparkline Heartbeat Ticker Label */}
            <text
              x="100"
              y="46"
              textAnchor="middle"
              fill={colors.emerald}
              fontSize="7.5"
              fontWeight="800"
              fontFamily="ui-monospace, monospace"
            >
              $0 DOWNTIME • CONTINUOUS AUDIT HEARTBEAT
            </text>
          </g>

          {/* Right Metric Callout */}
          <g transform="translate(420, 14)">
            <text x="0" y="16" fill={colors.sky} fontSize="16" fontWeight="900" fontFamily="ui-monospace, monospace">
              -22% CLOUD
            </text>
            <text x="0" y="32" fill={colors.textPrimary} fontSize="9" fontWeight="800">
              Warehouse Infrastructure
            </text>
            <text x="0" y="44" fill={colors.textSecondary} fontSize="7.5" fontWeight="600">
              Snowflake compute optimization
            </text>
          </g>
        </g>

        {/* ── 7. FOOTER AUDITED STATEMENT BANNER ── */}
        <g id="roi-footer" transform="translate(24, 344)">
          <rect
            x="0"
            y="0"
            width="552"
            height="20"
            rx="6"
            fill={colors.nodeBg}
            stroke={colors.nodeBorder}
            strokeWidth="0.8"
          />
          <text
            x="276"
            y="13.5"
            textAnchor="middle"
            fill={colors.textSecondary}
            fontSize="8.5"
            fontWeight="700"
            fontFamily="ui-monospace, monospace"
            letterSpacing="0.04em"
          >
            VERIFIED OUTCOMES AUDITED ACROSS HEALTHCARE, INDUSTRIAL DISTRIBUTION & MULTI-ENTITY ENTERPRISE FINANCE
          </text>
        </g>
      </svg>
    </div>
  );
}
