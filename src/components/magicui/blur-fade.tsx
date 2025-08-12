"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { useRef } from "react";
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
  const ref = useRef(null);
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

  return (
    <AnimatePresence>
      <motion.div
        ref={inViewRef}
        className={className}
        variants={motionVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration, delay }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default BlurFade;