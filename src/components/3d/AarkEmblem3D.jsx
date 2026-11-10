import React, { useRef, useEffect } from "react";
import * as THREE from "three";

/**
 * AarkEmblem3D - Architectural 3D WebGL 'A' Brand Emblem
 * 
 * Features:
 * - Extruded chevron 'A' brand emblem with chamfered bevels (THREE.ExtrudeGeometry)
 * - Suspended rotating octahedron quantum diamond core (THREE.OctahedronGeometry)
 * - Expanding shockwave energy pulse on click
 * - Theme-reactive materials & studio lighting (Obsidian titanium chrome / Polished royal sapphire)
 * - Dynamics: continuous floating yaw, breathing scale pulse, mouse parallax tilt via THREE.MathUtils.lerp
 * - Rigorous WebGL lifecycle management and resource disposal
 */
export default function AarkEmblem3D({
  theme = "dark",
  className = "",
  size = 120,
  mousePos,
  isPulsing = false,
  onPulseEnd,
  onClick,
}) {
  const mountRef = useRef(null);
  const internalMousePos = useRef({ x: 0, y: 0 });
  const pulseTriggerRef = useRef(null);

  // Keep latest props in refs to avoid stale closures inside the RAF loop
  const mousePosRef = useRef(mousePos);
  mousePosRef.current = mousePos;
  const onPulseEndRef = useRef(onPulseEnd);
  onPulseEndRef.current = onPulseEnd;

  // Sync external isPulsing trigger
  useEffect(() => {
    if (isPulsing && pulseTriggerRef.current) {
      pulseTriggerRef.current();
    }
  }, [isPulsing]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || (typeof size === "number" ? size : 120);
    const height = container.clientHeight || (typeof size === "number" ? size : 120);

    // 1. Scene & Alpha-transparent WebGL Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.2);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    container.appendChild(renderer.domElement);

    // 2. Extruded Architectural Chevron 'A' Geometry
    const shape = new THREE.Shape();
    // Base of left leg
    shape.moveTo(-1.15, -1.25);
    // Outer edge up to apex chamfer
    shape.lineTo(-0.24, 1.25);
    shape.lineTo(0.24, 1.25);
    // Outer edge down to base of right leg
    shape.lineTo(1.15, -1.25);
    // Inner edge of right foot
    shape.lineTo(0.62, -1.25);
    // Inner leg up to crossbar underside
    shape.lineTo(0.40, -0.38);
    // Underside of quantum crossbar bridge
    shape.lineTo(-0.40, -0.38);
    // Inner leg down to base of left foot
    shape.lineTo(-0.62, -1.25);
    shape.closePath();

    // Inner aperture triangular hole (counter-clockwise winding for clean difference)
    const hole = new THREE.Path();
    hole.moveTo(0, 0.68);
    hole.lineTo(-0.28, -0.06);
    hole.lineTo(0.28, -0.06);
    hole.closePath();
    shape.holes.push(hole);

    const extrudeSettings = {
      depth: 0.38,
      bevelEnabled: true,
      bevelSegments: 4,
      steps: 1,
      bevelSize: 0.08,
      bevelThickness: 0.08,
    };
    const emblemGeo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    emblemGeo.center();

    // 3. Suspended Rotating Quantum Diamond Core
    const diamondGeo = new THREE.OctahedronGeometry(0.24, 0);

    // 4. Shockwave Pulse Ring Geometry
    const shockwaveGeo = new THREE.RingGeometry(0.12, 0.24, 32);

    // 5. Materials & Shading
    const isLight = theme === "light";

    // Emblem Material: Obsidian titanium chrome (dark) vs Polished royal sapphire (light)
    const emblemMat = new THREE.MeshPhysicalMaterial({
      color: isLight ? 0x0284c7 : 0x0f172a,
      metalness: isLight ? 0.65 : 0.90,
      roughness: isLight ? 0.14 : 0.16,
      clearcoat: 1.0,
      clearcoatRoughness: isLight ? 0.04 : 0.06,
      emissive: isLight ? 0x0369a1 : 0x0284c7,
      emissiveIntensity: isLight ? 0.20 : 0.38,
    });

    // Diamond Core Material: Glowing quantum diamond
    const diamondMat = new THREE.MeshStandardMaterial({
      color: isLight ? 0x0284c7 : 0x38bdf8,
      metalness: 0.2,
      roughness: 0.12,
      emissive: isLight ? 0x0284c7 : 0x38bdf8,
      emissiveIntensity: isLight ? 1.4 : 2.0,
    });

    // Shockwave Ring Material
    const shockwaveMat = new THREE.MeshBasicMaterial({
      color: isLight ? 0x0284c7 : 0x38bdf8,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
    });

    const emblemMesh = new THREE.Mesh(emblemGeo, emblemMat);
    const diamondMesh = new THREE.Mesh(diamondGeo, diamondMat);
    diamondMesh.position.set(0, 0.22, 0);

    const shockwaveMesh = new THREE.Mesh(shockwaveGeo, shockwaveMat);
    shockwaveMesh.position.set(0, 0.22, 0.08);

    const emblemGroup = new THREE.Group();
    emblemGroup.add(emblemMesh);
    emblemGroup.add(diamondMesh);
    emblemGroup.add(shockwaveMesh);
    scene.add(emblemGroup);

    // 6. Volumetric & Studio Lights
    const ambLight = new THREE.AmbientLight(
      isLight ? 0xf8fafc : 0x0f172a,
      isLight ? 1.5 : 1.0
    );

    const keyLight = new THREE.DirectionalLight(
      isLight ? 0x0284c7 : 0x38bdf8,
      isLight ? 2.2 : 2.6
    );
    keyLight.position.set(3, 4, 4);

    const rimLight = new THREE.DirectionalLight(
      isLight ? 0x4338ca : 0x818cf8,
      isLight ? 1.5 : 2.0
    );
    rimLight.position.set(-3, -2, -3);

    const corePointLight = new THREE.PointLight(
      isLight ? 0x0284c7 : 0x38bdf8,
      isLight ? 1.4 : 2.0,
      8
    );
    corePointLight.position.set(0, 0.22, 0.8);

    scene.add(ambLight, keyLight, rimLight, corePointLight);

    // 7. Interactive Dynamics & Animation Loop
    let animId;
    const clock = new THREE.Clock();
    let currentRotX = 0;
    let currentRotY = 0;
    let pulseActive = false;
    let pulseTime = 0;

    pulseTriggerRef.current = () => {
      pulseActive = true;
      pulseTime = 0;
    };

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const t = clock.getElapsedTime();

      // Read current mouse position (prefer prop via ref, fallback to internal container tracker)
      const curMouse = mousePosRef.current;
      const mx = curMouse?.x !== undefined ? curMouse.x : internalMousePos.current.x;
      const my = curMouse?.y !== undefined ? curMouse.y : internalMousePos.current.y;

      // Parallax mouse tilt lerping
      const targetRotX = my * 0.35;
      const targetRotY = Math.sin(t * 0.5) * 0.20 + mx * 0.45;
      currentRotX = THREE.MathUtils.lerp(currentRotX, targetRotX, 0.08);
      currentRotY = THREE.MathUtils.lerp(currentRotY, targetRotY, 0.08);

      emblemGroup.rotation.x = currentRotX;
      emblemGroup.rotation.y = currentRotY;

      // Smooth continuous floating yaw rotation & vertical levitation
      emblemGroup.position.y = Math.sin(t * 1.8) * 0.06;

      // Internal diamond rotation
      diamondMesh.rotation.y = t * 2.4;
      diamondMesh.rotation.x = t * 1.5;
      diamondMesh.rotation.z = Math.sin(t * 1.2) * 0.4;

      // Breathing scale pulse
      const breathingScale = 1.0 + Math.sin(t * 2.4) * 0.035;

      // Shockwave dynamics
      if (pulseActive) {
        pulseTime += delta * 2.0; // ~0.5s duration
        if (pulseTime >= 1.0) {
          pulseActive = false;
          pulseTime = 1.0;
          shockwaveMat.opacity = 0;
          shockwaveMesh.scale.set(0.1, 0.1, 1);
          if (onPulseEndRef.current) onPulseEndRef.current();
        } else {
          const ringScale = 0.2 + pulseTime * 2.6;
          shockwaveMesh.scale.set(ringScale, ringScale, 1);
          shockwaveMat.opacity = Math.sin(pulseTime * Math.PI) * 0.9;

          // Flash core point light
          const flash = Math.sin(pulseTime * Math.PI) * 3.0;
          corePointLight.intensity = (isLight ? 1.4 : 2.0) + flash;

          // Scale kick on emblem
          const pulseScale = breathingScale * (1.0 + Math.sin(pulseTime * Math.PI) * 0.14);
          emblemGroup.scale.set(pulseScale, pulseScale, pulseScale);
        }
      } else {
        const baseIntensity = (isLight ? 1.4 : 2.0) * (1.0 + Math.sin(t * 3.0) * 0.2);
        corePointLight.intensity = baseIntensity;
        emblemGroup.scale.set(breathingScale, breathingScale, breathingScale);
      }

      renderer.render(scene, camera);
    };

    animate();

    // 8. Responsive Resize Handling
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newW, height: newH } = entry.contentRect;
        if (newW > 0 && newH > 0) {
          camera.aspect = newW / newH;
          camera.updateProjectionMatrix();
          renderer.setSize(newW, newH);
        }
      }
    });
    resizeObserver.observe(container);

    // 9. Cleanup & Disposal on unmount
    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      pulseTriggerRef.current = null;

      scene.clear();
      emblemGeo.dispose();
      diamondGeo.dispose();
      shockwaveGeo.dispose();
      emblemMat.dispose();
      diamondMat.dispose();
      shockwaveMat.dispose();
      renderer.dispose();

      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, [theme, size]);

  const handlePointerMove = (e) => {
    const rect = mountRef.current?.getBoundingClientRect();
    if (rect && rect.width > 0 && rect.height > 0) {
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      internalMousePos.current = {
        x: Math.max(-1, Math.min(1, x)),
        y: Math.max(-1, Math.min(1, y)),
      };
    }
  };

  const handlePointerLeave = () => {
    internalMousePos.current = { x: 0, y: 0 };
  };

  const handleClick = (e) => {
    if (pulseTriggerRef.current) {
      pulseTriggerRef.current();
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <div
      ref={mountRef}
      className={`relative cursor-pointer select-none flex items-center justify-center overflow-visible ${className}`}
      style={{
        width: typeof size === "number" ? `${size}px` : size,
        height: typeof size === "number" ? `${size}px` : size,
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onClick={handleClick}
      role="img"
      aria-label="AARK Innovations 3D Brand Emblem"
    />
  );
}
