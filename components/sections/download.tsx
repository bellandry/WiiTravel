"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SiAppstore, SiGoogleplay } from "react-icons/si";
import { Button } from "../ui/button";

export function Download() {
  return (
    <section id="download" className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Téléchargez l&apos;application WiiTravel dès maintenant
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Rejoignez des milliers d&apos;utilisateurs et rendez vos
              réservations plus faciles que jamais.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 py-6 bg-white text-primary hover:bg-gray-100"
              >
                <SiAppstore size={20} />
                App Store
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 py-6 bg-white text-primary hover:bg-gray-100"
              >
                <SiGoogleplay size={20} />
                Play Store
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/assets/download.png"
                width={800}
                height={600}
                alt="CameroonBus App Screenshots"
                className="rounded-xl md:rounded-2xl shadow-xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
