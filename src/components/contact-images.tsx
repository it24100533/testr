"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const IMAGES = [
  "/koo1.png",
  "/koo2.png",
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
      className="mx-auto mt-12 w-full max-w-4xl px-4 min-w-0 overflow-x-hidden"
    >
      <div className="grid grid-cols-2 gap-4 w-full min-w-0">
        {IMAGES.map((src, idx) => (
          <motion.div
            key={idx}
            variants={item}
            className="group relative w-full min-w-0"
          >
            <motion.div
              whileHover={{ scale: 1.03, y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="overflow-hidden rounded-2xl border border-border/60 bg-muted/30 shadow-lg ring-1 ring-black/5 transition-shadow duration-300 group-hover:shadow-xl group-hover:ring-primary/20 dark:ring-white/5 dark:group-hover:ring-primary/30 aspect-video"
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
