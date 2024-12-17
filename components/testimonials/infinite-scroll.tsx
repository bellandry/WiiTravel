"use client";

import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTestimonials } from "../../lib/hooks/use-testimonials";
import { TestimonialCard } from "./testimonial-card";

interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  image: string;
}

export function InfiniteTestimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const isInView = useInView(containerRef);
  const [containerWidth, setContainerWidth] = useState(0);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useTestimonials();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -containerWidth / 2]),
    { damping: 15 }
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (isInView && !isPaused && hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isInView, isPaused, hasNextPage, isFetchingNextPage, fetchNextPage]);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  const allTestimonials: Testimonial[] =
    (data?.pages?.flat() as Testimonial[]) ?? [];

  return (
    <div ref={containerRef} className="overflow-x-hidden">
      <motion.div
        style={{
          x: isPaused
            ? 0
            : allTestimonials.length > 0
            ? -(
                allTestimonials.length *
                (containerWidth / allTestimonials.length)
              ) % containerWidth
            : 0,
          display: "flex",
          flexWrap: "nowrap",
        }}
        className="py-12"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {allTestimonials.map((testimonial: Testimonial, index: number) => (
          <TestimonialCard
            key={testimonial.id}
            name={testimonial.name}
            location={testimonial.location}
            text={testimonial.text}
            rating={testimonial.rating}
            image={testimonial.image}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
}
