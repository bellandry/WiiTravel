"use client";

import { motion } from "framer-motion";

interface StepIndicatorsProps {
  steps: number;
  currentStep: number;
}

export function StepIndicators({ steps, currentStep }: StepIndicatorsProps) {
  return (
    <div className="flex justify-center gap-2 mt-8">
      {[...Array(steps)].map((_, i) => (
        <motion.div
          key={i}
          className="relative h-2 w-2"
          animate={{
            scale: i === currentStep ? 1.2 : 1,
          }}
        >
          <div
            className={`absolute inset-0 rounded-full ${
              i === currentStep ? "bg-primary" : "bg-gray-300"
            }`}
          />
          {i === currentStep && (
            <motion.div
              className="absolute inset-0 rounded-full bg-primary"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ opacity: 0.3 }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}