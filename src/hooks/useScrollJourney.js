import { useState, useEffect, useRef } from "react";

/**
 * useScrollJourney - Pure React + RAF scroll transition engine.
 * Directly adapts the Onecare RPM 3D scrollytelling architecture with:
 * - Viewport boundary clamping strictly preventing top and bottom clipping
 * - Section-container entry anchoring (measuring section container tops, eliminating ~260px delayed arrival)
 * - Decoupled high-frequency state updates (zero React re-renders in RAF loop; state updates only on index change)
 * - Viewport-aware auto-scaling for compact desktop heights (< 760px)
 * - Section 3 sticky dwellProgress calculation & activePractice synchronization
 * - Section 2 scroll progression & activePillar synchronization
 * - Viewport-aware responsive fallback for compact/mobile screens (< 1024px)
 * 
 * @param {Object} refs
 * @param {React.RefObject} refs.heroSlotRef - Anchor slot in Section 1 (Hero)
 * @param {React.RefObject} [refs.heroSectionRef] - Container for Section 1
 * @param {React.RefObject} [refs.sec2SectionRef] - Container for Section 2 (Why AARK)
 * @param {React.RefObject} refs.sec2SlotRef - Anchor slot in Section 2 (Why AARK)
 * @param {React.RefObject} [refs.sec3TrackRef] - Outer 250vh dwell track in Section 3
 * @param {React.RefObject} [refs.sec3SectionRef] - Container for Section 3 (Practices)
 * @param {React.RefObject} refs.sec3SlotRef - Anchor slot in Section 3 (Practices)
 * @param {React.RefObject} [refs.sec4SectionRef] - Container for Section 4 (Case Studies)
 * @param {React.RefObject} refs.sec4SlotRef - Anchor slot in Section 4 (Case Studies)
 * @param {React.RefObject} [refs.ctaSectionRef] - Container for Section 5 (CTA)
 * @param {React.RefObject} refs.ctaSlotRef - Anchor slot in Section 5 (CTA)
 * @param {React.RefObject} refs.stageRef - Pinned traveling stage element
 * @returns {{ activeSection: number, activePillar: number, setActivePillar: Function, activePractice: number, setActivePractice: Function, scrollProgress: number, isCompact: boolean }}
 */
