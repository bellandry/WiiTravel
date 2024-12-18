"use client";

import { partners } from "@/constants";
import { motion } from "framer-motion";
import Image from "next/image";

export function Partners() {
  return (
    <section id="partners" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nos <span className="text-gradient">Partenaires</span> de confiance
          </h2>
          <p className="text-md md:text-xl text-gray-600">
            Nous travaillons avec les meilleures compagnies au Cameroun
          </p>
        </motion.div>

        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <div className="flex flex-nowrap items-center animate-infinite-scroll py-4">
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={`${partner.name}-${index}`}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-center mx-8 w-40"
              >
                <div className="p-6 rounded-lg hover:shadow-lg transition-shadow w-full py-4">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={150}
                    height={80}
                    className="w-full h-auto object-contain rounded-xl"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
