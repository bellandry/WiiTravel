"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  location: string;
  text: string;
  rating: number;
  image: string;
  index: number;
}

export function TestimonialCard({
  name,
  location,
  text,
  rating,
  image,
  index,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative group"
      style={{ perspective: 1000 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500" />

      <motion.div
        className="relative bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-white/20 shadow-lg overflow-hidden"
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          <div className="flex mb-4">
            {[...Array(rating)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * i }}
              >
                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              </motion.div>
            ))}
          </div>

          <p className="text-gray-600 mb-6 leading-relaxed">{text}</p>

          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12">
              <Image
                src={image}
                alt={name}
                fill
                className="rounded-full object-cover w-full h-full"
              />
              <div className="absolute inset-0 rounded-full border border-primary/20" />
            </div>
            <div>
              <p className="font-semibold text-gray-800">{name}</p>
              <p className="text-gray-500 text-sm">{location}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