export function useScrollJourney({
  heroSlotRef,
  heroSectionRef,
  sec2SectionRef,
  sec2SlotRef,
  sec3TrackRef,
  sec3SectionRef,
  sec3SlotRef,
  sec4SectionRef,
  sec4SlotRef,
  ctaSectionRef,
  ctaSlotRef,
  stageRef,
}) {
  const [activeSection, setActiveSection] = useState(0); // 0: Hero, 1: Why AARK, 2: Practices, 3: Case Studies, 4: CTA
  const [activePillar, setActivePillar] = useState(0); // 0: Direct Leadership, 1: Fixed Scope, 2: Software Assets
  const [activePractice, setActivePractice] = useState(0); // 0: Oracle, 1: Data & AI, 2: Automation
  const [isCompact, setIsCompact] = useState(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < 1024;
    }
    return false;
  });

  // Keep refs to avoid unnecessary React state triggers if unchanged
  const activeSectionRef = useRef(0);
  const activePillarRef = useRef(0);
  const activePracticeRef = useRef(0);
  const isCompactRef = useRef(isCompact);

  useEffect(() => {
    // Quadratic easing formula from Onecare RPM 3D
    const ease = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    const updateStage = () => {
      const windowH = window.innerHeight;
      const windowW = window.innerWidth;
      const compact = windowW < 1024;

      if (isCompactRef.current !== compact) {
        isCompactRef.current = compact;
        setIsCompact(compact);
      }

      const stage = stageRef?.current;
      if (!stage) return;

      if (compact) {
        stage.style.display = "none";
        return;
      } else {
        stage.style.display = "flex";
      }

      // ── VIEWPORT BOUNDARY CONSTANTS & AUTO-SCALING ──
      const NAVBAR_H = 80;
      const SAFE_PAD = 16;
      const BASE_STAGE_W = 600;
      const BASE_STAGE_H = 380;

      // Viewport-aware auto-scaling for compact desktop heights (< 760px)
      const autoScale = windowH < 760
        ? Math.min(1.0, Math.max(0.65, (windowH - NAVBAR_H - 32) / BASE_STAGE_H))
        : 1.0;

      const stageHalfW = (BASE_STAGE_W * autoScale) / 2; // 300 at scale 1.0
      const stageHalfH = (BASE_STAGE_H * autoScale) / 2; // 190 at scale 1.0

      // Viewport boundary limits relative to screen center (prevents top/bottom clipping)
      const minCenterY = -(windowH / 2) + NAVBAR_H + SAFE_PAD + stageHalfH;
      const maxCenterY = (windowH / 2) - SAFE_PAD - stageHalfH;

      const minCenterX = -(windowW / 2) + SAFE_PAD + stageHalfW;
      const maxCenterX = (windowW / 2) - SAFE_PAD - stageHalfW;

      // Convert bounding rect to offset from screen center (0, 0)
      const getCenter = (el) => {
        if (!el) return { x: 0, y: 0 };
        const r = el.getBoundingClientRect();
        return {
          x: r.left + r.width / 2 - windowW / 2,
          y: r.top + r.height / 2 - windowH / 2,
          rect: r,
        };
      };

      const heroPos = getCenter(heroSlotRef?.current);
      const sec2Pos = getCenter(sec2SlotRef?.current);
      const sec3Pos = getCenter(sec3SlotRef?.current);
      const sec4Pos = getCenter(sec4SlotRef?.current);
      const ctaPos = getCenter(ctaSlotRef?.current);

      // Section container elements for entry anchoring (eliminates ~260px delayed arrival)
      const sec2Container = sec2SectionRef?.current || sec2SlotRef?.current;
      const sec2Rect = sec2Container?.getBoundingClientRect();

      const sec3Container = sec3TrackRef?.current || sec3SectionRef?.current || sec3SlotRef?.current;
      const sec3TrackRect = sec3Container?.getBoundingClientRect();

      const sec4Container = sec4SectionRef?.current || sec4SlotRef?.current;
      const sec4Rect = sec4Container?.getBoundingClientRect();

      const ctaContainer = ctaSectionRef?.current || ctaSlotRef?.current;
      const ctaRect = ctaContainer?.getBoundingClientRect();

      let currentX = heroPos.x;
      let currentY = heroPos.y;
      let currentScale = autoScale;
      let stageOpacity = 1.0;
      let nextSection = 0;

      const transDist = windowH * 0.85;

      // ── MULTI-PHASE SCROLL INTERPOLATION WITH SECTION-ENTRY ANCHORING ──
      if (sec2Rect && sec2Rect.top > 0) {
        if (sec2Rect.top > transDist) {
          // Phase 0: Hero State (Docked at Hero slot)
          currentX = heroPos.x;
          currentY = heroPos.y;
          currentScale = autoScale;
          nextSection = 0;
        } else {
          // Phase 1: Gliding Entrance: Hero -> Section 2 (Anchored to Section 2 container entry)
          const rawT = Math.max(0, Math.min(1, 1 - sec2Rect.top / transDist));
          const t = ease(rawT);
          currentX = heroPos.x + (sec2Pos.x - heroPos.x) * t;
          currentY = heroPos.y + (sec2Pos.y - heroPos.y) * t;
          currentScale = autoScale;
          nextSection = rawT > 0.40 ? 1 : 0;
        }
      } else if (sec3TrackRect && sec3TrackRect.top > 0) {
        // Phase 2: Section 2 Docked -> Gliding to Section 3 (Practices)
        if (sec3TrackRect.top > transDist) {
          currentX = sec2Pos.x;
          currentY = sec2Pos.y;
          currentScale = autoScale;
          nextSection = 1;

          // Section 2 Pillar progression during dwell
          if (sec2Rect) {
            const sec2Height = sec2Rect.height || 600;
            const pillarProg = Math.max(0, Math.min(1, -sec2Rect.top / (sec2Height * 0.65)));
            const pIdx = Math.min(2, Math.floor(pillarProg * 3));
            if (activePillarRef.current !== pIdx) {
              activePillarRef.current = pIdx;
              setActivePillar(pIdx);
            }
          }
        } else {
          const rawT = Math.max(0, Math.min(1, 1 - sec3TrackRect.top / transDist));
          const t = ease(rawT);
          currentX = sec2Pos.x + (sec3Pos.x - sec2Pos.x) * t;
          currentY = sec2Pos.y + (sec3Pos.y - sec2Pos.y) * t;
          currentScale = autoScale;
          nextSection = rawT > 0.40 ? 2 : 1;
        }
      } else if (sec3TrackRect && sec3TrackRect.bottom >= windowH) {
        // Phase 3: Section 3 Sticky Pinned Dwell (Practices)
        currentX = sec3Pos.x;
        currentY = sec3Pos.y;
        currentScale = autoScale;
        nextSection = 2;

        const dwellScrollable = sec3TrackRect.height - windowH;
        const dwellProgress = dwellScrollable > 0
          ? Math.max(0, Math.min(1, -sec3TrackRect.top / dwellScrollable))
          : 0;

        // Synchronize active practice smoothly across the 3 practices during scroll
        const pIdx = Math.min(2, Math.floor(dwellProgress * 3));
        if (activePracticeRef.current !== pIdx) {
          activePracticeRef.current = pIdx;
          setActivePractice(pIdx);
        }
      } else if (ctaRect && ctaRect.top < windowH * 0.75) {
        // Phase 5: Section 4 -> Section 5 (CTA)
        const ctaTransDist = windowH * 0.5;
        if (ctaRect.top > windowH * 0.25) {
          const rawT = Math.max(0, Math.min(1, 1 - (ctaRect.top - windowH * 0.25) / ctaTransDist));
          const t = ease(rawT);
          currentX = sec4Pos.x + (ctaPos.x - sec4Pos.x) * t;
          currentY = sec4Pos.y + (ctaPos.y - sec4Pos.y) * t;
          currentScale = autoScale * (1.0 - 0.05 * t);
          nextSection = rawT > 0.40 ? 4 : 3;
        } else {
          // CTA Docked
          currentX = ctaPos.x;
          currentY = ctaPos.y;
          currentScale = autoScale * 0.95;
          nextSection = 4;
        }
      } else {
        // Phase 4: Section 3 -> Section 4 (Case Studies)
        const sec4TransDist = windowH * 0.5;
        if (sec4Rect && sec4Rect.top > windowH * 0.4) {
          const rawT = Math.max(0, Math.min(1, 1 - (sec4Rect.top - windowH * 0.4) / sec4TransDist));
          const t = ease(rawT);
          currentX = sec3Pos.x + (sec4Pos.x - sec3Pos.x) * t;
          currentY = sec3Pos.y + (sec4Pos.y - sec3Pos.y) * t;
          currentScale = autoScale;
          nextSection = rawT > 0.40 ? 3 : 2;
        } else {
          currentX = sec4Pos.x;
          currentY = sec4Pos.y;
          currentScale = autoScale;
          nextSection = 3;
        }
      }

      // In Section 5 (CTA), allow the stage to scroll naturally with the top slot and fade out
      // so it stays parked at the top of the CTA card and NEVER overlaps the form inputs below it!
      if (nextSection === 4) {
        if (currentY < minCenterY) {
          stageOpacity = Math.max(0, Math.min(1, 1 - (minCenterY - currentY) / 120));
        }
      }

      // Smooth exit fade out as CTA scrolls off the top into footer
      if (ctaRect && ctaRect.bottom < 140) {
        stageOpacity = Math.max(0, Math.min(1, (ctaRect.bottom + 60) / 200));
      }

      // ── VIEWPORT CLAMPING ──
      // In Section 5 (CTA), do NOT clamp minCenterY so the stage stays anchored to ctaSlotRef at top and scrolls away cleanly
      const clampedY = nextSection === 4
        ? Math.min(maxCenterY, currentY)
        : Math.max(minCenterY, Math.min(maxCenterY, currentY));
      const clampedX = Math.max(minCenterX, Math.min(maxCenterX, currentX));

      // Decoupled state updates: update React state ONLY when discrete section changes
      if (activeSectionRef.current !== nextSection) {
        activeSectionRef.current = nextSection;
        setActiveSection(nextSection);
      }

      // Apply transform directly to DOM with high performance hardware acceleration
      stage.style.transform = `translate3d(${clampedX.toFixed(1)}px, ${clampedY.toFixed(1)}px, 0) scale(${currentScale.toFixed(3)})`;
      stage.style.opacity = stageOpacity.toFixed(2);
    };

    let rafId = null;
    const onScroll = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          updateStage();
          rafId = null;
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    // Initial calculation tick
    updateStage();
    const timer = setTimeout(updateStage, 60);

    return () => {
      clearTimeout(timer);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [
    heroSlotRef,
    heroSectionRef,
    sec2SectionRef,
    sec2SlotRef,
    sec3TrackRef,
    sec3SectionRef,
    sec3SlotRef,
    sec4SectionRef,
    sec4SlotRef,
    ctaSectionRef,
    ctaSlotRef,
    stageRef,
  ]);

  return {
    activeSection,
    activePillar,
    setActivePillar,
    activePractice,
    setActivePractice,
    scrollProgress: 0,
    isCompact,
  };
}
