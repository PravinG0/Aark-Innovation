import React, { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const cursorRef = useRef(null);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  useEffect(() => {
    if (isTouch) return;
    const el = cursorRef.current;
    if (!el) return;

    let mx = -200, my = -200;
    let cx = -200, cy = -200;
    let raf = null;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    const bindHover = () => {
      document.querySelectorAll("a, button, input, textarea, select, [data-cursor-hover]").forEach((node) => {
        if (node.dataset.curBound) return;
        node.dataset.curBound = "true";
        node.addEventListener("mouseenter", () => el.classList.add("hovered"));
        node.addEventListener("mouseleave", () => el.classList.remove("hovered"));
      });
    };

    bindHover();
    const observer = new MutationObserver(bindHover);
    observer.observe(document.body, { childList: true, subtree: true });

    const frame = () => {
      raf = requestAnimationFrame(frame);
      cx += (mx - cx) * 0.16;
      cy += (my - cy) * 0.16;
      el.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
    };

    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      observer.disconnect();
    };
  }, [isTouch]);

  if (isTouch) return null;

  return <div ref={cursorRef} className="custom-cursor-light hidden md:block" />;
}
