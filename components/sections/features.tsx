"use client";

import { features } from "@/constants";
import { motion } from "framer-motion";

export function Features() {
  return (
    <section id="features" className="bg-gray-50 py-48">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 50 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pourquoi choisir <span className="text-gradient">WiiTravel</span>?
          </h2>
          <p className="text-md md:text-xl text-gray-600">
            Expérimentez le moyen le plus facile de réserver un billet de voyage
            au Cameroun
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow z-10"
            >
              <feature.icon className="w-8 h-8 md:w-12 md:h-12 text-primary mb-4" />
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
