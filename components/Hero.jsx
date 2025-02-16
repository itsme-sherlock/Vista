"use client";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const text = [
  "Elevating Your", // First line
  "Real Estate",    // Second line
  "Experience",     // Third line
];

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const padding = useTransform(scrollYProgress, [0, 1], ['80px', '0px']);
  

  return (
    <div ref={ref} className="relative w-full h-[120vh] -z-10">
      {/* Background Image Animation */}
      <div className=" w-full h-full">
        <motion.img
          initial={{ y: "100%", opacity: 0, scale: 0.1 }}
          animate={{ y: "0%", opacity: 0.7, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          src='/hero.jpeg'
          alt="hero"
          style={{ paddingLeft: padding, paddingRight: padding }}
          className="fixed opacity-70 object-cover"
        />
        
        {/* Animated Text with Line Breaks */}
        <motion.div style={{ paddingLeft: padding, paddingRight: padding }} className="absolute text-8xl drop-shadow-2xl top-40 leading-tight">
          {text.map((line, lineIndex) => (
            <div key={lineIndex} className="flex">
              {line.split("").map((char, charIndex) => (
                <motion.span
                  key={charIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.5 +(lineIndex * 10 + charIndex) * 0.05 }} // Stagger each letter
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char} {/* Preserve spaces */}
                </motion.span>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
