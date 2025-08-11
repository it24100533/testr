"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { useRef } from "react";
import { useInView, MarginType } from "react-intersection-observer";

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
  inViewMargin?: MarginType;  // Use the correct MarginType from the lib
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
  inViewMargin = "-50px", // this string matches MarginType
  blur = "6px",
}: BlurFadeProps) => {
  const ref = useRef(null);
  // Destructure inViewResult from useInView (it returns an object)
  const { ref: inViewRef, inView: inViewResult } = useInView({
    triggerOnce: true,
    rootMargin: inViewMargin, // rootMargin is the correct property name
  });

  // Combine refs so both work:
  // 1) local ref for other uses
  // 2) ref from useInView to track visibility
  // (optional, depending on your need)
  // You can assign inViewRef to ref.current or vice versa, or use a callback ref if needed
  // For simplicity, we assign inViewRef to the element directly below

  const isInView = !inView || inViewResult;

  // Default variants if none provided
  const defaultVariants: Variants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: 0, opacity: 1, filter: "blur(0px)" },
  };

  const motionVariants = variant || defaultVariants;

  return (
    <AnimatePresence>
      <motion.div
        ref={inViewRef} // attach the useInView ref here
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