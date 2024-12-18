"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface StepContentProps {
  step: {
    title: string;
    description: string;
    image: string;
    step: number;
  };
  progress: number;
  direction: number;
  display?: boolean;
}

export function StepContent({
  step,
  progress,
  direction,
  display,
}: StepContentProps) {
  if (!step || !step.image) {
    return null; // ou un composant de fallback
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 100 * direction }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 * direction }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="w-full max-w-2xl mx-auto"
    >
      <div className="relative bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative aspect-video mb-6 rounded-lg overflow-hidden">
          <Image
            src={step.image}
            alt={step.title}
            fill
            className="object-cover z-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
        </div>

        <div className="p-2">
          <span className="text-6xl absolute left-2 text-primary opacity-50 font-bold">
            {step.step}
          </span>
          <motion.h3
            className="text-xl md:text-2xl font-semibold mb-3 ml-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {step.title}
          </motion.h3>

          <motion.p
            className="text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {step.description}
          </motion.p>

          {display && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
              />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
