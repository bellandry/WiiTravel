"use client";

import { motion } from "framer-motion";
import { Testimonial, useTestimonials } from "../../lib/hooks/use-testimonials";
import { ParallaxScroll } from "../animations/parallax-scroll";
import { TestimonialCard } from "../testimonials/testimonial-card";

export function Testimonials() {
  const { data } = useTestimonials() as { data?: { pages: Testimonial[][] } };

  return (
    <section id="testimonials" className="relative py-32 pb-32 overflow-hidden">
      {/* Apple-style gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-gray-50 to-white -z-10" />

      <ParallaxScroll className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16 relative"
          >
            {/* Apple-style subtle gradient text */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"
            >
              Que disent nos <span className="text-gradient">Utilisateurs</span>
              ?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-md md:text-xl text-gray-600 max-w-2xl mx-auto"
            >
              Rejoignez nos milliers de voyageurs satisfaits qui ont transformé
              leur façon de voyager.
            </motion.p>

            {/* Apple-style decorative elements */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-40 bg-primary/5 rounded-full blur-3xl" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data?.pages
              .flat()
              .map((testimonial: Testimonial, index: number) => (
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
          </div>

          {/* Stats section with Apple-style design */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-20 flex justify-center items-center gap-8 flex-wrap mb-32"
          >
            <div className="px-8 py-4 bg-white/50 backdrop-blur-lg rounded-2xl border border-white/20 shadow-lg">
              <p className="text-4xl font-bold text-gray-900 mb-1 text-gradient">
                4.8/5
              </p>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div className="px-8 py-4 bg-white/50 backdrop-blur-lg rounded-2xl border border-white/20 shadow-lg">
              <p className="text-4xl font-bold text-gray-900 mb-1 text-gradient">
                2,000+
              </p>
              <p className="text-gray-600">Happy Users</p>
            </div>
          </motion.div>
        </div>
      </ParallaxScroll>
    </section>
  );
}
