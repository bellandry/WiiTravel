"use client";

import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  delay?: number;
  className?: string;
  block?: React.ReactNode;
}

export function TextReveal({
  text,
  delay = 0,
  className,
  block,
}: TextRevealProps) {
  const words = text.split(" ");

  return (
    <span className="inline-flex flex-wrap gap-x-2">
      {words.map((word, i) => (
        <motion.span
          key={i}
          className={`inline-block overflow-hidden ${className}`}
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.1,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {word}
        </motion.span>
      ))}
      {block}
    </span>
  );
}
