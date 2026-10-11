"use client";

import { useEffect, useRef, useState } from "react";

export function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) return; // already on screen: no hide/show dance
    setShown(false);
    let done = false;
    const show = () => {
      if (done) return;
      done = true;
      setShown(true);
      io.disconnect();
      window.clearTimeout(timer);
    };
    const io = new IntersectionObserver(([entry]) => entry.isIntersecting && show(), { rootMargin: "0px 0px -8% 0px" });
    io.observe(el);
    const timer = window.setTimeout(show, 4000); // never leave content hidden
    return () => {
      io.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${shown ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
