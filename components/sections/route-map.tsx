"use client";

import { motion } from "framer-motion";

export function RouteMap() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="absolute inset-0 map-gradient" />
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nos zones de <span className="text-gradient">Couverture</span>
          </h2>
          <p className="text-md md:text-xl text-gray-600">
            Nous couvrons la majorité des villes du pays
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-[16/9] bg-white rounded-lg md:rounded-xl shadow-xl overflow-hidden"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4047881.321866014!2d9.237305544797055!3d7.369321324115947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10613753703e0f21%3A0x2b03c44599829b53!2sCameroon!5e0!3m2!1sen!2sus!4v1645754558774!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
