"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";

interface StepCardProps {
  title: string;
  description: string;
  image: string;
  isActive: boolean;
  progress: number;
}

export function StepCard({
  title,
  description,
  image,
  isActive,
  progress,
}: StepCardProps) {
  return (
    <motion.div
      className={cn(
        "relative w-[300px] flex-shrink-0 transition-all duration-500",
        isActive ? "opacity-100 scale-100" : "opacity-50 scale-95"
      )}
      animate={{ x: isActive ? 0 : 20 }}
    >
      <div className="relative bg-white/80 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
          <Image src={image} alt={title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>

        {isActive && (
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
    </motion.div>
  );
}
