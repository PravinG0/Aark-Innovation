import React, { useState, useEffect } from "react";

/**
 * AarkModernizationCoreSvg - Futuristic, high-fidelity vector representation
 * of the AARK Innovations Enterprise Modernization Engine & AI Data Fabric Core.
 * 
 * Features:
 * - Isometric quantum/silicon processor housing with metallic chamfer and circuit paths
 * - Concentric orbiting data rings: Oracle ERP Cloud, Grounded AI Data Fabric, Workflow Automation
 * - Holographic HUD telemetry screen with live stats synchronized to the current page section
 * - Concentric animated energy pulses, laser data conduits, and particle emitters
 * - Supports both dark mode (cyan/blue/indigo glow) and light mode (sky/slate/cobalt)
 * - Interactive: click to trigger a burst pulse across all telemetry nodes!
 */
export default function AarkModernizationCoreSvg({
  activeSection = 0, // 0: Hero, 1: Why AARK, 2: Practices, 3: Case Studies, 4: Contact/CTA
  theme = "dark",
  tiltX = 0,
  tiltY = 0,
  isPulsing = false,
  onTriggerPulse,
  className = ""
}) {
  const isLight = theme === "light";
  const [internalPulse, setInternalPulse] = useState(false);
  const [telemetry, setTelemetry] = useState({
    mode: "MODERNIZATION CORE",
    status: "OPTIMAL • 4 NODES",
    primaryMetric: "-60%",
    metricLabel: "RFP DRAFTING TIME",
    node1: "ORACLE FUSION",
    node2: "GROUNDED AI",
    node3: "CLOUD AUTOMATION",
    color: "#0284c7"
  });

  // Synchronize telemetry with the current section being scrolled
  useEffect(() => {
    switch (activeSection) {
      case 0: // Hero section
        setTelemetry({
          mode: "ENTERPRISE CORE",
          status: "SYSTEM READY",
          primaryMetric: "-60%",
          metricLabel: "RFP DRAFTING TIME",
          node1: "ORACLE FUSION",
          node2: "DATA FABRIC",
          node3: "AUTOMATION",
          color: "#0284c7"
        });
        break;
      case 1: // Why AARK section
        setTelemetry({
          mode: "PRINCIPAL ARCHITECTS",
          status: "100% SENIOR LED",
          primaryMetric: "$0",
          metricLabel: "SURPRISE BILLING",
          node1: "FIXED SCOPE",
          node2: "ZERO DRIFT",
          node3: "DIRECT ACCESS",
          color: "#10b981"
        });
        break;
      case 2: // Practices section
        setTelemetry({
          mode: "TECHNICAL MASTERY",
          status: "3 PILLARS ACTIVE",
          primaryMetric: "OIC",
          metricLabel: "ORACLE CLOUD SYNC",
          node1: "FUSION & EBS",
          node2: "SNOWFLAKE / DBT",
          node3: "BEDROCK / CLAUDE",
          color: "#0ea5e9"
        });
        break;
      case 3: // Case studies / Results
        setTelemetry({
          mode: "VERIFIED IMPACT",
          status: "ENTERPRISE SCALE",
          primaryMetric: "20 MIN",
          metricLabel: "QUOTE TURNAROUND",
          node1: "MULTI-ENTITY",
          node2: "HEALTHCARE",
          node3: "DISTRIBUTORS",
          color: "#f59e0b"
        });
        break;
      case 4: // Contact / CTA
        setTelemetry({
          mode: "READY FOR ROLLOUT",
          status: "30-MIN DISCOVERY",
          primaryMetric: "100%",
          metricLabel: "PREDICTABILITY",
          node1: "FORT MILL, SC",
          node2: "PRINCIPAL CONSULT",
          node3: "ZERO OVERHEAD",
          color: "#6366f1"
        });
        break;
      default:
        break;
    }
  }, [activeSection]);

  const handleManualPulse = () => {
    setInternalPulse(true);
    if (onTriggerPulse) onTriggerPulse();
    setTimeout(() => setInternalPulse(false), 1400);
  };

  const activePulse = isPulsing || internalPulse;

  return (
    <div
      className={`aark-modernization-core-svg-root ${className}`}
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
        transition: "transform 0.25s ease-out",
        userSelect: "none"
      }}
    >
      <svg
        viewBox="0 0 540 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="aark-core-svg"
        style={{
          width: "100%",
          height: "100%",
          maxHeight: "100%",
          overflow: "visible",
          filter: isLight 
            ? "drop-shadow(0 20px 40px rgba(2, 132, 199, 0.15))"
            : "drop-shadow(0 20px 50px rgba(2, 132, 199, 0.25))"
        }}
      >
        <defs>
          {/* ── GLOW FILTERS ── */}
          <filter id="coreGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="hudNeon" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="pulseWaveGlow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="12" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* ── CHASSIS GRADIENTS ── */}
          <linearGradient id="chassisDark" x1="100" y1="40" x2="440" y2="280" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="45%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          <linearGradient id="chassisLight" x1="100" y1="40" x2="440" y2="280" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="45%" stopColor="#f8fafc" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>

          <linearGradient id="metallicBezel" x1="140" y1="50" x2="400" y2="270" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="30%" stopColor="#0284c7" />
            <stop offset="70%" stopColor="#0369a1" />
            <stop offset="100%" stopColor="#0c4a6e" />
          </linearGradient>

          <radialGradient id="reactorCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="1" />
            <stop offset="35%" stopColor="#0284c7" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#0f172a" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#020617" />
          </radialGradient>

          <linearGradient id="hudGlass" x1="260" y1="70" x2="440" y2="210" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.18" />
            <stop offset="60%" stopColor="#0369a1" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#0f172a" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="orbitRingGrad" x1="60" y1="60" x2="480" y2="260" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0284c7" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* ── GROUND CONTACT SHADOW ── */}
        <ellipse 
          cx="270" 
          cy="285" 
          rx="180" 
          ry="24" 
          fill="#0284c7" 
          fillOpacity={isLight ? "0.10" : "0.22"} 
          filter="url(#coreGlow)" 
        />

        {/* ── ANIMATED PULSE WAVE BURST (When Triggered or Active) ── */}
        {activePulse && (
          <g className="core-pulse-burst" filter="url(#pulseWaveGlow)">
            <ellipse cx="200" cy="160" rx="90" ry="60" stroke="#38bdf8" strokeWidth="2.5" className="burst-ring-1" />
            <ellipse cx="200" cy="160" rx="130" ry="85" stroke="#0284c7" strokeWidth="2" className="burst-ring-2" />
            <ellipse cx="200" cy="160" rx="170" ry="110" stroke="#6366f1" strokeWidth="1.5" className="burst-ring-3" />
          </g>
        )}

        {/* ── ORBITING DATA CONDUIT RINGS (Concentric 3D Ellipses) ── */}
        <g id="orbit-system" opacity="0.85">
          {/* Outer Ring: Enterprise Cloud Automation */}
          <ellipse
            cx="200"
            cy="160"
            rx="160"
            ry="95"
            stroke="url(#orbitRingGrad)"
            strokeWidth="1.5"
            strokeDasharray="8 6"
            className="orbit-spin-slow"
          />

          {/* Middle Ring: Grounded AI Data Fabric */}
          <ellipse
            cx="200"
            cy="160"
            rx="125"
            ry="75"
            stroke="#0ea5e9"
            strokeWidth="1.8"
            strokeDasharray="6 4"
            opacity="0.7"
            className="orbit-spin-reverse"
          />

          {/* Inner Ring: Oracle ERP Cloud Core */}
          <ellipse
            cx="200"
            cy="160"
            rx="90"
            ry="55"
            stroke="#38bdf8"
            strokeWidth="2"
            opacity="0.9"
            className="orbit-spin-fast"
          />
        </g>

        {/* ── SATELLITE NODES ON ORBITS ── */}
        <g id="satellite-nodes">
          {/* Node 1: Oracle Fusion */}
          <g transform="translate(60, 130)">
            <circle cx="0" cy="0" r="14" fill={isLight ? "#ffffff" : "#0f172a"} stroke="#0284c7" strokeWidth="2" />
            <circle cx="0" cy="0" r="6" fill="#0284c7" className="animate-pulse" />
            <text x="18" y="4" fill={isLight ? "#0f172a" : "#ffffff"} fontSize="8" fontFamily="'JetBrains Mono', monospace" fontWeight="800">
              ORACLE ERP
            </text>
          </g>

          {/* Node 2: Grounded AI Fabric */}
          <g transform="translate(340, 110)">
            <circle cx="0" cy="0" r="14" fill={isLight ? "#ffffff" : "#0f172a"} stroke="#10b981" strokeWidth="2" />
            <circle cx="0" cy="0" r="6" fill="#10b981" className="animate-pulse" />
            <text x="18" y="4" fill={isLight ? "#0f172a" : "#ffffff"} fontSize="8" fontFamily="'JetBrains Mono', monospace" fontWeight="800">
              DATA & AI
            </text>
          </g>

          {/* Node 3: Cloud Automation */}
          <g transform="translate(230, 245)">
            <circle cx="0" cy="0" r="12" fill={isLight ? "#ffffff" : "#0f172a"} stroke="#6366f1" strokeWidth="2" />
            <circle cx="0" cy="0" r="5" fill="#6366f1" className="animate-pulse" />
            <text x="16" y="3" fill={isLight ? "#0f172a" : "#ffffff"} fontSize="8" fontFamily="'JetBrains Mono', monospace" fontWeight="800">
              AUTOMATION
            </text>
          </g>
        </g>

        {/* ── ISOMETRIC MAIN PROCESSOR CHASSIS ── */}
        <g id="main-processor-chassis">
          {/* Octagonal Base Socket */}
          <path
            d="M 140 100 
               L 260 100 
               L 310 145 
               L 310 185 
               L 260 225 
               L 140 225 
               L 90 185 
               L 90 145 
               Z"
            fill={isLight ? "url(#chassisLight)" : "url(#chassisDark)"}
            stroke="url(#metallicBezel)"
            strokeWidth="2.5"
            filter="url(#coreGlow)"
          />

          {/* Inner Recessed Bezel Rim */}
          <path
            d="M 148 110 
               L 252 110 
               L 295 150 
               L 295 180 
               L 252 215 
               L 148 215 
               L 105 180 
               L 105 150 
               Z"
            fill={isLight ? "#f1f5f9" : "#0b1329"}
            stroke="#0284c7"
            strokeWidth="1.5"
          />

          {/* Circuit Bus Lines running into Core */}
          <g stroke="#0284c7" strokeWidth="1.2" strokeLinecap="round" opacity="0.6">
            <line x1="90" y1="160" x2="135" y2="160" />
            <line x1="265" y1="160" x2="310" y2="160" />
            <line x1="200" y1="100" x2="200" y2="125" />
            <line x1="200" y1="200" x2="200" y2="225" />
          </g>

          {/* Center Glowing Fusion Reactor Core (Interactive click) */}
          <g 
            onClick={handleManualPulse}
            style={{ cursor: "pointer" }}
            className="reactor-click-target"
            title="Click to pulse AARK Modernization Core"
          >
            <circle cx="200" cy="160" r="38" fill="url(#reactorCore)" stroke="#38bdf8" strokeWidth="2.5" filter="url(#coreGlow)" />
            <circle cx="200" cy="160" r="24" fill="#0284c7" fillOpacity="0.4" stroke="#ffffff" strokeWidth="1.5" />
            <circle cx="200" cy="160" r="10" fill="#ffffff" className="animate-ping" style={{ transformOrigin: "200px 160px" }} />
            <circle cx="200" cy="160" r="7" fill="#ffffff" />
          </g>
        </g>

        {/* ── HOLOGRAPHIC TELEMETRY HUD SCREEN (RIGHT SIDE) ── */}
        <g id="holographic-hud" filter="url(#hudNeon)">
          {/* Glass Card Panel */}
          <rect
            x="320"
            y="65"
            width="190"
            height="185"
            rx="16"
            fill={isLight ? "rgba(255,255,255,0.95)" : "rgba(15, 23, 42, 0.88)"}
            stroke={telemetry.color}
            strokeWidth="2"
          />

          {/* Glass Reflection Stripe */}
          <path
            d="M 322 67 L 460 67 L 380 248 L 322 248 Z"
            fill="url(#hudGlass)"
          />

          {/* HUD Header Bar */}
          <g id="hud-header">
            <rect
              x="332"
              y="77"
              width="166"
              height="20"
              rx="6"
              fill={telemetry.color}
              fillOpacity="0.15"
            />
            <circle cx="342" cy="87" r="3" fill={telemetry.color} className="animate-pulse" />
            <text
              x="350"
              y="91"
              fill={isLight ? "#0f172a" : "#ffffff"}
              fontSize="8"
              fontFamily="'JetBrains Mono', monospace"
              fontWeight="800"
              letterSpacing="0.06em"
            >
              {telemetry.mode}
            </text>
          </g>

          {/* Primary Metric Large Value */}
          <g id="hud-metrics">
            <text
              x="334"
              y="136"
              fill={telemetry.color}
              fontSize="34"
              fontFamily="'Outfit', 'Plus Jakarta Sans', sans-serif"
              fontWeight="900"
              letterSpacing="-0.03em"
            >
              {telemetry.primaryMetric}
            </text>

            <text
              x="334"
              y="152"
              fill={isLight ? "#475569" : "#94a3b8"}
              fontSize="8"
              fontFamily="'JetBrains Mono', monospace"
              fontWeight="800"
              letterSpacing="0.08em"
            >
              {telemetry.metricLabel}
            </text>
          </g>

          {/* Live Node Telemetry Feed */}
          <g id="hud-node-feed">
            <line x1="334" y1="168" x2="496" y2="168" stroke={isLight ? "#e2e8f0" : "#334155"} strokeWidth="1" />
            
            <g transform="translate(334, 185)">
              <rect x="0" y="-8" width="6" height="6" rx="1.5" fill="#0284c7" />
              <text x="12" y="-2" fill={isLight ? "#0f172a" : "#f1f5f9"} fontSize="7.5" fontFamily="'JetBrains Mono', monospace" fontWeight="700">
                {telemetry.node1}
              </text>
            </g>

            <g transform="translate(334, 203)">
              <rect x="0" y="-8" width="6" height="6" rx="1.5" fill="#10b981" />
              <text x="12" y="-2" fill={isLight ? "#0f172a" : "#f1f5f9"} fontSize="7.5" fontFamily="'JetBrains Mono', monospace" fontWeight="700">
                {telemetry.node2}
              </text>
            </g>

            <g transform="translate(334, 221)">
              <rect x="0" y="-8" width="6" height="6" rx="1.5" fill="#6366f1" />
              <text x="12" y="-2" fill={isLight ? "#0f172a" : "#f1f5f9"} fontSize="7.5" fontFamily="'JetBrains Mono', monospace" fontWeight="700">
                {telemetry.node3}
              </text>
            </g>
          </g>

          {/* Status Indicator Pill */}
          <g id="hud-bottom-badge">
            <rect
              x="334"
              y="233"
              width="162"
              height="10"
              rx="4"
              fill={telemetry.color}
              fillOpacity="0.2"
            />
            <text
              x="415"
              y="241"
              fill={telemetry.color}
              fontSize="6.5"
              fontFamily="'JetBrains Mono', monospace"
              fontWeight="800"
              textAnchor="middle"
              letterSpacing="0.08em"
            >
              AARK MODERNIZATION ENGINE • SCROLL ACTIVE
            </text>
          </g>
        </g>
      </svg>

      <style>{`
        .aark-modernization-core-svg-root {
          will-change: transform;
        }

        .reactor-click-target:hover circle:first-child {
          fill: #0ea5e9;
          filter: drop-shadow(0 0 20px #38bdf8);
        }

        @keyframes orbitSpinSlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes orbitSpinReverse {
          0% { transform: rotate(360deg); }
          100% { transform: rotate(0deg); }
        }

        .orbit-spin-slow {
          transform-origin: 200px 160px;
          animation: orbitSpinSlow 28s linear infinite;
        }

        .orbit-spin-reverse {
          transform-origin: 200px 160px;
          animation: orbitSpinReverse 18s linear infinite;
        }

        .orbit-spin-fast {
          transform-origin: 200px 160px;
          animation: orbitSpinSlow 12s linear infinite;
        }

        @keyframes burstWave {
          0% {
            transform: scale(0.6);
            opacity: 0.9;
          }
          100% {
            transform: scale(1.6);
            opacity: 0;
          }
        }

        .burst-ring-1 {
          transform-origin: 200px 160px;
          animation: burstWave 1.8s ease-out infinite;
        }
        .burst-ring-2 {
          transform-origin: 200px 160px;
          animation: burstWave 1.8s ease-out 0.4s infinite;
        }
        .burst-ring-3 {
          transform-origin: 200px 160px;
          animation: burstWave 1.8s ease-out 0.8s infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .orbit-spin-slow, .orbit-spin-reverse, .orbit-spin-fast,
          .burst-ring-1, .burst-ring-2, .burst-ring-3 {
            animation: none !important;
          }
          .aark-modernization-core-svg-root {
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </div>
  );
}
