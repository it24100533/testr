"use client";

import { motion, Variants } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface BlurFadeProps {
  children: React.ReactNode;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  delay?: number;
  yOffset?: number;
  inView?: boolean;
  inViewMargin?: string;
  blur?: string;
}

const BlurFade = ({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  inView = false,
  inViewMargin = "-50px",
  blur = "6px",
}: BlurFadeProps) => {
  const { ref: inViewRef, inView: inViewResult } = useInView({
    triggerOnce: true,
    rootMargin: inViewMargin,
  });

  const isInView = !inView || inViewResult;

  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  };

  const motionVariants = variant || defaultVariants;

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    setPrefersReducedMotion(window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  return (
    <motion.div
      ref={inViewRef}
      className={className}
      variants={motionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration: prefersReducedMotion ? 0.1 : duration,
        delay: prefersReducedMotion ? 0 : delay,
        type: "spring",
        stiffness: 100,
        damping: 30,
      }}
      style={isInView ? { willChange: "auto" } : { willChange: "transform, opacity, filter" }}
    >
      {children}
    </motion.div>
  );
};

export default BlurFade;