"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function FloatingElements() {
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const newPositions = [...Array(20)].map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    }));
    setPositions(newPositions);

    const interval = setInterval(() => {
      setPositions((prevPositions) =>
        prevPositions.map((pos) => ({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
        }))
      );
    }, 20000); // Update positions every 20 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {positions.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary/10"
          initial={pos}
          animate={{
            x: pos.x,
            y: pos.y,
          }}
          transition={{
            duration: 20, // Each animation loop takes 20 seconds
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
