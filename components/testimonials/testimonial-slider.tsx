"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface TestimonialSliderProps {
  children: React.ReactNode;
}

export function TestimonialSlider({ children }: TestimonialSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.6, 1, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <motion.div
      ref={containerRef}
      style={{ x, opacity, scale }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {children}
    </motion.div>
  );
}
