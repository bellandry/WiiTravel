"use client";

import { useEffect, useRef, useState } from "react";

interface UseStepTransitionProps {
  totalSteps: number;
  duration: number;
  onComplete?: () => void;
}

export function useStepTransition({
  totalSteps,
  duration,
  onComplete,
}: UseStepTransitionProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressInterval = useRef<NodeJS.Timeout>();
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentStep((current) => {
            const next = current < totalSteps - 1 ? current + 1 : 0;
            onComplete?.();
            return next;
          });
          return 0;
        }
        return prev + 1;
      });
    };

    if (!isPaused) {
      progressInterval.current = setInterval(updateProgress, duration / 100);
    }

    return () => {
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, [currentStep, duration, totalSteps, isPaused, onComplete]);

  const pause = () => {
    setIsPaused(true);
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }
  };

  const resume = () => {
    setIsPaused(false);
  };

  return {
    currentStep,
    progress,
    pause,
    resume,
    isPaused,
  };
}
