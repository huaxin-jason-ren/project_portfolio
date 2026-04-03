"use client";

import { useEffect, useRef, useState } from "react";

const TRAIL_LENGTH = 18;

export function CursorFollower() {
  const arrowRef = useRef<HTMLDivElement>(null);
  const hasMoved = useRef(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    // ── Trail container (created outside React to avoid render overhead) ──
    const container = document.createElement("div");
    container.setAttribute("aria-hidden", "true");
    Object.assign(container.style, {
      position: "fixed",
      inset: "0",
      pointerEvents: "none",
      zIndex: "9997",
      overflow: "hidden",
    });
    document.body.appendChild(container);

    // Pre-create trail dot elements
    const dots = Array.from({ length: TRAIL_LENGTH }, (_, i) => {
      const ratio = (i + 1) / TRAIL_LENGTH;
      const size = 2 + ratio * 6;
      const el = document.createElement("div");
      Object.assign(el.style, {
        position: "absolute",
        left: "0",
        top: "0",
        width: `${size}px`,
        height: `${size}px`,
        marginLeft: `-${size / 2}px`,
        marginTop: `-${size / 2}px`,
        borderRadius: "50%",
        background: "var(--accent)",
        boxShadow: `0 0 ${size * 2.5}px var(--accent-warm)`,
        opacity: "0",
        willChange: "transform, opacity",
      });
      container.appendChild(el);
      return el;
    });

    let mouseX = 0;
    let mouseY = 0;
    let animId: number;
    const positions: Array<{ x: number; y: number }> = [];

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!hasMoved.current) {
        hasMoved.current = true;
        setVisible(true);
        document.body.classList.add("cursor-ready");
      }
    };

    const animate = () => {
      // Record current position
      positions.push({ x: mouseX, y: mouseY });
      if (positions.length > TRAIL_LENGTH) positions.shift();

      // Update each trail dot (oldest = index 0, most recent = last index)
      dots.forEach((dot, i) => {
        const pos = positions[i];
        if (!pos) {
          dot.style.opacity = "0";
          return;
        }
        const age = (i + 1) / positions.length; // 0 = oldest, 1 = newest
        dot.style.opacity = String(age * 0.7);
        dot.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
      });

      // Update arrow
      if (arrowRef.current) {
        arrowRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }

      animId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(animId);
      document.body.classList.remove("cursor-ready");
      container.remove();
    };
  }, []);

  return (
    /* Arrow cursor — SVG tip is at (0,0) so it aligns with the hotspot */
    <div
      ref={arrowRef}
      aria-hidden
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        pointerEvents: "none",
        zIndex: 9999,
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s",
        willChange: "transform",
        filter: "drop-shadow(0 0 6px var(--accent))",
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Classic arrow with tip at (1,1) */}
        <path
          d="M1 1L9 21L12.5 13L21 9.5L1 1Z"
          fill="var(--accent)"
          stroke="var(--background)"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
