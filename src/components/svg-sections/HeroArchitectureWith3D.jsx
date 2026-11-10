import React, { useState, useRef, useCallback } from "react";
import HeroArchitectureSvg from "./HeroArchitectureSvg";

/**
 * HeroArchitectureWith3D - Interactive 3D Holographic Hero Stage Component
 * 
 * Renders the high-fidelity vector architecture with:
 * - Redesigned center logo circle & newly generated AARK Modernization Core emblem
 * - Interactive 3D mouse parallax tilt across the card
 * - Click quantum burst pulse propagation
 * - Proportional responsive scaling matching the 600x380 SVG stage
 * - Seamless dual-theme support (Dark & Light)
 */
export default function HeroArchitectureWith3D({
  theme = "dark",
  activePillar = 0,
  activePractice = 0,
  activeImpactIndex = 0,
  className = "",
}) {
  const containerRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isPulsing, setIsPulsing] = useState(false);

  const handlePointerMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      // Gentle, sophisticated 3D tilt
      setTilt({
        x: normY * -6, // tilt up/down (deg)
        y: normX * 8,  // tilt left/right (deg)
      });
    }
  }, []);

  const handlePointerLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  const handleClick = useCallback(() => {
    setIsPulsing(true);
    setTimeout(() => setIsPulsing(false), 800);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full aspect-[600/380] max-w-[600px] flex items-center justify-center overflow-visible select-none cursor-pointer transition-transform duration-150 ease-out ${className}`}
      style={{
        perspective: "1000px",
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1, 1, 1)`,
        transformStyle: "preserve-3d",
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onClick={handleClick}
      title="Click to trigger Modernization Core quantum pulse"
    >
      {/* High-Fidelity SVG Architecture Stage with Redesigned Center Logo Circle */}
      <HeroArchitectureSvg
        theme={theme}
        activePillar={activePillar}
        activePractice={activePractice}
        activeImpactIndex={activeImpactIndex}
        className="w-full h-full"
        hide2dDiamond={false}
      />
    </div>
  );
}
