import React from "react";

/**
 * CtaRoadmapSvg - Section 5 Vector Illustration
 * "Modernization Runway & 3-Stage Flight Plan"
 * 
 * Features 3 sequential deployment pods along a fiber optic modernization runway:
 * - Stage 1 (translate 45, 90): 30-Min Architecture Discovery (Direct Senior Access, Scope Discovery, Zero Sales Pressure)
 * - Stage 2 (translate 225, 90): Fixed-Scope Blueprint & Milestones ($0 Surprise Billing Guarantee, Defined Deliverables)
 * - Stage 3 (translate 405, 90): Production Rollout & Client Handover (100% Client-Owned Codebase, Team Enablement)
 * 
 * ARCHITECTURAL INTEGRITY GUARANTEE:
 * Positional translations are strictly isolated to outer static <g transform="translate(x, y)"> containers.
 * Keyframe animations strictly modulate non-destructive properties (opacity, stroke-dashoffset, filter)
 * with ZERO transform overrides, permanently eliminating the Stage 1 & 3 collision/overlapping bug.
 * 
 * Full Dark & Light theme support with crisp contrast and motion-safe animations.
 */
export default function CtaRoadmapSvg({ theme = "dark", className = "" }) {
  const isLight = theme === "light";

  const colors = {
    // Canvas background
    bgFrom: isLight ? "#ffffff" : "#0f1118",
    bgTo: isLight ? "#f8fafc" : "#07080c",
    cardBorder: isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.10)",
    gridStroke: isLight ? "rgba(2, 132, 199, 0.06)" : "rgba(99, 102, 241, 0.05)",

    // Typography
    textPrimary: isLight ? "#0f172a" : "#f8fafc",
    textSecondary: isLight ? "#475569" : "#94a3b8",
    textMuted: isLight ? "#64748b" : "#64748b",

    // Pod Geometry & Backdrops
    podBg: isLight ? "rgba(255, 255, 255, 0.95)" : "rgba(18, 22, 34, 0.75)",
    nodeBg: isLight ? "#ffffff" : "rgba(255, 255, 255, 0.04)",
    nodeBorder: isLight ? "#cbd5e1" : "rgba(255, 255, 255, 0.10)",

    // Stage Accents
    sky: isLight ? "#0284c7" : "#38bdf8",
    skyGlow: isLight ? "rgba(2, 132, 199, 0.18)" : "rgba(56, 189, 248, 0.35)",
    emerald: isLight ? "#059669" : "#10b981",
    emeraldGlow: isLight ? "rgba(5, 150, 105, 0.18)" : "rgba(16, 185, 129, 0.35)",
    indigo: isLight ? "#4f46e5" : "#818cf8",
    indigoGlow: isLight ? "rgba(79, 70, 229, 0.18)" : "rgba(129, 140, 248, 0.35)",

    runwayTrack: isLight ? "rgba(148, 163, 184, 0.30)" : "rgba(255, 255, 255, 0.12)"
  };

  return (
    <div className={`w-full h-full flex items-center justify-center overflow-visible ${className}`}>
      <svg
        viewBox="0 0 600 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[340px] overflow-visible select-none"
        style={{
          filter: isLight
            ? "drop-shadow(0 16px 36px rgba(2, 132, 199, 0.10))"
            : "drop-shadow(0 20px 48px rgba(99, 102, 241, 0.25))"
        }}
      >
        <defs>
          <style>{`
            @keyframes roadmapDashFlow {
              to { stroke-dashoffset: -40; }
            }
            @keyframes beaconGlowPulse {
              0%, 100% { opacity: 0.45; }
              50% { opacity: 1; }
            }
            @keyframes podSpecularGlow {
              0%, 100% { opacity: 0.85; }
              50% { opacity: 1; }
            }
            .flow-runway-line {
              animation: roadmapDashFlow 2s linear infinite;
            }
            .beacon-pulse-dot {
              animation: beaconGlowPulse 2.4s ease-in-out infinite;
            }
            .pod-specular {
              animation: podSpecularGlow 3s ease-in-out infinite;
            }
            @media (prefers-reduced-motion: reduce) {
              .flow-runway-line, .beacon-pulse-dot, .pod-specular {
                animation: none !important;
              }
            }
          `}</style>

          {/* Card Canvas Gradient */}
          <linearGradient id="ctaCardCanvasBg" x1="0" y1="0" x2="600" y2="340" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={colors.bgFrom} />
            <stop offset="100%" stopColor={colors.bgTo} />
          </linearGradient>

          {/* Runway Fiber Optic Gradient */}
          <linearGradient id="runwayPhaseGrad" x1="60" y1="170" x2="540" y2="170" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={colors.sky} />
            <stop offset="50%" stopColor={colors.emerald} />
            <stop offset="100%" stopColor={colors.indigo} />
          </linearGradient>

          {/* Pod 2.5D Top Specular Rim */}
          <linearGradient id="podTopSpecular" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="50%" stopColor="#ffffff" stopOpacity={isLight ? "0.9" : "0.65"} />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="ctaGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
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
          height="324"
          rx="22"
          fill="url(#ctaCardCanvasBg)"
          stroke={colors.cardBorder}
          strokeWidth="1.5"
        />

        {/* Technical Coordinate Grid */}
        <g stroke={colors.gridStroke} strokeWidth="1">
          <line x1="8" y1="68" x2="592" y2="68" strokeDasharray="3 3" />
          <line x1="8" y1="180" x2="592" y2="180" strokeDasharray="3 3" />
          <line x1="8" y1="280" x2="592" y2="280" strokeDasharray="3 3" />
          <line x1="200" y1="8" x2="200" y2="332" strokeDasharray="3 3" />
          <line x1="400" y1="8" x2="400" y2="332" strokeDasharray="3 3" />
        </g>

        {/* ── 2. TOP STATUS HUD ── */}
        <g id="cta-top-hud" transform="translate(24, 20)">
          <rect
            x="0"
            y="0"
            width="552"
            height="32"
            rx="10"
            fill={colors.nodeBg}
            stroke={colors.nodeBorder}
            strokeWidth="1"
          />
          <circle cx="20" cy="16" r="4.5" fill={colors.emerald} className="beacon-pulse-dot" />
          <text
            x="34"
            y="20"
            fill={colors.textPrimary}
            fontSize="10"
            fontFamily="ui-monospace, monospace"
            fontWeight="800"
            letterSpacing="0.06em"
          >
            AARK MODERNIZATION BLUEPRINT // 3-STAGE FLIGHT PLAN
          </text>
          <text
            x="536"
            y="20"
            fill={colors.emerald}
            fontSize="9"
            fontFamily="ui-monospace, monospace"
            fontWeight="800"
            textAnchor="end"
          >
            ACTIVE ROADMAP
          </text>
        </g>

        {/* ── 3. CONNECTING RUNWAY & FIBER OPTIC CONDUIT ── */}
        <g id="runway-pipeline">
          {/* Base Structural Guidance Track */}
          <line
            x1="110"
            y1="165"
            x2="490"
            y2="165"
            stroke={colors.runwayTrack}
            strokeWidth="4"
            strokeDasharray="6 6"
            strokeLinecap="round"
          />
          {/* Animated Energy Flow Core */}
          <line
            x1="110"
            y1="165"
            x2="490"
            y2="165"
            stroke="url(#runwayPhaseGrad)"
            strokeWidth="2.5"
            strokeDasharray="10 10"
            strokeLinecap="round"
            className="flow-runway-line"
            filter="url(#ctaGlowFilter)"
          />

          {/* Runway Arrow Chevrons */}
          <path d="M 200 162 L 204 165 L 200 168" stroke={colors.sky} strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <path d="M 380 162 L 384 165 L 380 168" stroke={colors.emerald} strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </g>

        {/* ── 4. STAGE 1: 30-MIN ARCHITECTURE DISCOVERY ── */}
        {/* CRITICAL: Outer group strictly holds static translate(45, 76) without CSS transform */}
        <g id="stage-1-discovery" transform="translate(45, 76)">
          {/* Outer Launch Pod with 2.5D Frosting */}
          <rect
            x="0"
            y="0"
            width="150"
            height="188"
            rx="16"
            fill={colors.podBg}
            stroke={colors.sky}
            strokeWidth="1.75"
            filter="url(#ctaGlowFilter)"
          />

          {/* Specular Top Rim */}
          <line x1="12" y1="1" x2="138" y2="1" stroke="url(#podTopSpecular)" strokeWidth="1.5" strokeLinecap="round" />

          {/* Stage Badge & Beacon */}
          <g transform="translate(12, 12)">
            <rect x="0" y="0" width="56" height="20" rx="6" fill={colors.sky} />
            <text
              x="28"
              y="14"
              fill="#ffffff"
              fontSize="9"
              fontWeight="900"
              textAnchor="middle"
              fontFamily="ui-monospace, monospace"
            >
              STAGE 1
            </text>
            <circle cx="114" cy="10" r="4.5" fill={colors.sky} className="beacon-pulse-dot" />
          </g>

          {/* Node Icon Circle: Radar Dish / Discovery Compass */}
          <g transform="translate(75, 64)">
            <circle
              cx="0"
              cy="0"
              r="22"
              fill={isLight ? "rgba(2, 132, 199, 0.12)" : "rgba(56, 189, 248, 0.15)"}
              stroke={colors.sky}
              strokeWidth="1.5"
            />
            {/* Concentric radar rings */}
            <circle cx="0" cy="0" r="14" stroke={colors.sky} strokeWidth="1" strokeDasharray="3 2" opacity="0.6" />
            <circle cx="0" cy="0" r="5" fill={colors.sky} />
            <line x1="0" y1="-14" x2="0" y2="14" stroke={colors.sky} strokeWidth="1" opacity="0.4" />
            <line x1="-14" y1="0" x2="14" y2="0" stroke={colors.sky} strokeWidth="1" opacity="0.4" />
          </g>

          {/* Stage Narrative */}
          <text x="75" y="104" fill={colors.textPrimary} fontSize="12" fontWeight="800" textAnchor="middle">
            Architecture Call
          </text>
          <text x="75" y="118" fill={colors.sky} fontSize="10" fontWeight="700" textAnchor="middle">
            30-Min Discovery
          </text>

          <line x1="18" y1="128" x2="132" y2="128" stroke={colors.nodeBorder} strokeWidth="1" />

          <text x="75" y="142" fill={colors.textSecondary} fontSize="8.5" fontWeight="600" textAnchor="middle">
            Direct Senior Architects
          </text>
          <text x="75" y="154" fill={colors.textSecondary} fontSize="8.5" fontWeight="600" textAnchor="middle">
            Zero Sales Overhead
          </text>

          {/* Delivery Badge */}
          <g transform="translate(14, 162)">
            <rect x="0" y="0" width="122" height="18" rx="5" fill={colors.skyGlow} />
            <text
              x="61"
              y="12"
              textAnchor="middle"
              fill={colors.sky}
              fontSize="7.5"
              fontWeight="800"
              fontFamily="ui-monospace, monospace"
            >
              ZERO SALES BENCH
            </text>
          </g>
        </g>

        {/* ── 5. STAGE 2: FIXED-SCOPE BLUEPRINT & VAULT ── */}
        {/* CRITICAL: Outer group strictly holds static translate(225, 76) without CSS transform */}
        <g id="stage-2-blueprint" transform="translate(225, 76)">
          {/* Outer Launch Pod with 2.5D Frosting */}
          <rect
            x="0"
            y="0"
            width="150"
            height="188"
            rx="16"
            fill={colors.podBg}
            stroke={colors.emerald}
            strokeWidth="1.75"
            filter="url(#ctaGlowFilter)"
          />

          {/* Specular Top Rim */}
          <line x1="12" y1="1" x2="138" y2="1" stroke="url(#podTopSpecular)" strokeWidth="1.5" strokeLinecap="round" />

          {/* Stage Badge & Beacon */}
          <g transform="translate(12, 12)">
            <rect x="0" y="0" width="56" height="20" rx="6" fill={colors.emerald} />
            <text
              x="28"
              y="14"
              fill="#ffffff"
              fontSize="9"
              fontWeight="900"
              textAnchor="middle"
              fontFamily="ui-monospace, monospace"
            >
              STAGE 2
            </text>
            <circle cx="114" cy="10" r="4.5" fill={colors.emerald} className="beacon-pulse-dot" />
          </g>

          {/* Node Icon Circle: Security Vault Shield */}
          <g transform="translate(75, 64)">
            <circle
              cx="0"
              cy="0"
              r="22"
              fill={isLight ? "rgba(5, 150, 105, 0.12)" : "rgba(16, 185, 129, 0.15)"}
              stroke={colors.emerald}
              strokeWidth="1.5"
            />
            {/* Shield Outline */}
            <path
              d="M 0 -11 L 9 -7 L 9 3 C 9 9 0 13 0 13 C 0 13 -9 9 -9 3 L -9 -7 Z"
              fill={colors.emerald}
              stroke="#ffffff"
              strokeWidth="1"
            />
            {/* Center Check */}
            <path d="M -3 2 L -1 4 L 4 -1" stroke="#ffffff" strokeWidth="1.3" fill="none" strokeLinecap="round" />
          </g>

          {/* Stage Narrative */}
          <text x="75" y="104" fill={colors.textPrimary} fontSize="12" fontWeight="800" textAnchor="middle">
            Scope & Milestones
          </text>
          <text x="75" y="118" fill={colors.emerald} fontSize="10" fontWeight="700" textAnchor="middle">
            Fixed Scope Guarantee
          </text>

          <line x1="18" y1="128" x2="132" y2="128" stroke={colors.nodeBorder} strokeWidth="1" />

          <text x="75" y="142" fill={colors.textSecondary} fontSize="8.5" fontWeight="600" textAnchor="middle">
            $0 Surprise Metered Bills
          </text>
          <text x="75" y="154" fill={colors.textSecondary} fontSize="8.5" fontWeight="600" textAnchor="middle">
            Milestone Acceptance
          </text>

          {/* Delivery Badge */}
          <g transform="translate(14, 162)">
            <rect x="0" y="0" width="122" height="18" rx="5" fill={colors.emeraldGlow} />
            <text
              x="61"
              y="12"
              textAnchor="middle"
              fill={colors.emerald}
              fontSize="7.5"
              fontWeight="800"
              fontFamily="ui-monospace, monospace"
            >
              FIXED PRICING VAULT
            </text>
          </g>
        </g>

        {/* ── 6. STAGE 3: PRODUCTION ROLLOUT & HANDOVER ── */}
        {/* CRITICAL: Outer group strictly holds static translate(405, 76) without CSS transform */}
        <g id="stage-3-rollout" transform="translate(405, 76)">
          {/* Outer Launch Pod with 2.5D Frosting */}
          <rect
            x="0"
            y="0"
            width="150"
            height="188"
            rx="16"
            fill={colors.podBg}
            stroke={colors.indigo}
            strokeWidth="1.75"
            filter="url(#ctaGlowFilter)"
          />

          {/* Specular Top Rim */}
          <line x1="12" y1="1" x2="138" y2="1" stroke="url(#podTopSpecular)" strokeWidth="1.5" strokeLinecap="round" />

          {/* Stage Badge & Beacon */}
          <g transform="translate(12, 12)">
            <rect x="0" y="0" width="56" height="20" rx="6" fill={colors.indigo} />
            <text
              x="28"
              y="14"
              fill="#ffffff"
              fontSize="9"
              fontWeight="900"
              textAnchor="middle"
              fontFamily="ui-monospace, monospace"
            >
              STAGE 3
            </text>
            <circle cx="114" cy="10" r="4.5" fill={colors.indigo} className="beacon-pulse-dot" />
          </g>

          {/* Node Icon Circle: Rocket / Code Repository Launch */}
          <g transform="translate(75, 64)">
            <circle
              cx="0"
              cy="0"
              r="22"
              fill={isLight ? "rgba(79, 70, 229, 0.12)" : "rgba(129, 140, 248, 0.15)"}
              stroke={colors.indigo}
              strokeWidth="1.5"
            />
            {/* Rocket Silhouette */}
            <path
              d="M 0 -12 C 4 -7 5 3 5 8 L -5 8 C -5 3 -4 -7 0 -12 Z"
              fill={colors.indigo}
            />
            <path d="M -5 5 L -9 9 L -5 9 Z" fill={colors.indigo} />
            <path d="M 5 5 L 9 9 L 5 9 Z" fill={colors.indigo} />
            <circle cx="0" cy="-2" r="2" fill="#ffffff" />
            <path d="M -2 9 L 0 13 L 2 9 Z" fill={colors.amber} />
          </g>

          {/* Stage Narrative */}
          <text x="75" y="104" fill={colors.textPrimary} fontSize="12" fontWeight="800" textAnchor="middle">
            Production Rollout
          </text>
          <text x="75" y="118" fill={colors.indigo} fontSize="10" fontWeight="700" textAnchor="middle">
            100% Client Handover
          </text>

          <line x1="18" y1="128" x2="132" y2="128" stroke={colors.nodeBorder} strokeWidth="1" />

          <text x="75" y="142" fill={colors.textSecondary} fontSize="8.5" fontWeight="600" textAnchor="middle">
            Zero Vendor Lock-In
          </text>
          <text x="75" y="154" fill={colors.textSecondary} fontSize="8.5" fontWeight="600" textAnchor="middle">
            Client Team Self-Sufficiency
          </text>

          {/* Delivery Badge */}
          <g transform="translate(14, 162)">
            <rect x="0" y="0" width="122" height="18" rx="5" fill={colors.indigoGlow} />
            <text
              x="61"
              y="12"
              textAnchor="middle"
              fill={colors.indigo}
              fontSize="7.5"
              fontWeight="800"
              fontFamily="ui-monospace, monospace"
            >
              NO VENDOR LOCK-IN
            </text>
          </g>
        </g>

        {/* ── 7. FOOTER TRUST METRICS RIBBON ── */}
        <g id="cta-footer" transform="translate(24, 280)">
          <rect
            x="0"
            y="0"
            width="552"
            height="32"
            rx="8"
            fill={colors.nodeBg}
            stroke={colors.nodeBorder}
            strokeWidth="1"
          />
          <text
            x="24"
            y="20"
            fill={colors.sky}
            fontSize="9.5"
            fontWeight="900"
            fontFamily="ui-monospace, monospace"
          >
            ESTIMATED TTM: 4-6 WEEKS
          </text>
          <text
            x="276"
            y="20"
            fill={colors.emerald}
            fontSize="9.5"
            fontWeight="900"
            textAnchor="middle"
            fontFamily="ui-monospace, monospace"
          >
            100% SENIOR ARCHITECT EXECUTED
          </text>
          <text
            x="528"
            y="20"
            fill={colors.indigo}
            fontSize="9.5"
            fontWeight="900"
            textAnchor="end"
            fontFamily="ui-monospace, monospace"
          >
            FULL CODEBASE OWNERSHIP
          </text>
        </g>
      </svg>
    </div>
  );
}
