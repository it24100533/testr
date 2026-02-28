"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const IMAGES = [
  "/koo1.png",
  "/koo2.png",
  "/koo3.jpg",
  "/koo4.jpg",
  "/koo5.jpg",
  "/koo6a.jpg"
];

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08 * i,
    },
  }),
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

export function ContactImages() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="mx-auto mt-4 sm:mt-12 w-full max-w-4xl px-4 min-w-0 overflow-x-hidden"
    >
      <div className="grid grid-cols-2 gap-2 sm:gap-4 w-full min-w-0">
        {IMAGES.map((src, idx) => (
          <motion.div
            key={idx}
            variants={item}
            className="group relative w-full min-w-0"
          >
            <motion.div
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="overflow-hidden rounded-[var(--radius)] border border-[var(--glass-border)] bg-[var(--glass-bg)] shadow-[var(--glass-shadow)] transition-all duration-smooth group-hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] group-hover:-translate-y-1 aspect-video"
            >
              <img
                src={src}
                alt={`Ravindu Danthanarayana contact screenshot ${idx + 1}`}
                width={640}
                height={360}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
