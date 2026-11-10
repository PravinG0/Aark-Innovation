import React from "react";

/**
 * WhyAarkComparisonSvg - Section 2 Vector Illustration
 * "The Structural Contrast: Runaway Labyrinth vs. Precision Architect Highway"
 * 
 * Directly contrasts the traditional consultancy model with AARK:
 * - Left: Big-4 Bloat Model (Top-heavy pyramid, junior bench staffing, runaway dollar meter, tangled vendor lock-in piping).
 * - Center: Precision laser divider with "THE AARK DIFFERENCE" badge.
 * - Right: AARK Senior Architect Highway (Principal Cockpit, Locked Milestone Vault, Client-Owned Production Container).
 * - Interactive highlights driven by activePillar (0, 1, 2).
 * - Full Dark & Light theme support with WCAG AA compliant colors.
 */
export default function WhyAarkComparisonSvg({
  activePillar = 0, // 0: Direct Senior Leadership, 1: Fixed Scope & Predictability, 2: Production-Ready Software Assets
  theme = "dark",
  className = ""
}) {
  const isLight = theme === "light";

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
    skyGlow: isLight ? "rgba(2, 132, 199, 0.18)" : "rgba(56, 189, 248, 0.35)",
    emerald: isLight ? "#059669" : "#10b981",
    emeraldGlow: isLight ? "rgba(5, 150, 105, 0.18)" : "rgba(16, 185, 129, 0.35)",
    amber: isLight ? "#d97706" : "#f59e0b",
    amberGlow: isLight ? "rgba(217, 119, 6, 0.18)" : "rgba(245, 158, 11, 0.35)",
    rose: isLight ? "#e11d48" : "#f43f5e",
    roseGlow: isLight ? "rgba(225, 29, 72, 0.15)" : "rgba(244, 63, 94, 0.3)",
    indigo: isLight ? "#4f46e5" : "#818cf8",
    indigoGlow: isLight ? "rgba(79, 70, 229, 0.18)" : "rgba(129, 140, 248, 0.35)",
    slateMuted: isLight ? "#64748b" : "#475569"
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
            ? "drop-shadow(0 16px 36px rgba(2, 132, 199, 0.10))"
            : "drop-shadow(0 20px 48px rgba(16, 185, 129, 0.20))"
        }}
      >
        <defs>
          <style>{`
            @keyframes whyFlowPulse {
              to { stroke-dashoffset: -32; }
            }
            @keyframes whyTangleFlow {
              to { stroke-dashoffset: 40; }
            }
            @keyframes whyActiveBeacon {
              0%, 100% { opacity: 0.92; }
              50% { opacity: 1; filter: drop-shadow(0 0 6px rgba(2, 132, 199, 0.45)); }
            }
            .why-flow-fast {
              animation: whyFlowPulse 2s linear infinite;
            }
            .why-tangle-anim {
              animation: whyTangleFlow 4s linear infinite;
            }
            .why-beacon-pulse {
              animation: whyActiveBeacon 2s ease-in-out infinite;
            }
            @media (prefers-reduced-motion: reduce) {
              .why-flow-fast, .why-tangle-anim, .why-beacon-pulse {
                animation: none !important;
              }
            }
          `}</style>

          <linearGradient id="whyCardBg" x1="0" y1="0" x2="600" y2="380" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={colors.bgFrom} />
            <stop offset="100%" stopColor={colors.bgTo} />
          </linearGradient>

          <linearGradient id="whyLaserDivider" x1="0" y1="50" x2="0" y2="340" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor={colors.sky} stopOpacity="0.1" />
            <stop offset="30%" stopColor={colors.sky} stopOpacity="0.9" />
            <stop offset="70%" stopColor={colors.emerald} stopOpacity="0.9" />
            <stop offset="100%" stopColor={colors.emerald} stopOpacity="0.1" />
          </linearGradient>

          <filter id="whyGlow" x="-20%" y="-20%" width="140%" height="140%">
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
          fill="url(#whyCardBg)"
          stroke={colors.cardBorder}
          strokeWidth="1.5"
        />

        {/* Background Blueprint Grid Lines */}
        <g stroke={colors.gridStroke} strokeWidth="1">
          <line x1="10" y1="56" x2="590" y2="56" />
          <line x1="10" y1="334" x2="590" y2="334" />
          <line x1="150" y1="56" x2="150" y2="334" strokeDasharray="3 3" />
          <line x1="440" y1="56" x2="440" y2="334" strokeDasharray="3 3" />
        </g>

        {/* ── 2. TOP HUD HEADER ── */}
        <g id="why-top-hud">
          {/* Left Title: Big-4 Model */}
          <rect
            x="24"
            y="20"
            width="170"
            height="24"
            rx="12"
            fill={colors.nodeBg}
            stroke={colors.rose}
            strokeWidth="1"
          />
          <circle cx="36" cy="32" r="3.5" fill={colors.rose} />
          <text
            x="48"
            y="36"
            fill={colors.rose}
            fontSize="9"
            fontWeight="800"
            fontFamily="ui-monospace, monospace"
            letterSpacing="0.06em"
          >
            BIG-4 BLOAT MODEL
          </text>

          {/* Right Title: AARK Precision */}
          <rect
            x="406"
            y="20"
            width="170"
            height="24"
            rx="12"
            fill={colors.nodeBg}
            stroke={colors.emerald}
            strokeWidth="1"
          />
          <circle cx="418" cy="32" r="3.5" fill={colors.emerald} />
          <text
            x="430"
            y="36"
            fill={colors.emerald}
            fontSize="9"
            fontWeight="800"
            fontFamily="ui-monospace, monospace"
            letterSpacing="0.06em"
          >
            AARK SENIOR HIGHWAY
          </text>
        </g>

        {/* ── 3. LEFT ZONE: BIG-4 BLOAT MODEL (x: 20 to 280) ── */}
        <g id="big4-zone">
          <rect
            x="24"
            y="68"
            width="250"
            height="254"
            rx="16"
            fill={colors.nodeBg}
            stroke={isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.06)"}
            strokeWidth="1"
          />

          {/* Bloat Card 1: Junior Staffing */}
          <g id="bloat-card-1" transform="translate(32, 80)">
            <rect
              x="0"
              y="0"
              width="234"
              height="70"
              rx="12"
              fill={activePillar === 0 ? (isLight ? "#fff1f2" : "rgba(225, 29, 72, 0.15)") : (isLight ? "#ffffff" : "rgba(15, 23, 42, 0.5)")}
              stroke={activePillar === 0 ? colors.rose : colors.nodeBorder}
              strokeWidth={activePillar === 0 ? 1.5 : 1}
            />
            <rect x="10" y="12" width="26" height="26" rx="8" fill={colors.roseGlow} />
            <circle cx="23" cy="21" r="4.5" stroke={colors.rose} strokeWidth="1.5" />
            <path d="M16 31c0-2.5 3-4 7-4s7 1.5 7 4" stroke={colors.rose} strokeWidth="1.5" />
            <text x="44" y="22" fill={colors.rose} fontSize="10.5" fontWeight="800">
              Junior Bench Staffing
            </text>
            <text x="44" y="34" fill={colors.textSecondary} fontSize="8.5">
              Senior partners pitch, juniors bill
            </text>
            <rect x="44" y="44" width="132" height="14" rx="4" fill={colors.roseGlow} />
            <text x="110" y="54" textAnchor="middle" fill={colors.rose} fontSize="8" fontWeight="800">
              LEARNING ON YOUR DIME
            </text>
          </g>

          {/* Bloat Card 2: Surprise Billing */}
          <g id="bloat-card-2" transform="translate(32, 162)">
            <rect
              x="0"
              y="0"
              width="234"
              height="70"
              rx="12"
              fill={activePillar === 1 ? (isLight ? "#fffbeb" : "rgba(245, 158, 11, 0.15)") : (isLight ? "#ffffff" : "rgba(15, 23, 42, 0.5)")}
              stroke={activePillar === 1 ? colors.amber : colors.nodeBorder}
              strokeWidth={activePillar === 1 ? 1.5 : 1}
            />
            <rect x="10" y="12" width="26" height="26" rx="8" fill={colors.amberGlow} />
            <circle cx="23" cy="25" r="7" stroke={colors.amber} strokeWidth="1.5" />
            <path d="M23 21v4l3 2" stroke={colors.amber} strokeWidth="1.5" strokeLinecap="round" />
            <text x="44" y="22" fill={colors.amber} fontSize="10.5" fontWeight="800">
              Open-Ended Hourly Creep
            </text>
            <text x="44" y="34" fill={colors.textSecondary} fontSize="8.5">
              Uncontrolled runaway billing
            </text>
            <rect x="44" y="44" width="120" height="14" rx="4" fill={colors.amberGlow} />
            <text x="104" y="54" textAnchor="middle" fill={colors.amber} fontSize="8" fontWeight="800">
              SURPRISE INVOICES
            </text>
          </g>

          {/* Bloat Card 3: Vendor Lock-in */}
          <g id="bloat-card-3" transform="translate(32, 244)">
            <rect
              x="0"
              y="0"
              width="234"
              height="70"
              rx="12"
              fill={activePillar === 2 ? (isLight ? "#fff1f2" : "rgba(225, 29, 72, 0.15)") : (isLight ? "#ffffff" : "rgba(15, 23, 42, 0.5)")}
              stroke={activePillar === 2 ? colors.rose : colors.nodeBorder}
              strokeWidth={activePillar === 2 ? 1.5 : 1}
            />
            <rect x="10" y="12" width="26" height="26" rx="8" fill={colors.roseGlow} />
            <rect x="17" y="23" width="12" height="10" rx="2" stroke={colors.rose} strokeWidth="1.5" />
            <path d="M20 23v-3a3 3 0 0 1 6 0v3" stroke={colors.rose} strokeWidth="1.5" />
            <text x="44" y="22" fill={colors.textPrimary} fontSize="10.5" fontWeight="800">
              Proprietary Code Lock-In
            </text>
            <text x="44" y="34" fill={colors.textSecondary} fontSize="8.5">
              Black-box scripts & vendor dependency
            </text>
            <rect x="44" y="44" width="125" height="14" rx="4" fill={colors.roseGlow} />
            <text x="106" y="54" textAnchor="middle" fill={colors.rose} fontSize="8" fontWeight="800">
              VENDOR CAPTIVITY
            </text>
          </g>
        </g>

        {/* ── 4. CENTER: PRECISION LASER DIVIDER ── */}
        <g id="center-laser-divider">
          {/* Glowing Vertical Laser Line */}
          <line
            x1="295"
            y1="56"
            x2="295"
            y2="334"
            stroke="url(#whyLaserDivider)"
            strokeWidth="2.5"
            filter="url(#whyGlow)"
          />

          {/* The AARK Difference Badge */}
          <g transform="translate(245, 178)">
            <rect
              x="0"
              y="0"
              width="100"
              height="34"
              rx="8"
              fill={isLight ? "#ffffff" : "#0f172a"}
              stroke={colors.sky}
              strokeWidth="1.5"
              filter="url(#whyGlow)"
            />
            <text
              x="50"
              y="15"
              textAnchor="middle"
              fill={colors.textSecondary}
              fontSize="7"
              fontWeight="800"
              letterSpacing="0.1em"
            >
              THE ARCHITECT
            </text>
            <text
              x="50"
              y="27"
              textAnchor="middle"
              fill={colors.sky}
              fontSize="9"
              fontWeight="900"
              letterSpacing="0.08em"
            >
              DIFFERENCE
            </text>
          </g>
        </g>

        {/* ── 5. RIGHT ZONE: AARK SENIOR ARCHITECT HIGHWAY (x: 310 to 575) ── */}
        <g id="aark-highway">
          <rect
            x="315"
            y="68"
            width="260"
            height="254"
            rx="16"
            fill={colors.nodeBg}
            stroke={isLight ? "#e2e8f0" : "rgba(255, 255, 255, 0.06)"}
            strokeWidth="1"
          />

          {/* Node 1: Senior Architect Helm (Pillar 0) */}
          <g
            id="node-senior-helm"
            transform="translate(328, 80)"
            className={activePillar === 0 ? "why-beacon-pulse" : ""}
          >
            <rect
              x="0"
              y="0"
              width="234"
              height="70"
              rx="12"
              fill={activePillar === 0 ? (isLight ? "#ffffff" : "#1e293b") : colors.nodeBg}
              stroke={activePillar === 0 ? colors.sky : colors.nodeBorder}
              strokeWidth={activePillar === 0 ? 2 : 1}
              filter={activePillar === 0 ? "url(#whyGlow)" : undefined}
            />
            {/* Helm Cockpit Icon */}
            <rect x="12" y="12" width="26" height="26" rx="8" fill={colors.skyGlow} />
            <circle cx="25" cy="22" r="5" stroke={colors.sky} strokeWidth="1.5" />
            <path d="M18 33c0-3.5 3-5 7-5s7 1.5 7 5" stroke={colors.sky} strokeWidth="1.5" />
            <text x="46" y="22" fill={colors.textPrimary} fontSize="11" fontWeight="800">
              1. Direct Senior Leadership
            </text>
            <text x="46" y="34" fill={colors.textSecondary} fontSize="8.5">
              Exact architects scope AND execute code
            </text>
            <rect x="46" y="44" width="125" height="14" rx="4" fill={colors.skyGlow} />
            <text x="108" y="54" textAnchor="middle" fill={colors.sky} fontSize="8" fontWeight="800">
              ZERO BAIT-AND-SWITCH
            </text>
          </g>

          {/* Inter-Node Highway Conduit 1 */}
          <line
            x1="445"
            y1="150"
            x2="445"
            y2="162"
            stroke={colors.sky}
            strokeWidth="3"
            strokeDasharray="4 2"
            className="why-flow-fast"
          />

          {/* Node 2: Locked Milestone Vault (Pillar 1) */}
          <g
            id="node-milestone-vault"
            transform="translate(328, 162)"
            className={activePillar === 1 ? "why-beacon-pulse" : ""}
          >
            <rect
              x="0"
              y="0"
              width="234"
              height="70"
              rx="12"
              fill={activePillar === 1 ? (isLight ? "#ffffff" : "#1e293b") : colors.nodeBg}
              stroke={activePillar === 1 ? colors.emerald : colors.nodeBorder}
              strokeWidth={activePillar === 1 ? 2 : 1}
              filter={activePillar === 1 ? "url(#whyGlow)" : undefined}
            />
            {/* Padlock / Vault Icon */}
            <rect x="12" y="12" width="26" height="26" rx="8" fill={colors.emeraldGlow} />
            <rect x="19" y="24" width="12" height="10" rx="2" stroke={colors.emerald} strokeWidth="1.5" />
            <path d="M22 24v-4a3 3 0 0 1 6 0v4" stroke={colors.emerald} strokeWidth="1.5" />
            <text x="46" y="22" fill={colors.textPrimary} fontSize="11" fontWeight="800">
              2. Fixed Scope & Predictability
            </text>
            <text x="46" y="34" fill={colors.textSecondary} fontSize="8.5">
              Milestone delivery with locked timeline
            </text>
            <rect x="46" y="44" width="120" height="14" rx="4" fill={colors.emeraldGlow} />
            <text x="106" y="54" textAnchor="middle" fill={colors.emerald} fontSize="8" fontWeight="800">
              $0 SURPRISE METERS
            </text>
          </g>

          {/* Inter-Node Highway Conduit 2 */}
          <line
            x1="445"
            y1="232"
            x2="445"
            y2="244"
            stroke={colors.emerald}
            strokeWidth="3"
            strokeDasharray="4 2"
            className="why-flow-fast"
          />

          {/* Node 3: Client-Owned Production Container (Pillar 2) */}
          <g
            id="node-client-assets"
            transform="translate(328, 244)"
            className={activePillar === 2 ? "why-beacon-pulse" : ""}
          >
            <rect
              x="0"
              y="0"
              width="234"
              height="70"
              rx="12"
              fill={activePillar === 2 ? (isLight ? "#ffffff" : "#1e293b") : colors.nodeBg}
              stroke={activePillar === 2 ? colors.amber : colors.nodeBorder}
              strokeWidth={activePillar === 2 ? 2 : 1}
              filter={activePillar === 2 ? "url(#whyGlow)" : undefined}
            />
            {/* Code Repository / Ownership Shield Icon */}
            <rect x="12" y="12" width="26" height="26" rx="8" fill={colors.amberGlow} />
            <path d="M19 22l4-4-4-4M26 26h5" stroke={colors.amber} strokeWidth="1.5" strokeLinecap="round" />
            <text x="46" y="22" fill={colors.textPrimary} fontSize="11" fontWeight="800">
              3. Production-Ready Software
            </text>
            <text x="46" y="34" fill={colors.textSecondary} fontSize="8.5">
              100% automated CI/CD codebases you own
            </text>
            <rect x="46" y="44" width="120" height="14" rx="4" fill={colors.amberGlow} />
            <text x="106" y="54" textAnchor="middle" fill={colors.amber} fontSize="8" fontWeight="800">
              100% CLIENT OWNED
            </text>
          </g>
        </g>

        {/* ── 6. BOTTOM COMPARISON SUMMARY BAR ── */}
        <g id="why-bottom-bar">
          <text
            x="300"
            y="352"
            textAnchor="middle"
            fill={colors.textSecondary}
            fontSize="9"
            fontWeight="600"
            fontFamily="system-ui, -apple-system, sans-serif"
          >
            AARK Delivery Philosophy: Autonomous Internal Teams • Zero Dependency Trap • Transparent Fixed Scope
          </text>
        </g>
      </svg>
    </div>
  );
}
