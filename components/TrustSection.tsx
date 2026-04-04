"use client";

import { motion, Variants } from "framer-motion";
import { Zap, Smartphone, Target, Layers } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Fast & Modern Websites",
    description: "Blazing-fast load times with cutting-edge tech that keeps visitors engaged.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Every pixel optimized for mobile — where most of your traffic comes from.",
  },
  {
    icon: Target,
    title: "Conversion-Focused Approach",
    description: "Every design decision is made with one goal: turning visitors into clients.",
  },
  {
    icon: Layers,
    title: "Complete Growth Solutions",
    description: "Website, content, and social — everything you need to grow, in one place.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function TrustSection() {
  return (
    <section className="section-pad relative overflow-hidden bg-[#0d0d1a]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Why Businesses Choose{" "}
            <span className="gradient-text">Genie9.dev</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            I don&apos;t just build pretty websites. I build digital assets that
            work hard for your business — 24/7.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="glass-card rounded-2xl p-6 flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
