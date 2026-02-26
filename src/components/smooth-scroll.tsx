"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Initialize Lenis with optimal settings for premium feel
    const lenis = new Lenis({
      duration: prefersReducedMotion ? 0.5 : 1.2, // Slower scrolling for premium feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing curve
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1,
    });

    // Handle reduced motion preference changes
    const motionMediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleMotionChange = (e: MediaQueryListEvent) => {
      // Reinitialize with new duration if user changes preference
      lenis.destroy();
      const newLenis = new Lenis({
        duration: e.matches ? 0.5 : 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1,
      });

      function raf(time: number) {
        newLenis.raf(time);
        rafId = requestAnimationFrame(raf);
      }
      rafId = requestAnimationFrame(raf);
    };

    motionMediaQuery.addEventListener("change", handleMotionChange);

    // RAF loop for Lenis
    let rafId = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    });

    // Cleanup
    return () => {
      motionMediaQuery.removeEventListener("change", handleMotionChange);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
