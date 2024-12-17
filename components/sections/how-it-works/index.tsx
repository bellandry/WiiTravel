"use client";

import { steps } from "@/constants";
import { useStepTransition } from "@/lib/hooks/use-step-transition";
import { motion } from "framer-motion";
import { useState } from "react";
import { StepContent } from "./step-content";
import { StepIndicators } from "./step-indicators";

const STEP_DURATION = 5000; // 5 seconds per step

export function HowItWorks() {
  const [slideDirection, setSlideDirection] = useState(1);

  const { currentStep, progress, pause, resume } = useStepTransition({
    totalSteps: steps.length,
    duration: STEP_DURATION,
    onComplete: () => setSlideDirection(1),
  });

  const nextStep = currentStep <= steps.length - 2 ? currentStep + 1 : 0;
  const prevStep = nextStep - 2 >= 0 ? nextStep - 2 : steps.length - 2;

  return (
    <section id="howitworks" className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comment ça <span className="text-gradient">Marche</span>?
          </h2>
          <p className="text-md md:text-lg text-gray-600">
            Utilisez WiiTravel en {steps.length} étapes simples
          </p>
        </motion.div>

        <div className="relative" onMouseEnter={pause} onMouseLeave={resume}>
          <div className="relative overflow-hidden flex items-center pb-6">
            <div className="hidden md:block absolute w-1/2 -left-1/2 translate-x-1/2">
              <StepContent
                key={currentStep}
                step={steps[prevStep]}
                progress={progress}
                direction={slideDirection}
              />
            </div>
            <div className="w-full">
              <StepContent
                key={currentStep}
                step={steps[currentStep]}
                progress={progress}
                direction={slideDirection}
                display={true}
              />
            </div>
            <div className="hidden md:block absolute w-1/2 left-1/2 translate-x-1/2">
              <StepContent
                key={currentStep}
                step={steps[nextStep]}
                progress={progress}
                direction={slideDirection}
              />
            </div>
          </div>

          <StepIndicators steps={steps.length} currentStep={currentStep} />
        </div>
      </div>
    </section>
  );
}
