# Project: Modernization Journey SVG Redesign & Scroll Architecture

## Architecture
- **Framework & Libraries**: React 18.3, Vite 5.4, Tailwind CSS 3.4, Lucide React 0.475.
- **Scroll Transition Engine**: Pure React + RAF scroll loop (`src/hooks/useScrollJourney.js`) adopting the `Onecare RPM 3D` architecture (`getBoundingClientRect()` anchor coordinate mapping, `getCenter(el)` offset calculation, quadratic easing `ease(t)`, fixed/pinned stage, and sticky dwell tracks).
- **Section 3 Scroll Architecture (R3)**: 250vh outer track (`.practices-sticky-track`) enclosing a 100vh pinned container (`position: sticky; top: 0; height: 100vh; overflow-x: clip`), featuring a responsive 2-column split (Left: anchor slot for 3-tier enterprise fabric; Right: 3 practice cards scrubbing dynamically with `dwellProgress`), eliminating blank voids and content disappearance completely.
- **Dual Theme Support (R4)**: Dual routing (`/#svg` dark mode, `/light#svg` light mode) in `App.jsx`, synchronized with document root `dark` class, `body` background, and explicit theme props/tokens across all SVG components and containers.
- **Dedicated Section SVGs (R1)**:
  1. Hero: Enterprise Modernization Orchestration Engine (`HeroArchitectureSvg.jsx`)
  2. Why AARK: Precision Senior Architect Highway vs. Big-4 Bloat Labyrinth (`WhyAarkComparisonSvg.jsx`)
  3. Practices: 3-Tier Enterprise Topographic Fabric (`PracticesArchitectureSvg.jsx`)
  4. Case Studies: Audited Impact Cockpit & ROI Acceleration Gauges (`CaseStudiesRoiSvg.jsx`)
  5. CTA: 3-Stage Modernization Launch Runway & Mission Blueprint (`CtaRoadmapSvg.jsx`)

## Feature Inventory
| # | Feature | Description | Milestone | Source |
|---|---------|-------------|-----------|--------|
| 1 | Scroll Journey Hook | RAF scroll interpolation engine with anchor coordinate mapping & quadratic easing | M1 | Survey (Explorer 1) |
| 2 | Section 3 Sticky Dwell Track | 250vh dwell track + 100vh sticky 2-col layout + overflow-x: clip | M1 | Survey (Explorers 1 & 2) |
| 3 | Dual-Theme Synchronization | Class-based dark mode toggle in tailwind.config and document root | M1 | Survey (Explorer 2) |
| 4 | Hero Orchestration Engine SVG | Dedicated vector illustration (Legacy silos -> Quantum Core -> Grounded stack) | M2 | Survey (Explorer 3) |
| 5 | Why AARK Structural Contrast SVG | Dedicated vector illustration (Senior highway vs. Big-4 bloat labyrinth) | M2 | Survey (Explorer 3) |
| 6 | Practices 3-Tier Topographic Fabric SVG | Dedicated vector illustration (Oracle Core, Data Lakehouse & AI, Event Bus) | M2 | Survey (Explorer 3) |
| 7 | Section 3 Scroll Visibility & Dwell Wiring | Dynamic activePractice scrub & 0 blank voids during scroll | M1 | Survey (Explorers 1 & 2) |
| 8 | Case Studies ROI Gauges SVG | Dedicated vector illustration (Velocity dial, RFP waterfall, 14-org mesh) | M2 | Survey (Explorer 3) |
| 9 | CTA 3-Stage Launch Runway SVG | Dedicated vector illustration (30-min discovery, blueprint, client handover) | M2 | Survey (Explorer 3) |
| 10 | E2E Dual-Theme & Scroll Verification | Automated and empirical test verification on /#svg and /light#svg | M3 | Survey & Requirements |
| 11 | Workspace Integrity Attestation | Forensic verification that C:\Antigravity\Onecare RPM 3D is unmodified | M3 | Requirement R5 |

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| M1 | Scroll Transition Engine & Section 3 Architecture | `src/hooks/useScrollJourney.js`, `tailwind.config.js`, `src/App.jsx`, `src/components/ModernizationJourneySvgPage.jsx` | none | DONE |
| M2 | Dedicated 5-Section Vector Illustrations Suite | `src/components/svg-sections/*.jsx` with dual-theme vector rendering | M1 | IN_PROGRESS |
| M3 | Final Acceptance, Adversarial Testing & Forensic Audit | E2E test verification, adversarial coverage hardening, and forensic audit | M1, M2 | PLANNED |

## Interface Contracts
### `src/hooks/useScrollJourney.js` ↔ `ModernizationJourneySvgPage.jsx`
- Input Refs: `{ heroSlotRef, sec2SlotRef, sec3TrackRef, sec3SlotRef, sec4SlotRef, ctaSlotRef, stageRef }`
- Output State: `{ activeSection: number (0-4), activePractice: number (0-2), scrollProgress: number (0-1), isCompact: boolean }`

### SVG Components ↔ Page View
- Props signature for all 5 SVG sections:
  `({ theme = "dark", activePillar = 0, activePractice = 0, className = "" }) => JSX.Element`
- Responsive dimensions: standard `viewBox="0 0 600 380"` (Hero, Why AARK, Practices, Case Studies) and `0 0 600 260"` (CTA).

## Code Layout
- `src/components/ModernizationJourneySvgPage.jsx` — Main Modernization Journey page component
- `src/hooks/useScrollJourney.js` — Scroll-driven transition hook based on Onecare RPM 3D pattern
- `src/components/svg-sections/HeroArchitectureSvg.jsx` — Hero section vector illustration
- `src/components/svg-sections/WhyAarkComparisonSvg.jsx` — Why AARK section vector illustration
- `src/components/svg-sections/PracticesArchitectureSvg.jsx` — Practices section vector illustration
- `src/components/svg-sections/CaseStudiesRoiSvg.jsx` — Case Studies section vector illustration
- `src/components/svg-sections/CtaRoadmapSvg.jsx` — CTA section vector illustration
- `tailwind.config.js` — Tailwind CSS configuration (enabling class-based dark mode)
- `tests/` — E2E and visual verification test scripts
