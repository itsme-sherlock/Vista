"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const CircleToFullscreen = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Scale image from its original size to cover the full viewport
  const scale = useTransform(scrollYProgress, [0, 1], [1, 20]);
  // Transition from circle (50% border-radius) to fullscreen (0%)
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["50%", "0%"]);

  return (
    <div ref={ref} className="h-[200vh] flex items-center justify-center">
      <motion.div
        style={{ scale, borderRadius }}
        className="w-40 h-40 bg-blue-500 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};

export default CircleToFullscreen;
