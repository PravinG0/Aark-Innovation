import React, { useState, useRef, useCallback } from "react";
import HeroArchitectureSvg from "./HeroArchitectureSvg";
import AarkEmblem3D from "../3d/AarkEmblem3D";

/**
 * HeroArchitectureWith3D - Composite Hero Stage Component
 * 
 * Layers the 3D WebGL AARK 'A' Brand Emblem precisely over the Hero SVG architecture's
 * octagonal reactor housing at normalized coordinates (50%, 51.316%).
 * 
 * Features:
 * - High-precision center alignment (cx = 300 / 600 = 50%, cy = 195 / 380 = 51.316%)
 * - Interactive mouse parallax tilt tracked across the entire hero card
 * - Click quantum shockwave pulse propagation
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
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isPulsing, setIsPulsing] = useState(false);

  const handlePointerMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      setMousePos({
        x: Math.max(-1, Math.min(1, x)),
        y: Math.max(-1, Math.min(1, y)),
      });
    }
  }, []);

  const handlePointerLeave = useCallback(() => {
    setMousePos({ x: 0, y: 0 });
  }, []);

  const handleClick = useCallback(() => {
    setIsPulsing(true);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative w-full aspect-[600/380] max-w-[600px] flex items-center justify-center overflow-visible select-none ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onClick={handleClick}
    >
      {/* 1. Underlying SVG Architecture Stage (hide2dDiamond suppresses flat polygon) */}
      <HeroArchitectureSvg
        theme={theme}
        activePillar={activePillar}
        activePractice={activePractice}
        activeImpactIndex={activeImpactIndex}
        className="w-full h-full"
        hide2dDiamond={true}
      />

      {/* 2. Layered 3D WebGL Brand Emblem precisely positioned at octagonal housing center */}
      <div
        className="absolute pointer-events-auto flex items-center justify-center"
        style={{
          left: "50%",
          top: "51.316%",
          transform: "translate(-50%, -50%)",
          width: "18.33%",
          aspectRatio: "1 / 1",
          maxWidth: "114px",
          minWidth: "64px",
          zIndex: 10,
        }}
      >
        <AarkEmblem3D
          theme={theme}
          mousePos={mousePos}
          isPulsing={isPulsing}
          onPulseEnd={() => setIsPulsing(false)}
          size="100%"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
