"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 260, damping: 24, mass: 0.6 });
  const ry = useSpring(y, { stiffness: 260, damping: 24, mass: 0.6 });
  const [label, setLabel] = useState<string | null>(null);
  const [enabled, setEnabled] = useState(false);
  const target = useRef<Element | null>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)").matches;
    if (!fine) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(true);
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = (e.target as Element | null)?.closest("[data-cursor], a, button") ?? null;
      if (el !== target.current) {
        target.current = el;
        setLabel(el ? (el.getAttribute("data-cursor") ?? "") : null);
      }
    };
    const leave = () => setLabel(null);
    window.addEventListener("mousemove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  if (!enabled) return null;
  return (
    <>
      <motion.div className="cursor-dot" style={{ x, y }} aria-hidden="true" />
      <motion.div className={`cursor-ring ${label !== null ? "is-hover" : ""}`} style={{ x: rx, y: ry }} aria-hidden="true">
        {label}
      </motion.div>
    </>
  );
}
