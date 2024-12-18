"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Download, Star } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { Tilt3D } from "../animations/3d-tilt";
import { FadeIn } from "../animations/fade-in";
import { TextReveal } from "../animations/text-reveal";
import { Button } from "../ui/button";
import { Magnetic } from "../ui/magnetic";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.section
      ref={containerRef}
      style={{ y, opacity }}
      className="min-h-screen pt-32 pb-16 overflow-hidden items-center flex"
    >
      <div className="absolute inset-0 hero-gradient -z-10" />
      <div className="absolute inset-0 noise-bg -z-10" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <FadeIn>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                <TextReveal text="Voyagez sereinnement à travers le" />
                <span className="text-gradient">
                  <TextReveal text="Cameroun" delay={0.5} />
                </span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.8}>
              <p className="text-md md:text-lg text-gray-600 mb-8">
                Achetez et réservez instantannément vos tickets de bus, comparer
                les prix et voyagez sereinnement avec notre application tout en
                un WiiTravel.
              </p>
            </FadeIn>

            <FadeIn delay={1}>
              <div className="flex flex-wrap gap-4 mb-8">
                <Magnetic>
                  <a href="#download">
                    <Button
                      size="lg"
                      className="gap-2 relative overflow-hidden group"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                      <span className="z-10 flex gap-2 items-center text-white">
                        <Download size={20} />
                        Obtenir l&apos;application
                      </span>
                    </Button>
                  </a>
                </Magnetic>

                <motion.div
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                >
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.4 + i * 0.1 }}
                      >
                        <Star
                          size={20}
                          className="text-yellow-400 fill-yellow-400"
                        />
                      </motion.div>
                    ))}
                  </div>
                  <span className="text-gray-600">
                    4.8/5 from 2,000+ reviews
                  </span>
                </motion.div>
              </div>
            </FadeIn>
          </div>

          <Tilt3D className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                delay: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full filter blur-3xl" />
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 2, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative transform preserve-3d"
                style={{ perspective: 1000 }}
              >
                <Image
                  src="/assets/hero-image.webp"
                  width={900}
                  height={800}
                  priority
                  alt="WiiTravel App Interface"
                  className="rounded-lg drop-shadow-2xl"
                />
                <div className="absolute inset-0  rounded-lg" />
              </motion.div>
            </motion.div>
          </Tilt3D>
        </div>
      </div>
    </motion.section>
  );
}
