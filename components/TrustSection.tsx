"use client";

import { motion, Variants } from "framer-motion";
import { Zap, Smartphone, Target, Layers } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Fast & Modern Websites",
    description: "Blazing-fast load times with cutting-edge tech that keeps visitors engaged and reduces bounce rates.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Every pixel optimized for mobile — where 70%+ of your traffic arrives from.",
  },
  {
    icon: Target,
    title: "Conversion-Focused",
    description: "Every design decision is made with one goal: turning visitors into paying clients.",
  },
  {
    icon: Layers,
    title: "Complete Growth Systems",
    description: "Website, automation, and SEO — everything you need to grow, delivered together.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function TrustSection() {
  return (
    <section className="section-pad relative overflow-hidden bg-[#090d16]">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-3 block">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            Why Businesses Choose{" "}
            <span className="gradient-accent-text">Genie9.dev</span>
          </h2>
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            We don&apos;t just build pretty websites. We build digital assets that work hard for your business — 24/7.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {values.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                className="glass-card rounded-2xl p-6 flex flex-col gap-4 border border-white/6"
              >
                <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
